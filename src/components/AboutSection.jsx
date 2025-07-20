import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiTarget, FiTrendingUp } = FiIcons;

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About This Movement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A coalition of experts and citizens working toward a more humane and effective immigration system.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
              <SafeIcon icon={FiUsers} className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                We are a coalition of human rights advocates, policy experts, and concerned citizens working to ensure that America's immigration policies uphold our values of human dignity and due process.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our coalition includes legal experts, economists, health professionals, and former detention center staff who have witnessed firsthand the systemic failures of mass detention.
              </p>
            </div>
          </motion.div>

          {/* Approach */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-full mb-6">
              <SafeIcon icon={FiTarget} className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Approach
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                We believe in education, advocacy, and practical policy change. We don't just highlight problems—we promote viable, cost-effective alternatives that better serve our national security and humanitarian interests.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our work is non-partisan and fact-based. We engage with policymakers across the political spectrum who recognize that there are more effective and humane approaches to immigration enforcement.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div 
          className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center w-16 h-16 bg-purple-50 rounded-full mb-6 mx-auto">
            <SafeIcon icon={FiTrendingUp} className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-lg p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-gray-900 mb-2">Human Dignity</h4>
              <p className="text-gray-600">
                Every person deserves to be treated with respect and have their basic rights protected, regardless of immigration status.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-lg p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-gray-900 mb-2">Evidence-Based Policy</h4>
              <p className="text-gray-600">
                Immigration policies should be based on data and research, not fear or political expediency.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-lg p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-gray-900 mb-2">Responsible Governance</h4>
              <p className="text-gray-600">
                We advocate for solutions that are fiscally responsible, effective, and aligned with American values.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;