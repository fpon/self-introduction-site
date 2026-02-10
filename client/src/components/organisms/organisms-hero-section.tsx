import type { MotionValue } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";
import type { RefObject } from "react";
import { GlitchText } from "@/components/GlitchText";
import { MagneticButton } from "@/components/MagneticButton";
import { TypewriterText } from "@/components/TypewriterText";

type OrganismsHeroSectionProps = {
  containerRef: RefObject<HTMLElement | null>;
  y: MotionValue<number>;
  opacity: MotionValue<number>;
};

const terminalCommands = [
  "bun run dev",
  "sudo rm -rf /var/老化",
  "git switch -c めっちゃ楽しい人生",
  "kill -9 ストレス",
];

export const OrganismsHeroSection = ({
  containerRef,
  y,
  opacity,
}: OrganismsHeroSectionProps) => {
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

      <div className="relative z-10 px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-dracula-purple/30 bg-dracula-purple/5 px-4 py-1 text-[11px] uppercase tracking-widest text-dracula-purple">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-dracula-green"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
            Software Engineer
          </span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h2
            className="text-[clamp(2rem,8vw,6rem)] font-bold leading-[0.9] tracking-tighter"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 2.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <GlitchText intensity="low">./はじめまして</GlitchText>
          </motion.h2>
        </div>
        <div className="overflow-hidden pb-2">
          <motion.h2
            className="text-[clamp(2rem,8vw,6rem)] font-bold leading-[1] tracking-tighter"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 2.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <GlitchText intensity="low">--engineer</GlitchText>
          </motion.h2>
        </div>

        <motion.div
          className="mt-6 flex items-center gap-2 font-mono text-[13px] text-foreground/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8 }}
        >
          <span className="text-dracula-green">$</span>
          <TypewriterText
            texts={terminalCommands}
            typingSpeed={80}
            deletingSpeed={40}
            pauseDuration={2500}
          />
        </motion.div>

        <motion.p
          className="mt-6 max-w-md text-[14px] leading-relaxed text-foreground/70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          プロダクト開発とチームマネジメントに情熱を注ぐエンジニア。
          ユーザーに価値を届けるプロダクトを作っています。
        </motion.p>

        <motion.div
          className="mt-12 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
        >
          <MagneticButton>
            <Link
              href="/works"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-dracula-purple bg-dracula-purple/10 px-8 py-4 text-[13px] font-medium text-foreground transition-all hover:bg-dracula-purple hover:text-background"
            >
              <span className="relative z-10">View Works</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                →
              </motion.span>
            </Link>
          </MagneticButton>
          <MagneticButton>
            <Link
              href="/profile"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-[13px] font-medium transition-colors hover:border-dracula-purple hover:text-dracula-purple"
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
          <span className="text-[10px] uppercase tracking-widest text-foreground/50">
            Scroll
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-dracula-purple to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};
