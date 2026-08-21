"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck,
  Sliders,
  Users,
  Award,
  Lock,
  ArrowRight,
  CheckCircle2,
  GitBranch,
  Activity,
  FileCheck2,
  LucideIcon,
  Eye,
  Play,
  Pause,
} from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";

export interface PillarArchitecture {
  id: string;
  num: string;
  shortTitle: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  color: string;
  image: string;
  imageAlt: string;
  purpose: string;
  breakpointSolved: string;
  mechanism: string;
  deliverables: string[];
  interconnectivity: string;
  statutoryStandard: string;
}

const ADVISORY_PILLARS: PillarArchitecture[] = [
  {
    id: "governance",
    num: "01",
    shortTitle: "Governance & Risk",
    title: "BOARD GOVERNANCE & RISK OVERSIGHT",
    tagline: "Strategic Oversight & Board Visibility",
    icon: ShieldCheck,
    color: "#10B981",
    image: "/board_directors_panel.jpg",
    imageAlt: "Executive Board Directors evaluating quarterly risk heat maps",
    purpose: "Transforms board reporting from hundreds of pages of raw data into prioritized risk heat maps, clear decision papers, and statutory compliance frameworks.",
    breakpointSolved: "Directors facing legal liability, slow decision-making, and blind spots due to cluttered, non-standardized Board packs.",
    mechanism: "Independent governance audits, Mwongozo & CMA alignment, Board charter revisions, and delegated authorization limits between Directors and executive leadership.",
    deliverables: [
      "Board Risk Registers & Heat Maps",
      "Standardized 15-Page Decision Board Packs",
      "Board Committee Charters & Authority Matrices",
      "Independent Mwongozo & CMA Governance Audits",
    ],
    interconnectivity: "Informs internal control limits (Pillar 02) and establishes performance mandates (Pillar 03).",
    statutoryStandard: "Mwongozo Code, CMA Corporate Governance Guidelines, Kenyan Companies Act 2015",
  },
  {
    id: "controls",
    num: "02",
    shortTitle: "Controls & SOPs",
    title: "INTERNAL CONTROLS & OPERATIONAL SOPS",
    tagline: "Financial Approval Safeguards & Daily Routines",
    icon: Sliders,
    color: "#0284C7",
    image: "/operations_analyst_desk.jpg",
    imageAlt: "Advisory consultant modeling internal financial authorization matrices",
    purpose: "Converts static, unread 200-page policy binders into 1–2 page digital SOPs and strict financial approval workflows that teams actually use every day.",
    breakpointSolved: "Recurring audit exceptions, procurement overrides, unauthorized commitments, and financial leakage across branch networks.",
    mechanism: "Process flow redesign, authorization threshold matrices, dual-signoff triggers, and automated exception tracking registers.",
    deliverables: [
      "Financial Authorization & Approval Matrices",
      "Procurement & Supply Chain 2-Page SOPs",
      "Internal Control Exception Checklists",
      "Quarterly Audit Readiness Verification Registers",
    ],
    interconnectivity: "Operationalizes governance policies (Pillar 01) and gives employees clear execution boundaries (Pillar 03).",
    statutoryStandard: "Public Finance Management (PFM) Act, CBK Prudential Guidelines, IFRS / Internal Audit Standards",
  },
  {
    id: "people",
    num: "03",
    shortTitle: "People & Performance",
    title: "PEOPLE & PERFORMANCE ARCHITECTURE",
    tagline: "Role Clarity, Salary Grading & OKR Scorecards",
    icon: Users,
    color: "#059669",
    image: "/african_corporate_team_meeting.jpg",
    imageAlt: "East African corporate leadership team conducting strategy execution alignment",
    purpose: "Bridges the gap between organizational strategy and individual accountability through structured job grading, transparent salary bands, and strategy-aligned OKR scorecards.",
    breakpointSolved: "High executive payroll without proportional output, role overlap, fuzzy ownership, and subjective annual appraisal disputes.",
    mechanism: "Paterson/PwC-standard job evaluation, transparent salary structure design, cascade OKR mapping, and named single-point accountability matrices.",
    deliverables: [
      "Job Grading & Competency Frameworks",
      "Transparent Salary Structure & Pay Bands",
      "Strategy-Aligned OKR & KPI Scorecards",
      "Single-Point Named Ownership Accountability Maps",
    ],
    interconnectivity: "Translates Board mandates (Pillar 01) into everyday management routines enforced by Controls (Pillar 02).",
    statutoryStandard: "Employment Act (Kenya), International Job Evaluation Benchmarks, Labor Law Compliance",
  },
  {
    id: "leadership",
    num: "04",
    shortTitle: "Leadership Capability",
    title: "LEADERSHIP & EXECUTION VELOCITY",
    tagline: "Decision Frameworks & 90-Day Execution Roadmaps",
    icon: Award,
    color: "#D97706",
    image: "/executive_window_discussion.jpg",
    imageAlt: "Senior partners and managing directors in executive advisory consultation",
    purpose: "Equips management teams and department heads with practical decision toolkits, 90-day action roadmaps, and execution tracking tools—moving beyond passive classroom lectures.",
    breakpointSolved: "Strategic plans stalled in slide presentations with zero translation into weekly department-level execution.",
    mechanism: "Structured executive working sessions, 90-day sprint cadence design, structured decision-making protocols, and team accountability dashboards.",
    deliverables: [
      "Executive Decision-Making Frameworks",
      "90-Day Tactical Execution Roadmaps",
      "Management Effectiveness & SOP Toolkits",
      "Weekly Action Tracking & Accountability Dashboards",
    ],
    interconnectivity: "Empowers managers to run People systems (Pillar 03) while upholding operational Controls (Pillar 02).",
    statutoryStandard: "Executive Leadership Governance & Operational Management Best Practices",
  },
  {
    id: "privacy",
    num: "05",
    shortTitle: "Data Protection",
    title: "DATA PROTECTION & PRIVACY GOVERNANCE",
    tagline: "Statutory Kenya DP Act 2019 Compliance & DPIAs",
    icon: Lock,
    color: "#7C3AED",
    image: "/executive_leader_lounge.jpg",
    imageAlt: "Executive compliance lead reviewing Data Protection Impact Assessment registers",
    purpose: "Operationalizes data protection as a continuous business discipline by mapping personal data inventories, performing DPIAs, executing vendor DPAs, and establishing breach response protocols.",
    breakpointSolved: "Exposure to multimillion-shilling regulatory fines under ODPC, customer trust breach, and unregulated third-party vendor data sharing.",
    mechanism: "Data inventory mapping across all departments, DPIA risk registers, cross-border vendor data processing agreements, and statutory ODPC audit readiness.",
    deliverables: [
      "Personal Data Flow Inventory & Asset Mapping",
      "Data Protection Impact Assessment (DPIA) Registers",
      "Third-Party Data Processing Agreements (DPAs)",
      "Statutory Data Breach Response Playbooks",
    ],
    interconnectivity: "Embeds mandatory statutory data privacy safeguards across all internal controls (Pillar 02) and employee workflows (Pillar 03).",
    statutoryStandard: "Data Protection Act 2019 (Kenya), ODPC Regulations 2021, ISO/IEC 27701 Privacy Standards",
  },
];

export function IntegratedSolutionArchitecture() {
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [cycleKey, setCycleKey] = useState<number>(0);

  // Slowed-down auto-advance loop cycling every 9.0 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActivePillarIndex((prev) => (prev + 1) % ADVISORY_PILLARS.length);
      setCycleKey((prev) => prev + 1);
    }, 9000);

    return () => clearInterval(interval);
  }, [isPaused, cycleKey]);

  const handlePillarClick = (idx: number) => {
    setActivePillarIndex(idx);
    setCycleKey((prev) => prev + 1);
  };

  const activePillar = ADVISORY_PILLARS[activePillarIndex];
  const ActiveIcon = activePillar.icon;

  return (
    <section 
      className="relative py-24 bg-white text-slate-900 overflow-hidden border-b border-slate-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Soft Pattern */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-30 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <SectionLabel number="01" title="INTEGRATED SOLUTION ARCHITECTURE" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight"
          >
            The Apex Edge Advisory Pillars
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            Governance, internal controls, people performance, leadership, and statutory data privacy are not isolated silos. They function as a unified, interconnected operational architecture.
          </motion.p>
        </div>

        {/* Interactive Architecture Workspace */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          
          {/* Left Rail: 5 Pillar Navigation Nodes (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between px-2 pb-1">
              <span className="text-[11px] font-black uppercase tracking-widest text-[#071C3F]">
                CORE ADVISORY PILLARS
              </span>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-[#071C3F] border border-emerald-200">
                  <span className={`w-1.5 h-1.5 rounded-full ${isPaused ? "bg-amber-500" : "bg-[#10B981] animate-pulse"}`} />
                  {isPaused ? "Paused" : "Auto-Advancing"}
                </span>
                <button
                  type="button"
                  onClick={() => setIsPaused(!isPaused)}
                  className="text-slate-400 hover:text-slate-700 p-1 rounded transition-colors cursor-pointer"
                  title={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
                >
                  {isPaused ? <Play className="w-3 h-3 text-[#10B981]" /> : <Pause className="w-3 h-3" />}
                </button>
              </div>
            </div>

            <div className="space-y-2.5">
              {ADVISORY_PILLARS.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                const isActive = idx === activePillarIndex;

                return (
                  <button
                    key={pillar.id}
                    onClick={() => handlePillarClick(idx)}
                    className={`relative w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 group cursor-pointer overflow-hidden ${
                      isActive
                        ? "bg-white border-[#10B981] shadow-md ring-4 ring-[#10B981]/15 text-slate-950 scale-[1.01]"
                        : "bg-slate-50/80 border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300 hover:shadow-xs"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`p-3 rounded-xl transition-colors ${
                          isActive
                            ? "bg-[#071C3F] text-[#10B981]"
                            : "bg-white border border-slate-200 text-slate-700 group-hover:text-[#071C3F]"
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${
                              isActive
                                ? "bg-[#10B981]/20 text-[#071C3F] font-black"
                                : "bg-slate-200 text-slate-600"
                            }`}
                          >
                            PILLAR {pillar.num}
                          </span>
                        </div>
                        <h3 className="text-sm font-bold text-slate-950 mt-1 leading-snug">
                          {pillar.shortTitle}
                        </h3>
                      </div>
                    </div>

                    <div className="shrink-0">
                      <ArrowRight
                        className={`w-4 h-4 transition-transform ${
                          isActive
                            ? "text-[#10B981] translate-x-1"
                            : "text-slate-400 group-hover:text-slate-700"
                        }`}
                      />
                    </div>

                    {/* Slowed-Down Progress Indicator for Active Auto-Advancing Pillar */}
                    {isActive && !isPaused && (
                      <motion.div
                        key={`progress-${idx}-${cycleKey}`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 9.0, ease: "linear" }}
                        className="absolute bottom-0 left-0 right-0 h-1 bg-[#10B981] origin-left"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Rail: Deep System Architecture Inspector (7 Cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm overflow-hidden"
              >
                {/* Header Row */}
                <div className="space-y-3 border-b border-slate-200 pb-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#10B981]/20 text-[#071C3F] border border-[#10B981]/40 text-xs font-black uppercase tracking-wider">
                      PILLAR {activePillar.num} · ARCHITECTURE SPECIFICATION
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold">
                      <ActiveIcon className="w-4 h-4 text-[#10B981]" />
                      <span>{activePillar.tagline}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-950 leading-tight">
                    {activePillar.title}
                  </h3>

                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {activePillar.purpose}
                  </p>
                </div>

                {/* Real Corporate Photography Frame for Active Pillar */}
                <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
                  <Image
                    src={activePillar.image}
                    alt={activePillar.imageAlt}
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071C3F]/85 via-[#071C3F]/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="font-semibold">{activePillar.imageAlt}</span>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#10B981] bg-[#071C3F]/90 px-2 py-0.5 rounded-full border border-[#10B981]/30">
                      In Practice
                    </span>
                  </div>
                </div>

                {/* The Breakpoint Solved */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-black uppercase tracking-wider text-rose-700 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-rose-600" />
                    THE ORGANISATIONAL BREAKPOINT WE ELIMINATE
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-rose-50/70 p-3.5 rounded-xl border border-rose-200/60 font-medium">
                    {activePillar.breakpointSolved}
                  </p>
                </div>

                {/* Tangible Board-Ready Deliverables */}
                <div className="space-y-2.5">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#071C3F] flex items-center gap-1.5">
                    <FileCheck2 className="w-3.5 h-3.5 text-[#10B981]" />
                    WORKING ARTIFACTS &amp; TANGIBLE DELIVERABLES
                  </span>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {activePillar.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5 shadow-2xs"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-800 font-medium leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* System Interconnectivity */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#071C3F]">
                    <GitBranch className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>SYSTEM INTERCONNECTIVITY</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {activePillar.interconnectivity}
                  </p>
                </div>

                {/* Footer Statutory Standard Badge */}
                <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="text-slate-500 font-medium">
                    Statutory Framework: <strong className="text-slate-900">{activePillar.statutoryStandard}</strong>
                  </span>

                  <Link
                    href={`/services#${activePillar.id}`}
                    className="inline-flex items-center gap-1.5 font-bold text-[#071C3F] hover:text-[#10B981] transition-colors"
                  >
                    <span>Full Practice Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#10B981]" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

