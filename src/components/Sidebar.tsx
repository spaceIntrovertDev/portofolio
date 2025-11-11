"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarProps {
    isMobile: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobile }) => {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <nav
            className={`flex ${
                isMobile ? "flex-row justify-around space-x-4" : "flex-col space-y-4"
            }`}
        >
            {isMobile ? null : (
                <h2 className="text-lg font-bold mb-4">Navigation</h2>
            )}
            <Link
                href="/"
                className={`hover:text-gray-300 ${isActive("/") ? "font-semibold text-white" : ""} ${
                    isMobile ? "text-sm px-2 py-1" : ""
                }`}
            >
                Home
            </Link>
            <Link
                href="/experience"
                className={`hover:text-gray-300 ${isActive("/experience") ? "font-semibold text-white" : ""} ${
                    isMobile ? "text-sm px-2 py-1" : ""
                }`}
            >
                Experience
            </Link>
            <Link
                href="/education"
                className={`hover:text-gray-300 ${isActive("/education") ? "font-semibold text-white" : ""} ${
                    isMobile ? "text-sm px-2 py-1" : ""
                }`}
            >
                Education
            </Link>
            <Link
                href="/skills"
                className={`hover:text-gray-300 ${isActive("/skills") ? "font-semibold text-white" : ""} ${
                    isMobile ? "text-sm px-2 py-1" : ""
                }`}
            >
                Skills
            </Link>
            <Link
                href="/projects"
                className={`hover:text-gray-300 ${isActive("/projects") ? "font-semibold text-white" : ""} ${
                    isMobile ? "text-sm px-2 py-1" : ""
                }`}
            >
                Projects
            </Link>
            <Link
                href="/contact"
                className={`hover:text-gray-300 ${isActive("/contact") ? "font-semibold text-white" : ""} ${
                    isMobile ? "text-sm px-2 py-1" : ""
                }`}
            >
                Contact
            </Link>
            <Link
                href="/about"
                className={`hover:text-gray-300 ${isActive("/about") ? "font-semibold text-white" : ""} ${
                    isMobile ? "text-sm px-2 py-1" : ""
                }`}
            >
                About This Site
            </Link>
        </nav>
    );
};

export default Sidebar;