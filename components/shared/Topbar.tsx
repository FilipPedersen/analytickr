import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Input } from "../ui/input";

export const Topbar = () => {
    return (
        <nav className="relative container min-h-[56px] w-full flex items-center justify-between shrink-0 bg-[#ffffff66] backdrop-blur-xl max-h-10 border shadow-[rgba(85,166,246,0.1)_0px_0px_1px,rgba(85,166,246,0.15)_1px_1.5px_2px_-1px,rgba(85,166,246,0.15)_4px_4px_12px_-2.5px] px-4 rounded-[999px] border-solid border-[#bfccd980]">
            <nav className="container flex w-full justify-between items-center">
                <h1>Analytickr</h1>
                <div className="flex flex-row gap-2 items-center">
                    <SignedIn>
                        <Input placeholder="Search for a company (TICKR)"></Input>
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
        </nav>
    );
};
