"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { MobileMenu } from "./mobile-menu";

const navLinks = [
  { label: "Give", href: "/give" },
  { label: "About", href: "/about" },
  { label: "Connect", href: "/connect" },
  { label: "Prayer", href: "/prayer" },
  { label: "Ministries", href: "/ministries" },
  { label: "Fast", href: "/fast" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="relative z-30 w-full bg-white">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 rounded-full bg-[#0b5a7f] flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-7 h-7 text-white"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            </Link>

            {/* Desktop Navigation - centered */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-foreground hover:text-[#0b5a7f] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Spacer for desktop nav alignment */}
            <div className="w-[88px]" />
          </div>
        </div>
      </header>

      {/* Floating Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="fixed top-6 right-6 z-50 text-foreground hover:text-[#0b5a7f] transition-all flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2.5 shadow-lg hover:shadow-xl"
      >
        <span className="text-sm font-semibold uppercase">Menu</span>
        <Menu className="h-6 w-6" />
      </button>

      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
