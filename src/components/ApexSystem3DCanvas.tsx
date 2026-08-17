"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Sparkles, X } from "lucide-react";
import { ApexEdgeLogo } from "@/components/ApexEdgeLogo";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import {
  Governance3DIcon,
  People3DIcon,
  Controls3DIcon,
  DataProtection3DIcon,
} from "@/components/icons/PracticeArea3DIcons";

export interface PillarItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  desc: string;
  keyDeliverable: string;
  deliverables: string[];
  Icon3D: React.ComponentType<{ size?: number }>;
  x: number; // Anchor percentage
  y: number; // Anchor percentage
  vx: number; // ViewBox X (0 - 1000)
  vy: number; // ViewBox Y (0 - 800)
}

const STRATEGIC_PILLARS: PillarItem[] = [
  {
    id: "gov",
    number: "01",
    title: "BOARD GOVERNANCE & OVERSIGHT",
    category: "Oversight & Compliance",
    tagline: "Mwongozo Governance & Risk Visibility",
    desc: "Transform Board reporting into decision-ready risk heatmaps, Mwongozo compliance frameworks, and executive oversight.",
    keyDeliverable: "Board Risk Heatmaps & Governance Audits",
    deliverables: ["Mwongozo Compliance Audits", "Board Risk Registers", "Decision Authority Matrixes"],
    Icon3D: Governance3DIcon,
    x: 18,
    y: 22,
    vx: 180,
    vy: 176,
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
    Icon3D: Controls3DIcon,
    x: 82,
    y: 22,
    vx: 820,
    vy: 176,
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
    Icon3D: People3DIcon,
    x: 18,
    y: 72,
    vx: 180,
    vy: 576,
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
    Icon3D: DataProtection3DIcon,
    x: 82,
    y: 72,
    vx: 820,
    vy: 576,
  },
];

// Perimeter Inter-Connecting Problem Links (Top, Right, Bottom, Left Arcs)
const PERIMETER_LINKS = [
  { id: "top-link", d: "M 180 176 Q 500 110, 820 176", label: "Governance ↔ Controls Link" },
  { id: "right-link", d: "M 820 176 Q 890 376, 820 576", label: "Controls ↔ Privacy Link" },
  { id: "bottom-link", d: "M 820 576 Q 500 640, 180 576", label: "Privacy ↔ Execution Link" },
  { id: "left-link", d: "M 180 576 Q 110 376, 180 176", label: "Execution ↔ Governance Link" },
];

export function ApexSystem3DCanvas() {
  const [hoveredPillarId, setHoveredPillarId] = useState<string | null>(null);
  const [selectedPillar, setSelectedPillar] = useState<PillarItem | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Central Core ViewBox Coordinates (500, 380)
  const cx = 500;
  const cy = 380;

  return (
    <div className="relative w-full min-h-[580px] md:min-h-[680px] lg:min-h-[760px] p-5 sm:p-12 pb-20 lg:pb-24 rounded-3xl bg-[#071C3F]/90 border border-slate-800/90 shadow-2xl backdrop-blur-xl flex flex-col md:flex-row items-center justify-center overflow-hidden">
      
      {/* Ambient Grid & Glow Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#10B981]/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
      </div>

      {/* HIGH-TECH ANIMATED ENERGY LINK BEAMS (Numeric SVG ViewBox 0 0 1000 800 - Desktop Only) */}
      <svg
        viewBox="0 0 1000 800"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-10"
      >
        <defs>
          <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. PERIMETER INTER-CONNECTING PROBLEM MATRIX LINKS */}
        {PERIMETER_LINKS.map((link) => (
          <g key={link.id}>
            <path
              d={link.d}
              fill="none"
              stroke="#38BDF8"
              strokeWidth="2"
              strokeOpacity="0.45"
              strokeDasharray="6 6"
              filter="url(#neonGlow)"
            />
            <path
              d={link.d}
              fill="none"
              stroke="#10B981"
              strokeWidth="2.5"
              strokeOpacity="0.85"
              strokeDasharray="10 10"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;-40"
                dur="3s"
                repeatCount="indefinite"
              />
            </path>
            <circle r="3.5" fill="#38BDF8" filter="url(#neonGlow)">
              <animateMotion path={link.d} dur="4s" repeatCount="indefinite" />
            </circle>
          </g>
        ))}

        {/* 2. RADIANT SOLUTION BEAMS */}
        {STRATEGIC_PILLARS.map((pillar) => {
          const isHovered = hoveredPillarId === pillar.id;
          const isDimmed = hoveredPillarId !== null && !isHovered;

          const qx = (cx + pillar.vx) / 2 + (pillar.vx > cx ? 40 : -40);
          const qy = (cy + pillar.vy) / 2 + (pillar.vy > cy ? 30 : -30);
          const pathD = `M ${cx} ${cy} Q ${qx} ${qy}, ${pillar.vx} ${pillar.vy}`;

          return (
            <g key={`beam-${pillar.id}`} className="transition-opacity duration-300">
              <path
                d={pathD}
                fill="none"
                stroke={isHovered ? "#10B981" : "#38BDF8"}
                strokeWidth={isHovered ? 4.5 : 2.5}
                strokeOpacity={isDimmed ? 0.15 : isHovered ? 1 : 0.65}
                filter="url(#neonGlow)"
              />

              <path
                d={pathD}
                fill="none"
                stroke={isHovered ? "#38BDF8" : "#10B981"}
                strokeWidth={isHovered ? 3 : 2}
                strokeOpacity={isDimmed ? 0.1 : 0.95}
                strokeDasharray="12 12"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;-48"
                  dur={isHovered ? "0.8s" : "2s"}
                  repeatCount="indefinite"
                />
              </path>

              <circle r={isHovered ? 6 : 4.5} fill="#10B981" filter="url(#neonGlow)">
                <animateMotion
                  path={pathD}
                  dur={isHovered ? "1.2s" : "2.8s"}
                  repeatCount="indefinite"
                />
              </circle>

              <circle r={isHovered ? 4.5 : 3} fill="#38BDF8" filter="url(#neonGlow)">
                <animateMotion
                  path={`M ${pillar.vx} ${pillar.vy} Q ${qx} ${qy}, ${cx} ${cy}`}
                  dur={isHovered ? "1.6s" : "3.4s"}
                  repeatCount="indefinite"
                />
              </circle>

              <circle cx={pillar.vx} cy={pillar.vy} r="6" fill="#10B981" filter="url(#neonGlow)" />
              <circle cx={pillar.vx} cy={pillar.vy} r="10" fill="none" stroke="#38BDF8" strokeWidth="1.5">
                <animate attributeName="r" values="6;18;6" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.9;0;0.9" dur="2.5s" repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}
      </svg>

      {/* CENTRAL OFFICIAL WHITE APEX EDGE SYSTEM SOLUTION CORE */}
      <div
        className="relative z-30 flex flex-col items-center justify-center text-center cursor-pointer group my-6 md:my-0"
        onClick={() => setSelectedPillar(null)}
      >
        {/* Outer Halo Rings */}
        <div className="absolute w-44 h-44 sm:w-60 sm:h-60 rounded-full border border-dashed border-[#10B981]/60 pointer-events-none animate-[spin_40s_linear_infinite]" />
        <div className="absolute w-52 h-52 sm:w-68 sm:h-68 rounded-full border border-slate-700/60 pointer-events-none" />

        {/* Central Glass Pod Housing ONLY Official White Apex Edge Logo */}
        <div className="relative w-36 h-36 sm:w-52 sm:h-52 rounded-full bg-gradient-to-br from-[#071C3F] via-slate-900 to-[#071C3F] border-2 border-[#10B981] shadow-[0_0_60px_rgba(16,185,129,0.4)] flex items-center justify-center p-5 backdrop-blur-2xl transition-transform duration-300 group-hover:scale-105">
          <div className="scale-85 sm:scale-110 transform transition-transform flex items-center justify-center">
            <ApexEdgeLogo variant="default" />
          </div>
        </div>
      </div>

      {/* 4 STRATEGIC PILLAR CARDS (Clean Mobile Stack + Desktop Symmetrical Positioning) */}
      <div className="w-full md:absolute inset-0 z-30 pointer-events-none flex flex-col md:block gap-4 my-4 md:my-0">
        {STRATEGIC_PILLARS.map((pillar) => {
          const isHovered = hoveredPillarId === pillar.id;
          const isDimmed = hoveredPillarId !== null && !isHovered;
          const PillarIcon3D = pillar.Icon3D;

          const cardStyle = isDesktop
            ? {
                left: `${pillar.x}%`,
                top: `${pillar.y}%`,
                transform: "translate(-50%, -50%)",
              }
            : {};

          return (
            <div
              key={pillar.id}
              style={cardStyle}
              className="pointer-events-auto md:absolute w-full md:w-72 lg:w-80"
              onMouseEnter={() => setHoveredPillarId(pillar.id)}
              onMouseLeave={() => setHoveredPillarId(null)}
              onClick={() => setSelectedPillar(pillar)}
            >
              <SpotlightCard
                className={`p-5 sm:p-6 transition-all duration-300 cursor-pointer ${
                  isDimmed ? "opacity-35 scale-95" : isHovered ? "opacity-100 scale-105 border-[#10B981] ring-2 ring-[#10B981]/30 shadow-[0_0_35px_rgba(16,185,129,0.25)]" : "opacity-95"
                }`}
              >
                <div className="space-y-3 sm:space-y-3.5">
                  <div className="flex items-center justify-between">
                    <PillarIcon3D size={44} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#10B981]">
                      PILLAR {pillar.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-black text-white group-hover:text-[#10B981] transition-colors tracking-wide leading-snug">
                      {pillar.title}
                    </h3>
                    <span className="text-xs font-bold text-[#10B981] block mt-1 leading-snug">
                      {pillar.tagline}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 font-normal leading-relaxed">
                    {pillar.desc}
                  </p>

                  <div className="pt-3 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-200 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>{pillar.keyDeliverable}</span>
                  </div>
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
            className="max-w-3xl mx-auto rounded-3xl bg-slate-900/95 border-2 border-[#10B981] p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative z-40 my-auto"
          >
            <button
              onClick={() => setSelectedPillar(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Close detail panel"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 border-b border-slate-800 pb-6">
              <selectedPillar.Icon3D size={56} />
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
              <span className="text-xs text-slate-400 italic">Click central core or X to close</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Micro Legend Badge */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-slate-950/95 border border-slate-800 text-[10px] text-slate-300 font-extrabold tracking-widest uppercase flex items-center gap-2 backdrop-blur-md shadow-2xl z-30 pointer-events-none">
        <Sparkles className="w-3 h-3 text-[#10B981] animate-pulse" />
        <span>APEX EDGE INTEGRATED SOLUTION ARCHITECTURE (HOVER TO EXPLORE)</span>
      </div>
    </div>
  );
}
