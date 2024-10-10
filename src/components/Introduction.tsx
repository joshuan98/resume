import React from 'react';
import ProfileLinks from './ProfileLinks';

const Introduction: React.FC = () => {
  return (
    <section id="introduction" className="bg-black text-white py-24 px-8 flex flex-col items-center justify-center">
      <div className="title-container mb-4">
        <h1 className="text-5xl">This is Me</h1>
      </div>
      <div className="title-container mb-8">
        <h1 className="text-5xl">- Joshua Nee</h1>
      </div>
      <ProfileLinks />
    </section>
  );
};

export default Introduction;
