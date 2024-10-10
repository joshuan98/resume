import React from 'react';
import Image from 'next/image';
// Adjust the import path based on your file structure
import aboutData from '../data/about.json';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-secondary text-primary py-16 px-8">
      <h2 className="text-3xl font-bold mb-8">
        {aboutData.title}
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2 p-4">
          {aboutData.description.map((item, index) => (
            <p key={index} className="mb-4">
              {item}
            </p>
          ))}
          <a
            href="/assets/resume.pdf"
            download
            className="inline-block bg-accent text-primary px-4 py-2 rounded hover:bg-primary hover:text-secondary transition"
          >
            Download Resume
          </a>
        </div>
        <div className="md:w-1/2 p-4 text-center">
          <Image
            src="/assets/photo.jpeg"
            alt="Profile Photo"
            width={300}
            height={300}
            className="mx-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
