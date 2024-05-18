"use client";

import { useEffect } from "react";
import { getCompanyData } from "@/lib/getCompanyData";
import { auth, getAuth } from "@clerk/nextjs/server";
import { useAuth, useUser } from "@clerk/nextjs";

export default function Dashboard() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getCompanyData("TSLA");
                console.log(result);
            } catch (err) {
                console.error("Error fetching data:", err);
            } finally {
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
