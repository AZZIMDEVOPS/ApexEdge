"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UploadCloud,
  FileText,
  CheckCircle2,
  Users,
  Briefcase,
  Search,
  Filter,
  UserCheck,
  Building,
  Mail,
  Phone,
  User,
  ShieldCheck,
  Clock,
  MapPin,
  Award,
  ChevronRight,
  X,
  Plus,
  Send,
  AlertCircle,
  Download,
  Eye,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface CandidateProfile {
  id: string;
  code: string;
  title: string;
  discipline: string;
  experienceYears: number;
  level: "Mid-Level" | "Senior Management" | "Executive / C-Suite";
  education: string;
  certifications: string[];
  location: string;
  noticePeriod: string;
  skills: string[];
  summary: string;
  salaryExpectation: string;
  verifiedStatus: boolean;
}

const FEATURED_CANDIDATES: CandidateProfile[] = [
  {
    id: "cand-01",
    code: "APEX-TALENT-9042",
    title: "Head of People & Culture",
    discipline: "People & Culture",
    experienceYears: 14,
    level: "Executive / C-Suite",
    education: "M.Sc. Human Resource Management (UoN)",
    certifications: ["IHRM Certified Practitioner", "CHRP-K"],
    location: "Nairobi, Kenya (Open to Regional Travel)",
    noticePeriod: "30 Days Notice",
    skills: ["Organogram Restructuring", "HR Statutory Compliance", "Union Negotiation", "OKR Performance Frameworks", "Executive Coaching"],
    summary: "Senior People executive with 14+ years scaling workforce architecture across FMCG and Financial Services. Specialist in HR turnaround, CBA negotiations, and performance scorecards.",
    salaryExpectation: "KES 550,000 - 700,000 / month",
    verifiedStatus: true,
  },
  {
    id: "cand-02",
    code: "APEX-TALENT-8815",
    title: "Senior Director of Risk & Governance",
    discipline: "Governance & Risk",
    experienceYears: 16,
    level: "Executive / C-Suite",
    education: "LL.M International Commercial Law, LL.B",
    certifications: ["Certified Corporate Governance Auditor (ICPSK)", "CRM"],
    location: "Nairobi, Kenya / Remote",
    noticePeriod: "Available Immediately",
    skills: ["Board Charter Drafting", "CMA Governance Compliance", "Enterprise Risk Heat Maps", "ODPC Data Privacy Audit", "eBoard Implementation"],
    summary: "Former Board Secretary and Chief Governance Lead for a listed regional bank. Proven track record in board pack restructuring, regulatory audit defense, and governance framework design.",
    salaryExpectation: "KES 650,000 - 850,000 / month",
    verifiedStatus: true,
  },
  {
    id: "cand-03",
    code: "APEX-TALENT-7729",
    title: "Chief Financial Officer (CFO)",
    discipline: "Finance & Audit",
    experienceYears: 18,
    level: "Executive / C-Suite",
    education: "MBA Finance, B.Com Accounting",
    certifications: ["CPA-K", "FCCA"],
    location: "Nairobi, Kenya (Regional East Africa)",
    noticePeriod: "60 Days Notice",
    skills: ["Financial Authorisation Matrix", "Internal Control Systems", "SOP Co-Design", "Capital Raising", "Tax Compliance & Statutory Filings"],
    summary: "Seasoned Group CFO with extensive cross-border experience in East Africa. Architect of multi-tier financial delegation controls, SAP implementations, and treasury optimization.",
    salaryExpectation: "KES 800,000 - 1,100,000 / month",
    verifiedStatus: true,
  },
  {
    id: "cand-04",
    code: "APEX-TALENT-6510",
    title: "VP of Talent Acquisition & Organisation Development",
    discipline: "People & Culture",
    experienceYears: 11,
    level: "Senior Management",
    education: "B.Sc. Organisational Psychology",
    certifications: ["IHRM Member", "SHRM-SCP"],
    location: "Nairobi, Kenya",
    noticePeriod: "30 Days Notice",
    skills: ["Executive Headhunting", "Competency Framework Mapping", "Job Evaluation & Grading", "Succession Planning", "HR Digital Transformation"],
    summary: "Dynamic talent lead who has managed executive recruitment drives across 6 African markets. Built salary band frameworks and retention strategies for tech and telecom firms.",
    salaryExpectation: "KES 420,000 - 550,000 / month",
    verifiedStatus: true,
  },
  {
    id: "cand-05",
    code: "APEX-TALENT-5491",
    title: "Head of Operational Controls & Internal Audit",
    discipline: "Controls & Audit",
    experienceYears: 12,
    level: "Senior Management",
    education: "B.Com Accounting & Finance",
    certifications: ["CIA", "CISA", "CPA-K"],
    location: "Nairobi, Kenya / Regional",
    noticePeriod: "Available Immediately",
    skills: ["Internal Audit Exception Remediation", "Digital SOP Systems", "Anti-Fraud Controls", "Whistleblower Frameworks", "Procurement Audit"],
    summary: "Rigorous internal control expert who reduced operational exceptions by 75% for a manufacturing enterprise. Specialist in fraud prevention, whistleblowing channels, and inventory controls.",
    salaryExpectation: "KES 450,000 - 600,000 / month",
    verifiedStatus: true,
  },
  {
    id: "cand-06",
    code: "APEX-TALENT-4328",
    title: "Company Secretary & Legal Counsel",
    discipline: "Legal & Corporate Secretarial",
    experienceYears: 13,
    level: "Senior Management",
    education: "LL.B (Hons), Post-Graduate Diploma (KSL)",
    certifications: ["CPS-K", "Advocate of the High Court of Kenya"],
    location: "Nairobi, Kenya",
    noticePeriod: "30 Days Notice",
    skills: ["BRS Statutory Filings", "Beneficial Ownership Registers", "Board Resolution Drafting", "AGM/EGM Minutes", "Contract Negotiation"],
    summary: "Practicing advocate and certified corporate secretary. Managed over 120 statutory company secretarial accounts, BRS e-filings, and board charter compliance mandates.",
    salaryExpectation: "KES 400,000 - 520,000 / month",
    verifiedStatus: true,
  }
];

const DISCIPLINES = [
  "All Disciplines",
  "People & Culture",
  "Governance & Risk",
  "Finance & Audit",
  "Controls & Audit",
  "Legal & Corporate Secretarial",
  "Technology & Digital"
];

interface RecruitmentTalentHubProps {
  defaultTab?: "candidate" | "employer";
}

export function RecruitmentTalentHub({ defaultTab = "candidate" }: RecruitmentTalentHubProps) {
  const [activeTab, setActiveTab] = useState<"candidate" | "employer">(defaultTab);

  // Candidate Upload Form State
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [candidateForm, setCandidateForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    targetRole: "",
    discipline: "People & Culture",
    experienceLevel: "Senior Management (6-10 yrs)",
    currentTitle: "",
    linkedIn: "",
    salaryExpectation: "",
    bio: "",
    customSkills: ""
  });
  const [candidateSubmitted, setCandidateSubmitted] = useState<boolean>(false);
  const [submissionCode, setSubmissionCode] = useState<string>("");

  // Employer Search State
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>("All Disciplines");
  const [selectedLevel, setSelectedLevel] = useState<string>("All Levels");
  const [selectedCandidate, setSelectedCandidate] = useState<CandidateProfile | null>(null);
  const [employerInquirySubmitted, setEmployerInquirySubmitted] = useState<boolean>(false);
  const [employerForm, setEmployerForm] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    roleRequirement: "",
    urgency: "Immediate (Within 30 days)"
  });

  // Handle Drag & Drop File Upload
  const handleFileChange = (file: File | null) => {
    if (!file) return;
    const validTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!validTypes.includes(file.type)) {
      alert("Please upload a valid document format (.pdf, .doc, or .docx)");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      alert("File size exceeds 10MB limit.");
      return;
    }

    setCvFile(file);
    setIsUploading(true);
    setUploadProgress(15);
    
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 25;
      });
    }, 200);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  // Submit Candidate Form
  const handleCandidateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cvFile && uploadProgress < 100) {
      alert("Please upload your CV document before submitting.");
      return;
    }
    const code = `APEX-CV-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmissionCode(code);
    setCandidateSubmitted(true);
  };

  // Submit Employer Inquiry Form
  const handleEmployerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmployerInquirySubmitted(true);
  };

  // Filter Candidates
  const filteredCandidates = FEATURED_CANDIDATES.filter((cand) => {
    const matchesQuery = 
      cand.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cand.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      cand.summary.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDiscipline = selectedDiscipline === "All Disciplines" || cand.discipline === selectedDiscipline;
    const matchesLevel = selectedLevel === "All Levels" || cand.level === selectedLevel;

    return matchesQuery && matchesDiscipline && matchesLevel;
  });

  return (
    <section id="recruitment-hub" className="scroll-mt-24 py-20 bg-slate-900 text-white rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative">
      
      {/* Decorative Background Lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 space-y-12">
        
        {/* Header Title Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/15 border border-[#10B981]/40 text-[#10B981] text-xs font-black uppercase tracking-widest">
            <Users className="w-4 h-4" />
            <span>PEOPLE &amp; CULTURE · RECRUITMENT &amp; TALENT PORTAL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Apex Edge Executive Talent Network
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Connecting verified high-performance executives, managers, and specialists with East Africa&apos;s leading corporate boardrooms and employers.
          </p>

          {/* Interactive Mode Switcher Tabs */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <button
              onClick={() => setActiveTab("candidate")}
              className={`px-6 py-3.5 rounded-full text-xs font-black transition-all duration-300 flex items-center gap-2.5 cursor-pointer shadow-lg ${
                activeTab === "candidate"
                  ? "bg-[#10B981] text-[#071C3F] shadow-[#10B981]/25 scale-105"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700"
              }`}
            >
              <UploadCloud className="w-4 h-4" />
              <span>For Candidates: Upload CV &amp; Join Pool</span>
            </button>

            <button
              onClick={() => setActiveTab("employer")}
              className={`px-6 py-3.5 rounded-full text-xs font-black transition-all duration-300 flex items-center gap-2.5 cursor-pointer shadow-lg ${
                activeTab === "employer"
                  ? "bg-[#10B981] text-[#071C3F] shadow-[#10B981]/25 scale-105"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700"
              }`}
            >
              <Search className="w-4 h-4" />
              <span>For Employers: Find Executive Talent ({FEATURED_CANDIDATES.length})</span>
            </button>
          </div>
        </div>

        {/* TAB 1: CANDIDATE CV UPLOAD FORM */}
        {activeTab === "candidate" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto bg-slate-950/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8"
          >
            {candidateSubmitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 bg-emerald-500/20 border-2 border-[#10B981] rounded-full flex items-center justify-center mx-auto text-[#10B981]">
                  <CheckCircle2 className="w-10 h-10 animate-bounce" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">
                    SUBMISSION CONFIRMED
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    Your CV Has Been Submitted to Apex Edge Talent Network
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{candidateForm.fullName || "Candidate"}</strong>. Your profile has been assigned executive tracking ID <span className="text-[#10B981] font-mono font-bold">{submissionCode}</span>. Our People &amp; Culture recruitment advisors will review your credentials for executive placement opportunities.
                  </p>
                </div>

                <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto text-left space-y-3 text-xs">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Tracking Ref:</span>
                    <span className="font-mono font-bold text-[#10B981]">{submissionCode}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Target Role:</span>
                    <span className="font-semibold text-white">{candidateForm.targetRole || "Executive Candidate"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">CV File Uploaded:</span>
                    <span className="font-semibold text-emerald-400 flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5" />
                      {cvFile?.name || "CV_Document.pdf"}
                    </span>
                  </div>
                </div>

                <Button
                  onClick={() => {
                    setCandidateSubmitted(false);
                    setCvFile(null);
                    setUploadProgress(0);
                  }}
                  className="bg-slate-800 hover:bg-slate-700 text-white rounded-full px-6 py-3 text-xs font-bold"
                >
                  Submit Another Candidate CV
                </Button>
              </div>
            ) : (
              <form onSubmit={handleCandidateSubmit} className="space-y-8">
                
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <UserCheck className="w-5 h-5 text-[#10B981]" />
                      <span>Executive CV Submission Form</span>
                    </h3>
                    <p className="text-xs text-slate-400">
                      Fill in your profile details and upload your latest Curriculum Vitae (PDF/Word).
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                    Confidential &amp; Secure
                  </span>
                </div>

                {/* DRAG & DROP CV UPLOAD BOX */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                    1. Upload CV / Resume Document <span className="text-emerald-400">*</span>
                  </label>
                  
                  <div
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-center space-y-3 ${
                      cvFile 
                        ? "border-[#10B981] bg-emerald-950/20" 
                        : "border-slate-700 bg-slate-900/60 hover:border-slate-500 hover:bg-slate-900"
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => e.target.files && handleFileChange(e.target.files[0])}
                    />

                    {cvFile ? (
                      <div className="space-y-2 w-full max-w-md">
                        <div className="w-12 h-12 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center mx-auto">
                          <FileText className="w-6 h-6" />
                        </div>
                        <div className="text-sm font-bold text-white truncate">{cvFile.name}</div>
                        <div className="text-xs text-slate-400">{(cvFile.size / (1024 * 1024)).toFixed(2)} MB</div>

                        {/* Upload Progress Bar */}
                        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700">
                          <div
                            className="bg-[#10B981] h-full transition-all duration-300"
                            style={{ width: `${uploadProgress}%` }}
                          />
                        </div>
                        {uploadProgress === 100 ? (
                          <span className="text-xs font-bold text-[#10B981] flex items-center justify-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> File Ready &amp; Validated
                          </span>
                        ) : (
                          <span className="text-xs text-slate-400">Uploading... {uploadProgress}%</span>
                        )}

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCvFile(null);
                            setUploadProgress(0);
                          }}
                          className="text-[11px] font-bold text-red-400 hover:underline pt-2 inline-block"
                        >
                          Remove file and upload another
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="w-14 h-14 rounded-2xl bg-slate-800 text-[#10B981] flex items-center justify-center border border-slate-700 shadow-inner">
                          <UploadCloud className="w-7 h-7" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white">
                            Drag &amp; Drop your CV file here, or <span className="text-[#10B981] underline">Browse Files</span>
                          </p>
                          <p className="text-xs text-slate-400 mt-1">
                            Supports PDF, DOC, DOCX up to 10MB
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* CANDIDATE PERSONAL & PROFESSIONAL DETAILS */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Full Name <span className="text-emerald-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jane M. Wanjiku"
                        value={candidateForm.fullName}
                        onChange={(e) => setCandidateForm({ ...candidateForm, fullName: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Email Address <span className="text-emerald-400">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        required
                        placeholder="e.g. jane.wanjiku@domain.com"
                        value={candidateForm.email}
                        onChange={(e) => setCandidateForm({ ...candidateForm, email: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Phone Number <span className="text-emerald-400">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +254 712 345 678"
                        value={candidateForm.phone}
                        onChange={(e) => setCandidateForm({ ...candidateForm, phone: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Target Role / Job Title <span className="text-emerald-400">*</span>
                    </label>
                    <div className="relative">
                      <Briefcase className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Head of HR / People & Culture Director"
                        value={candidateForm.targetRole}
                        onChange={(e) => setCandidateForm({ ...candidateForm, targetRole: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Primary Practice Discipline
                    </label>
                    <select
                      value={candidateForm.discipline}
                      onChange={(e) => setCandidateForm({ ...candidateForm, discipline: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#10B981]"
                    >
                      <option value="People & Culture">People & Culture / HR</option>
                      <option value="Governance & Risk">Governance & Risk</option>
                      <option value="Finance & Audit">Finance & Accounting</option>
                      <option value="Controls & Audit">Operational Controls & Internal Audit</option>
                      <option value="Legal & Corporate Secretarial">Legal & Corporate Secretarial</option>
                      <option value="Technology & Digital">Technology & Digital Transformation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Total Years of Experience
                    </label>
                    <select
                      value={candidateForm.experienceLevel}
                      onChange={(e) => setCandidateForm({ ...candidateForm, experienceLevel: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#10B981]"
                    >
                      <option value="Mid-Level (3-5 yrs)">Mid-Level (3-5 Years)</option>
                      <option value="Senior Management (6-10 yrs)">Senior Management (6-10 Years)</option>
                      <option value="Executive / Leadership (10-15 yrs)">Executive / Leadership (10-15 Years)</option>
                      <option value="C-Suite & Board (15+ yrs)">C-Suite &amp; Board Level (15+ Years)</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      LinkedIn Profile / Portfolio URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/yourprofile"
                      value={candidateForm.linkedIn}
                      onChange={(e) => setCandidateForm({ ...candidateForm, linkedIn: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Monthly Remuneration Expectation (KES)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. KES 450,000 - 600,000"
                      value={candidateForm.salaryExpectation}
                      onChange={(e) => setCandidateForm({ ...candidateForm, salaryExpectation: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    Brief Professional Summary &amp; Key Milestones
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Highlight 2-3 major achievements (e.g. Structured company organogram, led CBA negotiations, managed 50+ staff audit...)"
                    value={candidateForm.bio}
                    onChange={(e) => setCandidateForm({ ...candidateForm, bio: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981]"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black rounded-xl py-4 text-sm shadow-xl shadow-[#10B981]/20 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit CV to Apex Edge Talent Directory →</span>
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        )}

        {/* TAB 2: EMPLOYER CANDIDATE FINDER & SEARCH DIRECTORY */}
        {activeTab === "employer" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* Search & Filter Bar */}
            <div className="bg-slate-950/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
              <div className="flex flex-col md:flex-row items-center gap-4">
                
                {/* Search Keyword */}
                <div className="relative flex-1 w-full">
                  <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    placeholder="Search candidate titles, skills, certifications (e.g. Organogram, CPA-K, IHRM)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-3 text-slate-400 hover:text-white text-xs"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Level Filter */}
                <div className="w-full md:w-56">
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#10B981]"
                  >
                    <option value="All Levels">All Experience Levels</option>
                    <option value="Senior Management">Senior Management</option>
                    <option value="Executive / C-Suite">Executive / C-Suite</option>
                  </select>
                </div>
              </div>

              {/* Discipline Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-2 flex items-center gap-1">
                  <Filter className="w-3 h-3 text-[#10B981]" /> Filter by Practice:
                </span>
                {DISCIPLINES.map((disc) => (
                  <button
                    key={disc}
                    onClick={() => setSelectedDiscipline(disc)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      selectedDiscipline === disc
                        ? "bg-[#10B981] text-[#071C3F] font-bold"
                        : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
                    }`}
                  >
                    {disc}
                  </button>
                ))}
              </div>
            </div>

            {/* Candidate Cards Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredCandidates.map((cand) => (
                <div
                  key={cand.id}
                  className="bg-slate-950/70 border border-slate-800 hover:border-[#10B981]/60 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[#10B981]/5 group"
                >
                  <div className="space-y-4">
                    
                    {/* Header: Ref Code & Verified Badge */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono font-bold text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-md border border-[#10B981]/30">
                        {cand.code}
                      </span>
                      {cand.verifiedStatus && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                          <ShieldCheck className="w-3 h-3" /> Apex Verified
                        </span>
                      )}
                    </div>

                    {/* Candidate Position Title */}
                    <div>
                      <h3 className="text-lg font-black text-white group-hover:text-[#10B981] transition-colors">
                        {cand.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium">
                        {cand.discipline} · {cand.experienceYears} Years Exp ({cand.level})
                      </p>
                    </div>

                    {/* Education & Certifications */}
                    <div className="space-y-1.5 text-xs text-slate-300 border-t border-slate-900 pt-3">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Award className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                        <span className="font-medium truncate">{cand.education}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 pt-1">
                        {cand.certifications.map((cert) => (
                          <span key={cert} className="text-[10px] font-bold bg-slate-900 text-emerald-300 px-2 py-0.5 rounded border border-slate-800">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Executive Bio Summary */}
                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed font-normal">
                      &ldquo;{cand.summary}&rdquo;
                    </p>

                    {/* Skills Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cand.skills.map((sk) => (
                        <span key={sk} className="text-[10px] bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                          {sk}
                        </span>
                      ))}
                    </div>

                    {/* Remuneration & Availability */}
                    <div className="pt-3 border-t border-slate-900 flex items-center justify-between text-xs">
                      <span className="text-slate-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-emerald-400" />
                        {cand.noticePeriod}
                      </span>
                      <span className="text-slate-300 font-bold">{cand.salaryExpectation.split('/')[0]}</span>
                    </div>

                  </div>

                  {/* Card Action Button */}
                  <div className="pt-6">
                    <Button
                      onClick={() => setSelectedCandidate(cand)}
                      className="w-full bg-slate-900 hover:bg-[#10B981] text-slate-200 hover:text-[#071C3F] font-bold rounded-xl py-3 text-xs border border-slate-800 hover:border-[#10B981] flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Inquire Candidate Dossier →</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {filteredCandidates.length === 0 && (
              <div className="text-center py-16 bg-slate-950/40 rounded-2xl border border-slate-800 space-y-3">
                <AlertCircle className="w-10 h-10 text-slate-600 mx-auto" />
                <h4 className="text-base font-bold text-white">No candidates match your current search filters</h4>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Try adjusting your search query or discipline selection, or submit a custom Executive Headhunting request below.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedDiscipline("All Disciplines");
                    setSelectedLevel("All Levels");
                  }}
                  className="bg-slate-800 text-white rounded-full px-5 py-2 text-xs font-bold"
                >
                  Reset Search Filters
                </Button>
              </div>
            )}

            {/* Custom Headhunting Request Banner */}
            <div className="rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-black uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>CUSTOM EXECUTIVE SEARCH &amp; HEADHUNTING</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Looking for a Specific C-Suite or Specialized Executive Role?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Our People &amp; Culture recruitment practice conducts tailored executive search, background verification, and competency assessment for corporate clients.
                </p>
              </div>

              <Button
                onClick={() => setSelectedCandidate(FEATURED_CANDIDATES[0])}
                className="bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black rounded-full px-6 py-3.5 text-xs shadow-lg shadow-[#10B981]/20 whitespace-nowrap cursor-pointer"
              >
                Request Custom Search Consultation →
              </Button>
            </div>

          </motion.div>
        )}

      </div>

      {/* EMPLOYER CANDIDATE INQUIRY MODAL */}
      <AnimatePresence>
        {selectedCandidate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-xl w-full text-white shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => {
                  setSelectedCandidate(null);
                  setEmployerInquirySubmitted(false);
                }}
                className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-full bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              {employerInquirySubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-[#10B981] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Inquiry Received</h3>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{employerForm.contactPerson}</strong> ({employerForm.companyName}). Our executive talent lead will contact you within 24 hours regarding candidate dossier <span className="text-[#10B981] font-mono font-bold">{selectedCandidate.code}</span>.
                  </p>
                  <Button
                    onClick={() => {
                      setSelectedCandidate(null);
                      setEmployerInquirySubmitted(false);
                    }}
                    className="bg-[#10B981] text-[#071C3F] font-bold rounded-full px-6 py-2.5 text-xs"
                  >
                    Close Window
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleEmployerSubmit} className="space-y-5">
                  <div className="space-y-1 border-b border-slate-800 pb-4">
                    <span className="text-[10px] font-mono font-bold text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/30">
                      CANDIDATE DOSSIER INQUIRY · {selectedCandidate.code}
                    </span>
                    <h3 className="text-xl font-black text-white pt-1">
                      Request Full Dossier: {selectedCandidate.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {selectedCandidate.experienceYears} Years Exp · {selectedCandidate.education}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300 block">Company / Organisation Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Enterprises Ltd"
                        value={employerForm.companyName}
                        onChange={(e) => setEmployerForm({ ...employerForm, companyName: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981]"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-300 block">Contact Person Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. David Omondi (HR Director)"
                          value={employerForm.contactPerson}
                          onChange={(e) => setEmployerForm({ ...employerForm, contactPerson: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-300 block">Work Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="david@company.com"
                          value={employerForm.email}
                          onChange={(e) => setEmployerForm({ ...employerForm, email: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981]"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-300 block">Direct Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+254 700 000 000"
                          value={employerForm.phone}
                          onChange={(e) => setEmployerForm({ ...employerForm, phone: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-300 block">Placement Urgency</label>
                        <select
                          value={employerForm.urgency}
                          onChange={(e) => setEmployerForm({ ...employerForm, urgency: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#10B981]"
                        >
                          <option value="Immediate (Within 30 days)">Immediate (Within 30 Days)</option>
                          <option value="Medium (1-3 months)">Medium (1-3 Months)</option>
                          <option value="Exploratory / Planning">Exploratory / Talent Bench</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300 block">Specific Position &amp; Role Requirements</label>
                      <textarea
                        rows={3}
                        placeholder="Briefly describe the vacancy, target reporting line, key deliverables..."
                        value={employerForm.roleRequirement}
                        onChange={(e) => setEmployerForm({ ...employerForm, roleRequirement: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981]"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black rounded-xl py-3.5 text-xs shadow-lg cursor-pointer"
                  >
                    Request Confidential Candidate Dossier →
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
