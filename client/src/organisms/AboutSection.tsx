import { SectionHeader } from "@/molecules/SectionHeader";

const experiences = [
  {
    period: "2020 —",
    title: "Senior Engineer",
    company: "Tech Company",
    description: "フロントエンド開発をリード",
  },
  {
    period: "2018 — 2020",
    title: "Engineer",
    company: "Startup Inc.",
    description: "新規プロダクトの立ち上げ",
  },
  {
    period: "2016 — 2018",
    title: "Junior Engineer",
    company: "Web Agency",
    description: "Webサイト制作とCMS開発",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader title="About" />
        <div className="grid gap-0 md:grid-cols-2">
          <div>
            <p className="text-2xl font-medium leading-relaxed tracking-tight md:text-3xl">
              経歴
            </p>
          </div>
          <div className="mt-8 space-y-12 md:mt-0">
            {experiences.map((experience) => (
              <div key={experience.period} className="group">
                <p className="text-xs text-muted">{experience.period}</p>
                <p className="mt-2 text-lg font-medium">{experience.title}</p>
                <p className="text-muted">{experience.company}</p>
                <p className="mt-2 text-sm text-muted">
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
