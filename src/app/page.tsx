"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ShieldCheck } from "lucide-react";
import { ExecutiveHeaderNav } from "@/components/ExecutiveHeaderNav";
import { HeroBackgroundReel } from "@/components/HeroBackgroundReel";
import { IntegratedSolutionArchitecture } from "@/components/IntegratedSolutionArchitecture";
import { WhatWeDoExplanation } from "@/components/WhatWeDoExplanation";
import { ExecutiveFinalCTA } from "@/components/ExecutiveFinalCTA";
import { CorporateFooter } from "@/components/CorporateFooter";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ApexAIAssistant } from "@/components/ApexAIAssistant";
import { Button } from "@/components/ui/button";

const HERO_HEADLINES = [
  {
    lead: "Organisational breakdowns don't start with bad intentions.",
    highlight: "They start when governance stays on paper with no named owner.",
  },
  {
    lead: "Strategic advisory is worthless unless operationalized.",
    highlight: "We turn 200-page policy binders into 1-page daily workflows.",
  },
  {
    lead: "Clear risk oversight for Boards. Accountability for teams.",
    highlight: "Board-ready governance systems built for East African realities.",
  },
  {
    lead: "Zero recurring audit exceptions. Zero fuzzy committees.",
    highlight: "Single-point named ownership embedded across every unit.",
  },
];

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingCategory, setBookingCategory] = useState<string>("Governance & Risk");
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % HERO_HEADLINES.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const openBooking = (category?: string) => {
    if (category) {
      setBookingCategory(category);
    }
    setIsBookingOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#10B981] selection:text-[#071C3F]">
      
      {/* 1. Header Navigation */}
      <ExecutiveHeaderNav onOpenBooking={() => openBooking("Governance & Risk")} />

      {/* 2. HERO SECTION — CLEAN MINIMAL WHITE FEEL: HEADING & CTAS ONLY */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center pt-24 pb-20 overflow-hidden border-b border-slate-200 text-slate-900 bg-white">
        
        {/* Animated Pictures Reel in the Background with White Gradient Wash */}
        <HeroBackgroundReel />

        <div className="relative z-10 mx-auto max-w-6xl px-5 text-center sm:px-8 lg:px-10 space-y-8">
          
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-slate-200 text-[#071C3F] text-xs font-black uppercase tracking-[0.25em] shadow-sm backdrop-blur-md"
          >
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span>STRATEGIC ADVISORY · NAIROBI &amp; EAST AFRICA</span>
          </motion.div>

          {/* Dynamic Cycling H1 Heading in Frosted Glass Container */}
          <div className="min-h-[95px] sm:min-h-[115px] lg:min-h-[125px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={headlineIndex}
                initial={{ opacity: 0, y: 12, filter: "blur(3px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(3px)" }}
                transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                className="px-6 py-5 sm:px-10 sm:py-6 rounded-3xl bg-white/85 backdrop-blur-md border border-slate-200/80 shadow-xl max-w-5xl mx-auto"
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black tracking-tight text-slate-950 leading-[1.3]">
                  <span>{HERO_HEADLINES[headlineIndex].lead}</span>{" "}
                  <span className="text-[#071C3F] underline decoration-[#10B981] decoration-4 underline-offset-8">
                    {HERO_HEADLINES[headlineIndex].highlight}
                  </span>
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive Headline Switcher Indicators */}
          <div className="flex items-center justify-center gap-2">
            {HERO_HEADLINES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setHeadlineIndex(idx)}
                aria-label={`Switch to headline ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  headlineIndex === idx
                    ? "w-8 bg-[#10B981]"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <Button
              onClick={() => openBooking("Governance & Risk")}
              className="bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black rounded-full px-8 py-4 text-sm sm:text-base shadow-lg shadow-[#10B981]/25 flex items-center gap-2.5 transition-all hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Your 45-Minute Clarity Session →</span>
            </Button>

            <Button
              onClick={() => handleScrollToSection("architecture")}
              variant="outline"
              className="border-2 border-slate-200 bg-white hover:bg-slate-50 text-[#071C3F] font-black rounded-full px-7 py-4 text-sm flex items-center gap-2 transition-all shadow-sm"
            >
              <span>Explore Solution Architecture ↓</span>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 3. INTEGRATED SOLUTION ARCHITECTURE — APEX EDGE ADVISORY PILLARS */}
      <div id="architecture">
        <IntegratedSolutionArchitecture />
      </div>

      {/* 4. HOW WE WORK — 4-STAGE OPERATING METHODOLOGY */}
      <WhatWeDoExplanation />

      {/* 5. FINAL EXECUTIVE CTA */}
      <ExecutiveFinalCTA onOpenBooking={() => openBooking("Governance & Risk")} />

      {/* 6. Corporate Footer */}
      <CorporateFooter />

      {/* Interactive Booking Modal */}
      <ConsultationModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)}
        defaultCategory={bookingCategory}
      />

      {/* Executive AI Assistant */}
      <ApexAIAssistant onOpenBooking={() => openBooking("Governance & Risk")} />
    </main>
  );
}



