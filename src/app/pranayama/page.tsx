import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DifficultyBadge } from "@/components/shared/difficulty-badge";
import { Wind, Clock, AlertTriangle, CheckCircle2, Play, ArrowRight } from "lucide-react";
import { pranayamaExercises } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Pranayama Library — Breathing Techniques & Progressive Training",
  description:
    "Explore ancient pranayama breathing techniques with visual breath guides, audio cues, and progressive tracking. From Ujjayi to Kapalabhati — foundational to advanced practices.",
  openGraph: {
    title: "Pranayama Library — Breathing Techniques & Progressive Training",
    description: "Explore pranayama breathing techniques with visual guides and progressive tracking on ZenMat.",
    url: "/pranayama",
  },
  twitter: {
    title: "Pranayama Library — Breathing Techniques & Progressive Training",
    description: "Explore pranayama breathing techniques with visual guides and progressive tracking on ZenMat.",
  },
  alternates: { canonical: "/pranayama" },
};

const progressionStages = [
  { stage: 1, name: "Foundation", techniques: "Diaphragmatic, Ujjayi, Basic counting", milestone: "14 days of daily practice", status: "completed" },
  { stage: 2, name: "Expansion", techniques: "Nadi Shodhana, Bhramari, Sama Vritti", milestone: "21 days, 10-min sessions", status: "current" },
  { stage: 3, name: "Energizing", techniques: "Kapalabhati, Bhastrika, Surya Bhedana", milestone: "30 days, Kapalabhati 60/min", status: "locked" },
  { stage: 4, name: "Retention", techniques: "Kumbhaka, Viloma", milestone: "Comfortable 8-sec retention", status: "locked" },
  { stage: 5, name: "Advanced", techniques: "Extended Kumbhaka, Bandhas", milestone: "20-sec retention", status: "locked" },
  { stage: 6, name: "Mastery", techniques: "Custom ratios, Integrated practice", milestone: "Ongoing", status: "locked" },
];

export default function PranayamaPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-10">
      <div className="mb-8 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Pranayama Library</h1>
        <p className="text-muted-foreground max-w-2xl text-sm sm:text-base">
          Explore ancient breathing techniques with visual breath guides, audio cues, and progressive tracking.
          From foundational awareness to advanced retention practices.
        </p>
      </div>

      {/* Breath Guide CTA */}
      <Card className="mb-10 bg-gradient-to-r from-primary/5 to-accent/20 border-primary/20">
        <CardContent className="py-6 flex flex-col sm:flex-row items-center gap-6">
          <div className="size-24 rounded-full border-4 border-primary/30 flex items-center justify-center shrink-0 animate-breathe">
            <Wind className="size-10 text-primary" />
          </div>
          <div className="text-center sm:text-left flex-1">
            <h2 className="text-xl font-bold mb-1">Visual Breath Guide</h2>
            <p className="text-muted-foreground mb-3">
              Follow the animated circle as it expands and contracts. Inhale as it grows, exhale as it shrinks.
              Set custom ratios like 4:4:8:4.
            </p>
            <Button><Play className="size-4 mr-2" /> Start Breathing Exercise</Button>
          </div>
        </CardContent>
      </Card>

      {/* Progression Tracking */}
      <section className="mb-10 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Your Pranayama Progression</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {progressionStages.map((stage) => (
            <Card key={stage.stage} className={`${stage.status === "current" ? "ring-2 ring-primary" : ""} ${stage.status === "locked" ? "opacity-60" : ""}`}>
              <CardContent className="pt-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`size-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    stage.status === "completed" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                    stage.status === "current" ? "bg-primary text-primary-foreground" :
                    "bg-muted text-muted-foreground"
                  }`}>
                    {stage.status === "completed" ? <CheckCircle2 className="size-4" /> : stage.stage}
                  </div>
                  <h3 className="font-semibold">Stage {stage.stage}: {stage.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{stage.techniques}</p>
                <p className="text-xs text-muted-foreground italic">Milestone: {stage.milestone}</p>
                {stage.status === "current" && (
                  <Button size="sm" className="mt-3 w-full">Continue Practice</Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Technique Library */}
      <section>
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Technique Library</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {pranayamaExercises.map((ex) => (
            <Card key={ex.id} className="group hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative">
                <Image src={ex.imageUrl} alt={ex.technique} className="w-full h-40 object-cover" width={600} height={400} loading="lazy" />
                <DifficultyBadge level={ex.level} />
              </div>
              <CardContent className="pt-3">
                <h3 className="font-semibold mb-1">{ex.technique}</h3>
                <p className="text-sm text-muted-foreground mb-3">{ex.description}</p>

                <div className="flex items-center gap-2 mb-2">
                  <Clock className="size-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    {ex.durationOptions.join(", ")} min
                  </span>
                </div>

                <div className="flex flex-wrap gap-1 mb-2">
                  {ex.benefits.map((b) => (
                    <Badge key={b} variant="outline" className="text-[10px] px-1.5 py-0">
                      <CheckCircle2 className="size-2.5 mr-0.5 text-green-500" />{b}
                    </Badge>
                  ))}
                </div>

                {ex.contraindications.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {ex.contraindications.map((c) => (
                      <Badge key={c} variant="outline" className="text-[10px] px-1.5 py-0 border-orange-300 text-orange-600">
                        <AlertTriangle className="size-2.5 mr-0.5" />{c}
                      </Badge>
                    ))}
                  </div>
                )}

                <Button size="sm" className="w-full">
                  <Play className="size-3 mr-1" /> Practice
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
