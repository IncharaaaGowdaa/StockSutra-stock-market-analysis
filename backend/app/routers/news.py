from fastapi import APIRouter, HTTPException

from app.services.news_service import get_stock_news

router = APIRouter(
    prefix="/api/news",
    tags=["News"]
)


@router.get("/{ticker}")
def news(ticker: str):

    try:
        return get_stock_news(ticker)

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )