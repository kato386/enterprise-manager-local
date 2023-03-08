import { Bar, defaults } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";

const Chart = ({ data, days }) => {
  var labels = [];
  for (let i = 1; i <= days; i++) {
    labels.push("Day " + i);
  }

  const [userData, setUsetData] = useState({
    labels: labels,
    datasets: [
      {
        label: "Products sold.",
        data: data,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],

        hoverOffset: 4,
        borderWidth: 2,
        barPercentage: 0.9,
      },
    ],
  });
  return (
    <div className="bg-purple-400">
      <Bar data={userData} />
    </div>
  );
};

export default Chart;
