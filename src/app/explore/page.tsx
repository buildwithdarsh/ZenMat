import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Star, ArrowRight, Filter } from "lucide-react";
import { studios } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Explore Yoga Styles & Studios — Find Your Perfect Practice",
  description:
    "Browse 12 yoga styles from Hatha to Kundalini, discover studios near you, and take the Yoga Style Quiz to find your perfect match. Search classes, instructors, and studios.",
  openGraph: {
    title: "Explore Yoga Styles & Studios — Find Your Perfect Practice",
    description: "Browse yoga styles, discover studios, and take the Yoga Style Quiz on ZenMat.",
    url: "/explore",
  },
  twitter: {
    title: "Explore Yoga Styles & Studios — Find Your Perfect Practice",
    description: "Browse yoga styles, discover studios, and take the Yoga Style Quiz on ZenMat.",
  },
  alternates: { canonical: "/explore" },
};

const yogaStyles = [
  { name: "Hatha", description: "Classical form emphasizing alignment and breath", color: "bg-green-100 dark:bg-green-900/30", emoji: "Foundation" },
  { name: "Vinyasa", description: "Dynamic, breath-synchronized flowing sequences", color: "bg-blue-100 dark:bg-blue-900/30", emoji: "Flow" },
  { name: "Ashtanga", description: "Rigorous, disciplined set sequence practice", color: "bg-purple-100 dark:bg-purple-900/30", emoji: "Discipline" },
  { name: "Yin", description: "Slow, meditative long-held passive stretches", color: "bg-teal-100 dark:bg-teal-900/30", emoji: "Stillness" },
  { name: "Restorative", description: "Full prop support for deep relaxation and healing", color: "bg-indigo-100 dark:bg-indigo-900/30", emoji: "Healing" },
  { name: "Kundalini", description: "Energy work, kriyas, mantra, and meditation", color: "bg-amber-100 dark:bg-amber-900/30", emoji: "Energy" },
  { name: "Power", description: "Fitness-based, sweat-inducing strength builder", color: "bg-red-100 dark:bg-red-900/30", emoji: "Strength" },
  { name: "Hot Vinyasa", description: "Dynamic flow in a heated room (95-105F)", color: "bg-orange-100 dark:bg-orange-900/30", emoji: "Heat" },
  { name: "Prenatal", description: "Safe, nurturing practice for expecting mothers", color: "bg-pink-100 dark:bg-pink-900/30", emoji: "Nurture" },
  { name: "Chair Yoga", description: "Accessible yoga using a chair for support", color: "bg-cyan-100 dark:bg-cyan-900/30", emoji: "Accessible" },
  { name: "Meditation", description: "Guided mindfulness, body scan, and Yoga Nidra", color: "bg-violet-100 dark:bg-violet-900/30", emoji: "Mind" },
  { name: "Pranayama", description: "Ancient breathing techniques for vitality", color: "bg-emerald-100 dark:bg-emerald-900/30", emoji: "Breath" },
];

export default function ExplorePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-10">
      {/* Search */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-3">Explore Yoga Styles &amp; Studios</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-4 sm:mb-6 text-sm sm:text-base">
          Not sure where to start? Browse yoga styles, discover studios near you, or take our style quiz to find your perfect match.
        </p>
        <div className="flex max-w-lg mx-auto gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input placeholder="Search studios, classes, instructors..." className="pl-9 min-h-[44px] text-[16px] sm:text-sm" />
          </div>
          <Button variant="outline" className="min-h-[44px]"><Filter className="size-4 sm:mr-1" /> <span className="hidden sm:inline">Filters</span></Button>
        </div>
      </div>

      {/* Style Quiz CTA */}
      <Card className="mb-12 bg-gradient-to-r from-primary/5 to-accent/30 border-primary/20">
        <CardContent className="py-8 text-center">
          <h2 className="text-xl font-bold mb-2">Not sure which style is right for you?</h2>
          <p className="text-muted-foreground mb-4">Take our 5-question Yoga Style Quiz and get personalized recommendations</p>
          <Button asChild><Link href="/explore">Take the Quiz <ArrowRight className="ml-1 size-4" /></Link></Button>
        </CardContent>
      </Card>

      {/* Yoga Styles Grid */}
      <section className="mb-10 sm:mb-16">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Yoga Styles</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {yogaStyles.map((style) => (
            <Link key={style.name} href="/classes">
              <Card className="group hover:shadow-md transition-shadow h-full">
                <CardContent className="pt-5">
                  <div className={`inline-flex px-2 py-1 rounded-md text-xs font-medium mb-3 ${style.color}`}>
                    {style.emoji}
                  </div>
                  <h3 className="font-semibold mb-1">{style.name}</h3>
                  <p className="text-sm text-muted-foreground">{style.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Nearby Studios Map placeholder + list */}
      <section className="mb-10 sm:mb-16">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Studios Near You</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Map placeholder */}
          <div className="lg:col-span-1 rounded-xl bg-muted h-48 sm:h-80 lg:h-auto flex items-center justify-center border">
            <div className="text-center text-muted-foreground">
              <MapPin className="size-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Interactive Map</p>
              <p className="text-xs">San Francisco, CA</p>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-4">
            {studios.map((studio) => (
              <Card key={studio.id} className="hover:shadow-md transition-shadow">
                <CardContent className="py-4">
                  <div className="flex gap-4">
                    <Image src={studio.imageUrl} alt={studio.name} className="w-24 h-24 rounded-lg object-cover shrink-0" width={96} height={96} loading="lazy" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{studio.name}</h3>
                        {studio.isVerified && <Badge variant="secondary" className="text-[10px]">Verified</Badge>}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                        <MapPin className="size-3" />{studio.address}, {studio.city}
                        {studio.distanceKm && <span className="ml-2 font-medium">{studio.distanceKm} km</span>}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="size-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium">{studio.rating}</span>
                        <span className="text-xs text-muted-foreground">({studio.reviewCount} reviews)</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {studio.styles.slice(0, 5).map((s) => (
                          <Badge key={s} variant="outline" className="text-[10px] px-1.5 py-0">{s}</Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                        <span>Drop-in ${studio.dropInPrice}</span>
                        <span>Monthly ${studio.monthlyPrice}</span>
                        <span>{studio.classesPerWeek} classes/week</span>
                      </div>
                    </div>
                    <div className="hidden sm:flex flex-col items-end justify-between">
                      <Button size="sm" asChild><Link href="/studios">View</Link></Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
