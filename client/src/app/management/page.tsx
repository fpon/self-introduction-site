"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PageTransition } from "@/components/PageTransition";
import { ScrollReveal } from "@/components/ScrollReveal";

const categories = ["All", "1on1", "Team Building", "Feedback", "Leadership"];

const resources = [
  {
    id: "1on1-guide",
    title: "1on1ミーティング完全ガイド",
    category: "1on1",
    type: "PDF",
    description:
      "効果的な1on1を実施するためのフレームワークとチェックリスト。準備から実施、フォローアップまでを網羅。",
    date: "2024.01",
  },
  {
    id: "team-building",
    title: "リモート時代のチームビルディング",
    category: "Team Building",
    type: "Article",
    description:
      "分散チームでも強い絆を築くための実践的なアプローチと具体的な施策をまとめました。",
    date: "2023.11",
  },
  {
    id: "feedback-technique",
    title: "フィードバックの技術",
    category: "Feedback",
    type: "Slide",
    description:
      "建設的なフィードバックを行うためのテクニック。SBI法やI-Messageなど、実践的な手法を解説。",
    date: "2023.09",
  },
  {
    id: "leadership-101",
    title: "テックリードのためのリーダーシップ入門",
    category: "Leadership",
    type: "PDF",
    description:
      "技術者からリーダーへの転身に必要なマインドセットとスキルセットを解説。",
    date: "2023.07",
  },
  {
    id: "goal-setting",
    title: "OKRとMBOの使い分け",
    category: "Leadership",
    type: "Article",
    description:
      "目標設定フレームワークの選び方と、チームの状況に応じた活用方法を解説。",
    date: "2023.05",
  },
  {
    id: "conflict-resolution",
    title: "チーム内コンフリクトの解決法",
    category: "Team Building",
    type: "Slide",
    description:
      "建設的な議論を促進し、チームの対立を成長の機会に変えるためのガイド。",
    date: "2023.03",
  },
];

export default function ManagementPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredResources =
    activeCategory === "All"
      ? resources
      : resources.filter((r) => r.category === activeCategory);

  return (
    <PageTransition>
      <main className="min-h-screen pt-32">
        <section className="px-8">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <span className="text-[11px] uppercase tracking-widest text-muted">
                Resources
              </span>
              <h1 className="mt-2 text-[clamp(3rem,10vw,8rem)] font-bold leading-none tracking-tighter">
                Management
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-muted">
                マネジメントに関する学習のアウトプットをまとめています。
                チームビルディング、1on1、フィードバックなど、
                実践で得た知見を共有しています。
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-12 flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-full border px-5 py-2 text-[12px] transition-all ${
                      activeCategory === cat
                        ? "border-foreground bg-foreground text-background"
                        : "border-border text-muted hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="mt-24 px-8">
          <div className="mx-auto max-w-5xl">
            <div className="space-y-0">
              {filteredResources.map((resource, index) => (
                <ScrollReveal key={resource.id} delay={index * 0.05}>
                  <motion.div
                    className="group grid cursor-pointer grid-cols-1 gap-4 border-t border-border py-8 md:grid-cols-12"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="md:col-span-2">
                      <span className="text-[12px] text-muted">
                        {resource.date}
                      </span>
                    </div>
                    <div className="md:col-span-7">
                      <div className="flex items-center gap-3">
                        <h3 className="text-[18px] font-medium transition-colors group-hover:text-muted">
                          {resource.title}
                        </h3>
                        <span className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted">
                          {resource.type}
                        </span>
                      </div>
                      <p className="mt-2 text-[13px] leading-relaxed text-muted">
                        {resource.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-end md:col-span-3">
                      <span className="text-[12px] text-muted">
                        {resource.category}
                      </span>
                      <motion.span
                        className="ml-4 text-lg"
                        initial={{ x: 0, opacity: 0.5 }}
                        whileHover={{ x: 5, opacity: 1 }}
                      >
                        →
                      </motion.span>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-32 border-t border-border px-8 py-24">
          <div className="mx-auto max-w-5xl text-center">
            <ScrollReveal>
              <h2 className="text-[clamp(2rem,6vw,4rem)] font-bold leading-tight tracking-tighter">
                Share Your Thoughts
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[14px] leading-relaxed text-muted">
                資料に関するご質問やフィードバックがあれば、
                お気軽にご連絡ください。
              </p>
              <a
                href="mailto:your@email.com"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-foreground px-8 py-4 text-[13px] font-medium transition-colors hover:bg-foreground hover:text-background"
              >
                Get in Touch →
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
