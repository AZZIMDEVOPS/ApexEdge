"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Bot,
  ChevronDown,
  Sparkles,
  MessageCircle,
  X,
  CheckCircle2,
  Building2,
  Scale,
  Users,
  FileCheck,
  Globe,
  TrendingUp,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export interface FAQItem {
  id: string;
  category: "Secretarial" | "Governance" | "Legal" | "HR" | "Immigration" | "Strategy";
  question: string;
  answer: string;
  bullets?: string[];
  bgImage: string;
  imageAlt: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "Secretarial",
    question: "What company secretarial services does ApexEdge Advisory Limited provide?",
    answer: "We provide comprehensive statutory compliance under the Kenyan Companies Act 2015, including BRS annual filings, maintenance of statutory registers, beneficial ownership filings, and board meeting minute administration.",
    bullets: [
      "Filing Annual Returns & Beneficial Ownership (BO) with BRS",
      "Maintenance of Statutory Registers & Share Capital Management",
      "Board & Annual General Meeting (AGM) Documentation",
      "Corporate Restructuring & Changes in Directorship",
    ],
    bgImage: "/african_executive_portrait.png",
    imageAlt: "African Corporate Secretary & Advisory Partner reviewing statutory documents",
  },
  {
    id: "faq-2",
    category: "Governance",
    question: "How does ApexEdge assist with Corporate Governance and Board Audits?",
    answer: "We design bespoke governance frameworks aligned with Capital Markets Authority (CMA) guidelines, the MWONGOZO Code for State Corporations, and international ESG best practices.",
    bullets: [
      "Independent Board Evaluations & Governance Audits",
      "Drafting Board Charters, Ethics Codes & Committee Terms",
      "ESG (Environmental, Social & Governance) Alignment",
      "Director Induction & Continuous Governance Training",
    ],
    bgImage: "/african_female_executive.png",
    imageAlt: "African Corporate Director leading board evaluation strategy session",
  },
  {
    id: "faq-3",
    category: "Legal",
    question: "What legal advisory services do your Advocates provide?",
    answer: "Our legal practice focuses on commercial contracts, regulatory licensing, joint venture advisory, employment law compliance, and corporate legal risk management across East Africa.",
    bullets: [
      "Commercial Contract Drafting, Vetting & Negotiation",
      "Regulatory Compliance Reviews & Licensing (CMA, CBK, IRA)",
      "Intellectual Property & Trademark Registration",
      "Corporate Restructuring & Dispute Resolution Support",
    ],
    bgImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    imageAlt: "African Advocate & Corporate Legal Counsel reviewing commercial instruments",
  },
  {
    id: "faq-4",
    category: "HR",
    question: "What HR Advisory solutions are available for local & multinational firms?",
    answer: "ApexEdge delivers end-to-end HR advisory, labor law compliance audits, custom HR manuals, organizational grading, performance management systems, and payroll administration.",
    bullets: [
      "Kenyan Employment Law Compliance & Labor Audits",
      "HR Policy Manuals & Employee Handbooks",
      "Job Grading & Salary Structure Design",
      "Performance Management Systems Setup",
    ],
    bgImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    imageAlt: "African HR Director coaching executive corporate team",
  },
  {
    id: "faq-5",
    category: "Immigration",
    question: "How do you facilitate Kenyan Work Permits & Expatriate Immigration?",
    answer: "We streamline Kenya Department of Immigration processes for multinational executives, investors, and foreign specialists, ensuring 100% statutory compliance.",
    bullets: [
      "Class D (Employment) & Class G (Investor) Work Permits",
      "Class K (Resident) Permits & Special Passes",
      "Foreign National Registration (Alien IDs) & Dependent Passes",
      "Permanent Residence & Citizenship Facilitation",
    ],
    bgImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    imageAlt: "African Expatriate Mobility & Investor Advisory Director",
  },
  {
    id: "faq-6",
    category: "Strategy",
    question: "How long does business registration & incorporation take in Kenya?",
    answer: "With ApexEdge managing your BRS incorporation, company registration typically takes 3 to 5 business days, including KRA PIN, NSSF, SHA, and CR12 official extract issuance.",
    bullets: [
      "Name Reservation & Memorandum of Association Drafting",
      "KRA Tax PIN, NSSF, & SHA Registration",
      "CR12 Official Company Extract Issuance",
      "Corporate Bank Account Opening Assistance",
    ],
    bgImage: "/african_executive_portrait.png",
    imageAlt: "African Strategic Expansion Lead in Nairobi executive boardroom",
  },
];

interface InteractiveKnowledgeCentreProps {
  onOpenAI?: () => void;
  onOpenBooking?: () => void;
}

export function InteractiveKnowledgeCentre({ onOpenAI, onOpenBooking }: InteractiveKnowledgeCentreProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqId, setOpenFaqId] = useState<string>("faq-1");
  const [askModalOpen, setAskModalOpen] = useState(false);
  const [askedQuestion, setAskedQuestion] = useState("");
  const [askedEmail, setAskedEmail] = useState("");
  const [askSubmitted, setAskSubmitted] = useState(false);

  const activeFaq = FAQ_DATA.find((f) => f.id === openFaqId) || FAQ_DATA[0];

  const filteredFaqs = FAQ_DATA.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAskSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAskSubmitted(true);
  };

  return (
    <section id="values" className="relative py-24 sm:py-32 bg-[#071C3F] text-white overflow-hidden selection:bg-[#C9A227] selection:text-[#071C3F]">
      
      {/* Top Metallic Gold Shimmer Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-slate-900 overflow-hidden z-20">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="w-full h-full bg-gradient-to-r from-transparent via-[#C9A227] to-transparent"
        />
      </div>

      {/* Ambient Radial Glow & Particles */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-32 w-[700px] h-[700px] bg-[#C9A227]/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A227]/15 border border-[#C9A227]/40 text-[#C9A227] text-xs font-black uppercase tracking-[0.25em]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>KNOWLEDGE CENTRE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight"
          >
            Strategic Insights &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-[#C9A227]">Answers</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
          >
            Instant clarity on corporate governance, company secretarial, legal advisory, HR compliance, immigration, and business strategy in Kenya.
          </motion.p>
        </div>

        {/* Search Bar & APEX Trigger */}
        <div className="max-w-3xl mx-auto mb-14">
          <div className="flex flex-col sm:flex-row items-center gap-3 bg-slate-900/90 border border-[#C9A227]/40 p-2.5 rounded-full shadow-2xl backdrop-blur-xl">
            <div className="relative flex-1 w-full flex items-center pl-4">
              <Search className="w-5 h-5 text-[#C9A227] shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search FAQs, services, or regulatory topics..."
                className="w-full bg-transparent px-3 py-3 text-sm text-white placeholder-slate-400 focus:outline-none"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="p-1 text-slate-400 hover:text-white mr-2">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <Button
              onClick={onOpenAI}
              className="rounded-full bg-[#C9A227] hover:bg-amber-400 text-[#071C3F] font-extrabold px-6 py-3.5 text-xs shadow-lg flex items-center gap-2 shrink-0 transition-all hover:scale-105"
            >
              <Bot className="w-4 h-4" />
              <span>Ask APEX</span>
            </Button>
          </div>
        </div>

        {/* Knowledge Showcase Grid: Dynamic Photography Panel (Left) + Interactive Cards (Right) */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          
          {/* Executive Nairobi Architectural Skyline Showcase Panel (Left 5 Cols) */}
          <div className="lg:col-span-5 relative h-96 lg:h-[580px] rounded-3xl overflow-hidden border border-[#C9A227]/50 shadow-2xl group">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              {/* Premium Nairobi Architectural Photography */}
              <img
                src="/nairobi_skyline.png"
                alt="Nairobi CBD & Upper Hill Business District Skyline — East Africa Financial Hub"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 brightness-95 contrast-110"
              />
              {/* Subtle Deep Navy Overlay & Vignette Fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071C3F] via-[#071C3F]/35 to-slate-950/20" />
              {/* Animated Gold Light Beam Sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>

            {/* Bottom Information Card */}
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#071C3F]/90 border border-[#C9A227]/40 backdrop-blur-xl shadow-2xl space-y-2 z-10 transition-all group-hover:border-[#C9A227]">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A227]/20 border border-[#C9A227]/40 text-[#C9A227] text-[10px] font-black uppercase tracking-wider">
                <Building2 className="w-3 h-3" />
                <span>KENYA BUSINESS HUB</span>
              </div>
              <h3 className="text-base font-black text-white leading-snug">
                Nairobi — East Africa&apos;s Leading Financial &amp; Corporate Centre
              </h3>
              <p className="text-xs text-slate-300 font-normal leading-relaxed">
                &ldquo;Supporting local and international businesses with governance, legal advisory, compliance, immigration, HR consulting, and strategic business solutions from the heart of Kenya.&rdquo;
              </p>
            </div>
          </div>

          {/* Interactive FAQ Accordion List (Right 7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;

              return (
                <motion.div
                  key={faq.id}
                  layout
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                    isOpen
                      ? "border-[#C9A227] bg-slate-900/95 shadow-2xl"
                      : "border-slate-800 bg-slate-900/60 hover:border-[#C9A227]/50 hover:bg-slate-900/80"
                  }`}
                  onClick={() => setOpenFaqId(isOpen ? "" : faq.id)}
                >
                  <div className="p-6 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl border transition-colors ${
                        isOpen ? "bg-[#C9A227] text-[#071C3F] border-[#C9A227]" : "bg-slate-950 border-slate-800 text-[#C9A227]"
                      }`}>
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-white leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    <div className={`p-2 rounded-full border transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#C9A227] text-[#071C3F] border-[#C9A227]" : "bg-slate-950 border-slate-800 text-slate-400"
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Expanded Content with Animated Vertical Gold Beam */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="px-6 pb-6 pt-0 border-t border-slate-800/80"
                      >
                        <div className="pt-4 space-y-4 relative pl-4 border-l-2 border-[#C9A227]">
                          <p className="text-sm text-slate-200 leading-relaxed font-normal">
                            {faq.answer}
                          </p>

                          {faq.bullets && (
                            <div className="space-y-2 pt-1">
                              {faq.bullets.map((b, i) => (
                                <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
                                  <span>{b}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          <div className="pt-3 flex flex-wrap items-center gap-3">
                            <Button
                              onClick={(e) => {
                                e.stopPropagation();
                                if (onOpenBooking) onOpenBooking();
                              }}
                              className="rounded-full bg-[#C9A227] hover:bg-amber-400 text-[#071C3F] font-extrabold text-xs px-5 py-2 flex items-center gap-2 shadow-md"
                            >
                              <span>Book Strategy Call</span>
                            </Button>
                            <a
                              href={`https://wa.me/254117471344?text=Hi%2C%20I%20have%20a%20question%20regarding%20${encodeURIComponent(faq.question)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                            >
                              <MessageCircle className="w-3.5 h-3.5" />
                              <span>Inquire on WhatsApp →</span>
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Trigger: Ask an Advisor */}
        <div className="mt-16 text-center pt-8 border-t border-slate-800">
          <p className="text-sm text-slate-300 mb-3">Didn&apos;t find your specific governance question?</p>
          <Button
            onClick={() => setAskModalOpen(true)}
            className="rounded-full border border-[#C9A227] bg-slate-900 text-[#C9A227] hover:bg-[#C9A227] hover:text-[#071C3F] font-bold px-8 py-3.5 text-xs shadow-lg transition-all"
          >
            Ask an Advisory Partner Directly
          </Button>
        </div>
      </div>

      {/* Ask Advisor Modal Dialog */}
      <AnimatePresence>
        {askModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setAskModalOpen(false)}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className="relative w-full max-w-md overflow-hidden rounded-3xl bg-[#071C3F] border border-[#C9A227]/40 text-white shadow-2xl z-10 p-8 space-y-6"
            >
              <button
                onClick={() => setAskModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              {!askSubmitted ? (
                <form onSubmit={handleAskSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C9A227]">Direct Advisory Enquiry</span>
                    <h3 className="text-2xl font-black text-white">Ask an Advisor</h3>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Your Question *</label>
                    <textarea
                      required
                      rows={3}
                      value={askedQuestion}
                      onChange={(e) => setAskedQuestion(e.target.value)}
                      placeholder="Type your statutory compliance or governance question..."
                      className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-xs text-white placeholder-slate-500 focus:border-[#C9A227] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      value={askedEmail}
                      onChange={(e) => setAskedEmail(e.target.value)}
                      placeholder="yourname@company.co.ke"
                      className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-xs text-white placeholder-slate-500 focus:border-[#C9A227] focus:outline-none"
                    />
                  </div>

                  <Button type="submit" className="w-full rounded-full bg-[#C9A227] text-[#071C3F] font-black py-3.5 text-xs shadow-md">
                    Submit Enquiry
                  </Button>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-black text-white">Enquiry Received</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Thank you. An ApexEdge Senior Advisory Partner will review your question and respond via email within 24 business hours.
                  </p>
                  <Button onClick={() => { setAskSubmitted(false); setAskModalOpen(false); }} className="rounded-full bg-[#C9A227] text-[#071C3F] font-bold px-6 py-2.5 text-xs">
                    Close Window
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
