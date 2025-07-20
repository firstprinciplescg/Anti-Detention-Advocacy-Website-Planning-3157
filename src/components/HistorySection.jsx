import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiClock } = FiIcons;

const HistorySection = () => {
  const historicalEvents = [
    {
      period: "1882-1943",
      title: "Chinese Exclusion & Angel Island",
      description: "The first major restriction on immigration targeted Chinese immigrants specifically, with many detained at Angel Island in conditions later acknowledged as inhumane.",
      color: "border-amber-500"
    },
    {
      period: "1942-1946",
      title: "Japanese American Internment",
      description: "Approximately 120,000 Japanese Americans were forcibly relocated and incarcerated in camps during World War II—later acknowledged as a grave injustice with formal apologies and reparations.",
      color: "border-red-500"
    },
    {
      period: "1970s-1990s",
      title: "Haitian Detention",
      description: "Haitian asylum seekers were systematically detained in facilities like Krome Detention Center and Guantanamo Bay under conditions condemned by human rights organizations.",
      color: "border-blue-500"
    },
    {
      period: "2000s-Present",
      title: "Contemporary Mass Detention",
      description: "The post-9/11 era saw rapid expansion of immigration detention, with increasing privatization and documented human rights concerns.",
      color: "border-purple-500"
    }
  ];

  return (
    <section id="history" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Historical Context
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The current detention system continues a troubling pattern in American history—one we've repeatedly recognized as a mistake.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>
          
          <div className="space-y-12 relative">
            {historicalEvents.map((event, index) => (
              <motion.div 
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`md:flex ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} items-center`}
              >
                {/* Time period (mobile only) */}
                <div className="md:hidden mb-3 bg-gray-100 inline-block px-3 py-1 rounded-full text-gray-700 font-medium text-sm">
                  {event.period}
                </div>
                
                {/* Content */}
                <div className={`md:w-5/12 bg-white p-6 rounded-xl shadow-sm border-l-4 ${event.color}`}>
                  <div className="hidden md:block mb-2 bg-gray-100 inline-block px-3 py-1 rounded-full text-gray-700 font-medium text-sm">
                    {event.period}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600">
                    {event.description}
                  </p>
                </div>
                
                {/* Timeline dot (desktop only) */}
                <div className="hidden md:flex md:w-2/12 justify-center">
                  <div className={`w-8 h-8 rounded-full bg-white border-4 ${event.color} flex items-center justify-center`}>
                    <SafeIcon icon={FiClock} className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Patterns & Lessons */}
        <motion.div 
          className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            The Pattern and Its Lessons
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900 mb-2">Recurring Patterns</h4>
              <ul className="space-y-3">
                {[
                  "Initial justification based on national security or economic concerns",
                  "Targeting of specific ethnic or national groups",
                  "Expansion beyond original stated purpose",
                  "Deteriorating conditions as systems scale",
                  "Privatization and profit incentives driving policy"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900 mb-2">Historical Lessons</h4>
              <ul className="space-y-3">
                {[
                  "Each mass detention program has eventually been recognized as a mistake",
                  "Official apologies and reparations typically follow decades later",
                  "Historians consistently document the ineffectiveness of these approaches",
                  "Economic costs far outweigh any purported benefits",
                  "Long-term damage to communities and American values persists"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          <motion.div 
            className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-800 italic">
              "In each case, detention was justified as a necessary security measure but later recognized as an ineffective policy driven more by fear than evidence."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HistorySection;