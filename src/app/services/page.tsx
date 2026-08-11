"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Sliders, Award, CheckCircle2, ArrowRight, Calendar, Sparkles } from "lucide-react";
import { ExecutiveHeaderNav } from "@/components/ExecutiveHeaderNav";
import { CorporateFooter } from "@/components/CorporateFooter";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ApexAIAssistant } from "@/components/ApexAIAssistant";
import { WhatsAppPopUI } from "@/components/WhatsAppPopUI";
import { Button } from "@/components/ui/button";

const PRACTICE_AREAS = [
  {
    id: "governance-risk",
    num: "01",
    category: "GOVERNANCE & RISK",
    headline: "Give Your Board Clearer Visibility of Risk and Performance.",
    problem: "Board reports present heavy operational noise without clear decision frameworks or risk prioritization.",
    approach: "We conduct independent governance audits, structure board risk registers, and build decision frameworks.",
    deliverables: [
      "Board Risk Registers & Heat Maps",
      "Governance Dashboards & Scorecards",
      "Decision-Making Frameworks & Board Packs",
      "Mwongozo Code & CMA Compliance Audits",
      "Director Induction & Governance Charters",
    ],
    outcome: "Clearer Board oversight, faster decision-making, and zero governance ambiguity.",
  },
  {
    id: "people-performance",
    num: "02",
    category: "PEOPLE & PERFORMANCE",
    headline: "Build a Performance System That Creates Accountability.",
    problem: "Role overlap, unaligned KPIs, and people-performance problems that keep returning.",
    approach: "We architect role structures, salary bands, and OKR performance scorecards linked directly to strategy.",
    deliverables: [
      "Job Descriptions & Competency Frameworks",
      "Salary Structure & Grading Bands",
      "OKR & KPI Performance Scorecards",
      "Performance Management Tools & Guidelines",
      "Staff Accountability Matrixes",
    ],
    outcome: "Named ownership across teams, transparent appraisal systems, and measurable productivity.",
  },
  {
    id: "controls-policies",
    num: "03",
    category: "CONTROLS & POLICIES",
    headline: "Build Policies That Work in Practice.",
    problem: "Policies that exist on paper or sit on shelves, but management rarely enforces them in daily work.",
    approach: "We convert generic policies into practical SOPs with embedded approval controls and ownership.",
    deliverables: [
      "Financial Authorization & Approval SOPs",
      "Procurement Control Frameworks",
      "HR Operational Procedures & Manuals",
      "Internal Control Matrixes & Checklists",
      "Statutory Compliance Templates",
    ],
    outcome: "Practical workflows that management actually uses, eliminating audit findings.",
  },
  {
    id: "leadership-capability",
    num: "04",
    category: "LEADERSHIP & CAPABILITY",
    headline: "Build Leaders and Teams That Execute Better.",
    problem: "Senior leadership teams struggling to translate strategic goals into daily operational execution.",
    approach: "We train executives and business unit leads on structured decision-making and execution tracking.",
    deliverables: [
      "Executive Leadership Capability Frameworks",
      "Management Execution Systems",
      "Practical Decision-Making Toolkits",
      "Action Tracking & Implementation Dashboards",
      "90-Day Execution Roadmaps",
    ],
    outcome: "Leaders who execute faster, communicate clearly, and deliver measurable outputs.",
  },
];

export default function ServicesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-900 selection:bg-[#10B981] selection:text-[#071C3F]">
      <ExecutiveHeaderNav onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Hero */}
      <section className="relative py-24 bg-[#071C3F] text-white overflow-hidden border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] text-xs font-black uppercase tracking-[0.25em]">
            <ShieldCheck className="w-4 h-4" />
            <span>OUTCOME-DRIVEN PRACTICE AREAS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Client Outcomes, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-[#10B981]">
              Not Abstract Consulting.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-slate-300 font-normal leading-relaxed">
            Apex Edge structures advisory solutions around concrete organizational outcomes: Governance &amp; Risk, People &amp; Performance, Controls &amp; Policies, and Leadership Capability.
          </p>
        </div>
      </section>

      {/* Detailed Services Architecture */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-16">
          {PRACTICE_AREAS.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="rounded-3xl bg-[#071C3F]/90 border border-slate-800 p-8 sm:p-12 space-y-8 shadow-2xl hover:border-[#10B981]/50 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
                <div className="space-y-1">
                  <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">
                    Practice Category {item.num}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black text-white">{item.category}</h2>
                </div>
                <span className="text-3xl sm:text-5xl font-black text-slate-700">{item.num}</span>
              </div>

              <div className="text-xl sm:text-2xl font-bold text-slate-100 italic">
                &ldquo;{item.headline}&rdquo;
              </div>

              <div className="grid gap-8 md:grid-cols-3 text-xs sm:text-sm">
                <div className="space-y-2 p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <span className="font-black uppercase tracking-wider text-rose-400 block">The Organisational Problem:</span>
                  <p className="text-slate-300 leading-relaxed font-normal">{item.problem}</p>
                </div>

                <div className="space-y-2 p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <span className="font-black uppercase tracking-wider text-blue-400 block">Apex Edge Approach:</span>
                  <p className="text-slate-300 leading-relaxed font-normal">{item.approach}</p>
                </div>

                <div className="space-y-2 p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <span className="font-black uppercase tracking-wider text-[#10B981] block">Measurable Outcome:</span>
                  <p className="text-slate-100 leading-relaxed font-semibold">{item.outcome}</p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-800">
                <span className="text-xs font-black uppercase tracking-widest text-slate-400">Tangible Deliverables You Receive:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {item.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <Button
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black rounded-full px-6 py-3 text-xs shadow-lg flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Clarity Session for {item.category} →</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CorporateFooter />
      <ConsultationModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <WhatsAppPopUI />
      <ApexAIAssistant onOpenBooking={() => setIsBookingOpen(true)} />
    </main>
  );
}
