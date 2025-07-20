import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPieChart, FiDollarSign, FiTrendingDown } = FiIcons;

const NumbersSection = () => {
  const detentionStats = [
    { label: 'Average daily population', value: '34,000 detainees' },
    { label: 'Average length of stay', value: '55 days' },
    { label: 'Cost per detainee per day', value: '$144-$775' },
    { label: 'Percentage with no criminal record', value: '71%' },
    { label: 'Detention-related deaths since 2003', value: '216' }
  ];

  const alternativeStats = [
    { label: 'Daily cost per person', value: '$4.50' },
    { label: 'Compliance rates', value: '87-99%' },
    { label: 'Annual taxpayer savings', value: '$1.44B' },
    { label: 'Court appearance rate', value: '91%' }
  ];

  return (
    <section id="numbers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Real Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Statistics don't lie. The data shows that our current detention system is costly, ineffective, and unnecessary.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Detention Statistics */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mb-6">
              <SafeIcon icon={FiPieChart} className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Detention by the Numbers
            </h3>
            <p className="text-gray-600 mb-6">
              As of 2023, the United States maintains the world's largest immigration detention system, at a cost of $3.2 billion annually.
            </p>
            <dl className="space-y-4">
              {detentionStats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="flex justify-between py-3 border-b border-gray-100 last:border-0"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <dt className="text-gray-500">{stat.label}</dt>
                  <dd className="font-semibold text-gray-900">{stat.value}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>

          {/* Alternatives */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-full mb-6">
              <SafeIcon icon={FiTrendingDown} className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              The Alternatives
            </h3>
            <p className="text-gray-600 mb-6">
              Community-based supervision programs cost as little as $4.50 per day with compliance rates of 87-99%. These programs include:
            </p>
            <ul className="mb-8 space-y-2 text-gray-600">
              {['Case management', 'Legal orientation', 'Referrals to community services', 'Regular check-ins'].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-green-500 mr-2">•</span> {item}
                </motion.li>
              ))}
            </ul>
            <p className="text-gray-600 mb-6">
              Studies show these alternatives are not only more humane but also more effective at ensuring court appearances and compliance with immigration proceedings.
            </p>
            <div className="pt-4 border-t border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4">Alternative Program Metrics</h4>
              <dl className="grid grid-cols-2 gap-4">
                {alternativeStats.map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="bg-green-50 p-4 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <dt className="text-sm text-green-800">{stat.label}</dt>
                    <dd className="text-xl font-bold text-green-700">{stat.value}</dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>

        {/* Cost Comparison */}
        <motion.div 
          className="mt-16 p-8 bg-blue-50 rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
            <SafeIcon icon={FiDollarSign} className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Cost Comparison
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-2 text-center">Detention</h4>
              <div className="text-3xl font-bold text-red-600 text-center mb-2">$775</div>
              <p className="text-gray-600 text-center">Per person per day</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-2 text-center">Family Case Management</h4>
              <div className="text-3xl font-bold text-green-600 text-center mb-2">$38</div>
              <p className="text-gray-600 text-center">Per family per day</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-2 text-center">Basic Supervision</h4>
              <div className="text-3xl font-bold text-blue-600 text-center mb-2">$4.50</div>
              <p className="text-gray-600 text-center">Per person per day</p>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-700 max-w-3xl mx-auto">
            <p>
              For the cost of detaining one person, we could provide community-based supervision for 172 people—with better outcomes and reduced trauma.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NumbersSection;