"use client";

import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import React from "react";

const wordmark = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

type NavLink = {
  href: string;
  label: string;
};

type NetflixNavProps = {
  activeLabel?: string;
};

const navLinks: NavLink[] = [
  { href: "/recruiter", label: "Recruiter" },
  { href: "/developer", label: "Developer" },
  { href: "/stalker", label: "Stalker" },
];

const NetflixNav: React.FC<NetflixNavProps> = ({ activeLabel }) => {
  return (
    <nav className="sticky top-0 z-40 bg-gradient-to-b from-black via-black/80 to-transparent py-6">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className={`${wordmark.className} text-3xl uppercase tracking-[0.65rem] text-transparent transition hover:opacity-90 sm:text-4xl`}
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(229,9,20,0.98), rgba(255,80,80,0.85))",
            WebkitBackgroundClip: "text",
          }}
        >
          Joshua Nee
        </Link>

        <div className="flex items-center gap-4 text-sm font-semibold uppercase tracking-wide text-neutral-300 sm:gap-6">
          {navLinks.map((link) => {
            const isActive =
              activeLabel?.toLowerCase() === link.label.toLowerCase();

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative inline-block transition hover:text-white ${
                  isActive ? "text-white" : ""
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute left-0 right-0 -bottom-2 h-[2px] bg-red-500" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NetflixNav;
