"use client";

import Image from "next/image";

interface ApexEdgeLogoProps {
  variant?: "default" | "hero" | "header" | "dark" | "light";
  className?: string;
}

export function ApexEdgeLogo({ variant = "default", className = "" }: ApexEdgeLogoProps) {
  const isLightModeHeader = variant === "dark" || variant === "header" || variant === "default";

  if (variant === "hero") {
    return (
      <div className={`flex flex-col items-center gap-3 ${className}`}>
        <div className="relative h-24 sm:h-32 w-auto flex items-center justify-center transition-transform hover:scale-105">
          <Image
            src="/apexedge_logo.png"
            alt="ApexEdge Advisory Limited Official Logo"
            width={320}
            height={120}
            priority
            className="h-full w-auto object-contain brightness-0 invert drop-shadow-[0_4px_20px_rgba(255,255,255,0.6)]"
          />
        </div>
      </div>
    );
  }

  if (variant === "light") {
    return (
      <div className={`flex items-center ${className}`}>
        <div className="relative h-14 sm:h-16 lg:h-18 w-auto flex items-center justify-center transition-transform hover:scale-105 group">
          <Image
            src="/apexedge_logo.png"
            alt="ApexEdge Advisory Limited Official Logo"
            width={280}
            height={96}
            priority
            className="h-12 sm:h-14 lg:h-16 w-auto object-contain brightness-0 invert drop-shadow-[0_2px_14px_rgba(255,255,255,0.5)] group-hover:drop-shadow-[0_0_22px_rgba(255,255,255,0.9)] transition-all"
          />
        </div>
      </div>
    );
  }

  // Default: Crisp Dark Corporate Navy / Black for White/Light Navbar
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative h-14 sm:h-16 lg:h-18 w-auto flex items-center justify-center transition-transform hover:scale-105 group">
        <Image
          src="/apexedge_logo.png"
          alt="ApexEdge Advisory Limited Official Logo"
          width={280}
          height={96}
          priority
          className="h-12 sm:h-14 lg:h-16 w-auto object-contain brightness-0 contrast-125 transition-all group-hover:opacity-90"
        />
      </div>
    </div>
  );
}
