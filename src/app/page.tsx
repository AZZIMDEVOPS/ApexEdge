"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SectionFade } from "@/components/SectionFade";
import { WhatsAppPopUI } from "@/components/WhatsAppPopUI";
import { Services3DExplodedView } from "@/components/Services3DExplodedView";
import { FoundationShowcase } from "@/components/FoundationShowcase";
import { InteractiveKnowledgeCentre } from "@/components/InteractiveKnowledgeCentre";
import { CorporateFooter } from "@/components/CorporateFooter";
import { ExecutiveHeaderNav } from "@/components/ExecutiveHeaderNav";
import { CorporateServicesTicker } from "@/components/CorporateServicesTicker";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ApexAIAssistant } from "@/components/ApexAIAssistant";
import { TypewriterText } from "@/components/TypewriterText";

const clientLogos = ["Private Companies", "Public Entities", "State Corporations", "Banks", "Insurance Firms", "Microfinance Institutions"];

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-900 selection:bg-[#C9A227] selection:text-[#071C3F]">
      
      {/* Executive Header Navigation */}
      <ExecutiveHeaderNav onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 1. Hero Section - Real Nairobi Twilight Skyline Backdrop with Pro Typing & Motion Edits */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-24 pb-16 bg-slate-950 text-white overflow-hidden">
        
        {/* Real Nairobi Twilight Skyline Background Image Layer (z-0) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <Image
            src="/nairobi_hero_twilight.jpg"
            alt="Nairobi Twilight Skyline Background"
            fill
            priority
            className="object-cover object-center scale-105 opacity-65 filter brightness-105 contrast-115 saturate-120"
          />
        </div>

        {/* Pro Gradient Vignette & Blend Layer (z-1) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-1 bg-gradient-to-b from-slate-950/85 via-slate-950/40 to-slate-950" />
        <div className="absolute inset-0 w-full h-full pointer-events-none z-1 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.35)_0%,rgba(2,6,23,0.75)_70%,rgba(2,6,23,0.95)_100%)]" />

        {/* Ambient Radial Glow Nodes (z-2) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-2 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-blue-600/25 via-blue-500/10 to-transparent rounded-full filter blur-3xl opacity-60 animate-pulse" />
          <div className="absolute top-10 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-amber-500/15 to-transparent rounded-full filter blur-3xl opacity-40" />
        </div>

        {/* Hero Main Content Container (z-10 relative) */}
        <div className="container mx-auto px-4 flex flex-col items-center text-center max-w-5xl z-10 relative">
          
          {/* Trust Badge Pill with Frosted Glassmorphism & Entrance Scale Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-slate-950/80 border border-blue-500/40 text-blue-300 text-sm font-bold mb-8 backdrop-blur-xl shadow-[0_10px_30px_rgba(37,99,235,0.3)]"
          >
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: "8s" }} />
            <span>Your Partner in Business Success</span>
          </motion.div>

          {/* Main Heading with Pro Dynamic Typewriter Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-8 leading-tight drop-shadow-2xl"
            style={{ textShadow: "0 4px 50px rgba(2,6,23,0.95)" }}
          >
            Trusted HR, Legal &{" "}
            <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300 min-h-[1.2em] inline-block">
              <TypewriterText
                words={[
                  "Governance Advisory",
                  "Company Secretarial",
                  "Legal Compliance",
                  "HR Advisory",
                  "Systems Setup",
                  "Immigration Services",
                ]}
                typingSpeed={90}
                deletingSpeed={45}
                pauseDuration={2200}
              />
            </span>{" "}
            <br className="hidden sm:inline" />
            in Kenya.
          </motion.h1>

          {/* Glassmorphism Subheadline Blurb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="rounded-2xl border border-slate-800/90 bg-slate-950/70 p-5 sm:p-6 backdrop-blur-md max-w-3xl mb-10 shadow-2xl"
          >
            <p className="text-lg md:text-xl text-slate-100 font-normal leading-relaxed">
              ApexEdge Advisory Limited delivers tailored company secretarial, legal services, HR advisory, corporate governance, and business solutions to drive your business excellence and compliance.
            </p>
          </motion.div>

          {/* WhatsApp CTA Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <WhatsAppPopUI />
          </motion.div>

          {/* Social Proof Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="mt-14 flex flex-wrap justify-center items-center gap-6 text-sm text-slate-200 bg-slate-950/80 border border-slate-800/90 px-6 py-3 rounded-full backdrop-blur-xl shadow-xl"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-amber-500 border-2 border-slate-950 shadow-md cursor-pointer"
                />
              ))}
            </div>
            <p className="font-semibold text-slate-100">Trusted by 500+ top companies across Kenya</p>
          </motion.div>
        </div>
      </section>

      {/* Corporate Services Ticker - Bloomberg / CNBC Style Lower Third Ribbon */}
      <CorporateServicesTicker />

      {/* 2. Client Logos Ticker */}
      <SectionFade>
        <div className="border-y border-slate-300 bg-slate-100 py-10 shadow-inner">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 sm:gap-12 px-5 text-xs sm:text-sm font-extrabold uppercase tracking-[0.3em] text-slate-700 sm:px-8 lg:px-10">
            {clientLogos.map((logo) => (
              <motion.span
                key={logo}
                whileHover={{ color: "#2563EB", scale: 1.05 }}
                className="opacity-80 hover:opacity-100 cursor-default transition-all"
              >
                {logo}
              </motion.span>
            ))}
          </div>
        </div>
      </SectionFade>

      {/* 3. Services Section - Practice Areas with Interactive Modal Popup */}
      <section id="services" className="bg-slate-50 py-24 sm:py-32 text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionFade>
            <div className="mb-16 text-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-extrabold uppercase tracking-[0.25em] mb-4"
              >
                Comprehensive Solutions
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl font-black tracking-tight text-slate-950"
              >
                Our Core Practice Areas
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed font-normal"
              >
                We empower organizations with top-tier, comprehensive solutions that enhance business performance, navigate legal complexities, and foster sustainable growth. Click any module below to open detailed section information.
              </motion.p>
            </div>
            <Services3DExplodedView />
          </SectionFade>
        </div>
      </section>

      {/* 4. Enterprise Infrastructure Showcase Section */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionFade>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-blue-500/30 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-8 sm:p-12 shadow-2xl">
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    Enterprise Infrastructure
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                    Driving Corporate Excellence Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-300">Kenya &amp; Beyond</span>
                  </h2>
                  <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                    Connecting corporations, financial institutions, and public entities with cutting-edge governance, legal secretarial expertise, and digital-first advisory solutions.
                  </p>
                </div>
                <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-2xl border border-blue-500/30 shadow-2xl group">
                  <Image
                    src="/nairobi_blue_skyline.png"
                    alt="Nairobi Trust Blue Digital Skyline"
                    fill
                    className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-50" />
                </div>
              </div>
            </div>
          </SectionFade>
        </div>
      </section>

      {/* 5. Our Foundation: Mission, Vision & Core Values Executive Showcase */}
      <FoundationShowcase />

      {/* 6. Interactive Executive Knowledge Centre & FAQ */}
      <InteractiveKnowledgeCentre
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Executive Corporate Footer */}
      <CorporateFooter />

      {/* Consultation Booking Modal */}
      <ConsultationModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* APEX Executive Virtual Assistant */}
      <ApexAIAssistant onOpenBooking={() => setIsBookingOpen(true)} />
    </main>
  );
}
