"use client";

import { Navbar } from "./navbar";
import { HeroSection } from "./hero-section";
import { AboutSection } from "./about-section";
import { ClassesSection } from "./classes-section";
import { InstructorsSection } from "./instructors-section";
import { StudioSection } from "./studio-section";
import { TestimonialsSection } from "./testimonials-section";
import { FAQSection } from "./faq-section";
import { ContactSection } from "./contact-section";
import { Footer as StaticFooter } from "./footer";
import { StaticMobileNav } from "./static-mobile-nav";

export function StaticBrochurePage() {
  return (
    <>
      {/* 1. Navigation */}
      <Navbar />

      {/* 2. Hero — 800-1200ms page load delay */}
      <HeroSection />

      {/* 3. About — 300-500ms lazy delay */}
      <AboutSection />

      {/* 4. Classes & Programs — 300-500ms lazy delay */}
      <ClassesSection />

      {/* 5. Instructors — 1800-2500ms slow load (intentional) */}
      <InstructorsSection />

      {/* 6. Studio & Space Gallery — 300-500ms lazy delay */}
      <StudioSection />

      {/* 7. Testimonials — 300-500ms lazy delay */}
      <TestimonialsSection />

      {/* 8. FAQ — 300-500ms lazy delay */}
      <FAQSection />

      {/* 9. Contact — 400-700ms action delay */}
      <ContactSection />

      {/* 10. Footer */}
      <div className="pb-16 lg:pb-0">
        <StaticFooter />
      </div>

      {/* Mobile bottom navigation */}
      <StaticMobileNav />
    </>
  );
}
