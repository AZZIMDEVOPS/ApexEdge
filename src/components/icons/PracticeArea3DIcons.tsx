"use client";

import { motion } from "framer-motion";

interface IconProps {
  className?: string;
  size?: number;
}

// 1. Governance & Risk — Isometric Shield + Connected Control Points
export function Governance3DIcon({ className = "", size = 48 }: IconProps) {
  return (
    <motion.div
      whileHover={{ rotateY: 15, rotateX: -10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="govShield" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="50%" stopColor="#071C3F" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
          <linearGradient id="govNode" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>

        {/* Outer Isometric Shield Outline */}
        <path
          d="M32 6L54 16V34C54 47.2 44.6 57.1 32 60C19.4 57.1 10 47.2 10 34V16L32 6Z"
          fill="url(#govShield)"
          stroke="#10B981"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Inner Connected Governance Control Network */}
        <circle cx="32" cy="24" r="5" fill="url(#govNode)" stroke="#FFFFFF" strokeWidth="1.5" />
        <circle cx="22" cy="40" r="4" fill="url(#govNode)" stroke="#FFFFFF" strokeWidth="1.5" />
        <circle cx="42" cy="40" r="4" fill="url(#govNode)" stroke="#FFFFFF" strokeWidth="1.5" />

        {/* Connecting Beams */}
        <line x1="32" y1="24" x2="22" y2="40" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 3" />
        <line x1="32" y1="24" x2="42" y2="40" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 3" />
        <line x1="22" y1="40" x2="42" y2="40" stroke="#10B981" strokeWidth="1.5" />
      </svg>
    </motion.div>
  );
}

// 2. People & Performance — Organizational Nodes + Performance Graph
export function People3DIcon({ className = "", size = 48 }: IconProps) {
  return (
    <motion.div
      whileHover={{ rotateY: 15, rotateX: -10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pplGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#071C3F" />
          </linearGradient>
        </defs>

        {/* Background Depth Plate */}
        <rect x="8" y="12" width="48" height="42" rx="10" fill="url(#pplGrad)" stroke="#38BDF8" strokeWidth="2" />

        {/* Performance Bar Chart Rising */}
        <rect x="16" y="38" width="6" height="10" rx="2" fill="#10B981" />
        <rect x="26" y="30" width="6" height="18" rx="2" fill="#38BDF8" />
        <rect x="36" y="24" width="6" height="24" rx="2" fill="#10B981" />

        {/* People Node Head & Apex Arrow */}
        <circle cx="48" cy="20" r="5" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" />
        <path d="M42 44L48 38L54 44" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.div>
  );
}

// 3. Controls & Policies — Layered Document + Control Sliders
export function Controls3DIcon({ className = "", size = 48 }: IconProps) {
  return (
    <motion.div
      whileHover={{ rotateY: 15, rotateX: -10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ctrlGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#071C3F" />
          </linearGradient>
        </defs>

        {/* Backing Document Layer */}
        <rect x="16" y="8" width="36" height="44" rx="6" fill="#071C3F" stroke="#34D399" strokeWidth="1.5" />
        {/* Front Document Plate */}
        <rect x="10" y="14" width="38" height="44" rx="6" fill="url(#ctrlGrad)" stroke="#10B981" strokeWidth="2" />

        {/* Control Sliders */}
        <line x1="18" y1="26" x2="38" y2="26" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="30" cy="26" r="3.5" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.5" />

        <line x1="18" y1="36" x2="38" y2="36" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="22" cy="36" r="3.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.5" />

        <line x1="18" y1="46" x2="38" y2="46" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="34" cy="46" r="3.5" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.5" />
      </svg>
    </motion.div>
  );
}

// 4. Leadership & Capability — Elevated Leadership Apex Node + Team
export function Leadership3DIcon({ className = "", size = 48 }: IconProps) {
  return (
    <motion.div
      whileHover={{ rotateY: 15, rotateX: -10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="leadGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#071C3F" />
          </linearGradient>
        </defs>

        {/* Pyramid / Hierarchy Base */}
        <polygon points="32,8 54,48 10,48" fill="url(#leadGrad)" stroke="#60A5FA" strokeWidth="2" strokeLinejoin="round" />

        {/* Apex Leader Node */}
        <circle cx="32" cy="18" r="6" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
        {/* Team Sub-Nodes */}
        <circle cx="22" cy="40" r="4" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.5" />
        <circle cx="42" cy="40" r="4" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.5" />

        <line x1="32" y1="24" x2="22" y2="36" stroke="#FFFFFF" strokeWidth="1.5" />
        <line x1="32" y1="24" x2="42" y2="36" stroke="#FFFFFF" strokeWidth="1.5" />
      </svg>
    </motion.div>
  );
}

// 5. Data Protection & Privacy — Glass Shield + Data Node
export function DataProtection3DIcon({ className = "", size = 48 }: IconProps) {
  return (
    <motion.div
      whileHover={{ rotateY: 15, rotateX: -10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="dataShield" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="50%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#071C3F" />
          </linearGradient>
        </defs>

        {/* Glass Outer Shield */}
        <path
          d="M32 8L52 17V33C52 45 43.5 54 32 57C20.5 54 12 45 12 33V17L32 8Z"
          fill="url(#dataShield)"
          fillOpacity="0.85"
          stroke="#10B981"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Central Encrypted Data Core Node */}
        <rect x="25" y="28" width="14" height="16" rx="3" fill="#071C3F" stroke="#FFFFFF" strokeWidth="1.5" />
        <path d="M28 28V23C28 20.8 29.8 19 32 19C34.2 19 36 20.8 36 23V28" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="35" r="2" fill="#10B981" />
      </svg>
    </motion.div>
  );
}
