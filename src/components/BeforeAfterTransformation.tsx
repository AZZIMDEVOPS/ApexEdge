"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, XCircle, Sparkles } from "lucide-react";
import { ApexEdgeLogo } from "@/components/ApexEdgeLogo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

interface TransformationPair {
  id: number;
  before: string;
  after: string;
}

const TRANSFORMATION_PAIRS: TransformationPair[] = [
  {
    id: 1,
    before: "Recurring audit findings returning after every audit cycle.",
    after: "Visible risk heatmaps diagnosed & mitigated at root-cause level.",
  },
  {
    id: 2,
    before: "Unclear ownership & responsibility gaps across leadership teams.",
    after: "Named owners held strictly accountable for execution & OKRs.",
  },
  {
    id: 3,
    before: "Reactive crisis management & firefighting across business units.",
    after: "Clear controls & SOP approval limits embedded in daily workflows.",
  },
  {
    id: 4,
    before: "Policies sitting on office shelves without operational enforcement.",
    after: "Practical management systems that teams actively use daily.",
  },
  {
    id: 5,
    before: "Unmapped personal data & unmanaged statutory privacy breach risk.",
    after: "Documented data inventories, DPIAs & statutory breach protocols.",
  },
  {
    id: 6,
    before: "Weak internal financial controls & compliance vulnerability exposure.",
    after: "Measurable actions linked directly to executive KPIs & scorecards.",
  },
  {
    id: 7,
    before: "Limited risk visibility for executive leadership and the Board.",
    after: "High-confidence Board decisions backed by actionable clarity.",
  },
];

export function BeforeAfterTransformation() {
  const [sliderPos, setSliderPos] = useState<number>(75); // 0 to 100
  const [activePairId, setActivePairId] = useState<number | null>(null);
  const [mouseParallax, setMouseParallax] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const offsetY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMouseParallax({ x: offsetX * 8, y: offsetY * 8 });
  };

  return (
    <section className="relative min-h-screen w-full bg-[#071C3F] text-white py-20 lg:py-28 overflow-hidden border-b border-slate-800 flex flex-col justify-between">
      {/* Background Ambient Glow & Grid Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#10B981]/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:36px_36px] opacity-20" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-10 lg:space-y-14 relative z-10 my-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <SectionLabel number="03" title="ORGANISATIONAL TRANSFORMATION" icon={Sparkles} />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight uppercase"
          >
            BEFORE VS. AFTER APEX EDGE
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
          >
            Slide the control below to see how Apex Edge transforms chaotic operational friction into Board-ready system clarity.
          </motion.p>
        </div>

        {/* Interactive Transformation Slider Bar */}
        <div className="max-w-xl mx-auto space-y-3 bg-slate-900/90 border border-slate-800 p-6 rounded-3xl shadow-2xl backdrop-blur-xl relative z-20">
          <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider">
            <span className="text-rose-400 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              <span>BEFORE: Operational Noise</span>
            </span>
            <span className="text-[#10B981] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>AFTER: Board-Ready Clarity</span>
            </span>
          </div>

          <div className="relative flex items-center">
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="w-full h-3 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-[#10B981] focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-between text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
            <span>0% Chaos</span>
            <span className="text-[#10B981] font-black">{sliderPos}% Transformed</span>
            <span>100% System Control</span>
          </div>
        </div>

        {/* 3D Interactive Transformation Matrix & Central Engine */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="grid gap-8 lg:grid-cols-12 items-center relative"
        >
          {/* BEFORE PANEL (5 Cols) */}
          <div className="lg:col-span-5">
            <SpotlightCard
              className={`p-8 space-y-6 shadow-2xl transition-all duration-300 ${
                sliderPos < 50
                  ? "border-rose-500/60 ring-2 ring-rose-500/20 opacity-100 bg-slate-950/90"
                  : "border-slate-800 opacity-60 bg-slate-950/80"
              }`}
            >
              <div className="flex items-center justify-between border-b border-rose-500/20 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-400">
                      Current Operational State
                    </span>
                    <h3 className="text-2xl font-black text-white">BEFORE APEX EDGE</h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-extrabold">
                  STATUS QUO
                </span>
              </div>

              <div className="space-y-3.5">
                {TRANSFORMATION_PAIRS.map((pair) => {
                  const isHovered = activePairId === pair.id;
                  return (
                    <div
                      key={pair.id}
                      onMouseEnter={() => setActivePairId(pair.id)}
                      onMouseLeave={() => setActivePairId(null)}
                      className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-200 cursor-pointer ${
                        isHovered
                          ? "bg-rose-500/15 border border-rose-500/40 text-white translate-x-1"
                          : "text-slate-300 hover:bg-slate-900"
                      }`}
                    >
                      <XCircle className={`w-5 h-5 shrink-0 mt-0.5 ${isHovered ? "text-rose-400 animate-pulse" : "text-rose-500/70"}`} />
                      <span className="text-xs sm:text-sm font-normal leading-relaxed">{pair.before}</span>
                    </div>
                  );
                })}
              </div>
            </SpotlightCard>
          </div>

          {/* CENTRAL APEX EDGE TRANSFORMATION AXIS (LOGO ONLY PERFECTLY CENTERED) */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center my-4 lg:my-0 z-20">
            <motion.div
              animate={{ x: mouseParallax.x, y: mouseParallax.y }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative flex items-center justify-center cursor-pointer group"
            >
              {/* Revolving Orbital Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-dashed border-[#10B981]/50 pointer-events-none"
              />
              
              {/* Central Glass Pod Housing ONLY Official White Apex Edge Logo (Centered, Zero Writing) */}
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[#071C3F] via-slate-900 to-[#071C3F] border-2 border-[#10B981] shadow-[0_0_45px_rgba(16,185,129,0.35)] flex items-center justify-center p-4 backdrop-blur-xl transition-transform duration-300 group-hover:scale-110">
                <div className="scale-75 sm:scale-95 transform flex items-center justify-center">
                  <ApexEdgeLogo variant="default" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* AFTER PANEL (5 Cols) */}
          <div className="lg:col-span-5">
            <SpotlightCard
              className={`p-8 space-y-6 shadow-2xl transition-all duration-300 ${
                sliderPos >= 50
                  ? "border-[#10B981] ring-2 ring-[#10B981]/30 opacity-100 bg-gradient-to-br from-[#071C3F] via-slate-900 to-[#071C3F] shadow-[0_0_50px_rgba(16,185,129,0.2)]"
                  : "border-slate-800 opacity-60 bg-slate-950/80"
              }`}
            >
              <div className="flex items-center justify-between border-b border-[#10B981]/30 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#10B981]">
                      Board-Ready System State
                    </span>
                    <h3 className="text-2xl font-black text-white">AFTER APEX EDGE</h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] text-xs font-extrabold">
                  TRANSFORMED
                </span>
              </div>

              <div className="space-y-3.5">
                {TRANSFORMATION_PAIRS.map((pair) => {
                  const isHovered = activePairId === pair.id;
                  return (
                    <div
                      key={pair.id}
                      onMouseEnter={() => setActivePairId(pair.id)}
                      onMouseLeave={() => setActivePairId(null)}
                      className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-200 cursor-pointer ${
                        isHovered
                          ? "bg-[#10B981]/20 border border-[#10B981]/40 text-white translate-x-1"
                          : "text-slate-300 hover:bg-slate-900"
                      }`}
                    >
                      <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${isHovered ? "text-[#10B981] animate-pulse" : "text-[#10B981]/80"}`} />
                      <span className="text-xs sm:text-sm font-semibold leading-relaxed">{pair.after}</span>
                    </div>
                  );
                })}
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
