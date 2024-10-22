import { Center } from "@mantine/core";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  defaults,
} from "chart.js";
import { Radar } from "react-chartjs-2";

defaults.font.size = 14;
// defaults.font.weight = 'bold';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

const skillData = [
  {
    label: "Front-end",
    labels: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Figma"],
    data: [3, 3, 3, 4, 4, 3],
    backgroundColor: "rgba(255, 107, 107, 0.2)",
    borderColor: "rgba(255, 107, 107, 1)",
  },
  {
    label: "Back-end",
    labels: ["Python", "TypeScript", "MySQL", "Go", "Rust", "C"],
    data: [5, 3, 3, 4, 2, 2],
    backgroundColor: "rgba(51, 154, 240, 0.2)",
    borderColor: "rgba(51, 154, 240, 1)",
  },
  {
    label: "DevOps",
    labels: [
      "Linux",
      "Kubernetes",
      "Docker",
      "Google Cloud",
      "Terraform",
      "AWS",
    ],
    data: [4, 4, 4, 4, 4, 4],
    backgroundColor: "rgba(252, 196, 25, 0.2)",
    borderColor: "rgba(252, 196, 25, 1)",
  },
];

export const SkillsChart = (props) => {
  const data = () => {
    return {
      labels: skillData[props.index].labels,
      datasets: [
        {
          label: skillData[props.index].label,
          data: skillData[props.index].data,
          backgroundColor: skillData[props.index].backgroundColor,
          borderColor: skillData[props.index].borderColor,
          borderWidth: 1,
        },
      ],
    };
  };

  const options = {
    scales: {
      r: {
        min: 0,
        max: 5,
        ticks: {
          stepSize: 1,
        },
        pointLabels: {
          font: {
            weight: 500,
            size: 12,
          },
        },
      },
    },
  };

  return (
    <Center>
      <Radar data={data()} options={options} />
    </Center>
  );
};
