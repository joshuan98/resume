'use client';

import { motion } from 'framer-motion';
import React from 'react';
import ProfileLinks from './ProfileLinks';

const Introduction: React.FC = () => {
  return (
    <section
      id="introduction"
      className="bg-secondary text-primary dark:bg-primary dark:text-secondary py-24 px-8 flex flex-col items-center justify-center"
    >
      <div className="title-container mb-4">
        <motion.h1
          className="sm:text-5xl text-4xl"
          animate={{
            y: [2, -2, 2],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          This is Me
        </motion.h1>
      </div>

      <div className="title-container mb-8">
        <motion.h1
          className="sm:text-5xl text-4xl"
          animate={{
            y: [2, -2, 2],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          - Joshua Nee
        </motion.h1>
      </div>

      <ProfileLinks />
    </section>
  );
};

export default Introduction;
