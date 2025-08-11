from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import List
import os


class Settings(BaseSettings):
    APP_NAME: str = "Lead/Patient API"
    APP_ENV: str = "development"
    DATABASE_URL: str = "sqlite:///./dev.db"
    CORS_ORIGINS: List[str] = []
    model_config = SettingsConfigDict(env_file=".env", case_sensitive=False)

    def __init__(self, **values):
        super().__init__(**values)
        origins = os.getenv("CORS_ORIGINS", "")
        if origins:
            self.CORS_ORIGINS = [o.strip() for o in origins.split(",") if o.strip()]


settings = Settings()

