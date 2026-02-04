const socials = [
  { name: "Twitter", href: "https://twitter.com" },
  { name: "GitHub", href: "https://github.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
];

export function ContactSection() {
  return (
    <section id="contact" className="min-h-[50vh] px-5 py-20">
      <h2 className="text-[15px]">Contact</h2>
      <div className="mt-8 max-w-md">
        <p className="text-[14px] leading-relaxed">
          お仕事のご依頼・ご相談はお気軽にご連絡ください。
        </p>
        <a
          href="mailto:your@email.com"
          className="mt-6 inline-block border-b border-foreground text-[14px] transition-opacity hover:opacity-60"
        >
          your@email.com
        </a>
        <div className="mt-12 flex gap-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="text-[12px] text-muted transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
