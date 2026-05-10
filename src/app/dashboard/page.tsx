import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  DollarSign, Users, TrendingUp, TrendingDown, Calendar, BarChart3,
  UserPlus, AlertTriangle, ArrowUpRight, ArrowDownRight, Clock,
  Star, Percent, Eye,
} from "lucide-react";
import { studioAnalytics, scheduleEvents, instructorEarnings } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Studio Dashboard",
  description: "Studio management dashboard with analytics, revenue, and member insights.",
  robots: { index: false, follow: false },
};

const { revenue, membership, attendance, topClasses, topInstructors } = studioAnalytics;

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Studio Dashboard</h1>
          <p className="text-muted-foreground mt-1 text-sm sm:text-base">ZenMat Studio SF — March 2026</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="min-h-[44px] flex-1 sm:flex-initial">Export Report</Button>
          <Button size="sm" className="min-h-[44px] flex-1 sm:flex-initial">Add Class</Button>
        </div>
      </div>

      {/* KPI Cards - horizontal scroll on mobile */}
      <div className="flex overflow-x-auto gap-3 sm:gap-4 mb-6 sm:mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible no-scrollbar snap-x snap-mandatory">
        {[
          { label: "Monthly Revenue", value: `$${(revenue.total / 1000).toFixed(1)}K`, change: revenue.change, icon: DollarSign, positive: true },
          { label: "Active Members", value: membership.total.toString(), change: membership.newThisMonth, icon: Users, positive: true, changeLabel: "new" },
          { label: "Avg Fill Rate", value: `${attendance.avgFillRate}%`, change: 0, icon: Percent, positive: true },
          { label: "Churn Rate", value: `${membership.churnRate}%`, change: -0.3, icon: TrendingDown, positive: false },
        ].map((kpi) => (
          <Card key={kpi.label} className="min-w-[160px] sm:min-w-0 shrink-0 sm:shrink snap-start">
            <CardContent className="pt-4 sm:pt-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">{kpi.label}</span>
                <kpi.icon className="size-4 text-muted-foreground" />
              </div>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <div className={`text-xs flex items-center gap-1 mt-1 ${kpi.positive ? "text-green-600" : "text-red-500"}`}>
                {kpi.positive ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
                {kpi.change > 0 ? "+" : ""}{kpi.change}{kpi.changeLabel ? ` ${kpi.changeLabel}` : "%"} this month
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="mb-6 w-full sm:w-auto overflow-x-auto no-scrollbar">
          <TabsTrigger value="overview" className="flex-1 sm:flex-initial text-xs sm:text-sm">Overview</TabsTrigger>
          <TabsTrigger value="classes" className="flex-1 sm:flex-initial text-xs sm:text-sm">Classes</TabsTrigger>
          <TabsTrigger value="members" className="flex-1 sm:flex-initial text-xs sm:text-sm">Members</TabsTrigger>
          <TabsTrigger value="instructors" className="flex-1 sm:flex-initial text-xs sm:text-sm">Staff</TabsTrigger>
          <TabsTrigger value="financial" className="flex-1 sm:flex-initial text-xs sm:text-sm">Finance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Revenue Chart */}
            <Card>
              <CardHeader><CardTitle className="text-base">Revenue Trend</CardTitle></CardHeader>
              <CardContent>
                <div className="flex items-end gap-3 h-40">
                  {revenue.byMonth.map((month) => (
                    <div key={month.month} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full bg-primary rounded-t-md"
                        style={{ height: `${(month.amount / 50000) * 100}%`, minHeight: 4 }}
                      />
                      <span className="text-[10px] text-muted-foreground">{month.month}</span>
                      <span className="text-[10px] font-medium">${(month.amount / 1000).toFixed(0)}K</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Revenue Breakdown */}
            <Card>
              <CardHeader><CardTitle className="text-base">Revenue by Type</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {revenue.byType.map((type) => (
                    <div key={type.type}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{type.type}</span>
                        <span className="font-medium">${type.amount.toLocaleString()} ({type.percentage}%)</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full rounded-full bg-primary" style={{ width: `${type.percentage}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Classes */}
            <Card>
              <CardHeader><CardTitle className="text-base">Top Performing Classes</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topClasses.map((cls, i) => (
                    <div key={cls.name} className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{cls.name}</div>
                        <div className="text-xs text-muted-foreground">{cls.fillRate}% fill rate</div>
                      </div>
                      <div className="text-sm font-medium">${cls.revenue.toLocaleString()}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Instructors */}
            <Card>
              <CardHeader><CardTitle className="text-base">Instructor Performance</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topInstructors.map((inst) => (
                    <div key={inst.name} className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={inst.avatarUrl} />
                        <AvatarFallback>{inst.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{inst.name}</div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-0.5"><Star className="size-3 fill-yellow-400 text-yellow-400" />{inst.rating}</span>
                          <span>{inst.fillRate}% fill rate</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Peak Hours */}
            <Card>
              <CardHeader><CardTitle className="text-base">Peak Hours Heatmap</CardTitle></CardHeader>
              <CardContent>
                <div className="flex items-end gap-2 h-32">
                  {attendance.peakHours.map((hour) => (
                    <div key={hour.hour} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full rounded-t-md transition-all"
                        style={{
                          height: `${(hour.count / 30) * 100}%`,
                          minHeight: 4,
                          backgroundColor: `hsl(152 45% ${60 - (hour.count / 30) * 30}%)`,
                        }}
                      />
                      <span className="text-[9px] text-muted-foreground">{hour.hour}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Membership Breakdown */}
            <Card>
              <CardHeader><CardTitle className="text-base">Membership Distribution</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {membership.byTier.map((tier) => (
                    <div key={tier.tier}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{tier.tier}</span>
                        <span className="font-medium">{tier.count}</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full rounded-full bg-primary" style={{ width: `${(tier.count / membership.total) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="classes">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Upcoming Classes</CardTitle>
                <Button size="sm">Add Class</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {scheduleEvents.map((event) => (
                  <div key={event.id} className="flex items-center gap-4 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                    <div className="text-center min-w-[60px]">
                      <div className="text-xs text-muted-foreground">{new Date(event.dateTime).toLocaleDateString([], { weekday: "short" })}</div>
                      <div className="text-lg font-bold">{new Date(event.dateTime).getDate()}</div>
                      <div className="text-xs text-muted-foreground">{new Date(event.dateTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
                    </div>
                    <Separator orientation="vertical" className="h-12" />
                    <div className="flex-1">
                      <div className="font-medium text-sm">{event.title}</div>
                      <div className="text-xs text-muted-foreground">{event.instructorName} &middot; {event.style} &middot; {event.duration}min</div>
                      {event.room && <div className="text-xs text-muted-foreground">{event.room}</div>}
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{event.enrollmentCount}/{event.maxCapacity}</div>
                      <div className="text-xs text-muted-foreground">{Math.round((event.enrollmentCount / event.maxCapacity) * 100)}% full</div>
                    </div>
                    <Badge variant="outline" className="text-xs">{event.format}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="members">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="lg:col-span-2">
              <CardHeader><CardTitle className="text-base">Member Alerts</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { alert: "5 members haven't attended in 14+ days", severity: "warning", action: "Send re-engagement email" },
                    { alert: "3 memberships expiring this week", severity: "info", action: "Send renewal reminder" },
                    { alert: "2 new trial members need welcome follow-up", severity: "info", action: "Send welcome sequence" },
                    { alert: "1 member requested freeze", severity: "warning", action: "Review request" },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 p-3 rounded-lg border">
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <AlertTriangle className={`size-4 shrink-0 ${item.severity === "warning" ? "text-orange-500" : "text-blue-500"}`} />
                        <div className="text-sm">{item.alert}</div>
                      </div>
                      <Button size="xs" variant="outline" className="self-start sm:self-auto min-h-[36px] shrink-0">{item.action}</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-base">Quick Stats</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-muted/50 rounded-lg text-center">
                    <div className="text-2xl font-bold">{membership.total}</div>
                    <div className="text-xs text-muted-foreground">Active Members</div>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">+{membership.newThisMonth}</div>
                    <div className="text-xs text-muted-foreground">New This Month</div>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg text-center">
                    <div className="text-2xl font-bold">{attendance.noShowRate}%</div>
                    <div className="text-xs text-muted-foreground">No-Show Rate</div>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg text-center">
                    <div className="text-2xl font-bold text-orange-500">{membership.churnRate}%</div>
                    <div className="text-xs text-muted-foreground">Monthly Churn</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="instructors">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {topInstructors.map((inst) => (
              <Card key={inst.name}>
                <CardContent className="pt-5 text-center">
                  <Avatar className="h-16 w-16 mx-auto mb-3">
                    <AvatarImage src={inst.avatarUrl} />
                    <AvatarFallback>{inst.name[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold">{inst.name}</h3>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <Star className="size-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{inst.rating}</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2 mt-3 text-sm">
                    <div className="p-2 bg-muted/50 rounded-md">
                      <div className="font-medium">{inst.fillRate}%</div>
                      <div className="text-xs text-muted-foreground">Fill Rate</div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="w-full mt-3">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="financial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <Card>
              <CardHeader><CardTitle className="text-base">Revenue Summary</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-sm text-muted-foreground">Total Revenue (Mar)</span>
                    <span className="font-semibold">${revenue.total.toLocaleString()}</span>
                  </div>
                  {revenue.byType.map((type) => (
                    <div key={type.type} className="flex justify-between py-1">
                      <span className="text-sm">{type.type}</span>
                      <span className="text-sm font-medium">${type.amount.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-base">Instructor Payroll (Sample)</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {instructorEarnings.recentPayments.map((payment, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg border">
                      <div>
                        <div className="text-sm font-medium">{payment.description}</div>
                        <div className="text-xs text-muted-foreground">{payment.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">${payment.amount.toLocaleString()}</div>
                        <Badge variant={payment.status === "paid" ? "default" : "secondary"} className="text-[10px]">{payment.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
