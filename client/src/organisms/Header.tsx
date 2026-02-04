"use client";

import { useState } from "react";

const navItems = [
  { href: "#home", label: "home" },
  { href: "#works", label: "Works" },
  { href: "#profile", label: "Profile" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { name: "Twitter", href: "https://twitter.com" },
  { name: "GitHub", href: "https://github.com" },
];

export function Header() {
  const [active, setActive] = useState("home");

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="flex h-14 items-center justify-between px-5">
        <div className="text-[13px]">
          <span className="font-medium">YN</span>
        </div>
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setActive(item.label)}
                className={`relative text-[13px] transition-colors hover:text-foreground ${
                  active === item.label ? "text-foreground" : "text-muted"
                }`}
              >
                {item.label}
                {active === item.label && (
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-foreground" />
                )}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="text-[13px] text-muted transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
