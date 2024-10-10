import React from 'react';
import Image from 'next/image';
import projectsData from '../data/projects.json';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-secondary text-primary py-16 px-8">
      <h2 className="text-3xl font-bold mb-8">
        {projectsData.title}
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.content.map((item, index) => {
          const colSpanClass = index === 0 || index === 3 ? 'col-span-1 md:col-span-2' : '';

          return (
            <div
              key={index}
              className={`border-2 border-accent p-6 rounded-lg flex flex-col ${colSpanClass}`}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <Image
                src={item.image.src}
                alt={item.image.alt}
                width={150}
                height={150}
                className="mx-auto object-contain mb-4 w-full md:w-auto"
                style={{ width: '150px', height: '150px' }}
              />
              <ul className="list-disc list-inside mb-4 flex-grow">
                {item.description.map((subItem, subIndex) => (
                  <li key={subIndex}>{subItem}</li>
                ))}
              </ul>
              {item.links && item.links.length > 0 && (
                <div className="mt-auto flex justify-center space-x-4">
                  {item.links.map((link, subIndex) => (
                    <a
                      key={subIndex}
                      href={link.url}
                      className="bg-accent text-primary px-4 py-2 rounded hover:bg-primary hover:text-secondary transition"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
