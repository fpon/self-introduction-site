"use client";

const navItems = [
  { href: "#about", label: "経歴" },
  { href: "#works", label: "制作物" },
  { href: "#philosophy", label: "思想" },
  { href: "#management", label: "マネジメント" },
  { href: "#contact", label: "連絡先" },
];

export function Header() {
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
