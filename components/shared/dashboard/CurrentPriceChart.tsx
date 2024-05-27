import { Card, CardTitle } from '@/components/ui/card';
import React from 'react';

const CurrentPriceChart = () => {
    return (
        <Card className="border p-4 w-full max-w-[496px]">
            <CardTitle>Stock Price</CardTitle>
            <div>
                <p></p>
            </div>
            <div className="flex flex-col text-sm"></div>
        </Card>
    );
};

export default CurrentPriceChart;
