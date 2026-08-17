"use client";

import { motion } from "framer-motion";
import { Landmark, ShieldCheck, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Governance3DIcon } from "@/components/icons/PracticeArea3DIcons";

interface DedicatedBoardSectionProps {
  onOpenBooking: () => void;
}

export function DedicatedBoardSection({ onOpenBooking }: DedicatedBoardSectionProps) {
  return (
    <section className="relative py-28 bg-[#071C3F] text-white overflow-hidden border-b border-slate-800">
      
      {/* Background Boardroom Photography Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        <Image
          src="/nairobi_enterprise_skyline.jpg"
          alt="Executive Boardroom Governance Advisory"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-110 contrast-120"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071C3F] via-[#071C3F]/90 to-[#071C3F]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <SectionLabel number="06" title="BOARD ADVISORY" icon={Landmark} />

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none uppercase"
            >
              FOR BOARDS.
            </motion.h2>

            {/* Large Core Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-2 border-l-4 border-[#10B981] pl-6 py-2 text-2xl sm:text-3xl font-black text-slate-100 leading-snug"
            >
              <p>See the risks.</p>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#10B981]">
                Understand the controls.
              </p>
              <p>Know what management is doing.</p>
              <p className="text-[#10B981]">Make the decisions that matter.</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-base text-slate-300 font-normal leading-relaxed max-w-xl"
            >
              Apex Edge equips Board Chairs, Audit Committee Leads, and Independent Directors with clear risk registers, Mwongozo compliance checks, and decision-ready Board packs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <Button
                onClick={onOpenBooking}
                className="bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black rounded-full px-8 py-4 text-sm shadow-xl shadow-[#10B981]/20 flex items-center gap-3 transition-all hover:scale-105"
              >
                <span>Talk to Apex Edge →</span>
              </Button>
            </motion.div>
          </div>

          {/* Boardroom Feature Spotlight Box */}
          <div className="lg:col-span-5">
            <SpotlightCard className="p-8 space-y-6 shadow-2xl backdrop-blur-xl border-[#10B981]/40">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <Governance3DIcon size={44} />
                  <h3 className="text-lg font-black text-white">Board Advisory Standard</h3>
                </div>
                <ShieldCheck className="w-5 h-5 text-[#10B981]" />
              </div>

              <div className="space-y-4 text-xs text-slate-200">
                {[
                  "Independent Governance & Mwongozo Code Audits",
                  "Board Charter & Committee Terms Redesign",
                  "Quarterly Executive Control & Risk Dashboards",
                  "Decision Frameworks for Strategic Investments",
                  "Director Induction & Governance Refresh",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span className="font-semibold leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
