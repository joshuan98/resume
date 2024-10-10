import React from 'react';
import Image from 'next/image';
import academicsData from '../data/academics.json';

const Academics: React.FC = () => {
  return (
    <section id="academics" className="bg-primary text-secondary py-16 px-8">
      <h2 className="text-3xl font-bold mb-8">{academicsData.title}</h2>
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-secondary"></div>

        {/* Timeline Entries */}
        {academicsData.content.map((item, index) => {
          const isRightAligned = index % 2 === 0; // Alternate sides
          return (
            <div
              key={index}
              className={`mb-8 flex justify-between items-center w-full ${!isRightAligned ? 'flex-row-reverse' : ''
                }`}
            >
              <div className="order-1 w-5/12"></div>
              {/* Marker */}
              <div className="z-20 flex items-center justify-center order-2 w-8 h-8 rounded-full border-4 border-accent bg-white"></div>
              <div className="order-3 w-5/12 bg-secondary text-primary p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">{item.dateRange}</h3>
                <p className="italic mb-2">{item.institution}</p>
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={150}
                  height={150}
                  className="mx-auto object-contain my-4"
                />
                <ul className="list-disc list-inside">
                  {item.description.map((subItem, subIndex) => {
                    if (typeof subItem === 'string') {
                      return <li key={subIndex}>{subItem}</li>;
                    } else if (typeof subItem === 'object' && subItem.title && subItem.description) {
                      return (
                        <li key={subIndex}>
                          {subItem.title}
                          <ul className="list-disc list-inside ml-4">
                            {subItem.description.map((d, idx) => (
                              <li key={idx}>{d}</li>
                            ))}
                          </ul>
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Academics;
