import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import { Topbar } from "@/components/shared/Topbar";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html suppressHydrationWarning lang="en">
                <body className={inter.className}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem
                    >
                        <div className="min-h-screen w-full items-center flex-col flex pb-32 overflow-hidden bg-background">
                            <Topbar />
                            {children}
                        </div>
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
