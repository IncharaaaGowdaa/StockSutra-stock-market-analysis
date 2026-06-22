from fastapi import APIRouter, HTTPException

from app.services.ai_service import generate_ai_analysis
from app.schemas.ai_schema import AIAnalysisResponse

router = APIRouter(
    prefix="/api/ai",
    tags=["AI Analysis"]
)


@router.get("/{ticker}", response_model=AIAnalysisResponse)
def ai_analysis(ticker: str):

    try:
        return generate_ai_analysis(ticker)

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )