"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight, Sparkles, Tag, CheckCircle2, ShieldCheck, Search, Calendar } from "lucide-react";
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

      {/* Hero on Clean Light Canvas */}
      <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 overflow-hidden border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10 text-center space-y-6">
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

      {/* Featured Editorial Articles Section */}
      <EditorialPerspectivesSection />

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
