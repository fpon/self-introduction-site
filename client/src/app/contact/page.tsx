"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/MagneticButton";
import { PageTransition } from "@/components/PageTransition";
import { ScrollReveal } from "@/components/ScrollReveal";

const contacts = [
  {
    command: "$ mail",
    label: "Email",
    value: "fponlv@gmail.com",
    href: "mailto:fponlv@gmail.com",
    description: "お仕事のご依頼やご相談はこちらから",
  },
  {
    command: "$ curl",
    label: "X (Twitter)",
    value: "@p4pcfl",
    href: "https://x.com/p4pcfl",
    description: "日常のつぶやきや技術的な発信",
  },
];

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="min-h-screen pt-32">
        <section className="px-8">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <span className="font-mono text-[11px] text-dracula-green">
                $ echo "Let's connect"
              </span>
              <h1 className="mt-2 text-[clamp(3rem,10vw,8rem)] font-bold leading-none tracking-tighter">
                Contact
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-foreground/70">
                お気軽にご連絡ください。お仕事のご依頼、技術的なご相談、
                カジュアルな雑談など、何でも歓迎です。
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="mt-24 px-8">
          <div className="mx-auto max-w-5xl">
            <div className="space-y-6">
              {contacts.map((contact, index) => (
                <ScrollReveal key={contact.label} delay={index * 0.15}>
                  <MagneticButton>
                    <motion.a
                      href={contact.href}
                      target={
                        contact.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        contact.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group block rounded-2xl border border-border p-8 transition-colors hover:bg-hover"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                          <span className="font-mono text-[11px] text-dracula-cyan">
                            {contact.command}
                          </span>
                          <h3 className="mt-2 text-2xl font-bold">
                            {contact.label}
                          </h3>
                          <p className="mt-2 text-[14px] text-foreground/70">
                            {contact.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-[15px] text-foreground/80">
                            {contact.value}
                          </span>
                          <motion.span
                            className="text-xl text-foreground/50"
                            initial={{ x: 0 }}
                            whileHover={{ x: 5 }}
                          >
                            →
                          </motion.span>
                        </div>
                      </div>
                    </motion.a>
                  </MagneticButton>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-32 px-8 pb-32">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="rounded-2xl border border-border bg-foreground/5 p-12">
                <span className="font-mono text-[11px] text-dracula-green">
                  $ cat response_time.txt
                </span>
                <p className="mt-4 text-[18px] font-medium leading-relaxed">
                  通常24時間以内に返信いたします
                </p>
                <p className="mt-2 text-[14px] text-foreground/70">
                  お急ぎの場合はX（Twitter）のDMが最速です
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
