"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Sparkles, X, Building2, Target, LineChart, Users2, Briefcase, LucideIcon, ArrowRight } from "lucide-react";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export interface AudienceItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  desc: string;
  keyNeed: string;
  deliverables: string[];
  icon: LucideIcon;
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
    icon: Building2,
  },
  {
    id: "ceos",
    title: "CEOs & MANAGING DIRECTORS",
    category: "Leadership & Execution",
    tagline: "Operational Action & Execution Systems",
    desc: "Need to turn recurring organisational friction and strategy execution gaps into clear actions with accountable owners.",
    keyNeed: "Named ownership, 90-day execution roadmaps & clear KPIs.",
    deliverables: ["90-Day Execution Roadmaps", "Staff Ownership Maps", "OKR Scorecards"],
    icon: Target,
  },
  {
    id: "cfo",
    title: "FINANCE LEADERS & CFOs",
    category: "Controls & Compliance",
    tagline: "Financial Governance & SOP Controls",
    desc: "Need stronger internal controls, financial authorization limits, and procurement approval processes that eliminate audit findings.",
    keyNeed: "Approval matrixes, internal control frameworks & audit readiness.",
    deliverables: ["Financial Authorization Limits", "Procurement SOPs", "Internal Control Matrixes"],
    icon: LineChart,
  },
  {
    id: "hr",
    title: "HR & PEOPLE LEADERS",
    category: "People & Performance",
    tagline: "Role Clarity & Performance Systems",
    desc: "Need structured job grading, role clarity, transparent appraisal frameworks, and performance scorecards linked directly to strategy.",
    keyNeed: "Salary structures, OKR performance scorecards & competency maps.",
    deliverables: ["Job Descriptions & Grading", "Salary Structure Bands", "Appraisal Toolkits"],
    icon: Users2,
  },
  {
    id: "orgs",
    title: "GROWING ORGANISATIONS",
    category: "Institutional Scaling",
    tagline: "Scalable Management Architecture",
    desc: "Need practical governance, data protection, and operational systems that scale seamlessly without creating bureaucratic drag.",
    keyNeed: "Scalable SOPs, privacy governance & institutional controls.",
    deliverables: ["Scalable Operational SOPs", "Data Protection Inventories", "Governance Frameworks"],
    icon: Briefcase,
  },
];

export function WhoWeHelpSection() {
  const [hoveredAudId, setHoveredAudId] = useState<string | null>(null);
  const [selectedAud, setSelectedAud] = useState<AudienceItem | null>(null);

  return (
    <section className="relative py-24 sm:py-32 bg-[#071C3F] text-white overflow-hidden border-b border-slate-800">
      
      {/* Background Nairobi Skyline Photography Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <Image
          src="/nairobi_enterprise_skyline.jpg"
          alt="Nairobi Enterprise Business District Skyline"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-110 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071C3F] via-[#071C3F]/90 to-[#071C3F]" />
      </div>

      {/* Ambient Grid & Glow Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-25">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#10B981]/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:40px_40px] opacity-15" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 space-y-16 relative z-10">
        
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

        {/* 5 AUDIENCE CARDS (Clean Structured 3-Column Responsive Grid - Zero Overlapping Lines) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCES.map((aud) => {
            const isHovered = hoveredAudId === aud.id;
            const isDimmed = hoveredAudId !== null && !isHovered;
            const IconComp = aud.icon;

            return (
              <div
                key={aud.id}
                onMouseEnter={() => setHoveredAudId(aud.id)}
                onMouseLeave={() => setHoveredAudId(null)}
                onClick={() => setSelectedAud(aud)}
                className="h-full"
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
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-1 rounded-md bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981] text-[9px] font-black uppercase tracking-wider">
                        {aud.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-black text-white group-hover:text-[#10B981] transition-colors tracking-wide leading-snug">
                        {aud.title}
                      </h3>
                      <span className="text-xs font-bold text-[#10B981] block mt-0.5 leading-snug">
                        {aud.tagline}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 font-normal leading-relaxed">
                      {aud.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-200 font-semibold">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span className="text-[11px]">{aud.keyNeed}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#10B981] shrink-0 group-hover:translate-x-1 transition-transform" />
                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </div>

        {/* INLINE SELECTED AUDIENCE DETAIL PANEL */}
        <AnimatePresence>
          {selectedAud && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="max-w-3xl mx-auto rounded-3xl bg-slate-900/98 border-2 border-[#10B981] p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative z-30"
            >
              <button
                onClick={() => setSelectedAud(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Close detail panel"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 border-b border-slate-800 pb-6">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-[#10B981]">
                  <selectedAud.icon className="w-8 h-8" />
                </div>
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
                <span className="text-xs text-slate-400 italic">Click card or X to close</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
