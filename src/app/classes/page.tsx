import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Users, MapPin, Thermometer, Calendar } from "lucide-react";
import { DifficultyBadge } from "@/components/shared/difficulty-badge";
import { FormatBadge } from "@/components/shared/format-badge";
import { yogaClasses, classTimings } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Yoga Class Schedule — Book Hatha, Vinyasa, Yin & More",
  description:
    "Browse and book yoga classes across all styles and levels. Filter by Hatha, Vinyasa, Yin, Power, Meditation, and Prenatal. In-person, virtual, and hybrid formats available.",
  openGraph: {
    title: "Yoga Class Schedule — Book Hatha, Vinyasa, Yin & More",
    description: "Browse and book yoga classes across all styles and levels at ZenMat studios.",
    url: "/classes",
  },
  twitter: {
    title: "Yoga Class Schedule — Book Hatha, Vinyasa, Yin & More",
    description: "Browse and book yoga classes across all styles and levels at ZenMat studios.",
  },
  alternates: { canonical: "/classes" },
};

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function ClassesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-10">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Class Schedule</h1>
        <p className="text-muted-foreground mt-1 text-sm sm:text-base">Browse, filter, and book classes across all studios</p>
      </div>

      {/* Filter bar - horizontal scroll on mobile */}
      <div className="flex overflow-x-auto gap-2 mb-6 sm:mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible no-scrollbar">
        {["All Styles", "Hatha", "Vinyasa", "Yin", "Power", "Meditation", "Prenatal"].map((style) => (
          <Badge key={style} variant={style === "All Styles" ? "default" : "outline"} className="cursor-pointer px-3 py-1.5 whitespace-nowrap shrink-0 min-h-[36px] flex items-center">
            {style}
          </Badge>
        ))}
        <Badge variant="outline" className="cursor-pointer px-3 py-1.5 whitespace-nowrap shrink-0 min-h-[36px] flex items-center">All Levels</Badge>
        <Badge variant="outline" className="cursor-pointer px-3 py-1.5 whitespace-nowrap shrink-0 min-h-[36px] flex items-center">Virtual</Badge>
        <Badge variant="outline" className="cursor-pointer px-3 py-1.5 whitespace-nowrap shrink-0 min-h-[36px] flex items-center">In-Person</Badge>
      </div>

      <Tabs defaultValue="cards">
        <TabsList className="mb-6 w-full sm:w-auto">
          <TabsTrigger value="cards" className="flex-1 sm:flex-initial">Card View</TabsTrigger>
          <TabsTrigger value="schedule" className="flex-1 sm:flex-initial">Weekly Schedule</TabsTrigger>
        </TabsList>

        <TabsContent value="cards">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {yogaClasses.map((cls) => (
              <Card key={cls.id} className="group hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative">
                  <Image src={cls.imageUrl} alt={cls.title} className="w-full h-44 object-cover" width={600} height={400} loading="lazy" />
                  <div className="absolute top-2 left-2 flex gap-1.5">
                    <DifficultyBadge level={cls.levelLabel} />
                    <FormatBadge format={cls.format} />
                  </div>
                  {cls.currentEnrollment >= cls.maxCapacity && (
                    <div className="absolute top-2 right-2">
                      <Badge variant="destructive" className="text-xs">Full</Badge>
                    </div>
                  )}
                </div>
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Calendar className="size-3" />
                    <span>{new Date(cls.dateTime).toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" })}</span>
                    <Clock className="size-3 ml-1" />
                    <span>{new Date(cls.dateTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
                    <span className="text-border">|</span>
                    <span>{cls.duration}min</span>
                  </div>
                  <h3 className="font-semibold mb-1">{cls.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{cls.description}</p>

                  <div className="flex items-center gap-2 mb-3">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={cls.instructorAvatarUrl} />
                      <AvatarFallback>{cls.instructorName[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{cls.instructorName}</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><MapPin className="size-3" />{cls.studioName}</span>
                    {cls.roomTemp !== "Regular" && (
                      <span className="flex items-center gap-1"><Thermometer className="size-3" />{cls.roomTemp}</span>
                    )}
                  </div>

                  {cls.propsRequired.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {cls.propsRequired.map((prop) => (
                        <Badge key={prop} variant="outline" className="text-[10px] px-1.5 py-0">{prop}</Badge>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-3 border-t">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">${cls.price}</span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Users className="size-3" />{cls.currentEnrollment}/{cls.maxCapacity}
                      </span>
                      {cls.waitlistCount > 0 && (
                        <span className="text-xs text-orange-600">+{cls.waitlistCount} waitlist</span>
                      )}
                    </div>
                    <Button size="sm" className="min-h-[44px] min-w-[44px]" variant={cls.currentEnrollment >= cls.maxCapacity ? "secondary" : "default"}>
                      {cls.currentEnrollment >= cls.maxCapacity ? "Join Waitlist" : "Book Now"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="schedule">
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="grid grid-cols-7 gap-2">
                {classTimings.map((daySchedule) => (
                  <div key={daySchedule.day} className="space-y-2">
                    <div className="text-center font-semibold text-sm py-2 bg-muted rounded-lg">
                      {daySchedule.day}
                    </div>
                    {daySchedule.classes.map((cls, i) => (
                      <Card key={i} className="hover:shadow-sm transition-shadow cursor-pointer" size="sm">
                        <CardContent className="p-2">
                          <div className="text-xs font-medium text-primary">{cls.time}</div>
                          <div className="text-xs font-semibold mt-0.5">{cls.name}</div>
                          <div className="text-[10px] text-muted-foreground">{cls.instructor}</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
