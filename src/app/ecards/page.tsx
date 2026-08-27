"use client";

import { useState } from "react";
import { ExecutiveHeaderNav } from "@/components/ExecutiveHeaderNav";
import { CorporateFooter } from "@/components/CorporateFooter";
import { ExecutiveCardStudio } from "@/components/ExecutiveCardStudio";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ApexAIAssistant } from "@/components/ApexAIAssistant";
import { CreditCard, Sparkles, ShieldCheck, Download, QrCode } from "lucide-react";

export default function ECardsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#10B981] selection:text-[#071C3F]">
      <ExecutiveHeaderNav onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Studio Content */}
      <section className="py-8 sm:py-12">
        <ExecutiveCardStudio />
      </section>

      {/* Print Quality Assurance Banner */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-linear-to-r from-[#071C3F] via-slate-900 to-[#071C3F] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] text-xs font-black uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" />
                <span>Executive Print Specifications</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black">
                600 DPI Commercial Print Compliance
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                All generated files meet stringent international print shop standards. PDF and JPG
                downloads feature ultra-sharp typography (2100 × 1200 px @ 600 DPI), calibrated
                color gamuts, and standardized 3.5″ × 2.0″ ISO dimensions suitable for foil stamping,
                embossing, and luxury velvet-matte finishes.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <div className="p-4 rounded-2xl bg-white/10 border border-white/10 text-center space-y-1">
                <div className="text-xl font-black text-[#10B981]">600 DPI</div>
                <div className="text-[10px] text-slate-300 font-bold uppercase">Raster / Vector</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 border border-white/10 text-center space-y-1">
                <div className="text-xl font-black text-white">3.5″ × 2.0″</div>
                <div className="text-[10px] text-slate-300 font-bold uppercase">Standard ISO</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 border border-white/10 text-center space-y-1">
                <div className="text-xl font-black text-emerald-400">NFC &amp; QR</div>
                <div className="text-[10px] text-slate-300 font-bold uppercase">Smart eCard</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CorporateFooter />

      <ConsultationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultCategory="Executive Identity"
      />

      <ApexAIAssistant onOpenBooking={() => setIsBookingOpen(true)} />
    </main>
  );
}
