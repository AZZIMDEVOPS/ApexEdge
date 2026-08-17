"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { ExecutiveHeaderNav } from "@/components/ExecutiveHeaderNav";
import { ApexSystem3DCanvas } from "@/components/ApexSystem3DCanvas";
import { WhatWeDoExplanation } from "@/components/WhatWeDoExplanation";
import { WhoWeHelpSection } from "@/components/WhoWeHelpSection";
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
import { ExecutiveFAQSection } from "@/components/ExecutiveFAQSection";
import { ExecutiveFinalCTA } from "@/components/ExecutiveFinalCTA";
import { CorporateFooter } from "@/components/CorporateFooter";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ApexAIAssistant } from "@/components/ApexAIAssistant";
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
  const [bookingCategory, setBookingCategory] = useState<string>("Governance & Risk");

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
    <main className="min-h-screen bg-slate-950 text-slate-900 selection:bg-[#10B981] selection:text-[#071C3F]">
      
      {/* 1. Header Navigation */}
      <ExecutiveHeaderNav onOpenBooking={() => openBooking("Governance & Risk")} />

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
            <p className="text-base sm:text-xl text-slate-100 font-semibold leading-relaxed">
              &ldquo;We help Boards and leadership teams identify hidden risks, strengthen controls and turn recurring organisational problems into clear actions, accountable owners and measurable results.&rdquo;
            </p>

            <div className="pt-3 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300 font-semibold flex flex-wrap items-center justify-center gap-2">
              <span className="text-[#10B981]">For:</span>
              <span>Boards, CEOs, Finance Leaders, HR Leaders and organisations navigating growth, governance and performance challenges.</span>
            </div>
          </motion.div>

          {/* Interactive 3D System Canvas Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="my-4"
          >
            <ApexSystem3DCanvas />
          </motion.div>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col items-center gap-4 pt-2"
          >
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                onClick={() => openBooking("Governance & Risk")}
                className="bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black rounded-full px-8 py-4 text-sm sm:text-base shadow-2xl shadow-[#10B981]/30 flex items-center gap-2.5 transition-all hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Your Clarity Session →</span>
              </Button>

              <Button
                onClick={() => handleScrollToSection("what-we-do")}
                variant="outline"
                className="border-slate-700 bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:text-white font-bold rounded-full px-7 py-4 text-sm flex items-center gap-2 transition-all"
              >
                <span>See How Apex Edge Works →</span>
              </Button>
            </div>

            {/* Reassurance Microcopy */}
            <span className="text-xs text-slate-400 font-medium italic">
              No retainer. No open-ended engagement. Start with one challenge.
            </span>
          </motion.div>

          {/* Social Proof / Client Ecosystem Ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-400"
          >
            <span className="uppercase tracking-widest text-[#10B981] text-[10px]">ADVISORY SCOPE:</span>
            {clientLogos.map((client, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                <span className="text-slate-200">{client}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Corporate Services Ticker */}
      <CorporateServicesTicker />

      {/* 3. WHAT DOES APEX EDGE ACTUALLY DO? */}
      <div id="what-we-do">
        <WhatWeDoExplanation />
      </div>

      {/* 4. WHO WE WORK WITH */}
      <WhoWeHelpSection />

      {/* 5. DOES THIS SOUND FAMILIAR? */}
      <DoesThisSoundFamiliar />

      {/* 6. YOUR PROBLEMS ARE CONNECTED */}
      <ConnectedProblemsVisual />

      {/* 7. BEFORE → AFTER TRANSFORMATION */}
      <BeforeAfterTransformation />

      {/* 8. SYSTEMS NOT REPORTS */}
      <SystemsNotReports />

      {/* 9. PRACTICE AREAS ARCHITECTURE */}
      <ExecutiveServicesArchitecture />

      {/* 10. SIGNATURE ENGAGEMENTS — START WITH ONE CHALLENGE */}
      <SignatureEngagements onOpenBooking={() => openBooking("Governance & Risk")} />

      {/* 11. ADVISORY METHODOLOGY */}
      <AdvisoryMethodology />

      {/* 12. WHY APEX EDGE — WE DON'T STOP AT RECOMMENDATIONS */}
      <WhyApexEdgeSection />

      {/* 13. WHAT YOU WALK AWAY WITH */}
      <TangibleOutputsShowcase />

      {/* 14. VERIFIED CASE SNAPSHOTS */}
      <VerifiedCaseSnapshots />

      {/* 15. DEDICATED BOARD ADVISORY SECTION */}
      <DedicatedBoardSection onOpenBooking={() => openBooking("Governance & Risk")} />

      {/* 16. FREQUENTLY ASKED QUESTIONS */}
      <ExecutiveFAQSection />

      {/* 17. CLARITY SESSION SECTION */}
      <ClaritySessionSection onOpenBooking={() => openBooking("Governance & Risk")} />

      {/* 18. FINAL EXECUTIVE CTA */}
      <ExecutiveFinalCTA onOpenBooking={() => openBooking("Governance & Risk")} />

      {/* Footer */}
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
