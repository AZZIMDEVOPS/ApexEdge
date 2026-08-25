"use client";

import { useState } from "react";
import { ExecutiveHeaderNav } from "@/components/ExecutiveHeaderNav";
import { CorporateFooter } from "@/components/CorporateFooter";
import { RecruitmentTalentHub } from "@/components/RecruitmentTalentHub";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ApexAIAssistant } from "@/components/ApexAIAssistant";
import { Users, ShieldCheck, Briefcase } from "lucide-react";

export default function CareersPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#10B981] selection:text-[#071C3F]">
      <ExecutiveHeaderNav onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Hero Header on Clean Light Canvas */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 border-b border-slate-200 overflow-hidden">
        
        {/* Subtle Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/5 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#071C3F] text-xs font-black uppercase tracking-widest shadow-xs">
            <Users className="w-4 h-4 text-[#10B981]" />
            <span>PEOPLE &amp; CULTURE · RECRUITMENT PORTAL</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight max-w-4xl mx-auto">
            Apex Edge Executive Talent &amp; Recruitment Hub
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Connecting verified C-Suite executives, directors, and functional leaders with top-tier East African corporate employers and boardrooms.
          </p>
        </div>
      </section>

      {/* Main Interactive Recruitment Hub Engine on White Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <RecruitmentTalentHub />
        </div>
      </section>

      <CorporateFooter />

      <ConsultationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultCategory="People & Performance"
      />

      <ApexAIAssistant onOpenBooking={() => setIsBookingOpen(true)} />
    </main>
  );
}
