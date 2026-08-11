"use client";

import { motion } from "framer-motion";
import { Calendar, ShieldCheck, MapPin, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ClaritySessionSectionProps {
  onOpenBooking: () => void;
}

export function ClaritySessionSection({ onOpenBooking }: ClaritySessionSectionProps) {
  return (
    <section className="relative py-24 bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#10B981]/15 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="rounded-3xl bg-gradient-to-br from-[#071C3F] via-slate-900 to-[#071C3F] border-2 border-[#10B981]/50 p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] text-xs font-black uppercase tracking-[0.25em]"
              >
                <Sparkles className="w-4 h-4" />
                <span>LOW-RISK FIRST STEP</span>
              </motion.div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
                START WITH CLARITY.
              </h2>

              <p className="text-lg text-slate-200 leading-relaxed font-medium">
                Bring us one organisational challenge. We will help you diagnose the issue and identify the decisions that matter.
              </p>

              {/* Clarity Session Output Card */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-black text-[#10B981] uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Immediate Tangible Value</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  After the Clarity Session, receive a <strong className="text-white">One-Page Action Map</strong> highlighting your priority gaps, quick wins and recommended next actions.
                </p>
              </div>

              {/* Primary CTA Button */}
              <div className="pt-2">
                <Button
                  onClick={onOpenBooking}
                  className="bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black rounded-full px-8 py-4 text-sm sm:text-base shadow-2xl shadow-[#10B981]/30 flex items-center gap-3 transition-all hover:scale-105"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Your 45-Minute Clarity Session →</span>
                </Button>
              </div>
            </div>

            {/* Risk Reversal Guarantee Box (Section 17) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-slate-950/90 border border-emerald-500/30 p-7 space-y-5 shadow-2xl">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                  <ShieldCheck className="w-6 h-6 text-[#10B981]" />
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#10B981]">Risk Reversal</span>
                    <h3 className="text-base font-black text-white">Our Zero-Risk Commitment</h3>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs text-slate-200">
                  {[
                    "No retainer commitment required.",
                    "No open-ended advisory engagement.",
                    "Start with one focused organizational challenge.",
                    "Keep the One-Page Action Map whether or not you proceed with Apex Edge.",
                  ].map((rule, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span className="font-semibold leading-relaxed">{rule}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px] font-bold text-slate-400 text-center">
                  100% Executive Confidentiality Guaranteed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
