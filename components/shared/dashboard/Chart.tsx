import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ChartData } from "@/app/(root)/dashboard/[ticker]/company.dto";
import { NextPage } from "next";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

type AppProps = {
    chartData: ChartData;
};

const Chart: NextPage<AppProps> = ({ chartData }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: false,
            },
        },
    };

    const data = {
        labels: chartData.labels,
        datasets: [
            {
                label: chartData.label,
                backgroundColor: `rgba(${getRgbColor(chartData.color)}, 0.4)`,
                borderColor: chartData.color,
                borderWidth: 1,
                data: chartData.data,
            },
        ],
    };

    return <Bar options={options} data={data} />;
};

const getRgbColor = (colorName: string): string => {
    switch (colorName.toLowerCase()) {
        case "green":
            return "75, 192, 192";
        case "purple":
            return "153, 102, 255";
        case "red":
            return "255, 99, 132";
        case "blue":
            return "54, 162, 235";
        case "yellow":
            return "255, 206, 86";
        default:
            return "0, 0, 0";
    }
};

export default Chart;
