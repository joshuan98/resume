"use client";

import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = ['About', 'Work', 'Projects', 'Academics', 'Skills', 'Contact'];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 bg-primary py-3 z-50">
      <div className="flex justify-between items-center px-4 sm:px-8">
        <button
          className="sm:hidden text-accent focus:outline-none"
          onClick={toggleMenu}
        >
          <FaBars className="w-6 h-6" />
        </button>
      </div>

      <ul
        className={`${isMenuOpen ? 'block' : 'hidden'
          } sm:flex flex-col sm:flex-row justify-center items-center flex-wrap`}
      >
        {sections.map((section) => (
          <li key={section} className="list-none my-2 sm:my-0">
            <a
              href={`#${section.toLowerCase()}`}
              onClick={closeMenu}
              className="text-lg sm:text-xl text-accent no-underline px-4 py-2 rounded transition-transform duration-300 ease-in-out hover:bg-secondary hover:text-primary hover:scale-110"
              style={{ display: 'inline-block' }}
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
