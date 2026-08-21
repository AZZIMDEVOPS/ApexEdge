"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Award, HeartHandshake, Building2, Calendar, CheckCircle2, Target, Lock, Compass, MapPin, ArrowRight } from "lucide-react";
import { ExecutiveHeaderNav } from "@/components/ExecutiveHeaderNav";
import { CorporateFooter } from "@/components/CorporateFooter";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ApexAIAssistant } from "@/components/ApexAIAssistant";
import { OriginStoryTimeline } from "@/components/OriginStoryTimeline";
import { LeadershipTeamSection } from "@/components/LeadershipTeamSection";
import { ImpactEvidenceSection } from "@/components/ImpactEvidenceSection";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#10B981] selection:text-[#071C3F]">
      <ExecutiveHeaderNav onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 1. EDITORIAL HERO ON CLEAN WHITE CANVAS */}
      <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 overflow-hidden border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10 relative z-10 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#071C3F] text-xs font-black uppercase tracking-[0.25em] shadow-xs">
            <Compass className="w-4 h-4 text-[#10B981]" />
            <span>ABOUT APEX EDGE ADVISORY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-tight">
            We bridge the gap between high-level strategy and <br />
            <span className="text-[#071C3F] underline decoration-[#10B981] decoration-4 underline-offset-8">
              daily operational execution.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-700 font-normal leading-relaxed">
            Headquartered in Nairobi, Kenya, Apex Edge Advisory Limited is a strategic governance, risk, and internal control firm dedicated to building practical, Board-ready systems across East Africa.
          </p>
        </div>
      </section>

      {/* 2. OUR CORE CONVICTION ON WHITE WITH APEX BLUE GRADIENT CARD */}
      <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">
              OUR FOUNDATIONAL PHILOSOPHY
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 leading-tight">
              Why We Rejected Slide-Deck Consulting
            </h2>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                In 2018, our founding partners noticed a chronic failure mode across East African corporations: leadership teams were spending millions on 250-page strategy documents and governance binders that ended up sitting on executive shelves while daily audit exceptions, procurement bottlenecks, and role ambiguities persisted unabated.
              </p>
              <p>
                We built Apex Edge on the conviction that <strong className="text-slate-950 font-black">a recommendation without an operational tool is a liability.</strong> If a policy cannot be summarized into a 1-page digital workflow and assigned to a named owner with a measurable metric, it will not be executed.
              </p>
            </div>

            <div className="pt-2 space-y-3 text-xs font-bold text-slate-800">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Hands-on advisory across Tier-1 Banks, State Corporations &amp; Regional Developers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Deep mastery of Kenyan Companies Act 2015, Data Protection Act 2019, CMA &amp; Mwongozo</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Zero open-ended retainer lock-in: Every engagement has fixed deliverables and named outcomes</span>
              </div>
            </div>
          </div>

          {/* Right Column Apex Edge Blue Gradient Container */}
          <div className="lg:col-span-5 relative h-96 sm:h-[480px] rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl bg-gradient-to-br from-[#071C3F] via-[#09224E] to-[#071C3F]">
            <Image
              src="/african_corporate_team_meeting.jpg"
              alt="Apex Edge Advisory senior team in executive session"
              fill
              className="object-cover object-center filter brightness-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071C3F] via-[#071C3F]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-gradient-to-br from-[#071C3F]/95 to-[#09224E]/95 border border-slate-700/80 backdrop-blur-xl shadow-xl">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#10B981]">East African Regional Context</span>
              <h3 className="text-base font-black text-white mt-1">Headquartered in Nairobi, Kenya</h3>
              <p className="text-xs text-slate-300 mt-1">Grounded in local statutory rigor, regional compliance, and executive realities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ORIGIN STORY TIMELINE ON WHITE */}
      <OriginStoryTimeline />

      {/* 4. EVIDENCE & PROOF */}
      <ImpactEvidenceSection />

      {/* 5. LEADERSHIP & PARTNERS */}
      <LeadershipTeamSection />

      {/* 6. MISSION, VISION & ETHICAL STANDARDS WITH APEX BLUE GRADIENT CARDS */}
      <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">OUR ETHICAL COMMITMENT</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950">How We Hold Ourselves Accountable</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Apex Edge Blue Gradient Card 1 */}
            <div className="rounded-3xl bg-gradient-to-br from-[#071C3F] via-[#09224E] to-[#071C3F] border border-slate-800 p-8 space-y-4 hover:border-[#10B981] transition-all shadow-xl text-white">
              <div className="p-3 rounded-2xl bg-[#10B981]/20 text-[#10B981] w-fit">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white">Our Mission</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                To transform governance, people, control, and data protection challenges into Board-ready operational systems that leadership teams use daily.
              </p>
            </div>

            {/* Apex Edge Blue Gradient Card 2 */}
            <div className="rounded-3xl bg-gradient-to-br from-[#071C3F] via-[#09224E] to-[#071C3F] border border-slate-800 p-8 space-y-4 hover:border-[#10B981] transition-all shadow-xl text-white">
              <div className="p-3 rounded-2xl bg-blue-500/20 text-blue-400 w-fit">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white">Our Vision</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                To be East Africa&apos;s most trusted strategic advisory firm for Boards, CEOs, and executive teams navigating growth and regulatory complexity.
              </p>
            </div>

            {/* Apex Edge Blue Gradient Card 3 */}
            <div className="rounded-3xl bg-gradient-to-br from-[#071C3F] via-[#09224E] to-[#071C3F] border border-slate-800 p-8 space-y-4 hover:border-[#10B981] transition-all shadow-xl text-white">
              <div className="p-3 rounded-2xl bg-emerald-500/20 text-[#10B981] w-fit">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white">Core Values</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Practical execution over theory, unyielding integrity, named accountability, empirical evidence, and board-ready standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA IN APEX EDGE BLUE GRADIENT CONTAINER */}
      <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#071C3F] via-[#0B2A63] to-[#071C3F] p-10 sm:p-16 text-center text-white border border-slate-800 shadow-2xl space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">GET IN TOUCH</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Have a Specific Governance or Operational Breakpoint to Discuss?
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto">
              Book a 45-minute structured working session with an Apex Edge Partner to diagnose the root cause and map out concrete solutions.
            </p>
            <div className="pt-2">
              <Button
                onClick={() => setIsBookingOpen(true)}
                className="bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black rounded-full px-8 py-4 text-sm shadow-xl shadow-[#10B981]/25 transition-all hover:scale-105"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Book Your 45-Minute Clarity Session →</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CorporateFooter />
      <ConsultationModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <ApexAIAssistant onOpenBooking={() => setIsBookingOpen(true)} />
    </main>
  );
}
