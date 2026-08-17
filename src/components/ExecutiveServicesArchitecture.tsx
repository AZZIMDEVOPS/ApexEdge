"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  Governance3DIcon,
  People3DIcon,
  Controls3DIcon,
  Leadership3DIcon,
  DataProtection3DIcon,
} from "@/components/icons/PracticeArea3DIcons";

export interface ServiceCategory {
  id: string;
  num: string;
  category: string;
  headline: string;
  description: string;
  Icon3D: React.ComponentType<{ size?: number }>;
  deliverables: string[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "governance-risk",
    num: "01",
    category: "GOVERNANCE & RISK",
    headline: "Give Your Board Clearer Visibility of Risk and Performance.",
    description: "Structure board risk registers, independent governance audits, and decision frameworks for clear executive oversight.",
    Icon3D: Governance3DIcon,
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
    description: "Architect role structures, salary grading bands, and OKR performance scorecards linked directly to strategic priorities.",
    Icon3D: People3DIcon,
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
    headline: "Turn Policies Into Systems That Actually Work.",
    description: "Convert static policy documents into practical SOPs with embedded approval controls across finance, HR, and operations.",
    Icon3D: Controls3DIcon,
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
    description: "Practical management execution training that equips executive teams with toolkits, decision frameworks, and action plans.",
    Icon3D: Leadership3DIcon,
    deliverables: [
      "Leadership & management systems",
      "Executive decision-making frameworks",
      "Practical management capability training",
      "Execution tracking tools",
    ],
  },
  {
    id: "data-protection",
    num: "05",
    category: "DATA PROTECTION & PRIVACY",
    headline: "Protect Data. Strengthen Trust. Stay Compliant.",
    description: "Helping organisations understand their data protection obligations, strengthen privacy practices and build practical systems for responsible handling of personal data.",
    Icon3D: DataProtection3DIcon,
    deliverables: [
      "Data inventories & mapping",
      "Privacy policies & DPIAs",
      "Data processing agreements (DPAs)",
      "Data breach response workflows",
    ],
  },
];

export function ExecutiveServicesArchitecture() {
  return (
    <section id="services" className="relative py-24 bg-[#071C3F] text-white overflow-hidden border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <SectionLabel number="03" title="CORE PRACTICE AREAS" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight uppercase"
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
            Apex Edge helps organisations turn governance, people, control, performance and data protection challenges into practical, Board-ready systems.
          </motion.p>
        </div>

        {/* Practice Area Cards Grid with Custom 3D Icons & Spotlight Containers */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CATEGORIES.map((item, idx) => {
            const Icon3DComp = item.Icon3D;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <SpotlightCard className="p-8 h-full flex flex-col justify-between space-y-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon3DComp size={52} />
                        <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">
                          {item.category}
                        </span>
                      </div>
                      <span className="text-2xl font-black text-slate-700 group-hover:text-[#10B981]/50 transition-colors">
                        {item.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-white group-hover:text-[#10B981] transition-colors leading-snug">
                      &ldquo;{item.headline}&rdquo;
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    <div className="space-y-2.5 pt-2 border-t border-slate-800">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                        Tangible Deliverables &amp; Systems:
                      </span>
                      <div className="grid grid-cols-1 gap-2">
                        {item.deliverables.map((deliv, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                    <Link
                      href={`/services#${item.id}`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#10B981] group-hover:gap-3 transition-all"
                    >
                      <span>Explore Practice Area →</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
