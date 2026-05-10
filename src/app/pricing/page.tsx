import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, X } from "lucide-react";
import { studioPricingTiers, consumerPricingTiers } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Pricing — Affordable Plans for Practitioners & Studios",
  description:
    "Choose a ZenMat plan that fits your practice. Free tier available. Practitioner and studio plans with on-demand access, booking, analytics, and community features.",
  openGraph: {
    title: "Pricing — Affordable Plans for Practitioners & Studios",
    description: "Choose a ZenMat plan that fits your practice. Free tier, practitioner, and studio plans available.",
    url: "/pricing",
  },
  twitter: {
    title: "Pricing — Affordable Plans for Practitioners & Studios",
    description: "Choose a ZenMat plan that fits your practice. Free tier, practitioner, and studio plans available.",
  },
  alternates: { canonical: "/pricing" },
};

const pricingFaqs = [
  { q: "Can I switch plans anytime?", a: "Yes, you can upgrade or downgrade at any time. Changes take effect at your next billing cycle, with prorated charges for upgrades." },
  { q: "Is there a free trial?", a: "All paid plans include a 7-day free trial. No credit card required for the Free tier." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, Apple Pay, and Google Pay. For studios, we also support ACH and invoicing." },
  { q: "Can I cancel anytime?", a: "Yes, you can cancel anytime. Your membership remains active until the end of your billing period." },
  { q: "Do you offer corporate plans?", a: "Yes! We offer custom corporate wellness plans starting at $15/employee/month. Contact our sales team for details." },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-10">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-3">Simple, Transparent Pricing</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
          Choose the plan that fits your practice. All plans include access to our community features.
        </p>
      </div>

      <Tabs defaultValue="practitioner" className="mb-10 sm:mb-16">
        <TabsList className="mx-auto flex w-full sm:w-fit mb-6 sm:mb-8">
          <TabsTrigger value="practitioner" className="flex-1 sm:flex-initial">For Practitioners</TabsTrigger>
          <TabsTrigger value="studio" className="flex-1 sm:flex-initial">For Studios</TabsTrigger>
        </TabsList>

        <TabsContent value="practitioner">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {consumerPricingTiers.map((tier) => (
              <Card key={tier.name} className={`relative ${tier.isPopular ? "ring-2 ring-primary shadow-lg" : ""}`}>
                {tier.isPopular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">Most Popular</Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle>{tier.name}</CardTitle>
                  <div className="mt-2">
                    {tier.monthlyPrice === 0 ? (
                      <span className="text-4xl font-bold">Free</span>
                    ) : (
                      <>
                        <span className="text-4xl font-bold">${tier.monthlyPrice}</span>
                        <span className="text-muted-foreground">/month</span>
                      </>
                    )}
                  </div>
                  {tier.annualPrice > 0 && (
                    <CardDescription className="mt-1">${tier.annualPrice}/year (save {Math.round((1 - tier.annualPrice / (tier.monthlyPrice * 12)) * 100)}%)</CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.includes.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 min-h-[48px]" variant={tier.isPopular ? "default" : "outline"}>
                    {tier.monthlyPrice === 0 ? "Get Started Free" : "Start Free Trial"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="studio">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {studioPricingTiers.map((tier) => (
              <Card key={tier.name} className={`relative ${tier.isPopular ? "ring-2 ring-primary shadow-lg" : ""}`}>
                {tier.isPopular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">Most Popular</Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.target}</CardDescription>
                  <div className="mt-2">
                    <span className="text-4xl font-bold">${tier.monthlyPrice}</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                  {tier.annualPrice > 0 && (
                    <CardDescription className="mt-1">${tier.annualPrice}/year</CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={tier.isPopular ? "default" : "outline"}>
                    {tier.ctaText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {pricingFaqs.map((faq) => (
            <Card key={faq.q}>
              <CardContent className="pt-4">
                <h3 className="font-semibold mb-1">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: pricingFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
