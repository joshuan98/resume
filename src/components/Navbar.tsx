import React from 'react';

const Navbar: React.FC = () => {
  const sections = ['About', 'Work', 'Projects', 'Academics', 'Skills', 'Contact'];

  return (
    <nav className="sticky top-0 bg-primary py-1 z-50">
      <ul className="flex flex-row justify-center items-center flex-wrap">
        {sections.map((section) => (
          <li key={section} className="list-none">
            <a
              href={`#${section.toLowerCase()}`}
              className="text-accent no-underline px-8 py-2 rounded transition duration-300 ease-in-out hover:bg-secondary hover:text-primary"
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
