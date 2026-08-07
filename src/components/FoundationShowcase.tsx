"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Award,
  X,
  Sparkles,
  HeartHandshake,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface ValueDetail {
  id: string;
  name: string;
  desc: string;
}

const CORE_VALUES_LIST: ValueDetail[] = [
  {
    id: "integrity",
    name: "Integrity",
    desc: "Unyielding ethical standards, transparency, and accountability in every client engagement.",
  },
  {
    id: "excellence",
    name: "Excellence",
    desc: "Relentless mastery, precision turnaround, and world-class quality across secretarial and legal advisory.",
  },
  {
    id: "innovation",
    name: "Innovation",
    desc: "Adopting modern digital governance tools, automation, and agile compliance methodologies.",
  },
  {
    id: "accountability",
    name: "Accountability",
    desc: "Taking ownership of statutory deadlines, regulatory accuracy, and client governance outcomes.",
  },
  {
    id: "client-focus",
    name: "Client Focus",
    desc: "Bespoke advisory packages tailored to your unique corporate structure and strategic goals.",
  },
];

export function FoundationShowcase() {
  const [selectedValue, setSelectedValue] = useState<ValueDetail | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring" as const, stiffness: 110 },
    },
  };

  return (
    <section id="why-us" className="relative py-24 sm:py-32 bg-slate-950 text-white overflow-hidden selection:bg-[#C9A227] selection:text-[#071C3F]">
      
      {/* Background Ambient Radial Glow & Geometric Architecture Lines */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-[#C9A227]/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(7,28,63,0.4)_0%,rgba(2,6,23,0.95)_100%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A227]/15 border border-[#C9A227]/40 text-[#C9A227] text-xs font-black uppercase tracking-[0.25em]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR FOUNDATION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight"
          >
            Driven by Purpose. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-[#C9A227]">
              Defined by Excellence.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
          >
            &ldquo;Our mission, vision, and values guide every advisory engagement, helping organizations navigate complexity with confidence, integrity, and strategic insight.&rdquo;
          </motion.p>
        </div>

        {/* 3 Equal Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {/* Card 1: Our Mission */}
          <motion.div variants={itemVariants} className="perspective">
            <Card className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-[#071C3F] via-slate-900 to-[#071C3F] text-white shadow-xl hover:shadow-2xl hover:border-[#C9A227]/70 transition-all duration-500 cursor-pointer group flex flex-col justify-between h-full hover:-translate-y-2.5">
              
              {/* Metallic Gold Animated Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate-800 group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-[#C9A227] group-hover:to-transparent transition-all duration-700 z-30" />

              {/* Blended Editorial Photography */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <img
                  src="/african_executive_portrait.png"
                  alt="African corporate strategy executive advisory partner"
                  className="absolute right-0 top-0 h-full w-[60%] object-cover opacity-25 filter group-hover:scale-108 group-hover:opacity-40 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#071C3F] via-[#071C3F]/95 to-transparent z-10" />
              </div>

              <CardContent className="relative z-20 p-8 sm:p-10 space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="rounded-2xl bg-amber-500/20 border border-amber-500/40 p-4 w-fit text-[#C9A227] group-hover:rotate-6 transition-transform">
                    <Zap className="h-7 w-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A227]">Purpose &amp; Impact</span>
                  <h3 className="text-2xl font-black text-white">Our Mission</h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    To empower clients with top-tier, comprehensive solutions that enhance business performance, navigate legal complexities, and foster sustainable growth through innovative, tech-enabled advisory services.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <div className="inline-flex items-center gap-2 text-sm font-extrabold text-[#C9A227] group-hover:gap-3.5 transition-all">
                    <span>Learn Mission Strategy</span>
                    <span>→</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2: Our Vision */}
          <motion.div variants={itemVariants} className="perspective">
            <Card className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-[#071C3F] via-slate-900 to-[#071C3F] text-white shadow-xl hover:shadow-2xl hover:border-blue-500/70 transition-all duration-500 cursor-pointer group flex flex-col justify-between h-full hover:-translate-y-2.5">
              
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate-800 group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-blue-400 group-hover:to-transparent transition-all duration-700 z-30" />

              {/* Blended Photography - Nairobi Skyline */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                  alt="Nairobi modern corporate cityscape and skyscraper headquarters"
                  className="absolute right-0 top-0 h-full w-[60%] object-cover opacity-20 filter grayscale group-hover:scale-108 group-hover:opacity-35 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#071C3F] via-[#071C3F]/95 to-transparent z-10" />
              </div>

              <CardContent className="relative z-20 p-8 sm:p-10 space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="rounded-2xl bg-blue-600/20 border border-blue-500/40 p-4 w-fit text-blue-400 group-hover:rotate-6 transition-transform">
                    <Award className="h-7 w-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">Direction &amp; Future</span>
                  <h3 className="text-2xl font-black text-white">Our Vision</h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    To be Kenya&apos;s preferred provider of world-class company secretarial, governance, legal, and advisory services, driving business excellence and compliance across Africa.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <div className="inline-flex items-center gap-2 text-sm font-extrabold text-blue-400 group-hover:gap-3.5 transition-all">
                    <span>Explore Vision &amp; Goals</span>
                    <span>→</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 3: Core Values with Interactive Badges */}
          <motion.div variants={itemVariants} className="perspective">
            <Card className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-[#071C3F] via-slate-900 to-[#071C3F] text-white shadow-xl hover:shadow-2xl hover:border-[#C9A227]/70 transition-all duration-500 group flex flex-col justify-between h-full hover:-translate-y-2.5">
              
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate-800 group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-[#C9A227] group-hover:to-transparent transition-all duration-700 z-30" />

              {/* Blended Photography - Leadership Team */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <img
                  src="/african_female_executive.png"
                  alt="African executive director leadership & ethical corporate values"
                  className="absolute right-0 top-0 h-full w-[60%] object-cover opacity-25 filter group-hover:scale-108 group-hover:opacity-40 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#071C3F] via-[#071C3F]/95 to-transparent z-10" />
              </div>

              <CardContent className="relative z-20 p-8 sm:p-10 space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="rounded-2xl bg-amber-500/20 border border-amber-500/40 p-4 w-fit text-[#C9A227] group-hover:rotate-6 transition-transform">
                    <HeartHandshake className="h-7 w-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A227]">Guiding Principles</span>
                  <h3 className="text-2xl font-black text-white">Core Values</h3>

                  {/* Interactive Value Badges / Chips */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {CORE_VALUES_LIST.map((val) => (
                      <motion.button
                        key={val.id}
                        whileHover={{ scale: 1.06, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedValue(val)}
                        className="px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-[#C9A227]/40 text-xs font-bold text-[#C9A227] hover:bg-[#C9A227] hover:text-[#071C3F] transition-all shadow-md flex items-center gap-1.5"
                      >
                        <Sparkles className="w-3 h-3" />
                        <span>{val.name}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <div className="inline-flex items-center gap-2 text-sm font-extrabold text-[#C9A227] group-hover:gap-3.5 transition-all">
                    <span>View Value Standards Above</span>
                    <span>→</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      {/* Interactive Value Detail Modal */}
      <AnimatePresence>
        {selectedValue && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedValue(null)}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-[#071C3F] border border-[#C9A227]/40 text-white shadow-2xl z-10 p-8 space-y-6"
            >
              <button
                onClick={() => setSelectedValue(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#C9A227]/20 border border-[#C9A227]/40 text-[#C9A227]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C9A227]">Core Value Standard</span>
                  <h3 className="text-2xl font-black text-white">{selectedValue.name}</h3>
                </div>
              </div>
              <p className="text-slate-300 text-base leading-relaxed">{selectedValue.desc}</p>
              <div className="pt-4 border-t border-slate-800">
                <Button
                  onClick={() => setSelectedValue(null)}
                  className="w-full rounded-full bg-[#C9A227] hover:bg-amber-400 text-[#071C3F] font-bold py-3 text-xs"
                >
                  Close Standard Window
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
