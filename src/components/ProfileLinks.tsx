import React from 'react';
import Image from 'next/image';

const ProfileLinks: React.FC = () => {
  return (
    <div className="flex flex-row justify-center flex-wrap gap-4">
      <a href="https://www.linkedin.com/in/joshua-nee/" target="_blank" rel="noopener noreferrer">
        <Image src="/assets/linkedin.png" alt="LinkedIn Profile" width={50} height={50} className="hover:opacity-75 transition" />
      </a>
      <a href="/assets/resume.pdf" download className="bg-lime-500 text-black px-4 py-2 rounded hover:bg-secondary hover:text-primary transition">
        Download Resume
      </a>
      <a href="https://github.com/joshuan98" target="_blank" rel="noopener noreferrer">
        <Image src="/assets/github.png" alt="GitHub Profile" width={50} height={50} className="hover:opacity-75 transition" />
      </a>
    </div>
  );
};

export default ProfileLinks;
