from fastapi import APIRouter
from .routes import leads


api_router = APIRouter()
api_router.include_router(leads.router)

