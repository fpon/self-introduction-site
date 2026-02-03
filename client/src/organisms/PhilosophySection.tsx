import { SectionHeader } from "@/molecules/SectionHeader";

const philosophies = [
  {
    title: "User First",
    description: "常にユーザーの視点に立ち、価値のあるプロダクトを追求する。",
  },
  {
    title: "Continuous Improvement",
    description: "小さな改善を積み重ね、大きな成果につなげる。",
  },
  {
    title: "Team Work",
    description: "一人では成し遂げられないことも、チームなら実現できる。",
  },
  {
    title: "Keep Learning",
    description: "技術の進化に追いつくため、常に新しいことを学び続ける。",
  },
];

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader title="Philosophy" />
        <div className="grid gap-0 md:grid-cols-2">
          <div>
            <p className="text-2xl font-medium leading-relaxed tracking-tight md:text-3xl">
              思想
            </p>
          </div>
          <div className="mt-8 grid gap-12 md:mt-0">
            {philosophies.map((philosophy) => (
              <div key={philosophy.title}>
                <p className="font-medium">{philosophy.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {philosophy.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
