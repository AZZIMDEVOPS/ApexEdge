"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { Building2, Landmark, ShieldCheck, HeartPulse, Factory, Briefcase, Calendar, CheckCircle2, ArrowRight, Sparkles, Layers, Activity } from "lucide-react";
import { ExecutiveHeaderNav } from "@/components/ExecutiveHeaderNav";
import { CorporateFooter } from "@/components/CorporateFooter";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ApexAIAssistant } from "@/components/ApexAIAssistant";
import { Button } from "@/components/ui/button";

const INDUSTRIES = [
  {
    name: "Banking & Financial Services",
    icon: Landmark,
    image: "/authentic_boardroom_directors.jpg",
    imageAlt: "Board directors and executives reviewing risk heat maps and CBK compliance",
    challenges: "Strict CBK regulatory compliance, risk heat map audits, internal control gaps, and executive accountability for risk exposure.",
    whereWeHelp: "Board-Ready Risk Sprints, CBK compliance review, internal financial approval controls, and decision frameworks.",
    systemsImproved: "Financial Authorization Matrixes, Credit Risk Registers, Compliance Dashboards & Board Reporting Packs.",
    outcome: "100% CBK audit readiness, clear credit/risk oversight, and zero ambiguity in executive decision rights.",
    color: "#10B981",
  },
  {
    name: "State Corporations & Public Sector",
    icon: Building2,
    image: "/authentic_corporate_signing_desk.jpg",
    imageAlt: "Executive board members and ministerial panel reviewing and signing governance charters",
    challenges: "Mwongozo Code adherence, Board evaluation compliance, public procurement oversight, and ministerial reporting.",
    whereWeHelp: "Independent Board Evaluations, Governance Health Checks, procurement SOP redesign, and Mwongozo alignment.",
    systemsImproved: "Board Charters, Governance Dashboards, Procurement Control SOPs & Public Accountability Frameworks.",
    outcome: "Full statutory compliance, transparent public procurement oversight, and elevated Mwongozo audit scores.",
    color: "#0284C7",
  },
  {
    name: "Insurance & Microfinance",
    icon: ShieldCheck,
    image: "/authentic_financial_analyst_dashboard.jpg",
    imageAlt: "Senior partner and actuarial risk analyst reviewing financial and risk reports",
    challenges: "IRA capital adequacy governance, actuarial risk reporting, claims control procedures, and role clarity.",
    whereWeHelp: "Control Room Dashboards, claims approval matrixes, job grading, and quarterly risk reporting packs.",
    systemsImproved: "Claims SOP Manuals, IRA Regulatory Audit Checklists, Job Structures & Performance Scorecards.",
    outcome: "Reduced claims processing risk, clear staff accountability, and streamlined IRA regulatory reporting.",
    color: "#059669",
  },
  {
    name: "Healthcare & Pharmaceuticals",
    icon: HeartPulse,
    image: "/authentic_advisory_one_on_one.jpg",
    imageAlt: "Advisory consultant modeling clinical operational SOPs and compliance workflows",
    challenges: "Clinical governance, medical regulatory licensing, staff performance management, and facility SOP compliance.",
    whereWeHelp: "Practical SOP manuals, performance scorecards, regulatory compliance tracking, and leadership capability.",
    systemsImproved: "Clinical Operational SOPs, Medical Compliance Matrixes & Staff Performance Scorecards.",
    outcome: "Consistent quality of care, zero regulatory licensing default, and clear clinical management accountability.",
    color: "#D97706",
  },
  {
    name: "Manufacturing & Supply Chain",
    icon: Factory,
    image: "/authentic_strategy_sprint_collaboration.jpg",
    imageAlt: "Operations and supply chain leadership conducting process analysis and workflow sprints",
    challenges: "Operational bottleneck controls, plant inventory audit exceptions, labor law compliance, and safety governance.",
    whereWeHelp: "SOP-to-Practice Sprints, factory job structures, labor risk audits, and operational accountability trackers.",
    systemsImproved: "Plant Operational SOPs, Inventory Control Checklists, Salary Grading Bands & Labor Compliance Tools.",
    outcome: "Eliminated inventory leakage, improved plant productivity, and full compliance with Kenyan labor laws.",
    color: "#7C3AED",
  },
  {
    name: "Commercial Real Estate & Private Equity",
    icon: Briefcase,
    image: "/authentic_executive_street_dialogue.jpg",
    imageAlt: "Commercial real estate asset development executives in strategic consultation",
    challenges: "Joint venture governance, investor board packs, rapid expansion control gaps, and executive incentive structures.",
    whereWeHelp: "Board paper templates, executive compensation frameworks, governance dashboards, and investor decision frameworks.",
    systemsImproved: "JV Decision Frameworks, Investor Reporting Dashboards & Executive Compensation Scorecards.",
    outcome: "High-confidence investor reporting, accelerated deal approvals, and clear capital allocation controls.",
    color: "#071C3F",
  },
];

export default function IndustriesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Scroll-driven Background Transformations
  const orb1Y = useTransform(smoothProgress, [0, 1], [-100, 600]);
  const orb1Scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.3, 0.9]);
  const orb2Y = useTransform(smoothProgress, [0, 1], [100, -500]);
  const orb2Scale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1.25, 1.1]);
  const orb3Y = useTransform(smoothProgress, [0, 1], [0, 350]);
  const orbRotate = useTransform(smoothProgress, [0, 1], [0, 180]);
  const gridY = useTransform(smoothProgress, [0, 1], [0, -150]);

  return (
    <main ref={containerRef} className="relative min-h-screen bg-white text-slate-900 selection:bg-[#10B981] selection:text-[#071C3F] overflow-hidden">
      <ExecutiveHeaderNav onOpenBooking={() => setIsBookingOpen(true)} />

      {/* CREATIVE SCROLL-DRIVEN BACKGROUND ANIMATION ENGINE */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        
        {/* Floating Gradient Orb 1 (Emerald Glow) */}
        <motion.div
          style={{
            y: orb1Y,
            scale: orb1Scale,
            rotate: orbRotate,
          }}
          className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#10B981]/15 via-teal-500/10 to-transparent blur-3xl"
        />

        {/* Floating Gradient Orb 2 (Apex Blue Glow) */}
        <motion.div
          style={{
            y: orb2Y,
            scale: orb2Scale,
          }}
          className="absolute top-1/3 -right-40 w-[750px] h-[750px] rounded-full bg-gradient-to-bl from-[#071C3F]/10 via-blue-600/10 to-transparent blur-3xl"
        />

        {/* Floating Gradient Orb 3 (Teal/Indigo Center Mesh) */}
        <motion.div
          style={{
            y: orb3Y,
            rotate: orbRotate,
          }}
          className="absolute bottom-1/4 left-1/4 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-emerald-500/10 via-cyan-500/5 to-transparent blur-3xl"
        />

        {/* Scroll-Responsive Cyber Grid Overlay */}
        <motion.div
          style={{ y: gridY }}
          className="absolute inset-0 opacity-25 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:36px_36px]"
        />

        {/* Dynamic Vertical Light Rays */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Hero with High-Contrast Header */}
      <section className="relative py-28 text-slate-900 border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#071C3F] text-xs font-black uppercase tracking-[0.25em] shadow-xs"
          >
            <Building2 className="w-4 h-4 text-[#10B981]" />
            <span>SECTOR-SPECIFIC ADVISORY</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-tight"
          >
            Industry Challenges Solved <br />
            <span className="text-[#071C3F] underline decoration-[#10B981] decoration-4 underline-offset-8">
              With Board-Ready Precision.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 font-normal leading-relaxed"
          >
            We don&apos;t just list industries. For every sector, we identify the exact governance, risk, control, and performance problems and build practical systems that deliver measurable outcomes.
          </motion.p>
        </div>
      </section>

      {/* Industries Grid on Clean Canvas with Scroll Parallax */}
      <section className="relative py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, idx) => {
            const IconComp = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 35, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: (idx % 3) * 0.12, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="rounded-3xl bg-white/95 backdrop-blur-xl border-2 border-slate-200/90 p-7 space-y-6 hover:border-[#10B981] transition-all flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-[#10B981]/10 group"
              >
                <div className="space-y-4">
                  {/* High-Resolution Sector Photography Frame */}
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                    <Image
                      src={ind.image}
                      alt={ind.imageAlt || ind.name}
                      fill
                      className="object-cover object-center filter brightness-105 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071C3F]/85 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                      <span className="font-bold drop-shadow-sm truncate">
                        {ind.name}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#10B981] bg-[#071C3F]/90 px-2.5 py-0.5 rounded-full border border-[#10B981]/30 shrink-0">
                        Active Mandates
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-white to-slate-100 border border-slate-200 text-[#071C3F] shadow-xs group-hover:border-[#10B981] transition-colors">
                      <IconComp className="w-5 h-5 text-[#10B981]" />
                    </div>
                    <h3 className="text-xl font-black text-slate-950 leading-snug">{ind.name}</h3>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                      <span className="font-extrabold uppercase text-amber-700 tracking-wider block text-[11px]">
                        1. Sector Challenge:
                      </span>
                      <p className="text-slate-600 leading-relaxed font-normal">{ind.challenges}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                      <span className="font-extrabold uppercase text-blue-700 tracking-wider block text-[11px]">
                        2. Where Apex Edge Helps:
                      </span>
                      <p className="text-slate-600 leading-relaxed font-normal">{ind.whereWeHelp}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                      <span className="font-extrabold uppercase text-teal-800 tracking-wider block text-[11px]">
                        3. Systems Improved:
                      </span>
                      <p className="text-slate-600 leading-relaxed font-normal">{ind.systemsImproved}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/90 space-y-1 shadow-2xs">
                      <span className="font-extrabold uppercase text-[#071C3F] tracking-wider block text-[11px]">
                        4. Outcome That Matters:
                      </span>
                      <p className="text-slate-900 font-bold leading-relaxed">{ind.outcome}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full py-3.5 rounded-full bg-[#071C3F] hover:bg-[#10B981] hover:text-[#071C3F] text-white font-black text-xs transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer group"
                  >
                    <span>Discuss Sector Scope →</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Final Sector Consultation Banner */}
      <section className="py-24 bg-white text-slate-900 border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="rounded-3xl bg-gradient-to-r from-[#071C3F] via-[#0B2A63] to-[#071C3F] p-10 sm:p-16 text-center text-white border border-slate-800 shadow-2xl space-y-6"
          >
            <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">CUSTOM INDUSTRY SCOPING</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Don&apos;t See Your Exact Sector Listed?
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Our core advisory framework adapts to any regulated or growth-stage enterprise across East Africa. Book a diagnostic briefing with a Partner.
            </p>
            <div className="pt-2">
              <Button
                onClick={() => setIsBookingOpen(true)}
                className="bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black rounded-full px-8 py-4 text-sm shadow-xl shadow-[#10B981]/25 transition-all hover:scale-105"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Schedule an Industry Briefing →</span>
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
