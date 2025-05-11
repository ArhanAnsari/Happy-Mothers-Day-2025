'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-pink-200 to-rose-100 text-gray-800 px-6 text-center selection:bg-rose-600 selection:text-white">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Happy Mother&apos;s Day, Mummy!
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl max-w-2xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        You are the heart of our family, the sunshine of our days, and the glue that holds us together.
        Thank you for your endless love, sacrifices, and strength.
        I love you more than words can say.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <button
          onClick={handleButtonClick}
          className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rose-600 focus:ring-opacity-50"
        >
          You&apos;re the Best, Mummy!
        </button>
      </motion.div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-pink-300 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">You&apos;re the Best, Mummy!</h2>
            <p className="text-gray-700 mb-6">
              Thank you for everything you do. We love you so much!
            </p>
            <button
              onClick={closeModal}
              className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-4 py-2 rounded-full shadow-md transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rose-600 focus:ring-opacity-50"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
