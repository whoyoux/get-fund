import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import Nav from "@/components/nav";

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    icons: {
        icon: "/favicon.icon",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen font-sans antialiased bg-gray-200 dark:bg-background",
                    fontSans.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Nav />
                    <main className="px-4 md:px-8 xl:px-12">{children}</main>
                </ThemeProvider>
            </body>
        </html>
    );
}
