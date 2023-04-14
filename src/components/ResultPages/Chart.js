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

  const toplam = (sayilar) => {
    let toplam = 0;
    for (let i = 0; i < sayilar.length; i++) {
      toplam += sayilar[i];
    }
    return toplam;
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

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Number of products sold : " + toplam(data),
        color: "black",
      },
      legend: {
        labels: {
          color: "black",
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: "black",
          font: {
            size: 14,
          },
        },
      },
      x: {
        ticks: {
          color: "black",
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="bg-gray-100 mt-8 rounded p-2">
      <Bar data={userData} options={options} />
    </div>
  );
};

export default Chart;
