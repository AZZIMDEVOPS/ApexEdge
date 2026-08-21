"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

interface SectionLabelProps {
  number: string;
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  color?: string;
}

export function SectionLabel({ number, title, icon: Icon = ShieldCheck, color = "text-[#10B981]" }: SectionLabelProps) {
  return (
    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-lg">
      <Icon className={`w-3.5 h-3.5 ${color}`} />
      <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-300">
        <span className={color}>{number}</span> / {title}
      </span>
    </div>
  );
}
