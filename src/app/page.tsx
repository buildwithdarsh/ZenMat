import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MapPin, Clock, Users, Star, ArrowRight, Play,
  Flame, Heart, BookOpen, Mountain, Sparkles, Leaf,
} from "lucide-react";
import { studios, yogaClasses, instructors, onDemandCollections, challenges, testimonials, stats } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "ZenMat — Yoga Classes, Studios & On-Demand Practice Platform",
  description:
    "Book yoga classes, discover studios, stream on-demand sessions, and track your practice. Join a global community of yoga practitioners with ZenMat.",
  openGraph: {
    title: "ZenMat — Yoga Classes, Studios & On-Demand Practice Platform",
    description: "Book yoga classes, discover studios, stream on-demand sessions, and track your practice with ZenMat.",
    url: "/",
  },
  twitter: {
    title: "ZenMat — Yoga Classes, Studios & On-Demand Practice Platform",
    description: "Book yoga classes, discover studios, stream on-demand sessions, and track your practice with ZenMat.",
  },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const upcomingClasses = yogaClasses.filter((c) => !c.isCancelled).slice(0, 4);
  const activeChallenges = challenges.filter((c) => c.isActive);
  const features = [
    { icon: MapPin, title: "Studio Discovery", description: "Find nearby studios with map view, style filters, and real-time availability" },
    { icon: Play, title: "On-Demand Library", description: "Thousands of classes streaming anytime — Vinyasa, Yin, Meditation, and more" },
    { icon: Heart, title: "Progress Tracking", description: "Track streaks, pose milestones, meditation minutes, and wellness trends" },
    { icon: BookOpen, title: "Teacher Training", description: "Browse and enroll in Yoga Alliance certified 200hr and 500hr programs" },
    { icon: Mountain, title: "Retreats & Workshops", description: "Discover transformative retreats in Bali, Costa Rica, India, and beyond" },
    { icon: Leaf, title: "Ayurveda & Wellness", description: "Dosha quizzes, seasonal guides, and holistic wellness integration" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/30 py-10 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 animate-fade-in-up">
              <Badge variant="secondary" className="gap-1.5">
                <Sparkles className="size-3" />
                Trusted Yoga Platform for Studios &amp; Practitioners
              </Badge>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Book Yoga Classes, Stream On-Demand &amp;<br />
                <span className="text-primary">Track Your Practice</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
                Discover studios, book classes, stream on-demand, track your progress, and join a
                global community of yoga practitioners. All in one beautiful platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="w-full sm:w-auto min-h-[48px]" asChild>
                  <Link href="/explore">Start Your Journey <ArrowRight className="ml-1 size-4" /></Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto min-h-[48px]" asChild>
                  <Link href="/on-demand"><Play className="mr-1 size-4" /> Watch Free Classes</Link>
                </Button>
              </div>
              <div className="flex items-center justify-around sm:justify-start sm:gap-6 pt-2">
                {stats.slice(0, 3).map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-xl sm:text-2xl font-bold">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block animate-fade-in animation-delay-400">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image src="https://picsum.photos/id/309/700/500" alt="Yoga practitioner in a serene studio" className="w-full h-auto object-cover" width={700} height={500} priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg p-4 border animate-gentle-float">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Flame className="size-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">500K+</div>
                    <div className="text-xs text-muted-foreground">Monthly Bookings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Today's Classes */}
      <section className="py-10 sm:py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">Today&apos;s Classes</h2>
              <p className="text-muted-foreground mt-1 text-sm sm:text-base">Book a class and get on the mat</p>
            </div>
            <Button variant="outline" size="sm" className="hidden sm:inline-flex" asChild><Link href="/classes">View Full Schedule</Link></Button>
          </div>
          <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible no-scrollbar">
            {upcomingClasses.map((cls) => (
              <Card key={cls.id} className="group hover:shadow-md transition-shadow min-w-[280px] sm:min-w-0 snap-start shrink-0 sm:shrink">
                <div className="relative overflow-hidden rounded-t-xl">
                  <Image src={cls.imageUrl} alt={cls.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" width={600} height={400} loading="lazy" />
                  <Badge variant="secondary" className="absolute top-2 right-2 text-xs bg-background/90 backdrop-blur">
                    {cls.format === "virtual" ? "Virtual" : cls.format === "hybrid" ? "Hybrid" : "In-Person"}
                  </Badge>
                </div>
                <CardContent className="pt-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Clock className="size-3" />
                    <span>{new Date(cls.dateTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
                    <span className="text-border">|</span>
                    <span>{cls.duration} min</span>
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{cls.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Avatar className="h-5 w-5">
                      <AvatarImage src={cls.instructorAvatarUrl} />
                      <AvatarFallback>{cls.instructorName[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">{cls.instructorName}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users className="size-3" />
                      <span>{cls.currentEnrollment}/{cls.maxCapacity}</span>
                    </div>
                    <Button size="xs" variant={cls.currentEnrollment >= cls.maxCapacity ? "secondary" : "default"}>
                      {cls.currentEnrollment >= cls.maxCapacity ? "Waitlist" : "Book"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Studios */}
      <section className="py-10 sm:py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">Nearby Studios</h2>
              <p className="text-muted-foreground mt-1 text-sm sm:text-base">Discover verified studios in your area</p>
            </div>
            <Button variant="outline" size="sm" className="hidden sm:inline-flex" asChild><Link href="/studios">View All Studios</Link></Button>
          </div>
          <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible no-scrollbar">
            {studios.map((studio) => (
              <Link key={studio.id} href="/studios" className="min-w-[260px] sm:min-w-0 snap-start shrink-0 sm:shrink">
                <Card className="group hover:shadow-md transition-shadow h-full">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <Image src={studio.imageUrl} alt={studio.name} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300" width={600} height={400} loading="lazy" />
                    {studio.isVerified && <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs">Verified</Badge>}
                  </div>
                  <CardContent className="pt-3">
                    <h3 className="font-semibold text-sm">{studio.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <MapPin className="size-3" />
                      <span>{studio.city}, {studio.state}</span>
                      {studio.distanceKm && <span className="ml-auto">{studio.distanceKm} km</span>}
                    </div>
                    <div className="flex items-center gap-1 mt-2">
                      <Star className="size-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{studio.rating}</span>
                      <span className="text-xs text-muted-foreground">({studio.reviewCount})</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {studio.styles.slice(0, 3).map((style) => (
                        <Badge key={style} variant="outline" className="text-[10px] px-1.5 py-0">{style}</Badge>
                      ))}
                      {studio.styles.length > 3 && <Badge variant="outline" className="text-[10px] px-1.5 py-0">+{studio.styles.length - 3}</Badge>}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* On-Demand Collections */}
      <section className="py-10 sm:py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">On-Demand Library</h2>
              <p className="text-muted-foreground mt-1 text-sm sm:text-base">Practice anytime, anywhere</p>
            </div>
            <Button variant="outline" size="sm" className="hidden sm:inline-flex" asChild><Link href="/on-demand">Browse Library</Link></Button>
          </div>
          <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-5 sm:overflow-visible no-scrollbar">
            {onDemandCollections.map((col) => (
              <Link key={col.id} href="/on-demand" className="min-w-[200px] sm:min-w-0 snap-start shrink-0 sm:shrink">
                <Card className="group hover:shadow-md transition-shadow h-full overflow-hidden">
                  <div className="relative">
                    <Image src={col.imageUrl} alt={col.title} className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" width={600} height={400} loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-3 right-3">
                      <h3 className="font-semibold text-sm text-white">{col.title}</h3>
                      <p className="text-xs text-white/80">{col.videoCount} classes</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-10 sm:py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">Certified Yoga Instructors</h2>
              <p className="text-muted-foreground mt-1 text-sm sm:text-base">Learn from certified, experienced teachers</p>
            </div>
            <Button variant="outline" size="sm" className="hidden sm:inline-flex" asChild><Link href="/instructors">View All</Link></Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {instructors.slice(0, 3).map((inst) => (
              <Link key={inst.id} href="/instructors">
                <Card className="group hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={inst.avatarUrl} />
                        <AvatarFallback>{inst.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{inst.name}</h3>
                          {inst.isVerified && <Badge variant="secondary" className="text-[10px]">Verified</Badge>}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">{inst.experienceYears} years</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="size-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs font-medium">{inst.rating}</span>
                          <span className="text-xs text-muted-foreground">({inst.reviewCount})</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {inst.specializations.slice(0, 3).map((s) => (
                            <Badge key={s} variant="outline" className="text-[10px] px-1.5 py-0">{s}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3 line-clamp-2">{inst.bio}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-10 sm:py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold">Everything You Need for Your Practice</h2>
            <p className="text-muted-foreground mt-1 text-sm sm:text-base">One platform for practitioners, instructors, and studios</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {features.map((f) => (
              <Card key={f.title} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <f.icon className="size-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-10 sm:py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">Active Challenges</h2>
              <p className="text-muted-foreground mt-1 text-sm sm:text-base">Join a challenge and build your practice</p>
            </div>
            <Button variant="outline" size="sm" className="hidden sm:inline-flex" asChild><Link href="/community">View Community</Link></Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {activeChallenges.map((ch) => (
              <Card key={ch.id} className="overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative sm:w-48 shrink-0">
                    <Image src={ch.imageUrl} alt={ch.title} className="w-full h-40 sm:h-full object-cover" width={400} height={300} loading="lazy" />
                  </div>
                  <CardContent className="flex-1 pt-4 sm:pt-6">
                    <Badge variant="secondary" className="text-xs mb-2">{ch.category}</Badge>
                    <h3 className="font-semibold">{ch.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{ch.description}</p>
                    <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Users className="size-3" />{ch.participantCount.toLocaleString()} joined</span>
                      <span className="flex items-center gap-1"><Flame className="size-3" />{ch.reward}</span>
                    </div>
                    {ch.progress !== undefined && (
                      <div className="mt-3">
                        <div className="flex justify-between text-xs text-muted-foreground mb-1">
                          <span>Your progress</span><span>{ch.progress}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-muted overflow-hidden">
                          <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${ch.progress}%` }} />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 sm:py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold">What Our Community Says</h2>
            <p className="text-muted-foreground mt-1 text-sm sm:text-base">Real stories from real practitioners</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <Card key={t.id}>
                <CardContent className="pt-6">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 mt-4">
                    <Avatar className="h-10 w-10"><AvatarImage src={t.image} /><AvatarFallback>{t.name[0]}</AvatarFallback></Avatar>
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.classType} &middot; {t.practiceYears}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Begin Your Yoga Journey Today</h2>
          <p className="text-primary-foreground/80 mb-6 sm:mb-8 text-base sm:text-lg">
            Your first class is free. Join thousands of practitioners who found their balance with ZenMat.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto min-h-[48px]" asChild><Link href="/explore">Find a Studio Near You</Link></Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto min-h-[48px] bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/on-demand">Try Free On-Demand Class</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                name: "ZenMat",
                url: "https://zenmat.studio",
                potentialAction: {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://zenmat.studio/explore?q={search_term_string}",
                  },
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@type": "Organization",
                name: "ZenMat",
                url: "https://zenmat.studio",
                logo: "https://zenmat.studio/favicon.ico",
                sameAs: [
                  "https://instagram.com/zenmatstudio",
                  "https://youtube.com/@zenmatstudio",
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+91-98765-43210",
                  contactType: "customer service",
                  email: "namaste@zenmat.studio",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
