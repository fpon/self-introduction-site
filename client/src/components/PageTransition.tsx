"use client";

import { motion, type Variants } from "framer-motion";

const easeOutExpo: [number, number, number, number] = [0.76, 0, 0.24, 1];

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOutExpo,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
    },
  },
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
}

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

export const staggerContainer: Variants = {
  enter: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};
