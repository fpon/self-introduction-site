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
    <section id="management" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader title="Management" />
        <p className="mt-4 text-sm text-muted">
          マネジメントに関する学習のアウトプット
        </p>
        <div className="mt-12 space-y-0">
          {resources.map((resource, index) => (
            <div
              key={resource.title}
              className={`flex cursor-pointer items-center justify-between py-6 transition-opacity hover:opacity-60 ${
                index !== resources.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="font-medium">{resource.title}</span>
              <span className="text-xs text-muted">{resource.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
