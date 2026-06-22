from pydantic import BaseModel


class AIAnalysisResponse(BaseModel):
    ticker: str
    summary: str
    risks: str
    opportunities: str
    investment_insight: str