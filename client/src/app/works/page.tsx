"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { works } from "@/components/brains/brains-works-section";
import { PageTransition } from "@/components/PageTransition";
import { ScrollReveal } from "@/components/ScrollReveal";

const categories = [
  "All",
  "Web Application",
  "Mobile App",
  "AI Tool",
  "Dashboard",
];

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredWorks =
    activeCategory === "All"
      ? works
      : works.filter((work) => work.category === activeCategory);

  return (
    <PageTransition>
      <main className="min-h-screen pt-32">
        <div className="px-8">
          <ScrollReveal>
            <span className="font-mono text-[11px] text-dracula-green">
              $ ls -la ./projects
            </span>
            <h1 className="mt-2 text-[clamp(3rem,10vw,8rem)] font-bold leading-none tracking-tighter">
              実績一覧
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-12 flex flex-wrap gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full border px-6 py-2 text-[12px] transition-all ${
                    activeCategory === cat
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-foreground/70 hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            {filteredWorks.map((work, index) => (
              <ScrollReveal key={work.id} delay={index * 0.1}>
                <Link href={`/works/${work.id}`} className="group block">
                  <motion.div
                    className="relative aspect-[4/3] overflow-hidden"
                    style={{ backgroundColor: work.color }}
                    whileHover={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[15vw] font-bold text-white/10 md:text-[8vw]">
                        {work.title.split(" ")[1]?.charAt(0) ||
                          work.title.charAt(0)}
                      </span>
                    </div>
                    <motion.div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <span className="text-[11px] uppercase tracking-widest opacity-70">
                        {work.category}
                      </span>
                      <h3 className="mt-1 text-2xl font-semibold">
                        {work.title}
                      </h3>
                    </div>
                  </motion.div>
                  <div className="mt-4">
                    <p className="text-[14px] text-foreground/70">
                      {work.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border px-3 py-1 text-[11px] text-foreground/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
