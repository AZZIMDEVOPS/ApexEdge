"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";

export const HERO_BACKGROUND_IMAGES = [
  {
    src: "/nairobi_gtc_expressway.jpg",
    alt: "Nairobi Commercial & Enterprise District Towers",
    caption: "Nairobi Enterprise Centre · GTC & Expressway Corridor",
  },
  {
    src: "/african_board_signing.jpg",
    alt: "Executive Board Team Reviewing and Signing Strategic Charters",
    caption: "Board Decision Charters · 15-Page Decision Board Packs",
  },
  {
    src: "/board_whiteboard_presentation.jpg",
    alt: "Advisory Strategy Presentation on Boardroom Whiteboard",
    caption: "Interactive Strategy Sprints · Translating Mandates to Execution",
  },
  {
    src: "/advisory_report_consultation.jpg",
    alt: "Senior Partner and Analyst Consulting on Financial & Risk Report",
    caption: "Controls & Risk Oversight · Eliminating Audit Exceptions",
  },
  {
    src: "/board_directors_panel.jpg",
    alt: "Board Directors in Executive Strategic Session",
    caption: "Executive Boardroom Governance · Decision-Ready Risk Heat Maps",
  },
  {
    src: "/strategy_whiteboard_briefing.jpg",
    alt: "Advisory Partner Mapping Performance Systems on Whiteboard",
    caption: "Working Sprints in Practice · Co-Designing Operational SOPs",
  },
  {
    src: "/outdoor_advisory_discussion.jpg",
    alt: "Corporate Advisors in Discussion Overlooking Nairobi Skyline",
    caption: "Regional Advisory Network · Nairobi & East Africa HQ",
  },
  {
    src: "/nairobi_sunset_golden.jpg",
    alt: "Golden Sunset over Nairobi Corporate High-Rises",
    caption: "East African Advisory Grounding · Mwongozo & Statutory Rigor",
  },
];

export function HeroBackgroundReel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_BACKGROUND_IMAGES.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const currentImage = HERO_BACKGROUND_IMAGES[currentIndex];

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage.src}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-100 contrast-105"
          />
        </motion.div>
      </AnimatePresence>

      {/* Luminous Clean White Overlay Gradients for Razor-Sharp Navy Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-white/82 to-white/98" />
      <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-white/50 to-white/95" />

      {/* Subtle Live Photo Indicator in Top Right Corner */}
      <div className="absolute top-6 right-6 z-10 pointer-events-auto hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/90 backdrop-blur-md text-[11px] font-bold text-slate-800 shadow-md">
        <Camera className="w-3.5 h-3.5 text-[#10B981]" />
        <span>{currentImage.caption}</span>
      </div>

      {/* Bottom Timeline Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-auto flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-md">
        {HERO_BACKGROUND_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Jump to image ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === idx
                ? "w-6 bg-[#10B981]"
                : "w-1.5 bg-slate-300 hover:bg-slate-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
