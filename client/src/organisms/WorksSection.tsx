"use client";

import { useState } from "react";

const categories = ["all", "web", "mobile", "tool"];

const works = [
  {
    title: "Project Alpha",
    category: "web",
    year: "2024",
    description: "Next.jsを使用したWebアプリケーション",
  },
  {
    title: "Project Beta",
    category: "mobile",
    year: "2023",
    description: "React Nativeを使用したモバイルアプリ",
  },
  {
    title: "Project Gamma",
    category: "tool",
    year: "2023",
    description: "AIを活用した業務効率化ツール",
  },
  {
    title: "Project Delta",
    category: "web",
    year: "2022",
    description: "Vue.jsを使用したダッシュボード",
  },
];

export function WorksSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredWorks =
    activeCategory === "all"
      ? works
      : works.filter((work) => work.category === activeCategory);

  return (
    <section id="works" className="min-h-screen px-5 py-20">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-[15px]">Works</h2>
        <div className="flex gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`text-[12px] transition-colors ${
                activeCategory === cat ? "text-foreground" : "text-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredWorks.map((work) => (
          <div
            key={work.title}
            className="group cursor-pointer border border-border bg-background transition-all hover:border-foreground"
          >
            <div className="aspect-[4/3] border-b border-border bg-[#e8e8f8]">
              <div className="flex h-full items-center justify-center">
                <span className="text-[60px] font-light text-foreground/10">
                  {work.title.charAt(work.title.length - 1)}
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-muted">{work.category}</span>
                <span className="text-[10px] text-muted">{work.year}</span>
              </div>
              <h3 className="mt-2 text-[14px] font-medium">{work.title}</h3>
              <p className="mt-1 text-[12px] text-muted">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
