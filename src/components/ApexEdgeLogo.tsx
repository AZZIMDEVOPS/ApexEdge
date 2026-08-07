"use client";

interface ApexEdgeLogoProps {
  variant?: "default" | "hero" | "header";
  className?: string;
}

export function ApexEdgeLogo({ variant = "default", className = "" }: ApexEdgeLogoProps) {
  const isHero = variant === "hero";

  if (isHero) {
    return (
      <div className={`flex flex-col items-center gap-3 ${className}`}>
        <a href="#" className="relative h-24 sm:h-32 w-auto flex items-center justify-center transition-transform hover:scale-105">
          <img
            src="/apexedge_logo.png"
            alt="ApexEdge Advisory Limited Official White Logo"
            className="h-full w-auto object-contain brightness-0 invert drop-shadow-[0_4px_20px_rgba(255,255,255,0.6)]"
          />
        </a>
      </div>
    );
  }

  return (
    <div className={`flex items-center ${className}`}>
      <a href="#" className="relative h-16 sm:h-20 lg:h-24 w-auto flex items-center justify-center transition-transform hover:scale-105 group">
        <img
          src="/apexedge_logo.png"
          alt="ApexEdge Advisory Limited Official White Logo"
          className="h-16 sm:h-20 lg:h-22 w-auto object-contain brightness-0 invert drop-shadow-[0_2px_14px_rgba(255,255,255,0.5)] group-hover:drop-shadow-[0_0_22px_rgba(255,255,255,0.9)] transition-all"
        />
      </a>
    </div>
  );
}
