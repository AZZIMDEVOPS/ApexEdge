"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import { ApexEdgeLogo } from "@/components/ApexEdgeLogo";
import { Button } from "@/components/ui/button";

interface ExecutiveHeaderNavProps {
  onOpenBooking: () => void;
}

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Values", href: "#values" },
  { label: "Contact", href: "#contact" },
];

export function ExecutiveHeaderNav({ onOpenBooking }: ExecutiveHeaderNavProps) {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBeamActive, setIsBeamActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll Spy Active Section Detection
      const sections = ["services", "why-us", "values", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveSection(href);

    // Trigger Gold Beam Cinematic Animation
    setIsBeamActive(true);
    setTimeout(() => setIsBeamActive(false), 900);

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "border-b border-[#C9A227]/30 bg-[#071C3F]/90 backdrop-blur-xl shadow-2xl py-3"
          : "border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md py-3"
      }`}
    >
      {/* Traveling Gold Beam Visual Effect */}
      <AnimatePresence>
        {isBeamActive && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent z-50 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Official White Logo */}
        <ApexEdgeLogo />

        {/* Cinematic Nav Items */}
        <nav className="hidden items-center gap-8 text-sm font-bold text-slate-200 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative py-1 transition-colors ${
                  isActive ? "text-[#C9A227]" : "text-slate-200 hover:text-[#C9A227]"
                }`}
              >
                <span>{item.label}</span>

                {/* Metallic Gold Animated Underline */}
                {isActive && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A227] shadow-[0_0_8px_#C9A227]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+254117471344"
            className="hidden items-center gap-2 text-sm font-semibold text-slate-300 hover:text-[#C9A227] sm:flex transition-colors"
          >
            <Phone className="h-4 w-4 text-[#C9A227]" />
            <span>+254 117 471344</span>
          </a>

          <Button
            onClick={onOpenBooking}
            className="bg-[#C9A227] hover:bg-amber-400 text-[#071C3F] font-extrabold shadow-lg shadow-[#C9A227]/25 rounded-full px-6 py-2.5 text-xs sm:text-sm flex items-center gap-2 transition-all hover:scale-105"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
