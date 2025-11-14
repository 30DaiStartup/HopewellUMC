import { Facebook } from "lucide-react";

const footerSections = [
  {
    title: "QUICK LINKS",
    links: [
      { label: "Home", href: "/" },
      { label: "Give", href: "/give" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "MINISTRIES",
    links: [
      { label: "Children's", href: "/ministries/childrens" },
      { label: "Youth", href: "/ministries/youth" },
      { label: "Adults", href: "/ministries/adults" },
      { label: "Missions", href: "/ministries/missions" },
      { label: "All Ministries", href: "/ministries" },
    ],
  },
  {
    title: "CONNECT",
    links: [
      { label: "Staff", href: "/about/staff" },
      { label: "Prayer", href: "/prayer" },
      { label: "Get Involved", href: "/connect" },
      { label: "Visit Us", href: "/visit" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Sermons", href: "/sermons" },
      { label: "Calendar", href: "/calendar" },
      { label: "FAQ", href: "/faq" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#262f33] text-white py-12 sm:py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Service Times */}
        <div className="text-center mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-white/10">
          <h3 className="text-lg sm:text-xl font-semibold mb-3">Join Us for Worship</h3>
          <p className="text-sm sm:text-base text-white/80">
            Sunday Services: 9:00 AM & 11:00 AM
          </p>
        </div>

        {/* Footer Grid - 4 Columns */}
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
                      className="text-xs sm:text-sm hover:text-[#0b5a7f] transition-colors inline-block py-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Contact Info */}
            <div className="text-xs sm:text-sm text-white/70 space-y-2 text-center md:text-left w-full md:w-auto">
              <p className="break-words">
                <span className="font-semibold">ADDRESS:</span> 1420 Neely Ferry Rd, Simpsonville, SC 29680
              </p>
              <p>
                <span className="font-semibold">PHONE:</span> (864) 967-8614
              </p>
              <p className="break-words">
                <span className="font-semibold">EMAIL:</span> info@humc1799.com
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 sm:gap-6">
              <a
                href="https://www.facebook.com/HopewellUMCSimpsonville"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0b5a7f] transition-colors p-2"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-center text-xs sm:text-sm text-white/50 mt-6 sm:mt-8">
            © {new Date().getFullYear()} Hopewell UMC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
