import csv
import io
import json
import logging
import time
from datetime import datetime, timedelta
from typing import List, Optional

from fastapi import Depends, FastAPI, HTTPException, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import or_
from sqlalchemy.orm import Session

from .auth import create_access_token, create_refresh_token, hash_password, verify_password
from .config import settings
from .database import Base, engine, get_db
from .models import Lead
from .schemas import LeadCreate, LeadOut, LeadStatusUpdate

logging.basicConfig(level=logging.INFO, format="%(message)s")
logger = logging.getLogger("serenity")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS or ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.middleware("http")
async def log_requests(request: Request, call_next):
    start = time.time()
    response = await call_next(request)
    duration = time.time() - start
    logger.info(json.dumps({
        "method": request.method,
        "path": request.url.path,
        "status_code": response.status_code,
        "duration": duration,
    }))
    return response


Base.metadata.create_all(bind=engine)


@app.get("/health")
async def health():
    return {"status": "ok"}


rate_limit_store: dict[str, List[datetime]] = {}


def check_rate_limit(ip: str, limit: int = 5, per: int = 60) -> bool:
    now = datetime.utcnow()
    window_start = now - timedelta(seconds=per)
    timestamps = [t for t in rate_limit_store.get(ip, []) if t > window_start]
    rate_limit_store[ip] = timestamps
    if len(timestamps) >= limit:
        return False
    timestamps.append(now)
    rate_limit_store[ip] = timestamps
    return True


@app.post("/api/leads", response_model=LeadOut)
def create_lead(lead: LeadCreate, request: Request, db: Session = Depends(get_db)):
    ip = request.client.host
    if not check_rate_limit(ip):
        raise HTTPException(status_code=429, detail="Too many requests")
    db_lead = Lead(**lead.dict())
    db.add(db_lead)
    db.commit()
    db.refresh(db_lead)
    return db_lead


@app.get("/api/leads", response_model=List[LeadOut])
def list_leads(
    q: Optional[str] = None,
    status: Optional[str] = None,
    limit: int = 100,
    offset: int = 0,
    db: Session = Depends(get_db),
):
    query = db.query(Lead)
    if status:
        query = query.filter(Lead.status == status)
    if q:
        like = f"%{q}%"
        query = query.filter(
            or_(
                Lead.name.ilike(like),
                Lead.email.ilike(like),
                Lead.phone.ilike(like),
                Lead.message.ilike(like),
            )
        )
    leads = query.offset(offset).limit(limit).all()
    return leads


@app.patch("/api/leads/{lead_id}/status", response_model=LeadOut)
def update_status(lead_id: int, status_in: LeadStatusUpdate, db: Session = Depends(get_db)):
    lead = db.get(Lead, lead_id)
    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")
    lead.status = status_in.status
    db.commit()
    db.refresh(lead)
    return lead


@app.get("/api/leads/export.csv")
def export_leads(db: Session = Depends(get_db)):
    leads = db.query(Lead).all()
    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow(["id", "name", "email", "phone", "message", "status", "created_at"])
    for l in leads:
        writer.writerow([l.id, l.name, l.email, l.phone, l.message, l.status, l.created_at])
    response = Response(content=output.getvalue(), media_type="text/csv")
    response.headers["Content-Disposition"] = "attachment; filename=leads.csv"
    return response
