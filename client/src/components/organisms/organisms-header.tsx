import { motion } from "framer-motion";
import Link from "next/link";
import { MagneticButton } from "@/components/MagneticButton";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
  { href: "/profile", label: "Profile" },
  { href: "/management", label: "Management" },
];

const socials = [
  { name: "Tw", href: "https://twitter.com", full: "Twitter" },
  { name: "Gh", href: "https://github.com", full: "GitHub" },
];

type OrganismsHeaderProps = {
  pathname: string;
};

export const OrganismsHeader = ({ pathname }: OrganismsHeaderProps) => {
  return (
    <motion.header
      className="fixed top-0 z-50 w-full mix-blend-difference"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 1.5, ease: [0.76, 0, 0.24, 1] }}
    >
      <nav className="flex h-20 items-center justify-between px-8">
        <MagneticButton>
          <Link href="/" className="text-lg font-semibold text-white">
            YN.
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
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-4 right-4 h-px bg-white"
                    />
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
