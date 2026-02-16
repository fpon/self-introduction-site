"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { works } from "@/components/brains/brains-works-section";
import { PageTransition } from "@/components/PageTransition";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function WorkDetailPage() {
  const params = useParams();
  const work = works.find((w) => w.id === params.slug);

  if (!work) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="font-mono text-foreground/70">
          $ cat project.txt: No such file or directory
        </p>
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
                className="inline-flex items-center gap-2 font-mono text-[13px] opacity-70 transition-opacity hover:opacity-100"
              >
                $ cd /works ←
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
              <span className="font-mono text-[11px] text-dracula-green">
                $ cat overview.txt
              </span>
              <p className="mt-4 text-[20px] leading-relaxed">
                {work.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <span className="font-mono text-[11px] text-dracula-cyan">
                    役割
                  </span>
                  <p className="mt-2 text-[15px]">リード開発者 / PM</p>
                </div>
                <div>
                  <span className="font-mono text-[11px] text-dracula-cyan">
                    時期
                  </span>
                  <p className="mt-2 text-[15px]">{work.year}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-16">
                <span className="font-mono text-[11px] text-dracula-green">
                  $ cat package.json | jq '.dependencies'
                </span>
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
                <span className="font-mono text-[11px] text-dracula-green">
                  $ cat README.md
                </span>
                <div className="mt-6 space-y-6 text-[15px] leading-relaxed text-foreground/70">
                  <p>
                    このプロジェクトでは、顧客課題の解像度を高め、要件定義から実装まで一気通貫で担当しました。
                    ユーザー体験を最優先に考え、直感的で使いやすいインターフェースを設計しています。
                  </p>
                  <p>
                    チームのリードとして、アーキテクチャの設計から実装、テスト、デプロイまで一貫して担当。
                    上流工程での納期調整やチームメンバーのマネジメントも行いました。
                  </p>
                  <p>泥臭くやり抜く姿勢で、プロジェクトを成功に導きました。</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="border-t border-border px-8 py-24">
          <ScrollReveal>
            <span className="font-mono text-[11px] text-dracula-green">
              $ ls ./other-projects
            </span>
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
