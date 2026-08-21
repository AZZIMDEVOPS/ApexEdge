"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, ChevronDown, ArrowRight, ShieldCheck, Users, Sliders, Award, Lock, Menu, X } from "lucide-react";
import { ApexEdgeLogo } from "@/components/ApexEdgeLogo";
import { Button } from "@/components/ui/button";

interface ExecutiveHeaderNavProps {
  onOpenBooking: () => void;
}

const serviceDropdownItems = [
  {
    title: "Governance & Risk",
    desc: "Give Your Board Clearer Visibility of Risk and Performance.",
    href: "/services#governance-risk",
    icon: ShieldCheck,
  },
  {
    title: "People & Performance",
    desc: "Build a Performance System That Creates Accountability.",
    href: "/services#people-performance",
    icon: Users,
  },
  {
    title: "Controls & Policies",
    desc: "Build Policies That Work in Practice.",
    href: "/services#controls-policies",
    icon: Sliders,
  },
  {
    title: "Leadership & Capability",
    desc: "Build Leaders and Teams That Execute Better.",
    href: "/services#leadership-capability",
    icon: Award,
  },
  {
    title: "Data Protection & Privacy",
    desc: "Protect Data. Strengthen Trust. Stay Compliant.",
    href: "/services#data-protection",
    icon: Lock,
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

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xs ${
        isScrolled ? "py-2.5 shadow-md border-slate-200/90" : "py-3 sm:py-3.5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Official ApexEdge Logo in Crisp Corporate Navy */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <ApexEdgeLogo variant="dark" />
        </Link>

        {/* Desktop Navigation Items */}
        <nav className="hidden items-center gap-6 text-[13px] font-bold text-slate-700 lg:flex">
          <Link
            href="/"
            className={`transition-colors py-1 ${
              pathname === "/" ? "text-[#10B981] font-black" : "text-slate-700 hover:text-[#071C3F]"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
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
                  className="absolute top-full -left-20 mt-3 w-[680px] rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 z-50 backdrop-blur-2xl grid grid-cols-12 gap-6"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Left Column (7 Cols) — 5 Practice Areas */}
                  <div className="col-span-7 space-y-2">
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#10B981] mb-3 px-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                      <span>01 TO 05 — EXECUTIVE PRACTICE AREAS</span>
                    </div>
                    <div className="space-y-1">
                      {serviceDropdownItems.map((item, idx) => {
                        const IconComponent = item.icon;
                        const isHovered = hoverIndex === idx;
                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            onMouseEnter={() => setHoverIndex(idx)}
                            onClick={() => setIsServicesOpen(false)}
                            className={`flex items-center gap-3 p-2.5 rounded-xl border transition-all group/item ${
                              isHovered
                                ? "bg-emerald-50/60 border-[#10B981]/40 text-[#071C3F]"
                                : "border-transparent text-slate-700 hover:bg-slate-50"
                            }`}
                          >
                            <span className="text-[10px] font-black text-[#10B981] px-2 py-0.5 rounded-md bg-[#10B981]/15">
                              0{idx + 1}
                            </span>
                            <div className="p-1.5 rounded-lg bg-emerald-500/10 text-[#10B981] shrink-0">
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <div className="text-xs font-bold text-slate-800 group-hover/item:text-[#071C3F] transition-colors flex items-center justify-between">
                                <span>{item.title}</span>
                                <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-[#10B981]" />
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) — Live Interactive Preview Card */}
                  <div className="col-span-5 rounded-2xl bg-slate-50 border border-slate-200 p-5 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-[#10B981] text-[10px] font-black uppercase tracking-wider">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>PRACTICE OVERVIEW</span>
                      </div>
                      <h4 className="text-sm font-black text-slate-900">
                        {serviceDropdownItems[hoverIndex]?.title || "Governance & Risk"}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {serviceDropdownItems[hoverIndex]?.desc || "Give Your Board Clearer Visibility of Risk and Performance."}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-200 space-y-2">
                      <div className="text-[10px] font-extrabold text-[#071C3F] uppercase tracking-wider">
                        Core Client Deliverable:
                      </div>
                      <div className="text-xs font-semibold text-slate-800 bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-xs">
                        {hoverIndex === 0 && "Board-Ready Risk Register & Heat Map"}
                        {hoverIndex === 1 && "Job Grading Matrix & Performance Scorecard"}
                        {hoverIndex === 2 && "Financial SOPs & Approval Frameworks"}
                        {hoverIndex === 3 && "90-Day Executive Execution Roadmap"}
                        {hoverIndex === 4 && "Data Inventories & DPIA Compliance Packs"}
                      </div>

                      <Link
                        href={serviceDropdownItems[hoverIndex]?.href || "/services"}
                        onClick={() => setIsServicesOpen(false)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#10B981] hover:underline pt-1"
                      >
                        <span>Explore Practice Area</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/industries"
            className={`transition-colors py-1 ${
              pathname === "/industries" ? "text-[#10B981] font-black" : "text-slate-700 hover:text-[#071C3F]"
            }`}
          >
            Industries
          </Link>

          <Link
            href="/insights"
            className={`transition-colors py-1 ${
              pathname === "/insights" ? "text-[#10B981] font-black" : "text-slate-700 hover:text-[#071C3F]"
            }`}
          >
            Insights
          </Link>

          <Link
            href="/contact"
            className={`transition-colors py-1 ${
              pathname === "/contact" ? "text-[#10B981] font-black" : "text-slate-700 hover:text-[#071C3F]"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Action Controls & Primary CTA */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+254117471344"
            className="hidden items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#071C3F] xl:flex transition-colors"
          >
            <Phone className="h-3.5 w-3.5 text-[#10B981]" />
            <span>+254 117 471344</span>
          </a>

          <Button
            onClick={onOpenBooking}
            className="bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black shadow-md shadow-[#10B981]/20 rounded-full px-5 py-2.5 text-xs flex items-center gap-2 transition-all hover:scale-105"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Clarity Session →</span>
          </Button>

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
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#10B981]">
                Home
              </Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#10B981]">
                About Us
              </Link>
              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#10B981]">
                Services
              </Link>
              <div className="pl-4 space-y-2 border-l border-[#10B981]/30 text-xs text-slate-600 font-medium">
                {serviceDropdownItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block hover:text-[#10B981]"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <Link href="/industries" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#10B981]">
                Industries
              </Link>
              <Link href="/insights" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#10B981]">
                Insights
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#10B981]">
                Contact
              </Link>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black rounded-full py-3 text-xs"
              >
                Book a Clarity Session →
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
