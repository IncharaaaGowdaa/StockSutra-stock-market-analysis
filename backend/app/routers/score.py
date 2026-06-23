from fastapi import APIRouter, HTTPException

from app.services.score_service import get_investment_score

router = APIRouter(
    prefix="/api/score",
    tags=["Investment Score"]
)


@router.get("/{ticker}")
def score_stock(ticker: str):

    try:
        return get_investment_score(ticker)

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )