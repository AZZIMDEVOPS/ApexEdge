"use client";

import { useState } from "react";
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
  Target
} from "lucide-react";
import { ExecutiveHeaderNav } from "@/components/ExecutiveHeaderNav";
import { CorporateFooter } from "@/components/CorporateFooter";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ApexAIAssistant } from "@/components/ApexAIAssistant";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import {
  Governance3DIcon,
  People3DIcon,
  Controls3DIcon,
  Leadership3DIcon,
  DataProtection3DIcon,
} from "@/components/icons/PracticeArea3DIcons";

const PRACTICE_AREAS = [
  {
    id: "governance-risk",
    num: "01",
    category: "GOVERNANCE & RISK",
    Icon3D: Governance3DIcon,
    icon: ShieldCheck,
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
    headline: "Turn Policies Into Systems That Actually Work.",
    problemHeader: "The Organisational Challenge",
    problem: "Policies that exist on paper or sit on shelves, but management rarely enforces them in daily work, leading to audit findings and operational friction.",
    whoFor: "CFOs, Internal Auditors, COOs, Compliance Officers, Operations Directors.",
    approach: "We convert generic policies into practical SOPs with embedded approval controls and ownership across Finance, Procurement, HR, Governance, Operations, and Compliance.",
    services: [
      "Financial Authorization & Approval Matrixes",
      "Procurement & Supply Chain SOPs",
      "HR Operational Procedures & Manuals",
      "Internal Control Matrixes & Risk Checklists",
      "Statutory & Regulatory Compliance Templates",
      "Policy-to-Practice Operationalization Sprints"
    ],
    deliverables: [
      "Financial & Operational Policies",
      "SOPs & Workflows",
      "Process Maps & Flowcharts",
      "Approval Frameworks & Authorization Limits",
      "Control Matrixes & Audit Checklists",
      "Statutory Compliance Templates",
      "Implementation & Enforcement Plans"
    ],
    outcome: "Policies move from documents sitting on shelves to practical systems that guide behaviour and accountability.",
    methodology: ["Diagnose", "Design", "Implement", "Measure"]
  },
  {
    id: "leadership-capability",
    num: "04",
    category: "LEADERSHIP & CAPABILITY",
    Icon3D: Leadership3DIcon,
    icon: Award,
    headline: "Build Leaders and Teams That Execute Better.",
    problemHeader: "The Organisational Challenge",
    problem: "Senior leadership teams and department heads struggling to translate strategic goals into daily operational execution, decision-making, and accountability.",
    whoFor: "Executive Committees, Senior Managers, Department Heads, High-Potential Leaders, Managing Directors.",
    approach: "Training That Changes Behaviour. We train executives and business unit leads on structured decision-making, management effectiveness, and execution tracking.",
    services: [
      "Executive Leadership Capability Frameworks",
      "Practical Decision-Making & Management Toolkits",
      "Team Accountability & Performance Systems",
      "Strategic Goal Translation & Alignment Sprints",
      "90-Day Execution Roadmaps & Action Tracking"
    ],
    deliverables: [
      "Leadership Frameworks",
      "Management Tools & Toolkits",
      "Action Tracking & Implementation Dashboards",
      "Decision Frameworks",
      "Team Accountability Systems",
      "90-Day Execution Roadmaps"
    ],
    outcome: "Teams leave with practical tools, clear ownership, decisions and an action plan — not just presentation slides.",
    methodology: ["Diagnose", "Design", "Implement", "Measure"]
  },
  {
    id: "data-protection",
    num: "05",
    category: "DATA PROTECTION & PRIVACY",
    Icon3D: DataProtection3DIcon,
    icon: Lock,
    headline: "Protect Data. Strengthen Trust. Stay Compliant.",
    problemHeader: "Does Your Organisation Know Where Its Data Goes?",
    problem: "Personal data being collected without clear governance or consent; unclear ownership across departments; outdated privacy policies; weak retention practices; third-party vendors handling data without sufficient controls; uncertainty around data breach response or data subject rights.",
    whoFor: "Data Protection Officers (DPO), CIOs, CTOs, Legal Counsel, Compliance Leads, CEOs, Managing Directors handling customer & employee data.",
    approach: "Helping organisations understand their data protection obligations, strengthen privacy practices and build practical systems for responsible handling of personal data.",
    services: [
      "Data Protection Compliance & Gap Assessments",
      "Privacy Governance Frameworks & Ownership Mapping",
      "Data Mapping & Data Inventories / Registers",
      "Privacy Policies, Public Notices & Consent Documentation",
      "Data Protection Impact Assessments (DPIAs)",
      "Data Processing Agreements (DPAs) & Vendor Risk Reviews",
      "Data Subject Rights Request Workflows",
      "Data Retention & Safe Disposal Frameworks",
      "Data Breach Preparedness & Emergency Response Protocols",
      "Staff Data Protection Awareness & Training Materials"
    ],
    deliverables: [
      "Data Protection Gap Assessment Report",
      "Data Inventory & Data Mapping Framework",
      "Privacy Policies & Operational Manuals",
      "Public Privacy Notices & Consent Forms",
      "Data Protection Impact Assessments (DPIAs)",
      "Data Processing Agreements (DPAs)",
      "Data Subject Request Procedures & Log",
      "Data Retention & Disposal Frameworks",
      "Data Breach Response Protocols & Checklists",
      "Staff Data Protection Awareness Materials",
      "Privacy Governance Frameworks",
      "Data Protection Action Plans"
    ],
    outcome: "Data protection moves from legal uncertainty into a structured, operationalized privacy system that protects customer trust, passes regulatory checks, and mitigates breach risks.",
    methodology: ["ASSESS", "IDENTIFY", "DESIGN", "IMPLEMENT", "MONITOR"]
  }
];

export default function ServicesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("Governance & Risk");

  const openBookingForCategory = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-900 selection:bg-[#10B981] selection:text-[#071C3F]">
      <ExecutiveHeaderNav onOpenBooking={() => openBookingForCategory("Governance & Risk")} />

      {/* Hero */}
      <section className="relative py-24 bg-[#071C3F] text-white overflow-hidden border-b border-slate-800">
        {/* Subtle background glow */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#10B981] via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] text-xs font-black uppercase tracking-[0.25em]">
            <ShieldCheck className="w-4 h-4" />
            <span>01 TO 05 — CORE PRACTICE AREAS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Client Outcomes, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-[#10B981]">
              Not Abstract Consulting.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-slate-300 font-normal leading-relaxed">
            Apex Edge helps organisations turn governance, people, control, performance and data protection challenges into practical, Board-ready systems.
          </p>

          {/* Quick Jump Navigation Pill Tabs */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {PRACTICE_AREAS.map((area) => (
              <a
                key={area.id}
                href={`#${area.id}`}
                className="px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-[#10B981] text-xs font-bold text-slate-200 hover:text-[#10B981] transition-all flex items-center gap-2 group shadow-md"
              >
                <span className="text-[#10B981] text-[10px] font-black">{area.num}</span>
                <span>{area.category}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Interconnected Flow Banner */}
      <section className="py-8 bg-slate-900 border-b border-slate-800 text-xs font-semibold text-slate-300">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 flex flex-wrap items-center justify-center gap-4 text-center">
          <span className="text-[#10B981] font-bold uppercase tracking-widest">Integrated Governance Systems:</span>
          <div className="flex flex-wrap items-center justify-center gap-2 text-slate-200 font-medium">
            <span className="bg-slate-950 px-3 py-1 rounded-full border border-slate-800">Governance</span>
            <span className="text-[#10B981]">↓</span>
            <span className="bg-slate-950 px-3 py-1 rounded-full border border-slate-800">Controls</span>
            <span className="text-[#10B981]">↓</span>
            <span className="bg-slate-950 px-3 py-1 rounded-full border border-slate-800">People</span>
            <span className="text-[#10B981]">↓</span>
            <span className="bg-slate-950 px-3 py-1 rounded-full border border-slate-800">Data</span>
            <span className="text-[#10B981]">↓</span>
            <span className="bg-slate-950 px-3 py-1 rounded-full border border-slate-800">Performance</span>
            <span className="text-[#10B981]">↓</span>
            <span className="bg-slate-950 px-3 py-1 rounded-full border border-[#10B981]/50 text-[#10B981] font-bold">Board Decisions</span>
          </div>
        </div>
      </section>

      {/* Practice Area Distinction Guide Section */}
      <section className="py-16 bg-[#071C3F] border-b border-slate-800 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">
              PRACTICE AREA DISTINCTION GUIDE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Understanding Which Practice Area Applies to Your Organisation
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Each Practice Area addresses a distinct pillar of your organizational system:
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 text-xs">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 hover:border-[#10B981]/50 transition-colors">
              <span className="font-extrabold text-[#10B981] block">01 GOVERNANCE & RISK</span>
              <span className="font-bold text-white block">Core Focus:</span>
              <p className="text-slate-300 leading-relaxed font-normal">
                What risks exist and how should leadership and the Board oversee them?
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 hover:border-[#10B981]/50 transition-colors">
              <span className="font-extrabold text-[#10B981] block">02 PEOPLE & PERFORMANCE</span>
              <span className="font-bold text-white block">Core Focus:</span>
              <p className="text-slate-300 leading-relaxed font-normal">
                Who is responsible and how do we measure performance?
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 hover:border-[#10B981]/50 transition-colors">
              <span className="font-extrabold text-[#10B981] block">03 CONTROLS & POLICIES</span>
              <span className="font-bold text-white block">Core Focus:</span>
              <p className="text-slate-300 leading-relaxed font-normal">
                What processes and safeguards prevent those risks from becoming problems?
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 hover:border-[#10B981]/50 transition-colors">
              <span className="font-extrabold text-[#10B981] block">04 LEADERSHIP & CAPABILITY</span>
              <span className="font-bold text-white block">Core Focus:</span>
              <p className="text-slate-300 leading-relaxed font-normal">
                Do leaders and teams have the capability to execute effectively?
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 hover:border-[#10B981]/50 transition-colors">
              <span className="font-extrabold text-[#10B981] block">05 DATA PROTECTION</span>
              <span className="font-bold text-white block">Core Focus:</span>
              <p className="text-slate-300 leading-relaxed font-normal">
                How is personal data collected, used, protected, and governed?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Practice Areas Section */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-20">
          {PRACTICE_AREAS.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className="scroll-mt-28 rounded-3xl bg-[#071C3F]/90 border border-slate-800 p-6 sm:p-12 space-y-10 shadow-2xl hover:border-[#10B981]/50 transition-colors"
              >
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
                  <div className="flex items-center gap-4">
                    {item.Icon3D ? <item.Icon3D size={56} /> : <IconComp className="w-8 h-8 text-[#10B981]" />}
                    <div>
                      <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">
                        PRACTICE AREA {item.num}
                      </span>
                      <h2 className="text-2xl sm:text-4xl font-black text-white">{item.category}</h2>
                    </div>
                  </div>
                  <span className="text-4xl sm:text-6xl font-black text-slate-800">{item.num}</span>
                </div>

                {/* Positioning Statement */}
                <div className="p-6 rounded-2xl bg-slate-950/80 border-l-4 border-[#10B981] border-slate-800/80">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#10B981] block mb-1">
                    Positioning Statement
                  </span>
                  <div className="text-xl sm:text-2xl font-bold text-slate-100 italic">
                    &ldquo;{item.headline}&rdquo;
                  </div>
                </div>

                {/* 5-Question Framework Grid */}
                <div className="grid gap-6 lg:grid-cols-3">
                  
                  {/* 1. What Problem Does It Solve? */}
                  <div className="space-y-3 p-6 rounded-2xl bg-slate-950 border border-slate-800">
                    <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-400">
                      <HelpCircle className="w-4 h-4 shrink-0" />
                      <span>1. What Problem Does It Solve?</span>
                    </div>
                    <h4 className="text-sm font-bold text-white">{item.problemHeader}</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {item.problem}
                    </p>
                  </div>

                  {/* 2. What Does Apex Edge Do? */}
                  <div className="space-y-3 p-6 rounded-2xl bg-slate-950 border border-slate-800">
                    <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-blue-400">
                      <Zap className="w-4 h-4 shrink-0" />
                      <span>2. What Does Apex Edge Do?</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {item.approach}
                    </p>
                  </div>

                  {/* 3. Who Is It For & 5. Outcome */}
                  <div className="space-y-6 p-6 rounded-2xl bg-slate-950 border border-slate-800">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-teal-300">
                        <Building2 className="w-4 h-4 shrink-0" />
                        <span>3. Who Is It For?</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed font-medium">
                        {item.whoFor}
                      </p>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-slate-800">
                      <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#10B981]">
                        <Target className="w-4 h-4 shrink-0" />
                        <span>5. Expected Outcome</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-100 font-semibold leading-relaxed">
                        {item.outcome}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Specific Services Offered List */}
                <div className="space-y-4 pt-4 border-t border-slate-800">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400 block">
                    Services &amp; Interventions Provided:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.services.map((srv, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 text-xs text-slate-200">
                        <span className="h-2 w-2 rounded-full bg-[#10B981] mt-1.5 shrink-0" />
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. What Does The Client Receive? (Tangible Deliverables) */}
                <div className="space-y-4 pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#10B981]">
                    <FileText className="w-4 h-4" />
                    <span>4. What You Walk Away With (Tangible Deliverables):</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {item.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 font-medium hover:border-[#10B981]/40 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Methodology Steps */}
                <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400 block">
                    How We Work (Apex Edge Methodology):
                  </span>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    {item.methodology.map((step, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-200">
                        <span className="w-6 h-6 rounded-full bg-[#10B981]/20 border border-[#10B981]/50 text-[#10B981] flex items-center justify-center text-[10px]">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                        {idx < item.methodology.length - 1 && (
                          <span className="text-slate-600 ml-2 hidden sm:inline">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Row */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-slate-400 italic">
                    Ready to operationalize {item.category.toLowerCase()} in your organisation?
                  </span>
                  <Button
                    onClick={() => openBookingForCategory(item.category)}
                    className="bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black rounded-full px-6 py-3.5 text-xs shadow-lg flex items-center gap-2 transition-all hover:scale-[1.02]"
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
