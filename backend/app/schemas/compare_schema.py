from pydantic import BaseModel


class ComparedStock(BaseModel):
    ticker: str
    price: float | None
    market_cap: int | None
    pe_ratio: float | None
    rsi: float | None
    trend: str


class CompareResponse(BaseModel):
    ticker1: ComparedStock
    ticker2: ComparedStock