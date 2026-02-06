"use client";

import { motion } from "framer-motion";

export const BackgroundEffects = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="absolute inset-0 bg-noise opacity-[0.015]" />

      <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full border border-foreground/5" />
      <div className="absolute -right-16 top-1/4 h-64 w-64 rounded-full border border-foreground/5" />
      <div className="absolute -right-8 top-1/4 h-48 w-48 rounded-full border border-dashed border-foreground/5" />

      <div className="absolute -left-48 bottom-1/4 h-[500px] w-[500px]">
        <div className="h-full w-full rotate-45 border border-foreground/5" />
      </div>

      <div className="absolute left-6 top-[15%] font-mono text-[10px] text-foreground/15">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="space-y-0.5"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
          >
            {"type Result<T, E> ="}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
          >
            {"  | { ok: true; value: T }"}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6 }}
          >
            {"  | { ok: false; error: E };"}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute right-8 top-[20%] font-mono text-[10px] text-foreground/15">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="space-y-0.5"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.7 }}
          >
            {"const config = {"}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.9 }}
          >
            {"  runtime: 'edge',"}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.1 }}
          >
            {"  regions: ['nrt1'],"}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.3 }}
          >
            {"} satisfies Config;"}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute left-8 top-[45%] font-mono text-[10px] text-foreground/15">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="space-y-0.5"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.7 }}
          >
            {"const res = await fetch(url);"}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.9 }}
          >
            {"if (!res.ok) {"}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.1 }}
          >
            {"  throw new HTTPError(res);"}
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
            {"return res.json() as Promise<T>;"}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute right-6 top-[55%] font-mono text-[10px] text-foreground/15">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 4, duration: 1 }}
          className="space-y-0.5"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.2 }}
          >
            {"type Brand<T, B> ="}
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
            {"type UserId ="}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.8 }}
          >
            {"  Brand<string, 'UserId'>;"}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-[28%] left-6 font-mono text-[9px] text-foreground/12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 1 }}
          className="space-y-0.5"
        >
          <div>{"// Discriminated Union"}</div>
          <div>{"type Action ="}</div>
          <div>{"  | { type: 'increment' }"}</div>
          <div>{"  | { type: 'set'; value: number };"}</div>
        </motion.div>
      </div>

      <div className="absolute bottom-[20%] right-8 font-mono text-[9px] text-foreground/12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.5, duration: 1 }}
          className="space-y-0.5"
        >
          <div>{"const schema = z.object({"}</div>
          <div>{"  id: z.string().uuid(),"}</div>
          <div>{"  createdAt: z.coerce.date(),"}</div>
          <div>{"});"}</div>
        </motion.div>
      </div>

      <div className="absolute left-[15%] top-[70%] font-mono text-[9px] text-foreground/12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1 }}
          className="space-y-0.5"
        >
          <div>{"const routes = ["}</div>
          <div>{"  '/api/users/:id',"}</div>
          <div>{"  '/api/posts/*',"}</div>
          <div>{"] as const;"}</div>
        </motion.div>
      </div>

      <div className="absolute right-[20%] top-[75%] font-mono text-[9px] text-foreground/10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.8, duration: 1 }}
        >
          {"data ?? fallback"}
        </motion.div>
      </div>

      <div className="absolute left-[40%] top-[35%] font-mono text-[8px] text-foreground/10">
        <motion.div
          animate={{ opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        >
          {"Record<string, unknown>"}
        </motion.div>
      </div>

      <div className="absolute right-[10%] top-[32%] font-mono text-[8px] text-foreground/10">
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: 1,
          }}
        >
          {"Awaited<ReturnType<typeof fn>>"}
        </motion.div>
      </div>

      <div className="absolute left-[60%] top-[25%] font-mono text-[8px] text-foreground/10">
        <motion.div
          animate={{ opacity: [0.08, 0.2, 0.08] }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            delay: 2,
          }}
        >
          {"Partial<Omit<T, 'id'>>"}
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
          {"import { Hono } from 'hono'"}
        </motion.div>
      </div>

      <div className="absolute right-[15%] bottom-[45%] font-mono text-[8px] text-foreground/10">
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{
            duration: 4.5,
            repeat: Number.POSITIVE_INFINITY,
            delay: 1.5,
          }}
        >
          {"@ts-expect-error"}
        </motion.div>
      </div>

      <div className="absolute left-[25%] bottom-[60%] font-mono text-[8px] text-foreground/10">
        <motion.div
          animate={{ opacity: [0.08, 0.18, 0.08] }}
          transition={{
            duration: 5.5,
            repeat: Number.POSITIVE_INFINITY,
            delay: 3,
          }}
        >
          {"// biome-ignore lint:"}
        </motion.div>
      </div>

      <div className="absolute left-[70%] top-[60%] font-mono text-[8px] text-foreground/10">
        <motion.div
          animate={{ opacity: [0.08, 0.18, 0.08] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: 2.5,
          }}
        >
          {"bun add -d"}
        </motion.div>
      </div>

      <div className="absolute left-[55%] bottom-[40%] font-mono text-[8px] text-foreground/10">
        <motion.div
          animate={{ opacity: [0.08, 0.15, 0.08] }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            delay: 1.8,
          }}
        >
          {"NoInfer<T>"}
        </motion.div>
      </div>

      <div className="absolute right-8 top-1/3 flex flex-col gap-1">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((lineIndex) => (
          <motion.div
            key={`decorative-line-${lineIndex}`}
            className="h-px bg-foreground/10"
            initial={{ width: 0 }}
            animate={{ width: `${12 + lineIndex * 3}px` }}
            transition={{ delay: 2 + lineIndex * 0.06, duration: 0.5 }}
          />
        ))}
      </div>

      <div className="absolute bottom-[12%] left-12 font-mono text-[8px] text-foreground/12">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 6, duration: 0.5 }}
        >
          $ bun run build
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 6.5, duration: 0.5 }}
        >
          $ bun test --coverage
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 7, duration: 0.5 }}
        >
          $ turbo run lint --filter=...
        </motion.div>
      </div>

      <div className="absolute right-16 top-[10%] font-mono text-[7px] text-foreground/10">
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
            >
              {binary}
            </motion.div>
          ),
        )}
      </div>

      <motion.div
        className="absolute right-1/4 top-1/2 h-2 w-2 rounded-full bg-foreground/20"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute left-1/3 top-1/4 h-1 w-1 rounded-full bg-foreground/25"
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
        className="absolute bottom-1/4 right-1/3 h-1.5 w-1.5 rounded-full bg-foreground/20"
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
        className="absolute left-1/2 top-1/3 h-1 w-1 rounded-full bg-foreground/20"
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
        className="absolute right-1/4 bottom-1/3 h-1.5 w-1.5 rounded-full bg-foreground/15"
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
        className="absolute left-[20%] top-[60%] h-1 w-1 rounded-full bg-foreground/20"
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
        className="absolute right-[40%] bottom-[20%] h-1.5 w-1.5 rounded-full bg-foreground/15"
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
              className="w-0.5 bg-foreground/10"
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
        className="absolute left-[20%] top-16 h-28 w-28 text-foreground/5"
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
        className="absolute right-[25%] bottom-24 h-20 w-20 text-foreground/5"
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
        className="absolute left-[35%] bottom-[30%] h-16 w-16 text-foreground/5"
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
        className="absolute right-[10%] top-[45%] h-12 w-12 text-foreground/5"
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
