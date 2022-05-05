import "chart.js/auto";
import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutIncomeChart = ({ allData, checker }) => {
  const [labels, setLabels] = useState([]);
  const [datasets, setDatasets] = useState([]);

  useEffect(() => {
    const tempArray = [];
    const tempArray2 = [];
    allData.forEach((element) => {
      if (element.transactionType === "Income") {
        tempArray.push(element.category);
        tempArray2.push(element.amount);
      }
    });
    setLabels(tempArray);
    setDatasets(tempArray2);
  }, [allData]);

  const data = {
    labels: labels,
    datasets: [
      {
        data: datasets,
        backgroundColor: ["rgb(0,118,108)", "rgb(0,144,131)", "rgb(0,195,178)"],
      },
    ],
  };

  return (
    <div>
      {checker && (
        <Doughnut
          data={data}
          width={700}
          height={500}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
                position: "right",
                labels: {
                  boxWidth: 25,
                  fontSize: 50,
                  fontColor: "black",
                },
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default DoughnutIncomeChart;
