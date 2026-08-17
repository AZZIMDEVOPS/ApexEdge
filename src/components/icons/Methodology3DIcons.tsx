"use client";

import { motion } from "framer-motion";

interface IconProps {
  className?: string;
  size?: number;
}

// 1. Diagnose — Magnifying Lens + Diagnostic Network
export function Diagnose3DIcon({ className = "", size = 48 }: IconProps) {
  return (
    <motion.div
      whileHover={{ rotateY: 15, rotateX: -10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="diagGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#071C3F" />
          </linearGradient>
        </defs>

        {/* Outer Lens Frame */}
        <circle cx="28" cy="28" r="18" fill="url(#diagGrad)" stroke="#10B981" strokeWidth="2.5" />
        <circle cx="28" cy="28" r="12" fill="#071C3F" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" />
        
        {/* Handle */}
        <path d="M41 41L54 54" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
        
        {/* Center Target Point */}
        <circle cx="28" cy="28" r="4" fill="#10B981" />
      </svg>
    </motion.div>
  );
}

// 2. Design — Geometric Architectural Blueprint
export function Design3DIcon({ className = "", size = 48 }: IconProps) {
  return (
    <motion.div
      whileHover={{ rotateY: 15, rotateX: -10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="desGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#071C3F" />
          </linearGradient>
        </defs>

        {/* Blueprint Plate */}
        <rect x="10" y="10" width="44" height="44" rx="8" fill="url(#desGrad)" stroke="#38BDF8" strokeWidth="2" />
        
        {/* Architectural Grid Lines */}
        <rect x="18" y="18" width="28" height="28" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="32" cy="32" r="8" fill="none" stroke="#10B981" strokeWidth="2" />
        
        <line x1="32" y1="14" x2="32" y2="50" stroke="#FFFFFF" strokeWidth="1" />
        <line x1="14" y1="32" x2="50" y2="32" stroke="#FFFFFF" strokeWidth="1" />
      </svg>
    </motion.div>
  );
}

// 3. Implement — Connected Operational System Blocks
export function Implement3DIcon({ className = "", size = 48 }: IconProps) {
  return (
    <motion.div
      whileHover={{ rotateY: 15, rotateX: -10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="impGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#071C3F" />
          </linearGradient>
        </defs>

        {/* Interlocked System Cube Blocks */}
        <rect x="12" y="24" width="18" height="18" rx="4" fill="url(#impGrad)" stroke="#10B981" strokeWidth="2" />
        <rect x="34" y="24" width="18" height="18" rx="4" fill="url(#impGrad)" stroke="#38BDF8" strokeWidth="2" />
        <rect x="23" y="10" width="18" height="18" rx="4" fill="#071C3F" stroke="#10B981" strokeWidth="2" />

        {/* Interlocking Beams */}
        <line x1="21" y1="24" x2="28" y2="19" stroke="#FFFFFF" strokeWidth="2" />
        <line x1="43" y1="24" x2="36" y2="19" stroke="#FFFFFF" strokeWidth="2" />
      </svg>
    </motion.div>
  );
}

// 4. Measure — Performance Dial & Gauge
export function Measure3DIcon({ className = "", size = 48 }: IconProps) {
  return (
    <motion.div
      whileHover={{ rotateY: 15, rotateX: -10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mesGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#071C3F" />
          </linearGradient>
        </defs>

        {/* Outer Circular Dial Frame */}
        <circle cx="32" cy="32" r="22" fill="url(#mesGrad)" stroke="#60A5FA" strokeWidth="2.5" />
        <path d="M18 38C18 30 24 24 32 24C40 24 46 30 46 38" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3" />
        
        {/* Gauge Needle */}
        <line x1="32" y1="34" x2="42" y2="20" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
        <circle cx="32" cy="34" r="4" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" />
      </svg>
    </motion.div>
  );
}
