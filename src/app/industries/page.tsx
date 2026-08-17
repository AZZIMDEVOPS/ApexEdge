"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Landmark, ShieldCheck, HeartPulse, Factory, Briefcase, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { ExecutiveHeaderNav } from "@/components/ExecutiveHeaderNav";
import { CorporateFooter } from "@/components/CorporateFooter";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ApexAIAssistant } from "@/components/ApexAIAssistant";
import { Button } from "@/components/ui/button";

const INDUSTRIES = [
  {
    name: "Banking & Financial Services",
    icon: Landmark,
    challenges: "Strict CBK regulatory compliance, risk heat map audits, internal control gaps, and executive accountability for risk exposure.",
    whereWeHelp: "Board-Ready Risk Sprints, CBK compliance review, internal financial approval controls, and decision frameworks.",
    systemsImproved: "Financial Authorization Matrixes, Credit Risk Registers, Compliance Dashboards & Board Reporting Packs.",
    outcome: "100% CBK audit readiness, clear credit/risk oversight, and zero ambiguity in executive decision rights.",
  },
  {
    name: "State Corporations & Public Sector",
    icon: Building2,
    challenges: "Mwongozo Code adherence, Board evaluation compliance, public procurement oversight, and ministerial reporting.",
    whereWeHelp: "Independent Board Evaluations, Governance Health Checks, procurement SOP redesign, and Mwongozo alignment.",
    systemsImproved: "Board Charters, Governance Dashboards, Procurement Control SOPs & Public Accountability Frameworks.",
    outcome: "Full statutory compliance, transparent public procurement oversight, and elevated Mwongozo audit scores.",
  },
  {
    name: "Insurance & Microfinance",
    icon: ShieldCheck,
    challenges: "IRA capital adequacy governance, actuarial risk reporting, claims control procedures, and role clarity.",
    whereWeHelp: "Control Room Dashboards, claims approval matrixes, job grading, and quarterly risk reporting packs.",
    systemsImproved: "Claims SOP Manuals, IRA Regulatory Audit Checklists, Job Structures & Performance Scorecards.",
    outcome: "Reduced claims processing risk, clear staff accountability, and streamlined IRA regulatory reporting.",
  },
  {
    name: "Healthcare & Pharmaceuticals",
    icon: HeartPulse,
    challenges: "Clinical governance, medical regulatory licensing, staff performance management, and facility SOP compliance.",
    whereWeHelp: "Practical SOP manuals, performance scorecards, regulatory compliance tracking, and leadership capability.",
    systemsImproved: "Clinical Operational SOPs, Medical Compliance Matrixes & Staff Performance Scorecards.",
    outcome: "Consistent quality of care, zero regulatory licensing default, and clear clinical management accountability.",
  },
  {
    name: "Manufacturing & Supply Chain",
    icon: Factory,
    challenges: "Operational bottleneck controls, plant inventory audit exceptions, labor law compliance, and safety governance.",
    whereWeHelp: "SOP-to-Practice Sprints, factory job structures, labor risk audits, and operational accountability trackers.",
    systemsImproved: "Plant Operational SOPs, Inventory Control Checklists, Salary Grading Bands & Labor Compliance Tools.",
    outcome: "Eliminated inventory leakage, improved plant productivity, and full compliance with Kenyan labor laws.",
  },
  {
    name: "Commercial Real Estate & Private Equity",
    icon: Briefcase,
    challenges: "Joint venture governance, investor board packs, rapid expansion control gaps, and executive incentive structures.",
    whereWeHelp: "Board paper templates, executive compensation frameworks, governance dashboards, and investor decision frameworks.",
    systemsImproved: "JV Decision Frameworks, Investor Reporting Dashboards & Executive Compensation Scorecards.",
    outcome: "High-confidence investor reporting, accelerated deal approvals, and clear capital allocation controls.",
  },
];

export default function IndustriesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-900 selection:bg-[#10B981] selection:text-[#071C3F]">
      <ExecutiveHeaderNav onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Hero */}
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
            We don&apos;t just list industries. For every sector, we identify the exact governance, risk, control, and performance problems and build practical systems that deliver measurable outcomes.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
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
                      <span className="font-extrabold uppercase text-rose-400 tracking-wider block mb-0.5">
                        1. Sector Challenge:
                      </span>
                      <p className="text-slate-300 leading-relaxed font-normal">{ind.challenges}</p>
                    </div>

                    <div>
                      <span className="font-extrabold uppercase text-blue-400 tracking-wider block mb-0.5">
                        2. Where Apex Edge Helps:
                      </span>
                      <p className="text-slate-300 leading-relaxed font-normal">{ind.whereWeHelp}</p>
                    </div>

                    <div>
                      <span className="font-extrabold uppercase text-teal-300 tracking-wider block mb-0.5">
                        3. Systems Improved:
                      </span>
                      <p className="text-slate-300 leading-relaxed font-normal">{ind.systemsImproved}</p>
                    </div>

                    <div>
                      <span className="font-extrabold uppercase text-[#10B981] tracking-wider block mb-0.5">
                        4. Outcome That Matters:
                      </span>
                      <p className="text-slate-100 font-semibold leading-relaxed">{ind.outcome}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full py-3 rounded-full bg-slate-900 border border-[#10B981]/40 text-[#10B981] hover:bg-[#10B981] hover:text-[#071C3F] font-bold text-xs transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Discuss Sector Scope →</span>
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
