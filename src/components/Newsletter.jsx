import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiCheck } = FiIcons;

const Newsletter = () => {
  // State management remains the same

  return (
    <section id="newsletter" className="py-20 bg-red-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <SafeIcon icon={FiMail} className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Join the Reality-Based Community
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Get weekly updates on detention policy changes, community actions, and ways 
            to make your voice heard. Because an informed citizenry is democracy's best defense.
          </p>

          {/* Form components remain the same */}
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;