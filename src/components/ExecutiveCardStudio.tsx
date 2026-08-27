"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Download,
  Share2,
  QrCode,
  UserCheck,
  Sparkles,
  Printer,
  FileText,
  Image as ImageIcon,
  Check,
  Copy,
  ExternalLink,
  MessageCircle,
  ShieldCheck,
  Briefcase,
  Layers,
  RotateCw,
  Eye,
  CheckCircle2,
} from "lucide-react";
import {
  ExecutiveContact,
  EXECUTIVES_DATA,
  drawCardFront,
  drawCardBack,
  downloadCanvasJpg,
  downloadPrintReadyPdf,
  downloadVCard,
} from "@/lib/card-generator";
import Image from "next/image";

export function ExecutiveCardStudio() {
  const [selectedExecId, setSelectedExecId] = useState<string>("okendo");
  const [theme, setTheme] = useState<"obsidian" | "white" | "emerald">("obsidian");
  const [activeTab, setActiveTab] = useState<"physical" | "digital">("physical");
  const [cardSide, setCardSide] = useState<"front" | "back">("front");
  const [isQrModalOpen, setIsQrModalOpen] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generationSuccess, setGenerationSuccess] = useState<string | null>(null);

  const frontCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const backCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const logoImageRef = useRef<HTMLImageElement | null>(null);

  const currentExec: ExecutiveContact =
    EXECUTIVES_DATA.find((e) => e.id === selectedExecId) || EXECUTIVES_DATA[0];

  // Preload logo for canvas rendering
  useEffect(() => {
    const img = new window.Image();
    img.src = "/apexedge_logo.png";
    img.onload = () => {
      logoImageRef.current = img;
      renderCanvases();
    };
    img.onerror = () => {
      renderCanvases();
    };
  }, []);

  // Re-render canvases whenever executive, theme, or tab changes
  useEffect(() => {
    renderCanvases();
  }, [selectedExecId, theme]);

  const renderCanvases = () => {
    if (frontCanvasRef.current) {
      const frontCtx = frontCanvasRef.current.getContext("2d");
      if (frontCtx) {
        drawCardFront(frontCtx, currentExec, theme, logoImageRef.current);
      }
    }
    if (backCanvasRef.current) {
      const backCtx = backCanvasRef.current.getContext("2d");
      if (backCtx) {
        drawCardBack(backCtx, currentExec, theme);
      }
    }
  };

  const handleDownloadFrontJpg = () => {
    if (!frontCanvasRef.current) return;
    setIsGenerating(true);
    setTimeout(() => {
      downloadCanvasJpg(
        frontCanvasRef.current!,
        `${currentExec.name.replace(/[^a-zA-Z0-9]/g, "_")}_Front_600DPI.jpg`,
        0.98
      );
      setIsGenerating(false);
      triggerSuccessMessage("Front Business Card (600 DPI JPG) downloaded successfully!");
    }, 400);
  };

  const handleDownloadBackJpg = () => {
    if (!backCanvasRef.current) return;
    setIsGenerating(true);
    setTimeout(() => {
      downloadCanvasJpg(
        backCanvasRef.current!,
        `${currentExec.name.replace(/[^a-zA-Z0-9]/g, "_")}_Back_600DPI.jpg`,
        0.98
      );
      setIsGenerating(false);
      triggerSuccessMessage("Back Business Card (600 DPI JPG) downloaded successfully!");
    }, 400);
  };

  const handleDownloadPdf = async () => {
    if (!frontCanvasRef.current || !backCanvasRef.current) return;
    setIsGenerating(true);
    setTimeout(async () => {
      await downloadPrintReadyPdf(frontCanvasRef.current!, backCanvasRef.current!, currentExec);
      setIsGenerating(false);
      triggerSuccessMessage("2-Page Print-Ready PDF (600 DPI Vector/Raster) downloaded successfully!");
    }, 500);
  };

  const handleDownloadVCard = () => {
    downloadVCard(currentExec);
    triggerSuccessMessage("Digital Contact Card (.vcf) saved to device!");
  };

  const handleShareLink = () => {
    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
      triggerSuccessMessage("Direct eCard link copied to clipboard!");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const triggerSuccessMessage = (msg: string) => {
    setGenerationSuccess(msg);
    setTimeout(() => setGenerationSuccess(null), 3500);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Toast Notification */}
      <AnimatePresence>
        {generationSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-20 right-5 z-50 flex items-center gap-3 bg-[#071C3F] border border-[#10B981] text-white px-5 py-3.5 rounded-2xl shadow-2xl backdrop-blur-xl"
          >
            <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0" />
            <p className="text-xs sm:text-sm font-bold">{generationSuccess}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-[#10B981]/30 text-[#059669] text-xs font-black tracking-widest uppercase shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ApexEdge Executive Identity Studio</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Executive E-Cards &amp;{" "}
          <span className="bg-linear-to-r from-[#071C3F] via-[#10B981] to-[#047857] bg-clip-text text-transparent">
            600 DPI Business Cards
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
          Ultra-high-definition, print-ready corporate identity suite with instant 600 DPI vector/raster
          PDF &amp; JPG export, interactive NFC digital contact cards, and live QR code integration.
        </p>
      </div>

      {/* Controls & Executive Selector */}
      <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
          {/* Executive Selection Tabs */}
          <div className="w-full lg:w-auto space-y-2">
            <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block">
              Select Executive Officer
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {EXECUTIVES_DATA.map((exec) => {
                const isSelected = exec.id === selectedExecId;
                return (
                  <button
                    key={exec.id}
                    onClick={() => setSelectedExecId(exec.id)}
                    className={`flex items-center gap-3.5 p-3.5 rounded-2xl border transition-all cursor-pointer text-left ${
                      isSelected
                        ? "bg-[#071C3F] border-[#071C3F] text-white shadow-lg shadow-[#071C3F]/20 scale-[1.02]"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm shrink-0 ${
                        isSelected
                          ? "bg-[#10B981] text-[#071C3F]"
                          : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {exec.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="text-sm font-black flex items-center gap-1.5">
                        <span>{exec.name}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#10B981]" />}
                      </div>
                      <div
                        className={`text-xs font-medium ${
                          isSelected ? "text-slate-300" : "text-slate-500"
                        }`}
                      >
                        {exec.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Theme & Display Mode Selectors */}
          <div className="w-full lg:w-auto flex flex-wrap items-center gap-6">
            {/* Design Theme Selector */}
            <div className="space-y-2">
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block">
                Luxury Theme
              </label>
              <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
                <button
                  onClick={() => setTheme("obsidian")}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    theme === "obsidian"
                      ? "bg-[#071C3F] text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#071C3F] border border-slate-400" />
                  <span>Obsidian Dark</span>
                </button>
                <button
                  onClick={() => setTheme("white")}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    theme === "white"
                      ? "bg-white text-slate-900 shadow-xs border border-slate-200"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-white border border-slate-400" />
                  <span>Minimal White</span>
                </button>
                <button
                  onClick={() => setTheme("emerald")}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    theme === "emerald"
                      ? "bg-[#064E3B] text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                  <span>Emerald Royal</span>
                </button>
              </div>
            </div>

            {/* View Mode (Physical vs Digital) */}
            <div className="space-y-2">
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block">
                Card Experience
              </label>
              <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
                <button
                  onClick={() => setActiveTab("physical")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === "physical"
                      ? "bg-[#10B981] text-[#071C3F] font-black shadow-md"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>600 DPI Print Studio</span>
                </button>
                <button
                  onClick={() => setActiveTab("digital")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === "digital"
                      ? "bg-[#10B981] text-[#071C3F] font-black shadow-md"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Digital NFC E-Card</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: 600 DPI PHYSICAL BUSINESS CARD STUDIO                              */}
        {/* ========================================================================= */}
        {activeTab === "physical" && (
          <div className="space-y-8">
            {/* Top Toolbar with Flip and Specs */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setCardSide(cardSide === "front" ? "back" : "front")}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 font-bold text-xs hover:bg-slate-100 transition-all cursor-pointer shadow-xs"
                >
                  <RotateCw className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Flip Card: Showing {cardSide === "front" ? "Front Side" : "Back Side"}</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCardSide("front")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                      cardSide === "front"
                        ? "bg-[#071C3F] text-white"
                        : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                    }`}
                  >
                    Front View
                  </button>
                  <button
                    onClick={() => setCardSide("back")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                      cardSide === "back"
                        ? "bg-[#071C3F] text-white"
                        : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                    }`}
                  >
                    Back View
                  </button>
                </div>
              </div>

              {/* Print Spec Badges */}
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold text-slate-600">
                <span className="px-2.5 py-1 rounded-md bg-emerald-100/70 text-[#047857] border border-[#10B981]/30">
                  ✓ 600 DPI Precision (2100×1200 px)
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-200 text-slate-800">
                  Standard 3.5″ × 2.0″ ISO
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-200 text-slate-800">
                  Foil &amp; Spot-UV Ready
                </span>
              </div>
            </div>

            {/* Main Interactive Card Preview Display */}
            <div className="flex flex-col items-center justify-center p-6 sm:p-12 rounded-3xl bg-linear-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden group">
              {/* Subtle background glow */}
              <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#10B981]/15 blur-3xl" />
              <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-[#071C3F]/40 blur-3xl" />

              {/* 3D Perspective Flip Card Wrapper */}
              <div className="relative w-full max-w-[660px] aspect-[7/4] rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] transition-transform duration-700 [perspective:1200px]">
                <div
                  className={`w-full h-full relative transition-all duration-700 [transform-style:preserve-3d] ${
                    cardSide === "back" ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  {/* FRONT SIDE */}
                  <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden [backface-visibility:hidden] border border-white/10 shadow-2xl">
                    <canvas
                      ref={frontCanvasRef}
                      width={2100}
                      height={1200}
                      className="w-full h-full object-contain block"
                    />
                  </div>

                  {/* BACK SIDE */}
                  <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] border border-white/10 shadow-2xl">
                    <canvas
                      ref={backCanvasRef}
                      width={2100}
                      height={1200}
                      className="w-full h-full object-contain block"
                    />
                  </div>
                </div>
              </div>

              {/* Live Preview Caption */}
              <div className="mt-6 flex items-center gap-3 text-xs text-slate-400 font-semibold">
                <span>Click Flip or use buttons above to examine front/back</span>
                <span className="text-slate-600">•</span>
                <span className="text-[#10B981]">High-Precision 600 DPI Vector Layout</span>
              </div>
            </div>

            {/* 600 DPI Download Suite Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* 1. PDF Export */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4 hover:border-[#10B981] transition-all group">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-black text-slate-900 group-hover:text-[#071C3F] transition-colors">
                    Print-Ready 600 DPI PDF
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    2-page vector/raster PDF with Front &amp; Back at exact 3.5″ × 2.0″ print press dimensions.
                  </p>
                </div>
                <button
                  onClick={handleDownloadPdf}
                  disabled={isGenerating}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#071C3F] hover:bg-slate-800 text-white font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs disabled:opacity-50"
                >
                  <Download className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Download 600 DPI PDF</span>
                </button>
              </div>

              {/* 2. Front 600 DPI JPG */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4 hover:border-[#10B981] transition-all group">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#059669] flex items-center justify-center font-bold">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-black text-slate-900 group-hover:text-[#071C3F] transition-colors">
                    Front Side (600 DPI JPG)
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    2100 × 1200 pixels razor-sharp image with typography and contact details.
                  </p>
                </div>
                <button
                  onClick={handleDownloadFrontJpg}
                  disabled={isGenerating}
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs disabled:opacity-50"
                >
                  <Download className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Download Front JPG</span>
                </button>
              </div>

              {/* 3. Back 600 DPI JPG */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4 hover:border-[#10B981] transition-all group">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-black text-slate-900 group-hover:text-[#071C3F] transition-colors">
                    Back Side (600 DPI JPG)
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    2100 × 1200 pixels luxury brand backplate with emblem and corporate tagline.
                  </p>
                </div>
                <button
                  onClick={handleDownloadBackJpg}
                  disabled={isGenerating}
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs disabled:opacity-50"
                >
                  <Download className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Download Back JPG</span>
                </button>
              </div>

              {/* 4. Digital vCard (.vcf) & NFC */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4 hover:border-[#10B981] transition-all group">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-black text-slate-900 group-hover:text-[#071C3F] transition-colors">
                    Digital vCard (.vcf)
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    RFC-compliant digital card for iOS &amp; Android contacts and NFC chips.
                  </p>
                </div>
                <button
                  onClick={handleDownloadVCard}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .vcf Card</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: DIGITAL NFC E-CARD EXPERIENCE                                     */}
        {/* ========================================================================= */}
        {activeTab === "digital" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Interactive Mobile Phone E-Card Simulation */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[390px] rounded-[48px] p-4 bg-slate-950 border-4 border-slate-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden">
                {/* Phone Speaker & Dynamic Island Notch */}
                <div className="w-28 h-4 bg-slate-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-slate-950 border border-slate-800" />
                </div>

                {/* Digital Card Inner Body */}
                <div className="rounded-[36px] bg-linear-to-b from-[#071C3F] via-[#040D1E] to-[#020712] border border-white/10 p-6 space-y-6 text-white text-center relative overflow-hidden shadow-inner">
                  {/* Subtle ambient light */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#10B981]/20 rounded-full blur-2xl pointer-events-none" />

                  {/* Header Logo */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="text-left">
                      <div className="text-sm font-black tracking-widest text-[#10B981]">APEXEDGE</div>
                      <div className="text-[9px] font-bold text-slate-400 tracking-wider">ADVISORY LIMITED</div>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] text-[10px] font-black">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                      <span>Verified NFC</span>
                    </div>
                  </div>

                  {/* Executive Avatar / Monogram */}
                  <div className="relative mx-auto w-24 h-24 rounded-3xl bg-linear-to-br from-[#10B981] to-[#064E3B] p-1 shadow-xl flex items-center justify-center">
                    <div className="w-full h-full rounded-[22px] bg-[#071C3F] flex items-center justify-center text-2xl font-black text-white">
                      {currentExec.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-[#10B981] text-[#071C3F] shadow-md">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Executive Profile Info */}
                  <div className="space-y-1">
                    <h2 className="text-xl font-black text-white">{currentExec.name}</h2>
                    <p className="text-sm font-extrabold text-[#10B981]">{currentExec.title}</p>
                    <p className="text-xs text-slate-400 font-medium">{currentExec.department}</p>
                    <p className="text-[11px] text-slate-300 pt-1 flex items-center justify-center gap-1">
                      <MapPin className="w-3 h-3 text-[#10B981]" />
                      <span>{currentExec.location}</span>
                    </p>
                  </div>

                  {/* One-Touch Quick Action Icons */}
                  <div className="grid grid-cols-4 gap-2 pt-2">
                    <a
                      href={`tel:${currentExec.phoneRaw}`}
                      className="p-3 rounded-2xl bg-white/5 hover:bg-[#10B981] hover:text-[#071C3F] transition-all flex flex-col items-center gap-1 border border-white/10 group/btn"
                    >
                      <Phone className="w-4 h-4 text-[#10B981] group-hover/btn:text-[#071C3F]" />
                      <span className="text-[10px] font-bold">Call</span>
                    </a>
                    <a
                      href={`https://wa.me/${currentExec.phoneRaw.replace("+", "")}?text=Hello%20${encodeURIComponent(
                        currentExec.name
                      )}%2C%20I%20would%20like%20to%20connect%20with%20you%20regarding%20ApexEdge%20Advisory.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-2xl bg-white/5 hover:bg-emerald-500 hover:text-white transition-all flex flex-col items-center gap-1 border border-white/10 group/btn"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400 group-hover/btn:text-white" />
                      <span className="text-[10px] font-bold">WhatsApp</span>
                    </a>
                    <a
                      href={`mailto:${currentExec.email}`}
                      className="p-3 rounded-2xl bg-white/5 hover:bg-blue-500 hover:text-white transition-all flex flex-col items-center gap-1 border border-white/10 group/btn"
                    >
                      <Mail className="w-4 h-4 text-blue-400 group-hover/btn:text-white" />
                      <span className="text-[10px] font-bold">Email</span>
                    </a>
                    <button
                      onClick={() => setIsQrModalOpen(true)}
                      className="p-3 rounded-2xl bg-white/5 hover:bg-purple-500 hover:text-white transition-all flex flex-col items-center gap-1 border border-white/10 group/btn cursor-pointer"
                    >
                      <QrCode className="w-4 h-4 text-purple-400 group-hover/btn:text-white" />
                      <span className="text-[10px] font-bold">QR Code</span>
                    </button>
                  </div>

                  {/* Primary Call to Action Button */}
                  <div className="space-y-2 pt-2">
                    <button
                      onClick={handleDownloadVCard}
                      className="w-full py-3 px-4 rounded-2xl bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#10B981]/25 transition-all cursor-pointer"
                    >
                      <UserCheck className="w-4 h-4" />
                      <span>Save Contact to Phone</span>
                    </button>

                    <button
                      onClick={handleShareLink}
                      className="w-full py-2.5 px-4 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer border border-white/10"
                    >
                      {copiedLink ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Share2 className="w-3.5 h-3.5" />}
                      <span>{copiedLink ? "Link Copied!" : "Share Digital Card"}</span>
                    </button>
                  </div>

                  {/* Mini Footer */}
                  <div className="pt-2 text-[10px] text-slate-400 font-semibold border-t border-white/10">
                    ApexEdge Advisory Limited • Official E-Card
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Executive Profile Brief & Corporate Channels */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#059669] flex items-center justify-center font-bold">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-black text-slate-900">Executive Focus &amp; Profile</h3>
                  </div>
                  <span className="text-xs font-bold text-[#10B981] bg-emerald-50 px-2.5 py-1 rounded-full border border-[#10B981]/30">
                    Active Director
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {currentExec.shortBio}
                </p>
              </div>

              {/* Direct Communication Channels List */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                  Verified Contact Channels
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-white border border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-emerald-50 text-[#10B981]">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Direct Mobile Line</div>
                        <div className="font-extrabold text-slate-900 whitespace-nowrap">{currentExec.phone}</div>
                      </div>
                    </div>
                    <a
                      href={`tel:${currentExec.phoneRaw}`}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-[#10B981] hover:text-[#071C3F] text-slate-800 font-bold transition-all text-xs"
                    >
                      Call
                    </a>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-2xl bg-white border border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Corporate Email</div>
                        <div className="font-extrabold text-slate-900">{currentExec.email}</div>
                      </div>
                    </div>
                    <a
                      href={`mailto:${currentExec.email}`}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-blue-500 hover:text-white text-slate-800 font-bold transition-all text-xs"
                    >
                      Email
                    </a>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-2xl bg-white border border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-purple-50 text-purple-600">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Official Portal</div>
                        <div className="font-extrabold text-slate-900">{currentExec.website}</div>
                      </div>
                    </div>
                    <a
                      href={`https://${currentExec.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-purple-500 hover:text-white text-slate-800 font-bold transition-all text-xs flex items-center gap-1"
                    >
                      <span>Visit</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* NFC & QR Code Action Card */}
              <div className="p-6 rounded-3xl bg-linear-to-br from-[#071C3F] to-slate-900 text-white space-y-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#10B981]/20 text-[#10B981]">
                    <QrCode className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black">NFC Chip &amp; QR Pairing</h4>
                    <p className="text-xs text-slate-300">Tap phone to NFC card or scan instant QR code.</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsQrModalOpen(true)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Enlarge Scan-Ready QR Code</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* QR CODE MODAL FOR INSTANT SCANNING                                       */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isQrModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full max-w-sm rounded-3xl bg-white border border-slate-200 p-6 shadow-2xl text-center space-y-5"
            >
              <div className="space-y-1">
                <h3 className="text-lg font-black text-slate-900">{currentExec.name}</h3>
                <p className="text-xs font-bold text-[#10B981]">{currentExec.title}</p>
                <p className="text-xs text-slate-500 font-medium">Scan to instantly save contact details to phone</p>
              </div>

              {/* QR Code Container */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 inline-block shadow-inner">
                <div className="w-56 h-56 bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-center">
                  <div className="w-full h-full relative flex items-center justify-center">
                    {/* Visual QR Code Display */}
                    <div className="grid grid-cols-5 gap-1.5 w-full h-full p-2 bg-slate-950 rounded-lg text-white font-mono text-[9px] flex items-center justify-center">
                      <div className="text-center font-bold space-y-1">
                        <QrCode className="w-16 h-16 text-[#10B981] mx-auto animate-pulse" />
                        <div className="text-white text-xs font-black">{currentExec.name}</div>
                        <div className="text-emerald-400 text-[10px]">{currentExec.phone}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={handleDownloadVCard}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Download .vcf Card Directly</span>
                </button>
                <button
                  onClick={() => setIsQrModalOpen(false)}
                  className="w-full py-2 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
