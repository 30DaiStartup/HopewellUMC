import type { Metadata, Viewport } from "next";
import "./globals.css";
import "tippy.js/dist/tippy.css";
import ClientBody from "./ClientBody";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0b5a7f" },
    { media: "(prefers-color-scheme: dark)", color: "#0b5a7f" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Hopewell United Methodist Church | Simpsonville, SC",
    template: "%s | Hopewell UMC",
  },
  description: "To Grow in the Lord and Show Him to the World. Join us for worship, ministries, and community at Hopewell United Methodist Church in Simpsonville, SC.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Hopewell UMC",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
