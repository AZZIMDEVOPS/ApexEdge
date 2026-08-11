"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Award, HeartHandshake, Building2, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { ExecutiveHeaderNav } from "@/components/ExecutiveHeaderNav";
import { CorporateFooter } from "@/components/CorporateFooter";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ApexAIAssistant } from "@/components/ApexAIAssistant";
import { WhatsAppPopUI } from "@/components/WhatsAppPopUI";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-900 selection:bg-[#10B981] selection:text-[#071C3F]">
      <ExecutiveHeaderNav onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Hero */}
      <section className="relative py-24 bg-[#071C3F] text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/nairobi_enterprise_skyline.jpg"
            alt="Nairobi Headquarters"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071C3F] via-[#071C3F]/90 to-[#071C3F]" />
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 relative z-10 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] text-xs font-black uppercase tracking-[0.25em]">
            <ShieldCheck className="w-4 h-4" />
            <span>ABOUT APEX EDGE ADVISORY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Building Board-Ready Systems <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-[#10B981]">
              Across East Africa.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-slate-300 font-normal leading-relaxed">
            Apex Edge Advisory Limited is a Nairobi-headquartered strategic advisory firm dedicated to solving governance, people, control and performance problems for Boards and executive leadership teams.
          </p>
        </div>
      </section>

      {/* Who We Are & Experience */}
      <section className="py-20 bg-slate-950 text-white border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/15 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              Firm Background
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Why Apex Edge Exists
            </h2>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
              Most organizational failures do not stem from a lack of talent or intent. They happen because governance, risk controls, policies and performance frameworks operate in silos—or exist only on paper.
            </p>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
              Apex Edge was founded to bridge the gap between high-level advisory recommendations and practical execution. We build tools, controls, timelines, and decision frameworks that leaders can actually use in daily operations.
            </p>

            <div className="space-y-3 pt-2 text-xs font-semibold text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Executive Experience across Financial Institutions, State Corporations &amp; Multinationals</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Deep expertise in Kenyan Companies Act 2015, CMA Guidelines &amp; Mwongozo Governance Code</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>100% Practical, Outcome-Driven Advisory Methodology</span>
              </div>
            </div>
          </div>

          <div className="relative h-96 sm:h-[450px] rounded-3xl overflow-hidden border border-[#10B981]/40 shadow-2xl">
            <Image
              src="/african_female_executive.png"
              alt="Apex Edge Advisory Leadership"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071C3F] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#071C3F]/90 border border-[#10B981]/40 backdrop-blur-xl">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#10B981]">East African Context</span>
              <h3 className="text-base font-black text-white mt-1">Headquartered in Nairobi, Kenya</h3>
              <p className="text-xs text-slate-300 mt-1">Delivering strategic clarity across the East African corporate landscape.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 bg-[#071C3F] text-white border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">OUR FOUNDATION</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Mission, Vision &amp; Core Principles</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-8 space-y-4 hover:border-[#10B981] transition-all">
              <div className="p-3 rounded-2xl bg-[#10B981]/20 text-[#10B981] w-fit">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white">Our Mission</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                To turn governance, people, control and performance problems into Board-ready systems that leaders can actually use.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-8 space-y-4 hover:border-[#10B981] transition-all">
              <div className="p-3 rounded-2xl bg-blue-500/20 text-blue-400 w-fit">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white">Our Vision</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                To be East Africa&apos;s most trusted strategic advisory firm for Boards, CEOs and leadership teams navigating growth and governance complexity.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-8 space-y-4 hover:border-[#10B981] transition-all">
              <div className="p-3 rounded-2xl bg-emerald-500/20 text-[#10B981] w-fit">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white">Core Values</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Practical execution, unyielding integrity, structured accountability, evidence-based advisory, and board-ready standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-950 text-white text-center">
        <div className="mx-auto max-w-4xl px-5 space-y-6">
          <h2 className="text-3xl font-black text-white">Ready to Discuss Your Organisational Challenge?</h2>
          <Button
            onClick={() => setIsBookingOpen(true)}
            className="bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black rounded-full px-8 py-4 text-sm shadow-xl"
          >
            <Calendar className="w-4 h-4 mr-2" />
            <span>Book Your 45-Minute Clarity Session →</span>
          </Button>
        </div>
      </section>

      <CorporateFooter />
      <ConsultationModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <WhatsAppPopUI />
      <ApexAIAssistant onOpenBooking={() => setIsBookingOpen(true)} />
    </main>
  );
}
