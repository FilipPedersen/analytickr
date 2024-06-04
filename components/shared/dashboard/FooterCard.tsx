import { Card, CardTitle } from '@/components/ui/card';
import React from 'react';

const FooterCard = () => {
    return (
        <Card className="border p-4">
            <div className="flex gap-4">
                <table className="w-1/2">
                    <CardTitle className="mb-4">Company Information</CardTitle>
                    <tbody>
                        <tr className="border-b-2">
                            <td className="py-2">CEO:</td>
                            <td className="py-2">Employees:</td>
                        </tr>
                        <tr className="border-b-2">
                            <td className="py-2">Industry:</td>
                            <td className="py-2">Earnings Date</td>
                        </tr>
                        <tr className="border-b-2">
                            <td className="py-2">Headquarters: </td>
                            <td className="py-2">Website:</td>
                        </tr>
                        <tr className="border-b-2">
                            <td className="py-2">Short interest: </td>
                            <td className="py-2">Shares short:</td>
                        </tr>
                    </tbody>
                </table>
                <div className="w-1/2">
                    <CardTitle className="mb-4">Company News</CardTitle>
                </div>
            </div>
        </Card>
    );
};

export default FooterCard;
