import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiMail, FiMapPin, FiExternalLink } = FiIcons;

const ActionSection = () => {
  const actionItems = [
    {
      icon: FiMapPin,
      title: "Contact Local Representatives",
      description: "Reach out to your city council, mayor, and county officials",
      action: "Find Local Officials",
      link: "https://www.usa.gov/local-governments"
    },
    {
      icon: FiPhone,
      title: "Call State Representatives",
      description: "Contact your state legislators and governor's office",
      action: "Find State Officials",
      link: "https://www.usa.gov/state-government"
    },
    {
      icon: FiMail,
      title: "Email Federal Representatives",
      description: "Write to your senators and house representatives",
      action: "Find Federal Officials",
      link: "https://www.congress.gov/members/find-your-member"
    }
  ];

  const talkingPoints = [
    "Demand transparency in detention facility funding and operations",
    "Call for independent oversight and regular inspections",
    "Request investment in community-based alternatives",
    "Advocate for family reunification programs",
    "Push for humane treatment standards and accountability",
    "Support legislation that protects vulnerable populations"
  ];

  return (
    <section id="action" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Take Action Now
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your voice matters. Contact your representatives and demand action 
            against inhumane detention practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {actionItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <SafeIcon icon={item.icon} className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.description}</p>
              <motion.a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{item.action}</span>
                <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-white rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Key Talking Points for Your Representatives
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {talkingPoints.map((point, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActionSection;