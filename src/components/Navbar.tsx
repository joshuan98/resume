"use client";

import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import DarkModeToggle from './DarkModeToggle';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = ['About', 'Work', 'Projects', 'Academics', 'Skills', 'Contact'];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Framer Motion variants for the mobile menu
  const menuVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
        when: "afterChildren",
      },
    },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="sticky top-0 bg-primary py-4 z-50">
      <div className="flex items-center justify-between px-4 sm:px-8">
        {/* Hamburger Icon (visible on small screens) */}
        <button
          className="sm:hidden text-accent focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>

        {/* Navigation Links (visible on large screens) */}
        <ul className="hidden sm:flex space-x-8 justify-center flex-1">
          {sections.map((section) => (
            <li key={section} className="list-none">
              <a
                href={`#${section.toLowerCase()}`}
                className="text-lg sm:text-xl text-accent no-underline px-4 py-2 rounded transition-transform duration-300 ease-in-out hover:bg-secondary hover:text-primary hover:scale-110"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <div className="flex items-center">
          <DarkModeToggle />
        </div>
      </div>

      {/* Mobile Menu (visible on small screens when isMenuOpen is true) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="sm:hidden bg-primary px-4"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <motion.ul className="flex flex-col space-y-4 py-4">
              {sections.map((section) => (
                <motion.li
                  key={section}
                  className="list-none"
                  variants={itemVariants}
                  onClick={closeMenu}
                >
                  <a
                    href={`#${section.toLowerCase()}`}
                    className="text-lg text-accent no-underline px-4 py-2 rounded transition-transform duration-300 ease-in-out hover:bg-secondary hover:text-primary hover:scale-110 block"
                  >
                    {section}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
