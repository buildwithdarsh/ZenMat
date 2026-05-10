import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Flame, Trophy, Clock, Target, Star, Heart, Calendar,
  TrendingUp, TrendingDown, Award, Zap,
} from "lucide-react";
import { currentUser } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "My Progress",
  description: "Track your yoga practice streaks, milestones, and wellness trends.",
  robots: { index: false, follow: false },
};

const { progressStats, streakInfo, loyaltyInfo, membership } = currentUser;

export default function ProgressPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-10">
      {/* Profile Header */}
      <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
        <Avatar className="h-16 w-16 sm:h-20 sm:w-20 shrink-0">
          <AvatarImage src={currentUser.avatarUrl} />
          <AvatarFallback>AP</AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <h1 className="text-xl sm:text-2xl font-bold truncate">{currentUser.name}</h1>
          <p className="text-muted-foreground text-sm">Member since {new Date(currentUser.memberSince).toLocaleDateString([], { month: "long", year: "numeric" })}</p>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            {membership && (
              <Badge variant="secondary" className="text-[10px] sm:text-xs">{membership.tier.replace(/-/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase())}</Badge>
            )}
            {currentUser.dosha && <Badge variant="outline" className="text-[10px] sm:text-xs">Dosha: {currentUser.dosha}</Badge>}
            <Badge variant="outline" className="gap-1 text-[10px] sm:text-xs">
              <Flame className="size-3 text-orange-500" /> {streakInfo.currentStreak} day streak
            </Badge>
          </div>
        </div>
      </div>

      {/* Stats Grid - horizontal scroll on mobile */}
      <div className="flex overflow-x-auto gap-3 sm:gap-4 mb-6 sm:mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-4 sm:overflow-visible no-scrollbar">
        {[
          { label: "Total Classes", value: progressStats.totalClasses, icon: Calendar, color: "text-primary" },
          { label: "Current Streak", value: `${streakInfo.currentStreak} days`, icon: Flame, color: "text-orange-500" },
          { label: "Meditation Minutes", value: progressStats.totalMeditationMinutes, icon: Clock, color: "text-violet-500" },
          { label: "Loyalty Points", value: loyaltyInfo.totalPoints.toLocaleString(), icon: Star, color: "text-yellow-500" },
        ].map((stat) => (
          <Card key={stat.label} className="min-w-[140px] sm:min-w-0 shrink-0 sm:shrink snap-start">
            <CardContent className="pt-4 sm:pt-5 text-center">
              <stat.icon className={`size-5 sm:size-6 mx-auto mb-1.5 sm:mb-2 ${stat.color}`} />
              <div className="text-xl sm:text-2xl font-bold">{stat.value}</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="mb-6 w-full sm:w-auto overflow-x-auto no-scrollbar">
          <TabsTrigger value="overview" className="flex-1 sm:flex-initial text-xs sm:text-sm">Overview</TabsTrigger>
          <TabsTrigger value="streaks" className="flex-1 sm:flex-initial text-xs sm:text-sm">Streaks</TabsTrigger>
          <TabsTrigger value="loyalty" className="flex-1 sm:flex-initial text-xs sm:text-sm">Rewards</TabsTrigger>
          <TabsTrigger value="milestones" className="flex-1 sm:flex-initial text-xs sm:text-sm">Milestones</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Weekly Attendance */}
            <Card>
              <CardHeader><CardTitle className="text-base">Weekly Attendance</CardTitle></CardHeader>
              <CardContent>
                <div className="flex items-end gap-2 h-40">
                  {progressStats.weeklyAttendance.map((week) => (
                    <div key={week.week} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full bg-primary/80 rounded-t-md transition-all"
                        style={{ height: `${(week.count / 5) * 100}%`, minHeight: 4 }}
                      />
                      <span className="text-[10px] text-muted-foreground">{week.week}</span>
                      <span className="text-xs font-medium">{week.count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Style Breakdown */}
            <Card>
              <CardHeader><CardTitle className="text-base">Style Breakdown</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {progressStats.styleBreakdown.map((style) => (
                    <div key={style.style}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{style.style}</span>
                        <span className="font-medium">{style.count} classes</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full rounded-full bg-primary" style={{ width: `${(style.count / progressStats.totalClasses) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Wellness Trends */}
            <Card className="lg:col-span-2">
              <CardHeader><CardTitle className="text-base">Wellness Trends (Self-Reported)</CardTitle></CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4">
                  {[
                    { label: "Stress", current: progressStats.wellnessScores[progressStats.wellnessScores.length - 1]?.stress ?? 0, trend: "down", color: "text-green-500" },
                    { label: "Energy", current: progressStats.wellnessScores[progressStats.wellnessScores.length - 1]?.energy ?? 0, trend: "up", color: "text-blue-500" },
                    { label: "Mood", current: progressStats.wellnessScores[progressStats.wellnessScores.length - 1]?.mood ?? 0, trend: "up", color: "text-violet-500" },
                  ].map((metric) => (
                    <div key={metric.label} className="text-center p-3 rounded-lg bg-muted/50">
                      <div className="text-xs text-muted-foreground mb-1">{metric.label}</div>
                      <div className="text-2xl font-bold">{metric.current}/10</div>
                      <div className={`text-xs flex items-center justify-center gap-0.5 ${metric.color}`}>
                        {metric.trend === "up" ? <TrendingUp className="size-3" /> : <TrendingDown className="size-3" />}
                        Improving
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-end gap-1 h-24">
                  {progressStats.wellnessScores.map((score, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                      <div className="w-full flex flex-col gap-0.5">
                        <div className="w-full bg-violet-400 rounded-sm" style={{ height: `${score.mood * 2}px` }} />
                        <div className="w-full bg-blue-400 rounded-sm" style={{ height: `${score.energy * 2}px` }} />
                        <div className="w-full bg-green-400 rounded-sm" style={{ height: `${(10 - score.stress) * 2}px` }} />
                      </div>
                      <span className="text-[9px] text-muted-foreground">{score.date}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-3 text-[10px] sm:text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><div className="size-2 rounded-full bg-green-400" />Stress (lower=better)</span>
                  <span className="flex items-center gap-1"><div className="size-2 rounded-full bg-blue-400" />Energy</span>
                  <span className="flex items-center gap-1"><div className="size-2 rounded-full bg-violet-400" />Mood</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="streaks">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader><CardTitle className="text-base">Streak Tracker</CardTitle></CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="size-28 rounded-full border-4 border-primary mx-auto flex items-center justify-center mb-3 animate-pulse-glow">
                    <div>
                      <Flame className="size-8 text-orange-500 mx-auto" />
                      <div className="text-3xl font-bold">{streakInfo.currentStreak}</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Current Streak</p>
                  <p className="text-xs text-muted-foreground mt-1">Longest: {streakInfo.longestStreak} days</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium">Next Milestone: {streakInfo.nextMilestone.badge}</p>
                  <p className="text-xs text-muted-foreground">{streakInfo.nextMilestone.days - streakInfo.currentStreak} days to go &middot; {streakInfo.nextMilestone.reward}</p>
                </div>
                <Separator className="my-4" />
                <div className="grid grid-cols-7 gap-1">
                  {streakInfo.history.slice(-28).map((day, i) => (
                    <div
                      key={i}
                      className={`size-8 rounded-md flex items-center justify-center text-[10px] ${
                        day.completed ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                      }`}
                      title={day.date}
                    >
                      {new Date(day.date).getDate()}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-base">Achievement Badges</CardTitle></CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: "Getting Started", days: 3, earned: true },
                    { name: "One Week Warrior", days: 7, earned: true },
                    { name: "Fortnight Focus", days: 14, earned: false },
                    { name: "Habit Former", days: 21, earned: false },
                    { name: "Monthly Master", days: 30, earned: false },
                    { name: "Devoted Yogi", days: 365, earned: false },
                  ].map((badge) => (
                    <div key={badge.name} className={`text-center p-3 rounded-lg ${badge.earned ? "bg-primary/10" : "bg-muted opacity-50"}`}>
                      <Award className={`size-8 mx-auto mb-1 ${badge.earned ? "text-primary" : "text-muted-foreground"}`} />
                      <div className="text-xs font-medium">{badge.name}</div>
                      <div className="text-[10px] text-muted-foreground">{badge.days} days</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="loyalty">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card>
              <CardHeader><CardTitle className="text-base">Your Points</CardTitle></CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-primary">{loyaltyInfo.totalPoints.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Available Points</div>
                  <div className="text-xs text-muted-foreground mt-1">Lifetime: {loyaltyInfo.lifetimePoints.toLocaleString()}</div>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg text-center">
                  <div className="text-sm font-medium">{loyaltyInfo.currentTier} Tier</div>
                  <div className="text-xs text-muted-foreground">{loyaltyInfo.pointsToNextTier} pts to {loyaltyInfo.nextTier}</div>
                  <div className="h-2 rounded-full bg-muted mt-2 overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${((loyaltyInfo.totalPoints % 2500) / 2500) * 100}%` }} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-base">Recent Activity</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {loyaltyInfo.recentActivity.map((activity, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Zap className="size-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm truncate">{activity.action}</div>
                        <div className="text-xs text-muted-foreground">{new Date(activity.date).toLocaleDateString()}</div>
                      </div>
                      <div className="text-sm font-medium text-primary">+{activity.points}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-base">Available Rewards</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {loyaltyInfo.availableRewards.map((reward) => (
                    <div key={reward.title} className="p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">{reward.title}</span>
                        <Badge variant="outline" className="text-xs">{reward.pointsCost} pts</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{reward.description}</p>
                      <Button size="xs" variant="outline" className="mt-2" disabled={loyaltyInfo.totalPoints < reward.pointsCost}>
                        {loyaltyInfo.totalPoints >= reward.pointsCost ? "Redeem" : "Need more points"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="milestones">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {progressStats.poseMilestones.map((milestone) => (
              <Card key={milestone.poseName}>
                <CardContent className="pt-5 text-center">
                  <Trophy className="size-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold">{milestone.poseName}</h3>
                  <p className="text-sm text-muted-foreground italic">{milestone.sanskritName}</p>
                  <Badge variant="secondary" className="mt-2">{milestone.category}</Badge>
                  <p className="text-xs text-muted-foreground mt-2">
                    Achieved {new Date(milestone.achievedDate).toLocaleDateString([], { month: "long", day: "numeric", year: "numeric" })}
                  </p>
                </CardContent>
              </Card>
            ))}
            {/* Locked milestones */}
            {[
              { name: "Full Splits", sanskrit: "Hanumanasana", category: "Flexibility" },
              { name: "Scorpion Pose", sanskrit: "Vrschikasana", category: "Advanced" },
              { name: "Lotus Pose", sanskrit: "Padmasana", category: "Seated" },
            ].map((pose) => (
              <Card key={pose.name} className="opacity-40">
                <CardContent className="pt-5 text-center">
                  <Target className="size-10 text-muted-foreground mx-auto mb-3" />
                  <h3 className="font-semibold">{pose.name}</h3>
                  <p className="text-sm text-muted-foreground italic">{pose.sanskrit}</p>
                  <Badge variant="outline" className="mt-2">{pose.category}</Badge>
                  <p className="text-xs text-muted-foreground mt-2">Not yet achieved</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
