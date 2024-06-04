import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    Filler,
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
    PointElement,
    LineElement,
    Filler,
);

type AppProps = {
    chartData: ChartData;
    loading: boolean;
};

const getRgbColor = (color: string): string => {
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
        case 'orange':
            return '255, 159, 64';
        case 'grey':
            return '44, 45, 45';
        default:
            return '0, 0, 0';
    }
};

const createGradient = (
    ctx: CanvasRenderingContext2D,
    chartArea: any,
    color: string,
): CanvasGradient => {
    const gradient = ctx.createLinearGradient(0, 0, 0, chartArea.bottom);
    gradient.addColorStop(0, `rgba(${getRgbColor(color)}, 0.8)`);
    gradient.addColorStop(1, `rgba(${getRgbColor(color)}, 0.2)`);
    return gradient;
};

const Chart: NextPage<AppProps> = ({ chartData }) => {
    const barOptions = {
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

    const lineOptions = {
        responsive: true,
        elements: {
            point: {
                radius: 0,
            },
        },
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

    const data = {
        labels: chartData.labels,
        datasets: chartData.datasets.map((dataset) => ({
            label: dataset.label,
            backgroundColor: function (ctx: {
                chart: { ctx: CanvasRenderingContext2D; chartArea: any };
            }): CanvasGradient | undefined {
                const chart = ctx.chart;
                const { ctx: context, chartArea } = chart;
                if (!chartArea) {
                    return undefined;
                }
                return createGradient(context, chartArea, dataset.color);
            },
            borderColor: dataset.color,
            borderWidth: { bar: 1, line: 2 }[chartData.chartType] || 1,
            data: dataset.data,
            fill: true,
        })),
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
                        <Bar options={barOptions} data={data} />
                    ) : chartData.chartType === 'line' ? (
                        <Line options={lineOptions} data={data} />
                    ) : null}
                </div>
            </CardContent>
            <p className="flex justify-end text-[10px] text-neutral-400">
                powered by Analytickr
            </p>
        </Card>
    );
};

export default Chart;
