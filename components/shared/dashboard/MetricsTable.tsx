import {
    GrowthMetrics,
    Valuation,
} from "@/app/(root)/dashboard/[ticker]/company.dto";
import React from "react";

const MetricsTable = ({
    data,
    title,
}: {
    data: GrowthMetrics | Valuation;
    title: string;
}) => {
    return (
        <div className="w-full drop shadow-sm rounded p-4">
            <p className="text-lg">{title}:</p>

            <div className="flex flex-col text-sm">
                {Object.entries(data).map(([key, value]) => (
                    <div
                        key={key}
                        className="w-full flex justify-between py-2 border-b  border-neutral-50"
                    >
                        <p className="text-neutral-600">{key}:</p>
                        <p className="font-bold">{value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MetricsTable;
