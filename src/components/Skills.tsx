'use client';

import { motion } from 'framer-motion';
import React from 'react';
import skillsData from '../data/skills.json';

const getSkillLevelColor = (level: string) => {
  switch (level) {
    case 'proficient':
      return {
        bgText: 'bg-lime-600',
        bgBar: 'bg-lime-800',
        width: '80%',
      };
    case 'intermediate':
      return {
        bgText: 'bg-blue-600',
        bgBar: 'bg-blue-800',
        width: '50%',
      };
    case 'basic':
      return {
        bgText: 'bg-red-600',
        bgBar: 'bg-red-800',
        width: '30%',
      };
    default:
      return {
        bgText: 'bg-gray-600',
        bgBar: 'bg-gray-800',
        width: '0%',
      };
  }
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-primary text-secondary dark:bg-secondary dark:text-primary py-16 px-8">
      <h2 className="text-3xl font-bold mb-8">
        {skillsData.title}
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {skillsData.content.map((item, index) => {
          const { bgText, bgBar, width } = getSkillLevelColor(item.level);
          return (
            <div key={index} className="flex items-center">
              <div className={`w-32 text-sm font-medium text-center text-secondary p-2 rounded ${bgText}`}>
                {item.name}
              </div>
              <div className="flex-1 ml-4 bg-gray-300 rounded-full h-4">
                <motion.div
                  className={`${bgBar} h-4 rounded-full`}
                  initial={{ width: '0%' }}
                  whileInView={{ width }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
