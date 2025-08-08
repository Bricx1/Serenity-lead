from pydantic import BaseSettings, validator
from typing import List


class Settings(BaseSettings):
    SECRET_KEY: str
    DATABASE_URL: str = "sqlite:///./leads.db"
    CORS_ORIGINS: List[str] = []
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    REFRESH_TOKEN_EXPIRE_MINUTES: int = 60

    @validator("CORS_ORIGINS", pre=True)
    def split_origins(cls, v):  # noqa: D401
        if isinstance(v, str):
            return [i.strip() for i in v.split(",") if i.strip()]
        return v

    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()
