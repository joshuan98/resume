'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import academicsData from '../data/academics.json';

const Academics: React.FC = () => {
  return (
    <section id="academics" className="bg-primary text-secondary py-16 px-8">
      <h2 className="text-3xl font-bold mb-8">{academicsData.title}</h2>
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical timeline line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-secondary"></div>

        {/* Timeline Entries */}
        {academicsData.content.map((item, index) => {
          const isLeftAligned = index % 2 === 1; // Alternate sides

          // Define animation variants for content
          const contentVariants = {
            hidden: { opacity: 0, x: isLeftAligned ? -100 : 100 },
            visible: { opacity: 1, x: 0 },
          };

          // Define animation variants for the marker
          const markerVariants = {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          };

          return (
            <div
              key={index}
              className={`mb-8 flex flex-col md:flex-row justify-between items-center w-full ${!isLeftAligned ? 'md:flex-row-reverse' : ''
                }`}
            >
              <div className="order-1 w-full md:w-5/12"></div>

              {/* Marker */}
              <motion.div
                className="z-20 flex items-center justify-center order-2 w-8 h-8 rounded-full border-4 border-accent bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                variants={markerVariants}
              ></motion.div>

              {/* Timeline Content */}
              <motion.div
                className="order-3 w-full md:w-5/12 bg-secondary text-primary p-4 md:p-6 rounded-lg shadow-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                variants={contentVariants}
              >
                <h3 className="text-xl font-semibold">{item.dateRange}</h3>
                <p className="italic mb-2">{item.institution}</p>
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={150}
                  height={150}
                  className="mx-auto object-contain my-4 w-full md:w-auto"
                  style={{ width: '150px', height: '150px' }}
                />
                <ul className="list-disc list-inside">
                  {item.description.map((subItem, subIndex) => {
                    if (typeof subItem === 'string') {
                      return <li key={subIndex} style={{ textAlign: 'justify' }}>{subItem}</li>;
                    } else if (
                      typeof subItem === 'object' &&
                      subItem.title &&
                      subItem.description
                    ) {
                      return (
                        <li key={subIndex} style={{ textAlign: 'justify' }}>
                          {subItem.title}
                          <ul className="list-disc list-inside ml-4">
                            {subItem.description.map((d, idx) => (
                              <li key={idx} style={{ textAlign: 'justify' }}>{d}</li>
                            ))}
                          </ul>
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Academics;
