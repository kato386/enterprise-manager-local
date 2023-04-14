import { Line } from "react-chartjs-2";

import { useState } from "react";

const ChartGateway = ({ enterpriseNames, data, controls }) => {
  function replaceControls(array) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
      const control = array[i];
      const parts = control.split(":").map((s) => s.trim());
      const name = parts[0];
      const value = controls[name] || parts[1] || name;
      result.push(value);
    }

    return result;
  }
  const groupByValue = () => {
    let resultCount = [];
    let resultGatewayNames = [];
    let grouped = {};
    data.forEach((item) => {
      if (grouped[item.value]) {
        grouped[item.value]++;
      } else {
        grouped[item.value] = 1;
      }
    });

    for (let key in grouped) {
      resultCount.push(grouped[key]);
      resultGatewayNames.push(key);
    }
    return { count: resultCount, labels: replaceControls(resultGatewayNames) };
  };

  const [userData, setUserData] = useState({
    labels: groupByValue(data).labels,
    datasets: [
      {
        label: "Gateway Count",
        data: groupByValue(data).count,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],

        hoverOffset: 4,
      },
    ],
  });

  const options = {
    plugins: {
      title: {
        display: true,
        text:
          "ENTERPRISE: " + enterpriseNames + "   GATEWAY COUNT: " + data.length,
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
    <div className="bg-gray-100  p-2 border rounded">
      <Line data={userData} id="linechart" options={options} />
    </div>
  );
};

export default ChartGateway;
