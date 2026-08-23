"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Sparkles, X, ShieldCheck, Sliders, Users, Lock, LucideIcon, ArrowRight } from "lucide-react";
import { ApexEdgeLogo } from "@/components/ApexEdgeLogo";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export interface PillarItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  desc: string;
  keyDeliverable: string;
  deliverables: string[];
  icon: LucideIcon;
}

const STRATEGIC_PILLARS: PillarItem[] = [
  {
    id: "gov",
    number: "01",
    title: "BOARD GOVERNANCE & OVERSIGHT",
    category: "Oversight & Compliance",
    tagline: "Corporate Governance & Risk Visibility",
    desc: "Transform Board reporting into decision-ready risk heatmaps, CMA Corporate Governance compliance frameworks, and executive oversight.",
    keyDeliverable: "Board Risk Heatmaps & Governance Audits",
    deliverables: ["CMA Governance Audits", "Board Risk Registers", "Decision Authority Matrixes"],
    icon: ShieldCheck,
  },
  {
    id: "controls",
    number: "02",
    title: "OPERATIONAL CONTROLS & EXECUTIVE SCORECARDS",
    category: "Controls, SOPs & Scorecards",
    tagline: "Approval Matrixes & Measurable OKRs",
    desc: "Eliminate recurring audit findings with practical SOP approval limits, financial controls, and executive OKR performance scorecards.",
    keyDeliverable: "Approval Matrixes & Executive OKR Scorecards",
    deliverables: ["Procurement SOPs", "Internal Control Matrixes", "Executive OKR Scorecards"],
    icon: Sliders,
  },
  {
    id: "people",
    number: "03",
    title: "PEOPLE & EXECUTION SYSTEMS",
    category: "Performance & OKRs",
    tagline: "Role Clarity & 90-Day Execution Maps",
    desc: "Bridge strategy execution gaps with clear role grading, transparent appraisals, and 90-day action roadmaps.",
    keyDeliverable: "90-Day Execution Roadmaps & OKRs",
    deliverables: ["Job Descriptions & Grading", "Salary Structure Bands", "90-Day Action Roadmaps"],
    icon: Users,
  },
  {
    id: "data",
    number: "04",
    title: "DATA PROTECTION & PRIVACY",
    category: "Statutory Privacy Governance",
    tagline: "DPIA Registers & Breach Response",
    desc: "Embed practical data governance, privacy impact assessments, and statutory compliance with Kenya Data Protection Act.",
    keyDeliverable: "Documented Data Inventories & DPIAs",
    deliverables: ["Data Protection Inventories", "DPIA Risk Registers", "Breach Response Protocols"],
    icon: Lock,
  },
];

export function ApexSystem3DCanvas() {
  const [hoveredPillarId, setHoveredPillarId] = useState<string | null>(null);
  const [selectedPillar, setSelectedPillar] = useState<PillarItem | null>(null);

  return (
    <div className="relative w-full p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#071C3F]/90 border border-slate-800/90 shadow-2xl backdrop-blur-xl space-y-12 overflow-hidden">
      
      {/* Background Ambient Glow Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-25">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#10B981]/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:40px_40px] opacity-15" />
      </div>

      {/* CENTRAL BRAND EMBLEM HEADER */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4">
        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#071C3F] via-slate-900 to-[#071C3F] border-2 border-[#10B981] shadow-[0_0_50px_rgba(16,185,129,0.3)] flex items-center justify-center p-5 backdrop-blur-2xl">
          <ApexEdgeLogo variant="default" />
        </div>

        <div className="space-y-1">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#10B981]">
            INTEGRATED SOLUTION ARCHITECTURE
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
            APEX EDGE ADVISORY PILLARS
          </h3>
        </div>
      </div>

      {/* 4 STRATEGIC PILLAR CARDS (Clean Structured 2x2 Responsive Grid - Zero Line Overlaps) */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 relative z-10">
        {STRATEGIC_PILLARS.map((pillar) => {
          const isHovered = hoveredPillarId === pillar.id;
          const isDimmed = hoveredPillarId !== null && !isHovered;
          const IconComp = pillar.icon;

          return (
            <div
              key={pillar.id}
              className="w-full"
              onMouseEnter={() => setHoveredPillarId(pillar.id)}
              onMouseLeave={() => setHoveredPillarId(null)}
              onClick={() => setSelectedPillar(pillar)}
            >
              <SpotlightCard
                className={`p-6 sm:p-7 space-y-4 h-full flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  isDimmed
                    ? "opacity-40 scale-98"
                    : isHovered
                    ? "opacity-100 border-[#10B981] ring-2 ring-[#10B981]/30 shadow-[0_0_30px_rgba(16,185,129,0.25)] -translate-y-1"
                    : "opacity-95"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-[#10B981] group-hover:bg-[#10B981] group-hover:text-[#071C3F] transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981] text-[10px] font-black uppercase tracking-wider">
                      PILLAR {pillar.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-black text-white group-hover:text-[#10B981] transition-colors tracking-wide leading-snug">
                      {pillar.title}
                    </h3>
                    <span className="text-xs font-bold text-[#10B981] block mt-1 leading-snug">
                      {pillar.tagline}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 font-normal leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-200 font-semibold">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>{pillar.keyDeliverable}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#10B981] group-hover:translate-x-1 transition-transform" />
                </div>
              </SpotlightCard>
            </div>
          );
        })}
      </div>

      {/* INLINE SELECTED PILLAR DETAIL PANEL */}
      <AnimatePresence>
        {selectedPillar && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="max-w-3xl mx-auto rounded-3xl bg-slate-900/98 border-2 border-[#10B981] p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative z-30"
          >
            <button
              onClick={() => setSelectedPillar(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Close detail panel"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 border-b border-slate-800 pb-6">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-[#10B981]">
                <selectedPillar.icon className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">
                  STRATEGIC PILLAR {selectedPillar.number}
                </span>
                <h3 className="text-2xl font-black text-white">{selectedPillar.title}</h3>
                <span className="text-xs font-bold text-[#10B981] block">{selectedPillar.tagline}</span>
              </div>
            </div>

            <div className="py-6 space-y-4">
              <p className="text-sm text-slate-100 font-medium leading-relaxed">
                {selectedPillar.desc}
              </p>

              <div className="space-y-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                  Target Systems &amp; Tangible Client Deliverables:
                </span>
                <div className="grid sm:grid-cols-3 gap-2">
                  {selectedPillar.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400 italic">Click card or X to close</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Legend */}
      <div className="text-center pt-2 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950 border border-slate-800 text-[10px] text-slate-300 font-extrabold tracking-widest uppercase shadow-xl">
          <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
          <span>APEX EDGE INTEGRATED ADVISORY FRAMEWORK (CLICK ANY PILLAR TO EXPLORE)</span>
        </div>
      </div>
    </div>
  );
}
