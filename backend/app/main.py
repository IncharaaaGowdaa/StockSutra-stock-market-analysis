from fastapi import FastAPI

from app.routers.stock import router as stock_router
from app.routers.history import router as history_router
from app.routers.analysis import router as analysis_router

app = FastAPI(
    title="StockSutra API",
    version="1.0.0"
)

app.include_router(stock_router)
app.include_router(history_router)
app.include_router(analysis_router)


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