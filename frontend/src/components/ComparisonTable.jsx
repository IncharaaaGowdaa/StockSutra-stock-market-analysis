function ComparisonTable({ data }) {
  const stock1 = data.ticker1;
  const stock2 = data.ticker2;

  const formatMarketCap = (value) => {
    if (value >= 1_000_000_000_000) {
        return `${(value / 1_000_000_000_000).toFixed(2)}T`;
    }
    if (value >= 1_000_000_000) {
        return `${(value / 1_000_000_000).toFixed(2)}B`;
    }

    return value.toLocaleString();
    };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-slate-700">
            <th className="pb-3">Metric</th>
            <th className="pb-3">{stock1.ticker}</th>
            <th className="pb-3">{stock2.ticker}</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-800">
          <tr className="h-12">
            <td className="font-medium">Price</td>
            <td>${stock1.price}</td>
            <td>${stock2.price}</td>
          </tr>

          <tr className="h-12">
            <td className="font-medium">Market Cap</td>
            <td>{formatMarketCap(stock1.market_cap)}</td>
            <td>{formatMarketCap(stock2.market_cap)}</td>
          </tr>

          <tr className="h-12">
            <td className="font-medium">P/E Ratio</td>
            <td>{stock1.pe_ratio?.toFixed(2)}</td>
            <td>{stock2.pe_ratio?.toFixed(2)}</td>
          </tr>

          <tr className="h-12">
            <td className="font-medium">RSI</td>
            <td>{stock1.rsi}</td>
            <td>{stock2.rsi}</td>
          </tr>

          <tr className="h-12">
            <td className="font-medium">Trend</td>
            <td>{stock1.trend}</td>
            <td>{stock2.trend}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ComparisonTable;