import json

import google.generativeai as genai

from app.utils.config import GEMINI_API_KEY

from app.services.stock_service import get_stock_data
from app.services.indicator_service import get_stock_analysis
from app.services.news_service import get_stock_news


genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel("gemini-2.5-flash")


def generate_ai_analysis(ticker: str):

    stock_data = get_stock_data(ticker)

    technical_data = get_stock_analysis(ticker)

    news_data = get_stock_news(ticker)

    prompt = f"""
You are a financial analyst.

Analyze the following stock data.

Stock Metrics:
{stock_data}

Technical Indicators:
{technical_data}

News Sentiment:
Overall Sentiment: {news_data["overall_sentiment"]}
Average Score: {news_data["average_score"]}

Return ONLY valid JSON.

Rules:
- Each field maximum 2-3 sentences.
- Keep concise and investor-friendly.
- No markdown.
- No bullet points.

Format:

{{
    "summary": "...",
    "risks": "...",
    "opportunities": "...",
    "investment_insight": "..."
}}

Do not include markdown.
Do not include code fences.
"""

    response = model.generate_content(prompt)

    content = response.text.strip()

    content = content.replace("```json", "")
    content = content.replace("```", "")

    result = json.loads(content)

    return {
        "ticker": ticker.upper(),
        **result
    }