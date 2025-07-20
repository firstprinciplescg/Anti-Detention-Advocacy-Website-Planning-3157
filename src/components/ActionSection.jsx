import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiMail, FiMapPin, FiExternalLink } = FiIcons;

const ActionSection = () => {
  const actionItems = [
    {
      icon: FiMapPin,
      title: "Start Local (It Works)",
      description: "Your city council and county officials have more power than you think. Many detention contracts require local approval.",
      action: "Find Local Officials",
      link: "https://www.usa.gov/local-governments"
    },
    {
      icon: FiPhone,
      title: "State Power Matters",
      description: "States like California and Illinois have banned private detention centers. Your state could be next.",
      action: "Find State Officials",
      link: "https://www.usa.gov/state-government"
    },
    {
      icon: FiMail,
      title: "Congress Controls Funding",
      description: "Federal appropriations keep this system running. Your representatives need to hear that you're paying attention.",
      action: "Find Federal Officials",
      link: "https://www.congress.gov/members/find-your-member"
    }
  ];

  const talkingPoints = [
    "Follow the money: Ask for detailed cost breakdowns of detention spending versus alternatives",
    "Demand oversight: Request public hearings on detention facility conditions and contracts",
    "Push for alternatives: Community-based programs have 87% court appearance rates at 3% of the cost",
    "Address root causes: Support increased immigration court funding to address case backlogs",
    "Call for accountability: Request regular public reporting on detention conditions and outcomes",
    "Highlight local impact: Share how detention centers affect your community's safety and economy"
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
            Democracy Is a Contact Sport
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            History shows that change happens when enough people make enough noise. Here's your playbook for making effective noise at every level of government.
          </p>
        </motion.div>

        {/* Action Items */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {actionItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-4">
                <SafeIcon icon={item.icon} className="w-6 h-6 text-red-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {item.description}
              </p>
              
              <motion.a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-red-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{item.action}</span>
                <SafeIcon icon={FiExternalLink} className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Talking Points */}
        <motion.div
          className="bg-white rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Your Conversation Starter Kit
          </h3>
          
          <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Whether you're calling, writing, or meeting in person, these evidence-based talking points help you sound informed and focused on solutions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {talkingPoints.map((point, index) => (
              <motion.div
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
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="mt-8 pt-8 border-t border-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">Pro Tip:</h4>
              <p className="text-gray-700">
                Personal stories are powerful, but data wins debates. Lead with the economics, 
                follow with the human impact, and always end with a specific ask for action.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            It's Working
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">8</div>
              <p className="text-gray-700">States have banned or restricted private detention</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <p className="text-gray-700">Cities have divested from detention contractors</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">$2B</div>
              <p className="text-gray-700">In contracts canceled due to public pressure</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActionSection;