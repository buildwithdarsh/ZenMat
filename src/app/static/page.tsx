import type { Metadata } from "next";
import { StaticBrochurePage } from "@/components/static/static-brochure-page";
import { faqItems } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "ZenMat Yoga & Wellness Studio in New Delhi — Classes & Teacher Training",
  description:
    "Join Hatha, Ashtanga, Vinyasa, Pranayama, and Meditation classes at ZenMat near Lodi Garden, New Delhi. Yoga Alliance Registered studio with certified instructors and teacher training.",
  openGraph: {
    title: "ZenMat Yoga & Wellness Studio in New Delhi — Classes & Teacher Training",
    description: "Hatha, Ashtanga, Vinyasa, and Meditation classes at ZenMat near Lodi Garden, New Delhi.",
    url: "/static",
  },
  twitter: {
    title: "ZenMat Yoga & Wellness Studio in New Delhi — Classes & Teacher Training",
    description: "Hatha, Ashtanga, Vinyasa, and Meditation classes at ZenMat near Lodi Garden, New Delhi.",
  },
  alternates: { canonical: "/static" },
};

export default function StaticPage() {
  return (
    <>
      <StaticBrochurePage />

      {/* LocalBusiness + FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "HealthAndBeautyBusiness",
                name: "ZenMat",
                description: "Yoga Alliance Registered studio offering Hatha, Ashtanga, Vinyasa, Pranayama, Meditation, and teacher training near Lodi Garden, New Delhi.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "23, Shanti Nagar, Near Lodi Garden",
                  addressLocality: "New Delhi",
                  addressRegion: "Delhi",
                  postalCode: "110003",
                  addressCountry: "IN",
                },
                telephone: "+91-98765-43210",
                email: "namaste@zenmat.studio",
                url: "https://zenmat.studio/static",
                image: "https://picsum.photos/id/15/1920/1080",
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 28.5937,
                  longitude: 77.2199,
                },
              },
              {
                "@type": "FAQPage",
                mainEntity: faqItems.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />
    </>
  );
}
