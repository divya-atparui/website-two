"use client"
import React from 'react';
import { motion } from 'framer-motion';

const DashboardComponent = () => {
  return (
    <div className="bg-[#0a1a2f] min-h-screen flex flex-col items-center justify-center text-center text-white">
      <div className="flex gap-8">
        <motion.h1
          className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Work smarter
        </motion.h1>
        <motion.h1
          className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          React faster
        </motion.h1>
      </div>
      <motion.h2
        className="text-5xl mt-8 text-[#0a1a2f]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Think bigger
      </motion.h2>
    </div>
  );
};

export default DashboardComponent;