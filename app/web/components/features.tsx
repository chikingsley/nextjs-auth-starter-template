"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Brain, Lock, Star, PencilLine, LifeBuoy } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: "Voice Recreation",
    description: "Create a realistic voice in minutes with just a short sample. Our advanced AI technology ensures authenticity.",
    highlight: "15-second sample"
  },
  {
    icon: Brain,
    title: "Relationship Memory",
    description: "AI learns your unique history and dynamics to enable authentic, context-aware conversations.",
    highlight: "Personalized AI"
  },
  {
    icon: Lock,
    title: "Privacy & Security",
    description: "Bank-level encryption and GDPR compliance ensure your conversations stay completely private.",
    highlight: "End-to-end encrypted"
  },
  {
    icon: Star,
    title: "AI Counseling",
    description: "Meet Rivena, your AI counselor trained in CBT and DBT techniques for emotional support.",
    highlight: "Therapeutic support"
  },
  {
    icon: PencilLine,
    title: "Progress Tracking",
    description: "Monitor your emotional journey with insights and progress tracking over time.",
    highlight: "Visual progress"
  },
  {
    icon: LifeBuoy,
    title: "Safety First",
    description: "24/7 access to emergency resources and grounding exercises when you need support.",
    highlight: "Always available"
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Core Technology</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
              Powered by cutting-edge AI for your emotional wellbeing
            </p>
          </motion.div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-indigo-600" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                      <span className="px-2 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full">
                        {feature.highlight}
                      </span>
                    </div>
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;