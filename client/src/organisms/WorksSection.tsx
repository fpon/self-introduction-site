import { Card } from "@/atoms/Card";
import { SectionHeader } from "@/molecules/SectionHeader";

const works = [
  {
    title: "Project Alpha",
    description: "Next.jsを使用したWebアプリケーション",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Project Beta",
    description: "React Nativeを使用したモバイルアプリ",
    tags: ["React Native", "Expo", "Firebase"],
  },
  {
    title: "Project Gamma",
    description: "AIを活用した業務効率化ツール",
    tags: ["Python", "OpenAI", "FastAPI"],
  },
];

export function WorksSection() {
  return (
    <section id="works" className="bg-card/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="制作物"
          subtitle="Works"
          description="個人開発やプロジェクトの成果物"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <Card
              key={work.title}
              className="group overflow-hidden transition-transform hover:-translate-y-2"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20" />
              <div className="p-6">
                <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
                  {work.title}
                </h3>
                <p className="mt-2 text-muted">{work.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
