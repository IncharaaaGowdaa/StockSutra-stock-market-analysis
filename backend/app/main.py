from fastapi import FastAPI

from app.routers.stock import router as stock_router
from app.routers.history import router as history_router
from app.routers.analysis import router as analysis_router
from app.routers.news import router as news_router
from app.routers.ai import router as ai_router
from app.routers.compare import router as compare_router
from app.routers.score import router as score_router

app = FastAPI(
    title="StockSutra API",
    version="1.0.0"
)

app.include_router(stock_router)
app.include_router(history_router)
app.include_router(analysis_router)
app.include_router(news_router)
app.include_router(ai_router)
app.include_router(compare_router)
app.include_router(score_router)
@app.get("/")
def root():
    return {
        "message": "Welcome to StockSutra API"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }