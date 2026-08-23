"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Sparkles, CheckCircle2, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface FAQItem {
  q: string;
  a: string;
  category: "General" | "Governance" | "Engagement" | "Data Privacy";
}

export const FAQS: FAQItem[] = [
  {
    q: "What does Apex Edge do?",
    a: "Apex Edge helps organisations identify hidden operational risks, strengthen internal controls, architect role & performance scorecards, and build practical management systems. We turn recurring organizational problems into clear actions, accountable owners, and Board-ready decisions.",
    category: "General",
  },
  {
    q: "Who does Apex Edge work with?",
    a: "We work with Boards of Directors, CEOs, Finance Leaders, HR Directors, and Senior Executives across private enterprises, public entities, state corporations, financial institutions, and fast-growing organizations in Kenya and East Africa.",
    category: "General",
  },
  {
    q: "What are your Practice Areas?",
    a: "Apex Edge operates across 6 outcome-driven Practice Areas: 01 — Governance & Risk, 02 — People & Performance, 03 — Controls & Policies, 04 — Leadership & Capability, 05 — Data Protection & Privacy, and 06 — Corporate Secretarial.",
    category: "Governance",
  },
  {
    q: "Does Apex Edge only provide advisory reports?",
    a: "No. Traditional consultants deliver static PDF reports. Apex Edge translates recommendations into practical, working management tools—such as risk heat maps, financial approval SOPs, OKR scorecards, data inventories, and execution dashboards that teams actually use daily.",
    category: "Governance",
  },
  {
    q: "What does a Clarity Session involve?",
    a: "A Clarity Session is a focused 20-minute working meeting with an Apex Edge Partner to explore one specific organizational challenge. We diagnose root system causes, identify key governance gaps, and outline potential practical interventions.",
    category: "Engagement",
  },
  {
    q: "What do we receive after the Clarity Session?",
    a: "Following your session, you receive a concise Executive Action Map detailing the diagnosed root cause, key risk implications, immediate recommended interventions, and suggested sprint scope.",
    category: "Engagement",
  },
  {
    q: "Do we need to commit to a long-term retainer?",
    a: "No. Apex Edge is structured around outcome-based Signature Engagements and focused Sprints (such as the Board-Ready Risk Sprint or Policy-to-Practice Sprint). You can start with one specific challenge without any long-term retainer or open-ended commitment.",
    category: "Engagement",
  },
  {
    q: "Can Apex Edge work with our existing leadership and HR team?",
    a: "Yes. We work alongside your internal executive committee, HR leads, internal audit, and department heads to co-design workflows and ensure seamless adoption across your staff.",
    category: "Governance",
  },
  {
    q: "Does Apex Edge support implementation?",
    a: "Yes. In our 4-step framework (Diagnose → Design → Implement → Measure), we support your leadership team during implementation to embed new SOPs, train staff, assign named ownership, and verify operational compliance.",
    category: "Engagement",
  },
  {
    q: "How does Data Protection fit into Apex Edge's services?",
    a: "Data Protection & Privacy is a standalone Practice Area (05). We help organisations comply with Data Protection obligations by conducting Gap Assessments, creating Data Inventories, drafting Privacy Policies & DPAs, conducting DPIAs, and setting up data breach response protocols.",
    category: "Data Privacy",
  },
];

const CATEGORIES = ["All", "General", "Governance", "Engagement", "Data Privacy"] as const;

export function ExecutiveFAQSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCat = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleFAQ = (originalIdx: number) => {
    if (openIndices.includes(originalIdx)) {
      setOpenIndices(openIndices.filter((i) => i !== originalIdx));
    } else {
      setOpenIndices([...openIndices, originalIdx]);
    }
  };

  const expandAll = () => {
    setOpenIndices(FAQS.map((_, idx) => idx));
  };

  const collapseAll = () => {
    setOpenIndices([]);
  };

  return (
    <section id="faq" className="relative py-24 bg-white text-slate-900 overflow-hidden border-b border-slate-200 font-sans">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10 space-y-12 font-sans">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 font-sans">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#071C3F] text-xs font-black uppercase tracking-[0.25em] shadow-xs font-sans"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#10B981]" />
            <span>EXECUTIVE CLARITY &amp; FAQ</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight uppercase font-sans"
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed font-sans"
          >
            Clear answers to help you understand Apex Edge&apos;s advisory model, deliverables, and engagement process.
          </motion.p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 max-w-3xl mx-auto font-sans">
          <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200 font-sans">
            
            {/* Search Input */}
            <div className="relative flex-1 min-w-[240px]">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search questions or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#10B981] transition-colors"
              />
            </div>

            {/* Expand / Collapse All Buttons */}
            <div className="flex items-center gap-2 font-sans">
              <button
                onClick={expandAll}
                className="text-[11px] font-bold text-[#071C3F] hover:text-[#10B981] px-3 py-1.5 rounded-lg bg-white border border-slate-200 transition-colors cursor-pointer"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="text-[11px] font-bold text-slate-500 hover:text-slate-900 px-3 py-1.5 rounded-lg bg-white border border-slate-200 transition-colors cursor-pointer"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 font-sans">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#071C3F] text-white shadow-md border border-[#071C3F]"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
                  }`}
                >
                  {cat === "All" ? "All Questions" : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Animated Accordion List */}
        <div className="space-y-4 font-sans">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq) => {
              const originalIdx = FAQS.findIndex((f) => f.q === faq.q);
              const isOpen = openIndices.includes(originalIdx);

              return (
                <motion.div
                  key={faq.q}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? "bg-slate-900 text-white border-[#10B981] shadow-lg border-l-4 border-l-[#10B981]"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-900 border-slate-200"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(originalIdx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-extrabold text-base sm:text-lg cursor-pointer font-sans"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full shrink-0 ${isOpen ? "bg-[#10B981]" : "bg-slate-400"}`} />
                      <span>{faq.q}</span>
                    </span>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? "bg-[#10B981]/20 text-[#10B981]" : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 text-sm leading-relaxed border-t border-slate-800/80 font-normal text-slate-300 space-y-3 font-sans">
                          <p>{faq.a}</p>
                          <div className="pt-2 flex items-center gap-2 text-xs text-[#10B981] font-bold">
                            <CheckCircle2 className="w-4 h-4 shrink-0" />
                            <span>Verified Apex Edge Executive Advisory Methodology</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredFaqs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200 text-slate-500 font-sans"
            >
              No matching questions found for &ldquo;{searchQuery}&rdquo;. Try another term or clear the filter.
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
