import { useState } from "react";
import styles from "./mainPage.module.scss";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import institutes from "stores/Institutes.json";

Chart.register(CategoryScale);

export const UniversityChart = () => {
  const [chartData] = useState({
    labels: institutes.institutes.map((data) => data.name),
    datasets: [
      {
        label: "Users Gained",
        data: institutes.institutes.map((data) => data.id),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#50AF95",
          "#f3ba2f",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div className={styles.chart}>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Аналитика по университету",
            },
          },
        }}
      />
    </div>
  );
};
