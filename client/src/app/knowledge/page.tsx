"use client";

import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ScrollReveal } from "@/components/ScrollReveal";

const knowledgeItems = [
  {
    id: "example-1",
    title: "準備中",
    category: "マネジメント",
    description: "コンテンツを準備中です。",
    date: "2025",
  },
];

export default function KnowledgePage() {
  return (
    <PageTransition>
      <main className="min-h-screen pt-32">
        <section className="px-8">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <span className="font-mono text-[11px] text-dracula-green">
                $ cat knowledge.md
              </span>
              <h1 className="mt-2 text-[clamp(3rem,10vw,8rem)] font-bold leading-none tracking-tighter">
                知見
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-foreground/70">
                マネジメントや開発で得た知見・ナレッジをまとめています。
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="mt-24 px-8 pb-32">
          <div className="mx-auto max-w-5xl">
            <div className="space-y-6">
              {knowledgeItems.map((item, index) => (
                <ScrollReveal key={item.id} delay={index * 0.1}>
                  <motion.div
                    className="group rounded-2xl border border-border p-8 transition-colors hover:bg-hover"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <span className="font-mono text-[11px] text-dracula-cyan">
                          {item.category}
                        </span>
                        <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
                        <p className="mt-2 text-[14px] text-foreground/70">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-[13px] text-foreground/50">
                        {item.date}
                      </span>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
