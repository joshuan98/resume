"use client";

import { Bebas_Neue } from "next/font/google";
import { motion } from "framer-motion";
import React from "react";

const wordmark = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const IntroOverlay: React.FC = () => {
  return (
    <motion.div
      key="intro-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.1, ease: "easeInOut" }}
    >
      <motion.div
        className="relative flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
      >
        <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl">
          <div className="h-full w-full bg-[radial-gradient(circle_at_50%_20%,rgba(229,9,20,0.65),transparent_55%)] opacity-80" />
        </div>

        <motion.span
          className={`${wordmark.className} text-5xl uppercase tracking-[1.1rem] text-transparent sm:text-7xl`}
          initial={{ letterSpacing: "0.4rem" }}
          animate={{ letterSpacing: "1.1rem" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(229,9,20,0.98), rgba(255,80,80,0.85))",
            WebkitBackgroundClip: "text",
          }}
        >
          Joshua Nee
        </motion.span>

        <motion.div
          className="mt-8 h-1 w-32 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-700"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0.8, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default IntroOverlay;
