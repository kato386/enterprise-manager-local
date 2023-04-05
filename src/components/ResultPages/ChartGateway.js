import { Line } from "react-chartjs-2";

import { useState } from "react";

const ChartGateway = ({ enterpriseNames, data }) => {
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
    return { count: resultCount, labels: resultGatewayNames };
  };

  const [userData, setUserData] = useState({
    labels: groupByValue(data).labels,
    datasets: [
      {
        label: "ENTERPRISE: " + enterpriseNames + " gateway count",
        data: groupByValue(data).count,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        minBarLength: 0,
        hoverOffset: 4,
        borderWidth: 1,
        barPercentage: 1,
      },
    ],
  });

  return (
    <div className="bg-purple-400  p-3 border rounded">
      <Line data={userData} />
    </div>
  );
};

export default ChartGateway;
