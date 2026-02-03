import { SectionHeader } from "@/molecules/SectionHeader";

const philosophies = [
  {
    number: "01",
    title: "User First",
    description: "常にユーザーの視点に立ち、価値のあるプロダクトを追求する。",
  },
  {
    number: "02",
    title: "Keep Improving",
    description: "小さな改善を積み重ね、大きな成果につなげる。",
  },
  {
    number: "03",
    title: "Team Work",
    description:
      "チームの力を最大化し、一人では成し遂げられないことを実現する。",
  },
];

export function PhilosophySection() {
  return (
    <section id="philosophy" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader title="Philosophy" />
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {philosophies.map((item) => (
            <div key={item.number}>
              <span className="text-xs text-muted">{item.number}</span>
              <h3 className="mt-2 text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
