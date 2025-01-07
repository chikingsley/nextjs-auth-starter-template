"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Shield, Activity } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: "Create His Voice",
    description: "Upload a short voice clip or describe his voice in detail. Our AI recreates his voice with remarkable accuracy.",
    number: "01"
  },
  {
    icon: Shield,
    title: "Meet Rivena",
    description: "Our AI counselor helps you process your feelings and prepare for a meaningful conversation.",
    number: "02"
  },
  {
    icon: Activity,
    title: "Have That Talk",
    description: "Finally have the conversation you've been wanting, in a safe and controlled environment.",
    number: "03"
  }
];

const HowSection: React.FC = () => {
  return (
    <div className="py-6 lg:py-8">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">How It Works</h2>
          <div className="h-0.5 w-16 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-16 left-0 w-full h-0.5 bg-gray-100 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="w-12 h-12 bg-white border-2 border-indigo-600 rounded-full flex items-center justify-center mb-3 relative z-10">
                        <Icon className="h-6 w-6 text-indigo-600" />
                      </div>
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-indigo-600 rounded-full text-white text-xs flex items-center justify-center">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-base font-bold mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-center text-xs leading-relaxed max-w-xs">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowSection;