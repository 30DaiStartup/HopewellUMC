import { Facebook, Instagram, Youtube } from "lucide-react";

const footerSections = [
  {
    title: "CONNECT",
    links: [
      { label: "VISIT", href: "#visit" },
      { label: "CONNECT", href: "#connect" },
      { label: "COMMUNITY", href: "#community" },
      { label: "EVENTS", href: "#events" },
      { label: "MEET-UPS", href: "#meetups" },
      { label: "HOUSE CHURCH", href: "#housechurch" },
    ],
  },
  {
    title: "MINISTRIES",
    links: [
      { label: "KIDS", href: "#kids" },
      { label: "YOUTH", href: "#youth" },
      { label: "OUTREACH", href: "#outreach" },
      { label: "CHILDCARE CENTER", href: "#childcare" },
      { label: "SCHOOL", href: "#school" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "GIVE", href: "#give" },
      { label: "SERMONS", href: "#sermons" },
      { label: "JOBS", href: "#jobs" },
      { label: "CLASSES", href: "#classes" },
      { label: "CHURCH ONLINE", href: "#online" },
      { label: "MONEY RESOURCES", href: "#money" },
      { label: "FACILITY RENTAL", href: "#facility" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#262f33] text-white py-12 sm:py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wide mb-3 sm:mb-4 text-white/70">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm hover:text-[#0b717f] transition-colors inline-block py-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* App Download */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide mb-3 sm:mb-4 text-white/70">
              DOWNLOAD THE APP
            </h3>
            <div className="bg-white/10 rounded-lg p-3 sm:p-4 hover:bg-white/20 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0b717f] flex items-center justify-center shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    strokeWidth="2"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <p className="text-xs leading-tight">
                  The go-to place for growth and connection.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Contact Info */}
            <div className="text-xs sm:text-sm text-white/70 space-y-2 text-center md:text-left w-full md:w-auto">
              <p className="break-words">
                <span className="font-semibold">EMAIL:</span> hello@humc1799.com
              </p>
              <p>
                <span className="font-semibold">PHONE:</span> (864) 967-8181
              </p>
              <p className="break-words">
                <span className="font-semibold">ADDRESS:</span> 1420 Neely Ferry Rd, Simpsonville, SC 29680
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 sm:gap-6">
              <a
                href="#"
                className="hover:text-[#0b717f] transition-colors p-2"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:text-[#0b717f] transition-colors p-2"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:text-[#0b717f] transition-colors p-2"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-center text-xs sm:text-sm text-white/50 mt-6 sm:mt-8">
            © 2025 Hopewell UMC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
