import React from 'react';
import ProfileLinks from './ProfileLinks';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-primary text-secondary py-16 px-8">
      <h2 className="text-3xl font-bold mb-8">
        <span className="inline-block overflow-hidden whitespace-nowrap">
          Contact Me
        </span>
      </h2>
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-xl font-semibold mb-4">Feel free to reach out to me!</h3>
        <p className="mb-6">joshuanee@u.nus.edu</p>
        <ProfileLinks />
      </div>
    </section>
  );
};

export default Contact;
