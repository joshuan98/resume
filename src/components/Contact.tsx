'use client';

import { motion } from 'framer-motion';
import React from 'react';
import ProfileLinks from './ProfileLinks';

const Contact: React.FC = () => {
  const popEffect = {
    initial: { scale: 0.8, opacity: 0 },
    inView: { scale: 1, opacity: 1 },
  };

  return (
    <section id="contact" className="bg-primary text-secondary py-16 px-8">
      <h2 className="text-3xl font-bold mb-8">
        <span className="inline-block overflow-hidden whitespace-nowrap">
          Contact Me
        </span>
      </h2>
      <div className="max-w-3xl mx-auto text-center">
        <motion.h3
          className="text-xl font-semibold mb-4"
          initial="initial"
          whileInView="inView"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 300 }}
          variants={popEffect}
        >
          Feel free to reach out to me!
        </motion.h3>

        <motion.a
          href="mailto:joshuanee@u.nus.edu"
          className="text-lg font-medium text-accent mb-6 block hover:underline"
          initial="initial"
          whileInView="inView"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 300 }}
          variants={popEffect}
        >
          joshuanee@u.nus.edu
        </motion.a>

        <ProfileLinks />
      </div>
    </section>
  );
};

export default Contact;
