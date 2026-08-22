"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Zap, Award, HeartHandshake, Building2, Calendar, CheckCircle2, Target, Lock, Compass, MapPin, ArrowRight, Sparkles, Check } from "lucide-react";
import { ExecutiveHeaderNav } from "@/components/ExecutiveHeaderNav";
import { CorporateFooter } from "@/components/CorporateFooter";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ApexAIAssistant } from "@/components/ApexAIAssistant";
import { OriginStoryTimeline } from "@/components/OriginStoryTimeline";
import { LeadershipTeamSection } from "@/components/LeadershipTeamSection";
import { ImpactEvidenceSection } from "@/components/ImpactEvidenceSection";
import { Button } from "@/components/ui/button";
import { ThreeDCard, ThreeDItem } from "@/components/ui/ThreeDCard";

const ETHICAL_STANDARDS = [
  {
    num: "01",
    icon: Zap,
    title: "Fixed Outcome Guarantees",
    tagline: "No Retainer Friction",
    desc: "We do not bill for open-ended hours or produce passive slide decks. Every advisory engagement is tied to fixed, verified deliverables, explicit milestones, and measurable Board-level outcomes.",
    deliverable: "Fixed Deliverables & Transparent Scope",
    accent: "#10B981",
  },
  {
    num: "02",
    icon: Target,
    title: "Single-Point Named Ownership",
    tagline: "Explicit RACI Charters",
    desc: "Advisory recommendations fail when responsibility is diffused across committees. We assign every operational control and performance metric to a named single-point owner with clear sign-off authority.",
    deliverable: "Named Accountability Matrices",
    accent: "#0284C7",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "1–2 Page Digital SOP Standard",
    tagline: "Zero Shelf-Ware Binders",
    desc: "A 200-page policy manual sitting unread on an executive shelf is a corporate liability. We condense complex governance and financial policies into concise 1–2 page daily workflows teams actually use.",
    deliverable: "Actionable Operational Workflows",
    accent: "#059669",
  },
  {
    num: "04",
    icon: Award,
    title: "Uncompromising Statutory Rigor",
    tagline: "East African Mastery",
    desc: "Deep compliance with the Kenyan Companies Act 2015, Mwongozo Code for State Corporations, CBK Prudential Guidelines, CMA Governance Code, and the Kenya Data Protection Act 2019.",
    deliverable: "14+ Statutory Frameworks Supported",
    accent: "#6366F1",
  },
];

const PHILOSOPHY_SLIDES = [
  {
    src: "/authentic_team_collaboration.jpg",
    alt: "Apex Edge Advisory senior executive team in alignment session",
    tag: "East African Regional Context",
    title: "Headquartered in Nairobi, Kenya",
    caption: "Grounded in local statutory rigor, regional compliance, and executive realities.",
  },
  {
    src: "/authentic_boardroom_directors.jpg",
    alt: "Executive Board Directors evaluating quarterly risk heat maps",
    tag: "Board Governance & Oversight",
    title: "Direct Boardroom Fiduciary Alignment",
    caption: "Replacing bulky 300-page packs with 15-page high-signal decision papers.",
  },
  {
    src: "/authentic_strategy_meeting_overhead.jpg",
    alt: "Executive Strategy & Cross-Functional Transformation Sprints",
    tag: "Executive Alignment & Clarity",
    title: "Single-Point Named Accountability",
    caption: "Eliminating cross-functional bottlenecks with transparent role ownership.",
  },
  {
    src: "/authentic_financial_analyst_dashboard.jpg",
    alt: "Senior Advisory Consultant with Financial Analytics & Controls",
    tag: "Controls & SOPs in Practice",
    title: "1–2 Page Digital SOP Routines",
    caption: "Translating static policy manuals into automated daily workflows.",
  },
  {
    src: "/authentic_corporate_signing_desk.jpg",
    alt: "Corporate secretarial advisor executing statutory filings and board resolutions",
    tag: "Statutory & Secretarial Rigor",
    title: "Companies Act 2015 Compliance",
    caption: "Ensuring 100% statutory validity, certified resolutions, and BRS filings.",
  },
  {
    src: "/authentic_executive_office_advisor.jpg",
    alt: "Senior Managing Partner and Advisory Directors in strategic consultation",
    tag: "Leadership & Execution Velocity",
    title: "90-Day Execution Roadmaps",
    caption: "Equipping executive teams with practical decision toolkits and sprint cadence.",
  },
  {
    src: "/authentic_executive_leadership_panel.jpg",
    alt: "Partner Advisory Leadership Panel at Apex Edge",
    tag: "Institutional Governance",
    title: "Independent Executive Advisory",
    caption: "Uncompromising rigor aligned with Mwongozo and CMA governance codes.",
  },
  {
    src: "/authentic_senior_partner_briefing.jpg",
    alt: "Senior Governance Practitioner leading Board simulation workshop",
    tag: "Capability Building",
    title: "Director Governance Masterclasses",
    caption: "Interactive simulations that translate mandates into daily executive execution.",
  },
];

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isSlidePaused, setIsSlidePaused] = useState(false);

  // Auto-advance slideshow every 4.5 seconds with pause on hover
  useEffect(() => {
    if (isSlidePaused) return;

    const timer = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % PHILOSOPHY_SLIDES.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isSlidePaused]);

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#10B981] selection:text-[#071C3F]">
      <ExecutiveHeaderNav onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 1. EDITORIAL HERO ON CLEAN WHITE CANVAS WITH SCROLL REVEAL */}
      <section className="relative py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 overflow-hidden border-b border-slate-200">
        
        {/* Subtle Background Geometry */}
        <div className="absolute inset-0 pointer-events-none -z-10 opacity-40 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10 relative z-10 space-y-7 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#071C3F] text-xs font-black uppercase tracking-[0.25em] shadow-xs"
          >
            <Compass className="w-4 h-4 text-[#10B981]" />
            <span>ABOUT APEX EDGE ADVISORY</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-tight"
          >
            We bridge the gap between high-level strategy and <br />
            <span className="text-[#071C3F] underline decoration-[#10B981] decoration-4 underline-offset-8">
              daily operational execution.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="max-w-3xl mx-auto text-base sm:text-xl text-slate-700 font-normal leading-relaxed"
          >
            Headquartered in Nairobi, Kenya, Apex Edge Advisory Limited is a strategic governance, risk, and internal control firm dedicated to building practical, Board-ready systems across East Africa.
          </motion.p>
        </div>
      </section>

      {/* 2. OUR CORE CONVICTION WITH 3D CARD PARALLAX & AUTOMATED IMAGE SHOWCASE */}
      <section className="py-28 bg-white text-slate-900 border-b border-slate-200 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 grid gap-12 lg:grid-cols-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">
              OUR FOUNDATIONAL PHILOSOPHY
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 leading-tight">
              Why We Rejected Slide-Deck Consulting
            </h2>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                In 2018, our founding partners noticed a chronic failure mode across East African corporations: leadership teams were spending millions on 250-page strategy documents and governance binders that ended up sitting on executive shelves while daily audit exceptions, procurement bottlenecks, and role ambiguities persisted unabated.
              </p>
              <p>
                We built Apex Edge on the conviction that <strong className="text-slate-950 font-black">a recommendation without an operational tool is a liability.</strong> If a policy cannot be summarized into a 1-page digital workflow and assigned to a named owner with a measurable metric, it will not be executed.
              </p>
            </div>

            <div className="pt-2 space-y-3 text-xs sm:text-sm font-bold text-slate-800">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Hands-on advisory across Tier-1 Banks, State Corporations &amp; Regional Developers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Deep mastery of Kenyan Companies Act 2015, Data Protection Act 2019, CMA &amp; Mwongozo</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Zero open-ended retainer lock-in: Every engagement has fixed deliverables and named outcomes</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column Automated Photo Carousel Card */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-5 h-full"
            onMouseEnter={() => setIsSlidePaused(true)}
            onMouseLeave={() => setIsSlidePaused(false)}
          >
            <div className="relative h-96 sm:h-[500px] rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-950 hover:shadow-2xl transition-shadow duration-300 group">
              {/* Automated Crossfading Image Reel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={PHILOSOPHY_SLIDES[activeSlideIndex].src}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={PHILOSOPHY_SLIDES[activeSlideIndex].src}
                    alt={PHILOSOPHY_SLIDES[activeSlideIndex].alt}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover object-center filter brightness-100 contrast-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071C3F] via-[#071C3F]/35 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Slide Counter & Indicators */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-slate-950/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                {PHILOSOPHY_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlideIndex(idx)}
                    aria-label={`Jump to slide ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activeSlideIndex
                        ? "w-6 bg-[#10B981]"
                        : "w-1.5 bg-white/40 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>

              {/* Active Context Card with Dynamic Synchronized Content */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-gradient-to-br from-[#071C3F]/95 to-[#09224E]/95 border border-slate-700/80 backdrop-blur-xl shadow-xl text-white z-10 space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#10B981]">
                    {PHILOSOPHY_SLIDES[activeSlideIndex].tag}
                  </span>
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
                    0{activeSlideIndex + 1} / 0{PHILOSOPHY_SLIDES.length}
                  </span>
                </div>
                <h3 className="text-base font-black text-white leading-snug">
                  {PHILOSOPHY_SLIDES[activeSlideIndex].title}
                </h3>
                <p className="text-xs text-slate-300 font-normal leading-relaxed">
                  {PHILOSOPHY_SLIDES[activeSlideIndex].caption}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SCROLL-DRIVEN ORIGIN STORY TIMELINE ON WHITE */}
      <OriginStoryTimeline />

      {/* 4. EVIDENCE & PROOF */}
      <ImpactEvidenceSection />

      {/* 5. LEADERSHIP & PARTNERS */}
      <LeadershipTeamSection />

      {/* 6. HOW WE HOLD OURSELVES ACCOUNTABLE — 4 SUBTLE BLUE GRADIENT PILLARS */}
      <section className="py-28 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
        
        {/* Ambient Gradient Mesh Background */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-teal-500/5 blur-3xl rounded-full" />
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#071C3F] text-xs font-black uppercase tracking-[0.25em] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
              <span>FIDUCIARY &amp; OPERATIONAL STANDARDS</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight"
            >
              How We Hold Ourselves Accountable
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
            >
              Four non-negotiable operating commitments that distinguish our advisory work from conventional consulting theory.
            </motion.p>
          </div>

          {/* 4 Subtle Blue Gradient Accountability Cards Grid */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {ETHICAL_STANDARDS.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: idx * 0.12, duration: 0.6 }}
                  className="h-full"
                >
                  <div className="rounded-3xl bg-gradient-to-br from-[#071C3F] via-[#09224E] to-[#071C3F] border border-slate-800 p-7 space-y-6 hover:border-slate-700/90 hover:shadow-xl transition-all duration-300 text-white flex flex-col justify-between h-full group">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="p-3.5 rounded-2xl bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 shadow-sm transition-colors duration-300">
                          <IconComponent className="w-6 h-6" />
                        </div>

                        <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-400 to-slate-700 font-mono">
                          {item.num}
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#10B981] bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-700/80 inline-block">
                          {item.tagline}
                        </span>
                        <h3 className="text-xl font-black text-white leading-snug pt-1">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-700/80 flex items-center gap-2 text-xs font-bold text-emerald-400 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                      <span className="truncate">{item.deliverable}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Interactive Executive Fiduciary Pledge Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-50 via-white to-slate-50 border-2 border-slate-200 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#071C3F]">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span>The Apex Edge Fiduciary Guarantee</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-slate-950">
                100% Outcome-Driven. Zero Consulting Shelf-Ware.
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl font-normal">
                If an operational deliverable or governance framework does not solve your specified breakpoint, we work alongside your team at no extra cost until it is fully embedded.
              </p>
            </div>

            <Button
              onClick={() => setIsBookingOpen(true)}
              className="rounded-full bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black px-7 py-4 text-xs shadow-md shrink-0 transition-all hover:scale-105"
            >
              <span>Schedule Clarity Session →</span>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 7. FINAL ACTION BANNER WITH APEX BLUE GRADIENT CONTAINER */}
      <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="rounded-3xl bg-gradient-to-r from-[#071C3F] via-[#0B2A63] to-[#071C3F] p-10 sm:p-16 text-center text-white border border-slate-800 shadow-2xl space-y-6"
          >
            <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">GET STARTED</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Ready to Turn Governance into Daily Operational Reality?
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Book a structured 45-minute working session with an Apex Edge Partner to diagnose your organisation&apos;s biggest operational bottleneck.
            </p>
            <div className="pt-2">
              <Button
                onClick={() => setIsBookingOpen(true)}
                className="bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black rounded-full px-8 py-4 text-sm shadow-xl shadow-[#10B981]/25 transition-all hover:scale-105"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Book Your 45-Minute Clarity Session →</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <CorporateFooter />
      <ConsultationModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <ApexAIAssistant onOpenBooking={() => setIsBookingOpen(true)} />
    </main>
  );
}
