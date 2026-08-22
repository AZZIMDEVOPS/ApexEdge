"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppPopUI() {
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.04, boxShadow: "0 20px 45px rgba(37,99,235,0.45)" },
    tap: { scale: 0.96 },
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Main WhatsApp Button */}
      <motion.a
        href="https://wa.me/254799565125"
        target="_blank"
        rel="noopener noreferrer"
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        className="inline-flex items-center gap-3.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 px-9 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/30 hover:shadow-2xl transition-all duration-300 border border-blue-400/30"
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="relative flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-slate-950"></span>
          </span>
        </motion.div>
        <span className="tracking-wide font-extrabold">GET STARTED</span>
      </motion.a>

      {/* Clean Online Status & Direct Line Subtext */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-4 text-center text-sm text-slate-300"
      >
        <p className="font-medium leading-relaxed flex items-center justify-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-blue-300 font-semibold">Online Now</span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-300">Direct Line: +254 799 565125 / 0728 626323</span>
        </p>
      </motion.div>
    </div>
  );
}
