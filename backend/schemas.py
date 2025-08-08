from datetime import datetime
from pydantic import BaseModel


class LeadBase(BaseModel):
    name: str
    email: str
    phone: str
    message: str


class LeadCreate(LeadBase):
    pass


class LeadOut(LeadBase):
    id: int
    status: str
    created_at: datetime

    class Config:
        orm_mode = True


class LeadStatusUpdate(BaseModel):
    status: str
