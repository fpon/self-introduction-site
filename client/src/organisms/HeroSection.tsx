export function HeroSection() {
  return (
    <section className="flex min-h-screen items-center pt-20">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-4xl font-medium leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Software Engineer
          <br />
          <span className="text-muted">building products</span>
          <br />
          <span className="text-muted">that matter.</span>
        </h1>
        <p className="mt-12 max-w-lg text-base leading-relaxed text-muted">
          プロダクト開発とチームマネジメントに情熱を注ぐエンジニア。
          ユーザーに価値を届けることを大切にしています。
        </p>
      </div>
    </section>
  );
}
