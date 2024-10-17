'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import About from '../components/About';
import Academics from '../components/Academics';
import Work from '../components/Work';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Navbar from '@/components/Navbar';
import Introduction from '@/components/Introduction';

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="fixed inset-0 flex items-center justify-center bg-black text-white text-4xl font-bold"
        >
          Welcome to my website
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Navbar />
          <div className="sections">
            <Introduction />
            <About />
            <Work />
            <Projects />
            <Academics />
            <Skills />
            <Contact />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default HomePage;
