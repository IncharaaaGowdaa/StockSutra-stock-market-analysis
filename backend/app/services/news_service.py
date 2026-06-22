import yfinance as yf

from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer


def get_stock_news(ticker: str):

    stock = yf.Ticker(ticker)

    news_items = stock.news
    if not news_items:
        return {
            "ticker": ticker.upper(),
            "overall_sentiment": "Neutral",
            "average_score": 0,
            "articles": []
            }

    analyzer = SentimentIntensityAnalyzer()

    articles = []

    scores = []

    for item in news_items[:10]:

        for item in news_items[:10]:
            content = item.get("content", {})
            title = content.get("title", "")
            publisher = (
                content.get("provider", {})
                .get("displayName", "Unknown")
            )
            
            if not title:
                continue
            
            sentiment_score = analyzer.polarity_scores(title)["compound"]
            scores.append(sentiment_score)
            
            if sentiment_score >= 0.05:
                sentiment = "Positive"
            elif sentiment_score <= -0.05:
                sentiment = "Negative"
            else:
                sentiment = "Neutral"
                
            articles.append(
                {
                    "title": title,
                    "publisher": publisher,
                    "sentiment": sentiment,
                    "score": round(sentiment_score, 2)
                }
            )

    average_score = round(sum(scores) / len(scores), 2) if scores else 0

    if average_score >= 0.05:
        overall = "Positive"

    elif average_score <= -0.05:
        overall = "Negative"

    else:
        overall = "Neutral"

    return {
        "ticker": ticker.upper(),
        "overall_sentiment": overall,
        "average_score": average_score,
        "articles": articles
    }