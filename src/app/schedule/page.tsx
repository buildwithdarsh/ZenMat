import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, MapPin, Star, CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import { FormatBadge } from "@/components/shared/format-badge";
import { bookings } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "My Schedule",
  description: "View your upcoming and past yoga class bookings.",
  robots: { index: false, follow: false },
};

const statusConfig: Record<string, { icon: React.ReactNode; color: string; label: string }> = {
  confirmed: { icon: <CheckCircle2 className="size-4" />, color: "text-green-600", label: "Confirmed" },
  waitlisted: { icon: <AlertCircle className="size-4" />, color: "text-orange-600", label: "Waitlisted" },
  completed: { icon: <CheckCircle2 className="size-4" />, color: "text-primary", label: "Completed" },
  cancelled: { icon: <XCircle className="size-4" />, color: "text-destructive", label: "Cancelled" },
  "no-show": { icon: <XCircle className="size-4" />, color: "text-muted-foreground", label: "No-Show" },
};

export default function SchedulePage() {
  const upcoming = bookings.filter((b) => b.status === "confirmed" || b.status === "waitlisted");
  const past = bookings.filter((b) => b.status === "completed" || b.status === "cancelled" || b.status === "no-show");

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-10">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">My Schedule</h1>
        <p className="text-muted-foreground mt-1 text-sm sm:text-base">Your upcoming and past class bookings</p>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList className="mb-6 w-full sm:w-auto">
          <TabsTrigger value="upcoming" className="flex-1 sm:flex-initial">Upcoming ({upcoming.length})</TabsTrigger>
          <TabsTrigger value="past" className="flex-1 sm:flex-initial">Past ({past.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          {upcoming.length === 0 ? (
            <Card><CardContent className="py-12 text-center text-muted-foreground">No upcoming classes. Browse the schedule to book your next class!</CardContent></Card>
          ) : (
            <div className="space-y-4">
              {upcoming.map((booking) => {
                const config = statusConfig[booking.status];
                return (
                  <Card key={booking.id}>
                    <CardContent className="py-4">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold">{booking.className}</h3>
                            <FormatBadge format={booking.format} />
                            <Badge variant="outline" className={`text-xs gap-1 ${config.color}`}>
                              {config.icon}{config.label}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1"><Calendar className="size-3" />{new Date(booking.dateTime).toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" })}</span>
                            <span className="flex items-center gap-1"><Clock className="size-3" />{new Date(booking.dateTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} ({booking.duration}min)</span>
                            <span className="flex items-center gap-1"><MapPin className="size-3" />{booking.studioName}</span>
                            <span>{booking.instructorName}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 w-full sm:w-auto">
                          {booking.status === "confirmed" && (
                            <>
                              <Button size="sm" className="flex-1 sm:flex-initial">Check In</Button>
                              <Button size="sm" variant="outline" className="flex-1 sm:flex-initial">Cancel</Button>
                            </>
                          )}
                          {booking.status === "waitlisted" && (
                            <Button size="sm" variant="outline" className="flex-1 sm:flex-initial">Leave Waitlist</Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </TabsContent>

        <TabsContent value="past">
          <div className="space-y-4">
            {past.map((booking) => {
              const config = statusConfig[booking.status];
              return (
                <Card key={booking.id}>
                  <CardContent className="py-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">{booking.className}</h3>
                          <Badge variant="outline" className="text-xs">{booking.style}</Badge>
                          <Badge variant="outline" className={`text-xs gap-1 ${config.color}`}>
                            {config.icon}{config.label}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1"><Calendar className="size-3" />{new Date(booking.dateTime).toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" })}</span>
                          <span className="flex items-center gap-1"><Clock className="size-3" />{booking.duration}min</span>
                          <span>{booking.studioName}</span>
                          <span>{booking.instructorName}</span>
                        </div>
                        {booking.review && (
                          <p className="text-sm text-muted-foreground italic mt-2">&ldquo;{booking.review}&rdquo;</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        {booking.rating && (
                          <div className="flex items-center gap-1">
                            {Array.from({ length: booking.rating }).map((_, i) => (
                              <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        )}
                        {!booking.rating && booking.status === "completed" && (
                          <Button size="sm" variant="outline">Rate Class</Button>
                        )}
                        <Button size="sm" variant="outline">Book Again</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
