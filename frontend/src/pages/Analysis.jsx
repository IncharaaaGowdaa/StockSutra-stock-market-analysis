import { useState } from "react";

import SearchBar from "../components/SearchBar";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import AIInsightCard from "../components/AIInsightCard";
import TechnicalAnalysisCard from "../components/TechnicalAnalysisCard";
import SentimentCard from "../components/SentimentCard";
import NewsList from "../components/NewsList";

import {
  getAIAnalysis,
  getTechnicalAnalysis,
  getNews,
} from "../api/stockApi";

function Analysis() {
  const [ai, setAI] = useState(null);
  const [technicals, setTechnicals] = useState(null);
  const [news, setNews] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (ticker) => {
    try {
      setLoading(true);
      setError("");

      const [
        aiRes,
        technicalRes,
        newsRes,
      ] = await Promise.all([
        getAIAnalysis(ticker),
        getTechnicalAnalysis(ticker),
        getNews(ticker),
      ]);

      setAI(aiRes.data);
      setTechnicals(technicalRes.data);
      setNews(newsRes.data);

    } catch (err) {
      setError(
        err.response?.data?.detail ||
        "Failed to fetch analysis."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-5xl font-bold mb-3">
          Stock Analysis
        </h1>

        <p className="text-slate-400">
          AI, Technical & Sentiment Analysis
        </p>
      </div>

      <SearchBar onSearch={handleSearch} />

      {loading && <LoadingSpinner />}

      {error && (
        <ErrorMessage message={error} />
      )}

      {ai && (
        <AIInsightCard ai={ai} />
      )}

      {technicals && (
        <TechnicalAnalysisCard
          data={technicals}/>
      )}
      {news && (
        <SentimentCard data={news} />
        )}
      {news && (
        <NewsList articles={news.articles} />
      )}

    </div>
  );
}

export default Analysis;