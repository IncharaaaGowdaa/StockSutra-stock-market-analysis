import yfinance as yf
import pandas as pd


def calculate_rsi(data, period=14):
    delta = data.diff()

    gain = delta.where(delta > 0, 0)
    loss = -delta.where(delta < 0, 0)

    avg_gain = gain.rolling(period).mean()
    avg_loss = loss.rolling(period).mean()

    rs = avg_gain / avg_loss

    rsi = 100 - (100 / (1 + rs))

    return round(float(rsi.iloc[-1]), 2)


def get_stock_analysis(ticker: str):
    stock = yf.Ticker(ticker)

    history = stock.history(period="1y")

    if history.empty:
        return None

    close_prices = history["Close"]

    current_price = round(float(close_prices.iloc[-1]), 2)

    ma50 = round(float(close_prices.rolling(50).mean().iloc[-1]), 2)

    ma200 = round(float(close_prices.rolling(200).mean().iloc[-1]), 2)

    rsi = calculate_rsi(close_prices)

    if current_price > ma50 > ma200:
        trend = "Bullish"

    elif current_price < ma50 < ma200:
        trend = "Bearish"

    else:
        trend = "Neutral"

    return {
        "ticker": ticker.upper(),
        "current_price": current_price,
        "rsi": rsi,
        "ma50": ma50,
        "ma200": ma200,
        "trend": trend
    }