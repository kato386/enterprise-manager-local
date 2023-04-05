import { Bar, defaults } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";

const Chart = ({ data, days }) => {
  const getPastDates = (x) => {
    const dates = [];
    const today = new Date();
    for (let i = x - 1; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      dates.push(date.toISOString().slice(0, 10));
    }
    return dates;
  };

  const datesArray = getPastDates(days);

  const [userData, setUsetData] = useState({
    labels: datesArray,
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
    <div className="bg-purple-400  p-3 border rounded">
      <Bar data={userData} />
    </div>
  );
};

export default Chart;
