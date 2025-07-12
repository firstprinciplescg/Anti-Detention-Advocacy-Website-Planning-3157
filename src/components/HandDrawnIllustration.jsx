import React from 'react';
import { motion } from 'framer-motion';

const HandDrawnIllustration = ({ type }) => {
  const illustrations = {
    hero: (
      <svg viewBox="0 0 400 300" className="w-full h-auto max-w-md">
        <defs>
          <filter id="roughPaper" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence baseFrequency="0.04" numOctaves="5" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1"/>
          </filter>
        </defs>
        
        {/* Hand-drawn style buildings representing detention facilities */}
        <motion.path
          d="M50 250 L50 150 L150 150 L150 250 Z"
          fill="none"
          stroke="#374151"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#roughPaper)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Fence/barriers */}
        <motion.path
          d="M20 250 L380 250 M40 230 L40 250 M60 230 L60 250 M80 230 L80 250 M100 230 L100 250"
          fill="none"
          stroke="#ef4444"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        
        {/* Broken chain symbolizing freedom */}
        <motion.path
          d="M300 100 Q320 80 340 100 Q360 120 340 140 Q320 160 300 140 Q280 120 300 100"
          fill="none"
          stroke="#10b981"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
        
        {/* Hand-drawn text effect */}
        <motion.text
          x="200"
          y="50"
          textAnchor="middle"
          className="text-2xl font-bold fill-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Education
        </motion.text>
      </svg>
    ),
    
    economic: (
      <svg viewBox="0 0 300 250" className="w-full h-auto max-w-sm">
        {/* Money/dollar signs flowing away */}
        <motion.path
          d="M50 200 Q100 150 150 200 Q200 250 250 200"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="3"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Dollar signs */}
        <motion.text
          x="60"
          y="180"
          className="text-3xl font-bold fill-blue-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          $
        </motion.text>
        <motion.text
          x="120"
          y="160"
          className="text-2xl font-bold fill-blue-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          $
        </motion.text>
        <motion.text
          x="180"
          y="190"
          className="text-xl font-bold fill-blue-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          $
        </motion.text>
        
        {/* Waste basket */}
        <motion.rect
          x="220"
          y="180"
          width="40"
          height="50"
          fill="none"
          stroke="#374151"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
      </svg>
    ),
    
    social: (
      <svg viewBox="0 0 300 250" className="w-full h-auto max-w-sm">
        {/* Broken family connections */}
        <motion.circle
          cx="80"
          cy="100"
          r="20"
          fill="none"
          stroke="#10b981"
          strokeWidth="3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.circle
          cx="150"
          cy="100"
          r="15"
          fill="none"
          stroke="#10b981"
          strokeWidth="3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.circle
          cx="220"
          cy="100"
          r="18"
          fill="none"
          stroke="#10b981"
          strokeWidth="3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        
        {/* Broken connections */}
        <motion.path
          d="M100 100 L130 100"
          stroke="#ef4444"
          strokeWidth="3"
          strokeDasharray="10,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        <motion.path
          d="M170 100 L200 100"
          stroke="#ef4444"
          strokeWidth="3"
          strokeDasharray="10,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
        
        {/* Hearts representing care/love */}
        <motion.path
          d="M150 150 C150 140, 160 140, 160 150 C160 140, 170 140, 170 150 C170 160, 160 170, 150 180 C140 170, 130 160, 130 150 C130 140, 140 140, 150 150"
          fill="#ef4444"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
      </svg>
    ),
    
    moral: (
      <svg viewBox="0 0 300 250" className="w-full h-auto max-w-sm">
        {/* Scales of justice - unbalanced */}
        <motion.line
          x1="150"
          y1="50"
          x2="150"
          y2="150"
          stroke="#374151"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
        
        {/* Left scale (heavy) */}
        <motion.path
          d="M100 120 L150 100 L200 140"
          fill="none"
          stroke="#374151"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        {/* Scale plates */}
        <motion.ellipse
          cx="100"
          cy="130"
          rx="25"
          ry="8"
          fill="none"
          stroke="#6b21a8"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        />
        <motion.ellipse
          cx="200"
          cy="150"
          rx="25"
          ry="8"
          fill="none"
          stroke="#6b21a8"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
        
        {/* Justice symbols */}
        <motion.text
          x="100"
          y="125"
          textAnchor="middle"
          className="text-sm font-bold fill-purple-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          Rights
        </motion.text>
        <motion.text
          x="200"
          y="145"
          textAnchor="middle"
          className="text-sm font-bold fill-red-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.7 }}
        >
          Harm
        </motion.text>
      </svg>
    )
  };

  return (
    <div className="flex justify-center items-center">
      {illustrations[type] || illustrations.hero}
    </div>
  );
};

export default HandDrawnIllustration;