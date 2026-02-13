"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PageTransition } from "@/components/PageTransition";
import { ScrollReveal } from "@/components/ScrollReveal";

const hobbies = [
  {
    title: "アミューズメントカジノ",
    icon: "🃏",
    iconType: "emoji" as const,
    description:
      "アミューズメントカジノが好きで、2年間ディーラーとして働いていたほど。ブラックジャックやバカラなど、ゲームの駆け引きや場の雰囲気が楽しいです。",
    skills: ["ブラックジャック", "バカラ", "ルーレット", "テキサスホールデム"],
    bgColor: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "将棋",
    icon: "/shogi-icon.svg",
    iconType: "image" as const,
    description:
      "将棋ウォーズで日々対局を楽しんでいます。まだまだ初心者なので何が正解か分からないまま、気ままにカジュアルに指しています。",
    skills: ["将棋ウォーズ 3級", "四間飛車党"],
    bgColor: "from-amber-500/20 to-orange-500/20",
  },
];

export default function HobbiesPage() {
  return (
    <PageTransition>
      <main className="min-h-screen pt-32">
        <section className="px-8">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <span className="text-[11px] uppercase tracking-widest text-foreground/70">
                Off the Clock
              </span>
              <h1 className="mt-2 text-[clamp(3rem,10vw,8rem)] font-bold leading-none tracking-tighter">
                Hobbies
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-foreground/70">
                仕事以外の時間は、こんなことを楽しんでいます。
                意外な一面かもしれませんが、これも私の大切な部分です。
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="mt-24 px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {hobbies.map((hobby, index) => (
                <ScrollReveal key={hobby.title} delay={index * 0.15}>
                  <motion.div
                    className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${hobby.bgColor} p-8`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6">
                      {hobby.iconType === "emoji" ? (
                        <span className="text-6xl">{hobby.icon}</span>
                      ) : (
                        <Image
                          src={hobby.icon}
                          alt={hobby.title}
                          width={64}
                          height={64}
                          className="invert dark:invert-0 opacity-80"
                        />
                      )}
                    </div>
                    <h3 className="text-2xl font-bold">{hobby.title}</h3>
                    <p className="mt-4 text-[14px] leading-relaxed text-foreground/80">
                      {hobby.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {hobby.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-foreground/10 px-4 py-2 text-[12px] font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-32 px-8 pb-32">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="rounded-3xl border border-border bg-foreground/5 p-12 text-center">
                <p className="text-[20px] font-medium leading-relaxed">
                  「仕事も遊びも全力で」
                </p>
                <p className="mt-4 text-[14px] text-foreground/70">
                  オンとオフの切り替えを大切にしながら、
                  どちらも楽しんでいます。
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
