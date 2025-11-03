"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar: React.FC = () => {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="flex flex-col space-y-4">
            <h2 className="text-lg font-bold mb-4">Navigation</h2>
            <Link
                href="/"
                className={`hover:text-gray-300 ${isActive("/") ? "font-semibold text-white" : ""}`}
            >
                Home
            </Link>
            <Link
                href="/experience"
                className={`hover:text-gray-300 ${isActive("/experience") ? "font-semibold text-white" : ""}`}
            >
                Experience
            </Link>
            <Link
                href="/education"
                className={`hover:text-gray-300 ${isActive("/education") ? "font-semibold text-white" : ""}`}
            >
                Education
            </Link>
            <Link
                href="/skills"
                className={`hover:text-gray-300 ${isActive("/skills") ? "font-semibold text-white" : ""}`}
            >
                Skills
            </Link>
            <Link
                href="/projects"
                className={`hover:text-gray-300 ${isActive("/projects") ? "font-semibold text-white" : ""}`}
            >
                Projects
            </Link>
            <Link
                href="/contact"
                className={`hover:text-gray-300 ${isActive("/contact") ? "font-semibold text-white" : ""}`}
            >
                Contact
            </Link>
            <Link
                href="/about"
                className={`hover:text-gray-300 ${isActive("/about") ? "font-semibold text-white" : ""}`}
            >
                About This Site
            </Link>
        </nav>
    );
};

export default Sidebar;