"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Sparkles, X } from "lucide-react";
import Image from "next/image";
import { ApexEdgeLogo } from "@/components/ApexEdgeLogo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import {
  BoardsDirectors3DIcon,
  CEOsExecs3DIcon,
  SeniorMgmt3DIcon,
  FunctionalLeaders3DIcon,
  Organisations3DIcon,
} from "@/components/icons/Audience3DIcons";

export interface AudienceItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  desc: string;
  keyNeed: string;
  deliverables: string[];
  Icon3D: React.ComponentType<{ size?: number }>;
  x: number; // Anchor percentage
  y: number;
  vx: number; // ViewBox X (0-1000)
  vy: number; // ViewBox Y (0-800)
}

const AUDIENCES: AudienceItem[] = [
  {
    id: "boards",
    title: "BOARDS OF DIRECTORS",
    category: "Oversight & Governance",
    tagline: "Risk Visibility & Governance Alignment",
    desc: "Need clearer visibility of risk, controls, governance, and executive management performance to drive high-confidence strategic decisions.",
    keyNeed: "Decision-ready Board packs, risk heat maps & clear oversight.",
    deliverables: ["Mwongozo Compliance Audits", "Board Risk Registers", "Decision Frameworks"],
    Icon3D: BoardsDirectors3DIcon,
    x: 18,
    y: 22,
    vx: 180,
    vy: 176,
  },
  {
    id: "ceos",
    title: "CEOs & MANAGING DIRECTORS",
    category: "Leadership & Execution",
    tagline: "Operational Action & Execution Systems",
    desc: "Need to turn recurring organisational friction and strategy execution gaps into clear actions with accountable owners.",
    keyNeed: "Named ownership, 90-day execution roadmaps & clear KPIs.",
    deliverables: ["90-Day Execution Roadmaps", "Staff Ownership Maps", "OKR Scorecards"],
    Icon3D: CEOsExecs3DIcon,
    x: 82,
    y: 22,
    vx: 820,
    vy: 176,
  },
  {
    id: "cfo",
    title: "FINANCE LEADERS & CFOs",
    category: "Controls & Compliance",
    tagline: "Financial Governance & SOP Controls",
    desc: "Need stronger internal controls, financial authorization limits, and procurement approval processes that eliminate audit findings.",
    keyNeed: "Approval matrixes, internal control frameworks & audit readiness.",
    deliverables: ["Financial Authorization Limits", "Procurement SOPs", "Internal Control Matrixes"],
    Icon3D: SeniorMgmt3DIcon,
    x: 18,
    y: 75,
    vx: 180,
    vy: 600,
  },
  {
    id: "hr",
    title: "HR & PEOPLE LEADERS",
    category: "People & Performance",
    tagline: "Role Clarity & Performance Systems",
    desc: "Need structured job grading, role clarity, transparent appraisal frameworks, and performance scorecards linked directly to strategy.",
    keyNeed: "Salary structures, OKR performance scorecards & competency maps.",
    deliverables: ["Job Descriptions & Grading", "Salary Structure Bands", "Appraisal Toolkits"],
    Icon3D: FunctionalLeaders3DIcon,
    x: 82,
    y: 75,
    vx: 820,
    vy: 600,
  },
  {
    id: "orgs",
    title: "GROWING ORGANISATIONS",
    category: "Institutional Scaling",
    tagline: "Scalable Management Architecture",
    desc: "Need practical governance, data protection, and operational systems that scale seamlessly without creating bureaucratic drag.",
    keyNeed: "Scalable SOPs, privacy governance & institutional controls.",
    deliverables: ["Scalable Operational SOPs", "Data Protection Inventories", "Governance Frameworks"],
    Icon3D: Organisations3DIcon,
    x: 50,
    y: 84,
    vx: 500,
    vy: 672,
  },
];

export function WhoWeHelpSection() {
  const [hoveredAudId, setHoveredAudId] = useState<string | null>(null);
  const [selectedAud, setSelectedAud] = useState<AudienceItem | null>(null);
  const [mouseParallax, setMouseParallax] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cx = 500;
  const cy = 380;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const offsetY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMouseParallax({ x: offsetX * 6, y: offsetY * 6 });
  };

  return (
    <section className="relative min-h-screen w-full bg-[#071C3F] text-white overflow-hidden border-b border-slate-800 flex flex-col justify-between py-20 lg:py-28">
      
      {/* LAYER 01 & 02: Full-Bleed Cinematic Nairobi Skyline Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        <Image
          src="/nairobi_enterprise_skyline.jpg"
          alt="Nairobi Enterprise Business District Skyline"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-110 contrast-125"
        />
        {/* LAYER 03: Edge-to-Edge Seamless Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071C3F] via-transparent to-[#071C3F]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071C3F] via-transparent to-[#071C3F]" />
      </div>

      {/* LAYER 04 & 05: Ambient Cyan Glow & Technical Grid */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-[#10B981]/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-12 lg:space-y-16 relative z-10 my-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <SectionLabel number="04" title="AUDIENCE & DECISION-MAKERS" icon={Sparkles} />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight uppercase"
          >
            WHO WE WORK WITH
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed"
          >
            Apex Edge partners with executive leaders and decision-makers who need to turn organisational complexity into Board-ready clarity.
          </motion.p>
        </div>

        {/* Full-Viewport Spacious 3D Interactive Ecosystem Canvas */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative mx-auto w-full min-h-[580px] md:min-h-[740px] lg:min-h-[820px] p-5 sm:p-12 pb-24 rounded-3xl bg-[#071C3F]/90 border border-slate-800/90 shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col md:flex-row items-center justify-center"
        >
          
          {/* HIGH-TECH ANIMATED ENERGY LINK BEAMS (Numeric SVG ViewBox 0 0 1000 800 - Desktop Only) */}
          <svg
            viewBox="0 0 1000 800"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-10"
          >
            <defs>
              <filter id="audGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {AUDIENCES.map((aud) => {
              const isHovered = hoveredAudId === aud.id;
              const isDimmed = hoveredAudId !== null && !isHovered;

              const qx = (cx + aud.vx) / 2 + (aud.vx > cx ? 35 : aud.vx < cx ? -35 : 0);
              const qy = (cy + aud.vy) / 2 + (aud.vy > cy ? 25 : -25);
              const pathD = `M ${cx} ${cy} Q ${qx} ${qy}, ${aud.vx} ${aud.vy}`;

              return (
                <g key={`aud-beam-${aud.id}`}>
                  <path
                    d={pathD}
                    fill="none"
                    stroke={isHovered ? "#10B981" : "#38BDF8"}
                    strokeWidth={isHovered ? 4.5 : 2.5}
                    strokeOpacity={isDimmed ? 0.15 : isHovered ? 1 : 0.6}
                    filter="url(#audGlow)"
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

                  <circle r={isHovered ? 6 : 4.5} fill="#10B981" filter="url(#audGlow)">
                    <animateMotion
                      path={pathD}
                      dur={isHovered ? "1.2s" : "2.8s"}
                      repeatCount="indefinite"
                    />
                  </circle>

                  <circle r={isHovered ? 4.5 : 3} fill="#38BDF8" filter="url(#audGlow)">
                    <animateMotion
                      path={`M ${aud.vx} ${aud.vy} Q ${qx} ${qy}, ${cx} ${cy}`}
                      dur={isHovered ? "1.6s" : "3.4s"}
                      repeatCount="indefinite"
                    />
                  </circle>

                  <circle cx={aud.vx} cy={aud.vy} r="6" fill="#10B981" filter="url(#audGlow)" />
                  <circle cx={aud.vx} cy={aud.vy} r="10" fill="none" stroke="#38BDF8" strokeWidth="1.5">
                    <animate attributeName="r" values="6;18;6" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.9;0;0.9" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                </g>
              );
            })}
          </svg>

          {/* CENTRAL 3D APEX EDGE OFFICIAL LOGO CORE */}
          <motion.div
            animate={{ x: mouseParallax.x, y: mouseParallax.y }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative z-30 flex flex-col items-center justify-center text-center cursor-pointer group my-6 md:my-0"
            onClick={() => setSelectedAud(null)}
          >
            {/* Outer Revolving Orbital Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-44 h-44 sm:w-64 sm:h-64 rounded-full border border-dashed border-[#10B981]/50 pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-52 h-52 sm:w-72 sm:h-72 rounded-full border border-slate-700/60 pointer-events-none"
            />

            {/* Central Glass Pod Housing Official Apex Edge Logo */}
            <div className="relative w-36 h-36 sm:w-52 sm:h-52 rounded-full bg-gradient-to-br from-[#071C3F] via-slate-900 to-[#071C3F] border-2 border-[#10B981] shadow-[0_0_60px_rgba(16,185,129,0.35)] flex items-center justify-center p-5 backdrop-blur-2xl transition-transform duration-300 group-hover:scale-105">
              <div className="scale-80 sm:scale-100 transform transition-transform flex items-center justify-center">
                <ApexEdgeLogo variant="default" />
              </div>
            </div>
          </motion.div>

          {/* 5 AUDIENCE DECISION-MAKER CARDS (Mobile Vertical Stack + Desktop Perimeter Positioning) */}
          <div className="w-full md:absolute inset-0 z-30 pointer-events-none flex flex-col md:block gap-4 my-4 md:my-0">
            {AUDIENCES.map((aud) => {
              const isHovered = hoveredAudId === aud.id;
              const isDimmed = hoveredAudId !== null && !isHovered;
              const AudIcon3D = aud.Icon3D;

              const cardStyle = isDesktop
                ? {
                    left: `${aud.x}%`,
                    top: `${aud.y}%`,
                    transform: "translate(-50%, -50%)",
                  }
                : {};

              return (
                <div
                  key={aud.id}
                  style={cardStyle}
                  className="pointer-events-auto md:absolute w-full md:w-68 lg:w-76"
                  onMouseEnter={() => setHoveredAudId(aud.id)}
                  onMouseLeave={() => setHoveredAudId(null)}
                  onClick={() => setSelectedAud(aud)}
                >
                  <SpotlightCard
                    className={`p-5 transition-all duration-300 cursor-pointer ${
                      isDimmed ? "opacity-35 scale-95" : isHovered ? "opacity-100 scale-105 border-[#10B981] ring-2 ring-[#10B981]/30 shadow-[0_0_35px_rgba(16,185,129,0.25)]" : "opacity-95"
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <AudIcon3D size={44} />
                        <span className="text-[9px] font-black uppercase tracking-widest text-[#10B981]">
                          {aud.category}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-sm font-black text-white group-hover:text-[#10B981] transition-colors tracking-wide leading-snug">
                          {aud.title}
                        </h3>
                        <span className="text-[11px] font-bold text-[#10B981] block mt-0.5 leading-snug">
                          {aud.tagline}
                        </span>
                      </div>

                      <p className="text-[11px] text-slate-300 font-normal leading-relaxed">
                        {aud.desc}
                      </p>

                      <div className="pt-2.5 border-t border-slate-800 flex items-center gap-2 text-[11px] text-slate-200 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                        <span>{aud.keyNeed}</span>
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
              );
            })}
          </div>
        </div>

        {/* INLINE SELECTED AUDIENCE DETAIL PANEL */}
        <AnimatePresence>
          {selectedAud && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="max-w-3xl mx-auto rounded-3xl bg-slate-900/95 border-2 border-[#10B981] p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative z-40"
            >
              <button
                onClick={() => setSelectedAud(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Close detail panel"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 border-b border-slate-800 pb-6">
                <selectedAud.Icon3D size={56} />
                <div className="space-y-1">
                  <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">
                    DECISION-MAKER PROFILE
                  </span>
                  <h3 className="text-2xl font-black text-white">{selectedAud.title}</h3>
                  <span className="text-xs font-bold text-[#10B981] block">{selectedAud.tagline}</span>
                </div>
              </div>

              <div className="py-6 space-y-4">
                <p className="text-sm text-slate-100 font-medium leading-relaxed">
                  {selectedAud.desc}
                </p>

                <div className="space-y-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                    Target Systems &amp; Engagement Deliverables:
                  </span>
                  <div className="grid sm:grid-cols-3 gap-2">
                    {selectedAud.deliverables.map((deliv, idx) => (
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
      </div>
    </section>
  );
}
