from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Lead(BaseModel):
    name: str
    email: str
    message: str | None = None


@app.post("/api/leads")
async def create_lead(lead: Lead):
    """Endpoint to receive lead data."""
    return {"message": "Lead received", "data": lead.dict()}
