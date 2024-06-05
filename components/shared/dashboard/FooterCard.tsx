import { CompanyInformation } from '@/app/(root)/dashboard/[ticker]/company.dto';
import { Card, CardTitle } from '@/components/ui/card';
import { NextPage } from 'next';
import Link from 'next/link';
import React, { useEffect } from 'react';

type AppProps = {
    companyInformation: CompanyInformation;
};

const FooterCard: NextPage<AppProps> = ({ companyInformation }) => {
    useEffect(() => {
        console.log('Company Information:', companyInformation);
    }, [companyInformation]);

    return (
        <Card className="p-4 flex flex-row gap-4">
            <div className="flex flex-col gap-4 w-1/2">
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
                <div className="w-1/2 bg-primary-foreground p-4 rounded">
                    <CardTitle>Institutional Ownership</CardTitle>
                    <div className="py-2">
                        <table className="w-full mt-2">
                            <thead className="text-xs">
                                <tr>
                                    <th className="text-left">Owner</th>
                                    <th className="w-24 text-right">Stake</th>
                                </tr>
                            </thead>
                            <tbody>
                                {companyInformation.institutionalOwners.map(
                                    (owner, index) => (
                                        <tr className="border-b" key={index}>
                                            <td>{owner.name}</td>
                                            <td className="text-right">
                                                {owner.totalShares.toFixed(2)}%
                                            </td>
                                        </tr>
                                    ),
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="w-1/2">
                <CardTitle className="mb-4">Company News</CardTitle>
            </div>
        </Card>
    );
};

export default FooterCard;
