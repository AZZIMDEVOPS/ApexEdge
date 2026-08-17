"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, CheckCircle2, ShieldCheck, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export function ConsultationModal({ isOpen, onClose, defaultCategory }: ConsultationModalProps) {
  const [consultType, setConsultType] = useState<"virtual" | "in-person">("virtual");
  const [category, setCategory] = useState("Governance & Risk");
  const [prevDefaultCategory, setPrevDefaultCategory] = useState<string | undefined>(defaultCategory);

  if (defaultCategory !== prevDefaultCategory) {
    setPrevDefaultCategory(defaultCategory);
    if (defaultCategory) {
      setCategory(defaultCategory);
    }
  }
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00 AM");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("CEO / Managing Director");
  const [challenge, setChallenge] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-[#071C3F] border border-[#10B981]/40 text-white shadow-2xl z-10 my-8"
          >
            {/* Top Accent Bar */}
            <div className="h-2 bg-gradient-to-r from-[#10B981] via-teal-400 to-emerald-300" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-10">
              {!submitted ? (
                <div className="space-y-6">
                  {/* Modal Header */}
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] text-xs font-bold uppercase tracking-wider mb-2">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      45-Minute Advisory Diagnostic
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">Book Your Clarity Session</h3>
                    <p className="text-sm text-slate-300 mt-1">
                      Bring us one organizational challenge. We will help you diagnose the root cause and receive a One-Page Action Map.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Consultation Type Selector */}
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setConsultType("virtual")}
                        className={`p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                          consultType === "virtual"
                            ? "bg-[#10B981] text-[#071C3F] border-[#10B981]"
                            : "bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700"
                        }`}
                      >
                        <Clock className="w-4 h-4" />
                        <span>Virtual Session (Zoom/Teams)</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setConsultType("in-person")}
                        className={`p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                          consultType === "in-person"
                            ? "bg-[#10B981] text-[#071C3F] border-[#10B981]"
                            : "bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700"
                        }`}
                      >
                        <MapPin className="w-4 h-4" />
                        <span>In-Person (Nairobi HQ)</span>
                      </button>
                    </div>

                    {/* Outcome Category & Role */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                          Primary Outcome Area
                        </label>
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-xs text-white focus:border-[#10B981] focus:outline-none"
                        >
                          <option value="Governance & Risk">01 Governance &amp; Risk</option>
                          <option value="People & Performance">02 People &amp; Performance</option>
                          <option value="Controls & Policies">03 Controls &amp; Policies</option>
                          <option value="Leadership & Capability">04 Leadership &amp; Capability</option>
                          <option value="Data Protection & Privacy">05 Data Protection &amp; Privacy</option>
                          <option value="Board Advisory Sprint">Board-Ready Risk Sprint</option>
                          <option value="Governance Health Check">Governance Health Check</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                          Your Role / Title
                        </label>
                        <select
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-xs text-white focus:border-[#10B981] focus:outline-none"
                        >
                          <option value="Board Chair / Member">Board Chair / Board Member</option>
                          <option value="CEO / Managing Director">CEO / Managing Director</option>
                          <option value="CFO / Finance Leader">CFO / Finance Director</option>
                          <option value="HR Director / Head of People">HR Director / Head of HR</option>
                          <option value="Company Secretary / Legal Counsel">Company Secretary / Legal Counsel</option>
                          <option value="Senior Executive / Business Unit Head">Senior Executive / BU Head</option>
                        </select>
                      </div>
                    </div>

                    {/* Date and Time */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          required
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-3 text-xs text-white focus:border-[#10B981] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                          Preferred Time Slot
                        </label>
                        <select
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-2 py-3 text-xs text-white focus:border-[#10B981] focus:outline-none"
                        >
                          <option value="09:00 AM">09:00 AM EAT</option>
                          <option value="11:00 AM">11:00 AM EAT</option>
                          <option value="02:00 PM">02:00 PM EAT</option>
                          <option value="04:00 PM">04:00 PM EAT</option>
                        </select>
                      </div>
                    </div>

                    {/* Contact Details */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Executive Name"
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-[#10B981] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@company.co.ke"
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-[#10B981] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+254 7XX XXX XXX"
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-[#10B981] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                          Organization Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Organization Name"
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-[#10B981] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                        Primary Organisational Challenge *
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={challenge}
                        onChange={(e) => setChallenge(e.target.value)}
                        placeholder="Describe one recurring audit, governance, control or performance challenge you want to solve..."
                        className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-[#10B981] focus:outline-none"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="w-full rounded-full bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black py-4 text-sm shadow-xl shadow-[#10B981]/20 transition-all flex items-center justify-center gap-2"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Book My 45-Minute Clarity Session →</span>
                      </Button>
                    </div>
                  </form>
                </div>
              ) : (
                /* Success State */
                <div className="text-center py-8 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white">Clarity Session Reserved</h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you. An Apex Edge Senior Advisory Partner will confirm your session time and send your meeting invitation within 24 business hours.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 max-w-sm mx-auto text-xs text-slate-300 font-medium">
                    You will receive your customized <strong className="text-[#10B981]">One-Page Action Map</strong> immediately following your session.
                  </div>
                  <Button
                    onClick={handleResetAndClose}
                    className="rounded-full bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-bold px-8 py-3 text-xs shadow-lg"
                  >
                    Close Window
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
