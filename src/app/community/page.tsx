import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Flame, Calendar, MessageSquare, Trophy, Heart, Clock, MapPin } from "lucide-react";
import { challenges, communityEvents, currentUser } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Yoga Community — Challenges, Events, Forums & Leaderboard",
  description:
    "Join yoga challenges, attend community events, participate in forums, and climb the leaderboard. Connect with practitioners worldwide on ZenMat.",
  openGraph: {
    title: "Yoga Community — Challenges, Events, Forums & Leaderboard",
    description: "Join yoga challenges, attend events, and connect with practitioners worldwide on ZenMat.",
    url: "/community",
  },
  twitter: {
    title: "Yoga Community — Challenges, Events, Forums & Leaderboard",
    description: "Join yoga challenges, attend events, and connect with practitioners worldwide on ZenMat.",
  },
  alternates: { canonical: "/community" },
};

const forumTopics = [
  { title: "Tips for first Ashtanga class?", author: "curious_yogi", replies: 23, category: "Beginners", avatar: "https://picsum.photos/id/197/100/100" },
  { title: "Favorite hip opening sequence?", author: "flex_master", replies: 18, category: "Practice", avatar: "https://picsum.photos/id/219/100/100" },
  { title: "Philosophy book recommendations", author: "soul_seeker", replies: 31, category: "Philosophy", avatar: "https://picsum.photos/id/237/100/100" },
  { title: "Managing lower back pain in forward folds", author: "heal_with_yoga", replies: 15, category: "Injuries", avatar: "https://picsum.photos/id/238/100/100" },
  { title: "Teaching cue for Warrior 2 alignment", author: "teacher_tara", replies: 12, category: "Teaching", avatar: "https://picsum.photos/id/239/100/100" },
];

const leaderboard = [
  { name: "Arjun M.", points: 4200, streak: 45, avatar: "https://picsum.photos/id/240/100/100" },
  { name: "Sarah L.", points: 3800, streak: 32, avatar: "https://picsum.photos/id/241/100/100" },
  { name: "Dev K.", points: 3500, streak: 28, avatar: "https://picsum.photos/id/242/100/100" },
  { name: "Anya P. (You)", points: 1850, streak: 12, avatar: "https://picsum.photos/id/251/200/200" },
  { name: "Elena R.", points: 1600, streak: 10, avatar: "https://picsum.photos/id/64/100/100" },
];

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-10">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Community</h1>
        <p className="text-muted-foreground mt-1 text-sm sm:text-base">Challenges, events, forums, and your sangha</p>
      </div>

      <Tabs defaultValue="challenges">
        <TabsList className="mb-6 sm:mb-8 w-full sm:w-auto overflow-x-auto no-scrollbar">
          <TabsTrigger value="challenges" className="flex-1 sm:flex-initial">Challenges</TabsTrigger>
          <TabsTrigger value="events" className="flex-1 sm:flex-initial">Events</TabsTrigger>
          <TabsTrigger value="forum" className="flex-1 sm:flex-initial">Forum</TabsTrigger>
          <TabsTrigger value="leaderboard" className="flex-1 sm:flex-initial">Leaderboard</TabsTrigger>
        </TabsList>

        <TabsContent value="challenges">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {challenges.map((ch) => (
              <Card key={ch.id} className="overflow-hidden">
                <div className="relative">
                  <Image src={ch.imageUrl} alt={ch.title} className="w-full h-44 object-cover" width={600} height={400} loading="lazy" />
                  <div className="absolute top-2 right-2">
                    <Badge variant={ch.isActive ? "default" : "secondary"}>{ch.isActive ? "Active" : "Ended"}</Badge>
                  </div>
                </div>
                <CardContent className="pt-3">
                  <Badge variant="outline" className="text-xs mb-2">{ch.category}</Badge>
                  <h3 className="font-semibold">{ch.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{ch.description}</p>
                  <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Users className="size-3" />{ch.participantCount.toLocaleString()}</span>
                    <span className="flex items-center gap-1"><Calendar className="size-3" />{ch.durationDays} days</span>
                    <span className="flex items-center gap-1"><Trophy className="size-3" />{ch.reward}</span>
                  </div>
                  {ch.progress !== undefined && ch.isActive && (
                    <div className="mt-3">
                      <div className="flex justify-between text-xs text-muted-foreground mb-1">
                        <span>Progress</span><span>{ch.progress}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full rounded-full bg-primary" style={{ width: `${ch.progress}%` }} />
                      </div>
                    </div>
                  )}
                  <Button size="sm" className="w-full mt-3" variant={ch.isActive ? "default" : "secondary"}>
                    {ch.isActive ? "Continue Challenge" : "View Results"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {communityEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative sm:w-48 shrink-0">
                    <Image src={event.imageUrl} alt={event.title} className="w-full h-44 sm:h-full object-cover" width={400} height={300} loading="lazy" />
                  </div>
                  <CardContent className="flex-1 pt-4">
                    <Badge variant="secondary" className="text-xs mb-2">{event.type}</Badge>
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{event.description}</p>
                    <div className="grid grid-cols-2 gap-2 mt-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar className="size-3" />{new Date(event.dateTime).toLocaleDateString([], { month: "short", day: "numeric" })}</span>
                      <span className="flex items-center gap-1"><Clock className="size-3" />{event.duration} min</span>
                      <span className="flex items-center gap-1"><MapPin className="size-3" />{event.studioName}</span>
                      <span className="flex items-center gap-1"><Users className="size-3" />{event.currentAttendees}/{event.maxCapacity}</span>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="font-semibold">${event.price}</span>
                      <Button size="sm">RSVP</Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="forum">
          <div className="space-y-3">
            {forumTopics.map((topic, i) => (
              <Card key={i} className="hover:shadow-sm transition-shadow cursor-pointer">
                <CardContent className="py-3">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={topic.avatar} />
                      <AvatarFallback>{topic.author[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm">{topic.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                        <span>@{topic.author}</span>
                        <Badge variant="outline" className="text-[10px] px-1.5 py-0">{topic.category}</Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MessageSquare className="size-3" />
                      <span>{topic.replies}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button variant="outline" className="w-full">Load More Discussions</Button>
          </div>
        </TabsContent>

        <TabsContent value="leaderboard">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Leaderboard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {leaderboard.map((user, i) => (
                  <div key={i} className={`flex items-center gap-4 p-3 rounded-lg ${i === 3 ? "bg-primary/5 ring-1 ring-primary/20" : "hover:bg-muted/50"}`}>
                    <div className={`size-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      i === 0 ? "bg-yellow-100 text-yellow-700" : i === 1 ? "bg-gray-100 text-gray-700" : i === 2 ? "bg-orange-100 text-orange-700" : "bg-muted text-muted-foreground"
                    }`}>
                      {i + 1}
                    </div>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{user.name}</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="flex items-center gap-0.5"><Flame className="size-3 text-orange-500" />{user.streak} day streak</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-sm">{user.points.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">points</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
