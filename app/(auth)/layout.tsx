import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { title } from "process";
import React from "react";

export const metadata = {
    title: "Analytickr",
    description: "Analyser virksomheder inden du investerer",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className="{inter.class}">{children}</body>
            </html>
        </ClerkProvider>
    );
}
