# app/core/config.py
from typing import Any, List
from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import field_validator
import json

class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    CORS_ORIGINS: List[str] = []

    @field_validator("CORS_ORIGINS", mode="before")
    @classmethod
    def parse_cors(cls, v: Any) -> List[str]:
        if v is None:
            return []
        if isinstance(v, (list, tuple, set)):
            return list(v)
        if isinstance(v, str):
            s = v.strip()
            if not s:
                return []
            # JSON list?
            if s.startswith("["):
                try:
                    data = json.loads(s)
                    return [str(x).strip() for x in data if str(x).strip()]
                except Exception:
                    pass
            # Fallback: CSV
            return [part.strip() for part in s.split(",") if part.strip()]
        return []
        
settings = Settings()
