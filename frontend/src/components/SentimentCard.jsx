function SentimentCard({ data }) {
  const getColor = () => {
    switch (data.overall_sentiment.toLowerCase()) {
      case "positive":
        return "text-green-400";

      case "negative":
        return "text-red-400";

      default:
        return "text-yellow-400";
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-xl font-semibold mb-6">
        Market Sentiment
      </h2>

      <div className="space-y-4">
        <div>
          <p className="text-slate-400">
            Overall Sentiment
          </p>

          <p className={`text-2xl font-bold ${getColor()}`}>
            {data.overall_sentiment}
          </p>
        </div>

        <div>
          <p className="text-slate-400">
            Average Score
          </p>

          <p className="text-2xl font-bold">
            {data.average_score}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SentimentCard;