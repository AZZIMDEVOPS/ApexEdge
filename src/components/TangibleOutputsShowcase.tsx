"use client";

import { motion } from "framer-motion";
import { FileCheck2, LayoutDashboard, ScrollText, BarChart3, Binary, Target, FileText, Lock, Sparkles, CheckCircle2 } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const TANGIBLE_DELIVERABLES = [
  {
    title: "Risk Registers & Heat Maps",
    desc: "Board-ready risk matrices ranking likelihood, impact, and mitigation controls.",
    tag: "Governance Output",
    icon: FileCheck2,
  },
  {
    title: "Governance Control Dashboards",
    desc: "Executive visual tracking tools monitoring governance and compliance health.",
    tag: "Board Output",
    icon: LayoutDashboard,
  },
  {
    title: "Policies & Practical SOPs",
    desc: "Operational handbooks with step-by-step approval controls and responsibility matrices.",
    tag: "Control Output",
    icon: ScrollText,
  },
  {
    title: "Performance Scorecards",
    desc: "Structured KPI & OKR tools linking individual output to strategic business goals.",
    tag: "People Output",
    icon: BarChart3,
  },
  {
    title: "Data Inventories & DPIAs",
    desc: "Data mapping registers, privacy notices, DPIAs, and breach response workflows.",
    tag: "Privacy Output",
    icon: Lock,
  },
  {
    title: "Job & Salary Structures",
    desc: "Standardized role grading, salary bands, and career progression frameworks.",
    tag: "HR Output",
    icon: Binary,
  },
  {
    title: "90-Day Execution Trackers",
    desc: "Live monitoring tools with named owners, hard deadlines, and accountability triggers.",
    tag: "Execution Output",
    icon: Target,
  },
  {
    title: "Executive Board Papers",
    desc: "Concise, decision-focused Board reporting packs that eliminate operational noise.",
    tag: "Decision Output",
    icon: FileText,
  },
];

export function TangibleOutputsShowcase() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#071C3F] text-white overflow-hidden border-b border-slate-800">
      
      {/* Background Ambient Glow & Grid Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#10B981]/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:36px_36px] opacity-20" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <SectionLabel number="05" title="CONCRETE WORKING TOOLS" icon={Sparkles} />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight uppercase"
          >
            WHAT YOU WALK AWAY WITH.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed"
          >
            These are practical, working organizational tools—not abstract reports or presentation slides.
          </motion.p>
        </div>

        {/* 8 Tangible Output Spotlight Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TANGIBLE_DELIVERABLES.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
              >
                <SpotlightCard className="p-7 space-y-4 h-full flex flex-col justify-between transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-[#10B981] group-hover:bg-[#10B981] group-hover:text-[#071C3F] transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-1 rounded-md bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981] text-[10px] font-black uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-black text-white group-hover:text-[#10B981] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#10B981]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Tangible Deliverable</span>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
