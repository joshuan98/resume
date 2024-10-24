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
        href="/assets/Joshua Nee Ting Feng Resume.pdf"
        download
        className="bg-lime-500 text-black sm:text-lg text-sm px-4 py-2 rounded hover:bg-secondary hover:text-primary transition flex items-center justify-center"
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
          src="/assets/github.png"
          alt="GitHub Profile"
          width={48}
          height={48}
          priority
          className="object-contain hover:opacity-75 transition"
        />
      </a>
    </div>
  );
};

export default ProfileLinks;
