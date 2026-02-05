"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PageTransition } from "@/components/PageTransition";
import { ScrollReveal } from "@/components/ScrollReveal";
import { works } from "@/organisms/WorksSection";

export default function WorkDetailPage() {
  const params = useParams();
  const work = works.find((w) => w.id === params.slug);

  if (!work) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>Work not found</p>
      </main>
    );
  }

  const otherWorks = works.filter((w) => w.id !== work.id).slice(0, 2);

  return (
    <PageTransition>
      <main className="min-h-screen">
        <section
          className="relative flex min-h-[70vh] items-end pb-16 pt-32"
          style={{ backgroundColor: work.color }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[30vw] font-bold text-white/10">
              {work.title.split(" ")[1]?.charAt(0) || work.title.charAt(0)}
            </span>
          </div>
          <div className="relative z-10 px-8 text-white">
            <ScrollReveal>
              <Link
                href="/works"
                className="inline-flex items-center gap-2 text-[13px] opacity-70 transition-opacity hover:opacity-100"
              >
                ← Back to Works
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <span className="mt-8 block text-[11px] uppercase tracking-widest opacity-70">
                {work.category} — {work.year}
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h1 className="mt-2 text-[clamp(3rem,10vw,7rem)] font-bold leading-none tracking-tighter">
                {work.title}
              </h1>
            </ScrollReveal>
          </div>
        </section>

        <section className="px-8 py-24">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <h2 className="text-[11px] uppercase tracking-widest text-muted">
                Overview
              </h2>
              <p className="mt-4 text-[20px] leading-relaxed">
                {work.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-[11px] uppercase tracking-widest text-muted">
                    Role
                  </h3>
                  <p className="mt-2 text-[15px]">Lead Developer</p>
                </div>
                <div>
                  <h3 className="text-[11px] uppercase tracking-widest text-muted">
                    Timeline
                  </h3>
                  <p className="mt-2 text-[15px]">{work.year}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-16">
                <h3 className="text-[11px] uppercase tracking-widest text-muted">
                  Technologies
                </h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-4 py-2 text-[13px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="mt-24">
                <h3 className="text-[11px] uppercase tracking-widest text-muted">
                  Project Details
                </h3>
                <div className="mt-6 space-y-6 text-[15px] leading-relaxed text-muted">
                  <p>
                    このプロジェクトでは、ユーザー体験を最優先に考え、直感的で使いやすいインターフェースを設計しました。
                    最新の技術スタックを採用し、パフォーマンスと保守性の両立を実現しています。
                  </p>
                  <p>
                    開発チームのリードとして、アーキテクチャの設計から実装、テスト、デプロイまで一貫して担当。
                    アジャイル開発手法を取り入れ、継続的な改善を行いました。
                  </p>
                  <p>
                    プロジェクトの成功により、ユーザー満足度の大幅な向上と、
                    運用コストの削減を同時に達成することができました。
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="border-t border-border px-8 py-24">
          <ScrollReveal>
            <h2 className="text-[11px] uppercase tracking-widest text-muted">
              Other Works
            </h2>
          </ScrollReveal>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {otherWorks.map((otherWork, index) => (
              <ScrollReveal key={otherWork.id} delay={index * 0.1}>
                <Link href={`/works/${otherWork.id}`} className="group block">
                  <motion.div
                    className="relative aspect-video overflow-hidden"
                    style={{ backgroundColor: otherWork.color }}
                    whileHover={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[10vw] font-bold text-white/10">
                        {otherWork.title.split(" ")[1]?.charAt(0) ||
                          otherWork.title.charAt(0)}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-semibold">
                        {otherWork.title}
                      </h3>
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
