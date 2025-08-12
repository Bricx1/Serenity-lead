from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.deps import get_db
from app.models.lead import Lead
from app.schemas.lead import LeadCreate, LeadOut, LeadUpdate


router = APIRouter(prefix="/leads", tags=["leads"])


@router.get("/", response_model=List[LeadOut])
def list_leads(db: Session = Depends(get_db)):
    return db.query(Lead).order_by(Lead.id.desc()).all()


@router.post("/", response_model=LeadOut, status_code=201)
def create_lead(payload: LeadCreate, db: Session = Depends(get_db)):
    lead = Lead(**payload.model_dump())
    db.add(lead)
    db.commit()
    db.refresh(lead)
    return lead


@router.get("/{lead_id}", response_model=LeadOut)
def get_lead(lead_id: int, db: Session = Depends(get_db)):
    lead = db.get(Lead, lead_id)
    if not lead:
        raise HTTPException(404, "Lead not found")
    return lead


@router.patch("/{lead_id}", response_model=LeadOut)
def update_lead(lead_id: int, payload: LeadUpdate, db: Session = Depends(get_db)):
    lead = db.get(Lead, lead_id)
    if not lead:
        raise HTTPException(404, "Lead not found")
    for k, v in payload.model_dump(exclude_unset=True).items():
        setattr(lead, k, v)
    db.add(lead)
    db.commit()
    db.refresh(lead)
    return lead


@router.delete("/{lead_id}", status_code=204)
def delete_lead(lead_id: int, db: Session = Depends(get_db)):
    lead = db.get(Lead, lead_id)
    if not lead:
        raise HTTPException(404, "Lead not found")
    db.delete(lead)
    db.commit()
    return

