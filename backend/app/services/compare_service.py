from app.services.stock_service import get_stock_data
from app.services.indicator_service import get_stock_analysis


def compare_stocks(ticker1: str, ticker2: str):

    stock1 = get_stock_data(ticker1)
    stock2 = get_stock_data(ticker2)

    analysis1 = get_stock_analysis(ticker1)
    analysis2 = get_stock_analysis(ticker2)

    return {
        "ticker1": {
            "ticker": stock1["ticker"],
            "price": stock1["current_price"],
            "market_cap": stock1["market_cap"],
            "pe_ratio": stock1["pe_ratio"],
            "rsi": analysis1["rsi"],
            "trend": analysis1["trend"]
        },
        "ticker2": {
            "ticker": stock2["ticker"],
            "price": stock2["current_price"],
            "market_cap": stock2["market_cap"],
            "pe_ratio": stock2["pe_ratio"],
            "rsi": analysis2["rsi"],
            "trend": analysis2["trend"]
        }
    }