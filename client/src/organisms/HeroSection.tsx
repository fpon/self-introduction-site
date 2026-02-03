export function HeroSection() {
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
