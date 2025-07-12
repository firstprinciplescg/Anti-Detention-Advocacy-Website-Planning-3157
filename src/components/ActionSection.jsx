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
            History shows that change happens when enough people make enough noise. 
            Here's your playbook for making effective noise at every level of government.
          </p>
        </motion.div>

        {/* Rest of the component remains the same */}
      </div>
    </section>
  );
};

export default ActionSection;