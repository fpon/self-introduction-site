import { motion } from "framer-motion";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const works = [
  {
    id: "project-alpha",
    title: "Project Alpha",
    category: "Web Application",
    year: "2024",
    description: "Next.jsを使用した大規模Webアプリケーション",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    color: "#6366f1",
  },
  {
    id: "project-beta",
    title: "Project Beta",
    category: "Mobile App",
    year: "2023",
    description: "React Nativeを使用したクロスプラットフォームアプリ",
    tags: ["React Native", "Expo", "Firebase", "Redux"],
    color: "#ec4899",
  },
  {
    id: "project-gamma",
    title: "Project Gamma",
    category: "AI Tool",
    year: "2023",
    description: "OpenAI APIを活用した業務効率化ツール",
    tags: ["Python", "FastAPI", "OpenAI", "PostgreSQL"],
    color: "#10b981",
  },
  {
    id: "project-delta",
    title: "Project Delta",
    category: "Dashboard",
    year: "2022",
    description: "リアルタイムデータ可視化ダッシュボード",
    tags: ["Vue.js", "D3.js", "WebSocket", "Node.js"],
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
              <span className="text-[11px] uppercase tracking-widest text-muted">
                Featured Works
              </span>
              <h2 className="mt-2 text-[clamp(2rem,8vw,5rem)] font-bold leading-none tracking-tighter">
                Selected
                <br />
                Projects
              </h2>
            </div>
            <Link
              href="/works"
              className="hidden text-[13px] text-muted transition-colors hover:text-foreground md:block"
            >
              View All →
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
                        <h3 className="text-[clamp(1.5rem,4vw,3rem)] font-semibold tracking-tight transition-colors group-hover:text-muted">
                          {work.title}
                        </h3>
                        <p className="mt-1 text-[13px] text-muted">
                          {work.description}
                        </p>
                      </div>
                    </div>
                    <div className="hidden items-center gap-8 md:flex">
                      <span className="text-[13px] text-muted">
                        {work.category}
                      </span>
                      <span className="text-[13px] text-muted">
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
