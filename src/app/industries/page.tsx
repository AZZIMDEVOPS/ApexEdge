"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
    image: "/east_africa_financial_skyline.jpg",
    imageAlt: "East Africa commercial banking and financial district towers",
    challenges: "Strict CBK regulatory compliance, risk heat map audits, internal control gaps, and executive accountability for risk exposure.",
    whereWeHelp: "Board-Ready Risk Sprints, CBK compliance review, internal financial approval controls, and decision frameworks.",
    systemsImproved: "Financial Authorization Matrixes, Credit Risk Registers, Compliance Dashboards & Board Reporting Packs.",
    outcome: "100% CBK audit readiness, clear credit/risk oversight, and zero ambiguity in executive decision rights.",
  },
  {
    name: "State Corporations & Public Sector",
    icon: Building2,
    image: "/african_board_signing.jpg",
    imageAlt: "Executive board members and ministerial panel reviewing and signing governance charters",
    challenges: "Mwongozo Code adherence, Board evaluation compliance, public procurement oversight, and ministerial reporting.",
    whereWeHelp: "Independent Board Evaluations, Governance Health Checks, procurement SOP redesign, and Mwongozo alignment.",
    systemsImproved: "Board Charters, Governance Dashboards, Procurement Control SOPs & Public Accountability Frameworks.",
    outcome: "Full statutory compliance, transparent public procurement oversight, and elevated Mwongozo audit scores.",
  },
  {
    name: "Insurance & Microfinance",
    icon: ShieldCheck,
    image: "/advisory_report_consultation.jpg",
    imageAlt: "Senior partner and actuarial risk analyst reviewing financial and risk reports",
    challenges: "IRA capital adequacy governance, actuarial risk reporting, claims control procedures, and role clarity.",
    whereWeHelp: "Control Room Dashboards, claims approval matrixes, job grading, and quarterly risk reporting packs.",
    systemsImproved: "Claims SOP Manuals, IRA Regulatory Audit Checklists, Job Structures & Performance Scorecards.",
    outcome: "Reduced claims processing risk, clear staff accountability, and streamlined IRA regulatory reporting.",
  },
  {
    name: "Healthcare & Pharmaceuticals",
    icon: HeartPulse,
    image: "/operations_analyst_desk.jpg",
    imageAlt: "Advisory consultant modeling clinical operational SOPs and compliance workflows",
    challenges: "Clinical governance, medical regulatory licensing, staff performance management, and facility SOP compliance.",
    whereWeHelp: "Practical SOP manuals, performance scorecards, regulatory compliance tracking, and leadership capability.",
    systemsImproved: "Clinical Operational SOPs, Medical Compliance Matrixes & Staff Performance Scorecards.",
    outcome: "Consistent quality of care, zero regulatory licensing default, and clear clinical management accountability.",
  },
  {
    name: "Manufacturing & Supply Chain",
    icon: Factory,
    image: "/business_analysis_auditorium.jpg",
    imageAlt: "Operations and supply chain leadership conducting process analysis",
    challenges: "Operational bottleneck controls, plant inventory audit exceptions, labor law compliance, and safety governance.",
    whereWeHelp: "SOP-to-Practice Sprints, factory job structures, labor risk audits, and operational accountability trackers.",
    systemsImproved: "Plant Operational SOPs, Inventory Control Checklists, Salary Grading Bands & Labor Compliance Tools.",
    outcome: "Eliminated inventory leakage, improved plant productivity, and full compliance with Kenyan labor laws.",
  },
  {
    name: "Commercial Real Estate & Private Equity",
    icon: Briefcase,
    image: "/nairobi_gtc_expressway.jpg",
    imageAlt: "Commercial real estate asset development towers and Nairobi enterprise corridor",
    challenges: "Joint venture governance, investor board packs, rapid expansion control gaps, and executive incentive structures.",
    whereWeHelp: "Board paper templates, executive compensation frameworks, governance dashboards, and investor decision frameworks.",
    systemsImproved: "JV Decision Frameworks, Investor Reporting Dashboards & Executive Compensation Scorecards.",
    outcome: "High-confidence investor reporting, accelerated deal approvals, and clear capital allocation controls.",
  },
];

export default function IndustriesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#10B981] selection:text-[#071C3F]">
      <ExecutiveHeaderNav onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Hero with High-Contrast Header */}
      <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 overflow-hidden border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#071C3F] text-xs font-black uppercase tracking-[0.25em] shadow-xs">
            <Building2 className="w-4 h-4 text-[#10B981]" />
            <span>SECTOR-SPECIFIC ADVISORY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-tight">
            Industry Challenges Solved <br />
            <span className="text-[#071C3F] underline decoration-[#10B981] decoration-4 underline-offset-8">
              With Board-Ready Precision.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-slate-700 font-normal leading-relaxed">
            We don&apos;t just list industries. For every sector, we identify the exact governance, risk, control, and performance problems and build practical systems that deliver measurable outcomes.
          </p>
        </div>
      </section>

      {/* Industries Grid on Clean White Canvas */}
      <section className="py-24 bg-white text-slate-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, idx) => {
            const IconComp = ind.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white border-2 border-slate-200 p-7 space-y-6 hover:border-slate-300 transition-all flex flex-col justify-between shadow-lg hover:shadow-xl"
              >
                <div className="space-y-4">
                  {/* High-Resolution Sector Photography Frame */}
                  <div className="relative h-44 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                    <Image
                      src={ind.image}
                      alt={ind.imageAlt || ind.name}
                      fill
                      className="object-cover object-center filter brightness-105 transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px]">
                      <span className="font-semibold bg-slate-900/80 px-2.5 py-0.5 rounded-md backdrop-blur-md">
                        {ind.name}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200/80 text-[#071C3F]">
                      <IconComp className="w-5 h-5 text-[#10B981]" />
                    </div>
                    <h3 className="text-xl font-black text-slate-950">{ind.name}</h3>
                  </div>

                  <div className="space-y-3.5 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                      <span className="font-extrabold uppercase text-amber-700 tracking-wider block">
                        1. Sector Challenge:
                      </span>
                      <p className="text-slate-600 leading-relaxed font-normal">{ind.challenges}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                      <span className="font-extrabold uppercase text-blue-700 tracking-wider block">
                        2. Where Apex Edge Helps:
                      </span>
                      <p className="text-slate-600 leading-relaxed font-normal">{ind.whereWeHelp}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                      <span className="font-extrabold uppercase text-teal-800 tracking-wider block">
                        3. Systems Improved:
                      </span>
                      <p className="text-slate-600 leading-relaxed font-normal">{ind.systemsImproved}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-1">
                      <span className="font-extrabold uppercase text-[#071C3F] tracking-wider block">
                        4. Outcome That Matters:
                      </span>
                      <p className="text-slate-900 font-bold leading-relaxed">{ind.outcome}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full py-3 rounded-full bg-[#071C3F] hover:bg-[#10B981] hover:text-[#071C3F] text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer group"
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
