from pydantic import BaseModel


class AnalysisResponse(BaseModel):
    ticker: str
    current_price: float
    rsi: float
    ma50: float
    ma200: float
    trend: str