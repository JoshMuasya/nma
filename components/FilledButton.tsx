"use client"

import { ButtonProps } from '@/types';
import { motion } from 'framer-motion';
import React from 'react';

const FilledButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.1,
        backgroundColor: '#3f539b',
        transition: { type: 'spring', stiffness: 300 },
      }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 text-white bg-[#1eb1e7] rounded-2xl shadow-lg text-lg font-semibold"
    >
      {text}
    </motion.button>
  );
};

export default FilledButton;