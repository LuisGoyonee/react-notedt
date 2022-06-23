import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutExpenseChart = ({ allData, checker }) => {
  const [labels, setLabels] = useState([]);
  const [datasets, setDatasets] = useState([]);
  useEffect(() => {
    const tempArray = [];
    const tempArray2 = [];
    allData.forEach((element) => {
      if (element.transactionType === "Expense") {
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
        backgroundColor: [
          "rgb(156, 22, 21)",
          "rgb(152, 20, 19)",
          "rgb(147, 17, 17)",
          "rgb(143, 15, 15)",
          "rgb(139, 12, 13)",
          "rgb(135, 9, 11)",
          "rgb(130, 7, 8)",
          "rgb(126, 4, 5)",
          "rgb(122, 2, 3)",
          "rgb(118, 0, 0)",
          "rgb(128, 17, 3)",
          "rgb(138, 30, 4)",
          "rgb(148, 42, 4)",
          "rgb(158, 53, 4)",
          "rgb(168, 64, 4)",
          "rgb(177, 75, 3)",
          "rgb(186, 86, 2)",
          "rgb(195, 97, 1)",
          "rgb(204, 108, 0)",
        ],
      },
    ],
  };

  return (
    <div>
      {checker && (
        <Doughnut
          data={data}
          options={{
            aspectRatio: 4,
            plugins: {
              legend: {
                display: true,
                position: "right",
                labels: {
                  boxWidth: 25,
                  fontSize: 200,
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

export default DoughnutExpenseChart;
