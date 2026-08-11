"use client";

import { motion } from "framer-motion";
import { Shield, Users, Sliders, TrendingUp, Landmark, Sparkles } from "lucide-react";

const SYSTEM_NODES = [
  {
    id: "governance",
    title: "GOVERNANCE",
    desc: "Board oversight & risk visibility",
    icon: Shield,
    position: "top-0 left-1/2 -translate-x-1/2 -translate-y-6",
  },
  {
    id: "people",
    title: "PEOPLE",
    desc: "Accountability & execution capacity",
    icon: Users,
    position: "top-1/3 right-0 translate-x-4",
  },
  {
    id: "controls",
    title: "CONTROLS",
    desc: "Practical policies & risk safeguards",
    icon: Sliders,
    position: "bottom-10 right-10",
  },
  {
    id: "performance",
    title: "PERFORMANCE",
    desc: "Measurable outputs & targets",
    icon: TrendingUp,
    position: "bottom-10 left-10",
  },
  {
    id: "board",
    title: "BOARD DECISIONS",
    desc: "Clarity on what must change",
    icon: Landmark,
    position: "top-1/3 left-0 -translate-x-4",
  },
];

export function ConnectedProblemsVisual() {
  return (
    <section className="relative py-24 bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-black uppercase tracking-[0.25em]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>HOLISTIC ADVISORY DIAGNOSTIC</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            Your Problems Are Connected.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
          >
            Governance, people, controls, performance and Board decisions are interdependent. Apex Edge does not treat isolated symptoms—we align the underlying organisational system.
          </motion.p>
        </div>

        {/* Central System Diagram Visual */}
        <div className="relative mx-auto max-w-4xl py-12">
          
          {/* Central Apex Edge Hub */}
          <div className="relative z-20 mx-auto w-64 h-64 rounded-full bg-gradient-to-br from-[#071C3F] via-slate-900 to-[#071C3F] border-2 border-[#10B981] shadow-[0_0_50px_rgba(16,185,129,0.25)] flex flex-col items-center justify-center p-6 text-center group">
            <div className="w-12 h-12 rounded-full bg-[#10B981]/20 border border-[#10B981] text-[#10B981] flex items-center justify-center mb-2 animate-pulse">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-white tracking-wider">APEX EDGE</h3>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#10B981] mt-1">
              SYSTEM ENGINE
            </span>
            <p className="text-[11px] text-slate-300 mt-2 font-medium">
              Board-Ready System Alignment
            </p>
          </div>

          {/* Connected Outer Nodes Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 z-10 relative">
            {SYSTEM_NODES.map((node, index) => {
              const NodeIcon = node.icon;
              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="rounded-2xl bg-[#071C3F]/90 border border-slate-800 p-5 hover:border-[#10B981] hover:bg-slate-900 transition-all text-center space-y-2 group shadow-lg"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-[#10B981] flex items-center justify-center mx-auto group-hover:bg-[#10B981] group-hover:text-[#071C3F] transition-colors">
                    <NodeIcon className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-black text-white tracking-widest group-hover:text-[#10B981] transition-colors">
                    {node.title}
                  </h4>
                  <p className="text-[11px] text-slate-300 font-normal leading-snug">
                    {node.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
