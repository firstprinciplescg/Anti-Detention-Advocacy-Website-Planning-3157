import React from 'react';
import { motion } from 'framer-motion';
import HandDrawnIllustration from './HandDrawnIllustration';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Education & Action Against
              <span className="text-red-600 block">Concentration Camps</span>
            </h1>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              Understanding the economic, social, and moral failures of detention facilities 
              and mass incarceration systems that violate human dignity and rights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <motion.a
                href="#education"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
              <motion.a
                href="#action"
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Take Action
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <HandDrawnIllustration type="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;