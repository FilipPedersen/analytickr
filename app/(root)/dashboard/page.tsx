'use client';

import { useState } from 'react';

export default function Dashboard() {
    const [followedStocks, setFollowedStocks] = useState([]);

    fetch('http://localhost:3100/user/followed-stocks').then((res) =>
        res.json().then((data) => console.log(data)),
    );

    return (
        <main>
            <h1>Dashboard</h1>
        </main>
    );
}
