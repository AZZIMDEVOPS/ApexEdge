"use client";

import { motion } from "framer-motion";
import { FileCheck2, LayoutDashboard, ScrollText, BarChart3, Binary, Target, FileText, CalendarCheck, Sparkles } from "lucide-react";

const TANGIBLE_DELIVERABLES = [
  {
    title: "Risk Registers & Heat Maps",
    desc: "Board-ready risk matrices ranking likelihood, impact, and mitigation controls.",
    icon: FileCheck2,
  },
  {
    title: "Governance Dashboards",
    desc: "Executive visual tracking tools monitoring governance and compliance health.",
    icon: LayoutDashboard,
  },
  {
    title: "Policies & Practical SOPs",
    desc: "Operational handbooks with step-by-step approval controls and responsibility matrices.",
    icon: ScrollText,
  },
  {
    title: "Performance Scorecards",
    desc: "Structured KPI & OKR tools linking individual output to strategic business goals.",
    icon: BarChart3,
  },
  {
    title: "Job & Salary Structures",
    desc: "Standardized role grading, salary bands, and career progression frameworks.",
    icon: Binary,
  },
  {
    title: "Action & Ownership Trackers",
    desc: "Live monitoring tools with named owners, hard deadlines, and accountability triggers.",
    icon: Target,
  },
  {
    title: "Executive Board Papers",
    desc: "Concise, decision-focused Board reporting packs that eliminate operational noise.",
    icon: FileText,
  },
  {
    title: "90-Day Implementation Plans",
    desc: "Step-by-step roadmap guiding your internal leadership team through execution.",
    icon: CalendarCheck,
  },
];

export function TangibleOutputsShowcase() {
  return (
    <section className="relative py-24 bg-[#071C3F] text-white overflow-hidden border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/15 border border-[#10B981]/40 text-[#10B981] text-xs font-black uppercase tracking-[0.25em]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONCRETE ASSETS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight"
          >
            What You Walk Away With.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
          >
            These are tangible, working organizational tools—not abstract consulting meetings.
          </motion.p>
        </div>

        {/* 8 Tangible Output Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TANGIBLE_DELIVERABLES.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="group rounded-3xl bg-slate-900/90 border border-slate-800 p-6 hover:border-[#10B981]/60 hover:bg-slate-900 transition-all duration-300 shadow-xl space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-[#10B981] w-fit group-hover:bg-[#10B981] group-hover:text-[#071C3F] transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-black text-white group-hover:text-[#10B981] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800/80 text-[10px] font-extrabold uppercase tracking-widest text-[#10B981]">
                  System Tool
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
