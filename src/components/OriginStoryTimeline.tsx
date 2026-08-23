"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Compass, Lightbulb, TrendingUp, ShieldCheck, Rocket, CheckCircle2, Sparkles, ArrowDown } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ThreeDCard, ThreeDItem } from "@/components/ui/ThreeDCard";

const TIMELINE_STEPS = [
  {
    phase: "ORIGIN",
    year: "2018",
    title: "Observing the Shelf-Ware Paradox",
    icon: Compass,
    narrative:
      "Working across Nairobi's corporate boardrooms and financial institutions, our founders kept witnessing the same frustrating pattern: organisations were investing millions in 300-page strategy binders and compliance reports that ended up gathering dust on executive shelves, while daily operational breakdowns continued unabated.",
    insight: "Strategy without operational systems is just expensive wishful thinking.",
    accent: "#10B981",
  },
  {
    phase: "TURNING POINT",
    year: "2020",
    title: "Rejecting Slide Decks for Working Systems",
    icon: Lightbulb,
    narrative:
      "When regional market disruptions hit in 2020, abstract consulting theory collapsed. Leadership teams didn't need 80-slide decks; they needed 1-page digital authorization matrices, clear role ownership, and practical cash flow and compliance controls that managers could execute under pressure. Apex Edge pivoted to build 100% operationalized systems.",
    insight: "We stopped delivering reports and started building tools leaders actually use daily.",
    accent: "#0284C7",
  },
  {
    phase: "GROWTH",
    year: "2022 – 2024",
    title: "Institutionalizing East African Governance",
    icon: TrendingUp,
    narrative:
      "We codified our 4-step framework (Diagnose → Design → Embed → Verify) across Tier-1 commercial banks, Listed & Private Enterprises adhering to the CMA Corporate Governance Code, Real Estate Asset Managers, and Tech Providers navigating the 2019 Kenya Data Protection Act.",
    insight: "Deep grounding in East African regulatory realities (CBK, CMA, Companies Act 2015, ODPC).",
    accent: "#059669",
  },
  {
    phase: "TODAY",
    year: "TODAY",
    title: "Board-Ready Clarity at Scale",
    icon: ShieldCheck,
    narrative:
      "Headquartered in Nairobi, Apex Edge is the trusted strategic partner for Boards of Directors, CEOs, CFOs, and leadership teams who demand actionable controls, accountable owners, and measurable governance results without open-ended retainer friction.",
    insight: "6 core practice areas, 14 statutory frameworks supported, 100% named ownership.",
    accent: "#D97706",
  },
  {
    phase: "WHERE WE ARE GOING",
    year: "THE FUTURE",
    title: "Building Resilient East African Institutions",
    icon: Rocket,
    narrative:
      "As East African enterprises scale regionally and face stricter statutory scrutiny, we are expanding our practice to equip institutions with automated governance registers, proactive data privacy frameworks, and board-ready leadership capabilities.",
    insight: "Institutionalizing corporate integrity and execution velocity across Africa.",
    accent: "#7C3AED",
  },
];

export function OriginStoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section ref={containerRef} className="relative py-28 bg-white text-slate-900 overflow-hidden border-b border-slate-200">
      
      {/* Ambient background particles & glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-emerald-500/5 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-blue-500/5 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <SectionLabel number="05" title="OUR STORY & ORIGIN" />

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight"
          >
            How We Evolved from Observing Boardroom Frustration to Building Operational Systems
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            A lived-in journey grounded in real East African corporate challenges, board evaluations, and statutory transformations.
          </motion.p>
        </div>

        {/* Interactive Scroll-Driven Timeline Progression */}
        <div className="relative ml-4 sm:ml-8 lg:ml-16 pl-8 sm:pl-12 space-y-16">
          
          {/* Base Vertical Timeline Track */}
          <div className="absolute left-0 top-3 bottom-8 w-[3px] bg-slate-200 rounded-full overflow-hidden">
            {/* Active Scroll-Driven Glowing Emerald Laser Beam */}
            <motion.div
              style={{ scaleY }}
              className="w-full h-full bg-gradient-to-b from-[#10B981] via-emerald-400 to-[#071C3F] origin-top shadow-[0_0_12px_#10B981]"
            />
          </div>

          {TIMELINE_STEPS.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -30, scale: 0.96 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: 0.1, duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative group"
              >
                {/* Glowing Milestone Node */}
                <div className="absolute -left-[45px] sm:-left-[61px] top-6 w-8 h-8 rounded-full bg-white border-2 border-slate-300 group-hover:border-[#10B981] group-hover:shadow-[0_0_16px_rgba(16,185,129,0.5)] flex items-center justify-center shadow-md transition-all duration-500 z-10">
                  <div className="w-3 h-3 rounded-full bg-[#071C3F] group-hover:bg-[#10B981] transition-colors duration-300" />
                </div>

                {/* Subtle Blue Gradient Container Card */}
                <div className="rounded-3xl bg-gradient-to-br from-[#071C3F] via-[#09224E] to-[#071C3F] border border-slate-800 p-7 sm:p-9 space-y-5 hover:border-slate-700/80 hover:shadow-xl transition-all duration-300 text-white">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2.5 rounded-xl bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-[#10B981]">
                          {step.phase}
                        </span>
                      </div>
                      <span className="text-xs font-black text-white bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-700 shadow-inner">
                        {step.year}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                      {step.narrative}
                    </p>

                    <div className="pt-4 border-t border-slate-700/80 flex items-center gap-2 text-xs sm:text-sm text-emerald-300 font-semibold italic bg-slate-950/40 p-3.5 rounded-2xl border border-slate-800/80">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                      <span>&ldquo;{step.insight}&rdquo;</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
