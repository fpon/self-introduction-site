import type { MotionValue } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";
import type { RefObject } from "react";
import { ScrollReveal, TextReveal } from "@/components/ScrollReveal";

const skills = [
  { name: "TypeScript", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "TailwindCSS", level: 90 },
  { name: "Prisma", level: 85 },
  { name: "FastAPI / Python", level: 80 },
  { name: "チームマネジメント", level: 85 },
];

type OrganismsAboutSectionProps = {
  containerRef: RefObject<HTMLElement | null>;
  x: MotionValue<string>;
};

export const OrganismsAboutSection = ({
  containerRef,
  x,
}: OrganismsAboutSectionProps) => {
  return (
    <section ref={containerRef} className="relative overflow-hidden py-32">
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap text-[20vw] font-bold text-foreground/[0.02]"
        style={{ x }}
      >
        ABOUT ME • ABOUT ME • ABOUT ME •
      </motion.div>

      <div className="relative z-10 px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <ScrollReveal>
              <span className="text-[11px] uppercase tracking-widest text-foreground/70">
                About
              </span>
              <h2 className="mt-2 text-[clamp(2rem,6vw,4rem)] font-bold leading-tight tracking-tighter">
                <TextReveal delay={0.2}>Crafting Digital</TextReveal>
                <br />
                <TextReveal delay={0.3}>Experiences</TextReveal>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="mt-8 text-[15px] leading-relaxed text-foreground/70">
                AIとWebを融合させ、システムにより生産に集中できる環境を提供するエンジニアです。
                要件定義から実装まで一気通貫で担当し、1000万円規模の案件を成功に導いてきました。
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-foreground/70">
                顧客課題の解像度を高め、泥臭くやり抜く姿勢を大切にしています。
                累計6名のメンバー教育経験を通じて、チームの成長にも貢献しています。
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <Link
                href="/profile"
                className="mt-8 inline-flex items-center gap-2 text-[13px] font-medium underline underline-offset-4 transition-opacity hover:opacity-60"
              >
                Read More <span>→</span>
              </Link>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal delay={0.3}>
              <span className="text-[11px] uppercase tracking-widest text-foreground/70">
                Skills
              </span>
            </ScrollReveal>
            <div className="mt-6 space-y-6">
              {skills.map((skill, index) => (
                <ScrollReveal key={skill.name} delay={0.4 + index * 0.1}>
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] font-medium">
                      {skill.name}
                    </span>
                    <span className="text-[12px] text-foreground/70">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="mt-2 h-px bg-border">
                    <motion.div
                      className="h-full bg-foreground"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: 0.5 + index * 0.1,
                        ease: [0.76, 0, 0.24, 1],
                      }}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
