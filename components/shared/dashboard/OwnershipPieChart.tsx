import { PieChart } from '@/app/(root)/dashboard/[ticker]/company.dto';
import { NextPage } from 'next';
import React from 'react';
import { Chart, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';
Chart.register(ArcElement);

type AppProps = {
    data: PieChart;
};

const OwnershipPieChart: NextPage<AppProps> = ({ data }) => {
    return <Pie data={data} />;
};

export default OwnershipPieChart;
