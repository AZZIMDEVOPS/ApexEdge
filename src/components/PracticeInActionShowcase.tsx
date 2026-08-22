"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Sliders, 
  FileText, 
  Lock, 
  Award, 
  Building2, 
  X, 
  Calendar,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export interface EngagementCase {
  id: string;
  category: string;
  tag: string;
  title: string;
  summary: string;
  image: string;
  badge: string;
  icon: typeof ShieldCheck;
  context: string;
  problemSolved: string;
  solutionEngine: string;
  deliverables: string[];
  impactMetric: string;
  framework: string;
}

export const ENGAGEMENT_CASES: EngagementCase[] = [
  {
    id: "boardroom-governance",
    category: "Governance",
    tag: "Boardroom Governance",
    title: "Fiduciary Risk Heat Maps for Directors",
    summary: "Replacing bulky 300-page board packets with concise 15-page high-signal governance summaries that empower decisive fiduciary voting.",
    image: "/board_directors_panel.jpg",
    badge: "Mwongozo & CMA Aligned",
    icon: ShieldCheck,
    context: "Regional Financial Institution & State Corporation Boards",
    problemSolved: "Board directors were flooded with raw, operational spreadsheets with zero risk prioritization, causing prolonged voting delays and fiduciary exposure.",
    solutionEngine: "Architected executive-level quarterly risk registers, standardized 15-page decision memo templates, and revised Board Charter delegated authorities.",
    deliverables: [
      "Board-Ready Quarterly Risk Heat Map",
      "Standardized 15-Page Fiduciary Decision Pack",
      "Board Audit Committee Risk Matrix",
      "Mwongozo Code Alignment Dossier"
    ],
    impactMetric: "82% reduction in Board pack reading overhead with 100% statutory voting compliance.",
    framework: "Mwongozo Code & CMA Corporate Governance Guidelines"
  },
  {
    id: "executive-alignment",
    category: "People",
    tag: "Executive Alignment",
    title: "Named Accountability & Role Clarity",
    summary: "Eliminating cross-functional execution friction and sign-off bottlenecks by establishing transparent job grading and named single-point ownership.",
    image: "/outdoor_advisory_discussion.jpg",
    badge: "90-Day Execution Toolkits",
    icon: Users,
    context: "Fast-Growing East African Commercial Enterprises & Conglomerates",
    problemSolved: "Diffused executive responsibility, overlapping mandates between C-suite leaders, and high payroll costs without proportional output.",
    solutionEngine: "Conducted job evaluations, structured transparent salary grading bands, and instituted named single-point accountability matrices with quarterly OKRs.",
    deliverables: [
      "Executive Single-Point RACI Accountability Maps",
      "Transparent Job Grading & Salary Band Structures",
      "Strategy-Aligned OKR & Performance Scorecards",
      "Executive Sign-Off Authority Charters"
    ],
    impactMetric: "Zero role duplication across 8 business units with weekly milestone tracking.",
    framework: "Paterson Job Evaluation Standard & Kenya Employment Act"
  },
  {
    id: "control-systems",
    category: "Controls",
    tag: "Control Systems",
    title: "1-Page Digital SOPs & Approval Matrix",
    summary: "Transforming unread policy binders into automated digital sign-off gates that prevent recurring internal audit findings and spend leakage.",
    image: "/advisory_report_consultation.jpg",
    badge: "Audit-Verified Controls",
    icon: Sliders,
    context: "Manufacturing, Logistics & Multi-Branch Retail Chains",
    problemSolved: "200-page policy manuals sitting unread on office shelves while daily procurement bypasses and cash leakage caused recurring audit findings.",
    solutionEngine: "Co-designed 1–2 page digitized Standard Operating Procedures with embedded dual-signoff authorization thresholds for all procurement commitments.",
    deliverables: [
      "Digitized 2-Page Standard Operating Procedures",
      "Delegated Financial Approval Threshold Matrix",
      "Supply Chain Exception Audit Checklists",
      "Quarterly Internal Control Compliance Registers"
    ],
    impactMetric: "74% drop in internal audit exceptions within the first two operating quarters.",
    framework: "Public Finance Management (PFM) Act & IFRS Controls Standards"
  },
  {
    id: "statutory-secretarial",
    category: "Secretarial",
    tag: "Statutory & Secretarial",
    title: "Companies Act 2015 & BRS Filing Integrity",
    summary: "Flawless corporate secretarial governance, certified board resolutions, annual statutory returns, and member register maintenance under BRS regulations.",
    image: "/african_board_signing.jpg",
    badge: "100% Statutory Compliance",
    icon: FileText,
    context: "Mid-Market Corporations, Regional Holding Entities & Subsidiaries",
    problemSolved: "Missed annual filing deadlines, defective board resolutions lacking legal force, and outdated shareholder registers risking statutory deregistration.",
    solutionEngine: "Established a continuous corporate secretarial calendar, audited historical registers, drafted certified resolutions, and filed verified annual returns via BRS.",
    deliverables: [
      "Certified Board & AGM Minute Dossiers",
      "BRS Annual Returns & Statutory Filing Receipts",
      "Statutory Registers of Members, Directors & Beneficial Owners",
      "Director Appointment & Share Transfer Formalities"
    ],
    impactMetric: "Zero statutory late-filing fines with 100% compliance across regional registries.",
    framework: "Kenyan Companies Act 2015 & Business Registration Service (BRS)"
  },
  {
    id: "strategy-execution",
    category: "Governance",
    tag: "Execution Velocity",
    title: "90-Day Tactical Execution Roadmaps",
    summary: "Translating multi-year strategic plans into 90-day sprint cycles with weekly executive check-ins and visual milestone dashboards.",
    image: "/strategy_whiteboard_briefing.jpg",
    badge: "Strategy Execution Cadence",
    icon: Award,
    context: "Regional Financial Services & Tech-Enabled Logistics Providers",
    problemSolved: "Ambitious 5-year strategic visions stalled in slide decks without concrete translation into weekly departmental priorities.",
    solutionEngine: "Structured quarterly executive sprint roadmaps, trained departmental heads on execution velocity tools, and instituted weekly red/amber/green review dashboards.",
    deliverables: [
      "90-Day Tactical Execution Roadmaps",
      "Weekly Departmental Milestone Review Protocols",
      "Cross-Functional Coordination Matrixes",
      "Executive Performance & Output Dashboards"
    ],
    impactMetric: "Strategic project delivery speed increased by 3.4x in the initial 180 days.",
    framework: "Apex Edge Operational Velocity System"
  },
  {
    id: "privacy-governance",
    category: "Privacy",
    tag: "Data Protection",
    title: "ODPC Data Mapping & DPIA Compliance",
    summary: "Operationalizing the Kenya Data Protection Act 2019 through enterprise data mapping, DPIAs, and cross-border vendor data processing agreements.",
    image: "/african_female_executive.png",
    badge: "Kenya DP Act 2019 Aligned",
    icon: Lock,
    context: "HealthTech, Fintech, Insurance & FMCG Enterprises",
    problemSolved: "Imminent risk of statutory penalties under ODPC audits due to unmapped customer data repositories and non-compliant third-party vendor contracts.",
    solutionEngine: "Mapped personal data lifecycle across all departments, performed statutory DPIAs, drafted vendor Data Processing Agreements (DPAs), and trained response teams.",
    deliverables: [
      "Enterprise Personal Data Flow Map & Inventory",
      "Data Protection Impact Assessment (DPIA) Audit Reports",
      "Third-Party Vendor Data Processing Agreements (DPAs)",
      "Statutory Data Breach Notification Playbooks"
    ],
    impactMetric: "Passed ODPC statutory inspection with zero regulatory penalties or non-compliance notices.",
    framework: "Kenya Data Protection Act 2019 & ODPC Guidance Notes 2021"
  }
];

const CATEGORIES = ["All", "Governance", "People", "Controls", "Secretarial", "Privacy"];

interface PracticeInActionShowcaseProps {
  onOpenBooking: (topic?: string) => void;
}

export function PracticeInActionShowcase({ onOpenBooking }: PracticeInActionShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedCase, setSelectedCase] = useState<EngagementCase | null>(null);

  const filteredCases = activeCategory === "All" 
    ? ENGAGEMENT_CASES 
    : ENGAGEMENT_CASES.filter((item) => item.category === activeCategory);

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 border-b border-slate-200 overflow-hidden">
      
      {/* Ambient Radial Mesh Lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 left-1/4 w-[600px] h-[600px] bg-blue-500/5 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-12">
        
        {/* Section Header with Fluid Animation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#071C3F] text-xs font-black uppercase tracking-wider shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
              </span>
              <span>PRACTICE IN ACTION</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Advisory Engagements Across East Africa
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Explore how our partners and advisors work alongside institutional leaders to turn strategic policy into daily working reality.
            </p>
          </motion.div>

          {/* Interactive Filter Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap items-center gap-2 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200/80 shadow-xs self-start md:self-auto"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    isActive ? "text-[#071C3F]" : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-white rounded-xl shadow-xs border border-slate-200"
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Animated Staggered Grid of 6 Case Cards */}
        <motion.div 
          layout
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredCases.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92, y: 25 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 20 }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
                  onClick={() => setSelectedCase(item)}
                  className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-md hover:shadow-2xl hover:border-[#10B981]/50 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
                >
                  {/* Photo Container with Parallax Zoom and Dynamic Gradient */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 brightness-100 contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071C3F]/90 via-[#071C3F]/30 to-transparent" />
                    
                    {/* Top Floating Badge */}
                    <div className="absolute top-3 right-3">
                      <div className="p-2 rounded-xl bg-white/90 backdrop-blur-md shadow-xs text-[#071C3F] border border-white/40 group-hover:bg-[#10B981] group-hover:text-[#071C3F] transition-colors duration-300">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Bottom Category Pill */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-[#071C3F]/90 text-white text-[10px] font-black uppercase tracking-wider border border-white/20 shadow-xs">
                        {item.tag}
                      </span>
                      <span className="text-[10px] font-bold text-[#10B981] bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                        {item.framework.split("&")[0].trim()}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2.5">
                      <h3 className="text-lg font-black text-slate-950 group-hover:text-[#071C3F] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                        {item.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5 font-bold text-[#10B981]">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{item.badge}</span>
                        </div>
                        <span className="font-extrabold text-[11px] text-[#071C3F] group-hover:text-[#10B981] flex items-center gap-1 transition-colors">
                          <span>Explore Case</span>
                          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Engagement Deep-Dive Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
            />

            {/* Modal Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative w-full max-w-3xl rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden z-10 my-8 text-slate-900"
            >
              {/* Modal Header Photo Frame */}
              <div className="relative h-64 sm:h-72 w-full bg-slate-950 overflow-hidden">
                <img
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  className="w-full h-full object-cover object-center brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/70 hover:bg-slate-900 text-white border border-white/20 transition-all cursor-pointer z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header Information Overlay */}
                <div className="absolute bottom-6 left-6 right-6 space-y-2 text-white">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#10B981] text-[#071C3F] text-[10px] font-black uppercase tracking-wider">
                      {selectedCase.tag}
                    </span>
                    <span className="text-xs text-slate-300 font-semibold">
                      {selectedCase.context}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                    {selectedCase.title}
                  </h2>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                
                {/* The Challenge & Solution Grid */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#071C3F]">
                      THE INSTITUTIONAL CHALLENGE
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-normal">
                      {selectedCase.problemSolved}
                    </p>
                  </div>

                  <div className="space-y-2 p-4 rounded-2xl bg-emerald-50/70 border border-[#10B981]/30">
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#10B981]">
                      HOW APEX EDGE RESOLVED IT
                    </div>
                    <p className="text-xs text-slate-800 leading-relaxed font-normal">
                      {selectedCase.solutionEngine}
                    </p>
                  </div>
                </div>

                {/* Specific Deliverables Architected */}
                <div className="space-y-3">
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#071C3F]">
                    Tangible Deliverables Architected &amp; Embedded:
                  </h4>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {selectedCase.deliverables.map((del, dIdx) => (
                      <div 
                        key={dIdx} 
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-semibold"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact Metric & Statutory Standard */}
                <div className="p-4 rounded-2xl bg-[#071C3F] text-white space-y-2">
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#10B981]">
                    MEASURABLE VERIFIED RESULT:
                  </div>
                  <p className="text-sm font-bold text-slate-100">
                    {selectedCase.impactMetric}
                  </p>
                  <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-700/80">
                    <strong>Statutory Framework:</strong> {selectedCase.framework}
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-600 font-medium text-center sm:text-left">
                  Need a similar framework deployed in your organisation?
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Button
                    onClick={() => {
                      const topic = selectedCase.title;
                      setSelectedCase(null);
                      onOpenBooking(topic);
                    }}
                    className="w-full sm:w-auto bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black rounded-full px-6 py-2.5 text-xs shadow-md transition-all"
                  >
                    <Calendar className="w-4 h-4 mr-1.5" />
                    <span>Book Clarity Session on This Topic →</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
