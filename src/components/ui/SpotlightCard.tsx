"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  onClick?: () => void;
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(16, 185, 129, 0.12)",
  onClick,
}: SpotlightCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`relative rounded-3xl bg-[#071C3F]/90 border border-slate-800/90 overflow-hidden transition-all duration-300 hover:border-[#10B981]/60 hover:shadow-2xl hover:-translate-y-1 group ${className}`}
    >
      {/* Radial Cursor Spotlight Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
