"use client";

import React, { useEffect, useState } from "react";
import { CompanyDto } from "./company.dto";
import CompanyDetails from "@/components/shared/dashboard/CompanyDetails";
import Chart from "@/components/shared/dashboard/Chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = ({ params }: { params: { ticker: string } }) => {
    const { ticker } = params;

    const [data, setData] = useState<CompanyDto | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (ticker) {
            fetch(`http://localhost:3100/company/${ticker}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then((data: CompanyDto) => {
                    setData(data);
                    setLoading(false);
                    console.log("API Response:", data);
                })
                .catch((error: Error) => {
                    setError(error.message);
                    setLoading(false);
                    console.error("Error fetching data:", error);
                });
        }
    }, [ticker]);
    return (
        <div className="w-full">
            {data ? <CompanyDetails data={data} /> : <p>No data available</p>}
            <div>
                <Tabs defaultValue="quarterly">
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
                        <div className="">
                            {data?.quarterly.map((chartData, index) => (
                                <Chart key={index} chartData={chartData} />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="yearly">
                        {data?.yearly.map((chartData, index) => (
                            <Chart key={index} chartData={chartData} />
                        ))}
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Dashboard;
