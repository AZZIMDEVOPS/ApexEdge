"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Sliders,
  Users,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Building2,
  Mail,
  Phone,
  User,
  HelpCircle,
  Zap,
  Target,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Check,
  X,
  Send,
  Building,
  Award,
  Sparkles,
  ChevronRight,
  Download,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";

// APEXEDGE CORPORATE CONTACT DETAILS CONSTANTS
export const APEX_COMPANY_DETAILS = {
  name: "ApexEdge Advisory Ltd",
  tagline: "Governance, Enterprise Risk, Controls & Executive Execution Systems",
  email: "info@consult-apex.com",
  website: "www.consult-apex.com",
  location: "Nairobi, Kenya · East Africa",
};

// Types for Questions & Diagnostics
export interface DiagnosticQuestion {
  id: number;
  category: string;
  question: string;
  isCritical?: boolean;
  weight?: number; // 2 = important, 3 = fundamental
  isTrigger?: boolean; // For DPIA Reg 49 trigger
}

export type DiagnosticType = "governance-risk" | "data-protection" | "controls-policies" | "people-performance";
export type PolicyToolType = "hr" | "finance" | "investment" | "operations" | "communications" | "me";

// ==========================================
// 1. GOVERNANCE & RISK REVIEW (50 QUESTIONS)
// ==========================================
export const GOVERNANCE_RISK_QUESTIONS: DiagnosticQuestion[] = [
  // Governance & Board Effectiveness (1-5)
  { id: 1, category: "Governance & Board Effectiveness", question: "Is there a formal Board or equivalent oversight body with a clear mandate?", isCritical: true, weight: 3 },
  { id: 2, category: "Governance & Board Effectiveness", question: "Are Board and management roles, powers and reporting lines clearly documented?", isCritical: false, weight: 2 },
  { id: 3, category: "Governance & Board Effectiveness", question: "Does the Board meet regularly with agendas, minutes and tracked action items?", isCritical: false, weight: 2 },
  { id: 4, category: "Governance & Board Effectiveness", question: "Are conflicts of interest declared annually and when specific matters arise?", isCritical: false, weight: 2 },
  { id: 5, category: "Governance & Board Effectiveness", question: "Does leadership receive timely information on performance, risk and key decisions?", isCritical: false, weight: 2 },

  // Enterprise Risk Management (6-10)
  { id: 6, category: "Enterprise Risk Management", question: "Is there a current organisation-wide risk register reviewed at least quarterly?", isCritical: true, weight: 3 },
  { id: 7, category: "Enterprise Risk Management", question: "Does each significant risk have an owner, controls and agreed actions?", isCritical: false, weight: 3 },
  { id: 8, category: "Enterprise Risk Management", question: "Has leadership defined risk appetite, tolerance or escalation thresholds?", isCritical: false, weight: 3 },
  { id: 9, category: "Enterprise Risk Management", question: "Are the top risks discussed regularly by management and the Board?", isCritical: false, weight: 3 },
  { id: 10, category: "Enterprise Risk Management", question: "Are incidents and audit findings tracked to root cause and verified closure?", isCritical: false, weight: 3 },

  // Policies, Delegation & Internal Controls (11-15)
  { id: 11, category: "Policies, Delegation & Internal Controls", question: "Are key policies current, approved, accessible and understood by relevant staff?", isCritical: false, weight: 2 },
  { id: 12, category: "Policies, Delegation & Internal Controls", question: "Is there a documented delegation-of-authority or approval-limit framework?", isCritical: true, weight: 3 },
  { id: 13, category: "Policies, Delegation & Internal Controls", question: "Are incompatible duties separated or independently reviewed where separation is impractical?", isCritical: false, weight: 2 },
  { id: 14, category: "Policies, Delegation & Internal Controls", question: "Are policy exceptions documented, approved and periodically reviewed?", isCritical: false, weight: 2 },
  { id: 15, category: "Policies, Delegation & Internal Controls", question: "Are key controls periodically tested to confirm they actually operate?", isCritical: false, weight: 3 },

  // Financial Management & Fraud Risk (16-20)
  { id: 16, category: "Financial Management & Fraud Risk", question: "Are bank reconciliations prepared promptly and independently reviewed?", isCritical: true, weight: 3 },
  { id: 17, category: "Financial Management & Fraud Risk", question: "Are budgets approved and material variances regularly explained and acted upon?", isCritical: false, weight: 2 },
  { id: 18, category: "Financial Management & Fraud Risk", question: "Are payments supported, authorised and reconciled before or after payment?", isCritical: false, weight: 3 },
  { id: 19, category: "Financial Management & Fraud Risk", question: "Are journals, reversals and unusual entries independently reviewed?", isCritical: false, weight: 2 },
  { id: 20, category: "Financial Management & Fraud Risk", question: "Is there a clear process for escalating suspected fraud or financial misconduct?", isCritical: false, weight: 2 },

  // Procurement & Third-Party Risk (21-25)
  { id: 21, category: "Procurement & Third-Party Risk", question: "Are procurement thresholds and sourcing methods formally documented?", isCritical: false, weight: 2 },
  { id: 22, category: "Procurement & Third-Party Risk", question: "Are vendors screened for ownership, conflicts and basic due diligence before engagement?", isCritical: true, weight: 2 },
  { id: 23, category: "Procurement & Third-Party Risk", question: "Is competitive sourcing used unless an exception is documented and approved?", isCritical: false, weight: 2 },
  { id: 24, category: "Procurement & Third-Party Risk", question: "Are ordering, receipt, invoice verification and payment responsibilities appropriately separated?", isCritical: false, weight: 2 },
  { id: 25, category: "Procurement & Third-Party Risk", question: "Are major suppliers and contracts periodically reviewed for performance and compliance?", isCritical: false, weight: 2 },

  // People, Accountability & Performance (26-30)
  { id: 26, category: "People, Accountability & Performance", question: "Do employees have current job descriptions with clear accountability?", isCritical: false, weight: 2 },
  { id: 27, category: "People, Accountability & Performance", question: "Are recruitment, reference and background checks applied consistently to relevant roles?", isCritical: false, weight: 1.5 },
  { id: 28, category: "People, Accountability & Performance", question: "Are staff given measurable objectives and regular performance reviews?", isCritical: false, weight: 1.5 },
  { id: 29, category: "People, Accountability & Performance", question: "Are payroll changes independently approved and payroll reconciled before payment?", isCritical: false, weight: 1.5 },
  { id: 30, category: "People, Accountability & Performance", question: "Are grievance and disciplinary processes documented and applied consistently?", isCritical: false, weight: 1.5 },

  // Ethics, Whistleblowing & Investigations (31-35)
  { id: 31, category: "Ethics, Whistleblowing & Investigations", question: "Is there a code of conduct or ethics standard communicated to staff?", isCritical: false, weight: 2 },
  { id: 32, category: "Ethics, Whistleblowing & Investigations", question: "Can employees and stakeholders report serious concerns through a confidential channel?", isCritical: true, weight: 2 },
  { id: 33, category: "Ethics, Whistleblowing & Investigations", question: "Can concerns be raised without going through the person implicated?", isCritical: false, weight: 2 },
  { id: 34, category: "Ethics, Whistleblowing & Investigations", question: "Are whistleblowers protected from retaliation, victimisation or inappropriate disclosure?", isCritical: false, weight: 2 },
  { id: 35, category: "Ethics, Whistleblowing & Investigations", question: "Is there a defined process to triage, investigate, escalate and close reported cases?", isCritical: false, weight: 2 },

  // Legal & Regulatory Compliance (36-40)
  { id: 36, category: "Legal & Regulatory Compliance", question: "Does the organisation maintain a register of key legal and regulatory obligations?", isCritical: true, weight: 2 },
  { id: 37, category: "Legal & Regulatory Compliance", question: "Are licences, statutory filings and recurring compliance deadlines centrally tracked?", isCritical: false, weight: 2 },
  { id: 38, category: "Legal & Regulatory Compliance", question: "Are privacy and data-protection responsibilities clearly assigned and implemented?", isCritical: true, weight: 2 },
  { id: 39, category: "Legal & Regulatory Compliance", question: "Are material contracts and legal commitments reviewed before approval or signature?", isCritical: false, weight: 2 },
  { id: 40, category: "Legal & Regulatory Compliance", question: "Are compliance breaches recorded, escalated and tracked to corrective action?", isCritical: false, weight: 2 },

  // Technology, Data & Cyber Risk (41-45)
  { id: 41, category: "Technology, Data & Cyber Risk", question: "Are system access rights approved and promptly removed when roles change or staff leave?", isCritical: false, weight: 1.2 },
  { id: 42, category: "Technology, Data & Cyber Risk", question: "Are critical data backups performed and periodically tested for restoration?", isCritical: false, weight: 1.2 },
  { id: 43, category: "Technology, Data & Cyber Risk", question: "Is multi-factor authentication or equivalent strong access control used for critical systems?", isCritical: true, weight: 1.2 },
  { id: 44, category: "Technology, Data & Cyber Risk", question: "Is there a documented response process for cyber or information-security incidents?", isCritical: false, weight: 1.2 },
  { id: 45, category: "Technology, Data & Cyber Risk", question: "Is access to sensitive information restricted, logged and periodically reviewed?", isCritical: false, weight: 1.2 },

  // Strategy, Resilience & Assurance (46-50)
  { id: 46, category: "Strategy, Resilience & Assurance", question: "Does the organisation have a current strategy or annual plan with measurable priorities?", isCritical: false, weight: 1 },
  { id: 47, category: "Strategy, Resilience & Assurance", question: "Does management use a regular dashboard of key performance and risk indicators?", isCritical: false, weight: 1 },
  { id: 48, category: "Strategy, Resilience & Assurance", question: "Are business-continuity or disaster-recovery arrangements documented and tested?", isCritical: true, weight: 1 },
  { id: 49, category: "Strategy, Resilience & Assurance", question: "Are key-person, supplier or concentration dependencies identified and mitigated?", isCritical: false, weight: 1 },
  { id: 50, category: "Strategy, Resilience & Assurance", question: "Does the organisation obtain periodic independent assurance or governance reviews?", isCritical: false, weight: 1 }
];

// ==========================================
// 2. DPIA & PRIVACY RISK SCREEN (30 QUESTIONS)
// ==========================================
export const DPIA_PRIVACY_QUESTIONS: DiagnosticQuestion[] = [
  // Statutory High-Risk Triggers (Q1-Q10) - YES = Risk Signal!
  { id: 1, category: "DPIA Statutory Triggers (Reg 49)", question: "Will the project use automated decision-making, profiling or algorithms in a way that could significantly affect a person?", isTrigger: true, weight: 4 },
  { id: 2, category: "DPIA Statutory Triggers (Reg 49)", question: "Will personal data be used on a large scale for a purpose different from the purpose for which it was originally collected?", isTrigger: true, weight: 4 },
  { id: 3, category: "DPIA Statutory Triggers (Reg 49)", question: "Will the project process biometric or genetic data, such as fingerprints, facial recognition, voiceprints or DNA?", isTrigger: true, weight: 4 },
  { id: 4, category: "DPIA Statutory Triggers (Reg 49)", question: "Is an existing processing activity being changed in a way that could increase privacy risk to individuals?", isTrigger: true, weight: 4 },
  { id: 5, category: "DPIA Statutory Triggers (Reg 49)", question: "Will the project process sensitive personal data or data relating to children or other vulnerable groups?", isTrigger: true, weight: 4 },
  { id: 6, category: "DPIA Statutory Triggers (Reg 49)", question: "Will the project combine, link or cross-reference personal data from different sources or collected for different purposes?", isTrigger: true, weight: 4 },
  { id: 7, category: "DPIA Statutory Triggers (Reg 49)", question: "Will the project process personal data on a large scale or affect a large number of individuals?", isTrigger: true, weight: 4 },
  { id: 8, category: "DPIA Statutory Triggers (Reg 49)", question: "Will the project systematically monitor a publicly accessible area on a large scale, for example through CCTV?", isTrigger: true, weight: 4 },
  { id: 9, category: "DPIA Statutory Triggers (Reg 49)", question: "Will the project use a new or innovative technology or organisational solution that materially changes how personal data is processed?", isTrigger: true, weight: 4 },
  { id: 10, category: "DPIA Statutory Triggers (Reg 49)", question: "Could the processing prevent or materially limit an individual from exercising a data protection right?", isTrigger: true, weight: 4 },

  // Readiness & Privacy Controls (Q11-Q30) - YES = Safeguard Present!
  { id: 11, category: "Purpose & Data Mapping", question: "The project has a clearly documented purpose for collecting and using personal data.", weight: 3 },
  { id: 12, category: "Purpose & Data Mapping", question: "We have identified the types of personal data and categories of people whose data will be processed.", weight: 3 },
  { id: 13, category: "Purpose & Data Mapping", question: "We can map where personal data comes from, where it is stored, who receives it and how it is deleted.", weight: 3 },
  { id: 14, category: "Purpose & Data Mapping", question: "We know approximately how many individuals will be affected and the expected scale of processing.", weight: 2 },
  { id: 15, category: "Purpose & Data Mapping", question: "The roles of the data controller, data processor and relevant third parties are clear.", weight: 3 },

  { id: 16, category: "Necessity & Proportionality", question: "A lawful basis for each material processing purpose has been identified and documented.", weight: 3 },
  { id: 17, category: "Necessity & Proportionality", question: "The proposed processing is necessary to achieve the stated purpose.", weight: 3 },
  { id: 18, category: "Necessity & Proportionality", question: "We have considered whether the same outcome could be achieved using less personal data.", weight: 3 },
  { id: 19, category: "Necessity & Proportionality", question: "Only personal data genuinely needed for the purpose will be collected or used.", weight: 3 },
  { id: 20, category: "Necessity & Proportionality", question: "Clear retention and secure deletion periods have been defined for the personal data.", weight: 2 },

  { id: 21, category: "Rights & Transparency", question: "Individuals will receive clear information about what data is collected, why it is used and their rights.", weight: 3 },
  { id: 22, category: "Rights & Transparency", question: "Where consent is relied upon, it will be specific, informed, freely given and capable of withdrawal.", weight: 3 },
  { id: 23, category: "Rights & Transparency", question: "There is a practical process for individuals to exercise access, correction, objection, or erasure rights.", weight: 3 },
  { id: 24, category: "Rights & Transparency", question: "Additional safeguards are in place where children, vulnerable persons or sensitive data are involved.", weight: 3 },
  { id: 25, category: "Rights & Transparency", question: "Where automated decisions are used, affected individuals can obtain human intervention.", weight: 3 },

  { id: 26, category: "Safeguards & Governance", question: "Appropriate technical and organisational safeguards are designed for data sensitivity.", weight: 3 },
  { id: 27, category: "Safeguards & Governance", question: "Third-party processors or service providers are subject to written data-processing agreements (DPAs).", weight: 3 },
  { id: 28, category: "Safeguards & Governance", question: "Any transfer or storage of personal data outside Kenya has been identified with transfer safeguards.", weight: 3 },
  { id: 29, category: "Safeguards & Governance", question: "There is a documented process for detecting, managing and escalating a personal data breach.", weight: 3 },
  { id: 30, category: "Safeguards & Governance", question: "A responsible privacy/DPO/legal owner will document residual risks and approvals before go-live.", weight: 4 }
];

// ==========================================
// 3. OKR & PERFORMANCE REVIEW (30 QUESTIONS)
// ==========================================
export const OKR_PERFORMANCE_QUESTIONS: DiagnosticQuestion[] = [
  { id: 1, category: "Strategy & Alignment", question: "Our organisation has a small number of clearly defined strategic priorities.", weight: 3 },
  { id: 2, category: "Strategy & Alignment", question: "Team objectives can be traced directly to organisational priorities.", weight: 3 },
  { id: 3, category: "Strategy & Alignment", question: "Employees understand how their work contributes to the organisation's priorities.", weight: 2 },
  { id: 4, category: "Strategy & Alignment", question: "Leadership agrees on what must be achieved in the current performance cycle.", weight: 3 },
  { id: 5, category: "Strategy & Alignment", question: "Competing priorities are actively reduced rather than simply added to the workload.", weight: 2 },

  { id: 6, category: "Objective Quality", question: "Objectives describe meaningful outcomes rather than routine activities or task lists.", weight: 3 },
  { id: 7, category: "Objective Quality", question: "Each objective is clear enough that different people interpret it in the same way.", weight: 2 },
  { id: 8, category: "Objective Quality", question: "Teams work with a manageable number of objectives at any one time.", weight: 2 },
  { id: 9, category: "Objective Quality", question: "Objectives are ambitious but still realistically achievable within the cycle.", weight: 2 },
  { id: 10, category: "Objective Quality", question: "Each objective has one clearly accountable owner.", weight: 3 },

  { id: 11, category: "Key Result Quality", question: "Key Results are measurable and include a defined target or end-state.", weight: 3 },
  { id: 12, category: "Key Result Quality", question: "Key Results measure outcomes rather than simply counting activities completed.", weight: 3 },
  { id: 13, category: "Key Result Quality", question: "Baseline performance is known before targets are set.", weight: 2 },
  { id: 14, category: "Key Result Quality", question: "Progress against Key Results can be supported by reliable data or evidence.", weight: 3 },
  { id: 15, category: "Key Result Quality", question: "Teams can tell objectively whether a Key Result has been achieved.", weight: 2 },

  { id: 16, category: "Cadence & Execution", question: "OKR progress is reviewed at least monthly during the performance cycle.", weight: 3 },
  { id: 17, category: "Cadence & Execution", question: "Performance check-ins focus on barriers, decisions and support—not only status updates.", weight: 2 },
  { id: 18, category: "Cadence & Execution", question: "When an OKR is off-track, corrective action is agreed with an owner and deadline.", weight: 3 },
  { id: 19, category: "Cadence & Execution", question: "OKR progress is visible to the people who need it without waiting for year-end appraisal.", weight: 2 },
  { id: 20, category: "Cadence & Execution", question: "Priorities and OKRs can be adjusted when circumstances materially change.", weight: 2 },

  { id: 21, category: "Accountability & Conversations", question: "Managers hold regular one-to-one performance conversations with their staff.", weight: 3 },
  { id: 22, category: "Accountability & Conversations", question: "Employees receive useful feedback before the formal appraisal meeting.", weight: 3 },
  { id: 23, category: "Accountability & Conversations", question: "Poor performance is addressed early rather than being deferred to year-end.", weight: 3 },
  { id: 24, category: "Accountability & Conversations", question: "Managers distinguish between lack of capability, lack of resources and lack of accountability.", weight: 2 },
  { id: 25, category: "Accountability & Conversations", question: "Performance discussions result in documented actions, support or development commitments.", weight: 2 },

  { id: 26, category: "Governance & Reinforcement", question: "Performance ratings are based on evidence and are reviewed for consistency across teams.", weight: 3 },
  { id: 27, category: "Governance & Reinforcement", question: "The organisation tracks completion and quality of performance reviews.", weight: 2 },
  { id: 28, category: "Governance & Reinforcement", question: "Lessons from missed OKRs are used to improve planning and execution.", weight: 2 },
  { id: 29, category: "Governance & Reinforcement", question: "Recognition, development and consequence decisions are linked to demonstrated performance.", weight: 3 },
  { id: 30, category: "Governance & Reinforcement", question: "Leadership receives a concise view of performance trends, major gaps and decisions required.", weight: 3 }
];

// ==========================================
// 4. POLICY REVIEW HUB (6 POLICY TYPES x 30Q)
// ==========================================
export const POLICY_HUB_TYPES = [
  { id: "hr", title: "HR Policy Desktop Review", desc: "Governance, recruitment, pay, performance, discipline & exit controls." },
  { id: "finance", title: "Finance & Procurement Policy Review", desc: "Budgeting, approval limits, cash, payments & vendor sourcing controls." },
  { id: "investment", title: "Investment Policy Desktop Review", desc: "Mandate, risk appetite, asset allocation, due diligence & monitoring." },
  { id: "operations", title: "Operations Manual Desktop Review", desc: "Operating model, SOP documentation, service quality, assets & records." },
  { id: "communications", title: "Communications Policy Desktop Review", desc: "Approvals, internal comms, media, brand protection & privacy controls." },
  { id: "me", title: "Monitoring & Evaluation (M&E) Manual Review", desc: "Results framework, indicators, data quality, reporting & ethics." }
];

export const POLICY_HR_QUESTIONS: DiagnosticQuestion[] = [
  { id: 1, category: "Governance & Legal Foundation", question: "The HR policy clearly states its purpose, scope, effective date and approval authority.", weight: 3 },
  { id: 2, category: "Governance & Legal Foundation", question: "The policy has a defined review cycle when employment laws or business needs change.", weight: 2 },
  { id: 3, category: "Governance & Legal Foundation", question: "HR responsibilities are clearly separated between Board, management, HR and line managers.", weight: 3 },
  { id: 4, category: "Governance & Legal Foundation", question: "The policy applies consistently to all relevant employee categories.", weight: 2 },
  { id: 5, category: "Governance & Legal Foundation", question: "The policy is aligned to employment, labour, safety, and non-discrimination laws.", weight: 3 },

  { id: 6, category: "Recruitment, Onboarding & Records", question: "Recruitment requires approved vacancies, clear JDs and documented selection criteria.", weight: 3 },
  { id: 7, category: "Recruitment, Onboarding & Records", question: "Conflict-of-interest and nepotism risks are addressed in hiring decisions.", weight: 3 },
  { id: 8, category: "Recruitment, Onboarding & Records", question: "Reference, qualification, and background checks are defined before appointment.", weight: 2 },
  { id: 9, category: "Recruitment, Onboarding & Records", question: "Offer letters and contracts are issued and approved before or at commencement.", weight: 3 },
  { id: 10, category: "Recruitment, Onboarding & Records", question: "The policy provides a structured onboarding and probation process.", weight: 2 },

  { id: 11, category: "Pay, Benefits, Leave & Working Time", question: "The policy explains how salaries, allowances, and salary changes are authorised.", weight: 3 },
  { id: 12, category: "Pay, Benefits, Leave & Working Time", question: "Working hours, rest periods, overtime and attendance expectations are defined.", weight: 2 },
  { id: 13, category: "Pay, Benefits, Leave & Working Time", question: "Annual leave entitlement, accrual, approval and carry-forward are addressed.", weight: 3 },
  { id: 14, category: "Pay, Benefits, Leave & Working Time", question: "Sick leave, maternity, paternity and statutory leave categories are provided for.", weight: 3 },
  { id: 15, category: "Pay, Benefits, Leave & Working Time", question: "Payroll changes require documented approval and reconciliation to employee records.", weight: 3 },

  { id: 16, category: "Performance & Employee Relations", question: "The policy sets a clear performance cycle with objectives, check-ins and appraisal.", weight: 3 },
  { id: 17, category: "Performance & Employee Relations", question: "Managers are required to address poor performance early using documented steps.", weight: 3 },
  { id: 18, category: "Performance & Employee Relations", question: "Training decisions are linked to organisational needs and performance gaps.", weight: 2 },
  { id: 19, category: "Performance & Employee Relations", question: "Employees have a clear grievance process with protection from retaliation.", weight: 3 },
  { id: 20, category: "Performance & Employee Relations", question: "The policy addresses harassment, discrimination, and respectful workplace conduct.", weight: 3 },

  { id: 21, category: "Discipline, Exit & Safeguarding", question: "Disciplinary procedures separate investigation, hearing, decision and appeal.", weight: 3 },
  { id: 22, category: "Discipline, Exit & Safeguarding", question: "Misconduct categories and possible disciplinary outcomes are clear.", weight: 3 },
  { id: 23, category: "Discipline, Exit & Safeguarding", question: "Termination, resignation, redundancy and retirement processes include required approvals.", weight: 3 },
  { id: 24, category: "Discipline, Exit & Safeguarding", question: "Offboarding requires return of company assets, access removal and handover controls.", weight: 2 },
  { id: 25, category: "Discipline, Exit & Safeguarding", question: "Whistleblowing and protected-reporting mechanisms are accessible to staff.", weight: 2 }
];

// Master Main Diagnostic Component Props
interface PracticeDiagnosticEngineProps {
  initialType?: DiagnosticType;
  onClose?: () => void;
}

export function PracticeDiagnosticEngine({ initialType = "governance-risk", onClose }: PracticeDiagnosticEngineProps) {
  const [activeDiagnostic, setActiveDiagnostic] = useState<DiagnosticType>(initialType);
  const [selectedPolicyTool, setSelectedPolicyTool] = useState<PolicyToolType>("hr");

  // Step state: 'intro' | 'questions' | 'client-form' | 'results'
  const [currentStep, setCurrentStep] = useState<"intro" | "questions" | "client-form" | "results">("intro");
  
  // Current question index
  const [currentQIdx, setCurrentQIdx] = useState<number>(0);
  
  // User answers map: questionId -> boolean (true = Yes, false = No)
  const [answers, setAnswers] = useState<Record<number, boolean>>({});

  // Client Details & Company Name Form State
  const [clientDetails, setClientDetails] = useState({
    companyName: "",
    fullName: "",
    roleTitle: "",
    email: "",
    phone: "",
    industrySector: "",
    projectName: "", // For DPIA
  });

  const [submissionRefCode, setSubmissionRefCode] = useState<string>("");

  // Get active questions based on diagnostic type
  const getQuestions = (): DiagnosticQuestion[] => {
    switch (activeDiagnostic) {
      case "governance-risk":
        return GOVERNANCE_RISK_QUESTIONS;
      case "data-protection":
        return DPIA_PRIVACY_QUESTIONS;
      case "people-performance":
        return OKR_PERFORMANCE_QUESTIONS;
      case "controls-policies":
        return POLICY_HR_QUESTIONS; // Default policy for policy review hub
      default:
        return GOVERNANCE_RISK_QUESTIONS;
    }
  };

  const questions = getQuestions();
  const activeQuestion = questions[currentQIdx] || questions[0];

  // Handle Answer Selection
  const handleAnswer = (val: boolean) => {
    setAnswers((prev) => ({ ...prev, [activeQuestion.id]: val }));
    if (currentQIdx < questions.length - 1) {
      setCurrentQIdx((prev) => prev + 1);
    } else {
      setCurrentStep("client-form");
    }
  };

  // Reset Assessment
  const resetAssessment = () => {
    setAnswers({});
    setCurrentQIdx(0);
    setCurrentStep("intro");
  };

  // Handle Client Form Submission & Generate Results
  const handleClientFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const prefix = activeDiagnostic === "governance-risk" ? "GOV" : activeDiagnostic === "data-protection" ? "DPIA" : activeDiagnostic === "controls-policies" ? "POLICY" : "OKR";
    const refCode = `APEX-${prefix}-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmissionRefCode(refCode);
    setCurrentStep("results");
  };

  // Calculate Scores & Risk Ratings
  const calculateResults = () => {
    let totalQuestions = questions.length;
    let totalAnswered = Object.keys(answers).length;

    if (activeDiagnostic === "data-protection") {
      // Statutory Reg 49 Triggers (Q1-10): YES is a trigger!
      let triggerCount = 0;
      for (let i = 1; i <= 10; i++) {
        if (answers[i] === true) triggerCount++;
      }

      // Readiness Controls (Q11-30): NO is a gap!
      let controlGaps = 0;
      for (let i = 11; i <= 30; i++) {
        if (answers[i] === false) controlGaps++;
      }

      // Weighted Risk Score Calculation (0-100)
      let weightedRisk = Math.round(((triggerCount * 4) + (controlGaps * 3)) / 100 * 100);
      if (weightedRisk > 100) weightedRisk = 100;

      let riskRating = "LOW";
      if (weightedRisk > 80) riskRating = "CRITICAL";
      else if (weightedRisk > 60) riskRating = "HIGH";
      else if (weightedRisk > 40) riskRating = "ELEVATED";
      else if (weightedRisk > 20) riskRating = "MODERATE";

      const dpiaSignal = triggerCount >= 1 ? "DPIA LIKELY REQUIRED" : "NO REG 49 TRIGGER IDENTIFIED";

      return {
        totalQuestions,
        totalAnswered,
        score: weightedRisk,
        riskRating,
        dpiaSignal,
        triggerCount,
        controlGaps,
      };
    } else {
      // Governance, Policy, or OKR Diagnostic: NO = Risk Points
      let noCount = 0;
      let criticalGaps = 0;

      questions.forEach((q) => {
        if (answers[q.id] === false) {
          noCount++;
          if (q.isCritical) criticalGaps++;
        }
      });

      let score = Math.round((noCount / totalQuestions) * 100);

      let riskRating = "LOW RISK";
      if (score > 80) riskRating = "CRITICAL RISK";
      else if (score > 60) riskRating = "HIGH RISK";
      else if (score > 40) riskRating = "ELEVATED RISK";
      else if (score > 20) riskRating = "MODERATE RISK";

      return {
        totalQuestions,
        totalAnswered,
        score,
        riskRating,
        noCount,
        criticalGaps,
      };
    }
  };

  const results = calculateResults();

  return (
    <div className="bg-slate-950 text-white rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Banner with Corporate Contact Details */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#10B981] bg-[#10B981]/10 px-3 py-1 rounded-full border border-[#10B981]/30">
              {APEX_COMPANY_DETAILS.name}
            </span>
            <span className="text-xs text-slate-400 font-semibold hidden sm:inline">
              · {APEX_COMPANY_DETAILS.website}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Practice Area Executive Health Checks &amp; Desktop Reviews
          </h2>
          <p className="text-xs text-slate-400">
            Rapid 3-to-5 minute diagnostic self-assessments with instant 0-100 risk scoring.
          </p>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white bg-slate-900 border border-slate-800 p-2 rounded-full cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* PRACTICE AREA SELECTOR TABS */}
      <div className="flex flex-wrap items-center gap-2 pt-1 border-b border-slate-800/80 pb-5">
        <button
          onClick={() => {
            setActiveDiagnostic("governance-risk");
            resetAssessment();
          }}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeDiagnostic === "governance-risk"
              ? "bg-[#10B981] text-[#071C3F] font-black shadow-md shadow-[#10B981]/20 scale-105"
              : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Governance &amp; Risk (50Q)</span>
        </button>

        <button
          onClick={() => {
            setActiveDiagnostic("data-protection");
            resetAssessment();
          }}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeDiagnostic === "data-protection"
              ? "bg-[#10B981] text-[#071C3F] font-black shadow-md shadow-[#10B981]/20 scale-105"
              : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
          }`}
        >
          <Lock className="w-4 h-4" />
          <span>DPIA &amp; Data Protection (30Q)</span>
        </button>

        <button
          onClick={() => {
            setActiveDiagnostic("controls-policies");
            resetAssessment();
          }}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeDiagnostic === "controls-policies"
              ? "bg-[#10B981] text-[#071C3F] font-black shadow-md shadow-[#10B981]/20 scale-105"
              : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>Controls &amp; SOP Policy Hub (6x30Q)</span>
        </button>

        <button
          onClick={() => {
            setActiveDiagnostic("people-performance");
            resetAssessment();
          }}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeDiagnostic === "people-performance"
              ? "bg-[#10B981] text-[#071C3F] font-black shadow-md shadow-[#10B981]/20 scale-105"
              : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
          }`}
        >
          <Users className="w-4 h-4" />
          <span>People, Culture &amp; Leadership Check (30Q)</span>
        </button>
      </div>

      {/* STEP 1: INTRO LANDING SCREEN */}
      {currentStep === "intro" && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8 max-w-3xl mx-auto py-4 text-center"
        >
          <div className="space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/40 flex items-center justify-center mx-auto shadow-inner">
              {activeDiagnostic === "governance-risk" && <ShieldCheck className="w-8 h-8" />}
              {activeDiagnostic === "data-protection" && <Lock className="w-8 h-8" />}
              {activeDiagnostic === "controls-policies" && <Sliders className="w-8 h-8" />}
              {activeDiagnostic === "people-performance" && <Users className="w-8 h-8" />}
            </div>

            <h3 className="text-2xl sm:text-4xl font-black text-white">
              {activeDiagnostic === "governance-risk" && "5-Minute Governance & Board Risk Desktop Review"}
              {activeDiagnostic === "data-protection" && "3-Minute DPIA & Statutory Privacy Risk Screen"}
              {activeDiagnostic === "controls-policies" && "5-Minute Policy & Control Health Check Hub"}
              {activeDiagnostic === "people-performance" && "3-Minute People, Culture & Leadership Execution Review"}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              {activeDiagnostic === "governance-risk" && "Answer 50 rapid Yes/No questions to receive an instant indicative risk score across 10 core governance categories, identify red-flag gaps, and generate actionable next steps."}
              {activeDiagnostic === "data-protection" && "Screen your project or organisation under Kenya's Data Protection Act 2019 & Regulation 49 statutory high-risk indicators to determine whether a full Data Protection Impact Assessment (DPIA) is required."}
              {activeDiagnostic === "controls-policies" && "Choose from 6 desktop policy reviews (HR, Finance/Procurement, Investment, Operations, Communications, M&E) to test whether your manuals contain enforceable operational controls."}
              {activeDiagnostic === "people-performance" && "Review 30 key execution statements across 6 dimensions to evaluate whether your performance management system creates true individual accountability or merely routine task lists."}
            </p>
          </div>

          {/* Key Metrics / How It Works Pill Cards */}
          <div className="grid gap-4 sm:grid-cols-3 text-left">
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-xs font-bold text-[#10B981] uppercase tracking-wider block">Time Promise</span>
              <span className="text-lg font-black text-white block">3 to 5 Minutes</span>
              <p className="text-[11px] text-slate-400">Rapid Yes / No format designed for busy executives.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-xs font-bold text-[#10B981] uppercase tracking-wider block">Output</span>
              <span className="text-lg font-black text-white block">Instant 0-100 Score</span>
              <p className="text-[11px] text-slate-400">Risk rating, category heat map &amp; critical gap count.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-xs font-bold text-[#10B981] uppercase tracking-wider block">Privacy &amp; Contact</span>
              <span className="text-lg font-black text-white block">Confidential Result</span>
              <p className="text-[11px] text-slate-400">Submitted directly to ApexEdge senior advisory partners.</p>
            </div>
          </div>

          <div className="pt-4">
            <Button
              onClick={() => setCurrentStep("questions")}
              className="bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black rounded-full px-8 py-4 text-sm shadow-xl shadow-[#10B981]/25 flex items-center justify-center gap-2 mx-auto cursor-pointer transition-all hover:scale-105"
            >
              <span>Start Diagnostic Self-Assessment ({questions.length} Questions) →</span>
            </Button>
          </div>
        </motion.div>
      )}

      {/* STEP 2: INTERACTIVE QUESTIONS STEP */}
      {currentStep === "questions" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6 max-w-2xl mx-auto"
        >
          {/* Progress Bar & Header Counter */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-bold uppercase tracking-wider text-[#10B981]">
                Question {currentQIdx + 1} of {questions.length}
              </span>
              <span className="font-mono">
                {Math.round(((currentQIdx + 1) / questions.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800">
              <div
                className="bg-[#10B981] h-full transition-all duration-300"
                style={{ width: `${((currentQIdx + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Active Question Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6 shadow-xl">
            <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-3">
              <span className="font-bold text-[#10B981] uppercase tracking-wider">
                Category: {activeQuestion.category}
              </span>
              {activeQuestion.isCritical && (
                <span className="text-[10px] font-black uppercase text-amber-400 bg-amber-950 px-2.5 py-0.5 rounded border border-amber-800 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" /> Critical Control Gap
                </span>
              )}
              {activeQuestion.isTrigger && (
                <span className="text-[10px] font-black uppercase text-red-400 bg-red-950 px-2.5 py-0.5 rounded border border-red-800 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" /> Reg 49 High-Risk Signal
                </span>
              )}
            </div>

            <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
              {activeQuestion.question}
            </h4>

            {activeQuestion.isTrigger && (
              <p className="text-xs text-amber-300 bg-amber-950/40 p-3 rounded-xl border border-amber-800/60">
                <strong>Answering Rule:</strong> Select YES if this high-risk processing activity applies to your project or system.
              </p>
            )}

            {/* YES / NO Action Buttons */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <button
                onClick={() => handleAnswer(true)}
                className={`py-4 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                  answers[activeQuestion.id] === true
                    ? "bg-[#10B981] text-[#071C3F] ring-2 ring-[#10B981]"
                    : "bg-slate-800 text-white hover:bg-emerald-950 hover:text-emerald-300 border border-slate-700"
                }`}
              >
                <Check className="w-5 h-5 text-emerald-400" />
                <span>YES</span>
              </button>

              <button
                onClick={() => handleAnswer(false)}
                className={`py-4 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                  answers[activeQuestion.id] === false
                    ? "bg-red-600 text-white ring-2 ring-red-500"
                    : "bg-slate-800 text-white hover:bg-red-950 hover:text-red-300 border border-slate-700"
                }`}
              >
                <X className="w-5 h-5 text-red-400" />
                <span>NO</span>
              </button>
            </div>
          </div>

          {/* Navigation Controls (Back / Next) */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setCurrentQIdx((prev) => Math.max(0, prev - 1))}
              disabled={currentQIdx === 0}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> Previous Question
            </button>

            <span className="text-xs text-slate-500 font-mono">
              Question {currentQIdx + 1} / {questions.length}
            </span>
          </div>
        </motion.div>
      )}

      {/* STEP 3: CLIENT & COMPANY CONTACT ENTRY FORM */}
      {currentStep === "client-form" && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center mx-auto">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Complete Client &amp; Organisation Details
            </h3>
            <p className="text-xs text-slate-300">
              Enter your organisation information to view your overall 0–100 risk score, category heat map, and download your diagnostic summary.
            </p>
          </div>

          <form onSubmit={handleClientFormSubmit} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            
            {/* COMPANY NAME FIELD (REQUIRED BY USER) */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                Organisation / Company Name <span className="text-emerald-400">*</span>
              </label>
              <div className="relative">
                <Building className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Enterprises Ltd"
                  value={clientDetails.companyName}
                  onChange={(e) => setClientDetails({ ...clientDetails, companyName: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981]"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                  Full Name <span className="text-emerald-400">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Executive Director / Lead"
                    value={clientDetails.fullName}
                    onChange={(e) => setClientDetails({ ...clientDetails, fullName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                  Executive Role / Title <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Board Chair, CEO, CFO, Head of HR"
                  value={clientDetails.roleTitle}
                  onChange={(e) => setClientDetails({ ...clientDetails, roleTitle: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981]"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                  Work Email <span className="text-emerald-400">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={clientDetails.email}
                    onChange={(e) => setClientDetails({ ...clientDetails, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                  Direct Phone Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    placeholder="+254 700 000 000"
                    value={clientDetails.phone}
                    onChange={(e) => setClientDetails({ ...clientDetails, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981]"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                Industry / Sector
              </label>
              <select
                value={clientDetails.industrySector}
                onChange={(e) => setClientDetails({ ...clientDetails, industrySector: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#10B981]"
              >
                <option value="Banking & Financial Services">Banking &amp; Financial Services</option>
                <option value="Manufacturing & FMCG">Manufacturing &amp; FMCG</option>
                <option value="Healthcare & Pharmaceuticals">Healthcare &amp; Pharmaceuticals</option>
                <option value="Energy & Resources">Energy &amp; Utilities</option>
                <option value="Public Sector & State Corporations">Public Sector &amp; State Corporations</option>
                <option value="Technology & Telecommunications">Technology &amp; Telecommunications</option>
                <option value="NGO & Non-Profit International">NGO &amp; International Non-Profit</option>
              </select>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black rounded-xl py-4 text-xs shadow-lg cursor-pointer"
            >
              Generate Instant Executive Risk Score &amp; Report →
            </Button>
          </form>
        </motion.div>
      )}

      {/* STEP 4: RESULTS SCREEN WITH COMPANY DETAILS & APEX CONTACT BANNER */}
      {currentStep === "results" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-8"
        >
          {/* Header Snapshot Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 space-y-6 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-[11px] font-mono font-bold text-[#10B981] bg-[#10B981]/10 px-3 py-1 rounded border border-[#10B981]/30">
                  EXECUTIVE DOSSIER REF: {submissionRefCode}
                </span>
                <h3 className="text-2xl font-black text-white pt-2">
                  {clientDetails.companyName || "Client Enterprise"} — Diagnostic Results
                </h3>
                <p className="text-xs text-slate-400">
                  Evaluated for {clientDetails.fullName || "Executive Client"} ({clientDetails.roleTitle || "Board Member"})
                </p>
              </div>

              {/* ApexEdge Corporate Contact Badge */}
              <div className="text-right space-y-0.5 text-xs text-slate-300 bg-slate-900 p-3 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">{APEX_COMPANY_DETAILS.name}</span>
                <span className="text-emerald-400 font-mono text-[11px]">{APEX_COMPANY_DETAILS.email}</span>
                <span className="text-slate-400 text-[10px] block">{APEX_COMPANY_DETAILS.website}</span>
              </div>
            </div>

            {/* Score & Risk Band Grid */}
            <div className="grid gap-6 sm:grid-cols-3 text-center">
              
              {/* Score Box */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Overall Risk Score</span>
                <div className="text-4xl sm:text-5xl font-black text-[#10B981]">
                  {results.score} <span className="text-lg text-slate-400 font-normal">/ 100</span>
                </div>
                <span className="text-[11px] text-slate-400 block">Indicative desktop evaluation</span>
              </div>

              {/* Risk Band Rating */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1 flex flex-col justify-center items-center">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Risk Band Rating</span>
                <div className={`text-2xl font-black px-4 py-1.5 rounded-full border ${
                  results.riskRating.includes("CRITICAL") || results.riskRating.includes("HIGH")
                    ? "bg-red-950 text-red-400 border-red-800"
                    : results.riskRating.includes("ELEVATED")
                    ? "bg-amber-950 text-amber-400 border-amber-800"
                    : "bg-emerald-950 text-emerald-400 border-emerald-800"
                }`}>
                  {results.riskRating}
                </div>
              </div>

              {/* Critical Gaps / DPIA Signal */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1 flex flex-col justify-center items-center">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {activeDiagnostic === "data-protection" ? "DPIA Requirement Signal" : "Critical Control Gaps"}
                </span>
                <div className="text-xl font-extrabold text-white">
                  {activeDiagnostic === "data-protection" 
                    ? results.dpiaSignal 
                    : `${results.criticalGaps || 0} Critical Gaps Identified`}
                </div>
              </div>

            </div>

          </div>

          {/* Expert Review Callout & Contact Banner */}
          <div className="rounded-2xl bg-gradient-to-r from-emerald-950/60 via-slate-950 to-slate-900 border border-[#10B981]/40 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>WANT AN EXPERT ADVISORY REVIEW OF THESE GAPS?</span>
              </div>
              <h4 className="text-xl font-black text-white">
                Schedule a 20-Minute Strategy Session with {APEX_COMPANY_DETAILS.name}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our senior partners can help validate your findings, review supporting documentation, prioritize material risks, and build a practical governance action plan.
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-4 text-xs font-mono text-emerald-300">
                <span>📧 {APEX_COMPANY_DETAILS.email}</span>
                <span>🌐 {APEX_COMPANY_DETAILS.website}</span>
              </div>
            </div>

            <Button
              onClick={() => {
                alert(`Thank you, ${clientDetails.fullName || "Executive"}. An ApexEdge Senior Partner will contact you shortly at ${clientDetails.email}. Reference Code: ${submissionRefCode}`);
              }}
              className="bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black rounded-full px-6 py-4 text-xs shadow-xl shadow-[#10B981]/25 whitespace-nowrap cursor-pointer"
            >
              Request Senior Partner Review →
            </Button>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <Button
              onClick={resetAssessment}
              className="bg-slate-900 text-slate-300 hover:text-white border border-slate-800 rounded-full px-5 py-2.5 text-xs font-bold cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 mr-1.5" /> Retake Assessment
            </Button>

            <span className="text-xs text-slate-500">
              {APEX_COMPANY_DETAILS.name} · Confidential Desktop Review
            </span>
          </div>

        </motion.div>
      )}

    </div>
  );
}
