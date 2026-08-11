"use client";

import { useState } from "react";
import { ExecutiveHeaderNav } from "@/components/ExecutiveHeaderNav";
import { InteractiveKnowledgeCentre } from "@/components/InteractiveKnowledgeCentre";
import { CorporateFooter } from "@/components/CorporateFooter";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ApexAIAssistant } from "@/components/ApexAIAssistant";
import { WhatsAppPopUI } from "@/components/WhatsAppPopUI";

export default function InsightsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-900 selection:bg-[#10B981] selection:text-[#071C3F]">
      <ExecutiveHeaderNav onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Knowledge Centre & Executive FAQ Component */}
      <InteractiveKnowledgeCentre onOpenBooking={() => setIsBookingOpen(true)} />

      <CorporateFooter />
      <ConsultationModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <ApexAIAssistant onOpenBooking={() => setIsBookingOpen(true)} />
    </main>
  );
}
