from app.services.stock_service import get_stock_data
from app.services.indicator_service import get_stock_analysis
from app.services.news_service import get_stock_news


def get_investment_score(ticker: str):

    stock = get_stock_data(ticker)

    analysis = get_stock_analysis(ticker)

    news = get_stock_news(ticker)

    score = 0

    breakdown = {}

    # Trend

    if analysis["trend"] == "Bullish":
        trend_score = 25

    elif analysis["trend"] == "Neutral":
        trend_score = 15

    else:
        trend_score = 5

    score += trend_score

    breakdown["trend"] = trend_score

    # Sentiment

    sentiment = news["overall_sentiment"]

    if sentiment == "Positive":
        sentiment_score = 25

    elif sentiment == "Neutral":
        sentiment_score = 15

    else:
        sentiment_score = 5

    score += sentiment_score

    breakdown["sentiment"] = sentiment_score

    # RSI

    rsi = analysis["rsi"]

    if 40 <= rsi <= 70:
        rsi_score = 25

    elif 30 <= rsi < 40:
        rsi_score = 15

    elif 70 < rsi <= 80:
        rsi_score = 15

    else:
        rsi_score = 5

    score += rsi_score

    breakdown["technicals"] = rsi_score

    # PE Ratio

    pe = stock["pe_ratio"]

    if pe is None:
        pe_score = 15

    elif pe <= 20:
        pe_score = 25

    elif pe <= 35:
        pe_score = 20

    elif pe <= 50:
        pe_score = 10

    else:
        pe_score = 5

    score += pe_score

    breakdown["valuation"] = pe_score

    # Rating

    if score >= 80:
        rating = "Strong Buy"

    elif score >= 60:
        rating = "Buy"

    elif score >= 40:
        rating = "Hold"

    elif score >= 20:
        rating = "Weak"

    else:
        rating = "Avoid"

    return {
        "ticker": ticker.upper(),
        "score": score,
        "rating": rating,
        "breakdown": breakdown
    }