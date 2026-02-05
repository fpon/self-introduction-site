import { motion } from "framer-motion";
import { MagneticButton } from "@/components/MagneticButton";
import { ScrollReveal } from "@/components/ScrollReveal";

const socials = [
  { name: "Twitter", href: "https://twitter.com" },
  { name: "GitHub", href: "https://github.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "Instagram", href: "https://instagram.com" },
];

export const OrganismsContactSection = () => {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="px-8">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <span className="text-[11px] uppercase tracking-widest text-muted">
              Get in Touch
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="mt-4 text-[clamp(2rem,8vw,5rem)] font-bold leading-none tracking-tighter">
              Let's Work
              <br />
              Together
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="mx-auto mt-8 max-w-md text-[15px] leading-relaxed text-muted">
              新しいプロジェクトのご相談、お仕事のご依頼など、
              お気軽にご連絡ください。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <MagneticButton className="mt-12">
              <a
                href="mailto:your@email.com"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-foreground px-12 py-6"
              >
                <span className="relative z-10 text-[18px] font-medium transition-colors group-hover:text-background">
                  your@email.com
                </span>
                <motion.span
                  className="absolute inset-0 bg-foreground"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                />
              </a>
            </MagneticButton>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="mt-16 flex justify-center gap-6">
              {socials.map((social) => (
                <MagneticButton key={social.name}>
                  <a
                    href={social.href}
                    className="text-[13px] text-muted transition-colors hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.name}
                  </a>
                </MagneticButton>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
