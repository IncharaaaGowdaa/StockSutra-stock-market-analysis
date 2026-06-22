from fastapi import APIRouter, HTTPException

from app.services.stock_service import get_stock_data
from app.schemas.stock_schema import StockResponse

router = APIRouter(
    prefix="/api/stock",
    tags=["Stock"]
)


@router.get("/{ticker}", response_model=StockResponse)
def get_stock(ticker: str):

    try:
        data = get_stock_data(ticker)

        if not data["company_name"]:
            raise HTTPException(
                status_code=404,
                detail="Ticker not found"
            )

        return data

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )