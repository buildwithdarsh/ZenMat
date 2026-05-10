import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileNav } from "@/components/layout/mobile-nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zenmat.studio"),
  title: {
    default: "ZenMat — Yoga Classes, Studios & On-Demand Practice Platform",
    template: "%s | ZenMat",
  },
  description:
    "Discover yoga studios, book live classes, stream on-demand sessions, and track your practice with ZenMat. Meditation, pranayama, workshops, retreats, and teacher training — all in one platform.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    siteName: "ZenMat",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <div data-app-chrome="header"><Header /></div>
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <div data-app-chrome="footer"><Footer /></div>
        <div data-app-chrome="mobile-nav"><MobileNav /></div>
      </body>
    </html>
  );
}
