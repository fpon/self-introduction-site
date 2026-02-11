"use client";

import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ScrollReveal } from "@/components/ScrollReveal";

const milestones = [
  {
    date: "2019.3",
    title: "関西大倉高等学校 卒業",
    description: "",
  },
  {
    date: "2019.4",
    title: "龍谷大学 社会学部 コミュニティマネジメント学科 入学",
    description: "",
  },
  {
    date: "2022.10",
    title: "Sky Grid株式会社 インターン開始",
    description:
      "在学中にインターンとして開発業務に参画。社内SaaSプロジェクトでNext.js / TypeScript / Prismaを用いた開発を経験。",
  },
  {
    date: "2023.3",
    title: "龍谷大学 社会学部 コミュニティマネジメント学科 卒業",
    description:
      "地域社会の課題解決やコミュニティデザインを学習。社会調査の手法や、NPO・行政・企業の協働によるまちづくりについて研究。",
  },
  {
    date: "2023.4",
    title: "Sky Grid株式会社 入社",
    description:
      "受託開発・自社SaaSの開発に従事。独自AIチャットボット開発ではPMとして累計6名（同時最大5名）をマネジメント。Stripe決済やWebSocketを用いたリアルタイム通信の実装も担当。",
  },
  {
    date: "2025.12",
    title: "Sky Grid株式会社 退社",
    description: "",
  },
  {
    date: "2026.3",
    title: "株式会社フツパー 入社",
    description: "",
  },
];

const values = [
  {
    number: "01",
    title: "User First",
    description:
      "常にユーザーの視点に立ち、本当に価値のあるプロダクトを追求します。技術は手段であり、目的ではありません。",
  },
  {
    number: "02",
    title: "Continuous Growth",
    description:
      "技術の進化は止まりません。常に学び続け、新しい知識を吸収し、より良いソリューションを提供し続けます。",
  },
  {
    number: "03",
    title: "Team Empowerment",
    description:
      "一人の力には限界があります。チームの力を最大化し、共に成長することで、大きな成果を生み出します。",
  },
  {
    number: "04",
    title: "Quality & Craftsmanship",
    description:
      "細部にこだわり、高品質なコードを書くことを大切にしています。保守性と拡張性を常に意識した設計を心がけます。",
  },
];

export default function ProfilePage() {
  return (
    <PageTransition>
      <main className="min-h-screen pt-32">
        <section className="px-8">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <span className="text-[11px] uppercase tracking-widest text-foreground/70">
                About Me
              </span>
              <h1 className="mt-2 text-[clamp(3rem,10vw,8rem)] font-bold leading-none tracking-tighter">
                Profile
              </h1>
            </ScrollReveal>

            <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
              <ScrollReveal delay={0.2}>
                <p className="text-[20px] font-medium leading-relaxed">
                  AIとWebを融合させ、製造現場へ革新を届けるエンジニア。 龍谷大学
                  社会学部 コミュニティマネジメント学科卒業。
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-[15px] leading-relaxed text-foreground/70">
                  要件定義から実装まで一気通貫で担当し、顧客課題の解像度を高めながら
                  泥臭くやり抜く姿勢を大切にしています。
                  行動心理学等の理論を活用した戦略的導入と、継続的改善が回る仕組みづくりに注力。
                  累計6名のメンバー教育経験あり。
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="mt-32 px-8">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <h2 className="text-[11px] uppercase tracking-widest text-foreground/70">
                Timeline
              </h2>
            </ScrollReveal>

            <div className="mt-12 space-y-0">
              {milestones.map((milestone, index) => (
                <ScrollReveal key={milestone.date} delay={index * 0.1}>
                  <motion.div
                    className="grid grid-cols-1 gap-6 border-t border-border py-12 md:grid-cols-12"
                    whileHover={{ backgroundColor: "var(--hover)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="md:col-span-3">
                      <span className="text-[13px] text-foreground/70">
                        {milestone.date}
                      </span>
                    </div>
                    <div className="md:col-span-9">
                      <h3 className="text-[18px] font-semibold">
                        {milestone.title}
                      </h3>
                      {milestone.description && (
                        <p className="mt-4 text-[14px] leading-relaxed text-foreground/70">
                          {milestone.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-32 bg-foreground px-8 py-32 text-background">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <h2 className="text-[11px] uppercase tracking-widest opacity-60">
                Values
              </h2>
              <p className="mt-4 text-[clamp(2rem,6vw,4rem)] font-bold leading-tight tracking-tighter">
                What I Believe In
              </p>
            </ScrollReveal>

            <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
              {values.map((value, index) => (
                <ScrollReveal key={value.number} delay={index * 0.1}>
                  <div>
                    <span className="text-[48px] font-bold opacity-20">
                      {value.number}
                    </span>
                    <h3 className="mt-2 text-[20px] font-semibold">
                      {value.title}
                    </h3>
                    <p className="mt-4 text-[14px] leading-relaxed opacity-70">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
