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
import { NextPage } from 'next';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { ChartData } from '@/app/(root)/dashboard/[ticker]/dto/company.dto';

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
    children?: React.ReactNode;
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
    gradient.addColorStop(1, `rgba(${getRgbColor(color)}, 0.4)`);
    return gradient;
};

const Chart: NextPage<AppProps> = ({ chartData, children }) => {
    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'nearest' as const,
            intersect: false,
        },
        plugins: {
            legend: {
                position: 'top' as const,
                display: chartData.datasets.some(
                    (dataset) => dataset.label && dataset.label.trim() !== '',
                ),
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
                stacked: chartData.stacked,
                display: chartData.showXAxis,
            },
            y: {
                stacked: chartData.stacked,
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
        interaction: {
            mode: 'nearest' as const,
            intersect: false,
        },
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
                display: chartData.datasets.some(
                    (dataset) => dataset.label && dataset.label.trim() !== '',
                ),
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
                stacked: chartData.stacked,
                display: chartData.showXAxis,
            },
            y: {
                stacked: chartData.stacked,
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
            tension: dataset.tension || 0,
            fill: true,
        })),
    };

    return (
        <Card className="border p-4">
            <div className="flex justify-between">
                <div>
                    <CardTitle>{chartData.label}</CardTitle>
                    <p className="text-[10px] text-neutral-400">
                        In {chartData.metric}
                    </p>
                </div>
                {children}
            </div>
            <CardContent>
                <div className="h-56 pt-2">
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
