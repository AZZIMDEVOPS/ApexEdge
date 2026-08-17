"use client";

import { motion } from "framer-motion";
import { Building2, ShieldAlert, CheckCircle2, ArrowRight } from "lucide-react";

const CASE_STUDIES = [
  {
    sector: "Financial Services & Banking",
    challenge: "Recurring procurement and financial approval control gaps identified across annual internal compliance audits.",
    intervention: "Apex Edge redesigned approval authorization matrices, updated procurement SOPs, and embedded digital control tracking.",
    result: "Clearer approval controls, zero recurring audit exceptions in subsequent reviews, and structured Board oversight.",
  },
  {
    sector: "State Corporation / Public Sector",
    challenge: "Board reporting lacked clear risk prioritization, leading to lengthy meetings without actionable decisions.",
    intervention: "Implemented a Board-Ready Risk Sprint, designing a quarterly risk dashboard and standardized Board pack template.",
    result: "Reduced Board reporting clutter, enabled clear decision frameworks, and achieved full Mwongozo governance compliance.",
  },
  {
    sector: "Commercial Real Estate & Investment",
    challenge: "Unclear team accountability and unaligned job descriptions causing operational bottlenecks during rapid expansion.",
    intervention: "Executed a People & Performance Sprint, establishing job structures, salary bands, and OKR performance scorecards.",
    result: "Defined ownership across senior leadership, eliminated role overlap, and established a transparent appraisal system.",
  },
];

export function VerifiedCaseSnapshots() {
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
            <Building2 className="w-3.5 h-3.5 text-[#10B981]" />
            <span>VERIFIED CASE SNAPSHOTS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight"
          >
            Problems We&apos;ve Helped Organisations Solve.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
          >
            Real organizational challenges transformed into Board-ready clarity, practical controls, and accountable systems.
          </motion.p>
        </div>

        {/* 3 Case Snapshot Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {CASE_STUDIES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="rounded-3xl bg-[#071C3F]/90 border border-slate-800 p-8 space-y-6 hover:border-[#10B981]/60 hover:bg-slate-900 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/15 border border-[#10B981]/40 text-[#10B981] text-[10px] font-black uppercase tracking-wider">
                  <span>{item.sector}</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="font-extrabold uppercase text-amber-400 tracking-wider flex items-center gap-1.5 mb-1">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      Challenge:
                    </span>
                    <p className="text-slate-300 font-normal leading-relaxed">{item.challenge}</p>
                  </div>

                  <div>
                    <span className="font-extrabold uppercase text-blue-400 tracking-wider flex items-center gap-1.5 mb-1">
                      <ArrowRight className="w-3.5 h-3.5" />
                      Intervention:
                    </span>
                    <p className="text-slate-300 font-normal leading-relaxed">{item.intervention}</p>
                  </div>

                  <div>
                    <span className="font-extrabold uppercase text-[#10B981] tracking-wider flex items-center gap-1.5 mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Result:
                    </span>
                    <p className="text-slate-100 font-semibold leading-relaxed">{item.result}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-[10px] font-bold text-slate-400 flex items-center justify-between">
                <span>Outcome Verified</span>
                <span className="text-[#10B981]">Practical System Delivered ✓</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
