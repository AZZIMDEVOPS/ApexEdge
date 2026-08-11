"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Calendar, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { ExecutiveHeaderNav } from "@/components/ExecutiveHeaderNav";
import { DoesThisSoundFamiliar } from "@/components/DoesThisSoundFamiliar";
import { ConnectedProblemsVisual } from "@/components/ConnectedProblemsVisual";
import { BeforeAfterTransformation } from "@/components/BeforeAfterTransformation";
import { SystemsNotReports } from "@/components/SystemsNotReports";
import { ExecutiveServicesArchitecture } from "@/components/ExecutiveServicesArchitecture";
import { SignatureEngagements } from "@/components/SignatureEngagements";
import { AdvisoryMethodology } from "@/components/AdvisoryMethodology";
import { WhyApexEdgeSection } from "@/components/WhyApexEdgeSection";
import { TangibleOutputsShowcase } from "@/components/TangibleOutputsShowcase";
import { VerifiedCaseSnapshots } from "@/components/VerifiedCaseSnapshots";
import { DedicatedBoardSection } from "@/components/DedicatedBoardSection";
import { ClaritySessionSection } from "@/components/ClaritySessionSection";
import { ExecutiveFinalCTA } from "@/components/ExecutiveFinalCTA";
import { CorporateFooter } from "@/components/CorporateFooter";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ApexAIAssistant } from "@/components/ApexAIAssistant";
import { WhatsAppPopUI } from "@/components/WhatsAppPopUI";
import { CorporateServicesTicker } from "@/components/CorporateServicesTicker";
import { Button } from "@/components/ui/button";

const clientLogos = [
  "Private Companies",
  "Public Entities",
  "State Corporations",
  "Banks & Financial Institutions",
  "Insurance Firms",
  "Microfinance Institutions",
];

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleScrollToMethodology = () => {
    const el = document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-900 selection:bg-[#10B981] selection:text-[#071C3F]">
      
      {/* 1. Header Navigation */}
      <ExecutiveHeaderNav onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 2. HERO SECTION — BOARD-READY CLARITY POSITIONING */}
      <section className="relative w-full min-h-[92vh] flex flex-col items-center justify-center pt-24 pb-20 bg-slate-950 text-white overflow-hidden border-b border-slate-800">
        
        {/* Nairobi Twilight Skyline Backdrop */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <Image
            src="/nairobi_hero_twilight.jpg"
            alt="Nairobi Corporate Twilight Skyline — Apex Edge Executive Backdrop"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center scale-105 opacity-55 filter brightness-105 contrast-115"
          />
        </div>

        {/* Cinematic Deep Navy Vignette & Overlay */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-1 bg-gradient-to-b from-[#071C3F]/90 via-slate-950/70 to-slate-950" />
        <div className="absolute inset-0 w-full h-full pointer-events-none z-1 bg-[radial-gradient(ellipse_at_center,rgba(7,28,63,0.4)_0%,rgba(2,6,23,0.85)_70%,rgba(2,6,23,0.98)_100%)]" />

        {/* Ambient Atmospheric Cyan & Emerald Glow */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-2 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/20 via-[#10B981]/10 to-transparent rounded-full blur-3xl opacity-70 animate-pulse" />
        </div>

        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8 lg:px-10 z-10 space-y-8">
          
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#071C3F]/90 border border-blue-500/40 text-blue-300 text-xs sm:text-sm font-black uppercase tracking-[0.25em] backdrop-blur-xl shadow-xl"
          >
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span>STRATEGIC ADVISORY. MEASURABLE IMPACT.</span>
          </motion.div>

          {/* H1 Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] drop-shadow-2xl"
          >
            From Operational Noise to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-[#10B981]">
              Board-Ready Clarity.
            </span>
          </motion.h1>

          {/* Subheadline & Audience Statement Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="rounded-3xl border border-slate-800 bg-[#071C3F]/80 p-6 sm:p-8 backdrop-blur-xl max-w-4xl mx-auto shadow-2xl space-y-4"
          >
            <p className="text-base sm:text-xl text-slate-100 font-medium leading-relaxed">
              We help Boards and leadership teams identify hidden risks, strengthen controls and turn recurring organisational problems into clear actions, accountable owners and measurable results.
            </p>

            <div className="pt-3 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300 font-semibold flex items-center justify-center gap-2">
              <span className="text-[#10B981]">Audience Focus:</span>
              <span>Built for Boards, CEOs, Finance Leaders, HR Leaders and organisations navigating growth, governance and performance challenges.</span>
            </div>
          </motion.div>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <Button
              onClick={() => setIsBookingOpen(true)}
              className="bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black rounded-full px-8 py-4 text-sm sm:text-base shadow-2xl shadow-[#10B981]/30 flex items-center gap-2.5 transition-all hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Your Clarity Session →</span>
            </Button>

            <Button
              onClick={handleScrollToMethodology}
              variant="outline"
              className="border-slate-700 bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:text-white font-bold rounded-full px-7 py-4 text-sm flex items-center gap-2 transition-all"
            >
              <span>See How Apex Edge Works</span>
              <ArrowRight className="w-4 h-4 text-[#10B981]" />
            </Button>
          </motion.div>

          {/* Small Reassurance */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-2 text-xs font-semibold text-slate-300 flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
            <span>No retainer. No open-ended engagement. Start with one challenge.</span>
          </motion.div>
        </div>
      </section>

      {/* CNBC Style Lower Ribbon */}
      <CorporateServicesTicker />

      {/* 3. TRUST / CREDIBILITY SECTION */}
      <section className="border-y border-slate-800 bg-[#071C3F] py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-5">
          <div className="text-center">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#10B981]">
              Built for organisations where decisions, controls and accountability matter.
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center text-xs font-extrabold uppercase tracking-wider text-slate-300">
            {clientLogos.map((logo) => (
              <div
                key={logo}
                className="px-4 py-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-center font-bold hover:border-[#10B981]/50 hover:text-white transition-colors"
              >
                <span>{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DOES THIS SOUND FAMILIAR? */}
      <DoesThisSoundFamiliar />

      {/* 5. YOUR PROBLEMS ARE CONNECTED */}
      <ConnectedProblemsVisual />

      {/* 6. BEFORE / AFTER TRANSFORMATION */}
      <BeforeAfterTransformation />

      {/* 7. WE BUILD SYSTEMS, NOT JUST REPORTS */}
      <SystemsNotReports />

      {/* 8. RESTRUCTURED SERVICES ARCHITECTURE */}
      <ExecutiveServicesArchitecture />

      {/* 9. SIGNATURE SOLUTIONS ("START WITH ONE CHALLENGE") */}
      <SignatureEngagements onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 10. ADVISORY METHODOLOGY ("FROM PROBLEM TO PRACTICAL CHANGE") */}
      <AdvisoryMethodology />

      {/* 11. WHY APEX EDGE */}
      <WhyApexEdgeSection />

      {/* 12. WHAT YOU WALK AWAY WITH */}
      <TangibleOutputsShowcase />

      {/* 13. CASE STUDIES / PROOF */}
      <VerifiedCaseSnapshots />

      {/* 14. DEDICATED BOARD SECTION */}
      <DedicatedBoardSection onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 15. CLARITY SESSION & RISK REVERSAL */}
      <ClaritySessionSection onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 16. FINAL CTA */}
      <ExecutiveFinalCTA onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Executive Footer */}
      <CorporateFooter />

      {/* Consultation / Clarity Session Booking Modal */}
      <ConsultationModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* APEX Executive AI Advisory Assistant */}
      <ApexAIAssistant onOpenBooking={() => setIsBookingOpen(true)} />
    </main>
  );
}
