import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    scales,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { ChartData } from '@/app/(root)/dashboard/[ticker]/company.dto';
import { NextPage } from 'next';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    scales,
);

type AppProps = {
    chartData: ChartData;
    loading: boolean;
};

const Chart: NextPage<AppProps> = ({ chartData }) => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                ticks: {
                    autoSkip: false,
                },
            },
        },
    };

    console.log('chartData:', chartData);

    const data = {
        labels: chartData.labels,
        datasets: chartData.datasets.map((dataset) => {
            return {
                label: dataset.label,
                backgroundColor: `rgba(${getRgbColor(dataset.color)}, 0.4)`,
                borderColor: dataset.color,
                borderWidth: 1,
                data: dataset.data,
            };
        }),
    };

    return (
        <Card className="border p-4">
            <CardTitle>{chartData.label}</CardTitle>
            <p className="text-[10px] text-neutral-400">
                In {chartData.metric}
            </p>
            <CardContent>
                <div className="h-56">
                    {chartData.chartType === 'bar' ? (
                        <Bar options={options} data={data} />
                    ) : chartData.chartType === 'line' ? (
                        <Line options={options} data={data} />
                    ) : null}
                </div>
            </CardContent>
            <p className="flex justify-end text-[10px] text-neutral-400">
                powered by Analytickr
            </p>
        </Card>
    );
};

const getRgbColor = (colorNames: string | string[]): string[] => {
    if (typeof colorNames === 'string') {
        colorNames = [colorNames];
    }
    return colorNames.map((color) => {
        switch (color.toLowerCase()) {
            case 'green':
                return '75, 192, 192';
            case 'purple':
                return '153, 102, 255';
            case 'red':
                return '255, 99, 132';
            case 'blue':
                return '54, 162, 235';
            case 'yellow':
                return '255, 206, 86';
            default:
                return '0, 0, 0';
        }
    });
};

export default Chart;
