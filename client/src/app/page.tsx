"use client";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WorksSection />
        <PhilosophySection />
        <ManagementSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const navItems = [
    { href: "#about", label: "経歴" },
    { href: "#works", label: "制作物" },
    { href: "#philosophy", label: "思想" },
    { href: "#management", label: "マネジメント" },
    { href: "#contact", label: "連絡先" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-card-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-xl font-bold text-transparent"
        >
          Portfolio
        </button>
        <ul className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 animate-gradient" />
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="animate-fade-in-up">
          <div className="mb-6 inline-block rounded-full border border-card-border bg-card px-4 py-2 text-sm text-muted">
            Welcome to my portfolio
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Hello, I'm
            </span>
            <br />
            <span className="text-foreground">Your Name</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted md:text-xl">
            経歴、制作物、思想、マネジメントについて発信しています。
            <br />
            一緒に素晴らしいプロダクトを作りましょう。
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#works"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-3 font-medium text-white transition-transform hover:scale-105"
            >
              制作物を見る
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-card-border bg-card px-8 py-3 font-medium transition-colors hover:bg-card-border"
            >
              連絡する
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const experiences = [
    {
      period: "2020 - Present",
      title: "シニアエンジニア",
      company: "Tech Company",
      description: "フロントエンド開発をリードし、チームの生産性向上に貢献",
    },
    {
      period: "2018 - 2020",
      title: "エンジニア",
      company: "Startup Inc.",
      description: "新規プロダクトの立ち上げから運用まで担当",
    },
    {
      period: "2016 - 2018",
      title: "ジュニアエンジニア",
      company: "Web Agency",
      description: "Webサイト制作とCMS開発を担当",
    },
  ];

  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="経歴"
          subtitle="About"
          description="これまでの経験とキャリアの歩み"
        />
        <div className="relative">
          <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-secondary to-accent md:left-1/2 md:block" />
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.period}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden w-1/2 md:block" />
                <div className="absolute left-0 top-0 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-primary bg-background md:left-1/2 md:block" />
                <div className="w-full md:w-1/2 md:px-8">
                  <Card>
                    <span className="text-sm font-medium text-primary">
                      {experience.period}
                    </span>
                    <h3 className="mt-2 text-xl font-bold">
                      {experience.title}
                    </h3>
                    <p className="text-muted">{experience.company}</p>
                    <p className="mt-3 text-muted">{experience.description}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorksSection() {
  const works = [
    {
      title: "Project Alpha",
      description: "Next.jsを使用したWebアプリケーション",
      tags: ["Next.js", "TypeScript", "Tailwind"],
    },
    {
      title: "Project Beta",
      description: "React Nativeを使用したモバイルアプリ",
      tags: ["React Native", "Expo", "Firebase"],
    },
    {
      title: "Project Gamma",
      description: "AIを活用した業務効率化ツール",
      tags: ["Python", "OpenAI", "FastAPI"],
    },
  ];

  return (
    <section id="works" className="bg-card/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="制作物"
          subtitle="Works"
          description="個人開発やプロジェクトの成果物"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <Card
              key={work.title}
              className="group overflow-hidden transition-transform hover:-translate-y-2"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20" />
              <div className="p-6">
                <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
                  {work.title}
                </h3>
                <p className="mt-2 text-muted">{work.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  const philosophies = [
    {
      icon: "🎯",
      title: "ユーザーファースト",
      description:
        "常にユーザーの視点に立ち、価値のあるプロダクトを追求します。",
    },
    {
      icon: "🚀",
      title: "継続的な改善",
      description:
        "小さな改善を積み重ね、大きな成果につなげることを大切にしています。",
    },
    {
      icon: "🤝",
      title: "チームワーク",
      description:
        "一人では成し遂げられないことも、チームなら実現できると信じています。",
    },
    {
      icon: "📚",
      title: "学び続ける",
      description:
        "技術の進化に追いつくため、常に新しいことを学び続けています。",
    },
  ];

  return (
    <section id="philosophy" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="思想"
          subtitle="Philosophy"
          description="大切にしている価値観と考え方"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {philosophies.map((philosophy) => (
            <Card
              key={philosophy.title}
              className="group transition-all hover:border-primary/50"
            >
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-2xl transition-transform group-hover:scale-110">
                  {philosophy.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{philosophy.title}</h3>
                  <p className="mt-2 text-muted">{philosophy.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ManagementSection() {
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

function ContactSection() {
  const socials = [
    { name: "GitHub", href: "https://github.com" },
    { name: "Twitter", href: "https://twitter.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
  ];

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

function Footer() {
  return (
    <footer className="border-t border-card-border py-8">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

function SectionHeader({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle: string;
  description: string;
}) {
  return (
    <div className="mb-16 text-center">
      <span className="text-sm font-medium uppercase tracking-wider text-primary">
        {subtitle}
      </span>
      <h2 className="mt-2 text-3xl font-bold md:text-4xl">{title}</h2>
      <p className="mt-4 text-muted">{description}</p>
    </div>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-card-border bg-card p-6 ${className}`}
    >
      {children}
    </div>
  );
}
