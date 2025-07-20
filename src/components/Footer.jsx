import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useAnchorLinkHandler } from '../hooks/useScrollToHash';

const { FiExternalLink, FiMail, FiTwitter, FiFacebook } = FiIcons;

const Footer = () => {
  const handleAnchorClick = useAnchorLinkHandler();
  
  const resources = [
    {
      title: "ACLU",
      description: "Leading the legal fight against unjust detention since 1920",
      link: "https://www.aclu.org"
    },
    {
      title: "Human Rights Watch",
      description: "Because human rights shouldn't stop at any border",
      link: "https://www.hrw.org"
    },
    {
      title: "Southern Poverty Law Center",
      description: "Tracking and fighting systemic injustice",
      link: "https://www.splcenter.org"
    },
    {
      title: "Amnesty International",
      description: "Global perspective, local action",
      link: "https://www.amnesty.org"
    }
  ];

  const quickLinks = [
    { label: 'Education', href: '#education' },
    { label: 'Take Action', href: '#action' },
    { label: 'Subscribe', href: '#newsletter' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">NC</span>
              </div>
              <span className="font-bold text-xl">No Concentration Camps</span>
            </div>
            <p className="text-gray-400 mb-6">
              Education and action for a more just immigration system.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SafeIcon icon={FiTwitter} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SafeIcon icon={FiFacebook} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SafeIcon icon={FiMail} className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    onClick={handleAnchorClick}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-4">Trusted Organizations</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {resources.map((resource, index) => (
                <motion.a
                  key={resource.title}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{resource.title}</h4>
                    <SafeIcon icon={FiExternalLink} className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-sm text-gray-400">{resource.description}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 No Concentration Camps. Educational content for civic engagement.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-red-600/10 border border-red-600/20 rounded-lg p-6">
            <p className="text-red-400 font-medium">
              "The only thing necessary for the triumph of evil is for good people to do nothing." - Edmund Burke
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;