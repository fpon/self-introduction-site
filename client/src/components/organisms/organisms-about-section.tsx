import type { MotionValue } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";
import type { RefObject } from "react";
import type { IconType } from "react-icons";
import { HiUsers } from "react-icons/hi";
import {
  SiNextdotjs,
  SiPrisma,
  SiPython,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { ScrollReveal, TextReveal } from "@/components/ScrollReveal";

const skills: {
  name: string;
  color: string;
  icon: IconType;
}[] = [
  { name: "TypeScript", color: "#3178C6", icon: SiTypescript },
  { name: "Next.js", color: "#ffffff", icon: SiNextdotjs },
  { name: "TailwindCSS", color: "#38BDF8", icon: SiTailwindcss },
  { name: "Prisma", color: "#2D3748", icon: SiPrisma },
  { name: "Python / FastAPI", color: "#306998", icon: SiPython },
  { name: "チームマネジメント", color: "#A78BFA", icon: HiUsers },
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
              <span className="font-mono text-[11px] text-dracula-green">
                $ whoami
              </span>
              <h2 className="mt-2 text-[clamp(2rem,6vw,4rem)] font-bold leading-tight tracking-tighter">
                <TextReveal delay={0.2}>自己紹介</TextReveal>
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
                className="mt-8 inline-flex items-center gap-2 font-mono text-[13px] text-dracula-cyan transition-opacity hover:opacity-60"
              >
                $ cd /profile <span>→</span>
              </Link>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal delay={0.3}>
              <span className="font-mono text-[11px] text-dracula-green">
                $ cat skills.txt
              </span>
            </ScrollReveal>
            <div className="mt-6 space-y-5">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <ScrollReveal key={skill.name} delay={0.4 + index * 0.1}>
                    <div className="group relative">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-md"
                          style={{ backgroundColor: `${skill.color}20` }}
                        >
                          <Icon
                            className="h-4 w-4"
                            style={{ color: skill.color }}
                          />
                        </div>
                        <span className="text-[13px] font-medium">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
