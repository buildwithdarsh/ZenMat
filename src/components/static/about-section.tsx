"use client";

import { useEffect, useState } from "react";
import { stats, aboutContent } from "@/lib/mock-data";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Users,
  Award,
  ShieldCheck,
  Heart,
  Leaf,
  Sparkles,
} from "lucide-react";
import { Skeleton } from "./loading-skeleton";

const iconMap: Record<string, React.ReactNode> = {
  calendar: <Calendar className="h-7 w-7" />,
  users: <Users className="h-7 w-7" />,
  award: <Award className="h-7 w-7" />,
  "shield-check": <ShieldCheck className="h-7 w-7" />,
};

export function AboutSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-zenmat-sand/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Leaf className="h-4 w-4" />
            Our Story
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            About ZenMat
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Rooted in tradition, growing with our community
          </p>
        </div>

        {/* Stats bar */}
        {!loaded ? (
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <Skeleton className="h-14 w-14 rounded-xl" />
                <Skeleton className="h-8 w-16" />
                <Skeleton className="h-4 w-28" />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`animate-fade-in-up opacity-0 flex flex-col items-center gap-2 rounded-2xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-sm ${
                  i === 0
                    ? ""
                    : i === 1
                    ? "animation-delay-200"
                    : i === 2
                    ? "animation-delay-400"
                    : "animation-delay-600"
                }`}
              >
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  {iconMap[stat.icon]}
                </div>
                <span className="text-3xl font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}

        <Separator className="my-16" />

        {/* Story content */}
        {!loaded ? (
          <div className="grid gap-8 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-3">
            <div className="animate-fade-in-up opacity-0">
              <div className="mb-3 flex items-center gap-2 text-primary">
                <Heart className="h-5 w-5" />
                <h3 className="text-lg font-semibold text-foreground">
                  Our Story
                </h3>
              </div>
              <p className="leading-relaxed text-muted-foreground">
                {aboutContent.story}
              </p>
            </div>
            <div className="animate-fade-in-up opacity-0 animation-delay-200">
              <div className="mb-3 flex items-center gap-2 text-primary">
                <Sparkles className="h-5 w-5" />
                <h3 className="text-lg font-semibold text-foreground">
                  Our Philosophy
                </h3>
              </div>
              <p className="leading-relaxed text-muted-foreground">
                {aboutContent.philosophy}
              </p>
            </div>
            <div className="animate-fade-in-up opacity-0 animation-delay-400">
              <div className="mb-3 flex items-center gap-2 text-primary">
                <Leaf className="h-5 w-5" />
                <h3 className="text-lg font-semibold text-foreground">
                  Our Approach
                </h3>
              </div>
              <p className="leading-relaxed text-muted-foreground">
                {aboutContent.approach}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
