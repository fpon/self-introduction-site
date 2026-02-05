"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { MagneticButton } from "@/components/MagneticButton";

export function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ y, opacity }}
      >
        <motion.h1
          className="select-none text-[20vw] font-bold leading-none tracking-tighter text-foreground/[0.03]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.8, ease: [0.76, 0, 0.24, 1] }}
        >
          YN
        </motion.h1>
      </motion.div>

      <motion.div
        className="absolute left-8 top-32 hidden font-mono text-[10px] text-foreground/20 lg:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3.2, duration: 0.8 }}
      >
        <div className="space-y-1">
          <div className="text-foreground/40">{"// status"}</div>
          <div>
            available: <span className="text-green-500">true</span>
          </div>
          <div>location: Tokyo, JP</div>
          <div>experience: 10+ years</div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-8 hidden font-mono text-[10px] text-foreground/20 lg:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3.4, duration: 0.8 }}
      >
        <div className="text-right">
          <div className="text-foreground/40">{"// coordinates"}</div>
          <div>35.6762° N</div>
          <div>139.6503° E</div>
        </div>
      </motion.div>

      <motion.div
        className="absolute right-8 top-32 hidden lg:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, duration: 0.8 }}
      >
        <svg
          width="120"
          height="120"
          className="text-foreground/10"
          aria-hidden="true"
        >
          <motion.rect
            x="10"
            y="10"
            width="100"
            height="100"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 3.2, duration: 1.5, ease: "easeInOut" }}
          />
          <motion.line
            x1="10"
            y1="10"
            x2="110"
            y2="110"
            stroke="currentColor"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
          />
          <motion.line
            x1="110"
            y1="10"
            x2="10"
            y2="110"
            stroke="currentColor"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 3.7, duration: 1 }}
          />
        </svg>
      </motion.div>

      <div className="relative z-10 px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mb-4"
        >
          <span className="inline-block rounded-full border border-border px-4 py-1 text-[11px] uppercase tracking-widest text-muted">
            Software Engineer
          </span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h2
            className="text-[clamp(3rem,12vw,10rem)] font-bold leading-[0.9] tracking-tighter"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 2.2, ease: [0.76, 0, 0.24, 1] }}
          >
            Creative
          </motion.h2>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            className="text-[clamp(3rem,12vw,10rem)] font-bold leading-[0.9] tracking-tighter"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 2.4, ease: [0.76, 0, 0.24, 1] }}
          >
            Developer
          </motion.h2>
        </div>

        <motion.p
          className="mt-8 max-w-md text-[14px] leading-relaxed text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
        >
          プロダクト開発とチームマネジメントに情熱を注ぐエンジニア。
          ユーザーに価値を届けるプロダクトを作っています。
        </motion.p>

        <motion.div
          className="mt-12 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          <MagneticButton>
            <Link
              href="/works"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-8 py-4 text-[13px] font-medium text-background"
            >
              <span className="relative z-10">View Works</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                →
              </motion.span>
              <span className="absolute inset-0 -translate-x-full bg-accent transition-transform duration-300 group-hover:translate-x-0" />
            </Link>
          </MagneticButton>
          <MagneticButton>
            <Link
              href="/profile"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-[13px] font-medium transition-colors hover:bg-foreground hover:text-background"
            >
              About Me
            </Link>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <span className="text-[10px] uppercase tracking-widest text-muted">
            Scroll
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-foreground to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
