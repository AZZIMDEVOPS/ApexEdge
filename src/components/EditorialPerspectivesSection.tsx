"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, ArrowRight, Clock, Tag, Sparkles } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export interface ArticlePerspective {
  id: string;
  category: string;
  title: string;
  readTime: string;
  author: string;
  date: string;
  excerpt: string;
  keyTakeaway: string;
  image: string;
  imageAlt: string;
}

export const EDITORIAL_ARTICLES: ArticlePerspective[] = [
  {
    id: "why-policy-manuals-fail",
    category: "FIELD NOTES · GOVERNANCE & SOPS",
    title: "Why 200-Page Policy Manuals Fail in Kenyan Boardrooms (And What to Do Instead)",
    readTime: "4 min read",
    author: "Dr. Amina K. Wanjiku",
    date: "February 2026",
    image: "/advisory_report_consultation.jpg",
    imageAlt: "Executive advisory consultation reviewing governance policy and compliance binder",
    excerpt:
      "We examine why dense SOP binders inevitably turn into executive shelf-ware, and how condensing procedures into 1-page digital approval workflows eliminated recurring audit exceptions for a Tier-1 regional lender.",
    keyTakeaway: "A control that is too complex to follow in daily operations is not a control—it is a liability.",
  },
  {
    id: "silent-cost-of-role-overlap",
    category: "OUR THINKING · PEOPLE & PERFORMANCE",
    title: "The Silent Cost of Role Overlap: How Growing Organisations Lose Executive Velocity",
    readTime: "5 min read",
    author: "David O. Mutua",
    date: "January 2026",
    image: "/board_whiteboard_presentation.jpg",
    imageAlt: "Executive leadership alignment session mapping organizational roles and accountability matrices",
    excerpt:
      "When three senior executives share overlapping sign-off authority, no one is truly accountable when deadlines slip. Here is how transparent job grading and named ownership matrices restore execution speed.",
    keyTakeaway: "Clear role boundaries and explicit decision rights accelerate execution far faster than hiring more managers.",
  },
  {
    id: "kenya-dp-act-operational-privacy",
    category: "REGULATORY PERSPECTIVES · DATA PROTECTION",
    title: "Kenya Data Protection Act 2019: Moving from Legal Panic to Daily Operational Privacy",
    readTime: "6 min read",
    author: "Apex Edge Privacy Practice",
    date: "December 2025",
    image: "/operations_analyst_desk.jpg",
    imageAlt: "Compliance officer conducting data protection inventory mapping and DPIA registers",
    excerpt:
      "Statutory compliance under the Office of the Data Protection Commissioner (ODPC) is not a one-time legal memo. It requires continuous data mapping, active DPIA registers, and standardized vendor processing agreements.",
    keyTakeaway: "Data privacy must live in system architecture and vendor contracts, not in an unread legal binder.",
  },
  {
    id: "mwongozo-governance-in-practice",
    category: "BOARD ADVISORY · PUBLIC SECTOR",
    title: "Mwongozo Governance in Practice: Turning Compliance Checklists into Boardroom Clarity",
    readTime: "5 min read",
    author: "Dr. Amina K. Wanjiku",
    date: "November 2025",
    image: "/african_board_signing.jpg",
    imageAlt: "Board of Directors executing Mwongozo compliance charter and fiduciary oversight protocols",
    excerpt:
      "How State Corporations and regulated public institutions can transition from 300-page operational Board pack clutter to 15-page prioritized risk heat maps that empower Directors to make decisive fiduciary calls.",
    keyTakeaway: "Independent Directors need high-signal risk visibility, not operational transcripts.",
  },
];

export function EditorialPerspectivesSection() {
  return (
    <section id="perspectives" className="relative py-24 bg-white text-slate-900 overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <SectionLabel number="04" title="FIELD NOTES & PERSPECTIVES" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight"
          >
            Advisory Insights &amp; Real Field Observations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            Empirical lessons from resolving governance breakdowns, internal control exceptions, and leadership bottlenecks across East African enterprises.
          </motion.p>
        </div>

        {/* 2-Column Articles Grid with Photography */}
        <div className="grid gap-8 md:grid-cols-2">
          {EDITORIAL_ARTICLES.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-3xl bg-white border-2 border-slate-200 overflow-hidden hover:border-slate-300 transition-all flex flex-col justify-between shadow-lg hover:shadow-xl group"
            >
              {/* Authentic Article Photography Frame */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#071C3F]/90 text-white text-[11px] font-black uppercase tracking-wider border border-white/20 backdrop-blur-md shadow-md">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-white/90 text-xs font-bold bg-slate-900/80 px-2.5 py-1 rounded-full backdrop-blur-md">
                    <Clock className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 leading-tight group-hover:text-[#071C3F] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {article.excerpt}
                  </p>

                  {/* Key Takeaway Banner */}
                  <div className="p-4 rounded-2xl bg-slate-50 border-l-4 border-[#10B981] border-slate-200 space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#071C3F] block">
                      Core Operational Takeaway
                    </span>
                    <p className="text-xs text-slate-900 font-bold italic">
                      &ldquo;{article.keyTakeaway}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                  <span className="font-bold text-slate-800">{article.author} · {article.date}</span>
                  <span className="text-[#071C3F] font-black flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Article →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
