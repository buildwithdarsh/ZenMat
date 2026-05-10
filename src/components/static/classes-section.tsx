"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { classPrograms } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Activity, Flame, Dumbbell } from "lucide-react";
import { CardGridSkeleton } from "./loading-skeleton";

const difficultyColor: Record<string, string> = {
  "All Levels": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  Beginner: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  Intermediate: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  Advanced: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
};

const intensityIcon: Record<string, React.ReactNode> = {
  Gentle: <Activity className="h-3.5 w-3.5" />,
  Moderate: <Flame className="h-3.5 w-3.5" />,
  Challenging: <Flame className="h-3.5 w-3.5" />,
  Vigorous: <Dumbbell className="h-3.5 w-3.5" />,
};

const categories = [
  { value: "all", label: "All Classes" },
  { value: "traditional", label: "Traditional" },
  { value: "gentle", label: "Gentle" },
  { value: "specialty", label: "Specialty" },
  { value: "programs", label: "Programs" },
];

function getCategory(name: string): string {
  if (["Hatha Yoga", "Ashtanga Yoga", "Vinyasa Flow"].includes(name))
    return "traditional";
  if (
    ["Yin / Restorative Yoga", "Pranayama & Meditation"].includes(name)
  )
    return "gentle";
  if (["Power Yoga", "Prenatal Yoga", "Kids Yoga"].includes(name))
    return "specialty";
  return "programs";
}

export function ClassesSection() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const filteredClasses =
    activeTab === "all"
      ? classPrograms
      : classPrograms.filter((c) => getCategory(c.name) === activeTab);

  return (
    <section
      id="classes"
      className="relative bg-muted/30 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Activity className="h-4 w-4" />
            Our Offerings
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Classes & Programs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From gentle beginnings to advanced mastery, find the practice that
            speaks to your body and soul
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mt-10 flex justify-center">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full max-w-lg"
          >
            <TabsList className="grid w-full grid-cols-5">
              {categories.map((cat) => (
                <TabsTrigger key={cat.value} value={cat.value} className="text-xs sm:text-sm">
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Class cards */}
        <div className="mt-10">
          {!loaded ? (
            <CardGridSkeleton count={6} />
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredClasses.map((cls, i) => (
                <Card
                  key={cls.id}
                  className={`group animate-fade-in-up opacity-0 overflow-hidden border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
                    i % 4 === 0
                      ? ""
                      : i % 4 === 1
                      ? "animation-delay-200"
                      : i % 4 === 2
                      ? "animation-delay-400"
                      : "animation-delay-600"
                  }`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={cls.image}
                      alt={cls.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex gap-2">
                      <Badge
                        className={`${difficultyColor[cls.difficulty]} border-0 text-xs font-medium`}
                      >
                        {cls.difficulty}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {cls.name}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {cls.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        {cls.duration}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        {intensityIcon[cls.intensity]}
                        {cls.intensity}
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {cls.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-secondary/80 px-2.5 py-0.5 text-xs text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
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
