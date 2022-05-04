import React from "react";
import { Doughnut } from "react-chartjs-2";
import { retrieveTransactions } from "../../../scripts/local-storage";

const DoughnutChart = () => {
  const retrievedData = retrieveTransactions();
  console.log(retrievedData);
  return (
    <div>
      <Doughnut
        data={{
          labels: ["Red", "Blue", "Yellow"],
          datasets: [
            {
              label: "My First Dataset",
              data: [300, 50, 100],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
              ],
              hoverOffset: 4,
            },
          ],
        }}
        width={400}
        height={200}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default DoughnutChart;
