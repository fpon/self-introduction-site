import { SectionHeader } from "@/molecules/SectionHeader";

const works = [
  {
    title: "Project Alpha",
    description: "Next.jsを使用したWebアプリケーション",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    year: "2024",
  },
  {
    title: "Project Beta",
    description: "React Nativeを使用したモバイルアプリ",
    tags: ["React Native", "Expo", "Firebase"],
    year: "2023",
  },
  {
    title: "Project Gamma",
    description: "AIを活用した業務効率化ツール",
    tags: ["Python", "OpenAI", "FastAPI"],
    year: "2023",
  },
];

export function WorksSection() {
  return (
    <section id="works" className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader title="Works" />
        <div className="grid gap-0 md:grid-cols-2">
          <div>
            <p className="text-2xl font-medium leading-relaxed tracking-tight md:text-3xl">
              制作物
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            {works.map((work, index) => (
              <div
                key={work.title}
                className={`group py-8 ${index !== works.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-lg font-medium">{work.title}</p>
                    <p className="mt-1 text-sm text-muted">
                      {work.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {work.tags.map((tag) => (
                        <span key={tag} className="text-xs text-muted">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-muted">{work.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
