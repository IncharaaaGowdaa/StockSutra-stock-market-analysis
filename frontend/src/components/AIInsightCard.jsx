function AIInsightCard({ ai }) {

  if (ai.ai_available === false) {
    return (
      <div className="bg-slate-900 border border-yellow-500 rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">
          AI Analysis
        </h2>

        <p className="text-yellow-400">
          AI analysis is temporarily unavailable because the Gemini API quota has been exceeded.
          Please try again in a few minutes.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-xl font-semibold mb-4">
        AI Investment Analysis
      </h2>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">
            Summary
          </h3>

          <p className="text-slate-300">
            {ai.summary}
          </p>
        </div>

        <div>
          <h3 className="font-semibold">
            Risks
          </h3>

          <p className="text-slate-300">
            {ai.risks}
          </p>
        </div>

        <div>
          <h3 className="font-semibold">
            Opportunities
          </h3>

          <p className="text-slate-300">
            {ai.opportunities}
          </p>
        </div>

        <div>
          <h3 className="font-semibold">
            Insight
          </h3>

          <p className="text-slate-300">
            {ai.investment_insight}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AIInsightCard;