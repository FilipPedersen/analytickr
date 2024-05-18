"use client";

import { useEffect, useState } from "react";
import { getCompanyData } from "@/lib/getCompanyData";

export default function Dashboard() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getCompanyData("TSLA");
                console.log(result);
            } catch (err) {
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <main>
            <h1>Dashboard</h1>
        </main>
    );
}
