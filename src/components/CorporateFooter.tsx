"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Mail,
  Globe,
  Phone,
  Clock,
  ArrowUp,
  Send,
  CheckCircle2,
} from "lucide-react";
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

  const specializations = [
    "Corporate Governance",
    "Legal Advisory",
    "Company Secretarial Services",
    "HR Consulting",
    "Business Advisory",
    "Immigration Services",
    "Compliance Management",
    "Technology & Digital Transformation",
  ];

  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#why-us" },
    { label: "Our Services", href: "#services" },
    { label: "Industries", href: "#services" },
    { label: "Insights", href: "#values" },
    { label: "Careers", href: "#contact" },
    { label: "Contact Us", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ];

  const servicesList = [
    "Corporate Governance",
    "Legal & Regulatory Advisory",
    "Company Secretarial",
    "HR Advisory",
    "Business Registration",
    "Immigration & Work Permits",
    "Strategy & Business Consulting",
    "Risk & Compliance",
    "Digital Business Solutions",
  ];

  return (
    <footer id="contact" className="relative w-full bg-[#071C3F] text-white overflow-hidden selection:bg-[#C9A227] selection:text-[#071C3F]">
      
      {/* Top Animated Metallic Gold Line */}
      <div className="relative w-full h-1 bg-slate-900 overflow-hidden">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-full h-full bg-gradient-to-r from-transparent via-[#C9A227] to-transparent"
        />
      </div>

      {/* Subtle Background Glow & Radial Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#C9A227]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      {/* Main Footer Content Container */}
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-12 sm:px-8 lg:px-10">
        
        {/* Newsletter Subscription Section */}
        <div className="mb-20 rounded-3xl border border-[#C9A227]/30 bg-gradient-to-r from-slate-900/90 via-[#071C3F]/95 to-slate-900/90 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.25em] text-[#C9A227]">
                <span>Executive Insights</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Stay Informed with <span className="text-[#C9A227]">Strategic Intelligence</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Receive curated briefings on corporate governance, legal updates, compliance frameworks, and business strategy in East Africa.
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
                    className="w-full rounded-full border border-slate-700 bg-slate-950/80 px-6 py-4 text-sm text-white placeholder-slate-400 focus:border-[#C9A227] focus:outline-none focus:ring-2 focus:ring-[#C9A227]/50 transition-all"
                  />
                </div>
                <Button
                  type="submit"
                  className="rounded-full bg-[#C9A227] hover:bg-[#b5901f] text-[#071C3F] font-extrabold px-8 py-4 text-sm shadow-lg shadow-[#C9A227]/20 transition-all flex items-center justify-center gap-2"
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
                    className="mt-3 flex items-center gap-2 text-xs font-semibold text-emerald-400"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Thank you for subscribing to ApexEdge Advisory insights!</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 pb-16">
          
          {/* Column 1 — Company */}
          <div className="space-y-6">
            <ApexEdgeLogo />
            <p className="text-slate-300 text-sm leading-relaxed font-normal">
              Helping businesses build stronger governance, smarter strategies, and sustainable growth through professional advisory solutions.
            </p>
            <div className="space-y-3 pt-2">
              <p className="text-xs font-bold uppercase tracking-widest text-[#C9A227]">We Specialize In:</p>
              <ul className="grid grid-cols-1 gap-2 text-xs text-slate-300">
                {specializations.map((spec) => (
                  <li key={spec} className="flex items-center gap-2 hover:text-white transition-colors">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C9A227]" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-extrabold text-white border-b border-[#C9A227]/30 pb-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#C9A227] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#C9A227] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-extrabold text-white border-b border-[#C9A227]/30 pb-3">
              Our Practice Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {servicesList.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="hover:text-[#C9A227] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#C9A227] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact Information */}
          <div className="space-y-6">
            <h4 className="text-lg font-extrabold text-white border-b border-[#C9A227]/30 pb-3">
              Contact Information
            </h4>
            <div className="space-y-4 text-sm text-slate-300">
              <p className="font-extrabold text-white text-base">APEXEDGE ADVISORY LIMITED</p>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#C9A227] shrink-0 mt-0.5" />
                <span>Nairobi, Kenya</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#C9A227] shrink-0" />
                <a href="mailto:info@apexedge.co.ke" className="hover:text-[#C9A227] transition-colors">
                  info@apexedge.co.ke
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-[#C9A227] shrink-0" />
                <a href="https://www.apexedge.co.ke" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A227] transition-colors">
                  www.apexedge.co.ke
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#C9A227] shrink-0" />
                <a href="tel:+254117471344" className="hover:text-[#C9A227] transition-colors font-semibold">
                  +254 117 471344
                </a>
              </div>

              <div className="pt-2 border-t border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C9A227] uppercase tracking-wider">
                  <Clock className="h-4 w-4" />
                  <span>Business Hours</span>
                </div>
                <p className="text-xs text-slate-300">Monday – Friday: 8:00 AM – 5:00 PM</p>
              </div>

              {/* Social Icons */}
              <div className="pt-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[#C9A227] mb-3">Connect With Us</p>
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
                      className="rounded-full bg-slate-900 border border-slate-700 p-2.5 text-slate-300 hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-[#071C3F] transition-all shadow-md"
                    >
                      <social.icon className="h-4 w-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Gold Divider */}
        <div className="pt-8 border-t border-[#C9A227]/30 text-xs text-slate-400">
          <div className="flex flex-col gap-4 sm:flex-row items-center justify-between text-center sm:text-left">
            
            {/* Left */}
            <div>
              <p>© 2026 ApexEdge Advisory Limited. All Rights Reserved.</p>
            </div>

            {/* Center */}
            <div className="font-semibold text-slate-300">
              <span>Professional Advisory • Corporate Governance • Legal • HR • Strategy</span>
            </div>

            {/* Right */}
            <div>
              <p>
                Concept &amp; Developed by{" "}
                <a
                  href="https://regnl.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-extrabold text-[#C9A227] hover:underline hover:text-amber-300 transition-colors"
                >
                  ReGNL
                </a>
                . © 2026
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
            className="fixed bottom-8 right-8 z-50 rounded-full bg-[#C9A227] p-3.5 text-[#071C3F] shadow-2xl hover:bg-amber-400 transition-all border border-white/20"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5 font-bold" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
