"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type TypewriterTextProps = {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
};

export const TypewriterText = ({
  texts,
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypewriterTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (!isDeleting) {
      if (displayText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      }
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }
    if (displayText.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    }
    setIsDeleting(false);
    setCurrentTextIndex((prev) => (prev + 1) % texts.length);
  }, [
    displayText,
    isDeleting,
    currentTextIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{displayText}</span>
      <motion.span
        className="ml-0.5 inline-block h-[1em] w-[2px] bg-dracula-green"
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          boxShadow: "0 0 4px var(--dracula-green)",
        }}
      />
    </span>
  );
};
