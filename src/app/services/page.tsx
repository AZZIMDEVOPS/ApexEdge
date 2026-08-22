"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Users, 
  Sliders, 
  Award, 
  Lock, 
  CheckCircle2, 
  Calendar, 
  Building2, 
  FileText, 
  HelpCircle, 
  Zap, 
  Target,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { ExecutiveHeaderNav } from "@/components/ExecutiveHeaderNav";
import { CorporateFooter } from "@/components/CorporateFooter";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ApexAIAssistant } from "@/components/ApexAIAssistant";
import { Button } from "@/components/ui/button";
import {
  Governance3DIcon,
  People3DIcon,
  Controls3DIcon,
  Leadership3DIcon,
  DataProtection3DIcon,
  CorporateSecretarial3DIcon,
} from "@/components/icons/PracticeArea3DIcons";

const PRACTICE_AREAS = [
  {
    id: "governance-risk",
    num: "01",
    category: "GOVERNANCE & RISK",
    Icon3D: Governance3DIcon,
    icon: ShieldCheck,
    image: "/board_directors_panel.jpg",
    imageAlt: "Executive Board Directors evaluating quarterly risk heat maps",
    headline: "Give Your Board Clearer Visibility of Risk and Performance.",
    problemHeader: "The Organisational Challenge",
    problem: "Board reports present heavy operational noise without clear decision frameworks, risk prioritization, or governance alignment. Directors struggle to gain true visibility over executive risks.",
    whoFor: "Boards of Directors, CEOs, Board Chairs, Risk & Governance Committees, Executive Directors.",
    approach: "We conduct independent governance audits, structure board risk registers, clarify decision rights, and build actionable governance frameworks.",
    services: [
      "Governance Health Checks & Gap Audits",
      "Board Risk Register Development & Heat Maps",
      "Board Pack & Executive Reporting Restructuring",
      "Mwongozo Code & CMA Compliance Frameworks",
      "Director Induction & Governance Charters",
      "Board Decision-Making & Authorization Frameworks"
    ],
    deliverables: [
      "Board Risk Registers & Heat Maps",
      "Governance Dashboards & Scorecards",
      "Board Reporting Frameworks & Packs",
      "Decision Frameworks & Charters",
      "Accountability Structures",
      "Governance Health Check Reports",
      "Risk Action Plans"
    ],
    outcome: "Boards gain clearer visibility of risk, controls, accountability and management performance.",
    methodology: ["Diagnose", "Design", "Implement", "Measure"]
  },
  {
    id: "people-performance",
    num: "02",
    category: "PEOPLE & PERFORMANCE",
    Icon3D: People3DIcon,
    icon: Users,
    image: "/african_corporate_team_meeting.jpg",
    imageAlt: "East African corporate leadership team conducting strategy execution alignment",
    headline: "Build a Performance System That Creates Accountability.",
    problemHeader: "The Organisational Challenge",
    problem: "Role overlap, unaligned KPIs, lack of job structure, and recurring people-performance problems that keep returning and stalling organizational execution.",
    whoFor: "CEOs, CFOs, Heads of HR, Chief Operating Officers, Business Unit Leads.",
    approach: "We architect role structures, job descriptions, salary bands, and OKR performance scorecards linked directly to strategic goals.",
    services: [
      "Organisational Restructuring & Role Clarity",
      "Job Description & Competency Framework Development",
      "Job Evaluation & Salary Grading Structures",
      "OKR & KPI Performance Management Systems",
      "Performance Appraisal Tools & Guidelines",
      "Staff Accountability Matrixes & Ownership Maps"
    ],
    deliverables: [
      "Organisational Structure Charts",
      "Job Descriptions & Competency Frameworks",
      "Job Evaluation Frameworks",
      "Salary Structures & Grading Bands",
      "Performance Frameworks & Manuals",
      "OKRs / Performance Objectives",
      "Accountability Tools & Scorecards"
    ],
    outcome: "People decisions become connected to organisational priorities, accountability and measurable performance.",
    methodology: ["Diagnose", "Design", "Implement", "Measure"]
  },
  {
    id: "controls-policies",
    num: "03",
    category: "CONTROLS & POLICIES",
    Icon3D: Controls3DIcon,
    icon: Sliders,
    image: "/operations_analyst_desk.jpg",
    imageAlt: "Advisory consultant modeling internal controls and digital SOP workflows",
    headline: "Build Internal Controls and Policies That Work in Practice.",
    problemHeader: "The Organisational Challenge",
    problem: "Policies exist as lengthy 200-page binders that sit on shelves unread. Staff execute daily tasks without clear SOPs, causing recurring operational exceptions, audit findings, and compliance risk.",
    whoFor: "Chief Executive Officers, Chief Financial Officers, Internal Audit Heads, Operations Directors, Compliance Managers.",
    approach: "We convert complex policies into clear, digitized SOPs, establish delegated approval matrices, and design operational control dashboards that staff actually use.",
    services: [
      "Policy Gap Audits & Simplification",
      "Standard Operating Procedure (SOP) Co-Design",
      "Financial Authorization & Approval Matrixes",
      "Procurement & Supply Chain Controls",
      "Compliance Monitoring Dashboards",
      "Internal Control Exception Remediation"
    ],
    deliverables: [
      "Digitized 2-Page Standard Operating Procedures",
      "Delegated Financial Approval Matrixes",
      "Procurement & Spend Control Guidelines",
      "Operational Control Dashboards",
      "Internal Audit Exception Action Registers",
      "Compliance Tracking Checklists"
    ],
    outcome: "Internal controls are woven into daily workflows, audit exceptions drop drastically, and staff have unambiguous guidance on operational boundaries.",
    methodology: ["Diagnose", "Design", "Embed", "Measure"]
  },
  {
    id: "leadership-capability",
    num: "04",
    category: "LEADERSHIP & CAPABILITY",
    Icon3D: Leadership3DIcon,
    icon: Award,
    image: "/executive_window_discussion.jpg",
    imageAlt: "Senior partners and managing directors in executive advisory consultation",
    headline: "Build Leaders and Teams That Execute Better.",
    problemHeader: "The Organisational Challenge",
    problem: "Executives and senior managers are technically competent but struggle with cross-functional leadership, decisive risk judgment, delegation, and driving strategy into weekly departmental rhythms.",
    whoFor: "Executive Committees, Managing Directors, Newly Promoted C-Suite Executives, Senior Managers, High-Potential Leaders.",
    approach: "We deliver structured executive advisory toolkits, leadership governance simulations, 90-day execution roadmaps, and peer accountability coaching.",
    services: [
      "Executive Decision-Making Toolkits",
      "Senior Leadership Alignment Sprints",
      "90-Day Execution Planning & Review",
      "Cross-Functional Governance Coaching",
      "Board-Readiness Coaching for Executives",
      "Departmental Execution Capability Programs"
    ],
    deliverables: [
      "Executive Decision-Making Frameworks",
      "90-Day Strategic Execution Dashboards",
      "Weekly Action Review Protocols",
      "Cross-Functional Coordination Matrixes",
      "Leadership Competency Growth Profiles"
    ],
    outcome: "Executive teams operate with unified clarity, decisive velocity, and a shared cadence that translates strategic mandates into measurable results.",
    methodology: ["Align", "Equip", "Practice", "Sustain"]
  },
  {
    id: "data-protection",
    num: "05",
    category: "DATA PROTECTION & PRIVACY",
    Icon3D: DataProtection3DIcon,
    icon: Lock,
    image: "/executive_leader_lounge.jpg",
    imageAlt: "Advisory lead reviewing regional privacy frameworks and data protection registers",
    headline: "Protect Data. Strengthen Trust. Stay Compliant.",
    problemHeader: "The Organisational Challenge",
    problem: "Increasing regulatory scrutiny under the Kenya Data Protection Act 2019, ODPC statutory audits, and customer privacy expectations find organisations holding undocumented data stores with unmitigated third-party risk.",
    whoFor: "Boards, CEOs, Data Protection Officers (DPOs), Chief Information Officers (CIOs), Legal & Compliance Heads.",
    approach: "We conduct comprehensive data mapping, execute Data Protection Impact Assessments (DPIAs), draft enforceable vendor data processing agreements, and embed privacy-by-design into corporate operations.",
    services: [
      "Data Protection Gap Audits & ODPC Registration",
      "Enterprise Data Mapping & Inventories",
      "Data Protection Impact Assessments (DPIAs)",
      "Third-Party Vendor Data Processing Agreements (DPAs)",
      "Data Subject Rights Request (DSR) Protocols",
      "Data Breach Incident Response Playbooks"
    ],
    deliverables: [
      "Enterprise Data Inventories & Mapping Registers",
      "DPIA Audit Reports & Mitigation Plans",
      "ODPC Regulatory Compliance Dossiers",
      "Vendor Data Processing Agreement Templates",
      "Data Subject Access Request (DSAR) SOPs",
      "Data Breach Notification & Response Manuals"
    ],
    outcome: "Data protection moves from legal uncertainty into a structured, operationalized privacy system that protects customer trust, passes regulatory checks, and mitigates breach risks.",
    methodology: ["Assess", "Identify", "Design", "Implement", "Monitor"]
  },
  {
    id: "corporate-secretarial",
    num: "06",
    category: "CORPORATE SECRETARIAL",
    Icon3D: CorporateSecretarial3DIcon,
    icon: FileText,
    image: "/african_board_signing.jpg",
    imageAlt: "Corporate secretarial advisor executing statutory filings, board resolutions, and registry maintenance",
    headline: "Companies Act 2015 Compliance, Board Minutes & Statutory Filings.",
    problemHeader: "The Organisational Challenge",
    problem: "Missed statutory filing deadlines, defective board resolutions, irregular shareholder registries, and regulatory penalties under the Companies Act 2015 and BRS create serious legal vulnerabilities for Directors and executive leadership.",
    whoFor: "Boards of Directors, Managing Directors, Company Secretaries, Legal Counsel, Chief Financial Officers, Shareholders.",
    approach: "We provide comprehensive corporate secretarial advisory, draft certified board resolutions, prepare and file annual statutory returns with BRS, manage AGMs/EGMs, and maintain statutory registers.",
    services: [
      "Annual Statutory Returns & BRS e-Filings",
      "Board & Committee Minutes & Resolution Drafting",
      "Statutory Registers & Share Transfer Management",
      "AGM, EGM & Board Meeting Coordination",
      "Companies Act 2015 Statutory Health Checks",
      "Corporate Restructuring & Share Capital Alterations"
    ],
    deliverables: [
      "Certified Board Resolutions & Action Trackers",
      "BRS Annual Returns & Statutory Filing Receipts",
      "Up-to-Date Statutory Registers & Share Records",
      "AGM / EGM Governance Notices & Minutes",
      "Corporate Secretarial Compliance Calendars",
      "Director Appointment & Cessation Dossiers"
    ],
    outcome: "Your organisation maintains 100% statutory compliance, impeccably documented board decisions, and protected legal standing with zero filing penalties.",
    methodology: ["Audit", "Structure", "Execute", "Certify"]
  }
];

export default function ServicesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("Governance & Risk");
  const [activePillarIdx, setActivePillarIdx] = useState<number>(0);
  const [isHeadlinePaused, setIsHeadlinePaused] = useState<boolean>(false);

  // Auto-cycle through the 6 Practice Area headlines every 4.0 seconds with pause on hover
  useEffect(() => {
    if (isHeadlinePaused) return;

    const interval = setInterval(() => {
      setActivePillarIdx((prev) => (prev + 1) % PRACTICE_AREAS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHeadlinePaused]);

  const openBookingForCategory = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setIsBookingOpen(true);
  };

  const activePillar = PRACTICE_AREAS[activePillarIdx];

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#10B981] selection:text-[#071C3F]">
      <ExecutiveHeaderNav onOpenBooking={() => openBookingForCategory("Governance & Risk")} />

      {/* Hero on Clean Light Canvas with Animated Changing Practice Headlines */}
      <section 
        className="relative py-24 sm:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 overflow-hidden border-b border-slate-200"
        onMouseEnter={() => setIsHeadlinePaused(true)}
        onMouseLeave={() => setIsHeadlinePaused(false)}
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/5 blur-3xl rounded-full" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-6 text-center">
          
          {/* Eyebrow Pill with Live Animation */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#071C3F] text-xs font-black uppercase tracking-[0.25em] shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
            </span>
            <span>01 TO 06 — CORE PRACTICE AREAS</span>
          </div>

          {/* Active Category Indicator */}
          <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#10B981] flex items-center justify-center gap-2">
            <span>Practice 0{activePillarIdx + 1}</span>
            <span>·</span>
            <span>{activePillar.category}</span>
          </div>

          {/* Dynamic Animated Changing Headline */}
          <div className="min-h-[120px] sm:min-h-[140px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={activePillar.id}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -24, filter: "blur(6px)" }}
                transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight max-w-5xl mx-auto"
              >
                {activePillar.headline}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Dynamic Supporting Subtitle */}
          <div className="min-h-[50px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={activePillar.id + "-approach"}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
              >
                {activePillar.approach}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Interactive Animated Navigation Pill Tabs for all 6 Practice Areas */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-5xl mx-auto">
            {PRACTICE_AREAS.map((area, idx) => {
              const isActive = idx === activePillarIdx;
              return (
                <a
                  key={area.id}
                  href={`#${area.id}`}
                  onMouseEnter={() => setActivePillarIdx(idx)}
                  className={`relative px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 flex items-center gap-2 border shadow-xs cursor-pointer ${
                    isActive
                      ? "bg-[#071C3F] text-white border-[#10B981] shadow-md scale-105 z-10"
                      : "bg-white text-slate-700 hover:text-[#071C3F] border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <span className={`text-[10px] font-black ${isActive ? "text-[#10B981]" : "text-[#10B981]"}`}>
                    {area.num}
                  </span>
                  <span>{area.category}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interconnected Flow Banner */}
      <section className="py-6 bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-700">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 flex flex-wrap items-center justify-center gap-4 text-center">
          <span className="text-[#071C3F] font-black uppercase tracking-widest">Integrated Governance Architecture:</span>
          <div className="flex flex-wrap items-center justify-center gap-2 text-slate-800 font-bold">
            <span className="bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">Governance</span>
            <span className="text-[#10B981]">↓</span>
            <span className="bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">Controls</span>
            <span className="text-[#10B981]">↓</span>
            <span className="bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">People</span>
            <span className="text-[#10B981]">↓</span>
            <span className="bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">Data</span>
            <span className="text-[#10B981]">↓</span>
            <span className="bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">Secretarial</span>
            <span className="text-[#10B981]">↓</span>
            <span className="bg-[#10B981]/15 px-3.5 py-1.5 rounded-full border border-[#10B981]/40 text-[#071C3F] font-black">Board Decisions</span>
          </div>
        </div>
      </section>

      {/* Practice Area Distinction Guide Section on White (All 6 Pillars) */}
      <section className="py-16 bg-white border-b border-slate-200 text-slate-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">
              PRACTICE AREA DISTINCTION GUIDE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
              Understanding Which Practice Area Applies to Your Organisation
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Each Practice Area addresses a distinct pillar of your organizational system:
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-xs">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-[#10B981] transition-colors shadow-xs">
              <span className="font-extrabold text-[#10B981] block">01 GOVERNANCE & RISK</span>
              <span className="font-bold text-slate-900 block">Core Focus:</span>
              <p className="text-slate-600 leading-relaxed font-normal">
                What risks exist and how should leadership and the Board oversee them?
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-[#10B981] transition-colors shadow-xs">
              <span className="font-extrabold text-[#10B981] block">02 PEOPLE & PERFORMANCE</span>
              <span className="font-bold text-slate-900 block">Core Focus:</span>
              <p className="text-slate-600 leading-relaxed font-normal">
                Who is responsible and how do we measure performance?
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-[#10B981] transition-colors shadow-xs">
              <span className="font-extrabold text-[#10B981] block">03 CONTROLS & POLICIES</span>
              <span className="font-bold text-slate-900 block">Core Focus:</span>
              <p className="text-slate-600 leading-relaxed font-normal">
                What processes and safeguards prevent those risks from becoming problems?
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-[#10B981] transition-colors shadow-xs">
              <span className="font-extrabold text-[#10B981] block">04 LEADERSHIP & CAPABILITY</span>
              <span className="font-bold text-slate-900 block">Core Focus:</span>
              <p className="text-slate-600 leading-relaxed font-normal">
                Do leaders and teams have the capability to execute effectively?
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-[#10B981] transition-colors shadow-xs">
              <span className="font-extrabold text-[#10B981] block">05 DATA PROTECTION</span>
              <span className="font-bold text-slate-900 block">Core Focus:</span>
              <p className="text-slate-600 leading-relaxed font-normal">
                How is personal data collected, used, protected, and governed?
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-[#10B981] transition-colors shadow-xs">
              <span className="font-extrabold text-[#10B981] block">06 CORPORATE SECRETARIAL</span>
              <span className="font-bold text-slate-900 block">Core Focus:</span>
              <p className="text-slate-600 leading-relaxed font-normal">
                How are statutory filings, board resolutions, and company secretarial compliance maintained?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Practice Areas Section on Clean White Background */}
      <section className="py-24 bg-white text-slate-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-20">
          {PRACTICE_AREAS.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className="scroll-mt-28 rounded-3xl bg-white border-2 border-slate-200 p-6 sm:p-12 space-y-10 shadow-xl hover:border-slate-300 transition-all"
              >
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
                  <div className="flex items-center gap-4">
                    {item.Icon3D ? <item.Icon3D size={56} /> : <IconComp className="w-8 h-8 text-[#10B981]" />}
                    <div>
                      <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">
                        PRACTICE AREA {item.num}
                      </span>
                      <h2 className="text-2xl sm:text-4xl font-black text-slate-950">{item.category}</h2>
                    </div>
                  </div>
                  <span className="text-4xl sm:text-6xl font-black text-slate-200">{item.num}</span>
                </div>

                {/* Real Practice Photography Frame */}
                {item.image && (
                  <div className="relative h-56 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                    <Image
                      src={item.image}
                      alt={item.imageAlt || item.category}
                      fill
                      className="object-cover object-center filter brightness-105 transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-white text-xs">
                      <span className="font-semibold bg-slate-900/90 px-3 py-1 rounded-lg border border-slate-700 backdrop-blur-md">
                        {item.imageAlt}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#10B981] bg-slate-900/90 px-2.5 py-1 rounded-full border border-[#10B981]/40 backdrop-blur-md">
                        Apex Edge Practice
                      </span>
                    </div>
                  </div>
                )}

                {/* Positioning Statement */}
                <div className="p-6 rounded-2xl bg-slate-50 border-l-4 border-[#10B981] border-slate-200">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#10B981] block mb-1">
                    Positioning Statement
                  </span>
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 italic">
                    &ldquo;{item.headline}&rdquo;
                  </div>
                </div>

                {/* 5-Question Framework Grid */}
                <div className="grid gap-6 lg:grid-cols-3">
                  
                  {/* 1. What Problem Does It Solve? */}
                  <div className="space-y-3 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-600">
                      <HelpCircle className="w-4 h-4 shrink-0" />
                      <span>1. What Problem Does It Solve?</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">{item.problemHeader}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.problem}
                    </p>
                  </div>

                  {/* 2. What Does Apex Edge Do? */}
                  <div className="space-y-3 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-blue-600">
                      <Zap className="w-4 h-4 shrink-0" />
                      <span>2. What Does Apex Edge Do?</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.approach}
                    </p>
                  </div>

                  {/* 3. Who Is It For & 5. Outcome */}
                  <div className="space-y-6 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-teal-700">
                        <Building2 className="w-4 h-4 shrink-0" />
                        <span>3. Who Is It For?</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        {item.whoFor}
                      </p>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-slate-200">
                      <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#071C3F]">
                        <Target className="w-4 h-4 shrink-0 text-[#10B981]" />
                        <span>5. Expected Outcome</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-900 font-bold leading-relaxed">
                        {item.outcome}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Specific Services Offered List */}
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-600 block">
                    Services &amp; Interventions Provided:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.services.map((srv, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium">
                        <span className="h-2 w-2 rounded-full bg-[#10B981] mt-1.5 shrink-0" />
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. What Does The Client Receive? (Tangible Deliverables) */}
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#071C3F]">
                    <FileText className="w-4 h-4 text-[#10B981]" />
                    <span>4. What You Walk Away With (Tangible Deliverables):</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {item.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-50/50 border border-emerald-200/80 text-xs text-slate-800 font-semibold hover:border-[#10B981] transition-colors shadow-2xs">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Methodology Steps */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-600 block">
                    How We Work (Apex Edge Methodology):
                  </span>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    {item.methodology.map((step, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                        <span className="w-6 h-6 rounded-full bg-[#10B981]/15 border border-[#10B981]/50 text-[#071C3F] flex items-center justify-center text-[10px] font-black">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                        {idx < item.methodology.length - 1 && (
                          <span className="text-slate-400 ml-2 hidden sm:inline">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Row */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-slate-600 italic">
                    Ready to operationalize {item.category.toLowerCase()} in your organisation?
                  </span>
                  <Button
                    onClick={() => openBookingForCategory(item.category)}
                    className="bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black rounded-full px-6 py-3.5 text-xs shadow-md flex items-center gap-2 transition-all hover:scale-[1.02]"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Your Clarity Session →</span>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CorporateFooter />
      <ConsultationModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        defaultCategory={selectedCategory}
      />
      <ApexAIAssistant onOpenBooking={() => openBookingForCategory("Data Protection & Privacy")} />
    </main>
  );
}
