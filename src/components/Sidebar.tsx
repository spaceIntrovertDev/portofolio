"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";

interface SidebarProps {
  isMobile: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobile }) => {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    if (!isMobile || !navRef.current) return;

    const updateHeight = () => {
      const height = navRef.current!.offsetHeight;
      document.documentElement.style.setProperty(
        "--mobile-nav-height",
        `${height}px`,
      );
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [isMobile]);

  return (
    <nav
      ref={navRef}
      className={`flex ${
        isMobile
          ? "flex-row flex-wrap justify-center gap-x-3 gap-y-2 py-2"
          : "flex-col space-y-4"
      }`}
    >
      {isMobile ? null : <h2 className="text-lg font-bold mb-4">Navigation</h2>}
      {[
        { href: "/", label: "Home" },
        { href: "/experience", label: "Experience" },
        { href: "/education", label: "Education" },
        { href: "/skills", label: "Skills" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
        { href: "/about", label: "About This Site" },
      ].map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`hover:text-gray-300 transition-colors ${
            isActive(href) ? "font-semibold text-white" : ""
          } ${isMobile ? "text-sm px-3 py-1.5 rounded-md bg-gray-700" : ""}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Sidebar;
