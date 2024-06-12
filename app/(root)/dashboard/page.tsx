'use client';

import { useAuth } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

export default function Dashboard() {
    const [followedStocks, setFollowedStocks] = useState([]);
    const { getToken } = useAuth();

    useEffect(() => {
        const fetchFollowedStocks = async () => {
            const token = await getToken();
            fetch('http://localhost:3100/user/followed-stocks', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setFollowedStocks(data);
                })
                .catch((error) => console.error('Error:', error));
        };
        fetchFollowedStocks();
    }, [getToken]);

    return (
        <main>
            <h1>Dashboard</h1>
        </main>
    );
}
