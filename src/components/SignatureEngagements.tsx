"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, FileCheck, Users, LayoutDashboard, ArrowRight } from "lucide-react";

interface SignatureEngagementProps {
  onOpenBooking: () => void;
}

const SIGNATURE_SPRINTS = [
  {
    id: "risk-sprint",
    name: "Board-Ready Risk Sprint",
    icon: ShieldCheck,
    tag: "High Impact",
    solves: "Unclear risk exposure and indecisive Board reporting.",
    does: "Deep-dive diagnostic into key operational, legal & financial risks.",
    receives: "Board-ready Risk Register, Priority Heat Map & Decision Framework.",
  },
  {
    id: "policy-sprint",
    name: "Policy-to-Practice Sprint",
    icon: FileCheck,
    tag: "Operational Focus",
    solves: "Shelf-ware policies that teams ignore in daily operations.",
    does: "Redesigns core policies into practical SOPs with embedded controls.",
    receives: "Streamlined Policy Manual, SOP Workflows & Implementation Checklist.",
  },
  {
    id: "people-sprint",
    name: "People & Performance Sprint",
    icon: Users,
    tag: "Accountability",
    solves: "Role ambiguity, missing KPIs, and unaligned teams.",
    does: "Architects clear job grading, salary bands, and performance scorecards.",
    receives: "Job Description Matrix, OKR Framework & Performance Scorecard Tool.",
  },
  {
    id: "governance-check",
    name: "Governance Health Check",
    icon: Zap,
    tag: "Board Level",
    solves: "Audit findings, regulatory compliance gaps & weak board oversight.",
    does: "Independent audit of Board charters, committees, and compliance records.",
    receives: "Governance Health Scorecard, Compliance Gap Map & Board Action Plan.",
  },
  {
    id: "control-dashboard",
    name: "Control Room Dashboard",
    icon: LayoutDashboard,
    tag: "Leadership Visibility",
    solves: "Lack of executive visibility over ongoing controls and timelines.",
    does: "Builds a centralized tracking framework for executive & Board monitoring.",
    receives: "Custom Executive Control Dashboard, KPI Tracker & Monthly Review Tool.",
  },
];

export function SignatureEngagements({ onOpenBooking }: SignatureEngagementProps) {
  return (
    <section className="relative py-24 bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-black uppercase tracking-[0.25em]"
          >
            <Zap className="w-3.5 h-3.5 text-[#10B981]" />
            <span>FOCUSED ENGAGEMENTS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight uppercase"
          >
            START WITH ONE CHALLENGE.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
          >
            Focused engagements designed to diagnose the problem, create clarity and build practical systems.
          </motion.p>
        </div>

        {/* 5 Signature Engagements Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SIGNATURE_SPRINTS.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative rounded-3xl bg-[#071C3F]/90 border border-slate-800 p-7 hover:border-[#10B981]/60 hover:bg-slate-900 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-[#10B981] group-hover:bg-[#10B981] group-hover:text-[#071C3F] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#10B981]/15 text-[#10B981] text-[10px] font-black uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white group-hover:text-[#10B981] transition-colors">
                    {item.name}
                  </h3>

                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="font-extrabold uppercase text-rose-400 tracking-wider block mb-0.5">
                        What It Solves:
                      </span>
                      <p className="text-slate-300 font-normal leading-snug">{item.solves}</p>
                    </div>

                    <div>
                      <span className="font-extrabold uppercase text-blue-400 tracking-wider block mb-0.5">
                        What Apex Edge Does:
                      </span>
                      <p className="text-slate-300 font-normal leading-snug">{item.does}</p>
                    </div>

                    <div>
                      <span className="font-extrabold uppercase text-[#10B981] tracking-wider block mb-0.5">
                        What You Receive:
                      </span>
                      <p className="text-slate-100 font-semibold leading-snug">{item.receives}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-2.5 rounded-full bg-slate-900 border border-[#10B981]/40 text-[#10B981] hover:bg-[#10B981] hover:text-[#071C3F] font-bold text-xs transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Request Sprint Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
