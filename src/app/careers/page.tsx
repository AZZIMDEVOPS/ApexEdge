"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  Send,
  Sparkles,
  Info,
  Clock,
} from "lucide-react";
import Image from "next/image";
import { ExecutiveHeaderNav } from "@/components/ExecutiveHeaderNav";
import { CorporateFooter } from "@/components/CorporateFooter";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ApexAIAssistant } from "@/components/ApexAIAssistant";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const CAREER_PILLARS = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "High-Impact Executive Advisory",
    desc: "Work directly alongside C-suite executives and Boards on critical governance, risk, and compliance transformation engagements.",
  },
  {
    icon: Award,
    number: "02",
    title: "Systems-Driven Methodology",
    desc: "Move beyond slide-deck consulting; architect concrete, operational SOPs and control tools that organizations actually use daily.",
  },
  {
    icon: Users,
    number: "03",
    title: "Multidisciplinary Exposure",
    desc: "Gain deep, hands-on experience across Board governance, Kenya DP Act privacy frameworks, HR grading, and financial SOPs.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Intellectual Autonomy",
    desc: "Be trusted with end-to-end client engagement ownership—from initial diagnostic sprints to final executive Board delivery.",
  },
];

const TALENT_PROFILES = [
  {
    category: "Governance & Compliance",
    title: "Board Governance & Mwongozo Auditors",
    skills: ["Mwongozo Compliance", "Board Charters", "Risk Heat Maps", "Committee Audits"],
  },
  {
    category: "Controls & Finance",
    title: "Internal Control & SOP Engineers",
    skills: ["Authorization Matrixes", "Procurement SOPs", "Audit Readiness", "SOP Workflows"],
  },
  {
    category: "Data Protection",
    title: "Privacy & Data Protection Specialists",
    skills: ["Kenya DP Act Compliance", "DPIA Registers", "Breach Response", "Data Mapping"],
  },
  {
    category: "People & Execution",
    title: "Performance & OKR Systems Architects",
    skills: ["Job Grading & Bands", "OKR Scorecards", "Performance Maps", "Appraisal Systems"],
  },
];

export default function CareersPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmitCandidate = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-[#10B981] selection:text-[#071C3F]">
      <ExecutiveHeaderNav onOpenBooking={() => setIsBookingOpen(true)} />

      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] w-full bg-[#071C3F] text-white overflow-hidden border-b border-slate-800 flex flex-col justify-between py-24 lg:py-32">
        {/* Full-Bleed Nairobi Enterprise Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
          <Image
            src="/nairobi_enterprise_skyline.jpg"
            alt="Nairobi Enterprise Business District Skyline"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-110 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071C3F] via-[#071C3F]/90 to-[#071C3F]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071C3F] via-transparent to-[#071C3F]" />
        </div>

        {/* Ambient Glow */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-[#10B981]/15 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
        </div>

        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 space-y-6 text-center relative z-10 my-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] text-xs font-black uppercase tracking-[0.25em]"
          >
            <Briefcase className="w-4 h-4" />
            <span>ADVISORY CAREERS &amp; TALENT NETWORK</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight uppercase"
          >
            BUILD SYSTEMS THAT MATTER. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-emerald-300 to-[#10B981]">
              JOIN THE APEX EDGE ADVISORY NETWORK.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-base sm:text-xl text-slate-300 font-normal leading-relaxed"
          >
            Apex Edge Advisory attracts strategic thinkers, governance professionals, and organizational systems architects committed to executive excellence across East Africa.
          </motion.p>
        </div>
      </section>

      {/* SECTION 01: CURRENT OPENINGS STATUS (ELEGANT "NO ACTIVE OPENINGS" BANNER) */}
      <section className="py-16 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <SpotlightCard className="p-8 sm:p-12 border-2 border-slate-800 bg-[#071C3F]/90 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-[10px] font-black uppercase tracking-widest">
                  <Clock className="w-3.5 h-3.5" />
                  <span>CURRENT STATUS: NO IMMEDIATE OPENINGS AT THE MOMENT</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                  No Direct Vacancies Today — But We Are Always Eager To Connect.
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  We are currently not actively recruiting for full-time advertised positions. However, our team frequently expands to include senior advisory consultants, subject matter experts, and independent governance specialists for high-impact corporate engagements.
                </p>
              </div>

              <div className="shrink-0 w-full md:w-auto">
                <a
                  href="#talent-form"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-[#10B981]/25"
                >
                  <span>Submit Spontaneous CV</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* SECTION 02: WHY BUILD YOUR CAREER AT APEX EDGE */}
      <section className="py-24 bg-[#071C3F]/60 text-white border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <SectionLabel number="01" title="CAREER ADVANTAGE" icon={Sparkles} />
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              WHY ADVISORY PROFESSIONALS CHOOSE APEX EDGE
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
              We replace conventional slide-deck consulting with tangible, Board-ready management architecture.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CAREER_PILLARS.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <SpotlightCard key={pillar.number} className="p-7 space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-[#10B981]">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-black text-[#10B981] uppercase tracking-widest">
                        PILLAR {pillar.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-white tracking-wide">
                      {pillar.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#10B981]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Apex Edge Standard</span>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 03: TARGET TALENT PROFILES */}
      <section className="py-24 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <SectionLabel number="02" title="TALENT SPECIALIZATIONS" icon={Users} />
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              WHO WE FREQUENTLY ENGAGE
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
              We connect with practitioners who possess deep execution capability across our core advisory domains.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TALENT_PROFILES.map((prof, idx) => (
              <SpotlightCard key={idx} className="p-7 space-y-5 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#10B981] block">
                    {prof.category}
                  </span>
                  <h3 className="text-lg font-black text-white leading-snug">
                    {prof.title}
                  </h3>

                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                      Core Subject Expertise:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prof.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[10px] font-semibold text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 text-[11px] font-bold text-sky-400">
                  Advisory Roster Track
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04: SPONTANEOUS APPLICATION & TALENT ROSTER FORM */}
      <section id="talent-form" className="py-24 bg-[#071C3F]/80 text-white relative">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <SpotlightCard className="p-8 sm:p-12 border-2 border-[#10B981]/50 bg-[#071C3F] shadow-2xl backdrop-blur-2xl">
            <div className="space-y-8">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] text-[10px] font-black uppercase tracking-widest">
                  <Send className="w-3.5 h-3.5" />
                  <span>JOIN THE APEX EDGE TALENT ROSTER</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
                  SUBMIT YOUR PROFILE FOR FUTURE ENGAGEMENTS
                </h2>

                <p className="text-sm text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
                  Even when specific vacancies are closed, submitting your credentials ensures our senior partners review your profile for upcoming client advisory sprints and associate opportunities.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-8 rounded-3xl bg-slate-950 border border-[#10B981] text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#10B981]/20 border border-[#10B981] text-[#10B981] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-white">Profile Submitted Successfully</h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you for connecting with Apex Edge Advisory. Your credentials have been cataloged in our senior talent roster. If a relevant engagement arises matching your expertise, our advisory lead will contact you directly.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white transition-colors"
                    >
                      Submit Another Profile
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmitCandidate}
                    className="space-y-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-wider text-slate-300 block">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Jane Mwangi"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981]"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-wider text-slate-300 block">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. jane@company.co.ke"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981]"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-wider text-slate-300 block">
                          Primary Advisory Area *
                        </label>
                        <select
                          required
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-[#10B981]"
                        >
                          <option value="governance">Board Governance &amp; Mwongozo Audits</option>
                          <option value="controls">Operational Controls &amp; SOP Engineering</option>
                          <option value="privacy">Data Protection &amp; DPIAs</option>
                          <option value="people">People, OKRs &amp; Performance Systems</option>
                          <option value="other">Other Senior Advisory Practice</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-wider text-slate-300 block">
                          LinkedIn Profile / Portfolio Link *
                        </label>
                        <input
                          type="url"
                          required
                          placeholder="https://linkedin.com/in/yourprofile"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-wider text-slate-300 block">
                        Brief Executive Summary &amp; Key Expertise
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Summarize your advisory background, key certifications (e.g. CPS, CDPO, CIA), and executive experience..."
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981]"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Info className="w-4 h-4 text-[#10B981] shrink-0" />
                        <span>Profiles are stored strictly for Apex Edge advisory roster matching.</span>
                      </div>

                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black text-xs uppercase tracking-wider transition-all shadow-xl hover:shadow-[#10B981]/25"
                      >
                        <span>Join Talent Roster</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </SpotlightCard>
        </div>
      </section>

      <CorporateFooter />
      <ConsultationModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <ApexAIAssistant onOpenBooking={() => setIsBookingOpen(true)} />
    </main>
  );
}
