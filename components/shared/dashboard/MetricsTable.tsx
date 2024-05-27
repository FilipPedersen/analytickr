import {
    GrowthMetrics,
    Technicals,
    Valuation,
} from '@/app/(root)/dashboard/[ticker]/company.dto';
import { CardTitle } from '@/components/ui/card';
import React from 'react';

const MetricsTable = ({
    data,
    title,
}: {
    data: GrowthMetrics | Valuation | Technicals;
    title: string;
}) => {
    return (
        <div className="w-full border border-border rounded p-4">
            <CardTitle>{title}:</CardTitle>

            <div className="flex flex-col text-sm mt-2">
                {Object.entries(data).map(([key, value]) => (
                    <div
                        key={key}
                        className="w-full flex justify-between py-1 border-b  border-neutral-100"
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
