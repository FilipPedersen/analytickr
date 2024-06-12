'use client';

import React, { useEffect, useState } from 'react';
import { CompanyDto } from './dto/company.dto';
import CompanyDetails from '@/components/shared/dashboard/CompanyDetails';
import Chart from '@/components/shared/dashboard/Chart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PulseLoader } from 'react-spinners';
import { Card } from '@/components/ui/card';
import FooterCard from '@/components/shared/dashboard/FooterCard';

const Dashboard = ({ params }: { params: { ticker: string } }) => {
    const { ticker } = params;
    const [data, setData] = useState<CompanyDto | null>(null);
    const [loading, setLoading] = useState(true);
    const [stockChartLoading, setStockChartLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (ticker) {
            fetch(`http://localhost:3100/company/${ticker}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data: CompanyDto) => {
                    setData(data);
                    setLoading(false);
                    console.log('API Response:', data);
                })
                .catch((error: Error) => {
                    setError(error.message);
                    setLoading(false);
                    console.error('Error fetching data:', error);
                });
        }
    }, [ticker]);

    return (
        <div className="w-full">
            <CompanyDetails data={data ? data : null} loading={loading} />
            <div>
                <Tabs defaultValue="quarterly" className="my-4">
                    <div className="flex justify-end">
                        <TabsList>
                            <TabsTrigger className="w-52" value="quarterly">
                                Quarterly
                            </TabsTrigger>
                            <TabsTrigger className="w-52" value="yearly">
                                Yearly
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="quarterly">
                        <div className="w-full">
                            <div className="flex flex-wrap -mr-3 -ml-3">
                                {loading ? (
                                    <>
                                        {Array.from({ length: 6 }).map(
                                            (_, index) => (
                                                <div
                                                    key={index}
                                                    className="flex-initial w-full md:w-1/2 xl:w-1/3 p-2"
                                                >
                                                    <Card className="flex items-center justify-center w-full min-h-80">
                                                        <PulseLoader
                                                            color="#2563eb"
                                                            loading={loading}
                                                        />
                                                    </Card>
                                                </div>
                                            ),
                                        )}
                                    </>
                                ) : (
                                    data?.quarterly.map((chartData, index) => (
                                        <div
                                            key={index}
                                            className="flex-initial w-full md:w-1/2 xl:w-1/3 p-2"
                                        >
                                            <Chart
                                                chartData={chartData}
                                                loading={loading}
                                            />
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="yearly">
                        <div className="w-full ">
                            <div className="flex flex-wrap -mr-3 -ml-3">
                                {loading ? (
                                    <div className="">
                                        {Array.from({ length: 6 }).map(
                                            (_, index) => (
                                                <PulseLoader
                                                    key={index}
                                                    color="#2563eb"
                                                    loading={loading}
                                                />
                                            ),
                                        )}
                                    </div>
                                ) : (
                                    data?.yearly.map((chartData, index) => (
                                        <div className="flex-initial w-full md:w-1/2 xl:w-1/3 p-2">
                                            <Chart
                                                key={index}
                                                chartData={chartData}
                                                loading={loading}
                                            />
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

            {data ? (
                <FooterCard
                    companyInformation={data?.companyInformation}
                    ownership={data?.ownership}
                />
            ) : null}
        </div>
    );
};

export default Dashboard;
