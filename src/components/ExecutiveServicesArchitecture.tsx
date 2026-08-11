"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Sliders, Award, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export interface ServiceCategory {
  id: string;
  num: string;
  category: string;
  headline: string;
  icon: typeof ShieldCheck;
  deliverables: string[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "governance-risk",
    num: "01",
    category: "GOVERNANCE & RISK",
    headline: "Give Your Board Clearer Visibility of Risk and Performance.",
    icon: ShieldCheck,
    deliverables: [
      "Risk registers & heat maps",
      "Board governance dashboards",
      "Decision-making frameworks",
      "Accountability & oversight systems",
    ],
  },
  {
    id: "people-performance",
    num: "02",
    category: "PEOPLE & PERFORMANCE",
    headline: "Build a Performance System That Creates Accountability.",
    icon: Users,
    deliverables: [
      "Job structures & role profiles",
      "Salary & compensation frameworks",
      "OKRs & KPI performance scorecards",
      "Performance management tools",
    ],
  },
  {
    id: "controls-policies",
    num: "03",
    category: "CONTROLS & POLICIES",
    headline: "Build Policies That Work in Practice.",
    icon: Sliders,
    deliverables: [
      "Finance & procurement controls",
      "HR policy procedures & manuals",
      "Operational SOPs & templates",
      "Practical compliance systems",
    ],
  },
  {
    id: "leadership-capability",
    num: "04",
    category: "LEADERSHIP & CAPABILITY",
    headline: "Build Leaders and Teams That Execute Better.",
    icon: Award,
    deliverables: [
      "Leadership & management systems",
      "Executive decision-making frameworks",
      "Practical management capability training",
      "Execution tracking tools",
    ],
  },
];

export function ExecutiveServicesArchitecture() {
  return (
    <section id="services" className="relative py-24 bg-[#071C3F] text-white overflow-hidden border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/15 border border-[#10B981]/40 text-[#10B981] text-xs font-black uppercase tracking-[0.25em]"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CLIENT OUTCOME ARCHITECTURE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight"
          >
            Core Advisory Practice Areas
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
          >
            Structured around the concrete outcomes your organization needs—not generic consulting departments.
          </motion.p>
        </div>

        {/* 4 Outcome Category Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {SERVICE_CATEGORIES.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                id={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative rounded-3xl bg-slate-900/90 border border-slate-800 p-8 hover:border-[#10B981]/60 hover:bg-slate-900 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] group-hover:bg-[#10B981] group-hover:text-[#071C3F] transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">
                        {item.category}
                      </span>
                    </div>
                    <span className="text-2xl font-black text-slate-700 group-hover:text-[#10B981]/40 transition-colors">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white group-hover:text-[#10B981] transition-colors leading-snug">
                    &ldquo;{item.headline}&rdquo;
                  </h3>

                  <div className="space-y-2.5 pt-2 border-t border-slate-800">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                      Tangible Deliverables &amp; Systems:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.deliverables.map((deliv, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <Link
                    href={`/services#${item.id}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#10B981] group-hover:gap-3 transition-all"
                  >
                    <span>View Category Scope</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
