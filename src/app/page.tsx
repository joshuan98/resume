'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LoadingScreen from '../components/LoadingScreen';
import Navbar from '../components/Navbar';
import Introduction from '../components/Introduction';
import About from '../components/About';
import Academics from '../components/Academics';
import Work from '../components/Work';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

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
        </motion.div>
      </div>
    </>
  );
};

export default HomePage;
