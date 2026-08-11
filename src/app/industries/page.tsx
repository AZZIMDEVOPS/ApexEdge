"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Landmark, ShieldCheck, HeartPulse, Factory, Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { ExecutiveHeaderNav } from "@/components/ExecutiveHeaderNav";
import { CorporateFooter } from "@/components/CorporateFooter";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ApexAIAssistant } from "@/components/ApexAIAssistant";
import { WhatsAppPopUI } from "@/components/WhatsAppPopUI";
import { Button } from "@/components/ui/button";

const INDUSTRIES = [
  {
    name: "Banking & Financial Services",
    icon: Landmark,
    challenges: "Strict CBK regulatory compliance, risk heat map audits, internal control gaps, and executive accountability.",
    solutions: "Board-Ready Risk Sprints, CBK compliance review, internal financial approval controls, and decision frameworks.",
  },
  {
    name: "State Corporations & Public Sector",
    icon: Building2,
    challenges: "Mwongozo Code adherence, Board evaluation compliance, public procurement oversight, and ministerial reporting.",
    solutions: "Independent Board Evaluations, Governance Health Checks, procurement SOP redesign, and Mwongozo alignment.",
  },
  {
    name: "Insurance & Microfinance",
    icon: ShieldCheck,
    challenges: "IRA capital adequacy governance, actuarial risk reporting, claims control procedures, and role clarity.",
    solutions: "Control Room Dashboards, claims approval matrixes, job grading, and quarterly risk reporting packs.",
  },
  {
    name: "Healthcare & Pharmaceuticals",
    icon: HeartPulse,
    challenges: "Clinical governance, medical regulatory licensing, staff performance management, and facility SOP compliance.",
    solutions: "Practical SOP manuals, performance scorecards, regulatory compliance tracking, and leadership capability.",
  },
  {
    name: "Manufacturing & Supply Chain",
    icon: Factory,
    challenges: "Operational bottleneck controls, plant inventory audit exceptions, labor law compliance, and safety governance.",
    solutions: "SOP-to-Practice Sprints, factory job structures, labor risk audits, and operational accountability trackers.",
  },
  {
    name: "Commercial Real Estate & Private Equity",
    icon: Briefcase,
    challenges: "Joint venture governance, investor board packs, rapid expansion control gaps, and executive incentive structures.",
    solutions: "Board paper templates, executive compensation frameworks, governance dashboards, and investor decision frameworks.",
  },
];

export default function IndustriesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-900 selection:bg-[#10B981] selection:text-[#071C3F]">
      <ExecutiveHeaderNav onOpenBooking={() => setIsBookingOpen(true)} />

      <section className="relative py-24 bg-[#071C3F] text-white overflow-hidden border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] text-xs font-black uppercase tracking-[0.25em]">
            <Building2 className="w-4 h-4" />
            <span>SECTOR-SPECIFIC ADVISORY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Industry Challenges Solved <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-[#10B981]">
              With Board-Ready Precision.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-slate-300 font-normal leading-relaxed">
            We don&apos;t just list industries. We identify the exact governance, risk, control, and performance problems specific to your sector and build practical systems to resolve them.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, idx) => {
            const IconComp = ind.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-[#071C3F]/90 border border-slate-800 p-8 space-y-6 hover:border-[#10B981] transition-all flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-[#10B981] w-fit">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-black text-white">{ind.name}</h3>

                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="font-extrabold uppercase text-rose-400 tracking-wider block mb-1">
                        Sector Challenge:
                      </span>
                      <p className="text-slate-300 leading-relaxed font-normal">{ind.challenges}</p>
                    </div>

                    <div>
                      <span className="font-extrabold uppercase text-[#10B981] tracking-wider block mb-1">
                        Apex Edge Solution:
                      </span>
                      <p className="text-slate-100 leading-relaxed font-semibold">{ind.solutions}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full py-2.5 rounded-full bg-slate-900 border border-[#10B981]/40 text-[#10B981] hover:bg-[#10B981] hover:text-[#071C3F] font-bold text-xs transition-all"
                  >
                    Discuss Sector Scope →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CorporateFooter />
      <ConsultationModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <ApexAIAssistant onOpenBooking={() => setIsBookingOpen(true)} />
    </main>
  );
}
