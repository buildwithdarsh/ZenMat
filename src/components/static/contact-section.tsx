"use client";

import { useEffect, useState, useTransition } from "react";
import { studioInfo, classTimings, interestOptions, experienceLevels } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { ContactSkeleton } from "./loading-skeleton";

export function ContactSection() {
  const [loaded, setLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 420);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate action delay (400-700ms)
    await new Promise((r) =>
      setTimeout(r, Math.floor(Math.random() * 300) + 400)
    );
    setSubmitting(false);
    setSubmitted(true);
  };

  // Compact class schedule for display
  const todaySchedule =
    classTimings[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1] ||
    classTimings[0];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      <div className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Send className="h-4 w-4" />
            Get In Touch
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ready to begin? We&apos;d love to hear from you. Send us an inquiry and
            we&apos;ll guide you to the perfect class.
          </p>
        </div>

        <div className="mt-14">
          {!loaded ? (
            <ContactSkeleton />
          ) : (
            <div className="animate-fade-in-up opacity-0 grid grid-cols-1 gap-10 lg:grid-cols-2">
              {/* Left: Contact form */}
              <Card className="border-border/50">
                <CardContent className="p-6 sm:p-8">
                  {submitted ? (
                    <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 text-center">
                      <div className="rounded-full bg-primary/10 p-4">
                        <CheckCircle2 className="h-12 w-12 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground">
                        Namaste!
                      </h3>
                      <p className="max-w-sm text-muted-foreground">
                        Thank you for your inquiry. We&apos;ll get back to you
                        within 24 hours to help you begin your yoga journey.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setSubmitted(false)}
                        className="mt-4"
                      >
                        Send another inquiry
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">
                            Full Name <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="name"
                            required
                            placeholder="Your full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">
                            Email <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            placeholder="you@example.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          Phone <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="interest">I&apos;m interested in</Label>
                          <Select>
                            <SelectTrigger id="interest">
                              <SelectValue placeholder="Select interest" />
                            </SelectTrigger>
                            <SelectContent>
                              {interestOptions.map((opt) => (
                                <SelectItem key={opt} value={opt}>
                                  {opt}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="experience">Experience Level</Label>
                          <Select>
                            <SelectTrigger id="experience">
                              <SelectValue placeholder="Select level" />
                            </SelectTrigger>
                            <SelectContent>
                              {experienceLevels.map((lvl) => (
                                <SelectItem key={lvl} value={lvl}>
                                  {lvl}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">
                          Message <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          required
                          placeholder="Tell us about your goals, any health conditions we should know about, or questions you have..."
                          rows={4}
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full rounded-full"
                        disabled={submitting}
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Inquiry
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* Right: Studio info */}
              <div className="space-y-6 animation-delay-200 animate-fade-in-up opacity-0">
                {/* Map */}
                <Card className="overflow-hidden border-border/50">
                  <div className="h-56 w-full">
                    <iframe
                      src={studioInfo.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Studio location"
                    />
                  </div>
                </Card>

                {/* Contact details */}
                <Card className="border-border/50">
                  <CardContent className="space-y-4 p-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Address</p>
                        <p className="text-sm text-muted-foreground">
                          {studioInfo.address}
                          <br />
                          {studioInfo.city}, {studioInfo.state} {studioInfo.zip}
                        </p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start gap-3">
                      <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p className="text-sm text-muted-foreground">
                          {studioInfo.phone}
                        </p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start gap-3">
                      <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-sm text-muted-foreground">
                          {studioInfo.email}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Today's schedule */}
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-foreground">
                        Today&apos;s Classes ({todaySchedule.day})
                      </h3>
                    </div>
                    <div className="space-y-2.5">
                      {todaySchedule.classes.map((cls, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2 text-sm"
                        >
                          <span className="font-medium text-foreground">
                            {cls.time}
                          </span>
                          <span className="text-muted-foreground">
                            {cls.name}
                          </span>
                          <span className="text-xs text-primary">
                            {cls.instructor}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
