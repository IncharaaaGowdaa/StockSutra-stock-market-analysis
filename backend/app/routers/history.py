from fastapi import APIRouter

from app.services.history_service import get_stock_history

router = APIRouter(
    prefix="/api/history",
    tags=["History"]
)


@router.get("/{ticker}")
def history(
    ticker: str,
    period: str = "1y"
):
    return get_stock_history(ticker, period)