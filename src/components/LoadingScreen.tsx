'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onFinishLoading: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinishLoading }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onFinishLoading();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinishLoading]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="fixed inset-0 flex items-center justify-center bg-primary text-secondary font-bold z-50"
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl sm:text-3xl leading-snug">
          Welcome to my website
        </h1>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
