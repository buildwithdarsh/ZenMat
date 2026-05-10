"use client";

import { useEffect, useState } from "react";
import { faqItems } from "@/lib/mock-data";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { Skeleton } from "./loading-skeleton";

export function FAQSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 380);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="faq"
      className="relative bg-muted/30 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <HelpCircle className="h-4 w-4" />
            Common Questions
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know before stepping onto the mat
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="mt-14">
          {!loaded ? (
            <div className="space-y-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border p-5"
                >
                  <Skeleton className="h-6 w-3/4" />
                </div>
              ))}
            </div>
          ) : (
            <Accordion className="space-y-3">
              {faqItems.map((faq, i) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className={`animate-fade-in-up opacity-0 rounded-xl border border-border/50 bg-card/50 px-5 backdrop-blur-sm transition-colors data-[state=open]:border-primary/20 data-[state=open]:bg-card ${
                    i % 3 === 0
                      ? ""
                      : i % 3 === 1
                      ? "animation-delay-200"
                      : "animation-delay-400"
                  }`}
                >
                  <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </div>
    </section>
  );
}
