import React from 'react'
import { ChevronRight, MessageCircle, Shield, Clock, Activity, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import BenefitsOptionOne from "@/app/web/components/why"
import PricingSection from "@/app/web/components/pricing";
import FeaturesSection from "@/app/web/components/features";
import HowSection from "@/app/web/components/how";
import FounderQuote from "@/app/web/components/founderquote";
import Navbar from "@/app/web/components/navbar";

export default function LandingPage() {
  return (
    <main className="bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="relative mx-auto max-w-7xl px-4 py-16 lg:py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Talk to your Ex-Boyfriend
            <span className="block text-indigo-600">(seriously)</span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            Clone his voice with 15 seconds of audio
          </p>
          <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
            <Button size="lg" className="w-full sm:w-auto">
              It's free - Start now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section id="how">
        <HowSection />
      </section>
      <FounderQuote />
      <BenefitsOptionOne />
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "Is this therapy?",
                answer: "No, ExBoyfriend.ai is not a replacement for professional therapy. While our AI counselor Rivena can provide support and guidance, we recommend working with a licensed therapist for ongoing mental health care."
              },
              {
                question: "How accurate is the voice?",
                answer: "Our voice cloning technology can create a very similar voice with just 15 seconds of audio. While it won't be perfect, it's designed to be convincing enough to provide a meaningful experience."
              },
              {
                question: "Is my data private?",
                answer: "Yes, we take privacy extremely seriously. All voice data and conversations are encrypted and stored securely. You can delete your data at any time."
              },
              {
                question: "What if it becomes too emotional?",
                answer: "We have built-in safety features including an emergency stop button and immediate access to grounding exercises. Rivena monitors emotional levels and can intervene if needed."
              },
              {
                question: "Can I use someone else's voice?",
                answer: "No, you must have explicit permission to use someone's voice. Using someone's voice without consent violates our terms of service."
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  )
}
