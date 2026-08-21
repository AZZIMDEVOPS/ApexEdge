"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";
import { ExecutiveHeaderNav } from "@/components/ExecutiveHeaderNav";
import { HeroBackgroundReel } from "@/components/HeroBackgroundReel";
import { IntegratedSolutionArchitecture } from "@/components/IntegratedSolutionArchitecture";
import { WhatWeDoExplanation } from "@/components/WhatWeDoExplanation";
import { ExecutiveFinalCTA } from "@/components/ExecutiveFinalCTA";
import { CorporateFooter } from "@/components/CorporateFooter";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ApexAIAssistant } from "@/components/ApexAIAssistant";
import { Button } from "@/components/ui/button";

const clientEcosystem = [
  "Commercial Banks & Lenders",
  "Commercial State Corporations",
  "Insurance & SACCOs",
  "Regulated Fintech Platforms",
  "Real Estate Asset Developers",
  "Healthcare & Supply Chains",
];

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

      {/* 2. HERO SECTION — CLEAN WHITE FEEL WITH ANIMATED PICTURES BEHIND MAIN HEADING */}
      <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center pt-24 pb-20 overflow-hidden border-b border-slate-200 text-slate-900 bg-white">
        
        {/* Animated Pictures Reel in the Background with White Gradient Wash */}
        <HeroBackgroundReel />

        <div className="relative z-10 mx-auto max-w-6xl px-5 text-center sm:px-8 lg:px-10 space-y-7">
          
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

          {/* Dynamic Cycling H1 Heading (Guaranteed Strictly Max 2 to 3 Lines in Apex Navy) */}
          <div className="min-h-[90px] sm:min-h-[110px] lg:min-h-[120px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={headlineIndex}
                initial={{ opacity: 0, y: 12, filter: "blur(3px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(3px)" }}
                transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black tracking-tight text-slate-950 leading-[1.28] max-w-5xl mx-auto drop-shadow-[0_2px_10px_rgba(255,255,255,0.95)]"
              >
                <span>{HERO_HEADLINES[headlineIndex].lead}</span>{" "}
                <span className="text-[#071C3F] underline decoration-[#10B981] decoration-4 underline-offset-8">
                  {HERO_HEADLINES[headlineIndex].highlight}
                </span>
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Interactive Headline Switcher Indicators */}
          <div className="flex items-center justify-center gap-2 pt-1">
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

          {/* Subheadline & Direct Human Proposition on Clean Light Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="rounded-3xl border-2 border-slate-200/90 bg-white/95 backdrop-blur-xl p-7 sm:p-9 max-w-4xl mx-auto shadow-xl space-y-4 text-left sm:text-center"
          >
            <p className="text-base sm:text-xl text-slate-800 font-semibold leading-relaxed">
              &ldquo;Apex Edge partners with Boards of Directors, CEOs, Finance and People Leaders across East Africa to cut through operational noise, eliminate recurring audit exceptions, and build Board-ready systems that teams actually use every day.&rdquo;
            </p>

            <div className="pt-3.5 border-t border-slate-100 text-xs sm:text-sm text-slate-600 font-semibold flex flex-wrap items-center justify-center gap-2">
              <span className="text-[#10B981] font-black uppercase tracking-wider text-[11px]">Built for:</span>
              <span>Boards, CEOs, CFOs, and Heads of HR navigating growth, regulatory scrutiny, and performance bottlenecks.</span>
            </div>
          </motion.div>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="flex flex-col items-center gap-3 pt-2"
          >
            <div className="flex flex-wrap items-center justify-center gap-4">
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
            </div>

            <span className="text-xs text-slate-500 font-medium italic">
              No retainer friction. No open-ended consulting hours. Start with one concrete challenge.
            </span>
          </motion.div>

          {/* Sector Experience Scope */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-600"
          >
            <span className="uppercase tracking-widest text-[#071C3F] font-black text-[10px]">SECTOR EXPERIENCE:</span>
            {clientEcosystem.map((client, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                <span>{client}</span>
              </div>
            ))}
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



