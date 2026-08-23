"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, CheckCircle2, ShieldCheck, MapPin, Calendar as CalendarIcon, User, Mail, Phone, Building, MessageSquare, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const WEEKDAY_NAMES = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

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

  // Monthly Calendar Navigation State (Default to August 2026)
  const [currYear, setCurrYear] = useState(2026);
  const [currMonth, setCurrMonth] = useState(7); // 7 = August (0-indexed)
  const [selectedDay, setSelectedDay] = useState(24);

  const [time, setTime] = useState("09:00 AM");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("CEO / Managing Director");
  const [challenge, setChallenge] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Month navigation logic
  const handlePrevMonth = () => {
    if (currMonth === 0) {
      setCurrMonth(11);
      setCurrYear((y) => y - 1);
    } else {
      setCurrMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (currMonth === 11) {
      setCurrMonth(0);
      setCurrYear((y) => y + 1);
    } else {
      setCurrMonth((m) => m + 1);
    }
  };

  // Calendar math
  const daysInMonth = new Date(currYear, currMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currYear, currMonth, 1).getDay();

  const formattedSelectedDate = `${currYear}-${String(currMonth + 1).padStart(2, "0")}-${String(selectedDay).padStart(2, "0")}`;
  const displaySelectedDateText = `${selectedDay} ${MONTH_NAMES[currMonth]} ${currYear}`;

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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto font-sans">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
          />

          {/* Modal Container — Fits Viewport (max-h 90vh with scrollable inner container) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-3xl bg-[#071C3F] border border-[#10B981]/50 text-white shadow-2xl z-10 my-auto font-sans overflow-hidden"
          >
            {/* Top Accent Bar */}
            <div className="h-2 bg-gradient-to-r from-[#10B981] via-teal-400 to-emerald-300 shrink-0" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrollable Inner Body */}
            <div className="p-5 sm:p-8 overflow-y-auto flex-1 font-sans space-y-5 text-white">
              {!submitted ? (
                <div className="space-y-5">
                  
                  {/* Modal Header */}
                  <div className="pr-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] text-[11px] font-black uppercase tracking-wider mb-2">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>20-MINUTE ADVISORY DIAGNOSTIC</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight font-sans">
                      Book Your 20-Minute Clarity Session
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed font-normal">
                      Bring us one organizational challenge. We will help you diagnose the root cause and receive a One-Page Action Map.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                    
                    {/* Consultation Type Selector (Virtual / In-Person) */}
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setConsultType("virtual")}
                        className={`p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                          consultType === "virtual"
                            ? "bg-[#10B981] text-[#071C3F] border-[#10B981] shadow-md"
                            : "bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700"
                        }`}
                      >
                        <Clock className="w-4 h-4 shrink-0" />
                        <span>Virtual Session (Zoom/Teams)</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setConsultType("in-person")}
                        className={`p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                          consultType === "in-person"
                            ? "bg-[#10B981] text-[#071C3F] border-[#10B981] shadow-md"
                            : "bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700"
                        }`}
                      >
                        <MapPin className="w-4 h-4 shrink-0" />
                        <span>In-Person (Nairobi HQ)</span>
                      </button>
                    </div>

                    {/* Outcome Category & Role / Title */}
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                          Primary Outcome Area
                        </label>
                        <div className="relative">
                          <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2.5 text-xs text-white focus:border-[#10B981] focus:outline-none appearance-none"
                          >
                            <option value="Governance & Risk">01 Governance &amp; Risk</option>
                            <option value="People & Performance">02 People &amp; Performance</option>
                            <option value="Controls & Policies">03 Controls &amp; Policies</option>
                            <option value="Leadership & Capability">04 Leadership &amp; Capability</option>
                            <option value="Data Protection & Privacy">05 Data Protection &amp; Privacy</option>
                            <option value="Legal Audit & Statutory">06 Legal Audit &amp; Statutory</option>
                            <option value="HR Audit & Job Grading">07 HR Audit &amp; Job Grading</option>
                            <option value="Board Advisory Sprint">Board-Ready Risk Sprint</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-3 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                          Your Role / Title
                        </label>
                        <div className="relative">
                          <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2.5 text-xs text-white focus:border-[#10B981] focus:outline-none appearance-none"
                          >
                            <option value="Board Chair / Member">Board Chair / Board Member</option>
                            <option value="CEO / Managing Director">CEO / Managing Director</option>
                            <option value="CFO / Finance Leader">CFO / Finance Director</option>
                            <option value="HR Director / Head of People">HR Director / Head of HR</option>
                            <option value="Company Secretary / Legal Counsel">Company Secretary / Legal Counsel</option>
                            <option value="Senior Executive / Business Unit Head">Senior Executive / BU Head</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-3 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* FULL MONTHLY CALENDAR GRID & TIME SLOT */}
                    <div className="space-y-3 pt-2 border-t border-slate-800/80">
                      <div className="flex items-center justify-between">
                        <label className="text-[11px] font-black text-[#10B981] uppercase tracking-wider flex items-center gap-1.5">
                          <CalendarIcon className="w-4 h-4 text-[#10B981]" />
                          <span>Select Session Date (Full Monthly Calendar)</span>
                        </label>
                        <span className="text-[11px] font-bold text-white bg-slate-900 px-2.5 py-0.5 rounded-md border border-slate-800">
                          Selected: <strong className="text-[#10B981]">{displaySelectedDateText}</strong>
                        </span>
                      </div>

                      {/* Full Monthly Calendar Container */}
                      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                        
                        {/* Month & Year Navigation Bar */}
                        <div className="flex items-center justify-between border-b border-slate-850 pb-2">
                          <button
                            type="button"
                            onClick={handlePrevMonth}
                            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                            aria-label="Previous month"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>

                          <div className="text-xs font-black text-white uppercase tracking-widest">
                            {MONTH_NAMES[currMonth]} {currYear}
                          </div>

                          <button
                            type="button"
                            onClick={handleNextMonth}
                            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                            aria-label="Next month"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Weekday Header Row (7 cols) */}
                        <div className="grid grid-cols-7 gap-1 text-center">
                          {WEEKDAY_NAMES.map((day) => (
                            <div key={day} className="text-[10px] font-extrabold text-slate-400 py-1 uppercase">
                              {day}
                            </div>
                          ))}
                        </div>

                        {/* Month Days Grid (7 cols) */}
                        <div className="grid grid-cols-7 gap-1">
                          {/* Empty offset cells for starting day of month */}
                          {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                            <div key={`empty-${i}`} className="h-8 rounded-lg" />
                          ))}

                          {/* Days 1..daysInMonth */}
                          {Array.from({ length: daysInMonth }).map((_, i) => {
                            const dayNum = i + 1;
                            const isSelected = selectedDay === dayNum;
                            const isPast =
                              currYear < 2026 ||
                              (currYear === 2026 && currMonth < 7) ||
                              (currYear === 2026 && currMonth === 7 && dayNum < 23);

                            return (
                              <button
                                key={dayNum}
                                type="button"
                                disabled={isPast}
                                onClick={() => setSelectedDay(dayNum)}
                                className={`h-8 text-xs font-bold rounded-xl transition-all flex items-center justify-center ${
                                  isSelected
                                    ? "bg-[#10B981] text-[#071C3F] font-black shadow-md scale-105"
                                    : isPast
                                    ? "text-slate-600 bg-slate-900/40 cursor-not-allowed"
                                    : "bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white border border-slate-800/80"
                                }`}
                              >
                                {dayNum}
                              </button>
                            );
                          })}
                        </div>

                      </div>

                      {/* Time Slot Selection */}
                      <div className="pt-1">
                        <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                          Select Available 20-Minute Time Slot (EACT)
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {[
                            "09:00 AM EAT",
                            "11:30 AM EAT",
                            "02:00 PM EAT",
                            "04:30 PM EAT"
                          ].map((tSlot) => {
                            const isSlotSelected = time === tSlot;
                            return (
                              <button
                                key={tSlot}
                                type="button"
                                onClick={() => setTime(tSlot)}
                                className={`p-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                                  isSlotSelected
                                    ? "bg-emerald-500/25 text-[#10B981] border-[#10B981] font-black shadow-sm"
                                    : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                                }`}
                              >
                                <Clock className="w-3.5 h-3.5 shrink-0" />
                                <span>{tSlot}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                    </div>

                    {/* Contact Details (Full Name & Corporate Email) */}
                    <div className="grid gap-3 sm:grid-cols-2 pt-2 border-t border-slate-800/80">
                      <div>
                        <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Executive Name"
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#10B981] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@company.co.ke"
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#10B981] focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Phone Number & Organization Name */}
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+254 7XX XXX XXX"
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#10B981] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                          Organization Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Organization Name"
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#10B981] focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Primary Organisational Challenge */}
                    <div>
                      <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                        Primary Organisational Challenge *
                      </label>
                      <textarea
                        required
                        rows={2}
                        value={challenge}
                        onChange={(e) => setChallenge(e.target.value)}
                        placeholder="Describe one recurring audit, governance, control or performance challenge you want to solve..."
                        className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#10B981] focus:outline-none resize-none"
                      />
                    </div>

                    {/* Primary Submit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="w-full rounded-xl bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black py-3.5 text-xs sm:text-sm shadow-xl shadow-[#10B981]/25 transition-all flex items-center justify-center gap-2"
                      >
                        <CalendarIcon className="w-4 h-4" />
                        <span>Book My 20-Minute Clarity Session →</span>
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
                    <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">
                      20-MINUTE SESSION RESERVED
                    </span>
                    <h3 className="text-2xl font-black text-white">Clarity Session Requested!</h3>
                    <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-normal">
                      Thank you, <strong className="text-white">{name || "Executive"}</strong>. An Apex Edge Senior Advisory Partner will confirm your meeting invitation for <strong className="text-[#10B981]">{displaySelectedDateText} at {time}</strong> via <strong className="text-white">{email}</strong>.
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
