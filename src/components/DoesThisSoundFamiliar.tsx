"use client";

import { motion } from "framer-motion";
import { AlertCircle, FileWarning, Users, FileSpreadsheet, ShieldAlert, RefreshCw } from "lucide-react";

const PAIN_POINTS = [
  {
    icon: FileWarning,
    title: "Recurring Audit Findings",
    desc: "The same governance or internal audit issues keep surfacing year after year without resolution.",
  },
  {
    icon: AlertCircle,
    title: "Unenforced Policies",
    desc: "Policies exist on paper or sitting on shelves, but management and teams rarely follow them in practice.",
  },
  {
    icon: Users,
    title: "Unclear Team Accountability",
    desc: "Teams operate without explicit ownership, leading to finger-pointing when key targets or controls fail.",
  },
  {
    icon: FileSpreadsheet,
    title: "Indecisive Board Papers",
    desc: "Board reports present heavy operational noise without clear decision frameworks or risk prioritization.",
  },
  {
    icon: ShieldAlert,
    title: "Weak Internal Controls",
    desc: "Financial, procurement, or operational workflows lack structured approval controls and oversight.",
  },
  {
    icon: RefreshCw,
    title: "Recurring Performance Gaps",
    desc: "People and performance problems recur constantly because job structures and KPIs lack alignment.",
  },
];

export function DoesThisSoundFamiliar() {
  return (
    <section className="relative py-24 bg-[#071C3F] text-white overflow-hidden border-b border-slate-800">
      {/* Background Accent Mesh */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-400 text-xs font-black uppercase tracking-[0.25em]"
          >
            <AlertCircle className="w-3.5 h-3.5" />
            <span>ORGANISATIONAL REALITY</span>
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
            Organisational problems rarely stay isolated. When the same issues keep returning, the real problem is usually the system behind them.
          </motion.p>
        </div>

        {/* Sophisticated Editorial Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PAIN_POINTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative rounded-2xl bg-slate-900/80 border border-slate-800 p-8 hover:border-[#10B981]/50 hover:bg-slate-900 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[#10B981] w-fit group-hover:bg-[#10B981] group-hover:text-[#071C3F] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#10B981] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-semibold">
                  <span>Symptom #{idx + 1}</span>
                  <span className="text-rose-400 font-bold group-hover:text-[#10B981] transition-colors">Root System Deficit →</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
