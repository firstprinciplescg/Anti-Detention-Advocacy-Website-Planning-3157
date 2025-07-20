import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const { FiMenu, FiX, FiSettings } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  
  const navItems = [
    { label: 'Education', href: '#education' },
    { label: 'Take Action', href: '#action' },
    { label: 'Subscribe', href: '#newsletter' }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">NC</span>
            </div>
            <span className="font-bold text-xl text-gray-900">No Concentration Camps</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
            
            {/* Admin Link if user is logged in */}
            {user && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
              >
                <Link
                  to="/admin"
                  className="flex items-center space-x-1 text-gray-700 hover:text-red-600 font-medium transition-colors"
                >
                  <SafeIcon icon={FiSettings} className="w-4 h-4" />
                  <span>Admin</span>
                </Link>
              </motion.div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            className="md:hidden py-4 border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            {/* Admin Link if user is logged in */}
            {user && (
              <Link
                to="/admin"
                className="flex items-center space-x-2 py-2 text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <SafeIcon icon={FiSettings} className="w-4 h-4" />
                <span>Admin</span>
              </Link>
            )}
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;