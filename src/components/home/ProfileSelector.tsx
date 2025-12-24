"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { PROFILES } from "@/constants/profiles";

type ProfileSelectorProps = {
  reveal?: boolean;
};

const ProfileSelector: React.FC<ProfileSelectorProps> = ({ reveal = true }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const cardVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 24 },
      show: { opacity: 1, y: 0 },
    }),
    []
  );

  const gridVariants = useMemo(
    () => ({
      hidden: { opacity: 0, scale: 0.96 },
      show: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.7,
          ease: "easeOut",
          delayChildren: 0.1,
          staggerChildren: 0.12,
        },
      },
    }),
    []
  );

  return (
    <div className="flex w-full max-w-4xl flex-col items-center gap-10 text-white">
      <motion.h2
        className="text-3xl font-semibold tracking-tight sm:text-4xl"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Who&apos;s watching?
      </motion.h2>

      <motion.div
        className="grid w-full grid-cols-1 gap-10 text-center sm:grid-cols-3"
        variants={gridVariants}
        initial="hidden"
        animate={reveal ? "show" : "hidden"}
      >
        {PROFILES.map((profile) => {
          const isHovered = hoveredId === profile.id;
          const isDimmed = hoveredId !== null && !isHovered;

          return (
          <motion.div
            key={profile.id}
            className="group"
            variants={cardVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              onHoverStart={() => setHoveredId(profile.id)}
              onHoverEnd={() => setHoveredId(null)}
              animate={{
                scale: isHovered ? 1.06 : isDimmed ? 0.96 : 1,
                y: isHovered ? -10 : isDimmed ? 6 : 0,
                opacity: isDimmed ? 0.55 : 1,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Link
                href={profile.href}
                onFocus={() => setHoveredId(profile.id)}
                onBlur={() => setHoveredId(null)}
                className="flex flex-col items-center gap-4 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500"
              >
                <div
                  className={`flex h-40 w-40 items-center justify-center rounded-md bg-gradient-to-br ${profile.accent} shadow-[0_14px_32px_rgba(0,0,0,0.55)] transition-transform duration-300 ease-out`}
                >
                  <span className="text-5xl font-semibold tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                    {profile.symbol}
                  </span>
                </div>
                <div className="flex flex-col items-center text-neutral-300 transition-colors duration-200 group-hover:text-white group-focus-visible:text-white">
                  <span className="text-lg font-medium uppercase tracking-wide">
                    {profile.name}
                  </span>
                  <span className="mt-1 text-sm text-neutral-400">
                    {profile.tagline}
                  </span>
                </div>
              </Link>
            </motion.div>
          </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ProfileSelector;
