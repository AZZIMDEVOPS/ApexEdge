"use client";

import { useState } from "react";
import { ExecutiveHeaderNav } from "@/components/ExecutiveHeaderNav";
import { ExecutiveNewsPortal } from "@/components/ExecutiveNewsPortal";
import { ClarityBookingCalendar } from "@/components/ClarityBookingCalendar";
import { PracticeInActionShowcase } from "@/components/PracticeInActionShowcase";
import { InteractiveKnowledgeCentre } from "@/components/InteractiveKnowledgeCentre";
import { CorporateFooter } from "@/components/CorporateFooter";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ApexAIAssistant } from "@/components/ApexAIAssistant";

export default function InsightsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#10B981] selection:text-[#071C3F]">
      {/* Executive Header Navigation */}
      <ExecutiveHeaderNav onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 1. Executive News Portal (News UI/UX, Lead Editorial, Latest Articles, Search, Route Actions) */}
      <ExecutiveNewsPortal />

      {/* 2. Interactive 20-Minute Executive Clarity Session Booking Calendar */}
      <ClarityBookingCalendar onSuccess={() => {}} />

      {/* 3. Field Practice Showcase */}
      <PracticeInActionShowcase onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 4. Interactive Advisory Knowledge Base & Q&A */}
      <InteractiveKnowledgeCentre onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Corporate Footer & Global Modals */}
      <CorporateFooter />
      <ConsultationModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <ApexAIAssistant onOpenBooking={() => setIsBookingOpen(true)} />
    </main>
  );
}
