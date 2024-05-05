import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import React from "react";

export const metadata = {
    title: "Analytickr",
    description: "Analyser virksomheder inden du investerer",
};

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <div className="min-h-screen flex justify-center items-center">
                        {children}
                    </div>
                </body>
            </html>
        </ClerkProvider>
    );
}
