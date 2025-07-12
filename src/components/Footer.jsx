import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiExternalLink, FiHeart } = FiIcons;

const Footer = () => {
  const resources = [
    {
      title: "ACLU",
      description: "Civil liberties advocacy and legal support",
      link: "https://www.aclu.org"
    },
    {
      title: "Human Rights Watch",
      description: "International human rights monitoring",
      link: "https://www.hrw.org"
    },
    {
      title: "Southern Poverty Law Center",
      description: "Fighting hate and bigotry",
      link: "https://www.splcenter.org"
    },
    {
      title: "Amnesty International",
      description: "Global human rights organization",
      link: "https://www.amnesty.org"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">NC</span>
              </div>
              <span className="font-bold text-xl">No Concentration Camps</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Educational resource dedicated to understanding and opposing 
              inhumane detention practices through economic, social, and moral analysis.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <SafeIcon icon={FiMail} className="w-5 h-5" />
              <span>info@noconcentrationcamps.com</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Additional Resources</h3>
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <motion.a
                  key={resource.title}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-2 text-gray-300 group-hover:text-white transition-colors">
                    <span className="font-medium">{resource.title}</span>
                    <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
                  </div>
                  <p className="text-sm text-gray-400 mt-1">{resource.description}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-1 md:col-span-2 lg:col-start-3"
          >
            <h3 className="text-xl font-bold mb-6">Take Action</h3>
            <div className="space-y-4">
              <a
                href="#education"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Learn About the Issues
              </a>
              <a
                href="#action"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Contact Representatives
              </a>
              <a
                href="#newsletter"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Subscribe for Updates
              </a>
            </div>
            
            <div className="mt-8 p-4 bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-300">
                <strong>Disclaimer:</strong> This is an educational resource. 
                Information is provided for awareness and advocacy purposes.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <span>Made with</span>
            <SafeIcon icon={FiHeart} className="w-4 h-4 text-red-500" />
            <span>for human rights and dignity</span>
          </div>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 No Concentration Camps. Educational use encouraged.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;