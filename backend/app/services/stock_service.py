import yfinance as yf


def get_stock_data(ticker: str):
    try:
        stock = yf.Ticker(ticker)
        info = stock.info
        return {
            "ticker": ticker.upper(),
            "company_name": info.get("longName"),
            "current_price": info.get("currentPrice"),
            "previous_close": info.get("previousClose"),
            "market_cap": info.get("marketCap"),
            "volume": info.get("volume"),
            "pe_ratio": info.get("trailingPE"),
            "eps": info.get("trailingEps"),
            "week_52_high": info.get("fiftyTwoWeekHigh"),
            "week_52_low": info.get("fiftyTwoWeekLow"),
            }
    except Exception:
        return None