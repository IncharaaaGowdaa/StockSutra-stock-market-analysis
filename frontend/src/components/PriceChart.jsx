import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function PriceChart({ history }) {
  const data = {
    labels: history.map((item) =>
      new Date(item.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
    ),

    datasets: [
      {
        label: "Closing Price ($)",
        data: history.map((item) => item.close),

        borderColor: "#60a5fa",
        backgroundColor: "rgba(96,165,250,0.2)",

        borderWidth: 2,

        pointRadius: 0,
        pointHoverRadius: 5,

        tension: 0.35,

        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      x: {
        ticks: {
          maxTicksLimit: 8,
        },

        grid: {
          display: false,
        },
      },

      y: {
        grid: {
          color: "rgba(255,255,255,0.05)",
        },
      },
    },
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-xl font-semibold mb-6">
        Historical Price Performance
      </h2>

      <div className="h-[400px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default PriceChart;