import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const handleGetStarted = () => {
    console.log('Navigate to get started');
    // TODO: Implement navigation logic with React Router
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-2E3140 text-white">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Start Exploring?</h2>
        <p className="text-xl text-F2F2F2 mb-8">
          Join thousands of travelers who discover new places every day.
        </p>
        <motion.button
          className="px-8 py-4 bg-white text-0486D8 rounded-full font-semibold text-lg hover:bg-F2F2F2 transition shadow-lg flex items-center gap-2 mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGetStarted}
        >
          Get Started Free <span className="text-xl">→</span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CallToAction;
