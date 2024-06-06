'use client';

import { useState } from 'react';

export default function Dashboard() {
    const [followedStocks, setFollowedStocks] = useState([]);

    // if (ticker) {
    //     fetch(`http://localhost:3100/company/${ticker}`)
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then((data: CompanyDto) => {
    //             setData(data);
    //             setLoading(false);
    //             console.log('API Response:', data);
    //         })
    //         .catch((error: Error) => {
    //             setError(error.message);
    //             setLoading(false);
    //             console.error('Error fetching data:', error);
    //         });
    // }
    // }, [ticker]);

    return (
        <main>
            <h1>Dashboard</h1>
        </main>
    );
}
