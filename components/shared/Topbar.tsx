import React from "react";
import { ModeToggle } from "./ModeToggle";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export const Topbar = () => {
    return (
        <nav className="flex bg-secondary w-full container items-center rounded-full justify-between p-4">
            <h1>Analytickr</h1>
            <div className="flex flex-row gap-2 items-center">
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <SignInButton>
                        <button className="rounded-full text-sm shadow-sm border h-9 px-2 bg-background">
                            Sign in
                        </button>
                    </SignInButton>
                </SignedOut>
                <ModeToggle />
            </div>
        </nav>
    );
};
