const experiences = [
  {
    period: "2020 —",
    role: "Senior Engineer",
    company: "Tech Company",
  },
  {
    period: "2018 — 20",
    role: "Engineer",
    company: "Startup Inc.",
  },
  {
    period: "2016 — 18",
    role: "Junior Engineer",
    company: "Web Agency",
  },
];

const skills = ["TypeScript", "React", "Next.js", "Node.js", "Python", "AWS"];

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-5xl font-bold tracking-tighter md:text-7xl">
              About
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-2xl font-medium leading-relaxed tracking-tight md:text-3xl">
              Webアプリケーションの開発を中心に、
              <br className="hidden md:block" />
              フロントエンドからバックエンドまで
              <br className="hidden md:block" />
              幅広く経験してきました。
            </p>
            <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-muted">
                  Experience
                </h3>
                <div className="mt-6 space-y-6">
                  {experiences.map((exp) => (
                    <div key={exp.period} className="flex justify-between">
                      <div>
                        <p className="font-medium">{exp.role}</p>
                        <p className="text-sm text-muted">{exp.company}</p>
                      </div>
                      <p className="text-sm text-muted">{exp.period}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-muted">
                  Skills
                </h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-border px-4 py-2 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
