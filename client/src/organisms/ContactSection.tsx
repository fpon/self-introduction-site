const socials = [
  { name: "GitHub", href: "https://github.com" },
  { name: "Twitter", href: "https://twitter.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary p-12 text-white md:p-16">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              お気軽にご連絡ください
            </h2>
            <p className="mt-4 text-lg text-white/80">
              プロジェクトのご相談やお問い合わせをお待ちしています
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 font-medium backdrop-blur-sm transition-all hover:bg-white/30"
                >
                  {social.name}
                </a>
              ))}
            </div>
            <a
              href="mailto:your@email.com"
              className="mt-6 inline-block text-lg font-medium underline underline-offset-4 transition-opacity hover:opacity-80"
            >
              your@email.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
