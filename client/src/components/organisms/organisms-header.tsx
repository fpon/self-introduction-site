import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MagneticButton } from "@/components/MagneticButton";

const navItems = [
  { href: "/", label: "/home" },
  { href: "/profile", label: "/profile" },
  { href: "/works", label: "/works" },
  { href: "/knowledge", label: "/knowledge" },
  { href: "/hobbies", label: "/hobbies" },
  { href: "/contact", label: "/contact" },
];

const socials = [{ name: "X", href: "https://x.com/p4pcfl", full: "X" }];

type OrganismsHeaderProps = {
  pathname: string;
};

export const OrganismsHeader = ({ pathname }: OrganismsHeaderProps) => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsFirstLoad(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.header
      className="fixed top-0 z-50 w-full mix-blend-difference"
      initial={isFirstLoad ? { y: -100 } : false}
      animate={{ y: 0 }}
      transition={{
        duration: 0.8,
        delay: isFirstLoad ? 1.5 : 0,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      <nav className="flex h-20 items-center justify-between px-8">
        <MagneticButton>
          <Link href="/" className="text-lg font-semibold text-white">
            ふぽん
          </Link>
        </MagneticButton>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <MagneticButton>
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 text-[13px] text-white transition-opacity hover:opacity-60 ${
                    pathname === item.href ? "opacity-100" : "opacity-60"
                  }`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <span className="absolute bottom-0 left-4 right-4 h-px bg-white" />
                  )}
                </Link>
              </MagneticButton>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <MagneticButton key={social.name}>
              <a
                href={social.href}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[11px] text-white transition-colors hover:bg-white hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
                title={social.full}
              >
                {social.name}
              </a>
            </MagneticButton>
          ))}
        </div>
      </nav>
    </motion.header>
  );
};
