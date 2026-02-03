const socials = [
  { name: "GitHub", href: "https://github.com" },
  { name: "X", href: "https://twitter.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
];

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-5xl font-bold tracking-tighter md:text-7xl">
              Contact
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-2xl font-medium leading-relaxed tracking-tight md:text-3xl">
              お仕事のご依頼・ご相談は
              <br />
              お気軽にご連絡ください。
            </p>
            <a
              href="mailto:your@email.com"
              className="mt-8 inline-block text-xl font-medium underline underline-offset-8 transition-opacity hover:opacity-50 md:text-2xl"
            >
              your@email.com
            </a>
            <div className="mt-16 flex gap-8">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
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
