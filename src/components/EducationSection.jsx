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
      title: "The Economic Shell Game",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      content: [
        "We're spending $775 per detainee per day—that's nearly triple a night at the Ritz-Carlton, with considerably worse room service",
        "Every billion spent on detention is a billion not invested in actual border solutions, education, or infrastructure",
        "Private detention contractors report record profits while taxpayers foot the bill for a system that doesn't work",
        "The same money could fund comprehensive immigration courts, process asylum claims, and strengthen legal immigration channels"
      ],
      illustration: "economic"
    },
    {
      icon: FiUsers,
      title: "The Human Cost Calculator",
      color: "text-green-600",
      bgColor: "bg-green-50",
      content: [
        "Children separated from parents show the same trauma patterns as those studied in WWII internment survivors",
        "Communities lose workers, families lose breadwinners, and America loses its moral authority—all while creating generational trauma",
        "Local economies near detention centers report decreased community engagement and business activity",
        "Law enforcement reports reduced cooperation in immigrant communities, making everyone less safe"
      ],
      illustration: "social"
    },
    {
      icon: FiHeart,
      title: "The Arc of History's Warning",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      content: [
        "From Angel Island to Japanese internment to today—each time we've tried this, history has judged us harshly",
        "Every major detention program in U.S. history has eventually ended with an apology and reparations",
        "Future generations will ask what we did when we saw history rhyming",
        "The solution to human migration has never been and will never be mass detention"
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
            When the "Solution" Is Worse Than the Problem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's break down how detention centers fail by every metric we use to measure policy success—and why we keep making the same expensive, ineffective choice.
          </p>
        </motion.div>

        <div className="space-y-20">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`inline-flex items-center justify-center w-16 h-16 ${section.bgColor} rounded-full mb-6`}>
                  <SafeIcon icon={section.icon} className={`w-8 h-8 ${section.color}`} />
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {section.title}
                </h3>
                
                <div className="space-y-4">
                  {section.content.map((point, pointIndex) => (
                    <motion.div
                      key={pointIndex}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: pointIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-2 h-2 ${section.color.replace('text-', 'bg-')} rounded-full mt-2 flex-shrink-0`}></div>
                      <p className="text-gray-600 leading-relaxed">{point}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <HandDrawnIllustration type={section.illustration} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The Math Doesn't Add Up
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              When a policy fails economically, socially, and morally while costing taxpayers billions, 
              it's time to demand better solutions from our representatives.
            </p>
            <motion.a
              href="#action"
              className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Take Action Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;