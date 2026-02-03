export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end px-6 pb-24">
      <div className="mx-auto w-full max-w-7xl">
        <p className="animate-fade-up text-sm uppercase tracking-[0.3em] text-muted">
          Software Engineer
        </p>
        <h1 className="animate-fade-up-delay-1 mt-6 text-[clamp(3rem,15vw,12rem)] font-bold leading-[0.85] tracking-tighter">
          Your
          <br />
          Name
        </h1>
        <div className="animate-fade-up-delay-2 mt-12 flex items-end justify-between">
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            プロダクト開発とマネジメントに
            <br />
            情熱を注ぐエンジニア
          </p>
          <a href="#works" className="group flex items-center gap-2 text-sm">
            <span>View Works</span>
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="h-12 w-px bg-border" />
      </div>
    </section>
  );
}
