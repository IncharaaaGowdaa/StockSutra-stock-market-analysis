function TechnicalAnalysisCard({ data }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-xl font-semibold mb-6">
        Technical Analysis
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <div>
          <p className="text-slate-400">RSI</p>
          <p className="text-2xl font-bold">
            {data.rsi}
          </p>
        </div>

        <div>
          <p className="text-slate-400">Trend</p>
          <p className="text-2xl font-bold">
            {data.trend}
          </p>
        </div>

        <div>
          <p className="text-slate-400">MA50</p>
          <p className="text-2xl font-bold">
            {data.ma50}
          </p>
        </div>

        <div>
          <p className="text-slate-400">MA200</p>
          <p className="text-2xl font-bold">
            {data.ma200}
          </p>
        </div>

      </div>
    </div>
  );
}

export default TechnicalAnalysisCard;