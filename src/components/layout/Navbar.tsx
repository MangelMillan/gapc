"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-steel-200/60 bg-white/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="group">
          <Image
            src="/images/gmg.png"
            alt="Grupo Minero GAPC"
            width={120}
            height={42}
            className="h-10 w-auto transition-transform group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    active
                      ? "text-navy-700"
                      : "text-steel-500 hover:text-navy-700"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="block h-0.5 mt-0.5 rounded-full bg-navy-700" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-flex rounded-lg bg-navy-700 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-navy-800 hover:shadow-lg"
        >
          Contáctenos
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-steel-700"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden animate-fade-in border-t border-steel-200 bg-white px-6 pb-6 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-base font-medium ${
                    pathname === link.href
                      ? "text-navy-700"
                      : "text-steel-600 hover:text-navy-700"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block w-full rounded-lg bg-navy-700 py-3 text-center text-sm font-semibold text-white"
          >
            Contáctenos
          </Link>
        </div>
      )}
    </header>
  );
}
