from fastapi import APIRouter, HTTPException

from app.services.compare_service import compare_stocks
from app.schemas.compare_schema import CompareResponse

router = APIRouter(
    prefix="/api/compare",
    tags=["Compare"]
)


@router.get("/", response_model=CompareResponse)
def compare(ticker1: str, ticker2: str):

    try:
        return compare_stocks(ticker1, ticker2)

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )