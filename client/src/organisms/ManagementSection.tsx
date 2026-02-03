import { SectionHeader } from "@/molecules/SectionHeader";

const resources = [
  {
    title: "1on1ミーティングガイド",
    type: "PDF",
  },
  {
    title: "チームビルディング手法",
    type: "Article",
  },
  {
    title: "フィードバックの技術",
    type: "Slide",
  },
];

export function ManagementSection() {
  return (
    <section id="management" className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader title="Management" />
        <div className="grid gap-0 md:grid-cols-2">
          <div>
            <p className="text-2xl font-medium leading-relaxed tracking-tight md:text-3xl">
              マネジメント資料
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            {resources.map((resource, index) => (
              <div
                key={resource.title}
                className={`group flex items-center justify-between py-4 ${index !== resources.length - 1 ? "border-b border-border" : ""}`}
              >
                <span className="font-medium">{resource.title}</span>
                <span className="text-xs text-muted">{resource.type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
