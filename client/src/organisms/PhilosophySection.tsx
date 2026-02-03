import { Card } from "@/atoms/Card";
import { SectionHeader } from "@/molecules/SectionHeader";

const philosophies = [
  {
    icon: "🎯",
    title: "ユーザーファースト",
    description: "常にユーザーの視点に立ち、価値のあるプロダクトを追求します。",
  },
  {
    icon: "🚀",
    title: "継続的な改善",
    description:
      "小さな改善を積み重ね、大きな成果につなげることを大切にしています。",
  },
  {
    icon: "🤝",
    title: "チームワーク",
    description:
      "一人では成し遂げられないことも、チームなら実現できると信じています。",
  },
  {
    icon: "📚",
    title: "学び続ける",
    description: "技術の進化に追いつくため、常に新しいことを学び続けています。",
  },
];

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="思想"
          subtitle="Philosophy"
          description="大切にしている価値観と考え方"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {philosophies.map((philosophy) => (
            <Card
              key={philosophy.title}
              className="group transition-all hover:border-primary/50"
            >
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-2xl transition-transform group-hover:scale-110">
                  {philosophy.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{philosophy.title}</h3>
                  <p className="mt-2 text-muted">{philosophy.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
