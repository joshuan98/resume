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
        <a href="mailto:joshuanee@u.nus.edu" className="text-lg font-medium text-accent mb-6 block transition hover:underline">
          joshuanee@u.nus.edu
        </a>
        <ProfileLinks />
      </div>
    </section>
  );
};

export default Contact;
