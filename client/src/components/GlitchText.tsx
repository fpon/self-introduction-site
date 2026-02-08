"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type GlitchTextProps = {
  children: ReactNode;
  className?: string;
  intensity?: "low" | "medium" | "high";
};

export const GlitchText = ({
  children,
  className = "",
  intensity = "medium",
}: GlitchTextProps) => {
  const glitchIntensity = {
    low: { duration: 6, offset: 1 },
    medium: { duration: 4, offset: 2 },
    high: { duration: 2, offset: 3 },
  };

  const { duration, offset } = glitchIntensity[intensity];

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      animate={{
        textShadow: [
          "0 0 0 transparent",
          `${offset}px 0 0 var(--terminal-cyan), -${offset}px 0 0 var(--terminal-magenta)`,
          "0 0 0 transparent",
          `-${offset}px 0 0 var(--terminal-cyan), ${offset}px 0 0 var(--terminal-magenta)`,
          "0 0 0 transparent",
        ],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        times: [0, 0.1, 0.2, 0.3, 1],
      }}
    >
      {children}
    </motion.span>
  );
};
