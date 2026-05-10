"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, MessageCircle } from "lucide-react";
import { TestimonialSkeleton } from "./loading-skeleton";

export function TestimonialsSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 350);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      {/* Decorative */}
      <div className="absolute top-1/3 right-0 h-72 w-72 rounded-full bg-zenmat-sky/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <MessageCircle className="h-4 w-4" />
            Student Voices
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Testimonials
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real stories from our community about the transformative power of
            practice
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="mt-14">
          {!loaded ? (
            <TestimonialSkeleton />
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, i) => (
                <Card
                  key={testimonial.id}
                  className={`animate-fade-in-up opacity-0 border-border/50 transition-all duration-300 hover:border-primary/20 hover:shadow-md ${
                    i % 3 === 0
                      ? ""
                      : i % 3 === 1
                      ? "animation-delay-200"
                      : "animation-delay-400"
                  }`}
                >
                  <CardContent className="p-6">
                    {/* Quote icon */}
                    <Quote className="mb-3 h-8 w-8 text-primary/20" />

                    {/* Stars */}
                    <div className="mb-3 flex gap-0.5">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, j) => (
                          <Star
                            key={j}
                            className="h-4 w-4 fill-amber-400 text-amber-400"
                          />
                        )
                      )}
                    </div>

                    {/* Quote text */}
                    <p className="mb-6 text-sm leading-relaxed text-muted-foreground italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 border-t border-border/50 pt-4">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.classType} &middot;{" "}
                          {testimonial.practiceYears} of practice
                        </p>
                      </div>
                    </div>
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
