"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  BookOpen,
  Calendar as CalendarIcon,
  Clock,
  ArrowRight,
  Sparkles,
  Search,
  Tag,
  CheckCircle2,
  ShieldCheck,
  Mail,
  Phone,
  MessageCircle,
  X,
  FileText,
  UserCheck,
  ChevronRight,
  Pause,
  Play,
  RotateCcw
} from "lucide-react";
import { Button } from "@/components/ui/button";

export interface EditorialArticle {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  readTime: string;
  author: string;
  authorTitle: string;
  date: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  keyTakeaway: string;
  contentParagraphs: string[];
  bulletPoints: string[];
}

export const ARTICLES_DATA: EditorialArticle[] = [
  {
    id: "why-policy-manuals-fail",
    category: "GOVERNANCE & SOPS",
    title: "Why 200-Page Policy Manuals Fail in East African Boardrooms (And What to Do Instead)",
    subtitle: "Translating static regulatory policy binders into concise 1–2 page operational daily workflows.",
    readTime: "4 min read",
    author: "Dr. Amina K. Wanjiku",
    authorTitle: "Senior Advisory Partner, Governance",
    date: "August 2026",
    image: "/authentic_controls_laptop_audit.jpg",
    imageAlt: "Executive advisory consultation reviewing governance policy and digitized SOP workflows",
    excerpt:
      "We examine why dense SOP binders inevitably turn into executive shelf-ware, and how condensing procedures into 1-page digital approval workflows eliminated recurring audit exceptions for a Tier-1 regional lender.",
    keyTakeaway: "A control that is too complex to follow in daily operations is not a control—it is a liability.",
    contentParagraphs: [
      "Across East African financial institutions, public corporations, and family business groups, the standard response to regulatory findings or audit exceptions is to draft a thicker policy binder. We frequently enter executive suites that possess 300-page operational manuals detailing every imaginable risk scenario.",
      "Yet when independent Board evaluations or forensic internal audits are performed, the root causes remain unchanged: staff skip approval gates, decision thresholds are bypassed, and key compliance sign-offs are missed. Why?",
      "Because dense, unindexed policy text cannot be executed under daily operating pressure. Operational velocity demands clarity. By converting static policy documents into 1–2 page daily digital SOP workflows with named single-point owners, organizations achieve instant adoption, zero ambiguity, and clean audit trails."
    ],
    bulletPoints: [
      "Replace multi-page narrative SOPs with single-page visual decision maps.",
      "Assign explicit RACI single-point sign-off authority to named job titles.",
      "Automate statutory compliance approval gates directly inside enterprise ERP & workflow software."
    ]
  },
  {
    id: "kenya-dp-act-operational-privacy",
    category: "DATA PROTECTION",
    title: "Kenya Data Protection Act 2019: Moving from Legal Panic to Daily Operational Privacy",
    subtitle: "Systemic ODPC compliance, data mapping, vendor processing audits, and active DPIA registers.",
    readTime: "6 min read",
    author: "Apex Edge Privacy Practice",
    authorTitle: "Data Governance & Statutory Compliance Group",
    date: "August 2026",
    image: "/authentic_executive_lounge_review.jpg",
    imageAlt: "Compliance officer conducting data protection inventory mapping and DPIA registers",
    excerpt:
      "Statutory compliance under the Office of the Data Protection Commissioner (ODPC) is not a one-time legal memo. It requires continuous data mapping, active DPIA registers, and standardized vendor processing agreements.",
    keyTakeaway: "Data privacy must live in system architecture and vendor contracts, not in an unread legal binder.",
    contentParagraphs: [
      "With increasing enforcement actions and penalty notices issued by the ODPC in Nairobi, enterprise leadership teams can no longer view data protection as a quarterly legal consultation. Privacy governance must be operationalized.",
      "Our practice works with commercial banks, FinTech scale-ups, and health conglomerates to establish comprehensive Data Inventory Catalogs, Data Protection Impact Assessments (DPIA), and automated Data Subject Access Request (DSAR) workflows.",
      "Real privacy resilience is achieved when customer data flows are mapped end-to-end, third-party vendor contracts include statutory processing addendums, and internal teams adhere to privacy-by-design principles."
    ],
    bulletPoints: [
      "Maintain active, audited Data Protection Impact Assessments (DPIAs) for all personal data workflows.",
      "Establish automated customer consent & Data Subject Access Request (DSAR) response routines.",
      "Conduct mandatory statutory vendor data processing audits across third-party suppliers."
    ]
  },
  {
    id: "silent-cost-of-role-overlap",
    category: "PEOPLE & PERFORMANCE",
    title: "The Silent Cost of Role Overlap: How Growing Enterprises Lose Executive Velocity",
    subtitle: "Isolating decision bottlenecks, diffuse committee authority, and restoring execution speed.",
    readTime: "5 min read",
    author: "David O. Mutua",
    authorTitle: "Managing Partner, Organisation & Performance",
    date: "July 2026",
    image: "/authentic_growth_analytics_consultation.jpg",
    imageAlt: "Executive leadership alignment session mapping organizational roles and accountability matrices",
    excerpt:
      "When three senior executives share overlapping sign-off authority, no one is truly accountable when deadlines slip. Here is how transparent job grading and named ownership matrices restore execution speed.",
    keyTakeaway: "Clear role boundaries and explicit decision rights accelerate execution far faster than hiring more managers.",
    contentParagraphs: [
      "As regional enterprises scale across East Africa, organizational structures frequently lag strategic ambitions. Functional departments duplicate efforts, approval committees proliferate, and key strategic initiatives stall in perpetual consultation.",
      "When responsibility is shared equally among a committee of five managers, accountability disappears. Deadlines drift because no single individual possesses explicit ownership of the deliverable.",
      "Our advisory methodology introduces transparent Job Grading Frameworks and single-point RACI Charters. By defining explicit sign-off limits and single-point named leads, executive team alignment is restored and project delivery time is cut by up to 40%."
    ],
    bulletPoints: [
      "Eliminate overlapping approval authority between functional heads and committee chairs.",
      "Publish single-page RACI Charters identifying exactly who Approves, Executes, and Holds Authority.",
      "Align quarterly executive performance scorecards with verified Board-level outputs."
    ]
  },
  {
    id: "board-governance-in-practice",
    category: "BOARD ADVISORY",
    title: "Corporate Governance in Practice: Turning Compliance Checklists into Boardroom Clarity",
    subtitle: "Replacing 300-page operational Board pack clutter with 15-page high-signal decision papers.",
    readTime: "5 min read",
    author: "Dr. Amina K. Wanjiku",
    authorTitle: "Senior Advisory Partner, Governance",
    date: "July 2026",
    image: "/authentic_boardroom_green_wall_presentation.jpg",
    imageAlt: "Board of Directors executing Board Evaluation and CMA compliance charter protocols",
    excerpt:
      "How commercial enterprises and regulated institutions can transition from 300-page operational Board pack clutter to 15-page prioritized risk heat maps that empower Directors to make decisive fiduciary calls.",
    keyTakeaway: "Independent Directors need high-signal risk visibility, not operational transcripts.",
    contentParagraphs: [
      "Board members are fiduciaries charged with high-level strategy, capital allocation, and risk oversight. Yet all too often, Directors arrive at quarterly Board meetings faced with 350 pages of dense operational reports.",
      "Drowning in uncurated detail makes it virtually impossible for Non-Executive Directors to spot emerging financial risks, statutory compliance gaps, or market threats until audit exceptions occur.",
      "We help Board Chairs and Company Secretaries structure concise, high-signal Board Packs. By synthesizing data into executive heat maps, variance summaries, and clear decision memoranda, Board deliberations shift from operational post-mortems to proactive strategic oversight."
    ],
    bulletPoints: [
      "Cap executive management board papers at a maximum of 15 high-signal pages per agenda item.",
      "Require standard 1-page Decision Summaries detailing strategic options, financial impact, and risk mitigation.",
      "Implement real-time digital Board Risk Registers with single-point named risk owners."
    ]
  },
  {
    id: "companies-act-secretarial-rigor",
    category: "STATUTORY & LEGAL",
    title: "Companies Act 2015 Compliance: Fiduciary Responsibilities for Directors & Secretaries",
    subtitle: "Ensuring 100% statutory validity, certified board minutes, annual returns, and BRS e-filings.",
    readTime: "4 min read",
    author: "Apex Edge Corporate Secretarial Practice",
    authorTitle: "Statutory Filings & Governance Group",
    date: "June 2026",
    image: "/authentic_corporate_signing_desk.jpg",
    imageAlt: "Corporate secretarial advisor executing statutory filings and board resolutions",
    excerpt:
      "Statutory compliance under the Kenyan Companies Act 2015 requires flawless documentation of Board resolutions, proper AGM notices, updated registers of beneficial ownership, and timely Business Registration Service (BRS) filings.",
    keyTakeaway: "Statutory compliance lapses carry personal director liability—rigorous secretarial oversight is non-negotiable.",
    contentParagraphs: [
      "Under the Companies Act 2015 and related Business Registration Service (BRS) mandates, corporate secretarial compliance is a strict legal obligation. Failure to maintain accurate registers of directors, charges, or beneficial owners can expose directors to personal fines and corporate disqualification.",
      "Our Corporate Secretarial Practice provides end-to-end secretarial governance for private enterprises, listed companies, and state corporations.",
      "From drafting board resolutions and organizing AGMs to filing annual returns and maintaining statutory registers, we ensure your organization remains 100% compliant with statutory deadlines."
    ],
    bulletPoints: [
      "File annual statutory returns and beneficial ownership disclosures on the BRS portal on time.",
      "Draft certified Board resolutions and maintain chronological minutes signed by the Chair.",
      "Audit articles of association to align with contemporary statutory governance codes."
    ]
  }
];

export function ExecutiveNewsPortal() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<EditorialArticle | null>(null);

  // 10-Second Auto-Rotating News Lead State
  const [leadIndex, setLeadIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto rotation timer effect: rotate every 10 seconds (10,000ms) unless hovered
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setLeadIndex((prev) => (prev + 1) % ARTICLES_DATA.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const currentLeadArticle = ARTICLES_DATA[leadIndex];

  // Filter articles based on Category & Search Query
  const filteredArticles = ARTICLES_DATA.filter((art) => {
    const matchesCategory =
      activeCategory === "ALL" || art.category.toUpperCase().includes(activeCategory.toUpperCase());
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const scrollToCalendar = () => {
    if (typeof window !== "undefined") {
      const el = document.getElementById("calendar-booking");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="w-full bg-white text-slate-900 font-sans">
      
      {/* 1. TOP NEWS JOURNAL HEADER & ACTION STRIP */}
      <div className="border-b border-slate-200 bg-slate-950 text-white font-sans">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
          
          {/* Left Ticker / Date / Edition info */}
          <div className="flex items-center gap-3 text-slate-300 font-medium">
            <span className="px-2.5 py-0.5 rounded bg-[#10B981] text-[#071C3F] font-black uppercase tracking-wider text-[10px]">
              DAILY EDITION
            </span>
            <span className="hidden sm:inline font-mono text-[11px] text-slate-400">
              SUNDAY, 23 AUGUST 2026 · VOL. 24
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-[#10B981] font-bold">
              EAST AFRICAN CORPORATE ADVISORY JOURNAL
            </span>
          </div>

          {/* Right Action Quick Routing Buttons */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Route to Calendar Button */}
            <button
              onClick={scrollToCalendar}
              className="bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black rounded-lg px-3 py-1.5 text-[11px] transition-all flex items-center gap-1.5 shadow-xs font-sans"
            >
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>Route to 20-Min Booking Calendar ↓</span>
            </button>

            {/* Route to Info Email Button */}
            <a
              href="mailto:info@consult-apex.com?subject=Inquiry%20from%20Advisory%20Journal"
              className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold rounded-lg px-3 py-1.5 text-[11px] transition-all flex items-center gap-1.5 font-sans"
            >
              <Mail className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Route to Info Email →</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. JOURNAL MASTHEAD TITLE IN POPPINS FONT */}
      <section className="py-12 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200 font-sans">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 text-center space-y-4 font-sans">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.25em]">
            <BookOpen className="w-3.5 h-3.5 text-[#10B981]" />
            <span>APEX EDGE EXECUTIVE INTELLIGENCE &amp; ADVISORY JOURNAL</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight uppercase font-sans">
            Boardroom Perspectives &amp; Field Briefings
          </h1>

          <p className="max-w-3xl mx-auto text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans">
            Independent regulatory insights, operational field notes, and executive commentaries from our advisory work across East African enterprises, commercial banks, and public state corporations.
          </p>
        </div>
      </section>

      {/* 3. HERO NEWSPAPER / JOURNAL LEAD STORY WITH 10-SECOND AUTO ROTATION & PAUSE ON HOVER */}
      <section className="py-12 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 border-b border-slate-200 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Lead Editorial Feature (8 cols) — Mouse enter/leave triggers 10s auto pause */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="lg:col-span-8 rounded-3xl bg-slate-900 text-white border border-slate-800 overflow-hidden shadow-xl flex flex-col justify-between group relative transition-all"
          >
            
            {/* 10-Second Animated Progress Bar Indicator */}
            <div className="w-full bg-slate-800 h-1.5 relative overflow-hidden">
              {!isPaused ? (
                <motion.div
                  key={leadIndex}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 10, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-[#10B981] via-emerald-400 to-teal-300"
                />
              ) : (
                <div className="h-full bg-[#10B981] w-full opacity-80" />
              )}
            </div>

            {/* Top Rotation Badge & Hover Pause Visual Indicator */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
              {isPaused ? (
                <span className="px-3 py-1 rounded-full bg-amber-500/90 text-slate-950 text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 backdrop-blur-md shadow-md animate-pulse">
                  <Pause className="w-3 h-3 fill-current" />
                  <span>PAUSED ON HOVER</span>
                </span>
              ) : (
                <span className="px-3 py-1 rounded-full bg-slate-950/80 text-[#10B981] text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 border border-[#10B981]/40 backdrop-blur-md">
                  <Play className="w-3 h-3 fill-current" />
                  <span>ROTATING EVERY 10S</span>
                </span>
              )}
            </div>

            {/* Lead Image Header with AnimatePresence Crossfade */}
            <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-slate-950">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentLeadArticle.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={currentLeadArticle.image}
                    alt={currentLeadArticle.imageAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#10B981] text-[#071C3F] text-[10px] font-black uppercase tracking-wider">
                  ★ FEATURED NEWS ({leadIndex + 1} OF {ARTICLES_DATA.length})
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-950/80 text-slate-300 text-[10px] font-mono border border-slate-700 backdrop-blur-md">
                  {currentLeadArticle.date}
                </span>
              </div>
            </div>

            {/* Lead Content Box */}
            <div className="p-6 sm:p-8 space-y-4 font-sans">
              <div className="flex items-center gap-3 text-xs text-[#10B981] font-bold">
                <span>{currentLeadArticle.category}</span>
                <span>·</span>
                <span className="text-slate-400 font-normal flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {currentLeadArticle.readTime}
                </span>
                <span>·</span>
                <span className="text-slate-300">{currentLeadArticle.author}</span>
              </div>

              <h2
                onClick={() => setSelectedArticle(currentLeadArticle)}
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight hover:text-[#10B981] transition-colors cursor-pointer font-sans"
              >
                {currentLeadArticle.title}
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed font-normal font-sans">
                {currentLeadArticle.excerpt}
              </p>

              {/* Key Takeaway Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/40 space-y-1.5">
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#10B981] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>KEY BOARDROOM TAKEAWAY</span>
                </div>
                <p className="text-xs font-semibold text-slate-200 italic font-sans">
                  &ldquo;{currentLeadArticle.keyTakeaway}&rdquo;
                </p>
              </div>

              {/* Article Rotation Selector Dots */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    NEWS ROTATION:
                  </span>
                  {ARTICLES_DATA.map((art, idx) => (
                    <button
                      key={art.id}
                      onClick={() => setLeadIndex(idx)}
                      className={`h-2.5 rounded-full transition-all ${
                        leadIndex === idx
                          ? "w-8 bg-[#10B981]"
                          : "w-2.5 bg-slate-700 hover:bg-slate-500"
                      }`}
                      aria-label={`Jump to article ${idx + 1}`}
                    />
                  ))}
                </div>

                <span className="text-[10px] font-medium text-slate-400 italic">
                  Hover anywhere to pause 10s timer
                </span>
              </div>

              {/* Lead CTA Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800">
                <Button
                  onClick={() => setSelectedArticle(currentLeadArticle)}
                  className="bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black text-xs rounded-xl px-5 py-2.5 shadow-md flex items-center gap-2 font-sans"
                >
                  <span>Read Full Analysis →</span>
                </Button>

                <button
                  onClick={scrollToCalendar}
                  className="text-xs font-bold text-[#10B981] hover:underline flex items-center gap-1.5 font-sans"
                >
                  <CalendarIcon className="w-3.5 h-3.5" />
                  <span>Book 20-Min Session on this Topic →</span>
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Latest Bulletins Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-4 font-sans">
            
            <div className="flex items-center justify-between border-b border-slate-900 pb-2">
              <h3 className="text-xs font-black uppercase tracking-widest text-[#071C3F] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                <span>SELECT ADVISORY BRIEFING</span>
              </h3>
              <span className="text-[10px] font-bold text-slate-500">5 STORIES</span>
            </div>

            <div className="space-y-3">
              {ARTICLES_DATA.map((art, idx) => {
                const isSelectedLead = leadIndex === idx;
                return (
                  <div
                    key={art.id}
                    onClick={() => setLeadIndex(idx)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer space-y-1.5 ${
                      isSelectedLead
                        ? "bg-slate-900 border-[#10B981] text-white shadow-md"
                        : "bg-slate-50 hover:bg-emerald-50/50 border-slate-200 text-slate-900"
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-bold">
                      <span className={isSelectedLead ? "text-[#10B981]" : "text-[#071C3F]"}>
                        {art.category}
                      </span>
                      <span className={isSelectedLead ? "text-slate-400" : "text-slate-500"}>
                        {art.readTime}
                      </span>
                    </div>

                    <h4 className={`text-xs font-black leading-snug ${isSelectedLead ? "text-white" : "text-slate-900"}`}>
                      {art.title}
                    </h4>

                    <div className="flex items-center justify-between text-[10px] font-semibold pt-0.5">
                      <span className={isSelectedLead ? "text-slate-400" : "text-slate-500"}>
                        {art.author}
                      </span>
                      {isSelectedLead ? (
                        <span className="text-[#10B981] font-bold flex items-center gap-1">
                          Active Story ★
                        </span>
                      ) : (
                        <span className="text-slate-600 hover:text-[#10B981] flex items-center gap-1">
                          Preview →
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Direct Quick Action Banner Card */}
            <div className="rounded-2xl bg-[#071C3F] text-white p-5 space-y-3 border border-slate-800 shadow-md">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#10B981]">
                EXECUTIVE DIRECT ROUTING
              </span>
              <h4 className="text-sm font-black text-white">Need Customized Advisory for Your Board?</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Connect directly with an Apex Edge Advisory Partner via calendar or official info email line.
              </p>
              <div className="space-y-2 pt-1">
                <button
                  onClick={scrollToCalendar}
                  className="w-full bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black rounded-xl py-2.5 text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <CalendarIcon className="w-3.5 h-3.5" />
                  <span>Book 20-Min Session →</span>
                </button>
                <a
                  href="mailto:info@consult-apex.com"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold rounded-xl py-2 px-3 text-[11px] flex items-center justify-center gap-2 border border-slate-700"
                >
                  <Mail className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Email info@consult-apex.com</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. SEARCH & CATEGORY FILTER TABS */}
      <section className="py-8 bg-slate-100 border-b border-slate-200 font-sans">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6 font-sans">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 font-sans">
            {[
              { id: "ALL", label: "ALL ARTICLES" },
              { id: "GOVERNANCE", label: "BOARD GOVERNANCE & SOPS" },
              { id: "DATA PROTECTION", label: "DATA PROTECTION (ODPC)" },
              { id: "PEOPLE", label: "PEOPLE & PERFORMANCE" },
              { id: "STATUTORY", label: "STATUTORY & LEGAL" },
            ].map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all font-sans ${
                    isActive
                      ? "bg-[#071C3F] text-white shadow-md"
                      : "bg-white text-slate-700 hover:bg-white/80 border border-slate-200"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full md:w-72 font-sans">
            <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles & topics..."
              className="w-full rounded-xl bg-white border border-slate-300 pl-10 pr-4 py-2 text-xs font-medium text-slate-900 placeholder-slate-400 focus:border-[#10B981] focus:outline-none shadow-xs font-sans"
            />
          </div>

        </div>
      </section>

      {/* 5. FILTERED ARTICLES GRID */}
      <section className="py-16 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 border-b border-slate-200 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              className="rounded-3xl bg-white border border-slate-200 hover:border-[#10B981] shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group font-sans"
            >
              <div>
                {/* Photo Frame */}
                <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.imageAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#071C3F]/90 text-[#10B981] text-[10px] font-black uppercase tracking-wider backdrop-blur-md border border-slate-700">
                      {art.category}
                    </span>
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span>{art.author}</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3
                    onClick={() => setSelectedArticle(art)}
                    className="text-lg font-black text-slate-950 group-hover:text-[#071C3F] leading-snug cursor-pointer transition-colors font-sans"
                  >
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 font-normal">
                    {art.excerpt}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] space-y-1">
                    <span className="font-extrabold text-[#071C3F] uppercase text-[9px] tracking-wider block">
                      Core Insight:
                    </span>
                    <p className="text-slate-700 italic line-clamp-2">
                      &ldquo;{art.keyTakeaway}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between gap-2 mt-4">
                <Button
                  onClick={() => setSelectedArticle(art)}
                  variant="outline"
                  className="border-slate-200 hover:border-[#10B981] hover:bg-emerald-50 text-[#071C3F] font-bold text-xs rounded-xl py-2 px-3 flex items-center gap-1 font-sans"
                >
                  <span>Read Article</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#10B981]" />
                </Button>

                <button
                  onClick={scrollToCalendar}
                  className="text-[11px] font-extrabold text-[#10B981] hover:underline flex items-center gap-1 font-sans"
                >
                  <CalendarIcon className="w-3.5 h-3.5" />
                  <span>Book 20-Min</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 6. ARTICLE READER MODAL */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-sans">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Reader Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl rounded-3xl bg-white border border-slate-300 text-slate-900 shadow-2xl z-10 overflow-hidden my-8 max-h-[90vh] flex flex-col font-sans"
            >
              {/* Header Accent & Close */}
              <div className="bg-[#071C3F] text-white p-6 sm:p-8 relative border-b border-slate-800 shrink-0">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-3 pr-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#10B981]/20 text-[#10B981] text-[10px] font-black uppercase tracking-wider">
                    {selectedArticle.category} · {selectedArticle.readTime}
                  </div>
                  <h2 className="text-xl sm:text-3xl font-black text-white leading-tight font-sans">
                    {selectedArticle.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 font-normal">
                    {selectedArticle.subtitle}
                  </p>

                  <div className="pt-2 flex items-center gap-3 text-xs text-slate-400 border-t border-slate-800">
                    <span className="font-bold text-white">{selectedArticle.author}</span>
                    <span>·</span>
                    <span>{selectedArticle.authorTitle}</span>
                  </div>
                </div>
              </div>

              {/* Scrollable Body Content */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto font-sans leading-relaxed text-sm text-slate-800">
                
                {/* Hero Photo in Modal */}
                <div className="relative h-60 w-full rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.imageAlt}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Key Takeaway Box */}
                <div className="p-5 rounded-2xl bg-emerald-50 border border-[#10B981]/40 text-[#071C3F] space-y-1.5">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#10B981] block">
                    EXECUTIVE SUMMARY &amp; KEY TAKEAWAY
                  </span>
                  <p className="text-sm font-bold italic">
                    &ldquo;{selectedArticle.keyTakeaway}&rdquo;
                  </p>
                </div>

                {/* Content Paragraphs */}
                <div className="space-y-4 text-sm text-slate-700 leading-relaxed font-normal">
                  {selectedArticle.contentParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {/* Actionable Recommendations Bullet List */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#071C3F]">
                    ACTIONABLE BOARDROOM RECOMMENDATIONS:
                  </h4>
                  <div className="space-y-2">
                    {selectedArticle.bulletPoints.map((bp, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span className="font-semibold">{bp}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Footer Modal Routing CTAs */}
              <div className="p-6 bg-slate-900 text-white border-t border-slate-800 shrink-0 flex flex-wrap items-center justify-between gap-4 font-sans">
                <div className="text-xs text-slate-300">
                  <span className="font-bold text-[#10B981]">Discuss this article</span> with an Apex Edge Partner
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    onClick={() => {
                      setSelectedArticle(null);
                      scrollToCalendar();
                    }}
                    className="bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black text-xs rounded-xl px-5 py-2.5 flex items-center gap-2 shadow-md font-sans"
                  >
                    <CalendarIcon className="w-4 h-4" />
                    <span>Route to 20-Min Booking →</span>
                  </Button>

                  <a
                    href={`mailto:advisory@consult-apex.com?subject=Inquiry%20Regarding%20Article:%20${encodeURIComponent(selectedArticle.title)}`}
                    className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-xs rounded-xl px-4 py-2.5 flex items-center gap-2 font-sans"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Email Advisory Team →</span>
                  </a>
                </div>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

      {/* 7. DIRECT ROUTE TO INFO (EMAIL) & PARTNER CONTACT SECTION */}
      <section id="info-routing" className="py-20 bg-slate-900 text-white border-b border-slate-800 font-sans">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 font-sans">
          <div className="rounded-3xl bg-gradient-to-br from-[#071C3F] via-slate-900 to-[#071C3F] border border-slate-800 p-8 sm:p-14 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-sans">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#10B981] flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>DIRECT EXECUTIVE ROUTING &amp; INQUIRIES</span>
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight font-sans">
                Need Specific Guidance or Direct Info Routing?
              </h2>

              <p className="text-base text-slate-300 leading-relaxed font-normal">
                Email our senior advisory inbox directly or launch a WhatsApp consultation with an Apex Edge Senior Partner. Response guaranteed within 4 business hours.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                {/* General Info Email Box */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-[10px] font-bold text-[#10B981] uppercase tracking-wider block">
                    General Inquiries Line:
                  </span>
                  <a
                    href="mailto:info@consult-apex.com?subject=Executive%20Information%20Request"
                    className="text-sm font-black text-white hover:text-[#10B981] transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-[#10B981]" />
                    <span>info@consult-apex.com</span>
                  </a>
                  <p className="text-[11px] text-slate-400">For general corporate &amp; partner information.</p>
                </div>

                {/* Advisory Practice Email Box */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-[10px] font-bold text-[#10B981] uppercase tracking-wider block">
                    Senior Advisory Desk:
                  </span>
                  <a
                    href="mailto:advisory@consult-apex.com?subject=Senior%20Advisory%20Engagement"
                    className="text-sm font-black text-white hover:text-[#10B981] transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-[#10B981]" />
                    <span>advisory@consult-apex.com</span>
                  </a>
                  <p className="text-[11px] text-slate-400">For direct engagement &amp; diagnostic requests.</p>
                </div>

              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 space-y-4 shadow-xl">
                <h3 className="text-sm font-black text-white uppercase tracking-wider">
                  Direct Phone &amp; Executive WhatsApp
                </h3>

                <div className="space-y-3 text-xs">
                  <a
                    href="tel:+254799565125"
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 text-white font-bold transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#10B981]" />
                    <span>+254 799 565125 (Nairobi HQ)</span>
                  </a>

                  <a
                    href="tel:+254728626323"
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 text-white font-bold transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#10B981]" />
                    <span>+254 728 626323 (Advisory Line)</span>
                  </a>

                  <a
                    href="https://wa.me/254799565125?text=Hello%20Apex%20Edge%20Advisory%2C%20I%20would%20like%20to%20inquire%20about%20a%2020-minute%20clarity%20session."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Direct Executive WhatsApp →</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
