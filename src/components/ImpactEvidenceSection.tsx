"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Scale, FileText, Users, Building2, MapPin } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const EVIDENCE_STATS = [
  {
    value: "45 Min",
    label: "Structured Diagnostic Session",
    desc: "A focused executive working session to pinpoint the true operational bottleneck before any scope is defined.",
    icon: Scale,
  },
  {
    value: "5",
    label: "Specialized Practice Areas",
    desc: "Governance, People & Performance, Controls & SOPs, Leadership Capability, and Data Protection & Privacy.",
    icon: Building2,
  },
  {
    value: "14+",
    label: "Regulatory & Statutory Frameworks",
    desc: "Deep compliance grounding across Mwongozo Code, Kenya DP Act 2019, CBK Prudential Guidelines, and CMA Codes.",
    icon: ShieldCheck,
  },
  {
    value: "100%",
    label: "Named Execution Ownership",
    desc: "Every system, register, and approval workflow is tied to an explicit, accountable executive role.",
    icon: Users,
  },
  {
    value: "1–2 Pages",
    label: "Actionable SOP Architecture",
    desc: "Replacing dense, unread 250-page binders with digital, daily operational workflows that teams actually use.",
    icon: FileText,
  },
  {
    value: "Nairobi",
    label: "East African Advisory Hub",
    desc: "Firmly anchored in Nairobi, Kenya, delivering high-touch advisory across private and public sectors.",
    icon: MapPin,
  },
];

export function ImpactEvidenceSection() {
  return (
    <section className="relative py-24 bg-slate-50 text-slate-900 overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <SectionLabel number="05" title="EVIDENCE & PROOF" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight"
          >
            Proof Grounded in Real Operational Rigor
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            We don&apos;t invent marketing hype. Here is the verifiable foundation behind our advisory standard.
          </motion.p>
        </div>

        {/* 6 Bold Evidence Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EVIDENCE_STATS.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="rounded-3xl bg-white border border-slate-200 p-8 space-y-4 hover:border-[#10B981] transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl sm:text-4xl font-black text-[#071C3F]">
                      {stat.value}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700">
                      <IconComp className="w-5 h-5 text-[#10B981]" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-950 leading-snug">
                    {stat.label}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {stat.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] font-semibold text-[#071C3F]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span className="text-slate-600">Apex Edge Advisory Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
