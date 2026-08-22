"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ChevronLeft, ChevronRight, Sparkles, Building2, Users2, LineChart, LucideIcon } from "lucide-react";

interface HeroSlide {
  id: number;
  image: string;
  badge: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: "/authentic_boardroom_directors.jpg",
    badge: "Boardroom Governance & Risk",
    title: "Decision-Ready 15-Page Board Packs & Risk Heat Maps",
    subtitle: "Empowering decisive fiduciary oversight aligned with Mwongozo Code & CMA Guidelines.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    image: "/authentic_executive_office_advisor.jpg",
    badge: "Executive Advisory Leadership",
    title: "Strategic Advisory for Boards & Executive Leadership",
    subtitle: "Partnering with Tier-1 Banks, State Corporations, and Regional Asset Developers across East Africa.",
    icon: Building2,
  },
  {
    id: 3,
    image: "/authentic_strategy_meeting_overhead.jpg",
    badge: "Working Sprints in Practice",
    title: "Co-Designing Operational SOPs & Authorization Matrices",
    subtitle: "Hands-on diagnostic sprints that embed internal controls into daily digital workflows.",
    icon: LineChart,
  },
  {
    id: 4,
    image: "/authentic_team_collaboration.jpg",
    badge: "People & Performance Systems",
    title: "Single-Point Named Ownership & Strategy-Aligned OKRs",
    subtitle: "Connecting executive strategy directly to weekly departmental performance scorecards.",
    icon: Users2,
  },
  {
    id: 5,
    image: "/authentic_executive_leadership_panel.jpg",
    badge: "Regional Grounding & Trust",
    title: "Statutory Rigor Across East Africa",
    subtitle: "Deep mastery of Kenyan Companies Act 2015, Data Protection Act 2019, and CBK guidelines.",
    icon: Sparkles,
  },
];

export function HeroVisualShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const activeSlide = HERO_SLIDES[currentIndex];
  const IconComp = activeSlide.icon;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl bg-[#071C3F] my-4 group"
    >
      {/* Visual Slide Frame */}
      <div className="relative h-[340px] sm:h-[440px] lg:h-[480px] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.image}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={activeSlide.image}
              alt={activeSlide.title}
              fill
              priority
              className="object-cover object-center filter brightness-105 contrast-105"
            />
            {/* Cinematic Gradient Overlays for High Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071C3F] via-[#071C3F]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071C3F]/60 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Top Floating Badge Bar */}
        <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-20 pointer-events-none">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071C3F]/85 border border-[#10B981]/50 backdrop-blur-md text-white text-xs font-bold shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <IconComp className="w-3.5 h-3.5 text-[#10B981]" />
            <span className="uppercase tracking-widest text-[10px] text-[#10B981] font-black">
              {activeSlide.badge}
            </span>
          </div>

          <div className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-[11px] font-bold text-slate-300">
            {currentIndex + 1} / {HERO_SLIDES.length}
          </div>
        </div>

        {/* Bottom Editorial Content Overlay */}
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20 space-y-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="p-5 sm:p-6 rounded-2xl bg-[#071C3F]/90 border border-slate-700/80 backdrop-blur-xl space-y-1.5 shadow-xl text-left"
            >
              <h3 className="text-lg sm:text-2xl font-black text-white leading-snug">
                {activeSlide.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                {activeSlide.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Left & Right Interactive Navigation Controls */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-[#071C3F]/80 hover:bg-[#10B981] hover:text-[#071C3F] text-white border border-slate-700 backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 shadow-xl"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-[#071C3F]/80 hover:bg-[#10B981] hover:text-[#071C3F] text-white border border-slate-700 backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 shadow-xl"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Interactive Pagination Dots / Timeline Strip */}
      <div className="bg-slate-900 px-6 py-3 border-t border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ${
                currentIndex === idx
                  ? "w-8 bg-[#10B981]"
                  : "w-2 bg-slate-700 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>

        <span className="text-[11px] font-semibold text-slate-400">
          Auto-Advancing Advisory Showcase · Click to Navigate
        </span>
      </div>
    </div>
  );
}
