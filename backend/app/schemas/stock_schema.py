from pydantic import BaseModel


class StockResponse(BaseModel):
    ticker: str
    company_name: str
    current_price: float | None
    previous_close: float | None
    market_cap: int | None
    volume: int | None
    pe_ratio: float | None
    eps: float | None
    week_52_high: float | None
    week_52_low: float | None