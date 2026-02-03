const works = [
  {
    title: "Project Alpha",
    category: "Web Application",
    year: "2024",
  },
  {
    title: "Project Beta",
    category: "Mobile App",
    year: "2023",
  },
  {
    title: "Project Gamma",
    category: "AI Tool",
    year: "2023",
  },
  {
    title: "Project Delta",
    category: "Web Application",
    year: "2022",
  },
];

export function WorksSection() {
  return (
    <section id="works" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between">
          <h2 className="text-5xl font-bold tracking-tighter md:text-7xl">
            Works
          </h2>
          <p className="text-sm text-muted">Selected Projects</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          {works.map((work, index) => (
            <div
              key={work.title}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden bg-accent"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[20vw] font-bold text-background/5 md:text-[10vw]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-background">
                <p className="text-xs uppercase tracking-widest opacity-60">
                  {work.category} — {work.year}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                  {work.title}
                </h3>
              </div>
              <div className="absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
