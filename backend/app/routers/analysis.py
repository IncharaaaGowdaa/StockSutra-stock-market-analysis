from fastapi import APIRouter, HTTPException

from app.services.indicator_service import get_stock_analysis
from app.schemas.analysis_schema import AnalysisResponse

router = APIRouter(
    prefix="/api/analyze",
    tags=["Analysis"]
)


@router.get("/{ticker}", response_model=AnalysisResponse)
def analyze_stock(ticker: str):

    data = get_stock_analysis(ticker)

    if not data:
        raise HTTPException(
            status_code=404,
            detail="Unable to analyze stock"
        )

    return data