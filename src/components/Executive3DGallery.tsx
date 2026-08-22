"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Sparkles, Camera, Eye, ArrowRight, X, Building2, Users2, ShieldCheck, Award } from "lucide-react";

export interface GalleryItem {
  id: string;
  image: string;
  category: string;
  title: string;
  location: string;
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "boardroom-governance",
    image: "/authentic_boardroom_directors.jpg",
    category: "Boardroom Governance",
    title: "Executive Fiduciary Oversight Session",
    location: "Nairobi Financial District",
    description: "Senior Board of Directors and executive committee evaluating quarterly risk heat maps, capital allocations, and fiduciary resolutions."
  },
  {
    id: "board-chairman-presentation",
    image: "/authentic_board_chairman_presentation.jpg",
    category: "Board Leadership",
    title: "Board Evaluation & Charter Presentation",
    location: "Corporate Governance Chambers",
    description: "Senior Board Chairman presenting Mwongozo compliance dossiers, committee charters, and statutory governance audit findings."
  },
  {
    id: "controls-laptop-audit",
    image: "/authentic_controls_laptop_audit.jpg",
    category: "Controls & SOPs",
    title: "Operational Workflow & Controls Audit",
    location: "Financial Controls Suite",
    description: "Advisory partners executing dual-signoff authorization thresholds and standard operating procedure risk testing."
  },
  {
    id: "senior-partner-corridor",
    image: "/authentic_senior_partner_corridor.jpg",
    category: "Partner Advisory",
    title: "Executive Mandate & Strategy Check-In",
    location: "Advisory Executive Floor",
    description: "Lead Advisory Partner consulting with Managing Directors on 90-day execution milestones and leadership velocity."
  },
  {
    id: "executive-lounge-review",
    image: "/authentic_executive_lounge_review.jpg",
    category: "Digital Governance",
    title: "Executive Board Pack & Tablet Review",
    location: "Executive Partner Lounge",
    description: "Reviewing condensed 15-page digital board papers and real-time operational risk dashboards prior to quarterly voting."
  },
  {
    id: "advisor-laptop-portrait",
    image: "/authentic_advisor_laptop_portrait.jpg",
    category: "Advisory Practice",
    title: "Senior Governance & Risk Specialist",
    location: "Apex Edge Advisory Hub",
    description: "Specialist partner designing tailored governance scorecards, salary grading bands, and regulatory filings."
  },
  {
    id: "executive-advisor",
    image: "/authentic_executive_office_advisor.jpg",
    category: "Strategic Advisory",
    title: "Lead Partner Advisory Consultation",
    location: "Apex Edge Executive Suite",
    description: "Senior advisory lead assessing enterprise restructuring roadmaps and organizational role clarity frameworks."
  },
  {
    id: "strategy-conference",
    image: "/authentic_strategy_meeting_overhead.jpg",
    category: "Strategy & Execution",
    title: "Cross-Functional Sprint Workshop",
    location: "Executive Innovation Hub",
    description: "Five departmental leaders aligning on 90-day execution milestones, OKRs, and delegated financial sign-off thresholds."
  },
  {
    id: "leadership-panel",
    image: "/authentic_executive_leadership_panel.jpg",
    category: "Leadership & Capability",
    title: "Partner Advisory Leadership Panel",
    location: "Regional HQ Office",
    description: "Executive partners specializing in corporate governance, institutional performance, and statutory regulatory compliance."
  },
  {
    id: "financial-analytics",
    image: "/authentic_financial_analyst_dashboard.jpg",
    category: "Controls & Analytics",
    title: "Risk Heat Map & Analytics Review",
    location: "Analytics War Room",
    description: "Advisory consultant modeling quantitative risk indicators and converted digital standard operating procedures."
  },
  {
    id: "team-collaboration",
    image: "/authentic_team_collaboration.jpg",
    category: "People & Performance",
    title: "Executive Committee Alignment",
    location: "Enterprise Collaboration Lounge",
    description: "Multidisciplinary team structuring job evaluation bands, competency frameworks, and named single-point accountability."
  },
  {
    id: "executive-dialogue",
    image: "/authentic_executive_street_dialogue.jpg",
    category: "Client Engagements",
    title: "Bespoke Institutional Consultation",
    location: "Commercial Enterprise Plaza",
    description: "Senior managing directors conducting candid strategic check-ins on quarterly delivery speed and governance velocity."
  },
  {
    id: "statutory-signing",
    image: "/authentic_corporate_signing_desk.jpg",
    category: "Corporate Secretarial",
    title: "Statutory Dossier & Resolution Signing",
    location: "Corporate Secretarial Chambers",
    description: "Certified board minute documentation, annual BRS statutory returns, and Companies Act 2015 compliance certification."
  },
  {
    id: "advisory-one-on-one",
    image: "/authentic_advisory_one_on_one.jpg",
    category: "Executive Coaching",
    title: "Managing Director Clarity Session",
    location: "Partner Working Office",
    description: "Focused 45-minute working session resolving operational friction, audit exceptions, and leadership execution bottlenecks."
  },
  {
    id: "senior-briefing",
    image: "/authentic_senior_partner_briefing.jpg",
    category: "Capability Building",
    title: "Director Governance Masterclass",
    location: "Executive Training Centre",
    description: "Senior governance practitioner delivering structured board-readiness simulations and Mwongozo Code compliance toolkits."
  }
];

export function Executive3DGallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.95]);

  return (
    <section 
      ref={containerRef}
      className="relative py-24 bg-gradient-to-b from-slate-900 via-[#071C3F] to-slate-950 text-white overflow-hidden border-t border-slate-800"
    >
      {/* 3D Ambient Perspective Lights */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-emerald-400 text-xs font-black uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PRACTICE &amp; LEADERSHIP GALLERY</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Advisory in Action Across East Africa
            </h2>
            
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              Authentic glimpses into our boardroom working sessions, leadership sprints, and hands-on governance engagements.
            </p>
          </div>

          <div className="text-xs text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Interactive 3D Perspective · Click any frame to inspect</span>
          </div>
        </div>

        {/* 3D Perspective Gallery Container */}
        <motion.div 
          style={{ rotateX, scale, perspective: 1200 }}
          className="relative rounded-3xl p-4 sm:p-6 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Dual Row Continuous 3D Infinite Marquee */}
          <div className="space-y-6">
            
            {/* Top Row Marquee (Items 1-8) */}
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x cursor-grab active:cursor-grabbing">
              {GALLERY_ITEMS.slice(0, 8).map((item, idx) => (
                <motion.div
                  key={item.id}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.03, 
                    rotateY: -4,
                    transition: { duration: 0.3 } 
                  }}
                  onClick={() => setSelectedItem(item)}
                  className="flex-shrink-0 w-[300px] sm:w-[360px] rounded-2xl overflow-hidden bg-slate-900/90 border border-white/15 shadow-xl group cursor-pointer transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10"
                >
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-950">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 brightness-95 group-hover:brightness-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-[#071C3F]/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider border border-white/20">
                        {item.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[11px] text-slate-300 font-bold">
                        {item.location}
                      </span>
                      <span className="p-1.5 rounded-full bg-emerald-500 text-slate-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Eye className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  <div className="p-4 space-y-1 bg-slate-900/80">
                    <h3 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Row Marquee (Items 8-15) */}
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x cursor-grab active:cursor-grabbing">
              {GALLERY_ITEMS.slice(7, 15).map((item, idx) => (
                <motion.div
                  key={item.id}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.03, 
                    rotateY: 4,
                    transition: { duration: 0.3 } 
                  }}
                  onClick={() => setSelectedItem(item)}
                  className="flex-shrink-0 w-[300px] sm:w-[360px] rounded-2xl overflow-hidden bg-slate-900/90 border border-white/15 shadow-xl group cursor-pointer transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10"
                >
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-950">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 brightness-95 group-hover:brightness-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-[#071C3F]/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider border border-white/20">
                        {item.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[11px] text-slate-300 font-bold">
                        {item.location}
                      </span>
                      <span className="p-1.5 rounded-full bg-emerald-500 text-slate-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Eye className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  <div className="p-4 space-y-1 bg-slate-900/80">
                    <h3 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>

      {/* 3D Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative w-full max-w-4xl rounded-3xl bg-slate-900 border border-white/20 shadow-2xl overflow-hidden z-10 my-8 text-white"
            >
              {/* Photo Display */}
              <div className="relative h-80 sm:h-[450px] w-full bg-slate-950 overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover object-center brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/70 hover:bg-slate-900 text-white border border-white/20 transition-all cursor-pointer z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Overlay Metadata */}
                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-400 text-slate-950 text-[10px] font-black uppercase tracking-wider">
                      {selectedItem.category}
                    </span>
                    <span className="text-xs text-slate-300 font-semibold">
                      {selectedItem.location}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                    {selectedItem.title}
                  </h2>
                </div>
              </div>

              {/* Description & Action */}
              <div className="p-6 sm:p-8 bg-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <p className="text-sm text-slate-300 leading-relaxed max-w-2xl font-normal">
                  {selectedItem.description}
                </p>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-6 py-2.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-xs transition-all flex-shrink-0 cursor-pointer shadow-md"
                >
                  Close Inspection
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
