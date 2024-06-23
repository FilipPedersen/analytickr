import { Card, CardTitle } from '@/components/ui/card';
import React, { useEffect, useState } from 'react';
import Chart from './Chart';
import { ChartData } from '@/app/(root)/dashboard/[ticker]/dto/company.dto';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useParams } from 'next/navigation';

const CurrentPriceChart = () => {
    const { ticker } = useParams<{ ticker: string }>();
    const [chartData, setChartData] = useState<ChartData | null>(null);
    const [searchParam, setSearchParam] = useState<string>('3m');

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (ticker) {
            fetch(
                `http://localhost:3100/historical-price-chart/${ticker}?timeframe=${searchParam}`,
            )
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data: ChartData) => {
                    setChartData(data);
                    console.log(chartData);
                    setLoading(false);
                    console.log('API Response:', data);
                })
                .catch((error: Error) => {
                    setError(error.message);
                    setLoading(false);
                    console.error('Error fetching data:', error);
                });
        }
    }, [ticker, searchParam]);

    return (
        <div className="w-full gap-4 flex flex-col items-end max-w-[500px]">
            <Select
                value={searchParam}
                onValueChange={(value) => setSearchParam(value)}
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a timeframe" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="3m">3 Month</SelectItem>
                    <SelectItem value="ytd">Year To Date</SelectItem>
                    <SelectItem value="1y">1 Year</SelectItem>
                    <SelectItem value="3y">3 Year</SelectItem>
                </SelectContent>
            </Select>
            <div className="flex-initial w-full">
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {chartData && <Chart chartData={chartData} loading={loading} />}
            </div>
        </div>
    );
};

export default CurrentPriceChart;
