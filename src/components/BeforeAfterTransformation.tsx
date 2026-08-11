"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2, ArrowRight, ShieldCheck, AlertTriangle } from "lucide-react";

const BEFORE_ITEMS = [
  "Recurring problems returning after every audit",
  "Unclear ownership and responsibility gaps",
  "Reactive crisis management across business units",
  "Policies sitting on shelves without enforcement",
  "Weak internal controls and compliance exposure",
  "Limited visibility for leadership and the Board",
];

const AFTER_ITEMS = [
  "Visible risks diagnosed at root-cause level",
  "Clear controls embedded in daily workflows",
  "Named owners held accountable for outcomes",
  "Measurable actions linked to strategic KPIs",
  "Practical systems that management actually uses",
  "Better Board decisions based on actionable clarity",
];

export function BeforeAfterTransformation() {
  const [activeTab, setActiveTab] = useState<"after" | "before">("after");

  return (
    <section className="relative py-24 bg-[#071C3F] text-white overflow-hidden border-b border-slate-800">
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
            <span>TRANSFORMATION MATRIX</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight"
          >
            You Don&apos;t Need Another Report. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-[#10B981]">
              You Need Clarity on What Must Change.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
          >
            Traditional consulting delivers static PDFs. Apex Edge builds functional management systems that transform your operational state.
          </motion.p>
        </div>

        {/* Side-by-Side Comparison Matrix */}
        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* BEFORE CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-slate-950/80 border border-rose-500/30 p-8 space-y-6 shadow-2xl relative overflow-hidden group"
          >
            <div className="flex items-center justify-between border-b border-rose-500/20 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-400">Current Operational State</span>
                  <h3 className="text-2xl font-black text-white">BEFORE APEX EDGE</h3>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-extrabold">STATUS QUO</span>
            </div>

            <div className="space-y-4">
              {BEFORE_ITEMS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* AFTER CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-[#071C3F] via-slate-900 to-[#071C3F] border border-[#10B981]/50 p-8 space-y-6 shadow-2xl relative overflow-hidden group shadow-[0_0_40px_rgba(16,185,129,0.15)]"
          >
            <div className="flex items-center justify-between border-b border-[#10B981]/30 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#10B981]">Board-Ready System State</span>
                  <h3 className="text-2xl font-black text-white">AFTER APEX EDGE</h3>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] text-xs font-extrabold">TRANSFORMED</span>
            </div>

            <div className="space-y-4">
              {AFTER_ITEMS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-slate-100 text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
