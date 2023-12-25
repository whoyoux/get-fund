import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeSwitcher } from "./theme-switcher";

const Nav = () => {
    return (
        <nav className="w-full flex items-center justify-between px-4 md:px-8 xl:px-12 py-4 md:py-8 bg-background border-b shadow">
            <Link href="/">
                <h1 className="font-bold text-xl md:text-2xl">Get Fund</h1>
            </Link>
            <div className="flex items-center gap-2">
                <Link href="/sign-up">
                    <Button>Create your fund</Button>
                </Link>
                <Link href="/sign-in">
                    <Button>Sign in</Button>
                </Link>
                <ThemeSwitcher />
            </div>
        </nav>
    );
};

export default Nav;
