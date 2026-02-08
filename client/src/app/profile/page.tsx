"use client";

import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ScrollReveal } from "@/components/ScrollReveal";

const experiences = [
  {
    period: "2020 — Present",
    role: "Senior Software Engineer / Tech Lead",
    company: "Tech Company Inc.",
    description:
      "フロントエンドチームのリードとして、大規模Webアプリケーションの設計・開発を担当。チームビルディングとメンタリングにも注力。",
  },
  {
    period: "2018 — 2020",
    role: "Software Engineer",
    company: "Startup Inc.",
    description:
      "新規プロダクトの立ち上げから運用まで担当。フルスタックでの開発経験を積む。",
  },
  {
    period: "2016 — 2018",
    role: "Junior Engineer",
    company: "Web Agency",
    description:
      "Webサイト制作とCMS開発を担当。クライアントワークを通じて多様な業界の課題解決に携わる。",
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
                  10年以上のソフトウェア開発経験を持つエンジニアです。
                  フロントエンドからバックエンド、インフラまで幅広い技術スタックを扱います。
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-[15px] leading-relaxed text-foreground/70">
                  現在はテックリードとして、チームの技術的な意思決定をリードしながら、
                  自らも手を動かしてプロダクト開発に携わっています。
                  ユーザーファーストな開発姿勢と、チームの成長を大切にしながら、
                  価値あるプロダクトを生み出すことに情熱を注いでいます。
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="mt-32 px-8">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <h2 className="text-[11px] uppercase tracking-widest text-foreground/70">
                Experience
              </h2>
            </ScrollReveal>

            <div className="mt-12 space-y-0">
              {experiences.map((exp, index) => (
                <ScrollReveal key={exp.period} delay={index * 0.1}>
                  <motion.div
                    className="grid grid-cols-1 gap-6 border-t border-border py-12 md:grid-cols-12"
                    whileHover={{ backgroundColor: "var(--hover)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="md:col-span-3">
                      <span className="text-[13px] text-foreground/70">
                        {exp.period}
                      </span>
                    </div>
                    <div className="md:col-span-9">
                      <h3 className="text-[18px] font-semibold">{exp.role}</h3>
                      <p className="mt-1 text-[14px] text-foreground/70">
                        {exp.company}
                      </p>
                      <p className="mt-4 text-[14px] leading-relaxed text-foreground/70">
                        {exp.description}
                      </p>
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
