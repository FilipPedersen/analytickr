import React from 'react';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Input } from '../ui/input';

export const Topbar = () => {
    return (
        <nav className="relative container min-h-[60px] w-full flex items-center max-h-10 border px-4 rounded-full my-4">
            <nav className="flex w-full justify-between items-center">
                <div className="w-full">
                    <SignedIn>
                        <div className="flex gap-4 sm:grid sm:grid-cols-3 items-center">
                            <h1>Analytickr</h1>
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
