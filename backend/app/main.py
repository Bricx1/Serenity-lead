# app/main.py
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings

origins = settings.CORS_ORIGINS or ["http://localhost:5173"]  # dev-safe fallback

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,  # keep True only if origins are explicit
    allow_methods=["*"],
    allow_headers=["*"],
)
