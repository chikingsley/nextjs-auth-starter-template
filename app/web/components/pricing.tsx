"use client";

import React from 'react';
import { Check, Clock, Sparkles, Lock, MessageCircle } from 'lucide-react';

interface PricingFeature {
  text: string;
  highlight?: boolean;
  subtext?: string;
}

interface PricingTierProps {
  title: string;
  subtitle: string;
  price?: string;
  features: PricingFeature[];
  isPopular?: boolean;
  ctaText: string;
}

const PricingTier: React.FC<PricingTierProps> = ({ title, subtitle, price, features, isPopular, ctaText }) => (
  <div className={`rounded-2xl p-8 ${isPopular ? 'bg-white shadow-xl border-2 border-indigo-600' : 'bg-white shadow-lg'}`}>
    <div className="mb-8">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-gray-500 mt-2">{subtitle}</p>
      {price && <p className="mt-6 text-4xl font-bold">{price}<span className="text-lg text-gray-500">/month</span></p>}
    </div>

    <div className="space-y-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start">
          <Check className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
          <div className="ml-3">
            <span className={feature.highlight ? 'text-indigo-600 font-medium' : ''}>{feature.text}</span>
            {feature.subtext && (
              <p className="text-sm text-gray-500">{feature.subtext}</p>
            )}
          </div>
        </div>
      ))}
    </div>

    <div className="mt-8">
      <button 
        className={`w-full rounded-lg px-4 py-3 text-center font-medium ${
          isPopular 
            ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        {ctaText}
      </button>
    </div>
  </div>
);

interface PricingTierData extends PricingTierProps {}

const PricingSection: React.FC = () => {
  const freeTier: PricingTierData = {
    title: "Dip Your Toes",
    subtitle: "Get the closure you need, no commitment",
    features: [
      {
        text: "30-min weekly chat with your ex",
        highlight: true,
        subtext: "Reset every Monday"
      },
      {
        text: "30-min weekly session with Rivena",
        highlight: true,
        subtext: "Your AI therapist & guide"
      },
      {
        text: "One pro voice clone",
        subtext: "Create one highly accurate voice"
      },
      {
        text: "Unlimited synthetic voices",
        subtext: "Generate voices from descriptions"
      },
      {
        text: "Incognito mode",
        subtext: "Optional zero data retention"
      },
      {
        text: "Basic conversation memory",
        subtext: "Remember key moments"
      }
    ],
    ctaText: "Start Free"
  };

  const proTier: PricingTierData = {
    title: "Full Healing Journey",
    subtitle: "Everything you need for complete closure",
    price: "$20",
    features: [
      {
        text: "Unlimited conversations",
        highlight: true,
        subtext: "Talk whenever you need to"
      },
      {
        text: "Advanced voice creation",
        highlight: true,
        subtext: "Create multiple highly accurate voices"
      },
      {
        text: "Deep conversation insights",
        subtext: "Understand patterns & progress"
      },
      {
        text: "Priority support",
        subtext: "24/7 access to our team"
      },
      {
        text: "Coming Soon: Visual AI",
        highlight: true,
        subtext: "Talk to photos & videos of your ex"
      },
      {
        text: "Coming Soon: Deep Learning",
        highlight: true,
        subtext: "Train AI on texts, social media & more"
      }
    ],
    ctaText: "Upgrade to Pro",
    isPopular: true
  };

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold">Pricing</span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Choose Your Healing Path</h2>
          <p className="mt-4 text-lg text-gray-600">Start free and upgrade when you're ready</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PricingTier {...freeTier} />
          <PricingTier {...proTier} />
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500">All plans include emergency support and safety features</p>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;