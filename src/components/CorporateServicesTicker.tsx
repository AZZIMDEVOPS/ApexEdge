"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Scale,
  Users,
  ClipboardCheck,
  TrendingUp,
  ShieldCheck,
  Globe2,
  Briefcase,
  Cpu,
  Monitor,
  Handshake,
  BarChart3,
  FileText,
  Building,
  Rocket,
  LucideIcon,
} from "lucide-react";

export interface TickerService {
  id: string;
  icon: LucideIcon;
  name: string;
  desc: string;
  targetHref: string;
}

const TICKER_SERVICES: TickerService[] = [
  {
    id: "gov",
    icon: Building2,
    name: "Corporate Governance",
    desc: "Helping organizations strengthen leadership, accountability, and sustainable growth.",
    targetHref: "#services",
  },
  {
    id: "legal",
    icon: Scale,
    name: "Legal Advisory",
    desc: "Expert legal counsel, commercial contracts, and regulatory compliance advisory.",
    targetHref: "#services",
  },
  {
    id: "hr",
    icon: Users,
    name: "HR Consulting",
    desc: "Talent management, payroll administration, employment policies, and workforce restructuring.",
    targetHref: "#services",
  },
  {
    id: "sec",
    icon: ClipboardCheck,
    name: "Company Secretarial",
    desc: "BRS filings, annual returns, board documentation, and statutory registers maintenance.",
    targetHref: "#services",
  },
  {
    id: "strat",
    icon: TrendingUp,
    name: "Business Strategy",
    desc: "Tailored growth strategies, market expansion, and enterprise advisory.",
    targetHref: "#services",
  },
  {
    id: "comp",
    icon: ShieldCheck,
    name: "Compliance Management",
    desc: "Ensuring 100% statutory adherence under Kenyan regulatory frameworks.",
    targetHref: "#services",
  },
  {
    id: "immig",
    icon: Globe2,
    name: "Immigration Services",
    desc: "Class D, G, K work permits, special passes, alien IDs, and expatriate support.",
    targetHref: "#services",
  },
  {
    id: "reg",
    icon: Briefcase,
    name: "Business Registration",
    desc: "End-to-end incorporation, KRA PIN, NSSF, SHA, business permits, and CR12 issuance.",
    targetHref: "#services",
  },
  {
    id: "opt",
    icon: Cpu,
    name: "Business Process Optimization",
    desc: "Streamlining operational workflows and enhancing organizational efficiency.",
    targetHref: "#services",
  },
  {
    id: "dt",
    icon: Monitor,
    name: "Digital Transformation",
    desc: "Modern digital governance tools, cloud architecture, and automation advisory.",
    targetHref: "#services",
  },
  {
    id: "ca",
    icon: Handshake,
    name: "Corporate Advisory",
    desc: "Strategic counsel for corporate transactions, joint ventures, and partnerships.",
    targetHref: "#services",
  },
  {
    id: "rm",
    icon: BarChart3,
    name: "Risk Management",
    desc: "Enterprise risk assessment, internal controls, and mitigation frameworks.",
    targetHref: "#services",
  },
  {
    id: "rc",
    icon: FileText,
    name: "Regulatory Compliance",
    desc: "Navigating CMA, CBK, IRA, Data Protection Act, and sectoral licensing.",
    targetHref: "#services",
  },
  {
    id: "cs",
    icon: Building,
    name: "Corporate Structuring",
    desc: "Bespoke organizational architecture, holding entities, and group restructuring.",
    targetHref: "#services",
  },
  {
    id: "bgc",
    icon: Rocket,
    name: "Business Growth Consulting",
    desc: "Driving sustainable enterprise performance and regional market competitiveness.",
    targetHref: "#services",
  },
];

export function CorporateServicesTicker() {
  const [hoveredService, setHoveredService] = useState<TickerService | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleServiceClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Duplicate items for infinite marquee loop
  const marqueeItems = [...TICKER_SERVICES, ...TICKER_SERVICES];

  return (
    <div
      className="relative w-full h-16 sm:h-20 bg-[#071C3F] border-t border-[#10B981]/40 shadow-xl overflow-hidden z-30 selection:bg-[#10B981] selection:text-[#071C3F]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setHoveredService(null);
      }}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => {
        setIsPaused(false);
        setHoveredService(null);
      }}
    >
      {/* Top Animated Emerald Shimmer Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-slate-900 overflow-hidden z-20">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="w-full h-full bg-gradient-to-r from-transparent via-[#10B981] to-transparent"
        />
      </div>

      {/* Left & Right Ambient Fades */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#071C3F] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#071C3F] to-transparent z-10 pointer-events-none" />

      {/* Continuous Marquee Rail */}
      <div className="relative w-full h-full flex items-center overflow-hidden">
        <motion.div
          className="flex items-center gap-6 sm:gap-8 whitespace-nowrap cursor-pointer"
          animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 90,
              ease: "linear",
            },
          }}
        >
          {marqueeItems.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredService?.id === item.id;

            return (
              <div
                key={`${item.id}-${index}`}
                onMouseEnter={() => setHoveredService(item)}
                onClick={() => handleServiceClick(item.targetHref)}
                className="relative inline-flex items-center gap-2.5 px-4 py-2 rounded-xl transition-all duration-300 group"
              >
                {/* Icon with Emerald Glow */}
                <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-[#10B981] group-hover:bg-[#10B981] group-hover:text-[#071C3F] group-hover:border-[#10B981] transition-all shadow-sm">
                  <Icon className="w-4 h-4" />
                </div>

                {/* Service Name */}
                <span className="text-xs sm:text-sm font-extrabold text-white group-hover:text-[#10B981] transition-colors tracking-wide">
                  {item.name}
                </span>

                {/* Emerald Separator */}
                <span className="ml-4 text-[#10B981]/50 font-black text-sm select-none">◆</span>

                {/* Interactive Tooltip Card on Hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-64 p-3 rounded-2xl bg-slate-950/95 border border-[#10B981]/50 text-white shadow-2xl backdrop-blur-xl z-50 pointer-events-none text-center"
                    >
                      <div className="flex items-center justify-center gap-1.5 text-[11px] font-black text-[#10B981] uppercase tracking-wider mb-1">
                        <Icon className="w-3.5 h-3.5" />
                        <span>{item.name}</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-normal font-normal">
                        {item.desc}
                      </p>
                      <div className="mt-1 text-[9px] font-bold text-emerald-400">Click to explore section →</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
