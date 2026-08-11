"use client";

import { motion } from "framer-motion";
import { Check, X, Sparkles, Layers, FileCode, Target, Clock, ShieldCheck, UserCheck } from "lucide-react";

export function SystemsNotReports() {
  return (
    <section className="relative py-24 bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* Positioning Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-950/60 via-[#071C3F] to-slate-950 border border-blue-500/30 p-8 sm:p-12 mb-16 text-center space-y-4 shadow-2xl relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] text-xs font-black uppercase tracking-[0.25em]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR CORE POSITIONING</span>
          </motion.div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
            WE BUILD SYSTEMS, NOT JUST REPORTS.
          </h2>

          <p className="max-w-4xl mx-auto text-lg sm:text-xl text-slate-200 font-medium leading-relaxed italic">
            &ldquo;Apex Edge turns governance, people, control and performance problems into Board-ready systems that leaders can actually use.&rdquo;
          </p>
        </div>

        {/* Side-by-Side Comparison Table */}
        <div className="grid gap-8 lg:grid-cols-2 items-stretch">
          
          {/* TRADITIONAL CONSULTING */}
          <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">The Old Approach</span>
              <h3 className="text-2xl font-black text-slate-300">TRADITIONAL CONSULTING</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                Focuses on theoretical advice and endless advisory retainer hours without operational embedding.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800">
              {[
                "Theoretical Recommendations",
                "Static PDF Reports & Decks",
                "Unending Planning Meetings",
                "Generic One-Size-Fits-All Frameworks",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="p-1 rounded-full bg-slate-800 text-slate-500">
                    <X className="w-4 h-4" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* APEX EDGE APPROACH */}
          <div className="rounded-3xl bg-gradient-to-br from-[#071C3F] via-slate-900 to-[#071C3F] border-2 border-[#10B981] p-8 space-y-6 shadow-2xl flex flex-col justify-between relative">
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#10B981] text-[#071C3F] text-xs font-black uppercase">
              APEX EDGE WAY
            </div>

            <div className="space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#10B981]">The Outcome-Driven Approach</span>
              <h3 className="text-2xl font-black text-white">APEX EDGE SYSTEMS</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Focuses on actionable controls, accountable owners, clear tools and measurable business outcomes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              {[
                { label: "Controls", icon: ShieldCheck },
                { label: "Tools", icon: Layers },
                { label: "Owners", icon: UserCheck },
                { label: "Timelines", icon: Clock },
                { label: "Decisions", icon: Target },
                { label: "Measurable Actions", icon: FileCode },
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800 text-white font-bold text-xs">
                    <div className="p-1.5 rounded-lg bg-[#10B981]/20 text-[#10B981]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
