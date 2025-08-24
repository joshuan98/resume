import figlet from 'figlet';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import aboutData from '../data/about.json';

const About: React.FC = () => {
  const [asciiTitle, setAsciiTitle] = useState<string>('');
  const [hueOffset, setHueOffset] = useState<number>(0);

  const generateAsciiTitle = async () => {
    const response = await fetch('/fonts/standard.flf');
    const fontData = await response.text();

    figlet.parseFont('Standard', fontData);
    figlet.text(aboutData.title, { font: 'Standard' }, (err: unknown, data: string | undefined) => {
      if (!err && data) {
        setAsciiTitle(data);
      }
    });
  };

  useEffect(() => {
    generateAsciiTitle();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHueOffset((prev) => (prev + 10) % 360);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const getColor = (index: number, total: number) => {
    const hue = (hueOffset + (index / total) * 360) % 360;
    return `hsl(${hue}, 100%, 60%)`;
  };

  return (
    <section
      id="about"
      className="bg-primary text-secondary dark:bg-secondary dark:text-primary py-16 px-8"
    >
      <h2 className="mb-8">
        {/* Terminal wrapper */}
        <div className="bg-black rounded-md border border-gray-700 shadow-lg overflow-x-auto font-mono text-green-400">
          {/* Fake terminal top bar */}
          <div className="flex items-center space-x-2 px-3 py-2 bg-gray-900 border-b border-gray-800 rounded-t-md">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          {/* Content */}
          <pre className="p-4 whitespace-pre text-xs">
            {asciiTitle.split('\n').map((line, lineIndex) => (
              <div key={lineIndex} className="flex">
                {line.split('').map((char, charIndex) => (
                  <span
                    key={charIndex}
                    style={{
                      color: getColor(charIndex, line.length),
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            ))}
          </pre>
        </div>
      </h2>



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
            href="/assets/Resume_Joshua Nee.pdf"
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
    </section >
  );
};

export default About;
