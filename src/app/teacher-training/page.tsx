import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, Clock, Users, Star, GraduationCap, BookOpen, DollarSign, CheckCircle2 } from "lucide-react";
import { teacherTrainingPrograms } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Yoga Teacher Training — Yoga Alliance Certified 200hr & 500hr Programs",
  description:
    "Enroll in Yoga Alliance certified 200-hour and 500-hour teacher training programs. Comprehensive curriculum covering asana, anatomy, philosophy, and teaching methodology.",
  openGraph: {
    title: "Yoga Teacher Training — Yoga Alliance Certified 200hr & 500hr Programs",
    description: "Enroll in Yoga Alliance certified teacher training programs at ZenMat.",
    url: "/teacher-training",
  },
  twitter: {
    title: "Yoga Teacher Training — Yoga Alliance Certified 200hr & 500hr Programs",
    description: "Enroll in Yoga Alliance certified teacher training programs at ZenMat.",
  },
  alternates: { canonical: "/teacher-training" },
};

export default function TeacherTrainingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-10">
      <div className="text-center mb-8 sm:mb-12">
        <Badge variant="secondary" className="mb-3 sm:mb-4">Yoga Alliance Certified</Badge>
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-3">Yoga Teacher Training</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
          Transform your practice and share the gift of yoga. Our comprehensive programs prepare you to
          teach with confidence, knowledge, and authenticity.
        </p>
      </div>

      {/* Programs */}
      <div className="space-y-6 sm:space-y-8 mb-10 sm:mb-16">
        {teacherTrainingPrograms.map((program) => (
          <Card key={program.id} className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              <div className="lg:col-span-2 relative">
                <Image src={program.imageUrl} alt={program.title} className="w-full h-48 sm:h-64 lg:h-full object-cover" width={600} height={400} loading="lazy" />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary text-primary-foreground">{program.hours}-Hour</Badge>
                </div>
              </div>
              <div className="lg:col-span-3">
                <CardContent className="pt-5 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <Star className="size-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-sm">{program.rating}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-1">{program.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4">at {program.studioName}</p>

                  <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-2"><Calendar className="size-4" />
                      {new Date(program.startDate).toLocaleDateString([], { month: "short", day: "numeric" })} - {new Date(program.endDate).toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-2"><Clock className="size-4" />{program.hours} hours</span>
                    <span className="flex items-center gap-2"><Users className="size-4" />{program.spotsRemaining} spots remaining</span>
                    <span className="flex items-center gap-2"><GraduationCap className="size-4" />{program.instructorNames.join(", ")}</span>
                  </div>

                  {/* Modules */}
                  <Accordion className="mb-4">
                    {program.modules.map((mod, i) => (
                      <AccordionItem key={i} value={`mod-${i}`}>
                        <AccordionTrigger className="text-sm">
                          <div className="flex items-center gap-2">
                            <BookOpen className="size-4 text-primary" />
                            {mod.name}
                            <Badge variant="outline" className="text-[10px] ml-1">{mod.hours}hrs</Badge>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm text-muted-foreground">{mod.description}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>

                  <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t">
                    <div>
                      <span className="text-xl sm:text-2xl font-bold">${program.price.toLocaleString()}</span>
                      {program.installmentOption && (
                        <span className="text-xs text-muted-foreground ml-2">
                          <DollarSign className="size-3 inline" />Payment plans available
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 sm:flex-initial min-h-[44px]">Learn More</Button>
                      <Button size="sm" className="flex-1 sm:flex-initial min-h-[44px]">Apply Now</Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* What You'll Learn */}
      <section className="mb-10 sm:mb-16">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">What You&apos;ll Learn</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {[
            { title: "Asana Mastery", desc: "200+ poses with alignment, modifications, and sequencing" },
            { title: "Anatomy & Safety", desc: "Musculoskeletal system, injury prevention, and contraindications" },
            { title: "Yoga Philosophy", desc: "Yoga Sutras, 8 Limbs, Bhagavad Gita, and modern ethics" },
            { title: "Teaching Skills", desc: "Cueing, demonstration, class management, and confident delivery" },
          ].map((item) => (
            <Card key={item.title}>
              <CardContent className="pt-5 text-center">
                <CheckCircle2 className="size-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Certification Info */}
      <Card className="bg-gradient-to-r from-primary/5 to-accent/20 border-primary/20">
        <CardContent className="py-8 text-center">
          <GraduationCap className="size-12 text-primary mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">Yoga Alliance Registered</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-4">
            Graduates receive certification eligible for registration with Yoga Alliance as RYT-200 or RYT-500.
            Teach anywhere in the world with a globally recognized credential.
          </p>
          <Button>Download Program Guide</Button>
        </CardContent>
      </Card>

      {/* Course JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            teacherTrainingPrograms.map((program) => ({
              "@context": "https://schema.org",
              "@type": "Course",
              name: program.title,
              description: `${program.hours}-hour Yoga Alliance certified teacher training program at ${program.studioName}.`,
              provider: {
                "@type": "Organization",
                name: "ZenMat",
                url: "https://zenmat.studio",
              },
              hasCourseInstance: {
                "@type": "CourseInstance",
                courseMode: "Blended",
                startDate: program.startDate,
                endDate: program.endDate,
              },
              offers: {
                "@type": "Offer",
                price: program.price,
                priceCurrency: "USD",
                availability: program.spotsRemaining > 0
                  ? "https://schema.org/InStock"
                  : "https://schema.org/SoldOut",
              },
              image: program.imageUrl,
            }))
          ),
        }}
      />
    </div>
  );
}
