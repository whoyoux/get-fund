import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeSwitcher } from "./theme-switcher";
import { PiggyBank } from "lucide-react";

import { currentUser } from "@clerk/nextjs";

const Header = async () => {
    const user = await currentUser();

    return (
        <nav className="w-full flex items-center justify-between px-4 md:px-8 xl:px-12 py-4 md:py-8 bg-background border-b shadow dark:shadow-none">
            <Link href="/">
                <h1 className="font-bold text-xl md:text-2xl flex items-center gap-2">
                    <PiggyBank size={28} /> Get Fund
                </h1>
            </Link>
            <div className="flex items-center gap-2">
                {!!user ? (
                    <Button>{user.emailAddresses[0].emailAddress}</Button>
                ) : (
                    <Link href="/sign-up">
                        <Button>Sign up</Button>
                    </Link>
                )}
                <ThemeSwitcher />
            </div>
        </nav>
    );
};

export default Header;
