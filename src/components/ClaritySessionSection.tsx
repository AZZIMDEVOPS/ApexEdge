"use client";

import { Calendar, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

interface ClaritySessionSectionProps {
  onOpenBooking: () => void;
}

const CLARITY_STAGES = [
  { step: "01", title: "Frame the Problem", desc: "Isolate the recurring symptom and context." },
  { step: "02", title: "Identify Underlying Issue", desc: "Pinpoint root cause in controls or governance." },
  { step: "03", title: "Prioritise Priority Gaps", desc: "Rank financial, legal, and operational risks." },
  { step: "04", title: "Map Next Actions", desc: "Define named ownership and quick wins." },
  { step: "05", title: "Receive Action Map", desc: "Walk away with your One-Page Action Map." },
];

export function ClaritySessionSection({ onOpenBooking }: ClaritySessionSectionProps) {
  return (
    <section className="relative py-24 bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#10B981]/15 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SpotlightCard className="p-8 sm:p-14 shadow-2xl border-2 border-[#10B981]/50 bg-gradient-to-br from-[#071C3F] via-slate-900 to-[#071C3F]">
          
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <SectionLabel number="07" title="START WITH CLARITY" />

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-none">
                45-MINUTE CLARITY SESSION
              </h2>

              <p className="text-lg text-slate-200 leading-relaxed font-medium">
                &ldquo;Bring us one organisational challenge. We will help you diagnose the issue and identify the decisions that matter.&rdquo;
              </p>

              {/* 5-Stage Interactive Progression Line */}
              <div className="space-y-3 pt-2">
                <div className="text-[10px] font-black uppercase tracking-widest text-[#10B981]">
                  5-STAGE SESSION DIAGNOSTIC PROGRESSION:
                </div>
                <div className="grid gap-2.5 sm:grid-cols-5 text-xs">
                  {CLARITY_STAGES.map((stg) => (
                    <div key={stg.step} className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                      <span className="text-[10px] font-black text-[#10B981]">{stg.step}</span>
                      <h4 className="font-bold text-white text-[11px] leading-tight">{stg.title}</h4>
                      <p className="text-[10px] text-slate-400 font-normal leading-snug">{stg.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary CTA Button */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  onClick={onOpenBooking}
                  className="bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black rounded-full px-8 py-4 text-sm sm:text-base shadow-2xl shadow-[#10B981]/30 flex items-center gap-3 transition-all hover:scale-105"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Your Clarity Session →</span>
                </Button>
                <span className="text-xs text-slate-400 italic">No retainer. No open-ended commitment.</span>
              </div>
            </div>

            {/* Zero Risk Commitment Box */}
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
                      <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
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
        </SpotlightCard>
      </div>
    </section>
  );
}
