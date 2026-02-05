"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MagneticButton } from "@/components/MagneticButton";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/works" },
  { label: "Profile", href: "/profile" },
  { label: "Management", href: "/management" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="px-8 py-16">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <MagneticButton>
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              YN.
            </Link>
          </MagneticButton>

          <nav className="flex flex-wrap justify-center gap-8">
            {footerLinks.map((link) => (
              <MagneticButton key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </MagneticButton>
            ))}
          </nav>

          <MagneticButton>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 text-[13px] text-muted transition-colors hover:text-foreground"
            >
              <motion.span
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                ↑
              </motion.span>
              Back to top
            </button>
          </MagneticButton>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-[12px] text-muted">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <p className="text-[12px] text-muted">
            Designed & Built with passion
          </p>
        </div>
      </div>
    </footer>
  );
};
