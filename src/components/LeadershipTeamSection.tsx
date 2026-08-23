"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, ArrowRight, Award, CheckCircle2 } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export interface LeaderProfile {
  name: string;
  role: string;
  practiceFocus: string;
  image: string;
  bio: string;
  perspective: string;
  background: string[];
}

const LEADERS: LeaderProfile[] = [
  {
    name: "Dr. Amina K. Wanjiku",
    role: "Managing Partner & Head of Governance",
    practiceFocus: "Board Governance, CMA Audits & Executive Risk",
    image: "/executive_leader_lounge.jpg",
    bio: "Over 16 years advising Boards of Directors, commercial enterprises, and financial institutions across East Africa. Amina specializes in cutting through boardroom friction to establish clear risk heat maps and statutory compliance charters.",
    perspective: "A Board cannot govern what it cannot clearly see in 15 pages or less.",
    background: [
      "Certified Governance Auditor & Board Evaluation Specialist",
      "Former Senior Advisor to East African Financial Regulators",
      "Specialist in Corporate Secretarial & Fiduciary Frameworks",
    ],
  },
  {
    name: "David O. Mutua",
    role: "Senior Partner, Controls & Performance Systems",
    practiceFocus: "Internal Controls, SOP Engineering & Job Grading",
    image: "/african_partner_portrait.jpg",
    bio: "A pragmatic operations and financial control architect who spent over 14 years turning chaotic multi-branch workflows into rigorous, automated approval matrices and transparent compensation frameworks.",
    perspective: "If a policy isn't embedded into daily digital sign-offs, it doesn't exist.",
    background: [
      "Fellow Chartered Accountant (FCA / CPA-K)",
      "Architect of 50+ Enterprise Financial Authorization Matrices",
      "Expert in OKR Cascades & Executive Compensation Bands",
    ],
  },
];

export function LeadershipTeamSection() {
  return (
    <section className="relative py-24 bg-white text-slate-900 overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <SectionLabel number="04" title="OUR LEADERSHIP & PARTNERS" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight"
          >
            The Partners Behind the Advisory Standard
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            We don&apos;t hand your mandate to junior analysts. Our engagements are directly led by experienced practitioners with deep East African corporate and regulatory experience.
          </motion.p>
        </div>

        {/* Leadership Cards */}
        <div className="grid gap-10 lg:grid-cols-2">
          {LEADERS.map((leader, idx) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-10 space-y-7 flex flex-col justify-between hover:border-[#10B981] transition-all duration-300 shadow-sm"
            >
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#10B981] shrink-0 shadow-md">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#071C3F] bg-[#10B981]/20 px-2.5 py-1 rounded-full border border-[#10B981]/40">
                      {leader.practiceFocus}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                      {leader.name}
                    </h3>
                    <p className="text-xs text-slate-600 font-semibold">
                      {leader.role}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {leader.bio}
                </p>

                {/* Perspective Pull Quote */}
                <div className="p-4 rounded-2xl bg-white border-l-4 border-[#10B981] border border-slate-200 text-xs text-slate-800 italic font-medium shadow-xs">
                  &ldquo;{leader.perspective}&rdquo;
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-200">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                    Core Advisory Credentials:
                  </span>
                  <div className="space-y-1.5">
                    {leader.background.map((bg, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                        <span>{bg}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Nairobi, Kenya HQ</span>
                <span className="text-[#071C3F] font-bold">Partner-Led Engagement</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

