"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useEffect } from "react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "Give", href: "/give" },
  { label: "About", href: "/about" },
  { label: "Connect", href: "/connect" },
  { label: "Prayer", href: "/prayer" },
  { label: "Ministries", href: "/ministries" },
];

const secondaryLinks = {
  column1: [
    { label: "What to Expect", href: "/about/visit" },
    { label: "Our Beliefs", href: "/about/beliefs" },
    { label: "FAQ", href: "/about/faq" },
    { label: "Staff", href: "/connect/staff" },
    { label: "Calendar", href: "/calendar" },
    { label: "Sermons", href: "/sermons" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
  column2: [
    { label: "Children's Ministry", href: "/ministries/children" },
    { label: "Youth Ministry", href: "/ministries/youth" },
    { label: "Adult Ministry", href: "/ministries/adult" },
    { label: "Young Adults", href: "/ministries/young-adults" },
    { label: "Men's Ministry", href: "/ministries/mens" },
    { label: "Women's Ministries", href: "/ministries/womens" },
    { label: "Missions", href: "/ministries/missions" },
    { label: "All Ministries", href: "/ministries" },
  ],
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-[#0b5a7f] z-[100] animate-in fade-in duration-300 overflow-y-auto">
      <div className="container mx-auto px-6 py-6 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          {/* Logo */}
          <Link href="/" onClick={onClose} className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-8 h-8 text-[#0b5a7f]"
              strokeWidth="2"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </Link>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="text-white hover:opacity-70 transition-opacity flex items-center gap-2"
          >
            <span className="text-sm font-semibold uppercase">Close</span>
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex-1 grid md:grid-cols-[auto_1fr] gap-12 lg:gap-20">
          {/* Primary Navigation */}
          <nav>
            <ul className="space-y-4">
              {primaryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white hover:opacity-70 transition-opacity block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Secondary Navigation - Two Columns */}
          <div className="grid sm:grid-cols-2 gap-8 lg:gap-12 mt-8 md:mt-0">
            {/* Column 1 */}
            <div>
              <ul className="space-y-3">
                {secondaryLinks.column1.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="text-lg md:text-xl font-semibold text-white hover:opacity-70 transition-opacity block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul className="space-y-3">
                {secondaryLinks.column2.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="text-lg md:text-xl font-semibold text-white hover:opacity-70 transition-opacity block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
