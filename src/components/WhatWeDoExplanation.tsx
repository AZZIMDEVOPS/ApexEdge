"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ArrowRight, ShieldCheck, FileCheck2, Users2, LineChart, Sparkles } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const METHODOLOGY_STEPS = [
  {
    step: "01",
    phase: "DIAGNOSE",
    title: "Isolate the Root Breakpoint",
    desc: "We don't start with pre-packaged assumptions. We sit with your operating teams, trace transaction flows, and cross-reference policy against actual daily practice to uncover where the friction truly originates.",
    deliverable: "Root-Cause Gap Assessment",
    icon: ShieldCheck,
  },
  {
    step: "02",
    phase: "DESIGN",
    title: "Architect Usable, Board-Ready Systems",
    desc: "A 200-page manual that sits unread on a shelf is a liability, not a control. We design concise, actionable tools: 1-page digital approval workflows, clear authorization matrices, and Board risk heat maps.",
    deliverable: "Custom SOPs & Approval Matrices",
    icon: FileCheck2,
  },
  {
    step: "03",
    phase: "EMBED",
    title: "Assign Named Ownership & Train Teams",
    desc: "Advisory recommendations collapse when no single person owns execution. We work alongside department heads to assign explicit owners, train managers, and embed controls into daily operations.",
    deliverable: "Named Ownership Charters & Training",
    icon: Users2,
  },
  {
    step: "04",
    phase: "VERIFY",
    title: "Measure Board-Level Impact & Controls",
    desc: "We don't deliver a document and disappear. We establish executive scorecards, quarterly review cadence, and standardized Board packs so Directors have continuous, independent visibility.",
    deliverable: "Executive Scorecards & Board Packs",
    icon: LineChart,
  },
];

export function WhatWeDoExplanation() {
  return (
    <section className="relative py-24 bg-white text-slate-900 overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
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
            className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm"
          >
            <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
              &ldquo;We help leadership teams identify what is genuinely breaking down, understand why it keeps recurring, design practical systems to fix it, and ensure someone is accountable for making it work every single day.&rdquo;
            </p>
          </motion.div>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {METHODOLOGY_STEPS.map((stepItem, idx) => {
            const IconComp = stepItem.icon;
            return (
              <motion.div
                key={stepItem.phase}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-7 h-full flex flex-col justify-between space-y-5 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#10B981] transition-all duration-300 shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-white border border-slate-200 text-[#071C3F] shadow-xs">
                      <IconComp className="w-5 h-5 text-[#10B981]" />
                    </div>
                    <span className="text-3xl font-black text-slate-300">
                      {stepItem.step}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-black text-[#071C3F] uppercase tracking-widest block">
                      {stepItem.phase}
                    </span>
                    <h3 className="text-lg font-black text-slate-950 mt-1 leading-snug">
                      {stepItem.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
                    {stepItem.desc}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-200 flex items-center gap-2 text-[11px] font-semibold text-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span>{stepItem.deliverable}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Real Advisory Briefing Session Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-lg h-72 sm:h-96 w-full"
        >
          <Image
            src="/strategy_whiteboard_briefing.jpg"
            alt="Apex Edge Partner mapping organizational performance roadmaps with senior executive"
            fill
            className="object-cover object-top filter brightness-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071C3F] via-[#071C3F]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 sm:left-10 sm:right-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#10B981] bg-[#071C3F]/90 px-3 py-1 rounded-full border border-[#10B981]/30">
                Working Sprints in Practice
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Co-Designing Operational Workflows with Leadership
              </h3>
            </div>
            <span className="text-xs text-slate-200 font-semibold bg-[#071C3F]/80 px-4 py-2 rounded-xl border border-slate-700">
              Interactive Diagnostic &amp; Architecture Sprints
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

