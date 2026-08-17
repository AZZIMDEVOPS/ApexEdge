"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Outer Cyan Ring (Hidden on mobile touch devices via CSS) */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-[#10B981]/60 mix-blend-screen hidden lg:block"
        animate={{
          x: position.x - (isHovered ? 24 : 16),
          y: position.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          backgroundColor: isHovered ? "rgba(16, 185, 129, 0.15)" : "rgba(16, 185, 129, 0.05)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.1 }}
      />
      {/* Core Dot (Hidden on mobile touch devices via CSS) */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-[#10B981] hidden lg:block"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          width: 6,
          height: 6,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35 }}
      />
    </>
  );
}
