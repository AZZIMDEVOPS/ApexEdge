"use client";

import { motion } from "framer-motion";
import { Compass, Lightbulb, TrendingUp, ShieldCheck, Rocket, CheckCircle2 } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const TIMELINE_STEPS = [
  {
    phase: "ORIGIN",
    year: "2018",
    title: "Observing the Shelf-Ware Paradox",
    icon: Compass,
    narrative:
      "Working across Nairobi's corporate boardrooms and financial institutions, our founders kept witnessing the same frustrating pattern: organisations were investing millions in 300-page strategy binders and compliance reports that ended up gathering dust on executive shelves, while daily operational breakdowns continued unabated.",
    insight: "Strategy without operational systems is just expensive wishful thinking.",
  },
  {
    phase: "TURNING POINT",
    year: "2020",
    title: "Rejecting Slide Decks for Working Systems",
    icon: Lightbulb,
    narrative:
      "When regional market disruptions hit in 2020, abstract consulting theory collapsed. Leadership teams didn't need 80-slide decks; they needed 1-page digital authorization matrices, clear role ownership, and practical cash flow and compliance controls that managers could execute under pressure. Apex Edge pivoted to build 100% operationalized systems.",
    insight: "We stopped delivering reports and started building tools leaders actually use daily.",
  },
  {
    phase: "GROWTH",
    year: "2022 – 2024",
    title: "Institutionalizing East African Governance",
    icon: TrendingUp,
    narrative:
      "We codified our 4-step framework (Diagnose → Design → Embed → Verify) across Tier-1 commercial banks, State Corporations adhering to the Mwongozo Code, Real Estate Asset Managers, and Tech Providers navigating the 2019 Kenya Data Protection Act.",
    insight: "Deep grounding in East African regulatory realities (CBK, CMA, Mwongozo, ODPC).",
  },
  {
    phase: "TODAY",
    year: "TODAY",
    title: "Board-Ready Clarity at Scale",
    icon: ShieldCheck,
    narrative:
      "Headquartered in Nairobi, Apex Edge is the trusted strategic partner for Boards of Directors, CEOs, CFOs, and leadership teams who demand actionable controls, accountable owners, and measurable governance results without open-ended retainer friction.",
    insight: "5 core practice areas, 14 statutory frameworks supported, 100% named ownership.",
  },
  {
    phase: "WHERE WE ARE GOING",
    year: "THE FUTURE",
    title: "Building Resilient East African Institutions",
    icon: Rocket,
    narrative:
      "As East African enterprises scale regionally and face stricter statutory scrutiny, we are expanding our practice to equip institutions with automated governance registers, proactive data privacy frameworks, and board-ready leadership capabilities.",
    insight: "Institutionalizing corporate integrity and execution velocity across Africa.",
  },
];

export function OriginStoryTimeline() {
  return (
    <section className="relative py-28 bg-white text-slate-900 overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <SectionLabel number="05" title="OUR STORY & ORIGIN" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight"
          >
            How We Evolved from Observing Boardroom Frustration to Building Operational Systems
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            A lived-in journey grounded in real East African corporate challenges, board evaluations, and statutory transformations.
          </motion.p>
        </div>

        {/* Timeline Progression */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 lg:ml-12 pl-6 sm:pl-10 space-y-12">
          {TIMELINE_STEPS.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative group"
              >
                {/* Milestone Node */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white border-2 border-[#10B981] flex items-center justify-center shadow-md">
                  <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                </div>

                {/* Apex Edge Blue Gradient Container Card */}
                <div className="rounded-3xl bg-gradient-to-br from-[#071C3F] via-[#09224E] to-[#071C3F] border border-slate-800 p-6 sm:p-8 space-y-4 hover:border-[#10B981]/60 transition-all duration-300 shadow-xl text-white">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-[#10B981]/20 text-[#10B981]">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">
                        {step.phase}
                      </span>
                    </div>
                    <span className="text-xs font-black text-slate-300 bg-[#071C3F]/80 px-3 py-1 rounded-full border border-slate-700">
                      {step.year}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                    {step.narrative}
                  </p>

                  <div className="pt-3 border-t border-slate-700/80 flex items-center gap-2 text-xs text-slate-300 font-semibold italic">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>&ldquo;{step.insight}&rdquo;</span>
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
