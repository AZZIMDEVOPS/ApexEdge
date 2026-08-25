"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Users, Briefcase, UploadCloud, Search, ShieldCheck } from "lucide-react";
import { RecruitmentTalentHub } from "@/components/RecruitmentTalentHub";

interface RecruitmentTalentHubModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: "candidate" | "employer";
}

export function RecruitmentTalentHubModal({
  isOpen,
  onClose,
  defaultTab = "candidate"
}: RecruitmentTalentHubModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
        
        {/* Modal Window Dialog Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full max-w-6xl my-auto max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative text-white"
        >
          {/* Top Modal Window Header */}
          <div className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#10B981]/20 text-[#10B981] flex items-center justify-center border border-[#10B981]/30">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#10B981]">
                    APEXEDGE ADVISORY LTD
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">· Recruitment &amp; Talent Hub</span>
                </div>
                <h2 className="text-lg font-black text-white leading-tight">
                  Executive Talent Portal &amp; Candidate Search Engine
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body: Embedded Recruitment Hub Engine */}
          <div className="p-4 sm:p-8">
            <RecruitmentTalentHub defaultTab={defaultTab} />
          </div>

          {/* Modal Footer Note */}
          <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              Confidential &amp; Verified Executive Recruitment · ApexEdge Advisory Ltd
            </span>
            <span className="font-mono text-[11px] text-slate-400">
              Press ESC or click X to exit pop-up
            </span>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
