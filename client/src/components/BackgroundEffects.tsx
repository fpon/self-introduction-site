"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export const BackgroundEffects = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

      <div className="absolute inset-0 bg-noise opacity-[0.015]" />

      <motion.div
        className="absolute -right-32 top-1/4 h-96 w-96 rounded-full border border-foreground/5"
        style={{ rotate }}
      />
      <motion.div
        className="absolute -right-16 top-1/4 h-64 w-64 rounded-full border border-foreground/5"
        style={{ rotate }}
      />

      <motion.div
        className="absolute -left-48 bottom-1/4 h-[500px] w-[500px]"
        style={{ scale }}
      >
        <div className="h-full w-full rotate-45 border border-foreground/5" />
      </motion.div>

      <div className="absolute right-8 top-1/3 flex flex-col gap-1">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((lineIndex) => (
          <motion.div
            key={`decorative-line-${lineIndex}`}
            className="h-px bg-foreground/10"
            initial={{ width: 0 }}
            animate={{ width: `${20 + lineIndex * 5}px` }}
            transition={{ delay: 2 + lineIndex * 0.1, duration: 0.5 }}
          />
        ))}
      </div>

      <div className="absolute bottom-1/3 left-8 font-mono text-[10px] text-foreground/10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          {[1, 2, 3, 4, 5].map((lineNumber) => (
            <div key={`code-line-${lineNumber}`} className="flex gap-4">
              <span className="w-4 text-right">
                {String(lineNumber).padStart(2, "0")}
              </span>
              <span>{"{"}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute right-1/4 top-1/2 h-2 w-2 rounded-full bg-foreground/20"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute left-1/3 top-1/4 h-1 w-1 rounded-full bg-foreground/30"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 h-1.5 w-1.5 rounded-full bg-foreground/20"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 2.5,
          repeat: Number.POSITIVE_INFINITY,
          delay: 1,
        }}
      />

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
        <div className="flex gap-0.5">
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ].map((barIndex) => (
            <motion.div
              key={`equalizer-bar-${barIndex}`}
              className="w-0.5 bg-foreground/10"
              animate={{
                height: [10, 15 + barIndex, 10],
              }}
              transition={{
                duration: 1.2,
                repeat: Number.POSITIVE_INFINITY,
                delay: barIndex * 0.05,
              }}
            />
          ))}
        </div>
      </div>

      <svg
        className="absolute left-1/4 top-20 h-32 w-32 text-foreground/5"
        aria-hidden="true"
      >
        <motion.circle
          cx="64"
          cy="64"
          r="60"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="377"
          initial={{ strokeDashoffset: 377 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 3, delay: 2, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};
