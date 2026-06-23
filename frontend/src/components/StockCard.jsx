function StockCard({ stock }) {
  const change =
    stock.current_price - stock.previous_close;

  const percentChange =
    ((change / stock.previous_close) * 100).toFixed(2);

  const isPositive = change >= 0;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">

        <div>
          <h2 className="text-3xl font-bold">
            {stock.company_name}
          </h2>

          <p className="text-slate-400 text-lg">
            {stock.ticker}
          </p>
        </div>

        <div className="text-left md:text-right">
          <h3 className="text-5xl font-bold">
            ${stock.current_price}
          </h3>

          <p
            className={`mt-2 font-medium ${
              isPositive
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {change.toFixed(2)}
            {" ("}
            {percentChange}%)
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

        <div>
          <p className="text-slate-500 text-sm">
            Previous Close
          </p>

          <p>{stock.previous_close}</p>
        </div>

        <div>
          <p className="text-slate-500 text-sm">
            EPS
          </p>

          <p>{stock.eps}</p>
        </div>

        <div>
          <p className="text-slate-500 text-sm">
            52W High
          </p>

          <p>{stock.week_52_high}</p>
        </div>

        <div>
          <p className="text-slate-500 text-sm">
            52W Low
          </p>

          <p>{stock.week_52_low}</p>
        </div>

      </div>
    </div>
  );
}

export default StockCard;