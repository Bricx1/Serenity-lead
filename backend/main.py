from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Lead(BaseModel):
    name: str
    email: str
    phone: str
    preferredContact: str
    treatmentType: str
    insuranceType: str
    urgency: str
    message: str
    consent: bool

@app.post("/api/leads")
async def create_lead(lead: Lead):
    """Receive a lead submission and echo it back."""
    return {"status": "received", "lead": lead}

@app.get("/")
async def root():
    return {"message": "Serenity API"}
