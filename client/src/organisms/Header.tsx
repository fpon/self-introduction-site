"use client";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#works", label: "Works" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto flex h-20 max-w-5xl items-center justify-between px-6">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm font-medium tracking-tight"
        >
          Your Name
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
