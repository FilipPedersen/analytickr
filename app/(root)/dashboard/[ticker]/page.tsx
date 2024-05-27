'use client';

import React, { useEffect, useState } from 'react';
import { CompanyDto } from './company.dto';
import CompanyDetails from '@/components/shared/dashboard/CompanyDetails';
import Chart from '@/components/shared/dashboard/Chart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ClipLoader, PulseLoader } from 'react-spinners';
import { Card } from '@/components/ui/card';

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
                <Tabs defaultValue="quarterly" className="my-6">
                    <div className="flex justify-center">
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
                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                                {loading ? (
                                    <>
                                        {Array.from({ length: 6 }).map(
                                            (_, index) => (
                                                <Card className="flex items-center justify-center w-full min-h-96">
                                                    <PulseLoader
                                                        key={index}
                                                        color="#2563eb"
                                                        loading={loading}
                                                    />
                                                </Card>
                                            ),
                                        )}
                                    </>
                                ) : (
                                    data?.quarterly.map((chartData, index) => (
                                        <Chart
                                            key={index}
                                            chartData={chartData}
                                            loading={loading}
                                        />
                                    ))
                                )}
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="yearly">
                        <div className="w-full">
                            <div className="grid grid-cols-3 gap-4 w-full">
                                {loading ? (
                                    <div className="">
                                        <PulseLoader
                                            color="#2563eb"
                                            loading={loading}
                                        />
                                        <PulseLoader
                                            color="#2563eb"
                                            loading={loading}
                                        />
                                        <PulseLoader
                                            color="#2563eb"
                                            loading={loading}
                                        />
                                        <PulseLoader
                                            color="#2563eb"
                                            loading={loading}
                                        />
                                        <PulseLoader
                                            color="#2563eb"
                                            loading={loading}
                                        />
                                        <PulseLoader
                                            color="#2563eb"
                                            loading={loading}
                                        />
                                    </div>
                                ) : (
                                    data?.yearly.map((chartData, index) => (
                                        <Chart
                                            key={index}
                                            chartData={chartData}
                                            loading={loading}
                                        />
                                    ))
                                )}
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Dashboard;
