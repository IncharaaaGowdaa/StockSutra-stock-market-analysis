import { useState } from "react";

import ComparisonTable from "../components/ComparisonTable";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

import { compareStocks } from "../api/stockApi";

function Compare() {
  const [ticker1, setTicker1] = useState("");
  const [ticker2, setTicker2] = useState("");

  const [comparison, setComparison] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCompare = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await compareStocks(
        ticker1,
        ticker2
    );

      setComparison(response.data);
    } catch (err) {
      setError(
        err.response?.data?.detail ||
        "Failed to compare stocks."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-5xl font-bold mb-3">
          Compare Stocks
        </h1>

        <p className="text-slate-400">
          Side-by-side stock comparison
        </p>
      </div>

      <div className="flex gap-4">

        <input
          type="text"
          placeholder="Ticker 1"
          value={ticker1}
          onChange={(e) =>
            setTicker1(e.target.value.toUpperCase())
          }
          className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-2"
        />

        <input
          type="text"
          placeholder="Ticker 2"
          value={ticker2}
          onChange={(e) =>
            setTicker2(e.target.value.toUpperCase())
          }
          className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-2"
        />

        <button
          onClick={handleCompare}
          className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg"
        >
          Compare
        </button>

      </div>

      {loading && <LoadingSpinner />}

      {error && (
        <ErrorMessage message={error} />
      )}

      {comparison && (
        <ComparisonTable data={comparison} />
      )}

    </div>
  );
}

export default Compare;