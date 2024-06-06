import {
    CompanyInformation,
    Ownership,
} from '@/app/(root)/dashboard/[ticker]/company.dto';
import { Card, CardTitle } from '@/components/ui/card';
import { NextPage } from 'next';
import Link from 'next/link';
import React, { useEffect } from 'react';
import PieChart from './OwnershipPieChart';
import OwnershipPieChart from './OwnershipPieChart';

type AppProps = {
    ownership: Ownership;
    companyInformation: CompanyInformation;
};

const FooterCard: NextPage<AppProps> = ({ ownership, companyInformation }) => {
    return (
        <Card className="p-4 grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-4 col-span-3 lg:col-span-2">
                <div className="w-full">
                    <CardTitle className="mb-4">Company Information</CardTitle>
                    <table className="w-full">
                        <tbody className="divide-y-2">
                            <tr>
                                <td className="py-2">
                                    CEO:
                                    <span className="ml-2">
                                        {companyInformation.ceo}
                                    </span>
                                </td>
                                <td className="py-2">
                                    Employees:
                                    <span className="ml-2">
                                        {companyInformation.employees.toLocaleString()}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2">
                                    Industry:
                                    <span className="ml-2">
                                        {companyInformation.industry}
                                    </span>
                                </td>
                                <td className="py-2">
                                    Headquarters:
                                    <span className="ml-2">
                                        {companyInformation.headquarters}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2">
                                    Short Interest:
                                    <span className="ml-2">
                                        {(
                                            companyInformation.shortInterest *
                                            100
                                        ).toFixed(2)}
                                        %
                                    </span>
                                </td>
                                <td className="py-2">
                                    Shares Short:
                                    <span className="ml-2">
                                        {companyInformation.sharesShort.toLocaleString()}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2">
                                    Website:
                                    <span className="ml-2">
                                        <Link
                                            className="text-blue-500"
                                            href={companyInformation.website}
                                            target="_blank"
                                        >
                                            {companyInformation.website}
                                        </Link>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex gap-4">
                    <div className="w-1/2 bg-primary-foreground p-4 rounded">
                        <CardTitle>Institutional Ownership</CardTitle>
                        <div className="py-2">
                            <table className="w-full mt-2">
                                <thead className="text-xs">
                                    <tr>
                                        <th className="text-left">Owner</th>
                                        <th className="w-24 text-right">
                                            Stake
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y-2">
                                    {ownership.institutionalOwners.map(
                                        (owner, index) => (
                                            <tr key={index}>
                                                <td>{owner.name}</td>
                                                <td className="text-right">
                                                    {owner.totalShares.toFixed(
                                                        2,
                                                    )}
                                                    %
                                                </td>
                                            </tr>
                                        ),
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="w-1/2 bg-primary-foreground p-4 rounded max-h-96 flex flex-col justify-center items-center">
                        <CardTitle className="self-start">
                            Ownership Breakdown (%)
                        </CardTitle>
                        <OwnershipPieChart
                            data={ownership.institutionalBreakdown}
                        />
                    </div>
                </div>
            </div>

            <div className="col-span-3 lg:col-span-1">
                <CardTitle className="mb-4">Company News</CardTitle>
                <div className="flex items-center justify-center h-full">
                    <p className="font-medium text-2xl text-gray-500">
                        Coming soon⚡️
                    </p>
                </div>
            </div>
        </Card>
    );
};

export default FooterCard;
