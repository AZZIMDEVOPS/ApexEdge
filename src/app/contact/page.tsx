"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Calendar, CheckCircle2, ShieldCheck, MessageCircle, ArrowRight } from "lucide-react";
import { ExecutiveHeaderNav } from "@/components/ExecutiveHeaderNav";
import { CorporateFooter } from "@/components/CorporateFooter";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ApexAIAssistant } from "@/components/ApexAIAssistant";
import { ExecutiveFAQSection } from "@/components/ExecutiveFAQSection";
import { Button } from "@/components/ui/button";

const ENGAGEMENT_STEPS = [
  {
    step: "01",
    title: "STEP 1: Tell Us What Is Happening",
    desc: "Share your primary governance, control, people, performance or data protection challenge.",
  },
  {
    step: "02",
    title: "STEP 2: Explore in Clarity Session",
    desc: "Join a confidential 45-minute working session with an Apex Edge Senior Partner.",
  },
  {
    step: "03",
    title: "STEP 3: Identify Key Gaps & Decisions",
    desc: "We isolate root system causes, operational friction, and required decision frameworks.",
  },
  {
    step: "04",
    title: "STEP 4: Receive Action Map",
    desc: "You receive a customized Executive Action Map outlining immediate quick wins and solutions.",
  },
  {
    step: "05",
    title: "STEP 5: Discuss Next Sprint",
    desc: "If there is mutual alignment, we discuss a focused engagement or sprint scope.",
  },
];

export default function ContactPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [role, setRole] = useState("CEO / Managing Director");
  const [challenge, setChallenge] = useState("");
  const [contactMethod, setContactMethod] = useState("Virtual Session (Zoom/Teams)");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-900 selection:bg-[#10B981] selection:text-[#071C3F]">
      <ExecutiveHeaderNav onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Hero Header */}
      <section className="relative py-24 bg-[#071C3F] text-white overflow-hidden border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] text-xs font-black uppercase tracking-[0.25em]">
            <ShieldCheck className="w-4 h-4" />
            <span>EXECUTIVE ADVISORY CONTACT</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight uppercase">
            Bring Us One Organisational Challenge.
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-slate-300 font-normal leading-relaxed">
            Schedule your 45-Minute Clarity Session with an Apex Edge Senior Advisory Partner and receive your One-Page Action Map highlighting priority gaps, quick wins and next steps.
          </p>
        </div>
      </section>

      {/* 5-Step Engagement Journey Banner */}
      <section className="py-16 bg-slate-900 border-b border-slate-800 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">
              ENGAGEMENT JOURNEY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              What Happens When You Reach Out
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 text-xs">
            {ENGAGEMENT_STEPS.map((s) => (
              <div key={s.step} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 hover:border-[#10B981]/50 transition-colors">
                <span className="text-lg font-black text-[#10B981]">{s.step}</span>
                <h4 className="font-bold text-white block">{s.title}</h4>
                <p className="text-slate-300 font-normal leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Clarity Session Form & Details */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 grid gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Form (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#071C3F]/90 border border-slate-800 p-8 sm:p-12 shadow-2xl space-y-8">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">
                Primary Contact Pathway
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Book Your 45-Minute Clarity Session
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Fill in your organizational challenge details below. An Advisory Partner will confirm your session within 24 hours.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3.5 text-xs text-white placeholder-slate-500 focus:border-[#10B981] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.co.ke"
                      className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3.5 text-xs text-white placeholder-slate-500 focus:border-[#10B981] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+254 7XX XXX XXX"
                      className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3.5 text-xs text-white placeholder-slate-500 focus:border-[#10B981] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                      Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="Company / Institution Ltd"
                      className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3.5 text-xs text-white placeholder-slate-500 focus:border-[#10B981] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                      Your Executive Role *
                    </label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3.5 text-xs text-white focus:border-[#10B981] focus:outline-none"
                    >
                      <option value="Board Chair / Member">Board Chair / Board Member</option>
                      <option value="CEO / Managing Director">CEO / Managing Director</option>
                      <option value="CFO / Finance Director">CFO / Finance Director</option>
                      <option value="HR Director / Head of People">HR Director / Head of HR</option>
                      <option value="Company Secretary / Legal Counsel">Company Secretary / Legal Counsel</option>
                      <option value="Senior Executive / BU Head">Senior Executive / BU Head</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                      Preferred Contact Method *
                    </label>
                    <select
                      value={contactMethod}
                      onChange={(e) => setContactMethod(e.target.value)}
                      className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3.5 text-xs text-white focus:border-[#10B981] focus:outline-none"
                    >
                      <option value="Virtual Session (Zoom/Teams)">Virtual Session (Zoom/Teams)</option>
                      <option value="In-Person Meeting (Nairobi HQ)">In-Person Meeting (Nairobi HQ)</option>
                      <option value="Direct Phone Call">Direct Executive Phone Call</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                    Primary Organisational Challenge *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={challenge}
                    onChange={(e) => setChallenge(e.target.value)}
                    placeholder="Describe the recurring audit, governance, control, policy or performance issue you wish to diagnose..."
                    className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3.5 text-xs text-white placeholder-slate-500 focus:border-[#10B981] focus:outline-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black py-4 text-sm shadow-xl flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book My Clarity Session →</span>
                </Button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-white">Clarity Session Requested</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you. An Apex Edge Senior Advisory Partner will contact you shortly to confirm your session calendar link and pre-session preparation notes.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  className="rounded-full bg-[#10B981] text-[#071C3F] font-bold px-8 py-3 text-xs"
                >
                  Submit Another Request
                </Button>
              </div>
            )}
          </div>

          {/* Right Information & Contact Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* What Happens Next Card */}
            <div className="rounded-3xl bg-[#071C3F]/80 border border-[#10B981]/40 p-8 space-y-5 shadow-2xl">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#10B981]">Process Expectations</span>
              <h3 className="text-xl font-black text-white">What Happens Next</h3>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#10B981]/20 text-[#10B981] font-bold flex items-center justify-center shrink-0">1</div>
                  <p><strong className="text-white">Confidential Review:</strong> An Advisory Partner reviews your challenge submission.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#10B981]/20 text-[#10B981] font-bold flex items-center justify-center shrink-0">2</div>
                  <p><strong className="text-white">45-Minute Session:</strong> Structured diagnostic call with zero sales pitches.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#10B981]/20 text-[#10B981] font-bold flex items-center justify-center shrink-0">3</div>
                  <p><strong className="text-white">One-Page Action Map:</strong> Receive your customized gap analysis and recommended next steps.</p>
                </div>
              </div>
            </div>

            {/* Direct Contact Info Card */}
            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-8 space-y-6 shadow-xl">
              <h3 className="text-lg font-black text-white border-b border-slate-800 pb-3">Headquarters &amp; Direct Lines</h3>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">ApexEdge Advisory Limited</strong>
                    <span>Nairobi Corporate Centre, Kenya</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#10B981] shrink-0" />
                  <a href="tel:+254117471344" className="text-white font-bold hover:text-[#10B981]">
                    +254 117 471344
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#10B981] shrink-0" />
                  <a href="mailto:info@apexedge.co.ke" className="hover:text-[#10B981]">
                    info@apexedge.co.ke
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-[#10B981] shrink-0" />
                  <a
                    href="https://wa.me/254117471344"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 font-semibold hover:underline"
                  >
                    Direct Executive WhatsApp →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Executive FAQ Section */}
      <ExecutiveFAQSection />

      <CorporateFooter />
      <ConsultationModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <ApexAIAssistant onOpenBooking={() => setIsBookingOpen(true)} />
    </main>
  );
}
