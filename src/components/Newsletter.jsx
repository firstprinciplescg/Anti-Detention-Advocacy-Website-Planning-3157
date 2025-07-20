import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiCheck } = FiIcons;

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section id="newsletter" className="py-20 bg-red-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <SafeIcon icon={FiMail} className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-4xl font-bold mb-4">
            Join the Reality-Based Community
          </h2>
          
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Get weekly updates on detention policy changes, community actions, and ways to make your voice heard. 
            Because an informed citizenry is democracy's best defense.
          </p>

          {!isSubmitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
                />
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                </motion.button>
              </div>
              
              <p className="text-red-200 text-sm mt-3">
                No spam, ever. Unsubscribe anytime.
              </p>
            </motion.form>
          ) : (
            <motion.div
              className="max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white/20 rounded-lg p-6">
                <SafeIcon icon={FiCheck} className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Welcome to the movement!</h3>
                <p className="text-red-100">
                  Check your email for confirmation and your first update.
                </p>
              </div>
            </motion.div>
          )}

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold mb-2">15,000+</div>
              <p className="text-red-200">Active subscribers</p>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Weekly</div>
              <p className="text-red-200">Policy updates</p>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Action</div>
              <p className="text-red-200">Opportunities</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;