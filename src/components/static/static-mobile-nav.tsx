"use client";

import { useState, useEffect } from "react";
import {
  Home,
  BookOpen,
  Users,
  MessageCircle,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#hero", label: "Home", icon: Home },
  { href: "#classes", label: "Classes", icon: BookOpen },
  { href: "#instructors", label: "Teachers", icon: Users },
  { href: "#testimonials", label: "Reviews", icon: MessageCircle },
  { href: "#contact", label: "Contact", icon: Phone },
];

export function StaticMobileNav() {
  const [activeHash, setActiveHash] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => {
        const id = item.href.replace("#", "");
        const el = document.getElementById(id);
        return { href: item.href, top: el?.getBoundingClientRect().top ?? Infinity };
      });

      // Find the section closest to the top but still above center
      const active = sections.reduce((closest, section) => {
        if (section.top <= 200 && section.top > (closest.top ?? -Infinity)) {
          return section;
        }
        return closest;
      }, sections[0]);

      if (active) {
        setActiveHash(active.href);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/50 bg-background/95 backdrop-blur-md safe-area-bottom lg:hidden">
      <div className="flex items-center justify-around py-1">
        {navItems.map((item) => {
          const isActive = activeHash === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-0.5 rounded-lg px-2 py-1 text-xs transition-colors",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon
                className={cn(
                  "h-5 w-5 transition-all",
                  isActive && "scale-110"
                )}
              />
              <span className="text-[10px] font-medium">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
