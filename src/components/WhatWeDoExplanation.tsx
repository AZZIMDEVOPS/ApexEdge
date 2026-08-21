"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ArrowRight, ShieldCheck, FileCheck2, Users2, LineChart, Sparkles, Layers, Check } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ThreeDCard, ThreeDItem } from "@/components/ui/ThreeDCard";

const METHODOLOGY_STEPS = [
  {
    step: "01",
    phase: "DIAGNOSE",
    title: "Isolate the Root Breakpoint",
    desc: "We don't start with pre-packaged assumptions. We sit with your operating teams, trace transaction flows, and cross-reference policy against actual daily practice to uncover where the friction truly originates.",
    deliverable: "Root-Cause Gap Assessment",
    icon: ShieldCheck,
    tag: "Phase 01 · Discovery",
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    accentColor: "#10B981",
  },
  {
    step: "02",
    phase: "DESIGN",
    title: "Architect Usable, Board-Ready Systems",
    desc: "A 200-page manual that sits unread on a shelf is a liability, not a control. We design concise, actionable tools: 1-page digital approval workflows, clear authorization matrices, and Board risk heat maps.",
    deliverable: "Custom SOPs & Approval Matrices",
    icon: FileCheck2,
    tag: "Phase 02 · Architecture",
    gradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
    accentColor: "#0284C7",
  },
  {
    step: "03",
    phase: "EMBED",
    title: "Assign Named Ownership & Train Teams",
    desc: "Advisory recommendations collapse when no single person owns execution. We work alongside department heads to assign explicit owners, train managers, and embed controls into daily operations.",
    deliverable: "Named Ownership Charters & Training",
    icon: Users2,
    tag: "Phase 03 · Execution",
    gradient: "from-teal-500/10 via-emerald-500/5 to-transparent",
    accentColor: "#059669",
  },
  {
    step: "04",
    phase: "VERIFY",
    title: "Measure Board-Level Impact & Controls",
    desc: "We don't deliver a document and disappear. We establish executive scorecards, quarterly review cadence, and standardized Board packs so Directors have continuous, independent visibility.",
    deliverable: "Executive Scorecards & Board Packs",
    icon: LineChart,
    tag: "Phase 04 · Governance",
    gradient: "from-indigo-500/10 via-blue-500/5 to-transparent",
    accentColor: "#6366F1",
  },
];

export function WhatWeDoExplanation() {
  return (
    <section className="relative py-28 bg-white text-slate-900 overflow-hidden border-b border-slate-200">
      
      {/* Ambient Radial Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-teal-500/5 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <SectionLabel number="02" title="OUR OPERATING METHODOLOGY" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight"
          >
            How Apex Edge Actually Works With Your Organisation
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 shadow-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#10B981] to-[#071C3F]" />
            <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed pl-2">
              &ldquo;We help leadership teams identify what is genuinely breaking down, understand why it keeps recurring, design practical systems to fix it, and ensure someone is accountable for making it work every single day.&rdquo;
            </p>
          </motion.div>
        </div>

        {/* 3D Interactive Pipeline Process Grid with Step Connector */}
        <div className="relative">
          
          {/* Animated Connecting Laser Beam (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-[3px] bg-slate-200 z-0 overflow-hidden rounded-full">
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#10B981] to-transparent shadow-[0_0_12px_#10B981]"
            />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
            {METHODOLOGY_STEPS.map((stepItem, idx) => {
              const IconComp = stepItem.icon;
              return (
                <motion.div
                  key={stepItem.phase}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, duration: 0.6 }}
                  className="h-full"
                >
                  <ThreeDCard
                    depth={14}
                    glareColor="rgba(16, 185, 129, 0.18)"
                    className="rounded-3xl border-2 border-slate-200 bg-white/95 backdrop-blur-xl p-7 flex flex-col justify-between space-y-6 hover:border-[#10B981] transition-colors"
                  >
                    {/* Card Inner with 3D Depth Layers */}
                    <div className="space-y-5">
                      
                      {/* Top Row: 3D Floating Icon & Large Holographic Number */}
                      <div className="flex items-center justify-between">
                        <ThreeDItem translateZ={40}>
                          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-white to-slate-100 border-2 border-slate-200 text-[#071C3F] shadow-lg group-hover:shadow-emerald-500/20 group-hover:border-[#10B981] transition-all flex items-center justify-center">
                            <IconComp className="w-6 h-6 text-[#10B981]" />
                          </div>
                        </ThreeDItem>

                        <ThreeDItem translateZ={25}>
                          <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-300 to-slate-100 font-mono tracking-tighter select-none">
                            {stepItem.step}
                          </span>
                        </ThreeDItem>
                      </div>

                      {/* Phase Eyebrow & Title */}
                      <ThreeDItem translateZ={30} className="space-y-1.5">
                        <span className="inline-block text-[11px] font-black text-[#10B981] uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-md bg-[#10B981]/10 border border-[#10B981]/25">
                          {stepItem.phase}
                        </span>
                        <h3 className="text-lg font-black text-slate-950 leading-snug pt-1">
                          {stepItem.title}
                        </h3>
                      </ThreeDItem>

                      {/* Description */}
                      <ThreeDItem translateZ={15}>
                        <p className="text-xs text-slate-600 font-normal leading-relaxed">
                          {stepItem.desc}
                        </p>
                      </ThreeDItem>
                    </div>

                    {/* Bottom Deliverable Pill */}
                    <ThreeDItem translateZ={35}>
                      <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-800 bg-slate-50/90 px-3.5 py-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                        <span className="truncate">{stepItem.deliverable}</span>
                      </div>
                    </ThreeDItem>
                  </ThreeDCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Real Advisory Briefing Session Banner with 3D Depth Frame */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl h-80 sm:h-[420px] w-full group"
        >
          <Image
            src="/strategy_whiteboard_briefing.jpg"
            alt="Apex Edge Partner mapping organizational performance roadmaps with senior executive"
            fill
            className="object-cover object-top filter brightness-105 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071C3F] via-[#071C3F]/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 sm:left-10 sm:right-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 z-10">
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#10B981] bg-[#071C3F]/90 px-3.5 py-1.5 rounded-full border border-[#10B981]/40 backdrop-blur-md">
                Working Sprints in Practice
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-white">
                From Policy Binders to Interactive Strategy Sprints
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 max-w-xl leading-relaxed">
                We work directly with executive leadership at the whiteboard to co-design operational procedures, job grading matrices, and Board governance packs.
              </p>
            </div>

            <div className="shrink-0">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold text-[#10B981] bg-slate-900/90 px-4 py-2 rounded-full border border-[#10B981]/30 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Nairobi Executive Headquarters</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
