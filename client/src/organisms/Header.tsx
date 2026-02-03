"use client";

const navItems = [
  { href: "#works", label: "Works" },
  { href: "#about", label: "Profile" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { name: "GitHub", href: "https://github.com" },
  { name: "X", href: "https://twitter.com" },
];

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-background">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-bold tracking-tighter"
        >
          YN
        </button>
        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm transition-opacity hover:opacity-50"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-sm transition-opacity hover:opacity-50"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
