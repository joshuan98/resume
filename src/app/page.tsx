'use client';

import BackToTopButton from '@/components/BackToTopButton';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import About from '../components/About';
import Academics from '../components/Academics';
import Contact from '../components/Contact';
import Introduction from '../components/Introduction';
import LoadingScreen from '../components/LoadingScreen';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Work from '../components/Work';

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <div className={`relative ${isLoading ? 'overflow-hidden' : ''}`}>
        {isLoading && <LoadingScreen onFinishLoading={handleLoadingComplete} />}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
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
          <BackToTopButton />
        </motion.div>
      </div>
    </>
  );
};

export default HomePage;
