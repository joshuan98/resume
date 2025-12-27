"use client";

import { PROFILES } from "@/constants/profiles";
import { motion } from "framer-motion";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
import React from "react";

const wordmark = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

type ProfileNavProps = {
  activeLabel?: string;
};

const ProfileNav: React.FC<ProfileNavProps> = ({ activeLabel }) => {
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
          {PROFILES.map((profile) => {
            const isActive =
              activeLabel?.toLowerCase() === profile.name.toLowerCase();

            return (
              <Link
                key={profile.href}
                href={profile.href}
                className={`relative inline-block transition hover:text-white ${isActive ? "text-white" : ""
                  }`}
              >
                {profile.name}
                {isActive && (
                  <motion.span
                    layoutId="activeProfileUnderline"
                    className="absolute left-0 right-0 -bottom-2 h-[2px] bg-red-500"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default ProfileNav;
