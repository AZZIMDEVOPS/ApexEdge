"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, FileWarning, Users, FileSpreadsheet, RefreshCw, Lock, ArrowRight, Activity } from "lucide-react";
import Link from "next/link";

const PAIN_POINTS = [
  {
    id: "audit",
    icon: FileWarning,
    title: "Recurring Audit Findings",
    desc: "The same governance or internal audit issues keep surfacing year after year without resolution.",
    rootCause: "Lack of enforced internal control matrixes and statutory compliance ownership.",
    practiceArea: "01 — Governance & Risk",
    href: "/services#governance-risk",
  },
  {
    id: "policy",
    icon: AlertCircle,
    title: "Unenforced Shelf-Ware Policies",
    desc: "Policies exist on paper or sit on shelves, but management rarely enforces them in daily operations.",
    rootCause: "Missing operationalized SOP workflows with embedded financial approval thresholds.",
    practiceArea: "03 — Controls & Policies",
    href: "/services#controls-policies",
  },
  {
    id: "people",
    icon: Users,
    title: "Unclear Team Accountability",
    desc: "Teams operate without explicit ownership, leading to finger-pointing when key targets fail.",
    rootCause: "Unstructured job grading, overlapping responsibilities, and missing strategy-linked OKRs.",
    practiceArea: "02 — People & Performance",
    href: "/services#people-performance",
  },
  {
    id: "data",
    icon: Lock,
    title: "Unclear Handling of Personal Data",
    desc: "Personal data collected without clear governance, unmapped data flows, or uncertain breach protocols.",
    rootCause: "Missing Data Protection Impact Assessments (DPIAs) and Data Processing Agreements (DPAs).",
    practiceArea: "05 — Data Protection & Privacy",
    href: "/services#data-protection",
  },
  {
    id: "board",
    icon: FileSpreadsheet,
    title: "Indecisive Board Reports",
    desc: "Board reports present heavy operational noise without clear decision frameworks or risk heat maps.",
    rootCause: "Absence of structured executive decision-ready reporting standards.",
    practiceArea: "01 — Governance & Risk",
    href: "/services#governance-risk",
  },
  {
    id: "exec",
    icon: RefreshCw,
    title: "Leaders Struggling to Execute",
    desc: "Senior management teams struggling to translate strategic goals into daily operational execution.",
    rootCause: "Missing 90-day action tracking frameworks and practical executive decision toolkits.",
    practiceArea: "04 — Leadership & Capability",
    href: "/services#leadership-capability",
  },
];

export function DoesThisSoundFamiliar() {
  const [activeProblemId, setActiveProblemId] = useState<string>("audit");

  const activeProblem = PAIN_POINTS.find((p) => p.id === activeProblemId) || PAIN_POINTS[0];

  return (
    <section className="relative py-24 bg-[#071C3F] text-white overflow-hidden border-b border-slate-800">
      {/* Subtle Background Accent Mesh */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-[0.25em]"
          >
            <AlertCircle className="w-3.5 h-3.5" />
            <span>INTERACTIVE PROBLEM ECOSYSTEM</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            Does This Sound Familiar?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
          >
            &ldquo;Organisational problems are often symptoms of a deeper system weakness. Hover or select a problem node to explore its root cause.&rdquo;
          </motion.p>
        </div>

        {/* Interactive Problem Ecosystem Node Container */}
        <div className="grid gap-8 lg:grid-cols-12 items-center">
          
          {/* Left / Top: Interactive Problem Nodes List (6 Cols) */}
          <div className="lg:col-span-6 grid gap-3 sm:grid-cols-2">
            {PAIN_POINTS.map((item, idx) => {
              const Icon = item.icon;
              const isActive = item.id === activeProblemId;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveProblemId(item.id)}
                  onMouseEnter={() => setActiveProblemId(item.id)}
                  className={`p-5 rounded-2xl text-left border transition-all duration-300 flex items-start gap-3.5 relative group ${
                    isActive
                      ? "bg-slate-900 border-[#10B981] shadow-2xl scale-[1.02]"
                      : "bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90"
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-xl border shrink-0 transition-colors ${
                      isActive
                        ? "bg-[#10B981] text-[#071C3F] border-[#10B981]"
                        : "bg-slate-950 text-slate-400 border-slate-800 group-hover:text-white"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                      Symptom 0{idx + 1}
                    </span>
                    <h3
                      className={`text-sm font-black transition-colors ${
                        isActive ? "text-[#10B981]" : "text-white group-hover:text-slate-200"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-[#10B981] rounded-l-2xl"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right / Bottom: Dynamic System Diagnostic Node Display (6 Cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-900/90 border border-slate-800 p-8 sm:p-10 shadow-2xl relative overflow-hidden space-y-6">
            
            {/* Core Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#10B981]">
                <Activity className="w-4 h-4" />
                <span>ROOT SYSTEM DIAGNOSTIC</span>
              </div>
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">
                APEX EDGE INSIGHT
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProblem.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-2xl font-black text-white">{activeProblem.title}</h3>
                  <p className="text-slate-300 text-xs sm:text-sm font-normal mt-2 leading-relaxed">
                    {activeProblem.desc}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 block">
                    Underlying Root System Deficit:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-100 font-semibold leading-relaxed">
                    {activeProblem.rootCause}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                      Target Advisory Practice Area:
                    </span>
                    <span className="text-xs font-black text-[#10B981]">
                      {activeProblem.practiceArea}
                    </span>
                  </div>

                  <Link
                    href={activeProblem.href}
                    className="px-5 py-2.5 rounded-full bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black text-xs transition-all flex items-center gap-2 group shadow-lg"
                  >
                    <span>Explore Practice Area</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
