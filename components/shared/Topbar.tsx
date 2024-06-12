import React from 'react';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Input } from '../ui/input';
import Link from 'next/link';

export const Topbar = () => {
    return (
        <nav className=" w-full bg-white z-20">
            <nav className="w-full bg-white z-10 py-4 border flex justify-between items-center">
                <div className="container max-w-[1500px] flex w-full justify-between">
                    <SignedIn>
                        <div className="flex gap-4 sm:grid sm:grid-cols-3 items-center w-full">
                            <div className="flex gap-5">
                                <h1>Analytickr</h1>
                                <Link href="/dashboard">Dashboard</Link>
                            </div>

                            <Input placeholder="Search for a company (TICKR)"></Input>
                            <div className="flex items-center justify-end">
                                <UserButton afterSignOutUrl="/landing" />
                            </div>
                        </div>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton>
                            <button className="rounded-full text-sm shadow-sm border h-9 px-2 bg-background">
                                Sign in
                            </button>
                        </SignInButton>
                    </SignedOut>
                </div>
            </nav>
        </nav>
    );
};
