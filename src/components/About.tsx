import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import aboutData from '../data/about.json';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-primary text-secondary dark:bg-secondary dark:text-primary py-16 px-8"
    >
      <h2 className="text-3xl font-bold mb-8">{aboutData.title}</h2>

      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2 p-4">
          <div className="mb-4">
            <p className="text-base text-xl italic text-secondary dark:text-primary">
              <span className="block sm:inline">I am a {' '}</span>
              <TypeAnimation
                sequence={aboutData.typewriterDescriptions.flatMap((desc) => [desc, 1000])}
                speed={50}
                className="block sm:inline"
                style={{ display: 'inline-block' }}
                repeat={Infinity}
              />
            </p>
          </div>

          {aboutData.description.map((item, index) => (
            <p key={index} className="mb-4 text-justify">
              {item}
            </p>
          ))}
          <a
            href="/assets/Joshua Nee Ting Feng Resume.pdf"
            download
            className="inline-block bg-accent text-primary px-4 py-2 rounded hover:bg-secondary hover:text-primary dark:hover:bg-primary dark:hover:text-secondary transition"
          >
            Download Resume
          </a>
        </div>

        <div className="md:w-1/2 p-4 text-center">
          <Image
            src="/assets/photo.jpeg"
            alt="Profile Photo"
            width={500}
            height={500}
            className="mx-auto object-contain w-full md:w-auto rounded-2xl shadow-lg border-2 border-secondary dark:border-primary transform transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-2 hover:shadow-xl"
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
