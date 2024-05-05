import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Input } from "../ui/input";

export const Topbar = () => {
    return (
        <div className="w-full z-10 py-4 shadow-md flex justify-between items-center min-h-[68px]">
            <nav className="container flex w-full justify-between">
                <h1>Analytickr</h1>
                <div className="flex flex-row gap-2 items-center">
                    <SignedIn>
                        <Input placeholder="Søg ticker"></Input>
                        <UserButton afterSignOutUrl="/landing" />
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
        </div>
    );
};
