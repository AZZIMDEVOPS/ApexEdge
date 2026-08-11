"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ExecutiveFinalCTAProps {
  onOpenBooking: () => void;
}

export function ExecutiveFinalCTA({ onOpenBooking }: ExecutiveFinalCTAProps) {
  const handleSeeHowItWorks = () => {
    const el = document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-24 bg-[#071C3F] text-white overflow-hidden border-b border-slate-800">
      
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-blue-600/20 via-[#10B981]/10 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10 text-center space-y-8">
        
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] text-xs font-black uppercase tracking-[0.25em]"
        >
          <ShieldCheck className="w-4 h-4" />
          <span>TAKE THE FIRST STEP</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight"
        >
          One recurring organisational problem can reveal a much bigger system weakness.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed"
        >
          Bring us the problem. We will help you find the root cause and map the way forward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <Button
            onClick={onOpenBooking}
            className="bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black rounded-full px-8 py-4 text-sm sm:text-base shadow-2xl shadow-[#10B981]/30 flex items-center gap-2 transition-all hover:scale-105"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Your 45-Minute Clarity Session →</span>
          </Button>

          <Button
            onClick={handleSeeHowItWorks}
            variant="outline"
            className="border-slate-700 bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:text-white font-bold rounded-full px-7 py-4 text-sm flex items-center gap-2 transition-all"
          >
            <span>See How Apex Edge Works</span>
            <ArrowRight className="w-4 h-4 text-[#10B981]" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
