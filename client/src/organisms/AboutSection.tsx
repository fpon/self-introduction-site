import { SectionHeader } from "@/molecules/SectionHeader";

const experiences = [
  {
    period: "2020 —",
    role: "Senior Engineer",
    company: "Tech Company",
  },
  {
    period: "2018 — 2020",
    role: "Engineer",
    company: "Startup Inc.",
  },
  {
    period: "2016 — 2018",
    role: "Junior Engineer",
    company: "Web Agency",
  },
];

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "AWS",
  "Docker",
  "Figma",
];

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader title="Profile" />
        <div className="mt-12 grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-medium">About</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Webアプリケーションの開発を中心に、フロントエンドからバックエンドまで
              幅広く経験。チームリードとしてプロダクト開発をリードしています。
              ユーザーファーストな開発と、チームの成長を大切にしています。
            </p>
            <div className="mt-8">
              <h3 className="text-sm font-medium">Skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-border px-3 py-1 text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium">Experience</h3>
            <div className="mt-4 space-y-6">
              {experiences.map((exp) => (
                <div key={exp.period} className="flex justify-between text-sm">
                  <div>
                    <p className="font-medium">{exp.role}</p>
                    <p className="text-muted">{exp.company}</p>
                  </div>
                  <p className="text-muted">{exp.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
