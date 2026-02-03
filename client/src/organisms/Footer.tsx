"use client";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-8">
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} Your Name
        </p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xs text-muted transition-opacity hover:opacity-50"
        >
          Back to top
        </button>
      </div>
    </footer>
  );
}
