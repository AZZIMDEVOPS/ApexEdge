"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, FileCheck, Users, LayoutDashboard, ArrowRight } from "lucide-react";
import Image from "next/image";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

interface SignatureEngagementProps {
  onOpenBooking: () => void;
}

const SIGNATURE_SPRINTS = [
  {
    id: "risk-sprint",
    name: "Board-Ready Risk Sprint",
    icon: ShieldCheck,
    tag: "High Impact",
    solves: "Unclear risk exposure and indecisive Board reporting.",
    does: "Deep-dive diagnostic into key operational, legal & financial risks.",
    receives: "Board-ready Risk Register, Priority Heat Map & Decision Framework.",
  },
  {
    id: "policy-sprint",
    name: "Policy-to-Practice Sprint",
    icon: FileCheck,
    tag: "Operational Focus",
    solves: "Shelf-ware policies that teams ignore in daily operations.",
    does: "Redesigns core policies into practical SOPs with embedded controls.",
    receives: "Streamlined Policy Manual, SOP Workflows & Implementation Checklist.",
  },
  {
    id: "people-sprint",
    name: "People & Performance Sprint",
    icon: Users,
    tag: "Accountability",
    solves: "Role ambiguity, missing KPIs, and unaligned teams.",
    does: "Architects clear job grading, salary bands, and performance scorecards.",
    receives: "Job Description Matrix, OKR Framework & Performance Scorecard Tool.",
  },
  {
    id: "governance-check",
    name: "Governance Health Check",
    icon: Zap,
    tag: "Board Level",
    solves: "Audit findings, regulatory compliance gaps & weak board oversight.",
    does: "Independent audit of Board charters, committees, and compliance records.",
    receives: "Governance Health Scorecard, Compliance Gap Map & Board Action Plan.",
  },
  {
    id: "control-dashboard",
    name: "Control Room Dashboard",
    icon: LayoutDashboard,
    tag: "Leadership Visibility",
    solves: "Lack of executive visibility over ongoing controls and timelines.",
    does: "Builds a centralized tracking framework for executive & Board monitoring.",
    receives: "Custom Executive Control Dashboard, KPI Tracker & Monthly Review Tool.",
  },
];

export function SignatureEngagements({ onOpenBooking }: SignatureEngagementProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#071C3F] text-white overflow-hidden border-b border-slate-800 flex flex-col justify-between py-20 lg:py-28">
      
      {/* LAYER 01 & 02: Full-Bleed Cinematic Boardroom Photography Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <Image
          src="/executive_boardroom_nairobi.jpg"
          alt="Apex Edge Executive Boardroom Advisory Session"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-105 contrast-120"
        />
        {/* LAYER 03: Edge-to-Edge Seamless Navy Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071C3F] via-[#071C3F]/85 to-[#071C3F]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071C3F] via-transparent to-[#071C3F]" />
      </div>

      {/* LAYER 04 & 05: Ambient Glow Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-25">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-[#10B981]/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 relative z-10 my-auto w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/15 border border-[#10B981]/40 text-[#10B981] text-xs font-black uppercase tracking-[0.25em] backdrop-blur-md"
          >
            <Zap className="w-3.5 h-3.5 text-[#10B981]" />
            <span>FOCUSED ENGAGEMENTS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight uppercase"
          >
            START WITH ONE CHALLENGE.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Focused engagements designed to diagnose the problem, create clarity and build practical systems.
          </motion.p>
        </div>

        {/* 5 Signature Engagements Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SIGNATURE_SPRINTS.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <SpotlightCard className="p-7 shadow-2xl backdrop-blur-xl h-full flex flex-col justify-between transition-all duration-300">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-[#10B981] group-hover:bg-[#10B981] group-hover:text-[#071C3F] transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981] text-[10px] font-black uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-white group-hover:text-[#10B981] transition-colors">
                        {item.name}
                      </h3>
                    </div>

                    <div className="space-y-3 text-xs text-slate-300">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 block mb-0.5">
                          What It Solves:
                        </span>
                        <p className="leading-relaxed">{item.solves}</p>
                      </div>

                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-sky-400 block mb-0.5">
                          What Apex Edge Does:
                        </span>
                        <p className="leading-relaxed">{item.does}</p>
                      </div>

                      <div className="pt-2 border-t border-slate-800">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#10B981] block mb-0.5">
                          What You Receive:
                        </span>
                        <p className="font-semibold text-slate-100 leading-relaxed">{item.receives}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={onOpenBooking}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-[#10B981] hover:bg-[#10B981]/10 text-xs font-extrabold text-[#10B981] transition-all group-hover:translate-x-1"
                    >
                      <span>Request Sprint Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
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
