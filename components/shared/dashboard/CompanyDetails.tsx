import React from 'react';
import { Button } from '../../ui/button';
import { CompanyDto } from '@/app/(root)/dashboard/[ticker]/company.dto';
import { Card, CardTitle } from '../../ui/card';
import MetricsTable from './MetricsTable';
import CurrentPriceChart from './CurrentPriceChart';
import { NextPage } from 'next';
import { BarLoader, ClipLoader, PulseLoader } from 'react-spinners';
import Image from 'next/image';

type Data = {
    data: CompanyDto | null;
    loading: boolean;
};

const CompanyDetails: NextPage<Data> = ({ data, loading }) => {
    const iconUrl =
        `https://eodhd.com/${data?.company.logoUrl}` ||
        '/images/placeholder.png';

    if (loading || !data)
        return (
            <div className="flex lg:flex-row flex-col gap-4">
                <Card className="flex items-center min-h-[329px] justify-center w-full">
                    <PulseLoader color="#2563eb" loading={loading} size={10} />
                </Card>
                <Card className="flex items-center min-h-[329px] justify-center w-full h-full max-w-[496px]">
                    <PulseLoader color="#2563eb" loading={loading} size={10} />
                </Card>
            </div>
        );

    return (
        <div className="flex lg:flex-row flex-col gap-4">
            <Card className="p-4 w-full">
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <Image
                            className="rounded"
                            src={iconUrl}
                            width={30}
                            height={30}
                            alt={data.company.name}
                        ></Image>
                        <CardTitle className="text-xl">
                            {data.company.name}{' '}
                            <span>({data.company.ticker})</span>
                        </CardTitle>
                    </div>
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
                        <p className="text-sm px-4">
                            Dividend: {data.dividend}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                    <MetricsTable
                        data={data.growthMetrics}
                        title="Growth Metrics"
                    />
                    <MetricsTable data={data.valuation} title="Valuation" />
                    <MetricsTable data={data.technicals} title="Technicals" />
                </div>
            </Card>
            <CurrentPriceChart />
        </div>
    );
};

export default CompanyDetails;
