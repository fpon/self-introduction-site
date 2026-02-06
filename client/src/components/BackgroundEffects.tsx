"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const codeSnippets = [
  { id: "snippet-init", code: "const init = () => {", delay: 0 },
  { id: "snippet-await", code: "  await connect();", delay: 0.1 },
  { id: "snippet-return", code: "  return data;", delay: 0.2 },
  { id: "snippet-close", code: "};", delay: 0.3 },
];

const codeSnippets2 = [
  { id: "snippet2-interface", code: "interface User {", delay: 0 },
  { id: "snippet2-id", code: "  id: string;", delay: 0.1 },
  { id: "snippet2-name", code: "  name: string;", delay: 0.2 },
  { id: "snippet2-role", code: "  role: Role;", delay: 0.3 },
  { id: "snippet2-close", code: "}", delay: 0.4 },
];

const terminalCommands = [
  { id: "terminal-build", cmd: "$ npm run build" },
  { id: "terminal-push", cmd: "$ git push origin main" },
  { id: "terminal-docker", cmd: "$ docker compose up" },
];

const binaryStrings = [
  { id: "binary-1", value: "01001000 01100101" },
  { id: "binary-2", value: "01101100 01101100" },
  { id: "binary-3", value: "01101111 00100001" },
];

export const BackgroundEffects = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -100]);

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
        className="absolute -right-8 top-1/4 h-48 w-48 rounded-full border border-dashed border-foreground/5"
        style={{ rotate }}
      />

      <motion.div
        className="absolute -left-48 bottom-1/4 h-[500px] w-[500px]"
        style={{ scale }}
      >
        <div className="h-full w-full rotate-45 border border-foreground/5" />
      </motion.div>

      <div className="absolute left-8 top-1/4 font-mono text-[10px] text-foreground/10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          {codeSnippets.map((snippet) => (
            <motion.div
              key={snippet.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 + snippet.delay, duration: 0.5 }}
              className="leading-relaxed"
            >
              {snippet.code}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute right-12 top-1/2 font-mono text-[10px] text-foreground/10">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          {codeSnippets2.map((snippet) => (
            <motion.div
              key={snippet.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5 + snippet.delay, duration: 0.5 }}
              className="leading-relaxed"
            >
              {snippet.code}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-1/3 left-8 font-mono text-[10px] text-foreground/10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((lineNumber) => (
            <div key={`code-line-${lineNumber}`} className="flex gap-4">
              <span className="w-4 text-right text-foreground/20">
                {String(lineNumber).padStart(2, "0")}
              </span>
              <span>{lineNumber % 3 === 0 ? "}" : "{"}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute right-8 top-1/3 flex flex-col gap-1">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((lineIndex) => (
          <motion.div
            key={`decorative-line-${lineIndex}`}
            className="h-px bg-foreground/10"
            initial={{ width: 0 }}
            animate={{ width: `${15 + lineIndex * 4}px` }}
            transition={{ delay: 2 + lineIndex * 0.08, duration: 0.5 }}
          />
        ))}
      </div>

      <div className="absolute bottom-1/2 left-16 font-mono text-[9px] text-foreground/8">
        {terminalCommands.map((terminal, terminalIndex) => (
          <motion.div
            key={terminal.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 4 + terminalIndex * 0.5, duration: 0.5 }}
            className="mb-1"
          >
            {terminal.cmd}
          </motion.div>
        ))}
      </div>

      <div className="absolute right-20 top-20 font-mono text-[8px] text-foreground/8">
        {binaryStrings.map((binary, binaryIndex) => (
          <motion.div
            key={binary.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{
              delay: binaryIndex * 2,
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
            }}
            className="mb-1"
          >
            {binary.value}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="absolute left-1/4 top-2/3 font-mono text-[10px] text-foreground/8"
        style={{ y: translateY }}
      >
        <motion.span
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          {"<Component />"}
        </motion.span>
      </motion.div>

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
      <motion.div
        className="absolute left-1/2 top-1/3 h-1 w-1 rounded-full bg-foreground/25"
        animate={{
          scale: [1, 2.5, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 3.5,
          repeat: Number.POSITIVE_INFINITY,
          delay: 1.5,
        }}
      />
      <motion.div
        className="absolute right-1/4 bottom-1/3 h-1.5 w-1.5 rounded-full bg-foreground/15"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          delay: 2,
        }}
      />

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
        <div className="flex gap-0.5">
          {Array.from({ length: 25 }, (_, i) => i + 1).map((barIndex) => (
            <motion.div
              key={`equalizer-bar-${barIndex}`}
              className="w-0.5 bg-foreground/10"
              animate={{
                height: [8, 12 + (barIndex % 8) * 2, 8],
              }}
              transition={{
                duration: 1.2,
                repeat: Number.POSITIVE_INFINITY,
                delay: barIndex * 0.04,
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

      <svg
        className="absolute right-1/3 bottom-20 h-24 w-24 text-foreground/5"
        aria-hidden="true"
      >
        <motion.rect
          x="12"
          y="12"
          width="72"
          height="72"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 3, ease: "easeInOut" }}
        />
      </svg>

      <svg
        className="absolute left-1/3 bottom-1/4 h-20 w-20 text-foreground/5"
        aria-hidden="true"
      >
        <motion.polygon
          points="40,5 75,70 5,70"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
        />
      </svg>

      <div className="absolute right-8 bottom-1/4 font-mono text-[9px] text-foreground/8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1 }}
        >
          <div className="text-foreground/15">{"// TODO:"}</div>
          <div>build something</div>
          <div>amazing</div>
        </motion.div>
      </div>

      <motion.div
        className="absolute left-20 top-1/2 font-mono text-[8px] text-foreground/10"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
      >
        {`{...props}`}
      </motion.div>

      <motion.div
        className="absolute right-1/4 top-1/4 font-mono text-[8px] text-foreground/10"
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
      >
        {`() => void`}
      </motion.div>
    </div>
  );
};
