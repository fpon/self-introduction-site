"use client";

import { motion } from "framer-motion";

type TerminalWindowProps = {
  children: React.ReactNode;
  className?: string;
  title?: string;
  delay?: number;
};

const TerminalWindow = ({
  children,
  className = "",
  title = "terminal",
  delay = 0,
}: TerminalWindowProps) => {
  return (
    <motion.div
      className={`terminal-window ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="terminal-window-header">
        <div className="terminal-dot terminal-dot-red" />
        <div className="terminal-dot terminal-dot-yellow" />
        <div className="terminal-dot terminal-dot-green" />
        <span className="ml-2 text-[9px] text-muted">{title}</span>
      </div>
      <div className="p-3 font-mono text-[10px] text-foreground/15">
        {children}
      </div>
    </motion.div>
  );
};

export const BackgroundEffects = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden scanline-overlay">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="absolute inset-0 bg-noise opacity-[0.015]" />

      <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full border border-terminal-cyan/5" />
      <div className="absolute -right-16 top-1/4 h-64 w-64 rounded-full border border-terminal-cyan/5" />
      <div className="absolute -right-8 top-1/4 h-48 w-48 rounded-full border border-dashed border-terminal-cyan/5" />

      <div className="absolute -left-48 bottom-1/4 h-[500px] w-[500px]">
        <div className="h-full w-full rotate-45 border border-terminal-magenta/5" />
      </div>

      <div className="absolute left-4 top-[12%]">
        <TerminalWindow title="types.ts" delay={2}>
          <div className="space-y-0.5">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
            >
              <span className="text-terminal-magenta/40">type</span>{" "}
              <span className="text-terminal-cyan/40">Result</span>
              {"<T, E> ="}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4 }}
            >
              {"  | { ok: "}
              <span className="text-terminal-green/40">true</span>
              {"; value: T }"}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.6 }}
            >
              {"  | { ok: "}
              <span className="text-terminal-magenta/40">false</span>
              {"; error: E };"}
            </motion.div>
          </div>
        </TerminalWindow>
      </div>

      <div className="absolute right-4 top-[18%]">
        <TerminalWindow title="config.ts" delay={2.5}>
          <div className="space-y-0.5">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.7 }}
            >
              <span className="text-terminal-magenta/40">const</span>
              {" config = {"}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.9 }}
            >
              {"  runtime: "}
              <span className="text-terminal-yellow/40">'edge'</span>,
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.1 }}
            >
              {"  regions: ["}
              <span className="text-terminal-yellow/40">'nrt1'</span>
              {"],"}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.3 }}
            >
              {"} "}
              <span className="text-terminal-magenta/40">satisfies</span>
              {" Config;"}
            </motion.div>
          </div>
        </TerminalWindow>
      </div>

      <div className="absolute left-4 top-[42%]">
        <TerminalWindow title="api.ts" delay={3.5}>
          <div className="space-y-0.5">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.7 }}
            >
              <span className="text-terminal-magenta/40">const</span>
              {" res = "}
              <span className="text-terminal-magenta/40">await</span>
              {" fetch(url);"}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.9 }}
            >
              <span className="text-terminal-magenta/40">if</span>
              {" (!res.ok) {"}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.1 }}
            >
              {"  "}
              <span className="text-terminal-magenta/40">throw new</span>
              {" HTTPError(res);"}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.3 }}
            >
              {"}"}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.5 }}
            >
              <span className="text-terminal-magenta/40">return</span>
              {" res.json() "}
              <span className="text-terminal-magenta/40">as</span>
              {" Promise<T>;"}
            </motion.div>
          </div>
        </TerminalWindow>
      </div>

      <div className="absolute right-4 top-[50%]">
        <TerminalWindow title="brand.ts" delay={4}>
          <div className="space-y-0.5">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.2 }}
            >
              <span className="text-terminal-magenta/40">type</span>{" "}
              <span className="text-terminal-cyan/40">Brand</span>
              {"<T, B> ="}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.4 }}
            >
              {"  T & { __brand: B };"}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.6 }}
            >
              <span className="text-terminal-magenta/40">type</span>{" "}
              <span className="text-terminal-cyan/40">UserId</span>
              {" ="}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.8 }}
            >
              {"  Brand<"}
              <span className="text-terminal-cyan/40">string</span>
              {", "}
              <span className="text-terminal-yellow/40">'UserId'</span>
              {">;"}
            </motion.div>
          </div>
        </TerminalWindow>
      </div>

      <div className="absolute bottom-[32%] left-4">
        <TerminalWindow title="action.ts" delay={4.5}>
          <div className="space-y-0.5">
            <div className="text-muted/40">{"// Discriminated Union"}</div>
            <div>
              <span className="text-terminal-magenta/40">type</span>{" "}
              <span className="text-terminal-cyan/40">Action</span>
              {" ="}
            </div>
            <div>
              {"  | { type: "}
              <span className="text-terminal-yellow/40">'increment'</span>
              {" }"}
            </div>
            <div>
              {"  | { type: "}
              <span className="text-terminal-yellow/40">'set'</span>
              {"; value: "}
              <span className="text-terminal-cyan/40">number</span>
              {" };"}
            </div>
          </div>
        </TerminalWindow>
      </div>

      <div className="absolute bottom-[24%] right-4">
        <TerminalWindow title="schema.ts" delay={5.5}>
          <div className="space-y-0.5">
            <div>
              <span className="text-terminal-magenta/40">const</span>
              {" schema = z.object({"}
            </div>
            <div>
              {"  id: z.string()."}
              <span className="text-terminal-cyan/40">uuid</span>
              {"(),"}
            </div>
            <div>
              {"  createdAt: z.coerce."}
              <span className="text-terminal-cyan/40">date</span>
              {"(),"}
            </div>
            <div>{"});"}</div>
          </div>
        </TerminalWindow>
      </div>

      <div className="absolute bottom-[12%] left-4">
        <TerminalWindow title="zsh" delay={6}>
          <div className="space-y-1">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 6.2, duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <span className="text-terminal-green/60">$</span>
              <span>bun run build</span>
              <motion.span
                className="h-3 w-1.5 bg-terminal-cyan/40"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: 3, repeatType: "reverse" }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 6.8, duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <span className="text-terminal-green/60">$</span>
              <span>bun test --coverage</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 7.4, duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <span className="text-terminal-green/60">$</span>
              <span>turbo run lint --filter=...</span>
            </motion.div>
          </div>
        </TerminalWindow>
      </div>

      <div className="absolute left-[40%] top-[35%] font-mono text-[8px] text-foreground/10">
        <motion.div
          animate={{ opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        >
          <span className="text-terminal-cyan/30">Record</span>
          {"<string, unknown>"}
        </motion.div>
      </div>

      <div className="absolute right-[15%] top-[35%] font-mono text-[8px] text-foreground/10">
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: 1,
          }}
        >
          <span className="text-terminal-cyan/30">Awaited</span>
          {"<ReturnType<typeof fn>>"}
        </motion.div>
      </div>

      <div className="absolute left-[55%] top-[28%] font-mono text-[8px] text-foreground/10">
        <motion.div
          animate={{ opacity: [0.08, 0.2, 0.08] }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            delay: 2,
          }}
        >
          <span className="text-terminal-cyan/30">Partial</span>
          {"<Omit<T, 'id'>>"}
        </motion.div>
      </div>

      <div className="absolute bottom-[55%] left-[45%] font-mono text-[8px] text-foreground/10">
        <motion.div
          animate={{ opacity: [0.08, 0.18, 0.08] }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            delay: 0.5,
          }}
        >
          <span className="text-terminal-magenta/30">import</span>
          {" { Hono } "}
          <span className="text-terminal-magenta/30">from</span>
          {" 'hono'"}
        </motion.div>
      </div>

      <div className="absolute bottom-[45%] right-[18%] font-mono text-[8px] text-foreground/10">
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{
            duration: 4.5,
            repeat: Number.POSITIVE_INFINITY,
            delay: 1.5,
          }}
        >
          <span className="text-terminal-yellow/30">@ts-expect-error</span>
        </motion.div>
      </div>

      <div className="absolute bottom-[60%] left-[25%] font-mono text-[8px] text-foreground/10">
        <motion.div
          animate={{ opacity: [0.08, 0.18, 0.08] }}
          transition={{
            duration: 5.5,
            repeat: Number.POSITIVE_INFINITY,
            delay: 3,
          }}
        >
          <span className="text-muted/30">{"// biome-ignore lint:"}</span>
        </motion.div>
      </div>

      <div className="absolute left-[65%] top-[60%] font-mono text-[8px] text-foreground/10">
        <motion.div
          animate={{ opacity: [0.08, 0.18, 0.08] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: 2.5,
          }}
        >
          <span className="text-terminal-green/30">$</span> bun add -d
        </motion.div>
      </div>

      <div className="absolute bottom-[40%] left-[50%] font-mono text-[8px] text-foreground/10">
        <motion.div
          animate={{ opacity: [0.08, 0.15, 0.08] }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            delay: 1.8,
          }}
        >
          <span className="text-terminal-cyan/30">NoInfer</span>
          {"<T>"}
        </motion.div>
      </div>

      <div className="absolute right-8 top-1/3 flex flex-col gap-1">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((lineIndex) => (
          <motion.div
            key={`decorative-line-${lineIndex}`}
            className="h-px bg-terminal-cyan/10"
            initial={{ width: 0 }}
            animate={{ width: `${12 + lineIndex * 3}px` }}
            transition={{ delay: 2 + lineIndex * 0.06, duration: 0.5 }}
          />
        ))}
      </div>

      <div className="absolute right-16 top-[8%] font-mono text-[7px] text-foreground/10">
        {["01001000", "01100101", "01101100", "01101111", "00100001"].map(
          (binary, binaryIndex) => (
            <motion.div
              key={`binary-${binaryIndex}-${binary}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{
                delay: binaryIndex * 1.5,
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
              }}
              className="text-terminal-green/30"
            >
              {binary}
            </motion.div>
          ),
        )}
      </div>

      <motion.div
        className="absolute right-1/4 top-1/2 h-2 w-2 rounded-full bg-terminal-cyan/20"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute left-1/3 top-1/4 h-1 w-1 rounded-full bg-terminal-magenta/25"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 2.5,
          repeat: Number.POSITIVE_INFINITY,
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 h-1.5 w-1.5 rounded-full bg-terminal-green/20"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          delay: 1,
        }}
      />
      <motion.div
        className="absolute left-1/2 top-1/3 h-1 w-1 rounded-full bg-terminal-yellow/20"
        animate={{
          scale: [1, 2.5, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 3.5,
          repeat: Number.POSITIVE_INFINITY,
          delay: 1.5,
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 h-1.5 w-1.5 rounded-full bg-terminal-cyan/15"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.12, 0.28, 0.12],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          delay: 2,
        }}
      />
      <motion.div
        className="absolute left-[20%] top-[60%] h-1 w-1 rounded-full bg-terminal-magenta/20"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 3.2,
          repeat: Number.POSITIVE_INFINITY,
          delay: 0.8,
        }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[40%] h-1.5 w-1.5 rounded-full bg-terminal-green/15"
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.12, 0.25, 0.12],
        }}
        transition={{
          duration: 2.8,
          repeat: Number.POSITIVE_INFINITY,
          delay: 2.5,
        }}
      />

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
        <div className="flex gap-0.5">
          {Array.from({ length: 30 }, (_, i) => i + 1).map((barIndex) => (
            <motion.div
              key={`equalizer-bar-${barIndex}`}
              className="w-0.5 bg-terminal-cyan/10"
              animate={{
                height: [6, 10 + (barIndex % 10) * 1.5, 6],
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                delay: barIndex * 0.03,
              }}
            />
          ))}
        </div>
      </div>

      <svg
        className="absolute left-[20%] top-16 h-28 w-28 text-terminal-cyan/5"
        aria-hidden="true"
      >
        <motion.circle
          cx="56"
          cy="56"
          r="52"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="327"
          initial={{ strokeDashoffset: 327 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 3, delay: 2, ease: "easeInOut" }}
        />
      </svg>

      <svg
        className="absolute bottom-24 right-[25%] h-20 w-20 text-terminal-magenta/5"
        aria-hidden="true"
      >
        <motion.rect
          x="10"
          y="10"
          width="60"
          height="60"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 3, ease: "easeInOut" }}
        />
      </svg>

      <svg
        className="absolute bottom-[30%] left-[35%] h-16 w-16 text-terminal-green/5"
        aria-hidden="true"
      >
        <motion.polygon
          points="32,4 60,56 4,56"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
        />
      </svg>

      <svg
        className="absolute right-[10%] top-[45%] h-12 w-12 text-terminal-yellow/5"
        aria-hidden="true"
      >
        <motion.line
          x1="0"
          y1="24"
          x2="48"
          y2="24"
          stroke="currentColor"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 4.5 }}
        />
        <motion.line
          x1="24"
          y1="0"
          x2="24"
          y2="48"
          stroke="currentColor"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 5 }}
        />
      </svg>
    </div>
  );
};
