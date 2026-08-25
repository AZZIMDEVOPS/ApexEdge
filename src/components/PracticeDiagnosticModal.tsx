"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PracticeDiagnosticEngine, DiagnosticType } from "@/components/PracticeDiagnostics";

interface PracticeDiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: DiagnosticType;
}

export function PracticeDiagnosticModal({ isOpen, onClose, defaultType = "governance-risk" }: PracticeDiagnosticModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="w-full max-w-5xl my-auto max-h-[92vh] overflow-y-auto rounded-3xl"
        >
          <PracticeDiagnosticEngine initialType={defaultType} onClose={onClose} />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
