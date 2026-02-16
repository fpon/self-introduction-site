import { motion } from "framer-motion";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const works = [
  {
    id: "logistics-system",
    title: "物流基幹システム",
    category: "業務システム",
    year: "2024",
    description:
      "要件定義から設計・PM・開発まで一気通貫で担当した1000万円規模の基幹システム",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    color: "#6366f1",
  },
  {
    id: "ai-chatbot",
    title: "AIチャットボット",
    category: "AIツール",
    year: "2024",
    description:
      "PMとして累計8名（海外外注3名含む）をマネジメントした独自AIチャットボット",
    tags: ["Python", "FastAPI", "OpenAI", "PostgreSQL"],
    color: "#10b981",
  },
  {
    id: "matching-app",
    title: "お見合いアプリ",
    category: "Webアプリ",
    year: "2023",
    description:
      "Stripe決済・WebSocketリアルタイム通信を実装したマッチングアプリ",
    tags: ["Next.js", "TypeScript", "Stripe", "WebSocket"],
    color: "#ec4899",
  },
  {
    id: "syllabus-checker",
    title: "シラバスチェックアプリ",
    category: "業務ツール",
    year: "2023",
    description: "大学教授向けのシラバス内容確認・検証ツール",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    color: "#f59e0b",
  },
];

export const OrganismsWorksSection = () => {
  return (
    <section className="py-32">
      <div className="px-8">
        <ScrollReveal>
          <div className="flex items-end justify-between">
            <div>
              <span className="font-mono text-[11px] text-dracula-green">
                $ ls ./projects
              </span>
              <h2 className="mt-2 text-[clamp(2rem,8vw,5rem)] font-bold leading-none tracking-tighter">
                実績
              </h2>
            </div>
            <Link
              href="/works"
              className="hidden font-mono text-[13px] text-dracula-cyan transition-opacity hover:opacity-60 md:block"
            >
              $ cd /works →
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-16 space-y-4">
          {works.map((work, index) => (
            <ScrollReveal key={work.id} delay={index * 0.1}>
              <Link href={`/works/${work.id}`} className="group block">
                <motion.div
                  className="relative overflow-hidden border-t border-border py-8 transition-colors hover:bg-hover"
                  whileHover={{ x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">
                      <span
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: work.color }}
                      />
                      <div>
                        <h3 className="text-[clamp(1.5rem,4vw,3rem)] font-semibold tracking-tight transition-colors group-hover:text-foreground/70">
                          {work.title}
                        </h3>
                        <p className="mt-1 text-[13px] text-foreground/70">
                          {work.description}
                        </p>
                      </div>
                    </div>
                    <div className="hidden items-center gap-8 md:flex">
                      <span className="text-[13px] text-foreground/70">
                        {work.category}
                      </span>
                      <span className="text-[13px] text-foreground/70">
                        {work.year}
                      </span>
                      <motion.span
                        className="text-2xl"
                        initial={{ x: 0, opacity: 0.5 }}
                        whileHover={{ x: 10, opacity: 1 }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
