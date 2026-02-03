import { SectionHeader } from "@/molecules/SectionHeader";

const socials = [
  { name: "GitHub", href: "https://github.com" },
  { name: "X (Twitter)", href: "https://twitter.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
];

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader title="Contact" />
        <div className="mt-12">
          <p className="text-sm text-muted">
            お仕事のご依頼・ご相談はこちらから
          </p>
          <a
            href="mailto:your@email.com"
            className="mt-4 inline-block text-2xl font-medium tracking-tight transition-opacity hover:opacity-50 md:text-3xl"
          >
            your@email.com
          </a>
          <div className="mt-12 flex gap-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-sm text-muted transition-opacity hover:opacity-50"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
