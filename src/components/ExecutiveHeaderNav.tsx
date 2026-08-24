"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, ChevronDown, ArrowRight, ShieldCheck, Users, Sliders, Award, Lock, FileText, Menu, X } from "lucide-react";
import { ApexEdgeLogo } from "@/components/ApexEdgeLogo";
import { Button } from "@/components/ui/button";

interface ExecutiveHeaderNavProps {
  onOpenBooking: () => void;
}

const serviceDropdownItems = [
  {
    title: "Governance & Risk",
    desc: "Strategic Planning, Board Risk Heat Maps & eBoard Frameworks.",
    href: "/services#governance-risk",
    icon: ShieldCheck,
    image: "/board_directors_panel.jpg",
    alt: "Board Directors in Executive Strategy Session",
    deliverable: "Strategic Planning & Board Risk Heat Map",
  },
  {
    title: "People & Performance",
    desc: "Build a Performance System That Creates Accountability.",
    href: "/services#people-performance",
    icon: Users,
    image: "/african_executive_portrait.png",
    alt: "People & Organizational Structure Alignment Session",
    deliverable: "Organogram Creator & Job Grading Matrix",
  },
  {
    title: "Controls & Policies",
    desc: "Build Policies That Work in Practice.",
    href: "/services#controls-policies",
    icon: Sliders,
    image: "/advisory_report_consultation.jpg",
    alt: "Financial SOPs & Approval Gate Controls Review",
    deliverable: "Financial SOPs & Approval Frameworks",
  },
  {
    title: "Leadership & Capability",
    desc: "Build Leaders and Teams That Execute Better.",
    href: "/services#leadership-capability",
    icon: Award,
    image: "/board_whiteboard_presentation.jpg",
    alt: "Leadership Capability Framework Presentation",
    deliverable: "90-Day Executive Execution Roadmap",
  },
  {
    title: "Data Protection & Privacy",
    desc: "Protect Data. Strengthen Trust. Stay Compliant.",
    href: "/services#data-protection",
    icon: Lock,
    image: "/african_female_executive.png",
    alt: "Data Protection Impact Assessment & Privacy Governance",
    deliverable: "ODPC Statutory Registration & DPIA Compliance Packs",
  },
  {
    title: "Corporate Secretarial",
    desc: "Companies Act 2015 Compliance, Board Minutes & Filings.",
    href: "/services#corporate-secretarial",
    icon: FileText,
    image: "/african_board_signing.jpg",
    alt: "Corporate Secretarial & Statutory Filings Consultation",
    deliverable: "Annual Statutory Returns & BRS e-Filings",
  },
];

export function ExecutiveHeaderNav({ onOpenBooking }: ExecutiveHeaderNavProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const handleNavClick = (href?: string) => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);

    // If it is a top-level page without a hash anchor, immediately scroll to top
    if (!href || !href.includes("#")) {
      if (typeof window !== "undefined") {
        if ((window as any).__lenis) {
          (window as any).__lenis.scrollTo(0, { immediate: true });
        }
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xs ${
        isScrolled ? "py-2.5 shadow-md border-slate-200/90" : "py-3 sm:py-3.5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Official ApexEdge Logo in Crisp Corporate Navy */}
        <Link
          href="/"
          onClick={() => handleNavClick("/")}
          className="flex items-center gap-2 group shrink-0"
        >
          <ApexEdgeLogo variant="dark" />
        </Link>

        {/* Desktop Navigation Items */}
        <nav className="hidden items-center gap-6 text-[13px] font-bold text-slate-700 lg:flex">
          <Link
            href="/"
            onClick={() => handleNavClick("/")}
            className={`transition-colors py-1 ${
              pathname === "/" ? "text-[#10B981] font-black" : "text-slate-700 hover:text-[#071C3F]"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => handleNavClick("/about")}
            className={`transition-colors py-1 ${
              pathname === "/about" ? "text-[#10B981] font-black" : "text-slate-700 hover:text-[#071C3F]"
            }`}
          >
            About Us
          </Link>

          {/* Practice Areas Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setIsServicesOpen((prev) => !prev)}
              className={`inline-flex items-center gap-1 py-1 transition-colors font-bold cursor-pointer ${
                pathname.startsWith("/services") ? "text-[#10B981] font-black" : "text-slate-700 hover:text-[#071C3F]"
              }`}
            >
              <span>Practice Areas</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isServicesOpen ? "rotate-180 text-[#10B981]" : "text-slate-400"
                }`}
              />
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full -left-20 mt-3 w-[760px] rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 z-50 backdrop-blur-2xl grid grid-cols-12 gap-6"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Left Column (7 Cols) — 6 Practice Areas with Photo Thumbnails */}
                  <div className="col-span-7 space-y-2">
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#10B981] mb-3 px-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                      <span>01 TO 06 — EXECUTIVE PRACTICE AREAS</span>
                    </div>
                    <div className="space-y-1.5">
                      {serviceDropdownItems.map((item, idx) => {
                        const IconComponent = item.icon;
                        const isHovered = hoverIndex === idx;
                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            onMouseEnter={() => setHoverIndex(idx)}
                            onClick={() => handleNavClick(item.href)}
                            className={`flex items-center gap-3.5 p-2 rounded-2xl border transition-all group/item ${
                              isHovered
                                ? "bg-emerald-50/70 border-[#10B981]/50 text-[#071C3F] shadow-xs"
                                : "border-transparent text-slate-700 hover:bg-slate-50"
                            }`}
                          >
                            <span className="text-[10px] font-black text-[#10B981] px-1.5 py-0.5 rounded-md bg-[#10B981]/15 shrink-0">
                              0{idx + 1}
                            </span>
                            
                            {/* Practice Area Photography Thumbnail */}
                            <div className="relative w-11 h-11 rounded-xl overflow-hidden shrink-0 border border-slate-200 shadow-xs bg-slate-100">
                              <img
                                src={item.image}
                                alt={item.alt}
                                className="w-full h-full object-cover object-center group-hover/item:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-slate-950/15 group-hover/item:bg-transparent transition-colors" />
                              <div className="absolute bottom-0.5 right-0.5 p-0.5 rounded bg-white/90 shadow-xs text-[#10B981]">
                                <IconComponent className="w-2.5 h-2.5" />
                              </div>
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-black text-slate-900 group-hover/item:text-[#071C3F] transition-colors flex items-center justify-between">
                                <span className="truncate">{item.title}</span>
                                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-[#10B981] shrink-0" />
                              </div>
                              <p className="text-[11px] text-slate-500 font-normal truncate mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) — Live Interactive Preview Card with Featured Photo */}
                  <div className="col-span-5 rounded-2xl bg-slate-50 border border-slate-200 p-4 flex flex-col justify-between space-y-3">
                    
                    {/* Featured Photo Frame with Crossfade Animation */}
                    <div className="relative h-32 w-full rounded-xl overflow-hidden border border-slate-200 shadow-xs bg-slate-900">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={serviceDropdownItems[hoverIndex]?.image}
                          initial={{ opacity: 0, scale: 1.06 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="absolute inset-0 w-full h-full"
                        >
                          <img
                            src={serviceDropdownItems[hoverIndex]?.image}
                            alt={serviceDropdownItems[hoverIndex]?.alt}
                            className="w-full h-full object-cover object-center brightness-100 contrast-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                            <span className="px-2 py-0.5 rounded-full bg-[#10B981] text-[#071C3F] text-[9px] font-black uppercase tracking-wider shadow-xs">
                              0{hoverIndex + 1} · {serviceDropdownItems[hoverIndex]?.title}
                            </span>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-1.5 text-[#10B981] text-[10px] font-black uppercase tracking-wider">
                        <ShieldCheck className="w-3 h-3" />
                        <span>PRACTICE OVERVIEW</span>
                      </div>
                      <h4 className="text-xs font-black text-slate-900 leading-snug">
                        {serviceDropdownItems[hoverIndex]?.title}
                      </h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-normal line-clamp-2">
                        {serviceDropdownItems[hoverIndex]?.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-200 space-y-1.5">
                      <div className="text-[9px] font-extrabold text-[#071C3F] uppercase tracking-wider">
                        Core Client Deliverable:
                      </div>
                      <div className="text-[11px] font-semibold text-slate-800 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 shadow-xs">
                        {serviceDropdownItems[hoverIndex]?.deliverable}
                      </div>

                      <Link
                        href={serviceDropdownItems[hoverIndex]?.href || "/services"}
                        onClick={() => handleNavClick(serviceDropdownItems[hoverIndex]?.href || "/services")}
                        className="inline-flex items-center gap-1.5 text-xs font-black text-[#10B981] hover:underline pt-0.5"
                      >
                        <span>Explore Practice Area</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/industries"
            onClick={() => handleNavClick("/industries")}
            className={`transition-colors py-1 ${
              pathname === "/industries" ? "text-[#10B981] font-black" : "text-slate-700 hover:text-[#071C3F]"
            }`}
          >
            Industries
          </Link>

          <Link
            href="/insights"
            onClick={() => handleNavClick("/insights")}
            className={`transition-colors py-1 ${
              pathname === "/insights" ? "text-[#10B981] font-black" : "text-slate-700 hover:text-[#071C3F]"
            }`}
          >
            Insights
          </Link>

          <Link
            href="/contact"
            onClick={() => handleNavClick("/contact")}
            className={`transition-colors py-1 ${
              pathname === "/contact" ? "text-[#10B981] font-black" : "text-slate-700 hover:text-[#071C3F]"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Action Controls & Primary CTA */}
        <div className="flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-600">
            <Phone className="h-3.5 w-3.5 text-[#10B981] shrink-0" />
            <a href="tel:+254799565125" className="hover:text-[#071C3F] transition-colors">
              +254 799 565125
            </a>
            <span className="text-slate-300">/</span>
            <a href="tel:+254728626323" className="hover:text-[#071C3F] transition-colors">
              +254 728 626323
            </a>
          </div>

          <a
            href="https://wa.me/254799565125?text=Hello%20Apex%20Edge%20Advisory%2C%20I%20would%20like%20to%20inquire%20about%20your%20strategic%20advisory%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black shadow-md shadow-[#10B981]/20 rounded-full px-5 py-2.5 text-xs flex items-center gap-2 transition-all hover:scale-105"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.301-.15-1.781-.879-2.057-.98-.276-.1-.477-.15-.678.15-.2.3-.777.98-.953 1.18-.176.2-.352.226-.653.076-.301-.15-1.272-.469-2.424-1.496-.895-.799-1.5-1.786-1.676-2.087-.176-.3-.019-.463.132-.612.136-.134.301-.35.452-.525.15-.176.2-.3.301-.501.1-.2.05-.376-.025-.526-.075-.15-.678-1.636-.929-2.242-.244-.59-.493-.51-.678-.52l-.578-.01c-.2 0-.527.075-.803.376s-1.055 1.03-1.055 2.512c0 1.482 1.08 2.912 1.231 3.113.15.2 2.126 3.246 5.15 4.553.719.31 1.28.496 1.718.635.723.23 1.381.197 1.901.12.579-.087 1.781-.728 2.032-1.431.251-.703.251-1.306.176-1.431-.076-.125-.277-.2-.578-.35zM12.04 2C6.516 2 2.023 6.49 2.023 12.015c0 1.954.564 3.784 1.54 5.334L2 22l4.823-1.53c1.492.894 3.238 1.411 5.217 1.411 5.523 0 10.017-4.49 10.017-10.015C22.057 6.49 17.563 2 12.04 2zm0 18.313c-1.724 0-3.32-.494-4.675-1.353l-.335-.213-3.468 1.1.928-3.38-.232-.369a8.272 8.272 0 0 1-1.28-4.443c0-4.597 3.743-8.34 8.344-8.34 4.6 0 8.343 3.743 8.343 8.34 0 4.597-3.743 8.34-8.343 8.34z" />
            </svg>
            <span>Chat on WhatsApp →</span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-200 lg:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-[#10B981]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-slate-200 bg-white px-5 py-6 space-y-4 shadow-xl"
          >
            <div className="flex flex-col space-y-3 font-bold text-sm text-slate-700">
              <Link href="/" onClick={() => handleNavClick("/")} className="hover:text-[#10B981]">
                Home
              </Link>
              <Link href="/about" onClick={() => handleNavClick("/about")} className="hover:text-[#10B981]">
                About Us
              </Link>
              <Link href="/services" onClick={() => handleNavClick("/services")} className="hover:text-[#10B981]">
                Services
              </Link>
              <div className="pl-4 space-y-2 border-l border-[#10B981]/30 text-xs text-slate-600 font-medium">
                {serviceDropdownItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="block hover:text-[#10B981]"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <Link href="/industries" onClick={() => handleNavClick("/industries")} className="hover:text-[#10B981]">
                Industries
              </Link>
              <Link href="/insights" onClick={() => handleNavClick("/insights")} className="hover:text-[#10B981]">
                Insights
              </Link>
              <Link href="/contact" onClick={() => handleNavClick("/contact")} className="hover:text-[#10B981]">
                Contact
              </Link>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <a
                href="https://wa.me/254799565125?text=Hello%20Apex%20Edge%20Advisory%2C%20I%20would%20like%20to%20inquire%20about%20your%20strategic%20advisory%20services."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black rounded-full py-3 text-xs flex items-center justify-center gap-2 shadow-md"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.301-.15-1.781-.879-2.057-.98-.276-.1-.477-.15-.678.15-.2.3-.777.98-.953 1.18-.176.2-.352.226-.653.076-.301-.15-1.272-.469-2.424-1.496-.895-.799-1.5-1.786-1.676-2.087-.176-.3-.019-.463.132-.612.136-.134.301-.35.452-.525.15-.176.2-.3.301-.501.1-.2.05-.376-.025-.526-.075-.15-.678-1.636-.929-2.242-.244-.59-.493-.51-.678-.52l-.578-.01c-.2 0-.527.075-.803.376s-1.055 1.03-1.055 2.512c0 1.482 1.08 2.912 1.231 3.113.15.2 2.126 3.246 5.15 4.553.719.31 1.28.496 1.718.635.723.23 1.381.197 1.901.12.579-.087 1.781-.728 2.032-1.431.251-.703.251-1.306.176-1.431-.076-.125-.277-.2-.578-.35zM12.04 2C6.516 2 2.023 6.49 2.023 12.015c0 1.954.564 3.784 1.54 5.334L2 22l4.823-1.53c1.492.894 3.238 1.411 5.217 1.411 5.523 0 10.017-4.49 10.017-10.015C22.057 6.49 17.563 2 12.04 2zm0 18.313c-1.724 0-3.32-.494-4.675-1.353l-.335-.213-3.468 1.1.928-3.38-.232-.369a8.272 8.272 0 0 1-1.28-4.443c0-4.597 3.743-8.34 8.344-8.34 4.6 0 8.343 3.743 8.343 8.34 0 4.597-3.743 8.34-8.343 8.34z" />
                </svg>
                <span>Chat on WhatsApp →</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
