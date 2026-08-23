"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, ShieldCheck, Mail, Phone, CheckCircle2, User, Building, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FOCUS_TOPICS = [
  { id: "governance", title: "Board Governance & Risk Oversight", duration: "20 Mins", desc: "Board visibility, risk heatmaps, & fiduciary clarity." },
  { id: "sops", title: "1–2 Page Digital SOP Transformation", duration: "20 Mins", desc: "Replacing dense policy manuals with daily workflows." },
  { id: "privacy", title: "Kenya Data Protection (ODPC) Audit", duration: "20 Mins", desc: "DPIA compliance, data inventory, & statutory readiness." },
  { id: "raci", title: "RACI & Job Grading Accountability", duration: "20 Mins", desc: "Eliminating executive overlap & decision bottlenecks." },
  { id: "statutory", title: "Companies Act Statutory Secretarial", duration: "20 Mins", desc: "Board resolutions, statutory returns, & BRS e-filings." },
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const WEEKDAY_NAMES = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const TIME_SLOTS = [
  { time: "09:00 AM EACT", period: "Morning" },
  { time: "11:30 AM EACT", period: "Morning" },
  { time: "02:00 PM EACT", period: "Afternoon" },
  { time: "04:30 PM EACT", period: "Afternoon" },
];

interface ClarityBookingCalendarProps {
  onSuccess?: () => void;
}

export function ClarityBookingCalendar({ onSuccess }: ClarityBookingCalendarProps) {
  const [selectedTopic, setSelectedTopic] = useState(FOCUS_TOPICS[0].id);

  // Full Monthly Calendar Navigation State (Default: August 2026)
  const [currYear, setCurrYear] = useState(2026);
  const [currMonth, setCurrMonth] = useState(7); // August (0-indexed)
  const [selectedDay, setSelectedDay] = useState(24);

  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[0].time);
  
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentTopicObj = FOCUS_TOPICS.find((t) => t.id === selectedTopic) || FOCUS_TOPICS[0];

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

  const daysInMonth = new Date(currYear, currMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currYear, currMonth, 1).getDay();
  const displaySelectedDateText = `${selectedDay} ${MONTH_NAMES[currMonth]} ${currYear}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (onSuccess) onSuccess();
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setNotes("");
  };

  return (
    <section id="calendar-booking" className="relative py-20 bg-slate-950 text-white overflow-hidden border-b border-slate-800 font-sans">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 font-sans">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#10B981]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#0284C7]/15 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-12 font-sans">
        {/* Header Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 font-sans">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10B981]/15 border border-[#10B981]/40 text-[#10B981] text-xs font-black uppercase tracking-widest shadow-xs">
            <CalendarIcon className="w-4 h-4 text-[#10B981]" />
            <span>EXECUTIVE 20-MINUTE CLARITY SESSION SCHEDULER</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-sans">
            Schedule Your Confidential <br />
            <span className="text-[#10B981]">20-Minute Advisory Session</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal font-sans">
            Select your primary governance challenge, pick a date &amp; time slot from the monthly calendar, and meet directly with an Apex Edge Senior Partner. No retainer required.
          </p>
        </div>

        {/* Interactive Booking Interface */}
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl p-6 sm:p-10 backdrop-blur-xl font-sans">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-sans">
              
              {/* Left Column: 1. Select Topic & 2. Full Monthly Calendar (7 cols) */}
              <div className="lg:col-span-7 space-y-8 font-sans">
                
                {/* Step 1: Select 20-Min Advisory Topic */}
                <div className="space-y-3 font-sans">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-[#10B981] flex items-center gap-2 font-sans">
                      <span className="w-6 h-6 rounded-full bg-[#10B981] text-[#071C3F] flex items-center justify-center text-xs font-black">1</span>
                      <span>SELECT 20-MINUTE FOCUS AREA</span>
                    </span>
                    <span className="text-[11px] font-extrabold text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700 font-sans">
                      ⚡ 20 MIN COMPLIMENTARY
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5 font-sans">
                    {FOCUS_TOPICS.map((topic) => {
                      const isSelected = selectedTopic === topic.id;
                      return (
                        <button
                          key={topic.id}
                          type="button"
                          onClick={() => setSelectedTopic(topic.id)}
                          className={`p-3.5 rounded-2xl text-left border transition-all flex items-start justify-between gap-3 font-sans ${
                            isSelected
                              ? "bg-gradient-to-r from-[#071C3F] to-slate-950 border-[#10B981] text-white shadow-lg ring-1 ring-[#10B981]"
                              : "bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-950"
                          }`}
                        >
                          <div className="space-y-0.5">
                            <div className="text-xs font-extrabold text-white flex items-center gap-2">
                              <span>{topic.title}</span>
                              {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />}
                            </div>
                            <p className="text-[11px] text-slate-400 font-normal leading-relaxed">
                              {topic.desc}
                            </p>
                          </div>
                          <span className="text-[10px] font-black text-[#10B981] bg-[#10B981]/15 px-2 py-0.5 rounded-md border border-[#10B981]/30 shrink-0">
                            {topic.duration}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Full Monthly Calendar Grid */}
                <div className="space-y-3 font-sans">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-[#10B981] flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#10B981] text-[#071C3F] flex items-center justify-center text-xs font-black">2</span>
                      <span>SELECT DATE (FULL MONTHLY CALENDAR)</span>
                    </span>
                    <span className="text-[11px] font-bold text-white bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                      <strong className="text-[#10B981]">{displaySelectedDateText}</strong>
                    </span>
                  </div>

                  {/* Monthly Calendar Component */}
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 font-sans">
                    
                    {/* Month Header Controls */}
                    <div className="flex items-center justify-between border-b border-slate-850 pb-2">
                      <button
                        type="button"
                        onClick={handlePrevMonth}
                        className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      <div className="text-xs font-black text-white uppercase tracking-widest font-sans">
                        {MONTH_NAMES[currMonth]} {currYear}
                      </div>

                      <button
                        type="button"
                        onClick={handleNextMonth}
                        className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Weekday Row */}
                    <div className="grid grid-cols-7 gap-1 text-center">
                      {WEEKDAY_NAMES.map((d) => (
                        <div key={d} className="text-[10px] font-extrabold text-slate-400 py-1 uppercase">
                          {d}
                        </div>
                      ))}
                    </div>

                    {/* Days Grid */}
                    <div className="grid grid-cols-7 gap-1">
                      {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                        <div key={`empty-${i}`} className="h-8 rounded-lg" />
                      ))}

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
                            className={`h-8 text-xs font-bold rounded-xl transition-all flex items-center justify-center font-sans ${
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
                </div>

                {/* Step 3: Select Time Slot */}
                <div className="space-y-3 font-sans">
                  <span className="text-xs font-black uppercase tracking-widest text-[#10B981] flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#10B981] text-[#071C3F] flex items-center justify-center text-xs font-black">3</span>
                    <span>SELECT AVAILABLE TIME SLOT (EAST AFRICA TIME)</span>
                  </span>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-sans">
                    {TIME_SLOTS.map((t, idx) => {
                      const isSelected = selectedTime === t.time;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedTime(t.time)}
                          className={`p-3 rounded-xl border text-center transition-all flex items-center justify-center gap-1.5 font-sans ${
                            isSelected
                              ? "bg-emerald-500/20 text-[#10B981] border-[#10B981] font-bold shadow-md"
                              : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-600"
                          }`}
                        >
                          <Clock className="w-3.5 h-3.5 shrink-0" />
                          <span className="text-xs font-bold">{t.time}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Right Column: Executive Details & Confirmation Form (5 cols) */}
              <div className="lg:col-span-5 rounded-2xl bg-slate-950 border border-slate-800 p-6 space-y-5 flex flex-col justify-between font-sans">
                <div className="space-y-4 font-sans">
                  <div className="border-b border-slate-800 pb-3 space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#10B981]">
                      SUMMARY &amp; PARTICIPANT DETAILS
                    </span>
                    <h3 className="text-base font-black text-white font-sans">Your 20-Min Session Details</h3>
                  </div>

                  {/* Summary Card Badge */}
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs font-sans">
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Focus Area:</span>
                      <span className="text-[#10B981] font-bold">{currentTopicObj.duration}</span>
                    </div>
                    <div className="font-bold text-white leading-tight font-sans">
                      {currentTopicObj.title}
                    </div>
                    <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
                      <span className="flex items-center gap-1 text-slate-400">
                        <CalendarIcon className="w-3 h-3 text-[#10B981]" />
                        {displaySelectedDateText}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <Clock className="w-3 h-3 text-[#10B981]" />
                        {selectedTime}
                      </span>
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="space-y-3 text-xs font-sans">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">
                        Executive Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Jane Doe"
                          className="w-full rounded-xl bg-slate-900 border border-slate-800 pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#10B981] focus:outline-none font-sans"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">
                        Corporate Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. jdoe@enterprise.co.ke"
                          className="w-full rounded-xl bg-slate-900 border border-slate-800 pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#10B981] focus:outline-none font-sans"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-300 mb-1">
                          Phone / WhatsApp *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-500" />
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+254 7..."
                            className="w-full rounded-xl bg-slate-900 border border-slate-800 pl-8 pr-2.5 py-2 text-xs text-white placeholder-slate-500 focus:border-[#10B981] focus:outline-none font-sans"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-300 mb-1">
                          Organisation *
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-500" />
                          <input
                            type="text"
                            required
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Enterprise Name"
                            className="w-full rounded-xl bg-slate-900 border border-slate-800 pl-8 pr-2.5 py-2 text-xs text-white placeholder-slate-500 focus:border-[#10B981] focus:outline-none font-sans"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">
                        Primary Challenge Note (Optional)
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-500" />
                        <textarea
                          rows={2}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Brief description of current bottleneck or statutory query..."
                          className="w-full rounded-xl bg-slate-900 border border-slate-800 pl-8 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#10B981] focus:outline-none resize-none font-sans"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons: Confirm & Route to Info Email */}
                <div className="pt-3 border-t border-slate-800 space-y-2.5 font-sans">
                  <Button
                    type="submit"
                    className="w-full bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black rounded-xl py-3.5 text-xs shadow-lg shadow-[#10B981]/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] font-sans"
                  >
                    <CalendarIcon className="w-4 h-4" />
                    <span>Confirm 20-Min Session Booking →</span>
                  </Button>

                  <a
                    href={`mailto:info@consult-apex.com?subject=20-Min%20Clarity%20Session%20Inquiry%20-%20${encodeURIComponent(currentTopicObj.title)}&body=Hello%20Apex%20Edge%20Team%2C%0A%0AI%20would%20like%20to%20request%20information%20and%20schedule%20a%2020-minute%20clarity%20session%20on%20${encodeURIComponent(currentTopicObj.title)}.%0A%0AName:%20${encodeURIComponent(fullName)}%0AOrganization:%20${encodeURIComponent(company)}%0APhone:%20${encodeURIComponent(phone)}`}
                    className="w-full rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 py-2.5 px-3 text-[11px] font-bold text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-colors text-center font-sans"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                    <span>Or Route to Info Email (info@consult-apex.com) →</span>
                  </a>
                </div>
              </div>

            </form>
          ) : (
            /* Confirmation Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 px-6 text-center space-y-6 max-w-xl mx-auto font-sans"
            >
              <div className="w-16 h-16 rounded-full bg-[#10B981]/20 border border-[#10B981] text-[#10B981] flex items-center justify-center mx-auto shadow-xl font-sans">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2 font-sans">
                <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">
                  20-MINUTE SESSION RESERVED
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-sans">
                  Clarity Session Requested!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Thank you, <strong className="text-white">{fullName || "Executive"}</strong>. An Apex Edge Senior Advisory Partner will confirm your calendar invitation for <strong className="text-[#10B981]">{displaySelectedDateText} at {selectedTime}</strong> via <strong className="text-white">{email}</strong>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left text-xs space-y-2 font-sans">
                <div className="font-bold text-[#10B981] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Session Preparation &amp; Zero-Risk Guarantee</span>
                </div>
                <p className="text-[#94A3B8] leading-relaxed">
                  You will receive a brief 3-question diagnostic sheet via email prior to the call. Walk away with an actionable One-Page Action Map whether or not you retain Apex Edge.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-3 font-sans">
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="border-slate-700 bg-slate-900 text-white font-bold text-xs rounded-xl px-5 py-2.5 hover:bg-slate-800 font-sans"
                >
                  Schedule Another Session
                </Button>
                <a
                  href="mailto:info@consult-apex.com?subject=Clarity%20Session%20Follow-Up"
                  className="bg-[#10B981] text-[#071C3F] font-black text-xs rounded-xl px-5 py-2.5 hover:bg-emerald-400 transition-colors inline-flex items-center gap-1.5 font-sans"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Info Team Directly</span>
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
