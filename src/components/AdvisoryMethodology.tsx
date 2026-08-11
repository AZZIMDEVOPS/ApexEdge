"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Rocket, BarChart3, CheckCircle2 } from "lucide-react";

const STAGES = [
  {
    num: "01",
    title: "DIAGNOSE",
    subtitle: "Find the real problem.",
    icon: Search,
    desc: "Uncover the root system failures behind recurring audit findings, operational noise, or control gaps.",
  },
  {
    num: "02",
    title: "DESIGN",
    subtitle: "Build the right framework.",
    icon: PenTool,
    desc: "Architect practical controls, governance dashboards, SOPs, and role accountability matrixes.",
  },
  {
    num: "03",
    title: "IMPLEMENT",
    subtitle: "Embed it with the team.",
    icon: Rocket,
    desc: "Work side-by-side with management and operational teams to embed new tools and workflows.",
  },
  {
    num: "04",
    title: "MEASURE",
    subtitle: "Track whether it is working.",
    icon: BarChart3,
    desc: "Monitor adoption, verify control compliance, and refine systems for Board reporting.",
  },
];

export function AdvisoryMethodology() {
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
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>ADVISORY METHODOLOGY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight uppercase"
          >
            FROM PROBLEM TO PRACTICAL CHANGE.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
          >
            A 4-stage disciplined advisory process that ensures recommendations transform into working organisational systems.
          </motion.p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-slate-800 -translate-y-6 z-0" />

          <div className="grid gap-8 lg:grid-cols-4 relative z-10">
            {STAGES.map((stage, idx) => {
              const IconComponent = stage.icon;
              return (
                <motion.div
                  key={stage.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="rounded-3xl bg-slate-900/90 border border-slate-800 p-7 hover:border-[#10B981] hover:bg-slate-900 transition-all duration-300 shadow-xl flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] group-hover:bg-[#10B981] group-hover:text-[#071C3F] transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-3xl font-black text-slate-700 group-hover:text-[#10B981] transition-colors">
                        {stage.num}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-white group-hover:text-[#10B981] transition-colors">
                        {stage.title}
                      </h3>
                      <span className="text-xs font-bold text-[#10B981] block mt-0.5">
                        {stage.subtitle}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {stage.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 text-[10px] font-extrabold uppercase tracking-widest text-slate-500 group-hover:text-[#10B981] transition-colors">
                    Stage {stage.num} Execution
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
