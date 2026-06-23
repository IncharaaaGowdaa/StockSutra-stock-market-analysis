import { useState } from "react";

import SearchBar from "../components/SearchBar";
import StockCard from "../components/StockCard";
import StatCard from "../components/StatCard";
import PriceChart from "../components/PriceChart";
import ScoreCard from "../components/ScoreCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

import { getStock, getHistory, getScore } from "../api/stockApi";

function Dashboard() {
  const [stock, setStock] = useState(null);
  const [history, setHistory] = useState(null);
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (ticker) => {
    try {
      setLoading(true);
      setError("");

      const [
        stockRes,
        historyRes,
        scoreRes,
    ] = await Promise.all([
        getStock(ticker),
        getHistory(ticker),
        getScore(ticker),
    ]);
    setStock(stockRes.data);
    setHistory(historyRes.data.history);
    setScore(scoreRes.data);

    } catch (err) {
        setError( err.response?.data?.detail ||
        "Failed to fetch stock data."
      );
}
 finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-bold mb-3">
          StockSutra
        </h1>

        <p className="text-slate-400">
          AI-Powered Stock Analysis Platform
        </p>
      </div>

      <SearchBar onSearch={handleSearch} />

      {loading && <LoadingSpinner />}

      {error && (
        <ErrorMessage message={error} />
      )}

      {stock && (
        <StockCard stock={stock} />
      )}
      {stock && (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

    <StatCard
      title="Market Cap"
      value={stock.market_cap.toLocaleString()}
    />

    <StatCard
      title="Volume"
      value={stock.volume.toLocaleString()}
    />

    <StatCard
      title="P/E Ratio"
      value={stock.pe_ratio.toFixed(2)}
    />

    <StatCard
      title="EPS"
      value={stock.eps}
    />

  </div>
)}
{history && (
  <PriceChart history={history} />
)}
{score && (
  <ScoreCard scoreData={score} />
)}
    </div>
  );
}

export default Dashboard;