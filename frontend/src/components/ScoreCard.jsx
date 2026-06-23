function ScoreCard({ scoreData }) {
  const getRatingColor = () => {
    switch (scoreData.rating.toLowerCase()) {
      case "buy":
        return "text-green-400";

      case "hold":
        return "text-yellow-400";

      case "sell":
        return "text-red-400";

      default:
        return "text-blue-400";
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-xl font-semibold mb-6">
        Investment Score
      </h2>

      <div className="text-center">
        <h3 className="text-6xl font-bold">
          {scoreData.score}
        </h3>

        <p className="text-slate-400 mt-1">
          out of 100
        </p>

        <p
          className={`text-2xl font-bold mt-4 ${getRatingColor()}`}
        >
          {scoreData.rating.toUpperCase()}
        </p>
      </div>

      <div className="mt-8 space-y-4">

        <div className="flex justify-between">
          <span className="text-slate-400">
            Trend
          </span>

          <span>
            {scoreData.breakdown.trend}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            Sentiment
          </span>

          <span>
            {scoreData.breakdown.sentiment}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            Technicals
          </span>

          <span>
            {scoreData.breakdown.technicals}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            Valuation
          </span>

          <span>
            {scoreData.breakdown.valuation}
          </span>
        </div>

      </div>
    </div>
  );
}

export default ScoreCard;