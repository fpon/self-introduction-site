import { SectionHeader } from "@/molecules/SectionHeader";

const socials = [
  { name: "GitHub", href: "https://github.com" },
  { name: "Twitter", href: "https://twitter.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader title="Contact" />
        <div className="grid gap-0 md:grid-cols-2">
          <div>
            <p className="text-2xl font-medium leading-relaxed tracking-tight md:text-3xl">
              連絡先
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <a
              href="mailto:your@email.com"
              className="text-lg font-medium underline underline-offset-4 transition-opacity hover:opacity-60"
            >
              your@email.com
            </a>
            <div className="mt-12 flex gap-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
