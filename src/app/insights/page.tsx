"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight, Sparkles, Tag, CheckCircle2, ShieldCheck, Search, Calendar, Award, Building2 } from "lucide-react";
import { ExecutiveHeaderNav } from "@/components/ExecutiveHeaderNav";
import { EditorialPerspectivesSection, EDITORIAL_ARTICLES } from "@/components/EditorialPerspectivesSection";
import { InteractiveKnowledgeCentre } from "@/components/InteractiveKnowledgeCentre";
import { CorporateFooter } from "@/components/CorporateFooter";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ApexAIAssistant } from "@/components/ApexAIAssistant";
import { Button } from "@/components/ui/button";

export default function InsightsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const selectedArticle = EDITORIAL_ARTICLES.find((a) => a.id === selectedArticleId);

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#10B981] selection:text-[#071C3F]">
      <ExecutiveHeaderNav onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Hero on Clean Light Canvas with Subtle Panoramic Cityscape Atmosphere */}
      <section className="relative py-24 sm:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <img
            src="/nairobi_panoramic_daylight.jpg"
            alt="Nairobi Financial District Skyline"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#071C3F] text-xs font-black uppercase tracking-[0.25em] shadow-xs">
            <BookOpen className="w-4 h-4 text-[#10B981]" />
            <span>FIELD NOTES &amp; BOARDROOM PERSPECTIVES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-tight">
            Independent Thinking on <br />
            <span className="text-[#071C3F] underline decoration-[#10B981] decoration-4 underline-offset-8">
              East African Governance &amp; Execution.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-700 font-normal leading-relaxed">
            Real observations, regulatory analysis, and candid commentary from our advisory work across East African corporate boardrooms, public state corporations, and executive suites.
          </p>
        </div>
      </section>

      {/* Featured Editorial Articles Section (Now with photography on every card) */}
      <EditorialPerspectivesSection />

      {/* Executive Field Operations Showcase — 3 Authentic Photography Panels */}
      <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[#071C3F] text-xs font-black uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
              <span>PRACTICE IN ACTION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Advisory Engagements Across East Africa
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              How our partners and advisors work with institutional leaders to turn policy into daily working reality.
            </p>
          </div>

          {/* 3 Photo Cards Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            
            {/* Card 1 */}
            <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-lg hover:shadow-xl transition-all group flex flex-col justify-between">
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src="/board_directors_panel.jpg"
                  alt="Board of Directors Fiduciary Oversight & Strategy Session"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-[#071C3F]/90 text-white text-[10px] font-black uppercase tracking-wider border border-white/20">
                    Boardroom Governance
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-slate-950 group-hover:text-[#071C3F] transition-colors">
                    Fiduciary Risk Heat Maps for Directors
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Replacing bulky 300-page board packets with concise 15-page high-signal governance summaries that empower decisive fiduciary voting.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#10B981]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Mwongozo &amp; CMA Aligned</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-lg hover:shadow-xl transition-all group flex flex-col justify-between">
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src="/outdoor_advisory_discussion.jpg"
                  alt="Executive Partner Strategy & Transformation Consultation"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-[#071C3F]/90 text-white text-[10px] font-black uppercase tracking-wider border border-white/20">
                    Executive Alignment
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-slate-950 group-hover:text-[#071C3F] transition-colors">
                    Named Accountability &amp; Role Clarity
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Eliminating cross-functional execution friction and sign-off bottlenecks by establishing transparent job grading and named ownership.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#10B981]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>90-Day Execution Toolkits</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-lg hover:shadow-xl transition-all group flex flex-col justify-between">
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src="/executive_window_discussion.jpg"
                  alt="Senior Institutional Consultation Overlooking Nairobi Skyline"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-[#071C3F]/90 text-white text-[10px] font-black uppercase tracking-wider border border-white/20">
                    Control Systems
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-slate-950 group-hover:text-[#071C3F] transition-colors">
                    1-Page Digital SOPs &amp; Approval Matrix
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Transforming unread policy binders into automated digital sign-off gates that prevent recurring internal audit findings.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#10B981]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Audit-Verified Controls</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Knowledge Centre & Advisory Q&A Search */}
      <InteractiveKnowledgeCentre onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Final Action Banner with Apex Edge Blue Gradient Container */}
      <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#071C3F] via-[#0B2A63] to-[#071C3F] p-10 sm:p-16 text-center text-white border border-slate-800 shadow-2xl space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">GET IN TOUCH</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Have a Complex Governance or Compliance Query?
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto">
              Discuss your organisation&apos;s specific challenge directly with an Apex Edge Partner during a focused 45-minute working session.
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
