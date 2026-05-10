import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Practice: [
    { href: "/classes", label: "Browse Classes" },
    { href: "/on-demand", label: "On-Demand Library" },
    { href: "/meditation", label: "Meditation" },
    { href: "/pranayama", label: "Pranayama" },
    { href: "/schedule", label: "My Schedule" },
  ],
  Discover: [
    { href: "/studios", label: "Find Studios" },
    { href: "/instructors", label: "Instructors" },
    { href: "/workshops", label: "Workshops" },
    { href: "/retreats", label: "Retreats" },
    { href: "/community", label: "Community" },
  ],
  Learn: [
    { href: "/teacher-training", label: "Teacher Training" },
    { href: "/blog", label: "Blog & Articles" },
    { href: "/explore", label: "Yoga Styles Guide" },
    { href: "/pricing", label: "Pricing" },
  ],
  Company: [
    { href: "/static#about", label: "About ZenMat" },
    { href: "/static#contact", label: "Contact" },
    { href: "/pricing", label: "Pricing" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 hidden lg:block">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold mb-4">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <span className="text-sm font-bold">Z</span>
            </div>
            <span className="text-sm font-semibold">ZenMat</span>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} ZenMat by Darsh Gupta. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Yoga Alliance Registered (RYS 200 / RYS 300)
          </p>
        </div>
      </div>
    </footer>
  );
}
