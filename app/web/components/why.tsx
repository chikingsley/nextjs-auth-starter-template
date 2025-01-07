"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Heart, Trophy, Shield } from 'lucide-react';

const benefits = [
  {
    icon: MessageSquare,
    title: "Tell Him Everything",
    tagline: "No filter needed",
    description: "Scream, cry, laugh, or just talk. Say all the things you've held back.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Heart,
    title: "Find Closure",
    tagline: "Finally understand why",
    description: "Get answers to those questions keeping you up at night.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Trophy,
    title: "Share Your Growth",
    tagline: "Be heard again",
    description: "Sometimes you just need to hear his voice say 'I'm proud of you.'",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Shield,
    title: "Heal On Your Terms",
    tagline: "Safe space for processing",
    description: "No risky late-night calls. Just therapeutic closure when you need it.",
    color: "from-rose-500 to-indigo-500"
  }
];

const BenefitsOptionOne = () => {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center relative mb-20">
          {/* Background decoration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[500px] h-[500px] bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-30 absolute" />
          </div>
          
          {/* Main title with subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="text-5xl font-bold tracking-tight mb-4">Why?</h2>
            <p className="text-xl text-gray-600 max-w-xl mx-auto">
              Because everyone deserves a chance to say what's left unsaid
            </p>
          </motion.div>
          
          {/* Decorative line connecting to cards */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: 40 }}
              viewport={{ once: true }}
              className="w-px bg-gradient-to-b from-transparent via-indigo-200 to-indigo-400"
            />
          </div>
        </div>

        <div className="relative grid grid-cols-2 gap-6 md:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, zIndex: 10 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
                <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-indigo-600 mb-3">{benefit.tagline}</p>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BenefitsOptionOne;