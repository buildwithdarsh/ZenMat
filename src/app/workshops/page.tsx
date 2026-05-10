import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DifficultyBadge } from "@/components/shared/difficulty-badge";
import { Calendar, Clock, Users, MapPin, Monitor } from "lucide-react";
import { workshops } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Yoga Workshops — Inversions, Meditation, Ayurveda & Sound Healing",
  description:
    "Register for deep-dive yoga workshops on arm balances, inversions, meditation, Ayurveda, sound healing, philosophy, and anatomy. In-person and virtual options available.",
  openGraph: {
    title: "Yoga Workshops — Inversions, Meditation, Ayurveda & Sound Healing",
    description: "Register for deep-dive yoga workshops on ZenMat — inversions, meditation, Ayurveda, and more.",
    url: "/workshops",
  },
  twitter: {
    title: "Yoga Workshops — Inversions, Meditation, Ayurveda & Sound Healing",
    description: "Register for deep-dive yoga workshops on ZenMat — inversions, meditation, Ayurveda, and more.",
  },
  alternates: { canonical: "/workshops" },
};

export default function WorkshopsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-10">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Workshops</h1>
        <p className="text-muted-foreground mt-1 text-sm sm:text-base">Deep-dive intensives on inversions, meditation, Ayurveda, sound healing, and more</p>
      </div>

      <div className="flex overflow-x-auto gap-2 mb-6 sm:mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible no-scrollbar">
        {["All", "Arm Balances", "Inversions", "Meditation", "Ayurveda", "Sound Healing", "Philosophy", "Anatomy"].map((t) => (
          <Badge key={t} variant={t === "All" ? "default" : "outline"} className="cursor-pointer px-3 py-1.5 whitespace-nowrap shrink-0 min-h-[36px] flex items-center">{t}</Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {workshops.map((ws) => (
          <Card key={ws.id} className="group hover:shadow-md transition-shadow overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              <div className="relative sm:w-56 shrink-0">
                <Image src={ws.imageUrl} alt={ws.title} className="w-full h-52 sm:h-full object-cover" width={400} height={350} loading="lazy" />
                <div className="absolute top-2 left-2 flex gap-1.5">
                  <DifficultyBadge level={ws.level} />
                  {ws.isVirtual && <Badge variant="secondary" className="text-xs gap-1"><Monitor className="size-3" />Virtual</Badge>}
                </div>
              </div>
              <CardContent className="flex-1 pt-4 sm:pt-5">
                <div className="flex flex-wrap gap-1 mb-2">
                  {ws.topics.map((topic) => (
                    <Badge key={topic} variant="outline" className="text-[10px] px-1.5 py-0">{topic}</Badge>
                  ))}
                </div>
                <h3 className="text-lg font-semibold mb-1">{ws.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-3">{ws.description}</p>

                <div className="flex items-center gap-2 mb-3">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={ws.instructorAvatarUrl} />
                    <AvatarFallback>{ws.instructorName[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">{ws.instructorName}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><Calendar className="size-3" />{new Date(ws.dateTime).toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" })}</span>
                  <span className="flex items-center gap-1"><Clock className="size-3" />{ws.duration / 60}h ({ws.duration}min)</span>
                  <span className="flex items-center gap-1"><MapPin className="size-3" />{ws.studioName}</span>
                  <span className="flex items-center gap-1"><Users className="size-3" />{ws.currentEnrollment}/{ws.maxCapacity} spots</span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t">
                  <div>
                    <span className="text-lg font-bold">${ws.price}</span>
                    <span className="text-xs text-muted-foreground ml-1">per person</span>
                  </div>
                  <Button size="sm" className="min-h-[44px]" variant={ws.currentEnrollment >= ws.maxCapacity ? "secondary" : "default"}>
                    {ws.currentEnrollment >= ws.maxCapacity ? "Join Waitlist" : "Register"}
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>

      {/* Event JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            workshops.map((ws) => ({
              "@context": "https://schema.org",
              "@type": "Event",
              name: ws.title,
              description: ws.description,
              startDate: ws.dateTime,
              eventAttendanceMode: ws.isVirtual
                ? "https://schema.org/OnlineEventAttendanceMode"
                : "https://schema.org/OfflineEventAttendanceMode",
              eventStatus: "https://schema.org/EventScheduled",
              location: ws.isVirtual
                ? { "@type": "VirtualLocation", url: "https://zenmat.studio/workshops" }
                : { "@type": "Place", name: ws.studioName },
              image: ws.imageUrl,
              offers: {
                "@type": "Offer",
                price: ws.price,
                priceCurrency: "USD",
                availability: ws.currentEnrollment < ws.maxCapacity
                  ? "https://schema.org/InStock"
                  : "https://schema.org/SoldOut",
              },
              organizer: {
                "@type": "Organization",
                name: "ZenMat",
                url: "https://zenmat.studio",
              },
            }))
          ),
        }}
      />
    </div>
  );
}
