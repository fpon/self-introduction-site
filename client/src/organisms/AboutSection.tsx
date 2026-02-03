import { Card } from "@/atoms/Card";
import { SectionHeader } from "@/molecules/SectionHeader";

const experiences = [
  {
    period: "2020 - Present",
    title: "シニアエンジニア",
    company: "Tech Company",
    description: "フロントエンド開発をリードし、チームの生産性向上に貢献",
  },
  {
    period: "2018 - 2020",
    title: "エンジニア",
    company: "Startup Inc.",
    description: "新規プロダクトの立ち上げから運用まで担当",
  },
  {
    period: "2016 - 2018",
    title: "ジュニアエンジニア",
    company: "Web Agency",
    description: "Webサイト制作とCMS開発を担当",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="経歴"
          subtitle="About"
          description="これまでの経験とキャリアの歩み"
        />
        <div className="relative">
          <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-secondary to-accent md:left-1/2 md:block" />
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.period}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden w-1/2 md:block" />
                <div className="absolute left-0 top-0 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-primary bg-background md:left-1/2 md:block" />
                <div className="w-full md:w-1/2 md:px-8">
                  <Card>
                    <span className="text-sm font-medium text-primary">
                      {experience.period}
                    </span>
                    <h3 className="mt-2 text-xl font-bold">
                      {experience.title}
                    </h3>
                    <p className="text-muted">{experience.company}</p>
                    <p className="mt-3 text-muted">{experience.description}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
