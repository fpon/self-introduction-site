const skills = ["TypeScript", "React", "Next.js", "Node.js", "Python", "AWS"];

const experiences = [
  { period: "2020 —", role: "Senior Engineer", company: "Tech Company" },
  { period: "2018 — 20", role: "Engineer", company: "Startup Inc." },
  { period: "2016 — 18", role: "Junior Engineer", company: "Web Agency" },
];

export function AboutSection() {
  return (
    <section id="profile" className="min-h-screen px-5 py-20">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <h2 className="text-[15px]">Profile</h2>
          <div className="mt-8 border border-border bg-background p-6">
            <p className="text-[14px] leading-relaxed">
              Webアプリケーションの開発を中心に、フロントエンドからバックエンドまで幅広く経験。
              チームリードとしてプロダクト開発をリードしています。
            </p>
            <p className="mt-4 text-[14px] leading-relaxed">
              ユーザーファーストな開発と、チームの成長を大切にしています。
            </p>
          </div>

          <div className="mt-8">
            <p className="text-[12px] text-muted">Skills</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-border px-3 py-1 text-[12px]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[15px]">Experience</h2>
          <div className="mt-8 space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.period}
                className="flex items-start justify-between border-b border-border pb-6"
              >
                <div>
                  <p className="text-[14px] font-medium">{exp.role}</p>
                  <p className="text-[12px] text-muted">{exp.company}</p>
                </div>
                <p className="text-[12px] text-muted">{exp.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
