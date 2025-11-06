import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

import Sidebar from "@/components/Sidebar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${inter.className} min-h-screen bg-zinc-50 font-sans dark:bg-black`}>
        <div className="flex flex-col md:flex-row">
            {/* Mobile Top Navbar: Fixed on scroll, visible only on small screens */}
            <header className="fixed top-0 z-50 w-full bg-gray-800 p-4 text-white shadow-md md:hidden">
                <Sidebar isMobile={true} />
            </header>

            {/* Desktop Sidebar: Hidden on mobile */}
            <aside className="hidden w-1/5 bg-gray-800 p-6 text-white md:block">
                <Sidebar isMobile={false} />
            </aside>

            {/* Main Content: Adjust top padding for mobile to account for fixed navbar */}
            <main className="w-full bg-white pt-16 dark:bg-black min-h-screen md:w-4/5 md:pt-0">
                {children}
            </main>
        </div>
        </body>
        </html>
    );
}
