"use client";

import { useEffect } from "react";

/**
 * Hides the main app chrome (Header, Footer, MobileNav) when the
 * static brochure route is active, since it renders its own navigation.
 */
export function StaticLayoutShell({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.classList.add("static-brochure");
    return () => {
      document.body.classList.remove("static-brochure");
    };
  }, []);

  return <>{children}</>;
}
