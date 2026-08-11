"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Wrench, Layers, Target, Landmark } from "lucide-react";

const PILLARS = [
  {
    title: "PRACTICAL",
    desc: "Designed for immediate daily use by management and operational staff.",
    icon: Wrench,
  },
  {
    title: "STRUCTURED",
    desc: "Rigorous frameworks that eliminate ambiguity and overlapping roles.",
    icon: Layers,
  },
  {
    title: "EVIDENCE-BASED",
    desc: "Grounded in empirical risk audits, legal standards, and data integrity.",
    icon: ShieldCheck,
  },
  {
    title: "ACTION-ORIENTED",
    desc: "Clear timelines, named owners, and measurable execution milestones.",
    icon: Target,
  },
  {
    title: "BOARD-READY",
    desc: "Executive-level reporting formats that drive high-confidence governance decisions.",
    icon: Landmark,
  },
];

export function WhyApexEdgeSection() {
  return (
    <section id="why-us" className="relative py-24 bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/15 border border-[#10B981]/40 text-[#10B981] text-xs font-black uppercase tracking-[0.25em]"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>THE APEX EDGE DIFFERENCE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight"
          >
            We Don&apos;t Stop at Recommendations.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
          >
            We translate problems into controls, tools, owners, timelines and decisions that management and Boards can follow.
          </motion.p>
        </div>

        {/* 5 Distinct Pillars Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {PILLARS.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group rounded-3xl bg-[#071C3F]/80 border border-slate-800 p-6 hover:border-[#10B981] hover:bg-slate-900 transition-all duration-300 shadow-xl space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-[#10B981] w-fit group-hover:bg-[#10B981] group-hover:text-[#071C3F] transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-black text-white group-hover:text-[#10B981] transition-colors tracking-wider">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[10px] font-bold text-[#10B981]">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Guaranteed Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
