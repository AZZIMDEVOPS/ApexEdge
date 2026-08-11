"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, ChevronDown, ArrowRight, ShieldCheck, Users, Sliders, Award, Menu, X } from "lucide-react";
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
];

export function ExecutiveHeaderNav({ onOpenBooking }: ExecutiveHeaderNavProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let timeoutId: NodeJS.Timeout;

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
    clearTimeout(timeoutId);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-[#10B981]/30 bg-[#071C3F]/95 backdrop-blur-xl shadow-2xl py-3"
          : "border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Official ApexEdge Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <ApexEdgeLogo />
        </Link>

        {/* Desktop Navigation Items */}
        <nav className="hidden items-center gap-7 text-sm font-bold text-slate-200 lg:flex">
          <Link
            href="/"
            className={`transition-colors py-1 ${
              pathname === "/" ? "text-[#10B981]" : "text-slate-200 hover:text-[#10B981]"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`transition-colors py-1 ${
              pathname === "/about" ? "text-[#10B981]" : "text-slate-200 hover:text-[#10B981]"
            }`}
          >
            About Us
          </Link>

          {/* Services Dropdown (Persistent on Interaction) */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/services"
              className={`inline-flex items-center gap-1.5 py-1 transition-colors ${
                pathname.startsWith("/services") ? "text-[#10B981]" : "text-slate-200 hover:text-[#10B981]"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isServicesOpen ? "rotate-180 text-[#10B981]" : "text-slate-400"
                }`}
              />
            </Link>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full -left-4 mt-2 w-[380px] rounded-2xl bg-[#071C3F] border border-[#10B981]/40 shadow-2xl p-4 z-50 backdrop-blur-2xl"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#10B981] mb-2 px-3">
                    Outcome-Based Practice Areas
                  </div>
                  <div className="space-y-1">
                    {serviceDropdownItems.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-900/90 border border-transparent hover:border-[#10B981]/30 transition-all group/item"
                        >
                          <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[#10B981] group-hover/item:bg-[#10B981] group-hover/item:text-[#071C3F] transition-colors shrink-0">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-extrabold text-white group-hover/item:text-[#10B981] transition-colors flex items-center justify-between">
                              <span>{item.title}</span>
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-[#10B981]" />
                            </div>
                            <p className="text-[11px] text-slate-300 leading-snug mt-0.5 font-normal">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-800 px-3 flex items-center justify-between">
                    <Link
                      href="/services"
                      onClick={() => setIsServicesOpen(false)}
                      className="text-xs font-bold text-[#10B981] hover:underline flex items-center gap-1"
                    >
                      <span>Explore All Services</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/industries"
            className={`transition-colors py-1 ${
              pathname === "/industries" ? "text-[#10B981]" : "text-slate-200 hover:text-[#10B981]"
            }`}
          >
            Industries
          </Link>

          <Link
            href="/insights"
            className={`transition-colors py-1 ${
              pathname === "/insights" ? "text-[#10B981]" : "text-slate-200 hover:text-[#10B981]"
            }`}
          >
            Insights
          </Link>

          <Link
            href="/careers"
            className={`transition-colors py-1 ${
              pathname === "/careers" ? "text-[#10B981]" : "text-slate-200 hover:text-[#10B981]"
            }`}
          >
            Careers
          </Link>

          <Link
            href="/contact"
            className={`transition-colors py-1 ${
              pathname === "/contact" ? "text-[#10B981]" : "text-slate-200 hover:text-[#10B981]"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Action Controls & Primary CTA */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+254117471344"
            className="hidden items-center gap-2 text-xs font-semibold text-slate-300 hover:text-[#10B981] xl:flex transition-colors"
          >
            <Phone className="h-3.5 w-3.5 text-[#10B981]" />
            <span>+254 117 471344</span>
          </a>

          <Button
            onClick={onOpenBooking}
            className="bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black shadow-lg shadow-[#10B981]/25 rounded-full px-5 py-2.5 text-xs flex items-center gap-2 transition-all hover:scale-105"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Clarity Session →</span>
          </Button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white lg:hidden"
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
            className="lg:hidden border-t border-slate-800 bg-[#071C3F] px-5 py-6 space-y-4"
          >
            <div className="flex flex-col space-y-3 font-bold text-sm text-slate-200">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#10B981]">
                Home
              </Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#10B981]">
                About Us
              </Link>
              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#10B981]">
                Services
              </Link>
              <div className="pl-4 space-y-2 border-l border-[#10B981]/30 text-xs text-slate-300 font-medium">
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
              <Link href="/careers" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#10B981]">
                Careers
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#10B981]">
                Contact
              </Link>
            </div>
            <div className="pt-4 border-t border-slate-800">
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
