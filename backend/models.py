from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func

from .database import Base


class Lead(Base):
    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    phone = Column(String, nullable=False)
    message = Column(String, nullable=False)
    status = Column(String, nullable=False, default="new")
    created_at = Column(DateTime(timezone=True), server_default=func.now())
