"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { instructors } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Award, Clock, BookOpen, Star } from "lucide-react";
import { InstructorSkeleton } from "./loading-skeleton";

export function InstructorsSection() {
  const [loaded, setLoaded] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    // This is the "slow" section (1800-2500ms)
    const timer = setTimeout(() => setLoaded(true), 2100);
    return () => clearTimeout(timer);
  }, []);

  // Only show instructors from ZenMat Studio SF
  const studioInstructors = instructors.filter((i) =>
    i.studios.some((s) => s.studioId === "s1")
  );

  return (
    <section
      id="instructors"
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 h-64 w-64 -translate-y-1/2 rounded-full bg-zenmat-sage/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-zenmat-lotus/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Star className="h-4 w-4" />
            Dedicated Practitioners
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Our Instructors
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Learn from teachers who live and breathe yoga &mdash; each bringing
            years of dedicated practice and authentic lineage
          </p>
        </div>

        {/* Instructor cards */}
        <div className="mt-14">
          {!loaded ? (
            <InstructorSkeleton count={5} />
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {studioInstructors.map((instructor, i) => (
                <Card
                  key={instructor.id}
                  className={`group animate-fade-in-up opacity-0 cursor-pointer border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
                    i % 3 === 0
                      ? ""
                      : i % 3 === 1
                      ? "animation-delay-200"
                      : "animation-delay-400"
                  }`}
                  onClick={() =>
                    setExpandedId(
                      expandedId === instructor.id ? null : instructor.id
                    )
                  }
                >
                  <CardContent className="p-6">
                    {/* Photo + name */}
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-4 h-36 w-36 overflow-hidden rounded-full ring-4 ring-primary/10 transition-all group-hover:ring-primary/30">
                        <Image
                          src={instructor.avatarUrl}
                          alt={instructor.name}
                          fill
                          className="object-cover"
                          sizes="144px"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {instructor.name}
                      </h3>
                      <p className="mt-1 text-sm text-primary font-medium">
                        {instructor.teachingStyleTags.slice(0, 2).join(" & ")}
                      </p>
                    </div>

                    {/* Certifications */}
                    <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                      {instructor.certifications.map((cert) => (
                        <Badge
                          key={cert}
                          variant="secondary"
                          className="text-xs"
                        >
                          <Award className="mr-1 h-3 w-3" />
                          {cert}
                        </Badge>
                      ))}
                    </div>

                    {/* Quick stats */}
                    <div className="mt-4 flex justify-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {instructor.experienceYears} years
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-3.5 w-3.5" />
                        {instructor.specializations.length} styles
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        {instructor.rating}
                      </span>
                    </div>

                    <Separator className="my-4" />

                    {/* Bio / Philosophy */}
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {expandedId === instructor.id
                        ? instructor.bio
                        : instructor.philosophy}
                    </p>

                    {/* Specializations */}
                    <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                      {instructor.specializations.map((spec) => (
                        <span
                          key={spec}
                          className="rounded-full bg-secondary/80 px-2.5 py-0.5 text-xs text-secondary-foreground"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    <p className="mt-3 text-center text-xs text-primary">
                      {expandedId === instructor.id
                        ? "Click to collapse"
                        : "Click to read full bio"}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
