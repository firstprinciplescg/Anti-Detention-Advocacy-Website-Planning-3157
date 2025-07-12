import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import HandDrawnIllustration from './HandDrawnIllustration';

const { FiDollarSign, FiUsers, FiHeart } = FiIcons;

const EducationSection = () => {
  const sections = [
    {
      icon: FiDollarSign,
      title: "Economic Impact",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      content: [
        "Detention facilities cost taxpayers billions annually with minimal benefit to society",
        "Resources diverted from education, healthcare, and infrastructure",
        "Negative impact on local economies and workforce participation",
        "Administrative costs far exceed rehabilitation or prevention programs"
      ],
      illustration: "economic"
    },
    {
      icon: FiUsers,
      title: "Social Consequences",
      color: "text-green-600",
      bgColor: "bg-green-50",
      content: [
        "Family separation and community disruption",
        "Psychological trauma affecting multiple generations",
        "Erosion of trust between communities and institutions",
        "Perpetuation of cycles of poverty and marginalization"
      ],
      illustration: "social"
    },
    {
      icon: FiHeart,
      title: "Moral Imperative",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      content: [
        "Violation of basic human dignity and rights",
        "Contradiction of democratic values and principles",
        "Historical parallels to systems universally condemned",
        "Moral obligation to protect vulnerable populations"
      ],
      illustration: "moral"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Concentration Camps Fail Society
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive look at the devastating impacts of mass detention systems 
            on our economy, communities, and moral fabric.
          </p>
        </motion.div>

        <div className="space-y-20">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className={`w-16 h-16 ${section.bgColor} rounded-full flex items-center justify-center mb-6`}>
                  <SafeIcon icon={section.icon} className={`w-8 h-8 ${section.color}`} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{section.title}</h3>
                <ul className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={`flex justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <HandDrawnIllustration type={section.illustration} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;