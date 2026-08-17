"use client";

import { motion } from "framer-motion";

interface IconProps {
  className?: string;
  size?: number;
}

// 1. Boards & Directors — Executive Board Table + Governance Decision Node
export function BoardsDirectors3DIcon({ className = "", size = 48 }: IconProps) {
  return (
    <motion.div
      whileHover={{ rotateY: 15, rotateX: -10, scale: 1.06 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="boardGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="60%" stopColor="#071C3F" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
        </defs>

        {/* Isometric Board Table Plate */}
        <ellipse cx="32" cy="36" rx="24" ry="12" fill="url(#boardGrad)" stroke="#10B981" strokeWidth="2" />
        
        {/* Central Decision Core Node */}
        <circle cx="32" cy="30" r="5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.5" />
        
        {/* Surrounding Director Nodes around Table */}
        <circle cx="16" cy="34" r="3.5" fill="#10B981" stroke="#FFFFFF" strokeWidth="1" />
        <circle cx="48" cy="34" r="3.5" fill="#10B981" stroke="#FFFFFF" strokeWidth="1" />
        <circle cx="24" cy="44" r="3.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1" />
        <circle cx="40" cy="44" r="3.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1" />
        <circle cx="32" cy="20" r="4" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.5" />

        {/* Governance Oversight Arc */}
        <path d="M12 28C12 18 20 10 32 10C44 10 52 18 52 28" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>
    </motion.div>
  );
}

// 2. CEOs & Executives — Elevated Leadership Apex Node + Directional Strategy Arrow
export function CEOsExecs3DIcon({ className = "", size = 48 }: IconProps) {
  return (
    <motion.div
      whileHover={{ rotateY: 15, rotateX: -10, scale: 1.06 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ceoGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#071C3F" />
          </linearGradient>
        </defs>

        {/* Strategic Pathway Foundation Plate */}
        <polygon points="32,6 56,54 8,54" fill="url(#ceoGrad)" stroke="#38BDF8" strokeWidth="2" strokeLinejoin="round" />

        {/* Directional Execution Vector Arrow */}
        <path d="M32 46V18M32 18L24 26M32 18L40 26" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        {/* CEO Apex Node */}
        <circle cx="32" cy="14" r="5" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" />
      </svg>
    </motion.div>
  );
}

// 3. Senior Management — Hierarchy Pyramid + Interconnected Management Nodes
export function SeniorMgmt3DIcon({ className = "", size = 48 }: IconProps) {
  return (
    <motion.div
      whileHover={{ rotateY: 15, rotateX: -10, scale: 1.06 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mgmtGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#071C3F" />
          </linearGradient>
        </defs>

        {/* Tiered Management Layers */}
        <rect x="22" y="10" width="20" height="12" rx="3" fill="url(#mgmtGrad)" stroke="#10B981" strokeWidth="1.5" />
        <rect x="14" y="28" width="36" height="12" rx="3" fill="url(#mgmtGrad)" stroke="#38BDF8" strokeWidth="1.5" />
        <rect x="8" y="46" width="48" height="12" rx="3" fill="#071C3F" stroke="#10B981" strokeWidth="1.5" />

        {/* Connecting Control Beams */}
        <line x1="32" y1="22" x2="32" y2="28" stroke="#FFFFFF" strokeWidth="2" />
        <line x1="22" y1="40" x2="18" y2="46" stroke="#FFFFFF" strokeWidth="1.5" />
        <line x1="42" y1="40" x2="46" y2="46" stroke="#FFFFFF" strokeWidth="1.5" />
      </svg>
    </motion.div>
  );
}

// 4. Functional Leaders — Interconnected Department Nodes & Workflows
export function FunctionalLeaders3DIcon({ className = "", size = 48 }: IconProps) {
  return (
    <motion.div
      whileHover={{ rotateY: 15, rotateX: -10, scale: 1.06 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="funcGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#071C3F" />
          </linearGradient>
        </defs>

        {/* Interconnected Department Orbit Nodes */}
        <circle cx="32" cy="16" r="6" fill="url(#funcGrad)" stroke="#60A5FA" strokeWidth="2" />
        <circle cx="16" cy="44" r="6" fill="url(#funcGrad)" stroke="#10B981" strokeWidth="2" />
        <circle cx="48" cy="44" r="6" fill="url(#funcGrad)" stroke="#38BDF8" strokeWidth="2" />

        {/* Cross-Department Workflow Lines */}
        <line x1="32" y1="22" x2="16" y2="38" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" />
        <line x1="32" y1="22" x2="48" y2="38" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" />
        <line x1="22" y1="44" x2="42" y2="44" stroke="#10B981" strokeWidth="2" />
      </svg>
    </motion.div>
  );
}

// 5. Organisations & Growing Firms — Architectural Structure + Network Core
export function Organisations3DIcon({ className = "", size = 48 }: IconProps) {
  return (
    <motion.div
      whileHover={{ rotateY: 15, rotateX: -10, scale: 1.06 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="orgGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#071C3F" />
          </linearGradient>
        </defs>

        {/* Architectural Enterprise Frame */}
        <path d="M12 52V24L32 10L52 24V52H12Z" fill="url(#orgGrad)" stroke="#10B981" strokeWidth="2" strokeLinejoin="round" />
        
        {/* Central Institutional Network Lines */}
        <line x1="32" y1="10" x2="32" y2="52" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="12" y1="36" x2="52" y2="36" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3" />

        {/* Central Core Network Pulse */}
        <circle cx="32" cy="36" r="5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.5" />
      </svg>
    </motion.div>
  );
}
