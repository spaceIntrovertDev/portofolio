import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A modern portfolio with sidebar navigation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-zinc-50 font-sans dark:bg-black`}
      >
        <div className="flex flex-col md:flex-row">
          <header className="fixed inset-x-0 top-0 z-50 bg-gray-800 p-4 text-white shadow-md md:hidden">
            <Sidebar isMobile={true} />
          </header>
          <aside className="hidden w-1/5 bg-gray-800 p-6 text-white md:block">
            <Sidebar isMobile={false} />
          </aside>
          <main
            className="w-full bg-white dark:bg-black min-h-screen md:w-4/5"
            style={{
              paddingTop: "var(--mobile-nav-height, 4rem)",
            }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
