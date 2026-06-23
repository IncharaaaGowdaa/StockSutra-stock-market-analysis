import { useState } from "react";

function SearchBar({ onSearch }) {
  const [ticker, setTicker] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!ticker.trim()) return;

    onSearch(ticker.toUpperCase());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-3"
    >
      <input
        type="text"
        placeholder="Enter ticker (AAPL, TSLA, INFY)"
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
        className="flex-1 px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-blue-500"
      />

      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
      >
        Analyze
      </button>
    </form>
  );
}

export default SearchBar;