import React from 'react';
import { Button } from '../../ui/button';
import { CompanyDto } from '@/app/(root)/dashboard/[ticker]/company.dto';
import { Card, CardTitle } from '../../ui/card';
import MetricsTable from './MetricsTable';
import CurrentPriceChart from './CurrentPriceChart';
import { NextPage } from 'next';
import { ClipLoader } from 'react-spinners';

type Data = {
    data: CompanyDto;
    loading: boolean;
};

const CompanyDetails: NextPage<Data> = ({ data, loading }) => {
    if (loading)
        return (
            <div>
                <ClipLoader color="#123abc" loading={loading} size={50} />
            </div>
        );

    return (
        <Card className="p-4">
            <div className="flex justify-between items-center">
                <CardTitle className="text-xl">
                    {data.company.name} <span>({data.company.ticker})</span>
                </CardTitle>
                <div>
                    <Button className="bg-primary">Follow</Button>
                </div>
            </div>
            <div className="flex text-neutral-600 ">
                <div className="text-sm pr-4">
                    <p>Market Cap: {data.marketCap}</p>
                    <p>Enterprise V: --</p>
                </div>
                <div className="text-sm px-4">
                    <p>Price: 0</p>
                    <p>Volume: 0</p>
                </div>
                <div>
                    <p className="text-sm px-4">Dividend: {data.dividend}</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
                <MetricsTable
                    data={data.growthMetrics}
                    title="Growth Metrics"
                />
                <MetricsTable data={data.valuation} title="Valuation" />
                <MetricsTable data={data.technicals} title="Technicals" />
                <CurrentPriceChart />
            </div>
        </Card>
    );
};

export default CompanyDetails;
