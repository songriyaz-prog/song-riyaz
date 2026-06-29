"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function BlogNavbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Analyze", href: "/analyze" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/logo.png"
            alt="Song Riyaz"
            width={34}
            height={34}
            priority
          />

          <span className="text-xl font-bold text-white">
            Song <span className="text-green-500">Riyaz</span>
          </span>

        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => {
            const active =
              pathname === link.href ||
              (link.href === "/blog" && pathname.startsWith("/blog"));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium transition-colors duration-200 ${
                  active
                    ? "text-green-500"
                    : "text-zinc-300 hover:text-green-500"
                }`}
              >
                {link.name}

                {active && (
                  <span className="absolute left-0 -bottom-2 h-[2px] w-full rounded-full bg-green-500" />
                )}
              </Link>
            );
          })}

        </nav>

        {/* CTA */}
        <Link
          href="/analyze"
          className="rounded-xl bg-green-500 px-5 py-2.5 font-semibold text-black transition hover:bg-green-400"
        >
          Analyze Song
        </Link>

      </div>
    </header>
  );
}