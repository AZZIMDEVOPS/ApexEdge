"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, MapPin, CheckCircle2, ArrowRight, ShieldAlert, Sparkles, FileText, ChevronRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export interface CaseStudy {
  id: string;
  client: string;
  category: string;
  location: string;
  headline: string;
  challenge: string;
  whatWeDid: string[];
  result: string;
  impactMetrics: { value: string; label: string }[];
  tag: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "banking-controls",
    client: "Tier-1 Commercial Banking Institution",
    category: "Internal Controls & Financial Authorization",
    location: "Nairobi, Kenya (Regional East Africa Operations)",
    headline: "Eliminating Recurring Internal Audit Exceptions Across 45 Branch Operations",
    challenge: "Annual compliance audits repeatedly highlighted unauthorized procurement overrides and fragmented approval workflows across 45 regional branches. Operational teams relied on ad-hoc email sign-offs, creating severe risk exposure under CBK prudential guidelines.",
    whatWeDid: [
      "Traced actual transaction pathways across retail and corporate branch networks to isolate the approval bottlenecks.",
      "Redesigned the institutional Financial Authorization Matrix with explicit monetary thresholds and secondary review checkpoints.",
      "Consolidated 240 pages of legacy procedures into 4 clear, digital 2-page Standard Operating Procedures (SOPs).",
      "Conducted practical execution workshops for 120+ branch managers and finance officers to embed daily compliance."
    ],
    result: "Achieved zero recurring audit exceptions in subsequent internal and CBK supervisory reviews, while accelerating average branch procurement cycle times by 38%.",
    impactMetrics: [
      { value: "0", label: "Recurring Audit Exceptions in Subsequent Review" },
      { value: "38%", label: "Faster Branch Procurement Approvals" },
      { value: "120+", label: "Branch & Finance Managers Trained" }
    ],
    tag: "Banking & Financial Services"
  },
  {
    id: "state-corp-governance",
    client: "Commercial State Enterprise",
    category: "Board Governance & CMA Compliance",
    location: "Nairobi, Kenya (National Regulatory Scope)",
    headline: "Transforming 300-Page Board Packs into Focused Risk Visibility for Directors",
    challenge: "Board meetings routinely stretched beyond 6 hours because Board packs contained over 300 pages of raw operational data without risk prioritization. Non-Executive Directors lacked the clarity needed to make strategic fiduciary decisions, jeopardizing compliance under CMA Corporate Governance Guidelines.",
    whatWeDid: [
      "Conducted an independent Governance Health Check reviewing Board charter alignment, committee delegations, and reporting flows.",
      "Designed a standardized, 15-page Board pack structure centered around an Executive Risk Heat Map and prioritized decision papers.",
      "Clarified committee terms of reference and delegated authority limits between the Board and executive management.",
      "Facilitated an intensive Board evaluation and induction workshop aligned with CMA & Companies Act 2015 governance standards."
    ],
    result: "Reduced Board pack volume by 75%, cut meeting duration in half, and earned a 98% governance compliance rating during annual statutory reviews.",
    impactMetrics: [
      { value: "75%", label: "Reduction in Board Pack Clutter" },
      { value: "98%", label: "CMA Governance Compliance Score" },
      { value: "100%", label: "On-Time Statutory Board Resolutions" }
    ],
    tag: "Public Sector & State Corporations"
  },
  {
    id: "real-estate-performance",
    client: "Commercial Real Estate & Asset Developer",
    category: "People, Roles & Performance Architecture",
    location: "Nairobi & Coast Region, Kenya",
    headline: "Aligning Executive Roles and OKR Performance During Rapid Portfolio Expansion",
    challenge: "Rapid expansion led to severe leadership role ambiguity between project directors, commercial managers, and finance teams. Unclear performance expectations and undefined salary bands resulted in executive friction, unaligned bonuses, and delayed development milestones.",
    whatWeDid: [
      "Conducted comprehensive role clarity audits across senior leadership and project management teams.",
      "Architected a transparent 6-tier Job Grading & Compensation Framework benchmarked against regional industry standards.",
      "Formulated measurable OKR performance scorecards tied directly to asset delivery timelines and capital efficiency.",
      "Implemented structured 90-day review mechanisms and named accountability charters for all departmental heads."
    ],
    result: "Eliminated role overlaps, unified senior executive incentives, and enabled on-time, within-budget completion across 3 flagship commercial assets.",
    impactMetrics: [
      { value: "100%", label: "Executive Roles with Named Accountability" },
      { value: "3", label: "Flagship Developments Delivered on Schedule" },
      { value: "0", label: "Role Boundary Disputes Post-Implementation" }
    ],
    tag: "Real Estate & Asset Management"
  },
  {
    id: "fintech-data-privacy",
    client: "Pan-African Regulated Payments Provider",
    category: "Data Protection & Statutory Privacy Frameworks",
    location: "Nairobi, Kenya (East & Southern Africa)",
    headline: "Embedding Operational Data Protection Compliance Under the 2019 Kenya DP Act",
    challenge: "Processing millions of personal financial transactions daily across multiple jurisdictions, the organisation faced severe statutory penalty exposure under the Kenya Data Protection Act 2019 due to unmapped data flows, missing DPIAs, and untracked third-party vendor access.",
    whatWeDid: [
      "Conducted comprehensive enterprise Data Mapping across all core payment engines, databases, and customer support channels.",
      "Developed an official Data Protection Impact Assessment (DPIA) Register for 8 primary product architectures.",
      "Drafted and negotiated Data Processing Agreements (DPAs) for 40+ critical third-party vendors and cloud infrastructure providers.",
      "Established an internal Data Breach Response Workflow and trained engineering, legal, and operational leadership."
    ],
    result: "Achieved full statutory compliance certification with the Office of the Data Protection Commissioner (ODPC) and zero regulatory sanctions.",
    impactMetrics: [
      { value: "100%", label: "Data Flows & Databases Fully Mapped" },
      { value: "40+", label: "Vendor DPAs Executed & Standardized" },
      { value: "0", label: "Statutory Penalties or Breach Defaults" }
    ],
    tag: "Fintech & Regulated Technology"
  }
];

export function VerifiedCaseSnapshots() {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number>(0);
  const activeCase = CASE_STUDIES[selectedCaseIndex];

  return (
    <section id="work" className="relative py-24 bg-slate-50 text-slate-900 overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-14">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <SectionLabel number="03" title="PROVEN CASE STUDIES" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight"
          >
            Real Breakpoints. Practical Systems. Measurable Outcomes.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            We let our work demonstrate credibility. Explore how we have partnered with East African organisations to solve deep operational, governance, and control challenges.
          </motion.p>
        </div>

        {/* Case Studies Interactive Navigator */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          
          {/* Left Rail: Project Tabs (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-500 px-2 block mb-2">
              SELECT AN ENGAGEMENT
            </span>
            
            <div className="space-y-2">
              {CASE_STUDIES.map((c, idx) => {
                const isActive = idx === selectedCaseIndex;
                return (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCaseIndex(idx)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col gap-1.5 ${
                      isActive
                        ? "bg-white border-[#10B981] shadow-md ring-2 ring-[#10B981]/20 text-slate-950"
                        : "bg-white/70 border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#071C3F] bg-[#10B981]/20 px-2.5 py-0.5 rounded-full">
                        {c.tag}
                      </span>
                      {isActive && <ChevronRight className="w-4 h-4 text-[#10B981]" />}
                    </div>
                    <h3 className="text-sm font-bold text-slate-950 leading-snug">
                      {c.client}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-1">
                      {c.category}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Area: Immersive IDEO.org-style Case Study Story (8 Cols) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="rounded-3xl bg-white border border-slate-200 p-7 sm:p-10 space-y-7 shadow-md"
              >
                {/* Meta Header */}
                <div className="space-y-3 border-b border-slate-100 pb-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#10B981]/20 text-[#071C3F] border border-[#10B981]/40 text-xs font-black uppercase tracking-wider">
                      {activeCase.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>{activeCase.location}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-950 leading-tight">
                    {activeCase.headline}
                  </h3>
                  <div className="text-xs text-slate-500 font-semibold">
                    Client Partner: <span className="text-slate-900 font-bold">{activeCase.client}</span>
                  </div>
                </div>

                {/* Challenge Narrative */}
                <div className="space-y-2">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-700 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-600" />
                    THE CHALLENGE &amp; CONTEXT
                  </span>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal bg-amber-50/50 p-4 sm:p-5 rounded-2xl border border-amber-200/60">
                    {activeCase.challenge}
                  </p>
                </div>

                {/* What We Did */}
                <div className="space-y-3">
                  <span className="text-xs font-black uppercase tracking-wider text-[#071C3F] flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#10B981]" />
                    WHAT APEX EDGE BUILT &amp; EMBEDDED
                  </span>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {activeCase.whatWeDid.map((step, sIdx) => (
                      <div key={sIdx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700 leading-relaxed font-normal">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Result Narrative */}
                <div className="space-y-2 border-t border-slate-100 pt-5">
                  <span className="text-xs font-black uppercase tracking-wider text-[#071C3F] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#10B981]" />
                    THE MEASURABLE RESULT &amp; IMPACT
                  </span>
                  <p className="text-sm sm:text-base text-slate-900 font-semibold leading-relaxed">
                    {activeCase.result}
                  </p>
                </div>

                {/* Impact Metrics Banners */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {activeCase.impactMetrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                      <div className="text-2xl sm:text-3xl font-black text-[#071C3F]">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-slate-600 font-semibold leading-tight">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
