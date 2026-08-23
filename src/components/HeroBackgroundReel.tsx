"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Camera } from "lucide-react";

export const HERO_BACKGROUND_IMAGES = [
  {
    src: "/authentic_boardroom_directors.jpg",
    alt: "Executive Board Directors evaluating quarterly risk heat maps",
    caption: "Executive Boardroom Governance · Decision-Ready Risk Heat Maps",
  },
  {
    src: "/authentic_executive_office_advisor.jpg",
    alt: "Managing Partner Advisory Session in Executive Suite",
    caption: "Strategic Advisory Leadership · Board Charters & Mandates",
  },
  {
    src: "/authentic_financial_analyst_dashboard.jpg",
    alt: "Advisory Consultant with Financial Analytics & Controls Screen",
    caption: "Risk & Financial Analytics · Eliminating Audit Exceptions",
  },
  {
    src: "/authentic_strategy_meeting_overhead.jpg",
    alt: "Strategy Conference & Leadership Sprint in Session",
    caption: "Interactive Strategy Sprints · Translating Mandates to Execution",
  },
  {
    src: "/authentic_executive_leadership_panel.jpg",
    alt: "Senior Partner Advisory Panel in Executive Suite",
    caption: "Partner Advisory Leadership · CMA & Governance Rigor",
  },
  {
    src: "/authentic_team_collaboration.jpg",
    alt: "Executive Committee Collaboration on Job Evaluation & OKRs",
    caption: "People & Performance Systems · Single-Point Accountability",
  },
  {
    src: "/authentic_executive_street_dialogue.jpg",
    alt: "Managing Directors in Strategy Consultation in City District",
    caption: "Regional Advisory Engagements · Nairobi & East Africa",
  },
  {
    src: "/authentic_corporate_signing_desk.jpg",
    alt: "Director Signing Statutory Returns & Companies Act Filings",
    caption: "Corporate Secretarial Integrity · 100% Statutory Compliance",
  },
  {
    src: "/authentic_advisory_one_on_one.jpg",
    alt: "One-on-One Partner Clarity Session on Operational Controls",
    caption: "20-Minute Clarity Sessions · Practical System Design",
  },
  {
    src: "/nairobi_gtc_expressway.jpg",
    alt: "Nairobi Commercial & Enterprise District Corridor",
    caption: "Nairobi Enterprise Centre · Regional Financial Capital",
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
            quality={95}
            unoptimized
            sizes="100vw"
            className="object-cover object-center filter brightness-100 contrast-[1.03]"
          />
        </motion.div>
      </AnimatePresence>

      {/* 100% Image Opacity with Soft Bottom Fade for Clean Section Transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/65 pointer-events-none" />

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
