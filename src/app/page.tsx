"use client";

import IntroOverlay from "@/components/home/IntroOverlay";
import ProfileSelector from "@/components/home/ProfileSelector";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const INTRO_OVERLAY_DURATION = 2200;
const CONTENT_FADE_DELAY = 2700;

const HomePage: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const overlayTimer = setTimeout(
      () => setShowOverlay(false),
      INTRO_OVERLAY_DURATION
    );
    const contentTimer = setTimeout(
      () => setContentVisible(true),
      CONTENT_FADE_DELAY
    );

    return () => {
      clearTimeout(overlayTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#141414] text-white">
      <AnimatePresence>{showOverlay && <IntroOverlay />}</AnimatePresence>

      <motion.main
        aria-hidden={!contentVisible}
        className="relative z-10 flex min-h-screen items-center justify-center px-6 pb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: contentVisible ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <ProfileSelector />
      </motion.main>
    </div>
  );
};

export default HomePage;
