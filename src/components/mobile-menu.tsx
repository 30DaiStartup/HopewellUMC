"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const primaryLinks = [
  { label: "Visit", href: "#visit" },
  { label: "About", href: "/about" },
  { label: "Connect", href: "#connect" },
  { label: "Sermons", href: "#sermons" },
  { label: "Give", href: "#give" },
];

const secondaryLinks = {
  column1: [
    { label: "Community", href: "#community" },
    { label: "Meet The Team", href: "#team" },
    { label: "Kids", href: "#kids" },
    { label: "Youth", href: "#youth" },
    { label: "Events", href: "#events" },
    { label: "House Church", href: "#housechurch" },
    { label: "Meet-Ups", href: "#meetups" },
    { label: "Church Online", href: "#online" },
  ],
  column2: [
    { label: "Classes", href: "#classes" },
    { label: "Volunteer", href: "#volunteer" },
    { label: "Resource Center", href: "#resources" },
    { label: "Money Resources", href: "#money" },
    { label: "Childcare Center", href: "#childcare" },
    { label: "Facility Rental", href: "#facility" },
    { label: "Fast", href: "/fast" },
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
    <div className="fixed inset-0 bg-[#0b717f] z-[100] animate-in fade-in duration-300 overflow-y-auto">
      <div className="container mx-auto px-6 py-6 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          {/* Logo */}
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-8 h-8 text-[#0b717f]"
              strokeWidth="2"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>

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
                  <a
                    href={link.href}
                    onClick={onClose}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white hover:opacity-70 transition-opacity block"
                  >
                    {link.label}
                  </a>
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
                    <a
                      href={link.href}
                      onClick={onClose}
                      className="text-lg md:text-xl font-semibold text-white hover:opacity-70 transition-opacity block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul className="space-y-3">
                {secondaryLinks.column2.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={onClose}
                      className="text-lg md:text-xl font-semibold text-white hover:opacity-70 transition-opacity block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* App Download Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-white text-sm font-semibold uppercase tracking-wide mb-4">
            Download The Church App
          </p>
          <div className="bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-4 cursor-pointer max-w-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-6 h-6 text-[#0b717f]"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <p className="text-white text-sm leading-tight">
                The Go-To Place For Growth And Connection At Church.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
