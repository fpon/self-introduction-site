"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { HiDocumentDownload, HiFolder, HiFolderOpen } from "react-icons/hi";
import { PageTransition } from "@/components/PageTransition";
import { ScrollReveal } from "@/components/ScrollReveal";

type KnowledgeItem = {
  id: string;
  title: string;
  description: string;
  pdfUrl?: string;
};

type KnowledgeSection = {
  id: string;
  title: string;
  items: KnowledgeItem[];
};

const knowledgeSections: KnowledgeSection[] = [
  {
    id: "section-1",
    title: "組織マネジメント",
    items: [
      {
        id: "item-1-1",
        title: "1on1ミーティングの進め方",
        description: "効果的な1on1を実施するためのガイドライン",
        pdfUrl: "/knowledge/test.pdf",
      },
      {
        id: "item-1-2",
        title: "チームビルディング手法",
        description: "チームの信頼関係を構築するための施策",
        pdfUrl: "/knowledge/test.pdf",
      },
    ],
  },
  {
    id: "section-2",
    title: "プロジェクトマネジメント",
    items: [
      {
        id: "item-2-1",
        title: "スクラム運用ガイド",
        description: "スクラム開発の実践的な運用方法",
        pdfUrl: "/knowledge/test.pdf",
      },
    ],
  },
  {
    id: "section-3",
    title: "技術ナレッジ",
    items: [
      {
        id: "item-3-1",
        title: "準備中",
        description: "コンテンツを準備中です",
      },
    ],
  },
];

const SectionFolder = ({ section }: { section: KnowledgeSection }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="font-mono">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center gap-2 py-2 text-left transition-colors hover:text-dracula-cyan"
      >
        {isOpen ? (
          <HiFolderOpen className="h-5 w-5 text-dracula-yellow" />
        ) : (
          <HiFolder className="h-5 w-5 text-dracula-yellow" />
        )}
        <span className="text-[15px] font-medium">{section.title}/</span>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="ml-7 border-l border-border pl-4"
        >
          {section.items.map((item) => (
            <div
              key={item.id}
              className="group flex items-start justify-between gap-4 py-3"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[14px] text-foreground/90">
                    {item.title}
                  </span>
                </div>
                <p className="mt-1 text-[12px] text-foreground/50">
                  {item.description}
                </p>
              </div>
              {item.pdfUrl && (
                <a
                  href={item.pdfUrl}
                  download
                  className="flex items-center gap-1 rounded-md bg-dracula-green/10 px-3 py-1.5 text-[12px] text-dracula-green transition-colors hover:bg-dracula-green/20"
                >
                  <HiDocumentDownload className="h-4 w-4" />
                  PDF
                </a>
              )}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default function KnowledgePage() {
  return (
    <PageTransition>
      <main className="min-h-screen pt-32">
        <section className="px-8">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <span className="font-mono text-[11px] text-dracula-green">
                $ ls -la ./knowledge
              </span>
              <h1 className="mt-2 text-[clamp(3rem,10vw,8rem)] font-bold leading-none tracking-tighter">
                ナレッジ
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-foreground/70">
                マネジメントや開発で得たナレッジをまとめています。
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="mt-16 px-8 pb-32">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal delay={0.3}>
              <div className="rounded-2xl border border-border bg-foreground/[0.02] p-6">
                <div className="mb-4 flex items-center gap-2 border-b border-border pb-4 font-mono text-[12px] text-foreground/50">
                  <span>~/knowledge</span>
                </div>
                <div className="space-y-2">
                  {knowledgeSections.map((section) => (
                    <SectionFolder key={section.id} section={section} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
