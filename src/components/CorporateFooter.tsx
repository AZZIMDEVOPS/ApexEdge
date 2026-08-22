"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Globe, Phone, Clock, ArrowUp, Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { ApexEdgeLogo } from "@/components/ApexEdgeLogo";
import { Button } from "@/components/ui/button";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.69c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.2.19 2.2.19v2.42h-1.24c-1.23 0-1.61.76-1.61 1.54V12h2.72l-.43 3h-2.29v6.8c4.56-.93 8-4.96 8-9.8z"/>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export function CorporateFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ];

  const practiceCategories = [
    { label: "01 Governance & Risk", href: "/services#governance-risk" },
    { label: "02 People & Performance", href: "/services#people-performance" },
    { label: "03 Controls & Policies", href: "/services#controls-policies" },
    { label: "04 Leadership & Capability", href: "/services#leadership-capability" },
    { label: "05 Data Protection & Privacy", href: "/services#data-protection" },
    { label: "06 Corporate Secretarial", href: "/services#corporate-secretarial" },
    { label: "Board-Ready Risk Sprint", href: "/services#risk-sprint" },
  ];

  return (
    <footer id="contact" className="relative w-full bg-white text-slate-900 overflow-hidden border-t border-slate-200 selection:bg-[#10B981] selection:text-[#071C3F]">
      
      {/* Top Animated Emerald Line Divider */}
      <div className="relative w-full h-[2px] bg-slate-200 overflow-hidden">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
          className="w-full h-full bg-gradient-to-r from-transparent via-[#10B981] via-emerald-400 to-transparent"
        />
      </div>

      {/* Main Footer Content Container */}
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-12 sm:px-8 lg:px-10">
        
        {/* Executive Newsletter Briefings Card */}
        <div className="mb-16 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-8 sm:p-12 shadow-lg">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.25em] text-[#10B981]">
                <ShieldCheck className="w-4 h-4" />
                <span>Executive Intelligence</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950">
                Stay Informed with <span className="text-[#071C3F] underline decoration-[#10B981] decoration-4 underline-offset-4">Board-Level Insights</span>
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Receive curated quarterly briefings on corporate governance, risk frameworks, control systems, and Mwongozo compliance in East Africa.
              </p>
            </div>
            <div>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your corporate email address"
                    className="w-full rounded-2xl bg-white border-2 border-slate-200 px-5 py-4 text-sm text-slate-900 placeholder-slate-400 focus:border-[#10B981] focus:outline-none shadow-xs"
                  />
                </div>
                <Button
                  type="submit"
                  className="rounded-2xl bg-[#10B981] hover:bg-emerald-400 text-[#071C3F] font-black px-8 py-4 text-sm shadow-md flex items-center justify-center gap-2 transition-all hover:scale-105 shrink-0 cursor-pointer"
                >
                  <span>Subscribe</span>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
              <AnimatePresence>
                {subscribed && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-3 flex items-center gap-2 text-xs font-bold text-emerald-600"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Thank you for subscribing to Apex Edge Advisory insights!</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Animated Emerald Line Divider just before the Navigation Columns */}
        <div className="relative w-full h-[2px] bg-slate-200 overflow-hidden mb-16 rounded-full">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-full h-full bg-gradient-to-r from-transparent via-[#10B981] via-emerald-400 to-transparent"
          />
        </div>

        {/* 4 Columns Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 pb-16">
          
          {/* Column 1 — Brand Positioning Statement with Black Logo */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <ApexEdgeLogo variant="dark" />
            </Link>
            <p className="text-slate-700 text-sm leading-relaxed font-medium italic border-l-2 border-[#10B981] pl-3 py-1">
              &ldquo;Apex Edge turns governance, people, control and performance problems into Board-ready systems that leaders can actually use.&rdquo;
            </p>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Serving Boards, CEOs, CFOs, and Senior Executives across Kenya and East Africa.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="space-y-6">
            <h4 className="text-base font-extrabold text-[#071C3F] border-b border-slate-200 pb-3 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#10B981] transition-colors flex items-center gap-2 group font-medium"
                  >
                    <span className="text-[#10B981] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Practice Architecture */}
          <div className="space-y-6">
            <h4 className="text-base font-extrabold text-[#071C3F] border-b border-slate-200 pb-3 uppercase tracking-wider">
              Practice Areas
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              {practiceCategories.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#10B981] transition-colors flex items-center gap-2 group text-xs font-medium"
                  >
                    <span className="text-[#10B981] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact Information */}
          <div className="space-y-6">
            <h4 className="text-base font-extrabold text-[#071C3F] border-b border-slate-200 pb-3 uppercase tracking-wider">
              Contact &amp; Location
            </h4>
            <div className="space-y-4 text-sm text-slate-700">
              <p className="font-extrabold text-[#071C3F] text-sm tracking-wide">APEXEDGE ADVISORY LIMITED</p>
              
              <div className="flex items-start gap-3 text-xs">
                <MapPin className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                <span className="text-slate-600">Nairobi HQ, Kenya</span>
              </div>
              
              <div className="flex items-center gap-3 text-xs">
                <Mail className="h-4 w-4 text-[#10B981] shrink-0" />
                <a href="mailto:info@apexedge.co.ke" className="hover:text-[#10B981] text-slate-600 transition-colors">
                  info@apexedge.co.ke
                </a>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <Globe className="h-4 w-4 text-[#10B981] shrink-0" />
                <a href="https://www.apexedge.co.ke" target="_blank" rel="noopener noreferrer" className="hover:text-[#10B981] text-slate-600 transition-colors">
                  www.apexedge.co.ke
                </a>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <Phone className="h-4 w-4 text-[#10B981] shrink-0" />
                <a href="tel:+254117471344" className="hover:text-[#10B981] transition-colors font-bold text-[#071C3F]">
                  +254 117 471344
                </a>
              </div>

              <div className="pt-2 border-t border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-[11px] font-bold text-[#071C3F] uppercase tracking-wider">
                  <Clock className="h-3.5 w-3.5 text-[#10B981]" />
                  <span>Executive Advisory Hours</span>
                </div>
                <p className="text-xs text-slate-500">Monday – Friday: 8:00 AM – 5:00 PM EAT</p>
              </div>

              {/* Social Icons */}
              <div className="pt-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#071C3F] mb-2.5">Connect With Us</p>
                <div className="flex items-center gap-3">
                  {[
                    { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
                    { icon: FacebookIcon, href: "#", label: "Facebook" },
                    { icon: TwitterIcon, href: "#", label: "X (Twitter)" },
                    { icon: InstagramIcon, href: "#", label: "Instagram" },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                      className="rounded-full bg-slate-100 border border-slate-200 p-2.5 text-slate-600 hover:border-[#10B981] hover:bg-[#10B981] hover:text-[#071C3F] transition-all shadow-xs"
                    >
                      <social.icon className="h-4 w-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 text-xs text-slate-500">
          <div className="flex flex-col gap-4 sm:flex-row items-center justify-between text-center sm:text-left">
            <div>
              <p>© 2026 ApexEdge Advisory Limited. All Rights Reserved.</p>
            </div>
            <div className="font-semibold text-slate-600 text-[11px]">
              <span>Board-Ready Systems • Corporate Governance • Controls • People &amp; Performance</span>
            </div>
            <div>
              <p>
                Developed by{" "}
                <a
                  href="https://regnl.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-extrabold text-[#071C3F] hover:text-[#10B981] hover:underline transition-colors"
                >
                  ReGNL
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 rounded-full bg-[#10B981] p-3.5 text-[#071C3F] shadow-2xl hover:bg-emerald-400 transition-all border border-white/20 cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5 font-bold" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
