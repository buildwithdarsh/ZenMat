import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Clock, Star, Timer, Moon, Sun, Heart, Brain, Lock } from "lucide-react";
import { meditationSessions, meditationCourses } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Guided Meditation & Mindfulness — Sessions, Timer & Courses",
  description:
    "Access guided meditation sessions, a customizable timer with ambient sounds, and progressive mindfulness courses. Practice body scans, compassion, sleep, and focus meditations.",
  openGraph: {
    title: "Guided Meditation & Mindfulness — Sessions, Timer & Courses",
    description: "Access guided meditation sessions, a customizable timer, and mindfulness courses on ZenMat.",
    url: "/meditation",
  },
  twitter: {
    title: "Guided Meditation & Mindfulness — Sessions, Timer & Courses",
    description: "Access guided meditation sessions, a customizable timer, and mindfulness courses on ZenMat.",
  },
  alternates: { canonical: "/meditation" },
};

const timerPresets = [3, 5, 10, 15, 20, 30, 45, 60];
const ambientSounds = ["Rain", "Ocean", "Forest", "River", "Singing Bowls", "Om Chanting", "Silence"];

export default function MeditationPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-10">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-3">Meditation &amp; Mindfulness</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
          Guided meditations, custom timers, progressive courses, and ambient soundscapes to deepen your inner practice.
        </p>
      </div>

      <Tabs defaultValue="guided">
        <TabsList className="mb-6 sm:mb-8 mx-auto flex w-full sm:w-fit overflow-x-auto no-scrollbar">
          <TabsTrigger value="guided" className="flex-1 sm:flex-initial">Guided Sessions</TabsTrigger>
          <TabsTrigger value="timer" className="flex-1 sm:flex-initial">Timer</TabsTrigger>
          <TabsTrigger value="courses" className="flex-1 sm:flex-initial">Courses</TabsTrigger>
        </TabsList>

        <TabsContent value="guided">
          <div className="flex overflow-x-auto gap-2 mb-6 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible no-scrollbar">
            {["All", "Mindfulness", "Sleep", "Body Scan", "Compassion", "Focus", "Energy"].map((cat) => (
              <Badge key={cat} variant={cat === "All" ? "default" : "outline"} className="cursor-pointer px-3 py-1.5 whitespace-nowrap shrink-0 min-h-[36px] flex items-center">{cat}</Badge>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {meditationSessions.map((session) => (
              <Card key={session.id} className="group hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative">
                  <Image src={session.imageUrl} alt={session.title} className="w-full h-40 object-cover" width={600} height={400} loading="lazy" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="size-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="size-5 text-black ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="text-xs">{session.category}</Badge>
                  </div>
                  <div className="absolute top-2 right-2">
                    {session.isFree ? (
                      <Badge className="bg-green-600 text-white text-xs">Free</Badge>
                    ) : (
                      <Badge variant="secondary" className="text-xs gap-1"><Lock className="size-3" />Premium</Badge>
                    )}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                    {session.duration} min
                  </div>
                </div>
                <CardContent className="pt-3">
                  <h3 className="font-semibold text-sm mb-1">{session.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{session.description}</p>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-5 w-5">
                      <AvatarImage src={session.instructorAvatarUrl} />
                      <AvatarFallback>{session.instructorName[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">{session.instructorName}</span>
                    <Badge variant="outline" className="text-[10px] ml-auto">{session.level}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="timer">
          <div className="max-w-xl mx-auto">
            <Card className="sm:border sm:shadow border-0 shadow-none">
              <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 text-center px-2 sm:px-6">
                <div className="size-40 sm:size-48 rounded-full border-4 border-primary/20 mx-auto flex items-center justify-center mb-6 sm:mb-8 animate-breathe">
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl font-bold">10:00</div>
                    <div className="text-sm text-muted-foreground mt-1">minutes</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Duration</h3>
                  <div className="flex overflow-x-auto justify-start sm:justify-center gap-2 -mx-2 px-2 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible no-scrollbar">
                    {timerPresets.map((min) => (
                      <Button key={min} variant={min === 10 ? "default" : "outline"} size="sm" className="min-h-[44px] min-w-[56px] shrink-0">
                        {min} min
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Ambient Sound</h3>
                  <div className="flex overflow-x-auto gap-2 -mx-2 px-2 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center sm:overflow-visible no-scrollbar">
                    {ambientSounds.map((sound) => (
                      <Badge key={sound} variant={sound === "Singing Bowls" ? "default" : "outline"} className="cursor-pointer px-3 py-1.5 whitespace-nowrap shrink-0 min-h-[36px] flex items-center">
                        {sound}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center gap-3 px-4 sm:px-0">
                  <Button size="lg" className="w-full sm:w-auto px-8 min-h-[52px] text-base">
                    <Play className="size-5 mr-2" /> Begin Meditation
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8 pt-6 border-t">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-primary">840</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Total Minutes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-primary">56</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Sessions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-primary">12</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Day Streak</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="courses">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {meditationCourses.map((course) => (
              <Card key={course.id} className="group hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative">
                  <Image src={course.imageUrl} alt={course.title} className="w-full h-44 object-cover" width={600} height={400} loading="lazy" />
                  <Badge variant="outline" className="absolute top-2 left-2 bg-background/90 backdrop-blur">{course.level}</Badge>
                </div>
                <CardContent className="pt-3">
                  <h3 className="font-semibold mb-1">{course.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{course.description}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Clock className="size-3" />{course.durationDays} days</span>
                    <span className="flex items-center gap-1"><Play className="size-3" />{course.sessions} sessions</span>
                    <span className="flex items-center gap-1"><Star className="size-3 fill-yellow-400 text-yellow-400" />{course.rating}</span>
                  </div>
                  <div className="text-xs text-muted-foreground mb-3">{course.enrolledCount.toLocaleString()} enrolled</div>
                  <Button size="sm" className="w-full">Start Course</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
