"use client";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} Your Name
        </p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xs text-muted transition-colors hover:text-foreground"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
