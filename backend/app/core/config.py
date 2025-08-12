from typing import List, Union
from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import Field, field_validator
import json


class Settings(BaseSettings):
    APP_NAME: str = "Lead/Patient API"
    APP_ENV: str = "development"
    DATABASE_URL: str = "sqlite:///./dev.db"
    CORS_ORIGINS: List[str] = Field(default_factory=list)

    model_config = SettingsConfigDict(env_file=".env", case_sensitive=False)

    @field_validator("CORS_ORIGINS", mode="before")
    @classmethod
    def _parse_cors(cls, v: Union[str, List[str], None]) -> List[str]:
        if v is None:
            return []
        if isinstance(v, list):
            return [s for s in v if isinstance(s, str) and s.strip()]
        if isinstance(v, str):
            s = v.strip()
            if not s:
                return []
            try:  # JSON array
                j = json.loads(s)
                if isinstance(j, list):
                    return [str(x).strip() for x in j if str(x).strip()]
            except Exception:
                pass
            # Fallback: comma list
            return [part.strip() for part in s.split(",") if part.strip()]
        return []


settings = Settings()
