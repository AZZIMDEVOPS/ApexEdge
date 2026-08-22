"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Award, Target, Users, RefreshCw, X, CheckCircle2, MessageCircle, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface CoreValueDetail {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  fullDesc: string;
  pillars: string[];
  delay: number;
}

const coreValueItems: CoreValueDetail[] = [
  {
    id: "professionalism",
    icon: Award,
    title: "Professionalism & Expertise",
    shortDesc: "Continuous learning and mastery in company secretarial, legal, and advisory matters.",
    fullDesc: "Our team maintains rigorous continuous professional development, mastery of statutory law, and unyielding adherence to ethics across company secretarial, corporate legal, and governance practices.",
    pillars: [
      "Certified Public Secretaries (CPS-K) & Advocates of the High Court of Kenya",
      "Proactive monitoring of legislative updates & Business Registration Service (BRS) guidelines",
      "Zero-compromise statutory compliance accuracy & filing integrity",
      "Tailored governance counsel for private, public, and parastatal entities",
    ],
    delay: 0,
  },
  {
    id: "excellence",
    icon: ShieldCheck,
    title: "Service Excellence",
    shortDesc: "Reliability, agility, and efficiency at every step of client engagement.",
    fullDesc: "We benchmark our service delivery against top global standards—ensuring rapid response times, meticulous document turnarounds, and proactive client advisory.",
    pillars: [
      "Guaranteed rapid turnaround times on corporate filings & board documentation",
      "Dedicated senior compliance advisor assigned to your organization",
      "Transparent communication & automated compliance status reporting",
      "Agile problem-solving for complex regulatory & corporate queries",
    ],
    delay: 0.1,
  },
  {
    id: "client-focus",
    icon: Target,
    title: "Client Focus",
    shortDesc: "Personalized corporate solutions designed around your unique organizational needs.",
    fullDesc: "We treat every client as a strategic partner, designing bespoke secretarial, legal, and HR frameworks customized to your sector, organizational scale, and long-term goals.",
    pillars: [
      "Customized compliance calendars aligned with your financial year & board schedule",
      "Deep sector-specific insights across private enterprises, public entities & financial institutions",
      "Bespoke advisory packages suited for SMEs, Multinationals & State Corporations",
      "Direct executive access to partners & dedicated team leads",
    ],
    delay: 0.2,
  },
  {
    id: "collaboration",
    icon: Users,
    title: "Collaboration",
    shortDesc: "Inclusive teamwork driving high-impact compliance and governance outcomes.",
    fullDesc: "We work hand-in-hand with your executive leadership, board members, internal legal counsel, and auditors to foster alignment and seamless governance execution.",
    pillars: [
      "Seamless integration with your internal legal, HR & finance leadership teams",
      "Joint strategic planning & governance alignment workshops for boards",
      "Open-door communication policy for corporate executives & directors",
      "Multi-disciplinary team synergy for end-to-end corporate transactions",
    ],
    delay: 0.3,
  },
  {
    id: "improvement",
    icon: RefreshCw,
    title: "Continuous Improvement",
    shortDesc: "Proactively adapting to evolving Kenyan and international regulatory frameworks.",
    fullDesc: "We continuously modernize our methodologies, adopting digital governance tools, automated compliance tracking, and innovative legal frameworks to serve clients better.",
    pillars: [
      "Adoption of modern digital board management tools & secure compliance archives",
      "Regular policy reviews aligned with Kenya Companies Act & Capital Markets guidelines",
      "Continuous client feedback integration & service delivery optimization",
      "Proactive regulatory advisory updates dispatched to client leadership",
    ],
    delay: 0.4,
  },
];

export function CoreValuesInteractive() {
  const [selectedValue, setSelectedValue] = useState<CoreValueDetail | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring" as const, stiffness: 100 },
    },
    hover: {
      scale: 1.04,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 lg:grid-cols-3"
      >
        {coreValueItems.map((value) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={value.id}
              variants={itemVariants}
              whileHover="hover"
              onClick={() => setSelectedValue(value)}
              className="perspective"
            >
              <Card className="relative overflow-hidden bg-white border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-blue-600/50 transition-all cursor-pointer group h-full flex flex-col justify-between">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-amber-50/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="relative z-10 space-y-4 p-6 sm:p-8 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <motion.div
                      className="rounded-2xl bg-blue-600/10 border border-blue-600/20 p-4 w-fit text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <Icon className="h-7 w-7" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {value.shortDesc}
                    </p>
                  </div>
                  <motion.div
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:gap-3 transition-all pt-4"
                    whileHover={{ x: 4 }}
                  >
                    Learn more →
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Interactive Modal Popup Window */}
      <AnimatePresence>
        {selectedValue && (() => {
          const ValueModalIcon = selectedValue.icon;
          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              {/* Backdrop Blur */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedValue(null)}
                className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
              />

              {/* Modal Dialog Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-slate-900 border border-amber-500/40 text-white shadow-2xl z-10"
              >
                {/* Top Accent Bar */}
                <div className="h-2 bg-gradient-to-r from-amber-400 via-blue-500 to-indigo-600" />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedValue(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="p-6 sm:p-10 space-y-6">
                  {/* Modal Header */}
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-amber-500/20 border border-amber-500/30 p-4 text-amber-400">
                      <ValueModalIcon className="h-8 w-8" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">Core Value</span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{selectedValue.title}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                    {selectedValue.fullDesc}
                  </p>

                  {/* Pillars List */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-blue-400">Core Principles & Commitments</h4>
                    <div className="grid gap-3 sm:grid-cols-1">
                      {selectedValue.pillars.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 rounded-xl bg-slate-950/60 p-3.5 border border-slate-800">
                          <CheckCircle2 className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-200 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Modal Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-800">
                    <Button
                      asChild
                      className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-6 rounded-full flex-1 shadow-lg shadow-blue-600/30"
                    >
                      <a
                        href={`https://wa.me/254799565125?text=Hi%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20${encodeURIComponent(selectedValue.title)}%20standards.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="h-5 w-5" />
                        <span>Contact Advisory Team</span>
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedValue(null)}
                      className="border-slate-700 bg-slate-800/80 text-slate-200 hover:bg-slate-700 hover:text-white py-6 rounded-full font-bold"
                    >
                      Close Window
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>
    </>
  );
}
