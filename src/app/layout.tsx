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
        <body className={`${inter.className} min-h-screen bg-zinc-50 dark:bg-black`}>
        <div className="flex">
            <aside className="w-1/5 bg-gray-800 p-6 text-white">
                <Sidebar />
            </aside>
            <main className="w-4/5 bg-white dark:bg-black min-h-screen">
                {children}
            </main>
        </div>
        </body>
        </html>
    );
}
