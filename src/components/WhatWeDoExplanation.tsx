"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import {
  Diagnose3DIcon,
  Design3DIcon,
  Implement3DIcon,
  Measure3DIcon,
} from "@/components/icons/Methodology3DIcons";

const METHODOLOGY_STEPS = [
  {
    step: "01",
    title: "DIAGNOSE",
    subtitle: "Find the Real Problem",
    desc: "We conduct an empirical assessment of your governance, controls, people, or data processes to isolate the root system deficit—not just the surface symptom.",
    outcome: "Empirical Root-Cause Gap Analysis",
    Icon3D: Diagnose3DIcon,
  },
  {
    step: "02",
    title: "DESIGN",
    subtitle: "Build the Right Solution",
    desc: "We architect practical, Board-ready systems, custom SOPs, risk registers, and role structures tailored to your operational realities.",
    outcome: "Custom SOPs & Risk Registers",
    Icon3D: Design3DIcon,
  },
  {
    step: "03",
    title: "IMPLEMENT",
    subtitle: "Embed Into Operations",
    desc: "We work alongside your leadership and management teams to embed new workflows, assign named ownership, and enforce compliance.",
    outcome: "Named Ownership & Staff Training",
    Icon3D: Implement3DIcon,
  },
  {
    step: "04",
    title: "MEASURE",
    subtitle: "Track Impact & Results",
    desc: "We establish performance dashboards, tracking scorecards, and Board reporting mechanisms to verify that the system delivers expected outcomes.",
    outcome: "Board Control Dashboards & Scorecards",
    Icon3D: Measure3DIcon,
  },
];

export function WhatWeDoExplanation() {
  return (
    <section className="relative py-24 bg-[#071C3F] text-white overflow-hidden border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <SectionLabel number="02" title="CORE ADVISORY FRAMEWORK" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight uppercase"
          >
            WHAT DOES APEX EDGE ACTUALLY DO?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-2xl"
          >
            <p className="text-base sm:text-xl text-slate-100 font-semibold leading-relaxed">
              &ldquo;We help organisations identify what is not working, understand why, design practical systems to fix it, support implementation and measure whether the change is working.&rdquo;
            </p>
          </motion.div>
        </div>

        {/* 4-Step Process Visual Continuous Traveling Line Container */}
        <div className="relative">
          
          {/* Continuous Glowing Energy Line Behind Grid (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-slate-800 -translate-y-1/2 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-[#10B981] via-blue-400 to-[#10B981] origin-left shadow-[0_0_15px_#10B981]"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
            {METHODOLOGY_STEPS.map((stepItem, idx) => {
              const Icon3DComp = stepItem.Icon3D;
              return (
                <motion.div
                  key={stepItem.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                >
                  <SpotlightCard className="p-7 h-full flex flex-col justify-between space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Icon3DComp size={50} />
                        <span className="text-3xl font-black text-slate-700 group-hover:text-[#10B981]/40 transition-colors">
                          {stepItem.step}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-black text-white group-hover:text-[#10B981] transition-colors tracking-wide">
                          {stepItem.title}
                        </h3>
                        <span className="text-xs font-bold text-[#10B981] uppercase tracking-wider block mt-0.5">
                          {stepItem.subtitle}
                        </span>
                      </div>

                      <p className="text-xs text-slate-300 font-normal leading-relaxed">
                        {stepItem.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-[11px] font-semibold text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>{stepItem.outcome}</span>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
