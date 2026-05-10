import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Star, Search, Users, BookOpen, GraduationCap, CheckCircle2 } from "lucide-react";
import { instructors } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Yoga Instructors — Certified & Experienced Teachers",
  description:
    "Meet our Yoga Alliance certified instructors. Filter by specialization — Hatha, Vinyasa, Ashtanga, Yin, Kundalini, Meditation, Prenatal, and Therapeutic yoga teachers.",
  openGraph: {
    title: "Yoga Instructors — Certified & Experienced Teachers",
    description: "Meet certified yoga instructors specializing in Hatha, Vinyasa, Ashtanga, and more on ZenMat.",
    url: "/instructors",
  },
  twitter: {
    title: "Yoga Instructors — Certified & Experienced Teachers",
    description: "Meet certified yoga instructors specializing in Hatha, Vinyasa, Ashtanga, and more on ZenMat.",
  },
  alternates: { canonical: "/instructors" },
};

export default function InstructorsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-10">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Our Instructors</h1>
        <p className="text-muted-foreground mt-1 text-sm sm:text-base">Learn from certified, experienced yoga teachers</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6 sm:mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input placeholder="Search instructors by name, style, or specialization..." className="pl-9 min-h-[44px] text-[16px] sm:text-sm" />
        </div>
      </div>

      <div className="flex overflow-x-auto gap-2 mb-6 sm:mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible no-scrollbar">
        {["All", "Hatha", "Vinyasa", "Ashtanga", "Yin", "Kundalini", "Meditation", "Prenatal", "Therapeutic"].map((s) => (
          <Badge key={s} variant={s === "All" ? "default" : "outline"} className="cursor-pointer px-3 py-1.5 whitespace-nowrap shrink-0 min-h-[36px] flex items-center">{s}</Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {instructors.map((inst) => (
          <Card key={inst.id} className="group hover:shadow-md transition-shadow overflow-hidden">
            <div className="relative h-32 bg-gradient-to-br from-primary/20 to-accent/20">
              <Image src={inst.coverUrl} alt={`${inst.name} cover photo`} className="w-full h-full object-cover opacity-60" width={600} height={200} loading="lazy" />
              <div className="absolute -bottom-10 left-4">
                <Avatar className="h-20 w-20 border-4 border-card">
                  <AvatarImage src={inst.avatarUrl} />
                  <AvatarFallback className="text-lg">{inst.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <CardContent className="pt-12">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">{inst.name}</h3>
                {inst.isVerified && <CheckCircle2 className="size-4 text-primary" />}
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">{inst.experienceYears} years teaching experience</p>

              <div className="flex items-center gap-2 mt-2">
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{inst.rating}</span>
                <span className="text-xs text-muted-foreground">({inst.reviewCount} reviews)</span>
              </div>

              <div className="flex flex-wrap gap-1 mt-3">
                {inst.certifications.map((cert) => (
                  <Badge key={cert} className="text-[10px] bg-primary/10 text-primary border-0">
                    <GraduationCap className="size-3 mr-0.5" />{cert}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-1 mt-2">
                {inst.specializations.map((spec) => (
                  <Badge key={spec} variant="outline" className="text-xs">{spec}</Badge>
                ))}
              </div>

              <p className="text-sm text-muted-foreground mt-3 line-clamp-3">{inst.bio}</p>

              <div className="flex flex-wrap gap-1 mt-3">
                {inst.teachingStyleTags.map((tag) => (
                  <span key={tag} className="text-xs text-muted-foreground italic">#{tag}</span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><BookOpen className="size-3" />{inst.totalClassesTaught.toLocaleString()} classes</span>
                <span className="flex items-center gap-1"><Users className="size-3" />{inst.followerCount.toLocaleString()} followers</span>
              </div>

              <div className="flex gap-2 mt-4">
                <Button size="sm" className="flex-1">View Profile</Button>
                <Button size="sm" variant="outline" className="flex-1">Follow</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
