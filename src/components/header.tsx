import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeSwitcher } from "./theme-switcher";
import { PiggyBank } from "lucide-react";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Header = async () => {
    return (
        <nav className="w-full flex items-center justify-between px-4 md:px-8 xl:px-12 py-4 md:py-8 bg-background border-b shadow dark:shadow-none">
            <Link href="/">
                <h1 className="font-bold text-xl md:text-2xl flex items-center gap-2">
                    <PiggyBank size={28} /> Get Fund
                </h1>
            </Link>
            <div className="flex items-center gap-2">
                <SignedIn>
                    {/* Mount the UserButton component */}
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    {/* Signed out users get sign in button */}
                    <SignInButton />
                </SignedOut>
                {/* <ThemeSwitcher /> */}
            </div>
        </nav>
    );
};

export default Header;
