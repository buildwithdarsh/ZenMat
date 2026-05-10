"use client";

import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sun, Moon, Flower2 } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Classes", href: "#classes" },
  { label: "Instructors", href: "#instructors" },
  { label: "Studio", href: "#studio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);
  }, []);

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 shadow-sm backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-semibold tracking-tight"
        >
          <Flower2
            className={`h-7 w-7 ${
              scrolled ? "text-primary" : "text-white dark:text-primary"
            }`}
          />
          <span
            className={
              scrolled
                ? "text-foreground"
                : "text-white dark:text-foreground"
            }
          >
            ZenMat
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 ${
                scrolled
                  ? "text-foreground/80 hover:text-foreground"
                  : "text-white/90 hover:text-white dark:text-foreground/80 dark:hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleDark}
            className={`ml-2 rounded-lg p-2 transition-colors hover:bg-primary/10 ${
              scrolled
                ? "text-foreground/70"
                : "text-white/80 dark:text-foreground/70"
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile nav */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleDark}
            className={`rounded-lg p-2 transition-colors ${
              scrolled
                ? "text-foreground/70"
                : "text-white/80 dark:text-foreground/70"
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className={`inline-flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-primary/10 ${
                scrolled
                  ? "text-foreground"
                  : "text-white dark:text-foreground"
              }`}
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-background">
              <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
                <span className="flex items-center gap-2 text-lg font-semibold">
                  <Flower2 className="h-6 w-6 text-primary" />
                  ZenMat
                </span>
              </div>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-primary/10 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
