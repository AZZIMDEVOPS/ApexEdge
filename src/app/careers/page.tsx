"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, ShieldCheck, CheckCircle2, ArrowRight, Calendar } from "lucide-react";
import { ExecutiveHeaderNav } from "@/components/ExecutiveHeaderNav";
import { CorporateFooter } from "@/components/CorporateFooter";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ApexAIAssistant } from "@/components/ApexAIAssistant";
import { WhatsAppPopUI } from "@/components/WhatsAppPopUI";
import { Button } from "@/components/ui/button";

const POSITIONS = [
  {
    title: "Senior Governance & Risk Lead",
    location: "Nairobi HQ",
    type: "Full-Time",
    desc: "Lead executive Board-ready risk sprints, governance health checks, and Mwongozo compliance audits.",
  },
  {
    title: "People & Performance Systems Specialist",
    location: "Nairobi HQ",
    type: "Full-Time",
    desc: "Design job structures, salary bands, OKRs, and performance management tools for growing organizations.",
  },
  {
    title: "Controls & Policy Advisory Consultant",
    location: "Nairobi HQ",
    type: "Full-Time",
    desc: "Convert generic policy documents into operational SOPs with embedded approval controls.",
  },
];

export default function CareersPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-900 selection:bg-[#10B981] selection:text-[#071C3F]">
      <ExecutiveHeaderNav onOpenBooking={() => setIsBookingOpen(true)} />

      <section className="relative py-24 bg-[#071C3F] text-white overflow-hidden border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] text-xs font-black uppercase tracking-[0.25em]">
            <Briefcase className="w-4 h-4" />
            <span>ADVISORY CAREERS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Build Systems That Matter. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-[#10B981]">
              Join Apex Edge Advisory.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-slate-300 font-normal leading-relaxed">
            We are looking for strategic thinkers, governance professionals, and organizational systems architects committed to executive excellence across East Africa.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-950 text-white">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white">Open Advisory Roles</h2>

          <div className="space-y-4">
            {POSITIONS.map((pos, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-[#071C3F]/90 border border-slate-800 p-7 hover:border-[#10B981] transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#10B981] uppercase tracking-wider">{pos.location}</span>
                    <span className="text-xs text-slate-400 font-medium">• {pos.type}</span>
                  </div>
                  <h3 className="text-xl font-black text-white">{pos.title}</h3>
                  <p className="text-xs text-slate-300 max-w-xl font-normal leading-relaxed">{pos.desc}</p>
                </div>

                <a
                  href="mailto:careers@apexedge.co.ke?subject=Advisory%20Role%20Application"
                  className="rounded-full bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black text-xs px-6 py-3 shrink-0 flex items-center gap-2"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CorporateFooter />
      <ConsultationModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <WhatsAppPopUI />
      <ApexAIAssistant onOpenBooking={() => setIsBookingOpen(true)} />
    </main>
  );
}
