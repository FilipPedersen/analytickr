import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { ClerkProvider, UserButton } from '@clerk/nextjs';
import { Topbar } from '@/components/shared/Topbar';
import { ThemeProvider } from '@/components/shared/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Analytickr',
    description:
        'Finance is better visually - View financial data for your favorite companies',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html suppressHydrationWarning lang="en">
                <body className={`${inter.className} bg-background`}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem
                    >
                        <Topbar />
                        <div className="mx-auto max-w-[108rem] px-6 text-left md:px-8">
                            {children}
                        </div>
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
