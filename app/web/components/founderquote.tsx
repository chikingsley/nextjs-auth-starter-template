"use client";

import { motion } from "framer-motion";

const FounderQuote = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12"
      >
        <div className="absolute -top-4 -left-4 text-6xl text-indigo-200 font-serif">"</div>
        <div className="relative z-10">
          <blockquote className="text-xl md:text-2xl text-gray-900 text-center mb-8">
            <p className="mb-4">
              This is for everyone who's ever stared at their phone wondering if they should send that text. 
              There's a better way to find closure.
            </p>
          </blockquote>
          <footer className="flex flex-col items-center justify-center">
            <p className="font-semibold text-gray-900 text-lg">Simon Jackson</p>
            <p className="text-gray-600">Founder, exboyfriend.ai</p>
          </footer>
        </div>
        <div className="absolute -bottom-4 -right-4 text-6xl text-indigo-200 font-serif">"</div>
      </motion.div>
    </div>
  );
};

export default FounderQuote;