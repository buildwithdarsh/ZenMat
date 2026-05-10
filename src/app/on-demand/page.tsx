import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Play, Clock, Eye, Star, Search, BookOpen, Lock } from "lucide-react";
import { DifficultyBadge } from "@/components/shared/difficulty-badge";
import { onDemandVideos, onDemandCollections, onDemandCourses } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "On-Demand Yoga Library — Stream Classes Anytime, Anywhere",
  description:
    "Stream thousands of on-demand yoga classes, curated collections, and structured courses. Vinyasa, Hatha, Yin, Power, Ashtanga, and Gentle Flow — practice at your own pace.",
  openGraph: {
    title: "On-Demand Yoga Library — Stream Classes Anytime, Anywhere",
    description: "Stream thousands of on-demand yoga classes, curated collections, and structured courses on ZenMat.",
    url: "/on-demand",
  },
  twitter: {
    title: "On-Demand Yoga Library — Stream Classes Anytime, Anywhere",
    description: "Stream thousands of on-demand yoga classes, curated collections, and structured courses on ZenMat.",
  },
  alternates: { canonical: "/on-demand" },
};

export default function OnDemandPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-10">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">On-Demand Library</h1>
        <p className="text-muted-foreground mt-1 text-sm sm:text-base">Thousands of classes, courses, and collections. Practice anytime, anywhere.</p>
      </div>

      <div className="relative max-w-lg mb-6 sm:mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input placeholder="Search by title, instructor, style..." className="pl-9 min-h-[44px] text-[16px] sm:text-sm" />
      </div>

      <Tabs defaultValue="videos">
        <TabsList className="mb-6 w-full sm:w-auto overflow-x-auto no-scrollbar">
          <TabsTrigger value="videos" className="flex-1 sm:flex-initial">Classes</TabsTrigger>
          <TabsTrigger value="collections" className="flex-1 sm:flex-initial">Collections</TabsTrigger>
          <TabsTrigger value="courses" className="flex-1 sm:flex-initial">Courses</TabsTrigger>
        </TabsList>

        <TabsContent value="videos">
          <div className="flex overflow-x-auto gap-2 mb-6 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible no-scrollbar">
            {["All", "Vinyasa", "Hatha", "Yin", "Power", "Ashtanga", "Gentle Flow", "Meditation"].map((s) => (
              <Badge key={s} variant={s === "All" ? "default" : "outline"} className="cursor-pointer px-3 py-1.5 whitespace-nowrap shrink-0 min-h-[36px] flex items-center">{s}</Badge>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {onDemandVideos.map((video) => (
              <Card key={video.id} className="group hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative">
                  <Image src={video.thumbnailUrl} alt={video.title} className="w-full h-44 object-cover" width={600} height={340} loading="lazy" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="size-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="size-5 text-black ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 flex gap-1.5">
                    <DifficultyBadge level={video.level} />
                    {video.isFree && <Badge className="bg-green-600 text-white text-xs">Free</Badge>}
                    {!video.isFree && <Badge variant="secondary" className="text-xs gap-1"><Lock className="size-3" />Premium</Badge>}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                    {video.duration} min
                  </div>
                </div>
                <CardContent className="pt-3">
                  <h3 className="font-semibold text-sm mb-1">{video.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{video.description}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <Avatar className="h-5 w-5">
                      <AvatarImage src={video.instructorAvatarUrl} />
                      <AvatarFallback>{video.instructorName[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs">{video.instructorName}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Eye className="size-3" />{(video.viewCount / 1000).toFixed(1)}k</span>
                    <span className="flex items-center gap-1"><Star className="size-3 fill-yellow-400 text-yellow-400" />{video.rating}</span>
                    <span>{video.style}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="collections">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {onDemandCollections.map((col) => (
              <Card key={col.id} className="group hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative">
                  <Image src={col.imageUrl} alt={col.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" width={600} height={400} loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="secondary" className="text-xs mb-2">{col.category}</Badge>
                    <h3 className="text-lg font-semibold text-white">{col.title}</h3>
                    <p className="text-sm text-white/80 mt-1">{col.description}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-white/70">
                      <span className="flex items-center gap-1"><Play className="size-3" />{col.videoCount} classes</span>
                      <span className="flex items-center gap-1"><Clock className="size-3" />{Math.round(col.totalDuration / 60)}h total</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="courses">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {onDemandCourses.map((course) => (
              <Card key={course.id} className="group hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative">
                  <Image src={course.imageUrl} alt={course.title} className="w-full h-44 object-cover" width={600} height={400} loading="lazy" />
                  <DifficultyBadge level={course.level} />
                </div>
                <CardContent className="pt-3">
                  <h3 className="font-semibold mb-1">{course.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{course.description}</p>
                  <div className="text-xs text-muted-foreground mb-2">by {course.instructorName}</div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><BookOpen className="size-3" />{course.classCount} classes</span>
                    <span className="flex items-center gap-1"><Clock className="size-3" />{Math.round(course.totalDuration / 60)}h</span>
                    <span className="flex items-center gap-1"><Star className="size-3 fill-yellow-400 text-yellow-400" />{course.rating}</span>
                  </div>
                  <div className="text-xs text-muted-foreground mb-2">{course.enrolledCount.toLocaleString()} enrolled</div>
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
