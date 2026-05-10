import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { MapPin, Star, Users, Calendar, Monitor, Car, Accessibility, Search, SlidersHorizontal } from "lucide-react";
import { studios } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Find Yoga Studios Near You — Verified Studios with Real-Time Availability",
  description:
    "Discover verified yoga studios with real-time class availability. Filter by style, amenities, and location. View ratings, pricing, and book classes directly.",
  openGraph: {
    title: "Find Yoga Studios Near You — Verified Studios with Real-Time Availability",
    description: "Discover verified yoga studios with real-time class availability on ZenMat.",
    url: "/studios",
  },
  twitter: {
    title: "Find Yoga Studios Near You — Verified Studios with Real-Time Availability",
    description: "Discover verified yoga studios with real-time class availability on ZenMat.",
  },
  alternates: { canonical: "/studios" },
};

export default function StudiosPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-10">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Find Studios</h1>
        <p className="text-muted-foreground mt-1 text-sm sm:text-base">Discover yoga studios near you with real-time availability</p>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6 sm:mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input placeholder="Search by name, city, or zip code..." className="pl-9 min-h-[44px] text-[16px] sm:text-sm" />
        </div>
        <Button variant="outline" className="min-h-[44px]"><SlidersHorizontal className="size-4 mr-2" />Filters</Button>
      </div>

      <div className="flex overflow-x-auto gap-2 mb-6 sm:mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible no-scrollbar">
        {["All", "Hatha", "Vinyasa", "Ashtanga", "Yin", "Hot Yoga", "Restorative", "Prenatal", "Meditation"].map((s) => (
          <Badge key={s} variant={s === "All" ? "default" : "outline"} className="cursor-pointer px-3 py-1.5 whitespace-nowrap shrink-0 min-h-[36px] flex items-center">{s}</Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
        {/* Map */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          <div className="sticky top-4 lg:top-20 rounded-xl bg-muted h-[200px] sm:h-[300px] lg:h-[500px] flex items-center justify-center border">
            <div className="text-center text-muted-foreground">
              <MapPin className="size-10 mx-auto mb-2" />
              <p className="font-medium">Interactive Map</p>
              <p className="text-sm">San Francisco Bay Area</p>
              <p className="text-xs mt-2">{studios.length} studios found</p>
            </div>
          </div>
        </div>

        {/* Studio list */}
        <div className="lg:col-span-2 order-1 lg:order-2 space-y-4">
          {studios.map((studio) => (
            <Card key={studio.id} className="hover:shadow-md transition-shadow overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                <div className="relative sm:w-64 shrink-0">
                  <Image src={studio.imageUrl} alt={studio.name} className="w-full h-48 sm:h-full object-cover" width={400} height={300} loading="lazy" />
                  {studio.isVerified && <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs">Verified</Badge>}
                </div>
                <CardContent className="flex-1 pt-4 sm:pt-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-lg font-semibold">{studio.name}</h2>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-0.5">
                        <MapPin className="size-3.5" />
                        <span>{studio.address}, {studio.city}, {studio.state}</span>
                      </div>
                    </div>
                    {studio.distanceKm && (
                      <Badge variant="outline" className="shrink-0">{studio.distanceKm} km</Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <Star className="size-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{studio.rating}</span>
                    <span className="text-sm text-muted-foreground">({studio.reviewCount} reviews)</span>
                  </div>

                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{studio.description}</p>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {studio.styles.slice(0, 6).map((style) => (
                      <Badge key={style} variant="outline" className="text-xs">{style}</Badge>
                    ))}
                    {studio.styles.length > 6 && <Badge variant="outline" className="text-xs">+{studio.styles.length - 6}</Badge>}
                  </div>

                  <Separator className="my-3" />

                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Users className="size-3" />{studio.memberCount} members</span>
                    <span className="flex items-center gap-1"><Calendar className="size-3" />{studio.classesPerWeek} classes/wk</span>
                    {studio.hasVirtualClasses && <span className="flex items-center gap-1"><Monitor className="size-3" />Virtual</span>}
                    {studio.hasParking && <span className="flex items-center gap-1"><Car className="size-3" />Parking</span>}
                    {studio.isWheelchairAccessible && <span className="flex items-center gap-1"><Accessibility className="size-3" />Accessible</span>}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-4">
                    <div className="flex gap-4 text-sm">
                      <div><span className="text-muted-foreground">Drop-in</span> <span className="font-semibold">${studio.dropInPrice}</span></div>
                      <div><span className="text-muted-foreground">Monthly</span> <span className="font-semibold">${studio.monthlyPrice}</span></div>
                    </div>
                    <Button size="sm" className="w-full sm:w-auto min-h-[44px]">View Studio</Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* LocalBusiness JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            studios.map((studio) => ({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              name: studio.name,
              description: studio.description,
              image: studio.imageUrl,
              address: {
                "@type": "PostalAddress",
                streetAddress: studio.address,
                addressLocality: studio.city,
                addressRegion: studio.state,
                postalCode: studio.zipCode,
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: studio.latitude,
                longitude: studio.longitude,
              },
              telephone: studio.phone,
              url: studio.website,
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: studio.rating,
                reviewCount: studio.reviewCount,
                bestRating: 5,
                worstRating: 1,
              },
              priceRange: `$${studio.dropInPrice} - $${studio.monthlyPrice}/mo`,
            }))
          ),
        }}
      />
    </div>
  );
}
