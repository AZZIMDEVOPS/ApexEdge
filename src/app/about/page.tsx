"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
    icon: Zap,
    title: "Our Mission",
    tagline: "Actionable Systems",
    desc: "To transform governance, people, control, and data protection challenges into Board-ready operational systems that leadership teams use daily.",
    deliverable: "100% Operational Deliverables",
    gradient: "from-[#071C3F] via-[#09224E] to-[#071C3F]",
    accent: "#10B981",
  },
  {
    icon: Award,
    title: "Our Vision",
    tagline: "Regional Trust",
    desc: "To be East Africa's most trusted strategic advisory firm for Boards, CEOs, and executive teams navigating growth and regulatory complexity.",
    deliverable: "East Africa Standard",
    gradient: "from-[#071C3F] via-[#09224E] to-[#071C3F]",
    accent: "#0284C7",
  },
  {
    icon: HeartHandshake,
    title: "Core Values",
    tagline: "Rigor & Integrity",
    desc: "Craftsmanship over templates. Tangible working tools over slide decks. Respect for East African institutional reality and fiduciary rigor.",
    deliverable: "Uncompromising Integrity",
    gradient: "from-[#071C3F] via-[#09224E] to-[#071C3F]",
    accent: "#10B981",
  },
];

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

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

      {/* 2. OUR CORE CONVICTION WITH 3D CARD PARALLAX */}
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

          {/* Right Column 3D Perspective Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-5 h-full"
          >
            <ThreeDCard
              depth={12}
              glareColor="rgba(16, 185, 129, 0.2)"
              className="relative h-96 sm:h-[480px] rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl bg-gradient-to-br from-[#071C3F] via-[#09224E] to-[#071C3F]"
            >
              <Image
                src="/african_corporate_team_meeting.jpg"
                alt="Apex Edge Advisory senior team in executive session"
                fill
                className="object-cover object-center filter brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071C3F] via-[#071C3F]/40 to-transparent" />
              
              <ThreeDItem translateZ={35} className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-gradient-to-br from-[#071C3F]/95 to-[#09224E]/95 border border-slate-700/80 backdrop-blur-xl shadow-xl text-white">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#10B981]">East African Regional Context</span>
                <h3 className="text-base font-black text-white mt-1">Headquartered in Nairobi, Kenya</h3>
                <p className="text-xs text-slate-300 mt-1">Grounded in local statutory rigor, regional compliance, and executive realities.</p>
              </ThreeDItem>
            </ThreeDCard>
          </motion.div>
        </div>
      </section>

      {/* 3. SCROLL-DRIVEN ORIGIN STORY TIMELINE ON WHITE */}
      <OriginStoryTimeline />

      {/* 4. EVIDENCE & PROOF */}
      <ImpactEvidenceSection />

      {/* 5. LEADERSHIP & PARTNERS */}
      <LeadershipTeamSection />

      {/* 6. MISSION, VISION & ETHICAL STANDARDS WITH 3D TILT CARDS */}
      <section className="py-28 bg-white text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">OUR ETHICAL COMMITMENT</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950">How We Hold Ourselves Accountable</h2>
            <p className="text-sm sm:text-base text-slate-600">
              Clear principles guiding every client engagement, diagnostic evaluation, and executive deliverable.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {ETHICAL_STANDARDS.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="h-full"
                >
                  <ThreeDCard
                    depth={12}
                    glareColor="rgba(16, 185, 129, 0.2)"
                    className="rounded-3xl bg-gradient-to-br from-[#071C3F] via-[#09224E] to-[#071C3F] border border-slate-800 p-8 space-y-5 hover:border-[#10B981] transition-all shadow-2xl text-white flex flex-col justify-between h-full"
                  >
                    <div className="space-y-4">
                      <ThreeDItem translateZ={30} className="flex items-center justify-between">
                        <div className="p-3 rounded-2xl bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-700">
                          {item.tagline}
                        </span>
                      </ThreeDItem>

                      <ThreeDItem translateZ={35}>
                        <h3 className="text-2xl font-black text-white">
                          {item.title}
                        </h3>
                      </ThreeDItem>

                      <ThreeDItem translateZ={20}>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </ThreeDItem>
                    </div>

                    <ThreeDItem translateZ={25}>
                      <div className="pt-4 border-t border-slate-700/80 flex items-center gap-2 text-xs font-bold text-emerald-400">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                        <span>{item.deliverable}</span>
                      </div>
                    </ThreeDItem>
                  </ThreeDCard>
                </motion.div>
              );
            })}
          </div>
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
