export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen px-5 pt-14">
      <div className="flex min-h-[calc(100vh-56px)] flex-col justify-end pb-8">
        <div className="max-w-md">
          <p className="text-[15px]">YN</p>
          <p className="text-[15px] text-muted">software engineer</p>
          <h1 className="mt-2 text-[48px] font-normal leading-none tracking-tight">
            portfolio
          </h1>
        </div>
        <div className="mt-8 flex items-center gap-4">
          <Barcode />
          <p className="text-[11px] text-muted">2024</p>
        </div>
      </div>

      <div className="absolute right-5 top-20">
        <FloatingWindow title="about_me">
          <p className="text-[12px] leading-relaxed text-muted">
            プロダクト開発と
            <br />
            チームマネジメントに
            <br />
            情熱を注ぐエンジニア
          </p>
        </FloatingWindow>
      </div>

      <div className="absolute bottom-32 right-5">
        <FloatingWindow title="status">
          <p className="text-[12px] text-muted">Available for work</p>
        </FloatingWindow>
      </div>
    </section>
  );
}

function FloatingWindow({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-48 border border-border bg-background">
      <div className="flex items-center justify-between border-b border-border px-2 py-1">
        <span className="text-[10px] text-muted">{title}</span>
        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full border border-border" />
          <span className="h-2 w-2 rounded-full border border-border" />
        </div>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}

function Barcode() {
  return (
    <svg width="80" height="30" viewBox="0 0 80 30" className="text-foreground">
      <title>Barcode</title>
      {[
        0, 4, 6, 10, 12, 14, 20, 22, 26, 30, 32, 38, 40, 44, 48, 52, 56, 60, 64,
        68, 72, 76,
      ].map((x, i) => (
        <rect
          key={x}
          x={x}
          y="0"
          width={i % 3 === 0 ? 2 : 1}
          height="30"
          fill="currentColor"
        />
      ))}
    </svg>
  );
}
