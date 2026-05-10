import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, MapPin, Users, Star, Utensils, Bed, CheckCircle2 } from "lucide-react";
import { retreats } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Yoga Retreats — Bali, Costa Rica, India & Beyond",
  description:
    "Discover yoga retreats in Bali, Costa Rica, India, Portugal, and Thailand. Multi-day immersions with certified instructors, meals, accommodation, and daily practice included.",
  openGraph: {
    title: "Yoga Retreats — Bali, Costa Rica, India & Beyond",
    description: "Discover yoga retreats worldwide with certified instructors, meals, and accommodation on ZenMat.",
    url: "/retreats",
  },
  twitter: {
    title: "Yoga Retreats — Bali, Costa Rica, India & Beyond",
    description: "Discover yoga retreats worldwide with certified instructors, meals, and accommodation on ZenMat.",
  },
  alternates: { canonical: "/retreats" },
};

export default function RetreatsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-10">
      <div className="text-center mb-8 sm:mb-10">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-3">Yoga Retreats</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
          Transformative retreats in Bali, Costa Rica, India, and beyond. Deepen your practice in paradise.
        </p>
      </div>

      <div className="flex overflow-x-auto justify-start sm:justify-center gap-2 mb-8 sm:mb-10 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible no-scrollbar">
        {["All Destinations", "Bali", "Costa Rica", "India", "Portugal", "Thailand"].map((d) => (
          <Badge key={d} variant={d === "All Destinations" ? "default" : "outline"} className="cursor-pointer px-3 py-1.5 whitespace-nowrap shrink-0 min-h-[36px] flex items-center">{d}</Badge>
        ))}
      </div>

      <div className="space-y-6 sm:space-y-8">
        {retreats.map((retreat) => (
          <Card key={retreat.id} className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              {/* Image */}
              <div className="lg:col-span-2 relative">
                <Image src={retreat.imageUrl} alt={retreat.title} className="w-full h-48 sm:h-64 lg:h-full object-cover" width={800} height={500} loading="lazy" />
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <Badge className="bg-white/90 text-black text-xs backdrop-blur">{retreat.country}</Badge>
                </div>
                {/* Gallery thumbnails */}
                <div className="absolute bottom-3 left-3 flex gap-1.5">
                  {retreat.galleryUrls.slice(0, 3).map((url, i) => (
                    <Image key={i} src={url} alt={`${retreat.title} gallery photo ${i + 1}`} className="w-12 h-12 rounded-lg object-cover border-2 border-white/80" width={48} height={48} loading="lazy" />
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="lg:col-span-3">
                <CardContent className="pt-5 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="size-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-sm">{retreat.rating}</span>
                    <span className="text-xs text-muted-foreground">({retreat.reviewCount} reviews)</span>
                  </div>

                  <h2 className="text-xl font-bold mb-1">{retreat.title}</h2>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                    <MapPin className="size-4" /> {retreat.destination}
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{retreat.description}</p>

                  {/* Instructors */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs text-muted-foreground">Led by:</span>
                    {retreat.instructors.map((inst) => (
                      <div key={inst.name} className="flex items-center gap-1.5">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={inst.avatarUrl} />
                          <AvatarFallback>{inst.name[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-xs font-medium">{inst.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Dates & capacity */}
                  <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="size-3" />
                      {new Date(retreat.startDate).toLocaleDateString([], { month: "short", day: "numeric" })} - {new Date(retreat.endDate).toLocaleDateString([], { month: "short", day: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="size-3" />{retreat.currentParticipants}/{retreat.maxParticipants} spots filled
                    </span>
                    <span className="flex items-center gap-1">
                      <Utensils className="size-3" />{retreat.mealOptions.join(", ")}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bed className="size-3" />{retreat.accommodationTypes.length} accommodation options
                    </span>
                  </div>

                  {/* Includes */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {retreat.priceIncludes.slice(0, 5).map((item) => (
                      <Badge key={item} variant="outline" className="text-[10px] px-1.5 py-0 gap-0.5">
                        <CheckCircle2 className="size-2.5 text-green-500" />{item}
                      </Badge>
                    ))}
                    {retreat.priceIncludes.length > 5 && (
                      <Badge variant="outline" className="text-[10px] px-1.5 py-0">+{retreat.priceIncludes.length - 5} more</Badge>
                    )}
                  </div>

                  {/* Styles */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {retreat.styles.map((s) => (
                      <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t">
                    <div>
                      <span className="text-xs text-muted-foreground">From</span>
                      <span className="text-xl sm:text-2xl font-bold ml-1">${retreat.price.toLocaleString()}</span>
                      <span className="text-xs text-muted-foreground ml-1">/ person</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 sm:flex-initial min-h-[44px]">View Details</Button>
                      <Button size="sm" className="flex-1 sm:flex-initial min-h-[44px]">Reserve Spot</Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Event JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            retreats.map((retreat) => ({
              "@context": "https://schema.org",
              "@type": "Event",
              name: retreat.title,
              description: retreat.description,
              startDate: retreat.startDate,
              endDate: retreat.endDate,
              eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
              eventStatus: "https://schema.org/EventScheduled",
              location: {
                "@type": "Place",
                name: retreat.destination,
                address: {
                  "@type": "PostalAddress",
                  addressCountry: retreat.country,
                },
              },
              image: retreat.imageUrl,
              offers: {
                "@type": "Offer",
                price: retreat.price,
                priceCurrency: "USD",
                availability: retreat.currentParticipants < retreat.maxParticipants
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
