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
        backgroundColor: "red",
        borderWidth: 4,
      },
    ],
  });
  return <Bar data={userData} />;
};

export default Chart;
