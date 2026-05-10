"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { studioInfo } from "@/lib/mock-data";
import { ChevronDown, Flower2 } from "lucide-react";
import { HeroSkeleton } from "./loading-skeleton";

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 900);
    return () => clearTimeout(timer);
  }, []);

  if (!loaded) return <HeroSkeleton />;

  return (
    <section
      id="hero"
      className="relative flex min-h-[100vh] items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(https://picsum.photos/id/15/1920/1080)",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Floating decorative element */}
      <div className="absolute top-1/4 right-[15%] hidden lg:block">
        <div className="animate-breathe">
          <Flower2 className="h-16 w-16 text-white/10" strokeWidth={1} />
        </div>
      </div>
      <div className="absolute bottom-1/3 left-[10%] hidden lg:block">
        <div className="animate-breathe animation-delay-600">
          <Flower2 className="h-12 w-12 text-white/8" strokeWidth={1} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
        <div className="animate-fade-in-up opacity-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm">
            <Flower2 className="h-4 w-4" />
            Yoga Alliance Registered Studio
          </div>
        </div>

        <h1 className="animate-fade-in-up opacity-0 animation-delay-200 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {studioInfo.tagline}
        </h1>

        <p className="animate-fade-in-up opacity-0 animation-delay-400 max-w-2xl text-lg text-white/80 sm:text-xl">
          A sanctuary for body, breath, and mind. Discover the transformative
          power of yoga at {studioInfo.name} &mdash; where ancient wisdom meets
          modern practice.
        </p>

        <div className="animate-fade-in-up opacity-0 animation-delay-600 flex flex-col items-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="animate-pulse-glow rounded-full px-8 py-6 text-base font-semibold"
            asChild
          >
            <a href="#contact">Begin Your Journey</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-white/30 bg-white/10 px-8 py-6 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            asChild
          >
            <a href="#classes">Explore Classes</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-gentle-float">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white/60 transition-colors hover:text-white/90"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
