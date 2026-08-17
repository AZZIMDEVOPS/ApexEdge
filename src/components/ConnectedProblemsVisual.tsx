"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, X, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import {
  Governance3DIcon,
  People3DIcon,
  Controls3DIcon,
  Leadership3DIcon,
  DataProtection3DIcon,
} from "@/components/icons/PracticeArea3DIcons";
import { Measure3DIcon } from "@/components/icons/Methodology3DIcons";

export interface SystemNodeItem {
  id: string;
  title: string;
  category: string;
  desc: string;
  fullExplanation: string;
  deliverables: string[];
  linkHref: string;
  Icon3D: React.ComponentType<{ size?: number }>;
  // Canvas / SVG Layout Anchor percentages (Desktop)
  x: number; // percentage from left
  y: number; // percentage from top
}

const SYSTEM_NODES: SystemNodeItem[] = [
  {
    id: "governance",
    title: "GOVERNANCE",
    category: "Pillar 01",
    desc: "Board oversight & risk visibility",
    fullExplanation:
      "Structures board risk registers, independent governance health checks, and Mwongozo code compliance for clear executive oversight.",
    deliverables: ["Board Risk Registers & Heat Maps", "Mwongozo Code Audits", "Decision Frameworks"],
    linkHref: "/services#governance-risk",
    Icon3D: Governance3DIcon,
    x: 18,
    y: 20,
  },
  {
    id: "controls",
    title: "CONTROLS",
    category: "Pillar 03",
    desc: "Practical policies & SOP approval limits",
    fullExplanation:
      "Converts static policy documents into practical SOPs with embedded financial authorization limits and compliance checklists.",
    deliverables: ["Financial Authorization Limits", "HR & Procurement SOPs", "Internal Control Matrixes"],
    linkHref: "/services#controls-policies",
    Icon3D: Controls3DIcon,
    x: 82,
    y: 20,
  },
  {
    id: "people",
    title: "PEOPLE",
    category: "Pillar 02",
    desc: "Accountability & job structures",
    fullExplanation:
      "Eliminates role overlap by building clear job structures, salary grading bands, and OKR scorecards linked to strategic priorities.",
    deliverables: ["Role Descriptions & Grading Bands", "OKR Performance Scorecards", "Staff Ownership Maps"],
    linkHref: "/services#people-performance",
    Icon3D: People3DIcon,
    x: 12,
    y: 65,
  },
  {
    id: "data",
    title: "DATA",
    category: "Pillar 05",
    desc: "Data protection & privacy governance",
    fullExplanation:
      "Helps organisations understand data protection obligations, map personal data inventories, and implement breach response protocols.",
    deliverables: ["Data Mapping & Inventories", "Privacy Notices & DPIAs", "Data Processing Agreements"],
    linkHref: "/services#data-protection",
    Icon3D: DataProtection3DIcon,
    x: 88,
    y: 65,
  },
  {
    id: "performance",
    title: "PERFORMANCE",
    category: "Pillar 02",
    desc: "Measurable outputs & strategic KPIs",
    fullExplanation:
      "Establishes operational KPIs, execution scorecards, and management tracking dashboards to verify strategy implementation.",
    deliverables: ["Management Dashboards", "Quarterly Scorecards", "Target Execution Tracking"],
    linkHref: "/services#people-performance",
    Icon3D: Measure3DIcon,
    x: 32,
    y: 90,
  },
  {
    id: "board",
    title: "BOARD DECISIONS",
    category: "Board Level",
    desc: "Board-ready action & results",
    fullExplanation:
      "Presents clear risk visibility and actionable insight so the Board and CEO can make high-confidence strategic decisions.",
    deliverables: ["Decision-Ready Board Packs", "Audit Committee Charters", "Executive Dashboards"],
    linkHref: "/services#governance-risk",
    Icon3D: Leadership3DIcon,
    x: 68,
    y: 90,
  },
];

export function ConnectedProblemsVisual() {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<SystemNodeItem | null>(null);
  const [mouseParallax, setMouseParallax] = useState({ x: 0, y: 0 });
  const [pulseActive, setPulseActive] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Smooth Desktop Mouse Parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const offsetY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMouseParallax({ x: offsetX * 8, y: offsetY * 8 });
  };

  // Periodic System Pulse Timer (Every 4 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseActive(true);
      setTimeout(() => setPulseActive(false), 1200);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-28 bg-[#071C3F] text-white overflow-hidden border-b border-slate-800">
      
      {/* Background Architectural Ambient Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-16">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <SectionLabel number="01" title="HOLISTIC ADVISORY DIAGNOSTIC" icon={Sparkles} />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase"
          >
            YOUR PROBLEMS ARE CONNECTED.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
          >
            Governance, people, controls, performance, data protection and Board decisions are interdependent. Apex Edge does not treat isolated symptoms—we align the underlying organisational system.
          </motion.p>

          <div className="pt-2">
            <span className="px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-[10px] font-black uppercase tracking-widest text-[#10B981]">
              ONE SYSTEM. MULTIPLE INTERDEPENDENCIES.
            </span>
          </div>
        </div>

        {/* 3D Living Interactive Ecosystem Canvas */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative mx-auto max-w-5xl min-h-[580px] flex items-center justify-center p-4 sm:p-8 rounded-3xl bg-slate-950/80 border border-slate-800 shadow-2xl backdrop-blur-xl overflow-hidden"
        >
          
          {/* SVG Interconnection Beams Layer (Desktop & Tablet) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-10">
            <defs>
              <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
              </linearGradient>
              <filter id="glowEffect">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Connecting Beams from Central Engine (50%, 45%) to Nodes */}
            {SYSTEM_NODES.map((node) => {
              const isHovered = hoveredNodeId === node.id;
              const isDimmed = hoveredNodeId !== null && !isHovered;

              return (
                <g key={`beam-${node.id}`}>
                  {/* Outer Connection Line */}
                  <motion.path
                    d={`M 50% 45% Q ${node.x > 50 ? 55 : 45}% ${node.y > 45 ? 55 : 35}%, ${node.x}% ${node.y}%`}
                    fill="none"
                    stroke={isHovered ? "#10B981" : "url(#beamGradient)"}
                    strokeWidth={isHovered ? 3.5 : 1.5}
                    strokeOpacity={isDimmed ? 0.15 : isHovered ? 1 : 0.45}
                    strokeDasharray={isHovered ? "none" : "5 5"}
                    filter={isHovered ? "url(#glowEffect)" : "none"}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Traveling Particle Energy along connection beam */}
                  <circle
                    r={isHovered ? 4 : 2.5}
                    fill={isHovered ? "#38BDF8" : "#10B981"}
                    filter="url(#glowEffect)"
                  >
                    <animateMotion
                      path={`M 50% 45% Q ${node.x > 50 ? 55 : 45}% ${node.y > 45 ? 55 : 35}%, ${node.x}% ${node.y}%`}
                      dur={isHovered ? "1.5s" : "3.5s"}
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              );
            })}

            {/* Secondary Interconnecting Web Lines Between Related Nodes */}
            <path
              d="M 18% 20% L 82% 20% M 12% 65% L 88% 65% M 18% 20% L 12% 65% M 82% 20% L 88% 65%"
              fill="none"
              stroke="#10B981"
              strokeWidth="0.8"
              strokeOpacity="0.12"
              strokeDasharray="4 4"
            />
          </svg>

          {/* CENTRAL 3D SYSTEM ENGINE CORE */}
          <motion.div
            animate={{
              x: mouseParallax.x,
              y: mouseParallax.y,
              scale: pulseActive ? 1.04 : 1,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative z-30 flex flex-col items-center justify-center text-center cursor-pointer group"
            onClick={() => setSelectedNode(null)}
          >
            {/* Outer Revolving 3D Glass Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-52 h-52 sm:w-64 sm:h-64 rounded-full border-2 border-dashed border-[#10B981]/40 pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute w-60 h-60 sm:w-72 sm:h-72 rounded-full border border-slate-700/60 pointer-events-none"
            />

            {/* Central Dark Glass Sphere */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-[#071C3F] via-slate-900 to-[#071C3F] border-2 border-[#10B981] shadow-[0_0_60px_rgba(16,185,129,0.35)] flex flex-col items-center justify-center p-4 backdrop-blur-2xl transition-transform duration-300 group-hover:scale-105">
              
              {/* Inner Pulsing Core */}
              <div className="w-10 h-10 rounded-full bg-[#10B981]/20 border border-[#10B981] text-[#10B981] flex items-center justify-center mb-1 animate-pulse">
                <Sparkles className="w-5 h-5" />
              </div>

              <h3 className="text-base sm:text-lg font-black text-white tracking-widest uppercase">
                APEX EDGE
              </h3>
              <span className="text-[9px] font-black uppercase tracking-widest text-[#10B981] mt-0.5">
                SYSTEM ENGINE
              </span>
              <p className="text-[10px] text-slate-300 font-semibold mt-1 max-w-[120px] leading-tight">
                Board-Ready System Alignment
              </p>
            </div>
          </motion.div>

          {/* 6 SYSTEM NODES (Desktop Orbit Layout + Mobile Vertical Flow) */}
          <div className="md:absolute inset-0 z-30 pointer-events-none flex flex-col md:block gap-4 my-8 md:my-0">
            {SYSTEM_NODES.map((node) => {
              const isHovered = hoveredNodeId === node.id;
              const isDimmed = hoveredNodeId !== null && !isHovered;
              const NodeIcon3D = node.Icon3D;

              return (
                <div
                  key={node.id}
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="pointer-events-auto md:absolute w-full md:w-56"
                  onMouseEnter={() => setHoveredNodeId(node.id)}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  onClick={() => setSelectedNode(node)}
                >
                  <SpotlightCard
                    className={`p-4 transition-all duration-300 cursor-pointer ${
                      isDimmed ? "opacity-35 scale-95" : isHovered ? "opacity-100 scale-105 border-[#10B981] ring-2 ring-[#10B981]/30 shadow-[0_0_30px_rgba(16,185,129,0.25)]" : "opacity-90"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <NodeIcon3D size={44} />
                      <div className="flex-1 min-w-0">
                        <span className="text-[9px] font-black uppercase tracking-widest text-[#10B981] block">
                          {node.category}
                        </span>
                        <h4 className="text-xs sm:text-sm font-black text-white truncate group-hover:text-[#10B981] transition-colors">
                          {node.title}
                        </h4>
                        <p className="text-[10px] text-slate-300 font-normal leading-snug line-clamp-1">
                          {node.desc}
                        </p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[#10B981] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </SpotlightCard>
                </div>
              );
            })}
          </div>
        </div>

        {/* INLINE INTERACTIVE NODE SELECTION PANEL */}
        <AnimatePresence>
          {selectedNode && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="max-w-3xl mx-auto rounded-3xl bg-slate-900/95 border-2 border-[#10B981] p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative"
            >
              <button
                onClick={() => setSelectedNode(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Close detail panel"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 border-b border-slate-800 pb-6">
                <selectedNode.Icon3D size={56} />
                <div className="space-y-1">
                  <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">
                    {selectedNode.category} INTERDEPENDENCY DETAIL
                  </span>
                  <h3 className="text-2xl font-black text-white">{selectedNode.title}</h3>
                  <p className="text-xs text-slate-300 font-medium">{selectedNode.desc}</p>
                </div>
              </div>

              <div className="py-6 space-y-4">
                <p className="text-sm text-slate-100 font-semibold leading-relaxed">
                  &ldquo;{selectedNode.fullExplanation}&rdquo;
                </p>

                <div className="space-y-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                    System Interventions &amp; Outputs:
                  </span>
                  <div className="grid sm:grid-cols-3 gap-2">
                    {selectedNode.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-950 border border-slate-800 text-xs font-medium text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <Link
                  href={selectedNode.linkHref}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#10B981] text-[#071C3F] font-black text-xs hover:bg-emerald-400 transition-all hover:scale-105"
                >
                  <span>EXPLORE PRACTICE AREA →</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-xs text-slate-400 italic">Click central engine or X to close</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Integrated Contextual CTA */}
        <div className="text-center pt-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 border border-[#10B981]/50 text-white text-xs font-black uppercase tracking-widest hover:border-[#10B981] hover:bg-slate-900/90 transition-all hover:scale-105 shadow-xl"
          >
            <span>SEE HOW APEX EDGE CONNECTS THE SYSTEM →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
