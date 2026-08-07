"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Bot,
  Calendar,
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

const APEX_KNOWLEDGE: Record<string, { answer: string; followUps?: string[]; action?: "book" | "contact" | "download" }> = {
  services: {
    answer: "ApexEdge Advisory Limited provides 6 core practice areas:\n1. Company Secretarial & BRS Filings\n2. Corporate Governance & Board Advisory\n3. Legal & Regulatory Compliance\n4. HR Advisory & Restructuring\n5. Business Registration & Systems Setup\n6. Immigration Services & Work Permits.",
    followUps: ["Company Secretarial", "Corporate Governance", "Legal Advisory", "Book Consultation"],
  },
  "business registration": {
    answer: "We manage end-to-end company incorporation in Kenya under the Business Registration Service (BRS):\n- Name Reservation & Articles of Association\n- KRA PIN, NSSF, & SHA Registration\n- CR12 Official Extract Issuance\n- Business Permit & Bank Account Opening Assistance.",
    followUps: ["Company Secretarial", "Compliance", "Book Consultation"],
  },
  "company secretarial": {
    answer: "Our certified Company Secretarial team (CPS-K) handles:\n- Preparation & filing of Annual Returns with BRS\n- Maintenance of Statutory Books & Beneficial Ownership Registers\n- Board & AGM Documentation and Minute Taking\n- Share Allotment, Transfers, & Corporate Restructuring.",
    followUps: ["Corporate Governance", "Compliance", "Book Consultation"],
  },
  "corporate governance": {
    answer: "We assist boards of directors, state corporations, and private entities with:\n- Board Evaluation & Governance Audits\n- Drafting Board Charters, Ethics Codes & Committee Frameworks\n- Alignment with Capital Markets Authority (CMA) Guidelines & MWONGOZO Code\n- Executive ESG & Strategic Advisory Workshops.",
    followUps: ["Legal Advisory", "Company Secretarial", "Book Consultation"],
  },
  "legal advisory": {
    answer: "Our Advocates & Legal Advisors provide comprehensive counsel on:\n- Commercial Contracts & Joint Venture Agreements\n- Regulatory Compliance Reviews & Licensing\n- Employment Law & Dispute Resolution Support\n- Intellectual Property Registration & Restructuring.",
    followUps: ["HR Consulting", "Corporate Governance", "Book Consultation"],
  },
  "hr consulting": {
    answer: "ApexEdge HR Advisory solutions include:\n- Employment Contracts & HR Policy Manual Development\n- Compensation Structuring & Payroll Administration\n- Organizational Restructuring & Performance Management\n- Kenyan Labor Law Compliance Audits.",
    followUps: ["Immigration Services", "Legal Advisory", "Book Consultation"],
  },
  immigration: {
    answer: "We streamline Kenya Immigration Department applications for multinational & expatriate personnel:\n- Class D Work Permits (Investors/Employees)\n- Class G (Prospecting) & Class K (Residents)\n- Special Passes & Student Passes\n- Foreign National Registration (Alien IDs) & Dependant Passes.",
    followUps: ["Business Registration", "HR Consulting", "Book Consultation"],
  },
  compliance: {
    answer: "We ensure 100% compliance with Kenyan statutory regulations, including the Companies Act 2015, Data Protection Act, Tax Procedures Act, and Sectoral Licenses (CMA, CBK, IRA, BRS).",
    followUps: ["Company Secretarial", "Legal Advisory", "Book Consultation"],
  },
  "office location": {
    answer: "📍 **ApexEdge Advisory Limited Headquarters**\nNairobi, Kenya\n📧 info@apexedge.co.ke\n🌐 www.apexedge.co.ke\n☎ +254 117 471344\n🕒 Business Hours: Monday – Friday, 8:00 AM – 5:00 PM EAT.",
    followUps: ["Book Consultation", "Contact ApexEdge"],
  },
  contact: {
    answer: "You can reach our senior advisors immediately:\n☎ Phone: +254 117 471344\n📧 Email: info@apexedge.co.ke\n💬 WhatsApp: +254 117 471344\nOr click below to schedule an executive consultation call.",
    followUps: ["Book Consultation", "Our Services"],
    action: "contact",
  },
  booking: {
    answer: "I would be happy to help you schedule a confidential executive consultation with an ApexEdge Partner. Click the button below to select your preferred date, time, and service area.",
    followUps: ["Our Services", "Contact ApexEdge"],
    action: "book",
  },
};

interface ApexAIAssistantProps {
  onOpenBooking?: () => void;
}

export function ApexAIAssistant({ onOpenBooking }: ApexAIAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: "1",
      sender: "ai",
      text: "Hello 👋\nI'm APEX, your executive advisory assistant for ApexEdge Advisory Limited.\nHow can I assist your organization today?",
      timestamp: getFormattedTime(),
      quickReplies: [
        "Our Services",
        "Business Registration",
        "Company Secretarial",
        "Corporate Governance",
        "Legal Advisory",
        "HR Consulting",
        "Immigration Services",
        "Book Consultation",
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
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

    // Match query against APEX knowledge base
    const normalized = query.toLowerCase();

    setTimeout(() => {
      let aiResponseText = "";
      let followUps: string[] | undefined = undefined;
      let action: "book" | "contact" | "download" | undefined = undefined;

      if (normalized.includes("book") || normalized.includes("consultation") || normalized.includes("schedule") || normalized.includes("proposal")) {
        const kb = APEX_KNOWLEDGE["booking"];
        aiResponseText = kb.answer;
        followUps = kb.followUps;
        action = "book";
      } else if (normalized.includes("contact") || normalized.includes("phone") || normalized.includes("email") || normalized.includes("call") || normalized.includes("location") || normalized.includes("where")) {
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
          // Out of scope fallback
          aiResponseText =
            "I am specialized to assist with ApexEdge Advisory Limited's professional solutions.\nI would be delighted to guide you through corporate governance, legal advisory, company secretarial, HR consulting, immigration, or business registration services in Kenya.";
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
    }, 700);
  };

  return (
    <>
      {/* Floating Action Trigger Button in Bottom-Right */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#071C3F] border-2 border-[#10B981] text-[#10B981] shadow-[0_10px_35px_rgba(7,28,63,0.6)] backdrop-blur-xl group overflow-hidden"
          aria-label="Toggle APEX Assistant"
        >
          {/* Pulsing Outer Ring */}
          <div className="absolute inset-0 rounded-full bg-[#10B981]/20 animate-ping pointer-events-none" />

          {/* Idle Sparkle & Icon */}
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X className="w-7 h-7 text-white" />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} className="flex items-center justify-center">
                <Bot className="w-8 h-8 text-[#10B981] group-hover:rotate-12 transition-transform" />
                <span className="absolute top-2 right-2 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10B981]"></span>
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[410px] h-[580px] rounded-3xl bg-[#071C3F] border border-[#10B981]/40 shadow-2xl text-white flex flex-col overflow-hidden backdrop-blur-2xl"
          >
            {/* Top Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-[#10B981]/30">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-slate-950 border border-[#10B981]/50 p-2 shadow-md shrink-0">
                  <Image
                    src="/apexedge_logo.png"
                    alt="ApexEdge Logo"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain brightness-0 invert drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)]"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-slate-900" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/apexedge_logo.png"
                      alt="ApexEdge Advisory Logo"
                      width={24}
                      height={20}
                      className="h-5 w-auto object-contain brightness-0 invert"
                    />
                    <span className="px-2 py-0.5 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[10px] font-black uppercase text-[#10B981] tracking-wider">
                      Executive
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-normal">ApexEdge Advisory Virtual Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages Feed */}
            <div className="flex-1 p-5 overflow-y-auto space-y-4 bg-gradient-to-b from-[#071C3F] via-slate-950/80 to-[#071C3F]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div className="flex items-end gap-2 max-w-[85%]">
                    {msg.sender === "ai" && (
                      <div className="w-7 h-7 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] flex items-center justify-center text-xs shrink-0 mb-1">
                        <Bot className="w-4 h-4" />
                      </div>
                    )}
                    <div
                      className={`rounded-2xl p-4 text-sm leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-[#10B981] text-[#071C3F] font-semibold rounded-br-none shadow-md"
                          : "bg-slate-900/90 border border-slate-800 text-slate-100 rounded-bl-none shadow-lg whitespace-pre-line"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.timestamp}</span>

                  {/* Context Actions (e.g. Book Consultation button) */}
                  {msg.action === "book" && (
                    <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="mt-2 pl-9">
                      <Button
                        onClick={() => {
                          setIsOpen(false);
                          if (onOpenBooking) onOpenBooking();
                        }}
                        className="rounded-full bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-bold text-xs px-5 py-2 flex items-center gap-2 shadow-lg"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Book Executive Consultation</span>
                      </Button>
                    </motion.div>
                  )}

                  {/* Quick Reply Pills */}
                  {msg.quickReplies && msg.quickReplies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3 pl-9">
                      {msg.quickReplies.map((reply) => (
                        <motion.button
                          key={reply}
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          onClick={() => handleSendMessage(reply)}
                          className="px-3 py-1.5 rounded-full bg-slate-900 border border-[#10B981]/40 text-xs text-[#10B981] hover:bg-[#10B981] hover:text-[#071C3F] font-semibold transition-all shadow-sm"
                        >
                          {reply}
                        </motion.button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 pl-9">
                  <div className="rounded-2xl bg-slate-900 border border-slate-800 px-4 py-3 text-slate-400 flex items-center gap-1.5 text-xs">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-bounce delay-150" />
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-bounce delay-300" />
                    <span className="ml-1 text-[11px]">APEX is thinking...</span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask APEX about our services..."
                className="flex-1 bg-slate-950 border border-slate-800 rounded-full px-5 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981] transition-colors"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-[#10B981] text-[#071C3F] flex items-center justify-center shrink-0 font-bold hover:bg-emerald-400 transition-colors shadow-md"
              >
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
