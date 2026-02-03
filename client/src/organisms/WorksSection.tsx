import { SectionHeader } from "@/molecules/SectionHeader";

const works = [
  {
    title: "Project Alpha",
    category: "Web App",
    tags: ["Next.js", "TypeScript"],
    year: "2024",
  },
  {
    title: "Project Beta",
    category: "Mobile App",
    tags: ["React Native", "Expo"],
    year: "2023",
  },
  {
    title: "Project Gamma",
    category: "AI Tool",
    tags: ["Python", "OpenAI"],
    year: "2023",
  },
  {
    title: "Project Delta",
    category: "Web App",
    tags: ["Vue.js", "Firebase"],
    year: "2022",
  },
];

export function WorksSection() {
  return (
    <section id="works" className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader title="Works" />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {works.map((work) => (
            <div key={work.title} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden bg-hover">
                <div className="flex h-full items-center justify-center text-muted transition-transform duration-300 group-hover:scale-105">
                  <span className="text-4xl font-bold opacity-10">
                    {work.title.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted">{work.category}</span>
                  <span className="text-xs text-muted">·</span>
                  <span className="text-xs text-muted">{work.year}</span>
                </div>
                <h3 className="mt-1 text-lg font-medium tracking-tight transition-opacity group-hover:opacity-60">
                  {work.title}
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border px-2 py-0.5 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
