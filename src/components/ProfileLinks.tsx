'use client';

import Image from 'next/image';
import React from 'react';

const ProfileLinks: React.FC = () => {
  return (
    <div className="flex flex-row justify-center flex-wrap gap-4">
      <a
        href="https://www.linkedin.com/in/joshua-nee/"
        target="_blank"
        rel="noopener noreferrer"
        className="sm:w-12 w-8 sm:h-12 h-8 relative"
      >
        <Image
          src="/assets/linkedin.png"
          alt="LinkedIn Profile"
          width={48}
          height={48}
          priority
          className="object-contain hover:opacity-75 transition"
        />
      </a>

      <a
        href="/assets/Resume_Joshua Nee.pdf"
        download
        className="bg-lime-500 text-black sm:text-lg text-sm px-4 py-2 rounded hover:bg-primary hover:text-secondary dark:hover:bg-secondary dark:hover:text-primary transition flex items-center justify-center"
      >
        Download Resume
      </a>

      <a
        href="https://github.com/joshuan98"
        target="_blank"
        rel="noopener noreferrer"
        className="sm:w-12 w-8 sm:h-12 h-8 relative"
      >
        <Image
          src="/assets/github_light.png"
          alt="GitHub Profile"
          width={48}
          height={48}
          priority
          className="object-contain hover:opacity-75 transition dark:hidden"
        />
        <Image
          src="/assets/github_dark.png"
          alt="GitHub Profile Dark"
          width={48}
          height={48}
          priority
          className="object-contain hover:opacity-75 transition hidden dark:inline"
        />
      </a>
    </div>
  );
};

export default ProfileLinks;
