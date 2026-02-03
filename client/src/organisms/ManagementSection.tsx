import { Card } from "@/atoms/Card";
import { SectionHeader } from "@/molecules/SectionHeader";

const resources = [
  {
    title: "1on1ミーティングガイド",
    description: "効果的な1on1を実施するためのフレームワークとチェックリスト",
    type: "PDF",
  },
  {
    title: "チームビルディング手法",
    description: "リモートワーク時代のチーム構築に関する知見",
    type: "Article",
  },
  {
    title: "フィードバックの技術",
    description: "建設的なフィードバックを行うためのテクニック",
    type: "Slide",
  },
];

export function ManagementSection() {
  return (
    <section id="management" className="bg-card/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="マネジメント資料"
          subtitle="Management"
          description="マネジメント学習のアウトプット"
        />
        <div className="space-y-4">
          {resources.map((resource) => (
            <Card
              key={resource.title}
              className="group flex items-center justify-between transition-all hover:border-primary/50"
            >
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-bold transition-colors group-hover:text-primary">
                    {resource.title}
                  </h3>
                  <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                    {resource.type}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">
                  {resource.description}
                </p>
              </div>
              <div
                className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-card-border transition-colors group-hover:border-primary group-hover:text-primary"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <title>Arrow right</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
