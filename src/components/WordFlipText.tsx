"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WordFlipTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

export function WordFlipText({
  words,
  interval = 3200,
  className = "",
}: WordFlipTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span className={`inline-block relative overflow-hidden align-bottom ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 32, rotateX: -55, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -32, rotateX: 55, filter: "blur(10px)" }}
          transition={{
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1], // Premium Apple / Stripe cubic ease
          }}
          className="inline-block transform-gpu py-1"
          style={{ transformOrigin: "50% 50% -20px" }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
