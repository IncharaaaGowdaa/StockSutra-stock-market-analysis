import yfinance as yf


def get_stock_history(ticker: str, period: str):
    stock = yf.Ticker(ticker)

    df = stock.history(period=period)

    history = []

    for date, row in df.iterrows():
        history.append(
            {
                "date": date.strftime("%Y-%m-%d"),
                "close": round(float(row["Close"]), 2)
            }
        )

    return {
        "ticker": ticker.upper(),
        "period": period,
        "history": history
    }