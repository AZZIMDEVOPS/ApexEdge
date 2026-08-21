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
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export interface FAQItem {
  id: string;
  category: "Governance" | "People" | "Controls" | "Leadership" | "Data Protection";
  question: string;
  answer: string;
  bullets?: string[];
  bgImage: string;
  imageAlt: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "Governance",
    question: "Why do Boards struggle with risk visibility and how can governance be restructured?",
    answer: "Board packs often present heavy operational noise rather than strategic risk priorities. Apex Edge restructures Board risk registers, heat maps, and decision frameworks to give Directors actionable visibility.",
    bullets: [
      "The Issue: Heavy operational noise without clear decision frameworks",
      "Why It Matters: Directors face liability and slow decision-making",
      "Who Should Care: Board Chairs, Audit & Risk Committees, CEOs",
      "Action Step: Transition from narrative reports to structured Risk Heat Maps",
      "Apex Edge Help: Independent Governance Audits & Board Risk Sprints",
    ],
    bgImage: "/african_female_executive.png",
    imageAlt: "African Corporate Director leading board evaluation strategy session",
  },
  {
    id: "faq-2",
    category: "People",
    question: "How do you align organisational structure, roles, and KPIs with strategy?",
    answer: "Unclear job roles and unaligned KPIs cause recurring execution failures. Apex Edge architects clear job grading, salary structures, and strategy-aligned OKR performance scorecards.",
    bullets: [
      "The Issue: Role overlap, unaligned KPIs, and missing accountability",
      "Why It Matters: High labor costs without proportional output or productivity",
      "Who Should Care: CEOs, Heads of HR, Chief Operating Officers",
      "Action Step: Establish named ownership matrices and OKR scorecards",
      "Apex Edge Help: People & Performance Sprints & Job Evaluation Frameworks",
    ],
    bgImage: "/african_executive_portrait.png",
    imageAlt: "African Executive HR Partner reviewing organizational structure",
  },
  {
    id: "faq-3",
    category: "Controls",
    question: "How do organisations turn static policy documents into working operational SOPs?",
    answer: "Policies sitting on shelves rarely guide daily work. Apex Edge converts static policy manuals into practical SOPs with embedded approval controls across Finance, Procurement, and Operations.",
    bullets: [
      "The Issue: Unenforced policies leading to audit exceptions and control gaps",
      "Why It Matters: Financial leakage, compliance fines, and fraud exposure",
      "Who Should Care: CFOs, Internal Auditors, Compliance Officers",
      "Action Step: Embed financial authorization limits into daily workflows",
      "Apex Edge Help: Policy-to-Practice Sprints & Internal Control Matrixes",
    ],
    bgImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    imageAlt: "African Corporate Compliance Partner reviewing operational SOPs",
  },
  {
    id: "faq-4",
    category: "Leadership",
    question: "How can executive leadership capability training drive real behavioural change?",
    answer: "Generic classroom training rarely impacts daily performance. Apex Edge equips executive teams with practical decision toolkits, 90-day execution roadmaps, and action tracking systems.",
    bullets: [
      "The Issue: Leaders struggling to translate strategic goals into execution",
      "Why It Matters: Strategic plans remain unexecuted slide decks",
      "Who Should Care: Executive Committees, Managing Directors, Department Heads",
      "Action Step: Implement 90-day action tracking and execution toolkits",
      "Apex Edge Help: Leadership Capability Frameworks & Management Systems",
    ],
    bgImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    imageAlt: "African Leadership Advisory Director conducting management session",
  },
  {
    id: "faq-5",
    category: "Data Protection",
    question: "How should organisations approach Data Protection compliance and privacy risk?",
    answer: "Data protection is more than legal documentation. Apex Edge helps organisations map data inventories, perform DPIAs, execute DPAs with third parties, and establish breach response protocols.",
    bullets: [
      "The Issue: Personal data handled without clear governance or vendor controls",
      "Why It Matters: Severe regulatory fines, breach risks, and loss of customer trust",
      "Who Should Care: Data Protection Officers (DPO), CIOs, Legal Counsel, CEOs",
      "Action Step: Perform Data Mapping & Data Protection Impact Assessments",
      "Apex Edge Help: Data Protection Gap Audits, DPIAs, DPAs & Breach Protocols",
    ],
    bgImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Data Protection Partner reviewing privacy governance framework",
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
    <section id="values" className="relative py-24 sm:py-32 bg-white text-slate-900 overflow-hidden border-b border-slate-200 selection:bg-[#10B981] selection:text-[#071C3F]">
      
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#071C3F] text-xs font-black uppercase tracking-[0.25em] shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
            <span>KNOWLEDGE CENTRE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black tracking-tight text-slate-950 leading-tight"
          >
            Strategic Insights &amp; Answers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            Instant clarity on corporate governance, company secretarial, legal advisory, HR compliance, immigration, and business strategy in Kenya.
          </motion.p>
        </div>

        {/* Search Bar & APEX Trigger */}
        <div className="max-w-3xl mx-auto mb-14">
          <div className="flex flex-col sm:flex-row items-center gap-3 bg-white border-2 border-slate-200 p-2.5 rounded-full shadow-lg">
            <div className="relative flex-1 w-full flex items-center pl-4">
              <Search className="w-5 h-5 text-[#10B981] shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search FAQs, services, or regulatory topics..."
                className="w-full bg-transparent px-3 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="p-1 text-slate-400 hover:text-slate-700 mr-2 cursor-pointer">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <Button
              onClick={onOpenAI}
              className="rounded-full bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-extrabold px-6 py-3.5 text-xs shadow-md flex items-center gap-2 shrink-0 transition-all hover:scale-105 cursor-pointer"
            >
              <Bot className="w-4 h-4" />
              <span>Ask APEX</span>
            </Button>
          </div>
        </div>

        {/* Knowledge Showcase Grid: Dynamic Photography Panel (Left) + Interactive Cards (Right) */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          
          {/* Executive Nairobi Architectural Skyline Showcase Panel (Left 5 Cols) */}
          <div className="lg:col-span-5 relative h-96 lg:h-[580px] rounded-3xl overflow-hidden border border-slate-200 shadow-xl group">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img
                src="/nairobi_skyline_night.jpg"
                alt="Nairobi CBD & Upper Hill Business District Skyline — East Africa Financial Hub"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 brightness-105 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071C3F] via-[#071C3F]/35 to-transparent" />
            </div>

            {/* Bottom Information Card */}
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#071C3F]/95 border border-slate-700 backdrop-blur-xl shadow-xl space-y-2 z-10 text-white">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] text-[10px] font-black uppercase tracking-wider">
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
                      ? "border-[#10B981] bg-white shadow-lg ring-2 ring-[#10B981]/20"
                      : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-white"
                  }`}
                  onClick={() => setOpenFaqId(isOpen ? "" : faq.id)}
                >
                  <div className="p-6 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl border transition-colors ${
                        isOpen ? "bg-[#071C3F] text-[#10B981] border-[#071C3F]" : "bg-white border-slate-200 text-[#071C3F]"
                      }`}>
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-slate-950 leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    <div className={`p-2 rounded-full border transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#10B981] text-[#071C3F] border-[#10B981]" : "bg-white border-slate-200 text-slate-500"
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="px-6 pb-6 pt-0 border-t border-slate-200"
                      >
                        <div className="pt-4 space-y-4 relative pl-4 border-l-2 border-[#10B981]">
                          <p className="text-sm text-slate-700 leading-relaxed font-normal">
                            {faq.answer}
                          </p>

                          {faq.bullets && (
                            <div className="space-y-2 pt-1">
                              {faq.bullets.map((b, i) => (
                                <div key={i} className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
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
                              className="rounded-full bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-extrabold text-xs px-5 py-2 flex items-center gap-2 shadow-md"
                            >
                              <span>Book Strategy Call</span>
                            </Button>
                            <a
                              href={`https://wa.me/254117471344?text=Hi%2C%20I%20have%20a%20question%20regarding%20${encodeURIComponent(faq.question)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-2 text-xs font-bold text-[#071C3F] hover:underline transition-colors"
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
        <div className="mt-16 text-center pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-600 mb-3">Didn&apos;t find your specific governance question?</p>
          <Button
            onClick={() => setAskModalOpen(true)}
            className="rounded-full border border-slate-300 bg-white text-[#071C3F] hover:border-[#10B981] hover:text-[#071C3F] font-bold px-8 py-3.5 text-xs shadow-md transition-all cursor-pointer"
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
              className="relative w-full max-w-md overflow-hidden rounded-3xl bg-[#071C3F] border border-[#10B981]/40 text-white shadow-2xl z-10 p-8 space-y-6"
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
                    <span className="text-xs font-bold uppercase tracking-wider text-[#10B981]">Direct Advisory Enquiry</span>
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
                      className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-xs text-white placeholder-slate-500 focus:border-[#10B981] focus:outline-none"
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
                      className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-xs text-white placeholder-slate-500 focus:border-[#10B981] focus:outline-none"
                    />
                  </div>

                  <Button type="submit" className="w-full rounded-full bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black py-3.5 text-xs shadow-md">
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
                  <Button onClick={() => { setAskSubmitted(false); setAskModalOpen(false); }} className="rounded-full bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-bold px-6 py-2.5 text-xs">
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
