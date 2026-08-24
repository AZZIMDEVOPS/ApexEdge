"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Network,
  Users,
  Building2,
  Sliders,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Download,
  Calendar,
  Sparkles,
  ShieldCheck,
  Briefcase,
  Layers,
  Printer,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface OrganogramCreatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking?: () => void;
}

interface OrganogramNode {
  id: string;
  role: string;
  title: string;
  level: "board" | "executive" | "department" | "unit";
  owner?: string;
  children?: OrganogramNode[];
}

export function OrganogramCreatorModal({ isOpen, onClose, onOpenBooking }: OrganogramCreatorModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Step 1 Form State
  const [orgName, setOrgName] = useState("Apex Client Enterprise");
  const [industry, setIndustry] = useState("Financial Services & Commercial Banking");
  const [staffSize, setStaffSize] = useState("50 – 250 Employees");
  const [structureType, setStructureType] = useState<"functional" | "matrix" | "divisional">("functional");

  // Step 2 Departments Selected
  const [selectedDepts, setSelectedDepts] = useState<string[]>([
    "Finance & Audit",
    "Operations & Supply Chain",
    "People & HR Performance",
    "Legal & Data Compliance",
    "Commercial & Strategy"
  ]);

  // Step 3 CEO & Leadership Names
  const [ceoTitle, setCeoTitle] = useState("Chief Executive Officer (CEO)");
  const [ceoName, setCeoName] = useState("Executive Managing Director");

  const toggleDept = (dept: string) => {
    if (selectedDepts.includes(dept)) {
      if (selectedDepts.length > 1) {
        setSelectedDepts(selectedDepts.filter((d) => d !== dept));
      }
    } else {
      setSelectedDepts([...selectedDepts, dept]);
    }
  };

  const handlePrintWindow = () => {
    if (typeof window !== "undefined") {
      const printWindow = window.open("", "_blank", "width=1000,height=800");
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>${orgName} — Organisational Organogram</title>
              <style>
                body { font-family: system-ui, sans-serif; padding: 40px; color: #071c3f; background: #fff; }
                h1 { font-size: 24px; text-transform: uppercase; margin-bottom: 4px; }
                p { color: #64748b; font-size: 14px; margin-bottom: 24px; }
                .tree { display: flex; flex-direction: column; align-items: center; gap: 20px; }
                .node { border: 2px solid #071c3f; padding: 12px 20px; border-radius: 12px; background: #f8fafc; text-align: center; min-w: 180px; }
                .board { background: #071c3f; color: #fff; border-color: #10b981; }
                .ceo { background: #10b981; color: #071c3f; font-weight: bold; }
                .depts { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; width: 100%; margin-top: 10px; }
                .dept-card { border: 1px solid #cbd5e1; padding: 10px 16px; border-radius: 8px; background: #fff; flex: 1; min-width: 150px; text-align: center; }
              </style>
            </head>
            <body>
              <h1>${orgName}</h1>
              <p>Industry: ${industry} | Workforce: ${staffSize} | Structure Model: ${structureType.toUpperCase()}</p>
              
              <div className="tree">
                <div className="node board">
                  <strong>BOARD OF DIRECTORS</strong>
                  <div style="font-size: 11px; opacity: 0.8;">Fiduciary Governance & Risk Oversight</div>
                </div>

                <div style="width: 2px; height: 20px; background: #071c3f;"></div>

                <div className="node ceo">
                  <strong>${ceoTitle}</strong>
                  <div style="font-size: 11px;">${ceoName}</div>
                </div>

                <div style="width: 2px; height: 20px; background: #071c3f;"></div>

                <div className="depts">
                  ${selectedDepts
                    .map(
                      (d) => `
                    <div className="dept-card">
                      <strong style="display:block; font-size:13px; color:#071c3f;">${d}</strong>
                      <span style="font-size:10px; color:#64748b;">Department Lead & Operational Units</span>
                    </div>
                  `
                    )
                    .join("")}
                </div>
              </div>

              <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; text-align: center;">
                Generated via Apex Edge Advisory Organogram Creator · www.consult-apex.com
              </div>

              <script>
                window.onload = function() { window.print(); }
              </script>
            </body>
          </html>
        `);
        printWindow.document.close();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-sans">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
      />

      {/* Modal Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl max-h-[90vh] rounded-3xl bg-white border border-slate-200 shadow-2xl text-slate-900 flex flex-col overflow-hidden font-sans z-10"
      >
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#071C3F] text-white flex items-center justify-between border-b border-slate-800 shrink-0 font-sans">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center text-[#10B981]">
              <Network className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black tracking-tight text-white uppercase">
                  Organisational Structure &amp; Organogram Creator
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-[#10B981] text-[#071C3F] text-[10px] font-black uppercase">
                  Interactive Tool
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Step {step} of 4: {step === 1 ? "Company Basics" : step === 2 ? "Functional Units" : step === 3 ? "Leadership Titles" : "Live Organogram Canvas"}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Line */}
        <div className="w-full bg-slate-100 h-1.5 flex shrink-0">
          <div
            className="bg-[#10B981] h-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-6 font-sans">
          
          {/* STEP 1: Company Profile */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="space-y-1">
                <h4 className="text-lg font-black text-[#071C3F]">1. Define Your Organisation Profile</h4>
                <p className="text-xs text-slate-600">Provide basic organizational details to structure your reporting tiers.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Company / Enterprise Name</label>
                  <input
                    type="text"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-3 text-xs font-medium text-slate-900 focus:border-[#10B981] focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Industry / Sector</label>
                  <input
                    type="text"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-3 text-xs font-medium text-slate-900 focus:border-[#10B981] focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Total Workforce Size</label>
                  <select
                    value={staffSize}
                    onChange={(e) => setStaffSize(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-3 text-xs font-medium text-slate-900 focus:border-[#10B981] focus:outline-none bg-white"
                  >
                    <option>10 – 50 Employees</option>
                    <option>50 – 250 Employees</option>
                    <option>250 – 1,000 Employees</option>
                    <option>1,000+ Enterprise Scale</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Target Structure Model</label>
                  <select
                    value={structureType}
                    onChange={(e) => setStructureType(e.target.value as any)}
                    className="w-full rounded-xl border border-slate-300 p-3 text-xs font-medium text-slate-900 focus:border-[#10B981] focus:outline-none bg-white"
                  >
                    <option value="functional">Functional Hierarchy (Clear Top-Down Control)</option>
                    <option value="matrix">Matrix Reporting (Cross-Functional Projects)</option>
                    <option value="divisional">Divisional / Regional Business Units</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Select Departments */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="space-y-1">
                <h4 className="text-lg font-black text-[#071C3F]">2. Select Core Departmental Units</h4>
                <p className="text-xs text-slate-600">Select the functional divisions operating under executive leadership.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Finance & Accounts",
                  "Internal Audit & Risk",
                  "Operations & Supply Chain",
                  "People & HR Performance",
                  "Legal & Data Compliance",
                  "Commercial, Sales & Marketing",
                  "Technology & IT Systems",
                  "Strategy & Business Development"
                ].map((dept) => {
                  const isChecked = selectedDepts.includes(dept);
                  return (
                    <div
                      key={dept}
                      onClick={() => toggleDept(dept)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        isChecked
                          ? "bg-emerald-50/80 border-[#10B981] text-[#071C3F] font-bold shadow-xs"
                          : "bg-slate-50 border-slate-200 text-slate-700 font-normal hover:bg-slate-100"
                      }`}
                    >
                      <span className="text-xs">{dept}</span>
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center text-white ${
                          isChecked ? "bg-[#10B981]" : "border border-slate-300 bg-white"
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* STEP 3: Executive Officer Names */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="space-y-1">
                <h4 className="text-lg font-black text-[#071C3F]">3. Assign Executive Leadership Titles</h4>
                <p className="text-xs text-slate-600">Define the top single-point executive role heading your organogram.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Executive Head Title</label>
                  <input
                    type="text"
                    value={ceoTitle}
                    onChange={(e) => setCeoTitle(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-3 text-xs font-medium text-slate-900 focus:border-[#10B981] focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Incumbent Officer / Role Name</label>
                  <input
                    type="text"
                    value={ceoName}
                    onChange={(e) => setCeoName(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-3 text-xs font-medium text-slate-900 focus:border-[#10B981] focus:outline-none"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 4: Live Organogram Canvas & Preview */}
          {step === 4 && (
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-black text-[#071C3F]">{orgName} — Organogram Model</h4>
                  <p className="text-xs text-slate-600">
                    {industry} · {staffSize} · {structureType.toUpperCase()} STRUCTURE
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    onClick={handlePrintWindow}
                    variant="outline"
                    className="border-slate-300 bg-white text-slate-800 text-xs rounded-xl px-3 py-2 flex items-center gap-1.5 cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Open in Printable Window</span>
                  </Button>
                </div>
              </div>

              {/* Dynamic Interactive Tree Diagram */}
              <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-6 flex flex-col items-center justify-center font-sans overflow-x-auto shadow-inner">
                
                {/* Board Level */}
                <div className="px-6 py-3 rounded-2xl bg-[#071C3F] border-2 border-[#10B981] text-center shadow-lg min-w-[240px]">
                  <span className="text-[10px] font-black uppercase text-[#10B981] tracking-widest block">
                    GOVERNANCE TIER 01
                  </span>
                  <span className="text-sm font-black text-white block">BOARD OF DIRECTORS</span>
                  <span className="text-[10px] text-slate-300 block">Fiduciary Oversight &amp; Audit Committee</span>
                </div>

                {/* Vertical Line */}
                <div className="w-0.5 h-6 bg-[#10B981]" />

                {/* CEO Level */}
                <div className="px-6 py-3 rounded-2xl bg-[#10B981] text-[#071C3F] text-center shadow-lg min-w-[240px]">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#071C3F]/80 block">
                    EXECUTIVE LEADERSHIP TIER 02
                  </span>
                  <span className="text-sm font-black block">{ceoTitle}</span>
                  <span className="text-[11px] font-bold block">{ceoName}</span>
                </div>

                {/* Vertical Line */}
                <div className="w-0.5 h-6 bg-[#10B981]" />

                {/* Departmental Tier (Horizontal Cards Grid) */}
                <div className="w-full pt-2">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block text-center mb-3">
                    FUNCTIONAL DIVISION HEADS (TIER 03)
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 w-full">
                    {selectedDepts.map((d) => (
                      <div
                        key={d}
                        className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-center space-y-1 hover:border-[#10B981] transition-colors"
                      >
                        <span className="text-[11px] font-bold text-white block truncate">{d}</span>
                        <span className="text-[9px] text-[#10B981] font-semibold block">Single-Point Lead</span>
                        <span className="text-[9px] text-slate-400 block">RACI Authority</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Apex Edge Audit CTA */}
              <div className="p-5 rounded-2xl bg-emerald-50 border border-[#10B981]/40 flex flex-wrap items-center justify-between gap-4 font-sans">
                <div className="space-y-1">
                  <span className="text-xs font-black uppercase text-[#071C3F] block">
                    Need an Independent Structure &amp; Role Overlap Audit?
                  </span>
                  <p className="text-xs text-slate-700 font-medium">
                    Our Advisory Partners review your organogram, eliminate duplicate management layers, and create single-page RACI charters.
                  </p>
                </div>

                <Button
                  onClick={() => {
                    onClose();
                    if (onOpenBooking) onOpenBooking();
                  }}
                  className="bg-[#071C3F] hover:bg-[#0B2A63] text-white font-black text-xs rounded-xl px-5 py-2.5 flex items-center gap-2 shadow-md font-sans"
                >
                  <Calendar className="w-4 h-4 text-[#10B981]" />
                  <span>Book Structure Review Session →</span>
                </Button>
              </div>

            </motion.div>
          )}

        </div>

        {/* Footer Step Controls */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0 font-sans">
          {step > 1 ? (
            <Button
              onClick={() => setStep((prev) => (prev - 1) as any)}
              variant="outline"
              className="border-slate-300 text-slate-700 text-xs rounded-xl px-4 py-2 flex items-center gap-1.5 cursor-pointer font-sans"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </Button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <Button
              onClick={() => setStep((prev) => (prev + 1) as any)}
              className="bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black text-xs rounded-xl px-5 py-2 flex items-center gap-1.5 cursor-pointer font-sans"
            >
              <span>Next: {step === 1 ? "Departments" : step === 2 ? "Leadership" : "Generate Organogram"}</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              onClick={onClose}
              className="bg-[#071C3F] hover:bg-[#0B2A63] text-white font-black text-xs rounded-xl px-5 py-2 font-sans"
            >
              <span>Close Tool</span>
            </Button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
