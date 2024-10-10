import React from 'react';
import skillsData from '../data/skills.json';
import { getSkillLevelColor } from '../utils/skillsUtils';


const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-secondary text-primary py-16 px-8">
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
                <div className={`${bgBar} h-4 rounded-full`} style={{ width }}></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;