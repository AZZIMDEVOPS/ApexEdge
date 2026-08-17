"use client";

import { motion } from "framer-motion";

interface Deliverable3DIconProps {
  size?: number;
}

// 1. Risk Registers & Heat Maps 3D Icon
export function RiskMatrix3DIcon({ size = 48 }: Deliverable3DIconProps) {
  return (
    <div className="relative flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full drop-shadow-[0_4px_12px_rgba(16,185,129,0.35)]">
        <path d="M12 18 L32 8 L52 18 L32 28 Z" fill="#0F172A" stroke="#10B981" strokeWidth="2" />
        <path d="M12 18 L12 42 L32 52 L32 28 Z" fill="#071C3F" stroke="#10B981" strokeWidth="2" />
        <path d="M52 18 L52 42 L32 52 L32 28 Z" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
        
        {/* Heatmap Grid Nodes */}
        <circle cx="24" cy="21" r="3" fill="#F43F5E">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="32" cy="18" r="3" fill="#F59E0B">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="40" cy="21" r="3" fill="#10B981">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="1.8s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

// 2. Governance Control Dashboards 3D Icon
export function Dashboard3DIcon({ size = 48 }: Deliverable3DIconProps) {
  return (
    <div className="relative flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full drop-shadow-[0_4px_12px_rgba(56,189,248,0.35)]">
        <rect x="10" y="14" width="44" height="36" rx="8" fill="#071C3F" stroke="#38BDF8" strokeWidth="2" />
        <rect x="16" y="20" width="14" height="10" rx="3" fill="#0F172A" stroke="#10B981" strokeWidth="1.5" />
        <rect x="34" y="20" width="14" height="10" rx="3" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
        
        {/* Animated KPI Graph Bars */}
        <rect x="18" y="38" width="5" height="6" fill="#10B981" rx="1">
          <animate attributeName="height" values="4;10;4" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="26" y="34" width="5" height="10" fill="#38BDF8" rx="1">
          <animate attributeName="height" values="8;14;8" dur="2.4s" repeatCount="indefinite" />
        </rect>
        <rect x="34" y="36" width="5" height="8" fill="#10B981" rx="1">
          <animate attributeName="height" values="6;12;6" dur="1.9s" repeatCount="indefinite" />
        </rect>
        <rect x="42" y="32" width="5" height="12" fill="#38BDF8" rx="1">
          <animate attributeName="height" values="10;16;10" dur="2.2s" repeatCount="indefinite" />
        </rect>
      </svg>
    </div>
  );
}

// 3. Policies & Practical SOPs 3D Icon
export function SOP3DIcon({ size = 48 }: Deliverable3DIconProps) {
  return (
    <div className="relative flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full drop-shadow-[0_4px_12px_rgba(16,185,129,0.35)]">
        <path d="M16 12 H42 L48 18 V52 H16 Z" fill="#071C3F" stroke="#10B981" strokeWidth="2" />
        <path d="M42 12 V18 H48" fill="none" stroke="#10B981" strokeWidth="2" />
        
        {/* Step Lines & Checkmarks */}
        <line x1="22" y1="24" x2="38" y2="24" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="32" x2="38" y2="32" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="40" x2="34" y2="40" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />

        {/* Shifting Document Corner Glow */}
        <circle cx="42" cy="40" r="3" fill="#10B981">
          <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

// 4. Performance Scorecards 3D Icon
export function Scorecard3DIcon({ size = 48 }: Deliverable3DIconProps) {
  return (
    <div className="relative flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full drop-shadow-[0_4px_12px_rgba(56,189,248,0.35)]">
        <circle cx="32" cy="32" r="22" fill="#071C3F" stroke="#38BDF8" strokeWidth="2" />
        <path d="M32 16 A 16 16 0 0 1 48 32 H 32 Z" fill="#10B981" opacity="0.8" />
        <circle cx="32" cy="32" r="10" fill="#0F172A" stroke="#10B981" strokeWidth="2" />
        
        {/* Pulsing Dial Indicator */}
        <line x1="32" y1="32" x2="42" y2="22" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 32 32"
            to="45 32 32"
            dur="2s"
            repeatCount="indefinite"
          />
        </line>
      </svg>
    </div>
  );
}

// 5. Data Inventories & DPIAs 3D Icon
export function DataPrivacy3DIcon({ size = 48 }: Deliverable3DIconProps) {
  return (
    <div className="relative flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full drop-shadow-[0_4px_12px_rgba(16,185,129,0.35)]">
        <path d="M32 10 L48 18 V32 C48 43 32 52 32 52 C32 52 16 43 16 32 V18 Z" fill="#071C3F" stroke="#10B981" strokeWidth="2" />
        <rect x="26" y="26" width="12" height="10" rx="2" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
        <path d="M29 26 V22 C29 20 35 20 35 22 V26" stroke="#10B981" strokeWidth="1.5" fill="none" />
        
        {/* Shield Pulse Ring */}
        <circle cx="32" cy="31" r="2" fill="#38BDF8">
          <animate attributeName="r" values="1;4;1" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

// 6. Job & Salary Structures 3D Icon
export function HRStructure3DIcon({ size = 48 }: Deliverable3DIconProps) {
  return (
    <div className="relative flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full drop-shadow-[0_4px_12px_rgba(56,189,248,0.35)]">
        {/* Org Pyramid Nodes */}
        <rect x="26" y="12" width="12" height="10" rx="3" fill="#071C3F" stroke="#10B981" strokeWidth="2" />
        <rect x="12" y="38" width="12" height="10" rx="3" fill="#071C3F" stroke="#38BDF8" strokeWidth="2" />
        <rect x="40" y="38" width="12" height="10" rx="3" fill="#071C3F" stroke="#38BDF8" strokeWidth="2" />
        
        {/* Connecting Lines */}
        <path d="M32 22 V30 H18 V38 M32 30 H46 V38" stroke="#10B981" strokeWidth="2" fill="none" />
        
        {/* Node Glow */}
        <circle cx="32" cy="17" r="2" fill="#38BDF8">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

// 7. 90-Day Execution Trackers 3D Icon
export function ExecutionTracker3DIcon({ size = 48 }: Deliverable3DIconProps) {
  return (
    <div className="relative flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full drop-shadow-[0_4px_12px_rgba(16,185,129,0.35)]">
        <rect x="12" y="16" width="40" height="36" rx="8" fill="#071C3F" stroke="#10B981" strokeWidth="2" />
        
        {/* Timeline Path & Nodes */}
        <path d="M20 38 L30 26 L40 32 L46 22" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="38" r="3" fill="#10B981" />
        <circle cx="30" cy="26" r="3" fill="#38BDF8" />
        <circle cx="40" cy="32" r="3" fill="#10B981" />
        <circle cx="46" cy="22" r="4" fill="#10B981">
          <animate attributeName="r" values="3;5;3" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

// 8. Executive Board Papers 3D Icon
export function BoardPapers3DIcon({ size = 48 }: Deliverable3DIconProps) {
  return (
    <div className="relative flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full drop-shadow-[0_4px_12px_rgba(56,189,248,0.35)]">
        {/* Layered Board Papers */}
        <rect x="14" y="20" width="30" height="36" rx="4" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" transform="rotate(-6 14 20)" />
        <rect x="20" y="14" width="30" height="36" rx="4" fill="#071C3F" stroke="#10B981" strokeWidth="2" />
        
        {/* Executive Seal Node */}
        <circle cx="35" cy="32" r="6" fill="#10B981" opacity="0.9" />
        <path d="M33 32 L35 34 L38 30" stroke="#071C3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
