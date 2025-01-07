"use client";

import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-indigo-600 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              exboyfriend.ai
            </span>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            <button onClick={() => scrollToSection('how')} className="text-gray-600 hover:text-gray-900">
              How it Works
            </button>
            <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-gray-900">
              Features
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-gray-900">
              Pricing
            </button>
            <Button variant="outline" className="ml-4">
              Sign In
            </Button>
            <Button onClick={() => scrollToSection('hero')}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;