import React from 'react';
import About from '../components/About';
import Academics from '../components/Academics';
import Work from '../components/Work';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Navbar from '@/components/Navbar';
import Introduction from '@/components/Introduction';

const HomePage: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default HomePage;
