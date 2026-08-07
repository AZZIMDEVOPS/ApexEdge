"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Users,
  Scale,
  Zap,
  Award,
  Globe2,
  X,
  CheckCircle2,
  MessageCircle,
  LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface ServiceDetail {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  delay: number;
  bgImage: string;
  imageAlt: string;
}

const serviceItems: ServiceDetail[] = [
  {
    id: "secretarial",
    icon: FileText,
    title: "Company Secretarial",
    shortDesc: "Statutory compliance, BRS annual filings, board registers, and official company seals management.",
    fullDesc: "Comprehensive statutory compliance, maintenance of company registers, board meeting management, annual returns filing, and regulatory advisory under the Kenyan Companies Act.",
    deliverables: [
      "Board & Committee Meeting Management & Minute Taking",
      "Maintenance of Statutory Registers & Filing Annual Returns with BRS",
      "Corporate Restructuring & Share Capital Management",
      "Regulatory Compliance Audits with Registrar of Companies",
    ],
    delay: 0,
    bgImage: "/african_executive_portrait.png",
    imageAlt: "African Corporate Secretary & Advisory Partner reviewing statutory documents",
  },
  {
    id: "governance",
    icon: Scale,
    title: "Corporate Governance",
    shortDesc: "Board evaluations, ethical compliance, MWONGOZO code, and executive governance audits.",
    fullDesc: "Designing robust governance frameworks, board evaluations, ethical compliance structures, and policy development aligned with global corporate governance best practices.",
    deliverables: [
      "Board Evaluations & Governance Audits",
      "Code of Conduct & Ethics Policy Development",
      "ESG (Environmental, Social & Governance) Framework Integration",
      "Director Induction & Continuous Board Training Programs",
    ],
    delay: 0.1,
    bgImage: "/african_female_executive.png",
    imageAlt: "African Corporate Director leading board evaluation strategy session",
  },
  {
    id: "legal",
    icon: Award,
    title: "Legal Services",
    shortDesc: "Commercial contracts, legal risk management, regulatory licenses, and corporate transactions.",
    fullDesc: "Commercial legal drafting, contract review, legal risk management, regulatory compliance monitoring, and corporate transaction advisory.",
    deliverables: [
      "Commercial Contract Drafting, Vetting & Negotiation",
      "Regulatory Compliance Audits & Legal Risk Mitigation",
      "Intellectual Property Protection & Trademark Registration",
      "Joint Venture & Strategic Partnership Agreements",
    ],
    delay: 0.2,
    bgImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    imageAlt: "African Advocate & Corporate Legal Counsel reviewing commercial instruments",
  },
  {
    id: "hr",
    icon: Users,
    title: "HR Advisory",
    shortDesc: "Labor law compliance, talent management, payroll, and executive organizational restructuring.",
    fullDesc: "Strategic human resource consulting, employment law compliance, organizational restructuring, performance management systems, and HR policy manuals.",
    deliverables: [
      "Employment Law Compliance & Labor Audits",
      "HR Policy Manuals & Employee Handbooks",
      "Organizational Design & Job Grading Structures",
      "Performance Management & Appraisal Systems",
    ],
    delay: 0.3,
    bgImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    imageAlt: "African HR Director coaching executive corporate team",
  },
  {
    id: "systems",
    icon: Zap,
    title: "Systems Setup",
    shortDesc: "Digital board portals, automated compliance dashboards, SOPs, and internal control frameworks.",
    fullDesc: "Implementation of corporate compliance management systems, digital board portals, internal control frameworks, and workflow automation for corporate entities.",
    deliverables: [
      "Digital Board Portal & Record Automation",
      "Internal Control & Compliance Monitoring Dashboards",
      "Standard Operating Procedures (SOP) Manual Development",
      "Document Management & Archival Systems Setup",
    ],
    delay: 0.4,
    bgImage: "/african_executive_portrait.png",
    imageAlt: "African Chief Technology Officer and digital systems lead",
  },
  {
    id: "immigration",
    icon: Globe2,
    title: "Immigration Services",
    shortDesc: "Class D, G, K work permits, special passes, alien IDs, and expatriate mobility support.",
    fullDesc: "End-to-end facilitation of work permits, special passes, alien IDs, dual citizenship, and permanent residence processing for expatriates and foreign investors.",
    deliverables: [
      "Class D & Class G Work Permit Applications & Renewals",
      "Special Passes & Dependent Passes Facilitation",
      "Permanent Residence & Investor Visa Processing",
      "Immigration Compliance Audits & Regulatory Filings",
    ],
    delay: 0.5,
    bgImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    imageAlt: "African Expatriate Mobility & Investor Advisory Director",
  },
];

export function Services3DExplodedView() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring" as const, stiffness: 110 },
    },
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-8 lg:grid-cols-3"
      >
        {serviceItems.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              variants={itemVariants}
              onClick={() => setSelectedService(service)}
              className="perspective"
            >
              <Card className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white shadow-lg hover:shadow-2xl hover:border-[#10B981]/70 transition-all duration-500 cursor-pointer group flex flex-col justify-between h-full hover:-translate-y-2.5">
                
                {/* Emerald Animated Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate-200 group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-[#10B981] group-hover:to-transparent transition-all duration-700 z-30" />

                {/* Soft Glowing Emerald Corner Highlight */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#10B981]/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />

                {/* Editorial Blended Background Photography Layer (Right 50%) */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  {/* Image Element with Soft Opacity & Zoom */}
                  <img
                    src={service.bgImage}
                    alt={service.imageAlt}
                    className="absolute right-0 top-0 h-full w-[65%] object-cover object-center opacity-20 filter grayscale contrast-125 group-hover:scale-108 group-hover:opacity-30 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  />
                  {/* Linear Gradient Fade Mask to preserve white text readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent sm:to-white/40 z-10" />
                </div>

                {/* Card Main Content */}
                <CardContent className="relative z-20 space-y-6 p-7 sm:p-9 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    
                    {/* Icon Badge with Subtle Rotation */}
                    <div className="rounded-2xl bg-[#071C3F] border border-[#10B981]/40 p-4 w-fit text-[#10B981] shadow-md group-hover:bg-[#10B981] group-hover:text-[#071C3F] group-hover:rotate-6 transition-all duration-500">
                      <Icon className="h-7 w-7" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-black text-slate-950 group-hover:text-[#071C3F] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Learn More Action Button */}
                  <div className="pt-4 border-t border-slate-100 group-hover:border-[#10B981]/30 transition-colors">
                    <motion.div
                      className="inline-flex items-center gap-2 text-sm font-extrabold text-[#071C3F] group-hover:text-[#10B981] group-hover:gap-3.5 transition-all"
                    >
                      <span>Explore Service Details</span>
                      <span className="text-[#10B981] font-black">→</span>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Interactive Storytelling Modal Dialog */}
      <AnimatePresence>
        {selectedService && (() => {
          const ServiceModalIcon = selectedService.icon;
          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              {/* Backdrop Blur */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
              />

              {/* Modal Dialog Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", stiffness: 320, damping: 26 }}
                className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-[#071C3F] border border-[#10B981]/40 text-white shadow-2xl z-10"
              >
                {/* Top Accent Bar */}
                <div className="h-2 bg-gradient-to-r from-[#10B981] via-teal-400 to-emerald-300" />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors z-20"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="p-6 sm:p-10 space-y-6">
                  {/* Modal Header */}
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-[#10B981]/20 border border-[#10B981]/40 p-4 text-[#10B981]">
                      <ServiceModalIcon className="h-8 w-8" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#10B981]">Practice Area</span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{selectedService.title}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                    {selectedService.fullDesc}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#10B981]">Key Focus Areas & Deliverables</h4>
                    <div className="grid gap-3 sm:grid-cols-1">
                      {selectedService.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 rounded-xl bg-slate-950/60 p-3.5 border border-slate-800">
                          <CheckCircle2 className="h-5 w-5 text-[#10B981] shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-200 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Modal Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-800">
                    <Button
                      asChild
                      className="bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black py-6 rounded-full flex-1 shadow-lg shadow-[#10B981]/20"
                    >
                      <a
                        href={`https://wa.me/254117471344?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(selectedService.title)}%20services.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="h-5 w-5" />
                        <span>Inquire via WhatsApp</span>
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedService(null)}
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
