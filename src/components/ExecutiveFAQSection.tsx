"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

export const FAQS: FAQItem[] = [
  {
    q: "What does Apex Edge do?",
    a: "Apex Edge helps organisations identify hidden operational risks, strengthen internal controls, architect role & performance scorecards, and build practical management systems. We turn recurring organizational problems into clear actions, accountable owners, and Board-ready decisions.",
  },
  {
    q: "Who does Apex Edge work with?",
    a: "We work with Boards of Directors, CEOs, Finance Leaders, HR Directors, and Senior Executives across private enterprises, public entities, state corporations, financial institutions, and fast-growing organizations in Kenya and East Africa.",
  },
  {
    q: "What are your Practice Areas?",
    a: "Apex Edge operates across 6 outcome-driven Practice Areas: 01 — Governance & Risk, 02 — People & Performance, 03 — Controls & Policies, 04 — Leadership & Capability, 05 — Data Protection & Privacy, and 06 — Corporate Secretarial.",
  },
  {
    q: "Does Apex Edge only provide advisory reports?",
    a: "No. Traditional consultants deliver static PDF reports. Apex Edge translates recommendations into practical, working management tools—such as risk heat maps, financial approval SOPs, OKR scorecards, data inventories, and execution dashboards that teams actually use daily.",
  },
  {
    q: "What does a Clarity Session involve?",
    a: "A Clarity Session is a focused 45-minute working meeting with an Apex Edge Partner to explore one specific organizational challenge. We diagnose root system causes, identify key governance gaps, and outline potential practical interventions.",
  },
  {
    q: "What do we receive after the Clarity Session?",
    a: "Following your session, you receive a concise Executive Action Map detailing the diagnosed root cause, key risk implications, immediate recommended interventions, and suggested sprint scope.",
  },
  {
    q: "Do we need to commit to a long-term retainer?",
    a: "No. Apex Edge is structured around outcome-based Signature Engagements and focused Sprints (such as the Board-Ready Risk Sprint or Policy-to-Practice Sprint). You can start with one specific challenge without any long-term retainer or open-ended commitment.",
  },
  {
    q: "Can Apex Edge work with our existing leadership and HR team?",
    a: "Yes. We work alongside your internal executive committee, HR leads, internal audit, and department heads to co-design workflows and ensure seamless adoption across your staff.",
  },
  {
    q: "Does Apex Edge support implementation?",
    a: "Yes. In our 4-step framework (Diagnose → Design → Implement → Measure), we support your leadership team during implementation to embed new SOPs, train staff, assign named ownership, and verify operational compliance.",
  },
  {
    q: "How does Data Protection fit into Apex Edge's services?",
    a: "Data Protection & Privacy is a standalone Practice Area (05). We help organisations comply with Data Protection obligations by conducting Gap Assessments, creating Data Inventories, drafting Privacy Policies & DPAs, conducting DPIAs, and setting up data breach response protocols.",
  },
];

export function ExecutiveFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-white text-slate-900 overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#071C3F] text-xs font-black uppercase tracking-[0.25em] shadow-xs"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#10B981]" />
            <span>EXECUTIVE CLARITY &amp; FAQ</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight"
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            Clear answers to help you understand Apex Edge&apos;s advisory model, deliverables, and engagement process.
          </motion.p>
        </div>

        {/* Accordion List on Clean White Canvas */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden shadow-xs hover:border-[#10B981] transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-extrabold text-base sm:text-lg text-slate-900 hover:text-[#071C3F] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#10B981] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 pb-6 text-sm text-slate-700 leading-relaxed border-t border-slate-200 pt-4 font-normal"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
