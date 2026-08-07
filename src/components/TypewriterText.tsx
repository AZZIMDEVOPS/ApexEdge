"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export function TypewriterText({
  words,
  typingSpeed = 130,
  deletingSpeed = 65,
  pauseDuration = 2800,
  className = "",
}: TypewriterTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
          if (currentText === currentWord) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          setCurrentText(currentWord.slice(0, currentText.length - 1));
          if (currentText === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`inline-flex items-center align-baseline ${className}`}>
      <span className="inline-block min-h-[1.2em]">{currentText || "\u00A0"}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        className="ml-1 inline-block w-[3px] h-[0.85em] bg-emerald-400 rounded-full shrink-0 align-middle"
      />
    </span>
  );
}
