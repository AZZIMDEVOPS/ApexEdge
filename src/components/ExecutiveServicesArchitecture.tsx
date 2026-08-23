"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ShieldCheck, Users, Sliders, Award, Lock } from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ExecutiveServicesArchitecture() {
  return (
    <section id="services" className="relative py-24 bg-white text-slate-900 overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <SectionLabel number="02" title="OUR PRACTICE AREAS" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight"
          >
            What Apex Edge Actually Builds for You
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            We don&apos;t produce generic slide presentations. We architect 6 concrete operational systems that eliminate friction, assign named ownership, and withstand Board and regulatory scrutiny.
          </motion.p>
        </div>

        {/* Varied Editorial Layout: 5 Practice Areas */}
        <div className="space-y-10">
          
          {/* FEATURED PRACTICE 01: Governance & Board Oversight */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 shadow-sm grid gap-8 lg:grid-cols-12 items-center hover:border-[#10B981] transition-all duration-300"
          >
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-black uppercase tracking-widest text-[#071C3F] bg-[#10B981]/20 px-3 py-1 rounded-full border border-[#10B981]/40">
                  PRACTICE 01 · BOARD GOVERNANCE
                </span>
                <span className="text-xs text-slate-500 font-semibold">CMA &amp; Companies Act 2015 Standards</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-slate-950 leading-tight">
                Give Your Board Clearer Visibility of True Risk and Execution.
              </h3>

              <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                <div>
                  <strong className="text-slate-900 block mb-0.5">Why it matters:</strong>
                  Directors face severe statutory liability and strategic blind spots when Board packs consist of hundreds of pages of raw operational data rather than prioritized risk heat maps and clear decision papers.
                </div>

                <div>
                  <strong className="text-slate-900 block mb-0.5">What it actually involves:</strong>
                  Independent governance health checks, restructuring Board reporting packs, updating Board charters, and establishing delegated authorization limits between Directors and management.
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/services#governance-risk"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#071C3F] hover:text-[#10B981] transition-colors"
                >
                  <span>Explore Governance Systems</span>
                  <ArrowRight className="w-4 h-4 text-[#10B981]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
              <span className="text-xs font-black uppercase tracking-widest text-slate-500 block border-b border-slate-100 pb-3">
                TANGIBLE BOARD ARTIFACTS
              </span>
              <ul className="space-y-3 text-xs text-slate-700 font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span>Executive Board Risk Registers &amp; Quarterly Heat Maps</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span>Standardized 15-Page Decision-Oriented Board Pack Templates</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span>Board Committee Charters &amp; Delegated Authority Frameworks</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span>Independent CMA &amp; Governance Evaluation Audits</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* PRACTICES 02 & 03: Two Distinct Asymmetrical Cards (People & Controls) */}
          <div className="grid gap-8 lg:grid-cols-2">
            
            {/* Practice 02: People & Performance */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-10 space-y-6 flex flex-col justify-between hover:border-[#10B981] transition-all duration-300 shadow-sm"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest text-[#071C3F] bg-[#10B981]/20 px-3 py-1 rounded-full border border-[#10B981]/40">
                    PRACTICE 02 · PEOPLE &amp; PERFORMANCE
                  </span>
                  <Users className="w-5 h-5 text-[#10B981]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-950 leading-snug">
                  Build a Performance System That Creates Real Accountability.
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong className="text-slate-900 block mb-0.5">Why it matters:</strong>
                  Role overlap, vague job titles, and disconnected KPIs cause high executive payroll costs without matching operational output.
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong className="text-slate-900 block mb-0.5">What it actually involves:</strong>
                  Job grading benchmarks, salary band structures, OKR performance scorecards, and named ownership maps that connect individual outputs to strategic milestones.
                </p>

                <div className="pt-3 border-t border-slate-200 space-y-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Key Deliverables:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>Job Grading Frameworks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>Salary Structure Bands</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>OKR / KPI Scorecards</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>Named Ownership Matrices</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <Link
                  href="/services#people-performance"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#071C3F] hover:text-[#10B981] transition-colors"
                >
                  <span>Explore People &amp; Performance Systems</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#10B981]" />
                </Link>
              </div>
            </motion.div>

            {/* Practice 03: Controls & Policies */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-10 space-y-6 flex flex-col justify-between hover:border-[#10B981] transition-all duration-300 shadow-sm"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest text-[#071C3F] bg-[#10B981]/20 px-3 py-1 rounded-full border border-[#10B981]/40">
                    PRACTICE 03 · CONTROLS &amp; SOPS
                  </span>
                  <Sliders className="w-5 h-5 text-[#10B981]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-950 leading-snug">
                  Turn Static Policy Binders into Working Daily Controls.
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong className="text-slate-900 block mb-0.5">Why it matters:</strong>
                  Policies that live on shelves never stop procurement leakage, financial audit exceptions, or regulatory fines.
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong className="text-slate-900 block mb-0.5">What it actually involves:</strong>
                  Condensing 200-page legacy policies into 2-page operational SOPs, designing strict financial authorization matrices, and training managers to follow daily verification routines.
                </p>

                <div className="pt-3 border-t border-slate-200 space-y-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Key Deliverables:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>Financial Authorization Matrices</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>Procurement &amp; Finance SOPs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>Internal Control Checklists</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>Audit Readiness Registers</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <Link
                  href="/services#controls-policies"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#071C3F] hover:text-[#10B981] transition-colors"
                >
                  <span>Explore Control &amp; SOP Systems</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#10B981]" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* PRACTICES 04 & 05: Asymmetrical Two-Tone Split (Leadership & Data Protection) */}
          <div className="grid gap-8 lg:grid-cols-12">
            
            {/* Practice 04: Leadership Capability */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 rounded-3xl bg-slate-50 border border-slate-200 p-8 space-y-6 flex flex-col justify-between hover:border-[#10B981] transition-all duration-300 shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest text-[#071C3F] bg-[#10B981]/20 px-3 py-1 rounded-full border border-[#10B981]/40">
                    PRACTICE 04 · LEADERSHIP
                  </span>
                  <Award className="w-5 h-5 text-[#10B981]" />
                </div>

                <h3 className="text-xl font-black text-slate-950 leading-snug">
                  Build Leaders Who Execute, Not Just Manage.
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Classroom lectures don&apos;t change workplace habits. We equip executive and management teams with practical decision toolkits, 90-day execution roadmaps, and structured team accountability systems.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-200 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                    <span>Executive Decision Frameworks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                    <span>90-Day Execution Roadmaps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                    <span>Management Toolkits &amp; SOP Routines</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <Link
                  href="/services#leadership-capability"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#071C3F] hover:text-[#10B981] transition-colors"
                >
                  <span>Explore Leadership Capability</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#10B981]" />
                </Link>
              </div>
            </motion.div>

            {/* Practice 05: Data Protection & Privacy */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 rounded-3xl bg-slate-50 border border-slate-200 p-8 space-y-6 flex flex-col justify-between hover:border-[#10B981] transition-all duration-300 shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest text-[#071C3F] bg-[#10B981]/20 px-3 py-1 rounded-full border border-[#10B981]/40">
                    PRACTICE 05 · DATA PRIVACY &amp; COMPLIANCE
                  </span>
                  <Lock className="w-5 h-5 text-[#10B981]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-950 leading-snug">
                  Operationalize Data Protection Under the 2019 Kenya DP Act.
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Data protection compliance is an ongoing operational discipline, not a one-time legal memo. We help organisations map personal data flows, conduct Data Protection Impact Assessments (DPIAs), draft third-party Data Processing Agreements (DPAs), and train staff on statutory breach protocols.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-200 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                    <span>Personal Data Inventory &amp; Mapping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                    <span>DPIA Registers &amp; Risk Assessments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                    <span>Vendor DPAs &amp; Cross-Border Contracts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                    <span>Data Breach Response Playbooks</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <Link
                  href="/services#data-protection"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#071C3F] hover:text-[#10B981] transition-colors"
                >
                  <span>Explore Data Protection Systems</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#10B981]" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* FEATURED PRACTICE 06: Corporate Secretarial & Statutory Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 shadow-sm grid gap-8 lg:grid-cols-12 items-center hover:border-[#10B981] transition-all duration-300"
          >
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-black uppercase tracking-widest text-[#071C3F] bg-[#10B981]/20 px-3 py-1 rounded-full border border-[#10B981]/40">
                  PRACTICE 06 · CORPORATE SECRETARIAL
                </span>
                <span className="text-xs text-slate-500 font-semibold">Companies Act 2015 &amp; BRS</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-slate-950 leading-tight">
                Flawless Statutory Compliance, Board Resolutions &amp; Registry Filing.
              </h3>

              <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                <div>
                  <strong className="text-slate-900 block mb-0.5">Why it matters:</strong>
                  Missed annual filing deadlines, defective board resolutions, irregular shareholder registries, and BRS non-compliance create immediate statutory penalties and expose Directors to severe personal liability.
                </div>

                <div>
                  <strong className="text-slate-900 block mb-0.5">What it actually involves:</strong>
                  End-to-end company secretarial advisory, annual statutory filings on the Business Registration Service (BRS), certified Board &amp; AGM minutes, and statutory register maintenance.
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/services#corporate-secretarial"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#071C3F] hover:text-[#10B981] transition-colors"
                >
                  <span>Explore Corporate Secretarial Services</span>
                  <ArrowRight className="w-4 h-4 text-[#10B981]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
              <span className="text-xs font-black uppercase tracking-widest text-slate-500 block border-b border-slate-100 pb-3">
                TANGIBLE SECRETARIAL DELIVERABLES
              </span>
              <ul className="space-y-3 text-xs text-slate-700 font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span>Annual Statutory Returns &amp; BRS e-Filing Verification</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span>Certified Board Minutes &amp; Statutory Resolution Drafting</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span>Statutory Register of Members, Directors &amp; Beneficial Owners</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span>AGM &amp; EGM Governance Management &amp; Minute Certification</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
