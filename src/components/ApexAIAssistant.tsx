"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Bot,
  Calendar,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Message {
  id: string;
  sender: "ai" | "user";
  text: string;
  timestamp: string;
  quickReplies?: string[];
  action?: "book" | "contact" | "download";
}

let idCounter = 1;
function generateId(): string {
  idCounter += 1;
  return `msg_${idCounter}`;
}

function getFormattedTime(): string {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

const TEASER_PROMPTS = [
  "👋 Need guidance on Governance, Controls, or 20-Min Clarity Sessions? Ask APEX!",
  "👋 Looking for Kenya Data Protection (ODPC) or Statutory Secretarial advisory?",
  "👋 Have questions about Apex Edge Advisory? I'm online to assist your team!",
  "👋 Want to explore Job Grading, RACI, or OKR Performance Scorecards?"
];

const APEX_KNOWLEDGE: Record<string, { answer: string; followUps?: string[]; action?: "book" | "contact" | "download" }> = {
  services: {
    answer: "ApexEdge Advisory Limited structures solutions around 6 Practice Areas:\n1. 01 — Governance & Risk\n2. 02 — People & Performance\n3. 03 — Controls & Policies\n4. 04 — Leadership & Capability\n5. 05 — Data Protection & Privacy\n6. 06 — Corporate Secretarial",
    followUps: ["Governance & Risk", "Corporate Secretarial", "Data Protection", "Book Consultation"],
  },
  "corporate secretarial": {
    answer: "Our Corporate Secretarial practice ensures statutory compliance under Companies Act 2015 & BRS:\n- Beneficial Ownership Filings\n- Annual Returns & Registration Maintenance\n- Certified Board Resolutions & AGM Minutes\n- Company Record Management & Statutory Registers",
    followUps: ["Governance & Risk", "Controls & Policies", "Book Consultation"],
  },
  "data protection": {
    answer: "ApexEdge Data Protection & Privacy advisory services:\n- ODPC Statutory Registration (Controllers & Processors)\n- Data Protection Gap Audits & DPIA Reports\n- Personal Data Mapping & Vendor DPAs\n- Data Subject Access (DSAR) & Breach Response Playbooks",
    followUps: ["Governance & Risk", "Controls & Policies", "Book Consultation"],
  },
  privacy: {
    answer: "Our Data Protection & Privacy practice turns legal compliance into practical, working systems that safeguard customer and employee data, build brand trust, and pass regulatory audits.",
    followUps: ["Data Protection", "Book Consultation"],
  },
  "governance & risk": {
    answer: "Our Governance & Risk practice gives your Board clearer visibility of risk and performance through independent audits, eBoard Frameworks, Board risk heat maps, and RACI decision frameworks.",
    followUps: ["Data Protection", "Controls & Policies", "Book Consultation"],
  },
  "people & performance": {
    answer: "Our People & Performance practice builds accountability through Recruitment Processes, Job Grading, Salary Bands, RACI Ownership Charters, and strategy-aligned OKR scorecards.",
    followUps: ["Leadership & Capability", "Book Consultation"],
  },
  "controls & policies": {
    answer: "Our Controls & Policies practice converts static policy documents into practical SOPs with embedded financial, procurement, and HR approval controls.",
    followUps: ["Data Protection", "Book Consultation"],
  },
  "leadership & capability": {
    answer: "Our Leadership & Capability practice builds executive management toolkits, 90-day execution roadmaps, and decision frameworks that change team behavior.",
    followUps: ["People & Performance", "Book Consultation"],
  },
  contact: {
    answer: "You can reach our senior advisors immediately:\n☎ Phone: +254 799 565125 / +254 728 626323\n📧 Email: info@consult-apex.com | advisory@consult-apex.com\n💬 WhatsApp: +254 799 565125",
    followUps: ["Book Consultation", "Our Services"],
    action: "contact",
  },
  booking: {
    answer: "I would be happy to help you schedule a 20-minute executive consultation with an ApexEdge Partner. Select your topic below.",
    followUps: ["Our Services", "Contact ApexEdge"],
    action: "book",
  },
};

interface ApexAIAssistantProps {
  onOpenBooking?: () => void;
}

export function ApexAIAssistant({ onOpenBooking }: ApexAIAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [teaserIndex, setTeaserIndex] = useState(0);

  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: "1",
      sender: "ai",
      text: "Hello 👋\nI'm APEX, your executive advisory assistant for ApexEdge Advisory Limited.\nHow can I assist your organization today?",
      timestamp: getFormattedTime(),
      quickReplies: [
        "Our Services",
        "Data Protection",
        "Governance & Risk",
        "People & Performance",
        "Book Consultation",
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Proactive assistance popup: Triggers every 2 minutes (120,000ms), stays visible for 45 seconds (45,000ms)
  useEffect(() => {
    // Initial teaser prompt after 10 seconds of landing
    const initialTimer = setTimeout(() => {
      if (!isOpen) {
        setShowTeaser(true);
      }
    }, 10000);

    // Recurring 2-minute interval
    const intervalTimer = setInterval(() => {
      if (!isOpen) {
        setTeaserIndex((prev) => (prev + 1) % TEASER_PROMPTS.length);
        setShowTeaser(true);
      }
    }, 120000); // 2 minutes

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, [isOpen]);

  // Teaser auto-dismiss timer: Lasts for 45 seconds when shown
  useEffect(() => {
    let dismissTimer: NodeJS.Timeout;
    if (showTeaser && !isOpen) {
      dismissTimer = setTimeout(() => {
        setShowTeaser(false);
      }, 45000); // 45 seconds animation/visibility duration
    }
    return () => {
      if (dismissTimer) clearTimeout(dismissTimer);
    };
  }, [showTeaser, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setShowTeaser(false);
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMsg: Message = {
      id: generateId(),
      sender: "user",
      text: query,
      timestamp: getFormattedTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue("");
    setIsTyping(true);

    const normalized = query.toLowerCase();

    setTimeout(() => {
      let aiResponseText = "";
      let followUps: string[] | undefined = undefined;
      let action: "book" | "contact" | "download" | undefined = undefined;

      if (normalized.includes("book") || normalized.includes("consultation") || normalized.includes("schedule")) {
        const kb = APEX_KNOWLEDGE["booking"];
        aiResponseText = kb.answer;
        followUps = kb.followUps;
        action = "book";
      } else if (normalized.includes("contact") || normalized.includes("phone") || normalized.includes("email") || normalized.includes("call")) {
        const kb = APEX_KNOWLEDGE["contact"];
        aiResponseText = kb.answer;
        followUps = kb.followUps;
        action = "contact";
      } else {
        const matchedKey = Object.keys(APEX_KNOWLEDGE).find((k) => normalized.includes(k));

        if (matchedKey) {
          const kb = APEX_KNOWLEDGE[matchedKey];
          aiResponseText = kb.answer;
          followUps = kb.followUps;
          action = kb.action;
        } else {
          aiResponseText =
            "I am specialized to assist with ApexEdge Advisory Limited's solutions in Corporate Governance, Data Protection (ODPC), Corporate Secretarial, HR Frameworks, and Controls.";
          followUps = ["Our Services", "Book Consultation", "Contact ApexEdge"];
        }
      }

      const aiMsg: Message = {
        id: generateId(),
        sender: "ai",
        text: aiResponseText,
        timestamp: getFormattedTime(),
        quickReplies: followUps,
        action: action,
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleOpenChat = () => {
    setShowTeaser(false);
    setIsOpen(true);
  };

  return (
    <>
      {/* Proactive Assistance Teaser Popup (White Theme) */}
      <AnimatePresence>
        {showTeaser && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="fixed bottom-20 right-4 sm:right-5 z-50 w-72 sm:w-80 rounded-2xl bg-white border-2 border-[#10B981] p-4 shadow-2xl text-slate-900 font-sans backdrop-blur-xl"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#071C3F] text-[#10B981] flex items-center justify-center shrink-0 shadow-xs">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase text-[#071C3F] tracking-wider block">
                    APEX AI ASSISTANT
                  </span>
                  <span className="text-[9px] text-[#10B981] font-extrabold block">
                    Online · 45s Assistance Popup
                  </span>
                </div>
              </div>

              <button
                onClick={() => setShowTeaser(false)}
                className="text-slate-400 hover:text-slate-900 p-1 rounded-full hover:bg-slate-100 transition-colors"
                aria-label="Dismiss Teaser"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-xs text-slate-700 leading-snug font-medium mb-3">
              {TEASER_PROMPTS[teaserIndex]}
            </p>

            <button
              onClick={handleOpenChat}
              className="w-full bg-[#071C3F] hover:bg-[#0B2A63] text-white font-black text-xs py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer font-sans"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Ask APEX AI Now →</span>
            </button>

            {/* Visual 45-Second Progress Bar Indicator */}
            <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden mt-3 border border-slate-200">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 45, ease: "linear" }}
                className="h-full bg-[#10B981]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Trigger Button in Bottom-Right */}
      <div className="fixed bottom-5 right-4 sm:right-5 z-50">
        <motion.button
          onClick={() => {
            if (showTeaser) setShowTeaser(false);
            setIsOpen(!isOpen);
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#071C3F] border-2 border-[#10B981] text-[#10B981] shadow-[0_10px_30px_rgba(7,28,63,0.3)] backdrop-blur-xl group overflow-hidden cursor-pointer"
          aria-label="Toggle APEX Assistant"
        >
          {/* Pulsing Outer Ring */}
          <div className="absolute inset-0 rounded-full bg-[#10B981]/20 animate-ping pointer-events-none" />

          {/* Idle Sparkle & Icon */}
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X className="w-5 h-5 text-white" />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} className="flex items-center justify-center">
                <Bot className="w-6 h-6 text-[#10B981] group-hover:rotate-12 transition-transform" />
                <span className="absolute top-1 right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Modern WHITE UI/UX Chatbot Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="fixed bottom-20 right-4 sm:right-5 z-50 w-[calc(100vw-2.5rem)] sm:w-[310px] h-[460px] max-h-[82vh] rounded-3xl bg-white border border-slate-200 shadow-2xl text-slate-900 flex flex-col overflow-hidden backdrop-blur-xl font-sans text-xs"
          >
            {/* Top Header Bar (Clean Off-White) */}
            <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-50 border-b border-slate-200 shrink-0">
              <div className="flex items-center gap-2">
                <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-[#071C3F] border border-slate-300 p-1 shadow-xs shrink-0">
                  <Image
                    src="/apexedge_logo.png"
                    alt="ApexEdge Logo"
                    width={22}
                    height={22}
                    className="w-full h-full object-contain brightness-0 invert"
                  />
                  <span className="absolute bottom-0 right-0 w-1.5 h-1.5 rounded-full bg-[#10B981] border border-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-[11px] font-black text-[#071C3F] tracking-tight">APEX AI</span>
                    <span className="px-1.5 py-0.1 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 text-[8px] font-extrabold uppercase text-[#071C3F] tracking-wider">
                      Advisory
                    </span>
                  </div>
                  <p className="text-[9px] text-slate-500 font-medium">Executive Advisory Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Chat Messages Feed (Clean White Canvas) */}
            <div className="flex-1 p-3 overflow-y-auto space-y-2.5 bg-slate-50/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div className="flex items-end gap-1.5 max-w-[92%]">
                    {msg.sender === "ai" && (
                      <div className="w-5.5 h-5.5 rounded-full bg-[#071C3F] text-[#10B981] flex items-center justify-center text-[9px] shrink-0 mb-0.5 shadow-xs">
                        <Bot className="w-3 h-3" />
                      </div>
                    )}
                    <div
                      className={`rounded-2xl p-2.5 text-[11px] leading-snug ${
                        msg.sender === "user"
                          ? "bg-[#10B981] text-[#071C3F] font-bold rounded-br-none shadow-xs"
                          : "bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-xs whitespace-pre-line font-medium"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                  <span className="text-[8px] text-slate-400 mt-0.5 px-1 font-medium">{msg.timestamp}</span>

                  {/* Context Actions (e.g. Book Consultation button) */}
                  {msg.action === "book" && (
                    <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="mt-2 pl-7">
                      <Button
                        onClick={() => {
                          setIsOpen(false);
                          if (onOpenBooking) onOpenBooking();
                        }}
                        className="rounded-full bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black text-[11px] px-3.5 py-1.5 flex items-center gap-1.5 shadow-sm font-sans"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book 20-Min Session</span>
                      </Button>
                    </motion.div>
                  )}

                  {/* Quick Reply Pills */}
                  {msg.quickReplies && msg.quickReplies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2 pl-7">
                      {msg.quickReplies.map((reply) => (
                        <button
                          key={reply}
                          onClick={() => handleSendMessage(reply)}
                          className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-[#071C3F] hover:bg-[#10B981] hover:text-[#071C3F] hover:border-[#10B981] font-bold text-[10px] transition-all shadow-2xs cursor-pointer font-sans"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-1.5 pl-7">
                  <div className="rounded-xl bg-white border border-slate-200 px-3 py-1.5 text-slate-500 flex items-center gap-1 text-[10px] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-bounce delay-150" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-bounce delay-300" />
                    <span className="ml-1 font-medium">APEX typing...</span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Bar (Clean White Footer) */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-2 bg-white border-t border-slate-200 flex items-center gap-1.5 shrink-0"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask APEX..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-3.5 py-1.5 text-[11px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#10B981] focus:bg-white transition-all font-medium"
              />
              <button
                type="submit"
                className="w-7 h-7 rounded-full bg-[#10B981] text-[#071C3F] flex items-center justify-center shrink-0 font-bold hover:bg-emerald-400 transition-colors shadow-xs cursor-pointer"
              >
                <Send className="w-3 h-3" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
