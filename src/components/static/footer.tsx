import { Flower2, Camera, Play, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { studioInfo } from "@/lib/mock-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/[0.03] dark:bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo and badge */}
          <div className="flex items-center gap-3">
            <Flower2 className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold tracking-tight text-foreground">
              {studioInfo.name}
            </span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current"
              aria-hidden="true"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            Yoga Alliance Registered
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/zenmatstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary/10 p-2.5 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="Follow us on Instagram"
            >
              <Camera className="h-5 w-5" />
            </a>
            <a
              href="https://youtube.com/@zenmatstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary/10 p-2.5 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="Subscribe on YouTube"
            >
              <Play className="h-5 w-5" />
            </a>
          </div>

          <Separator className="w-full max-w-md" />

          {/* Bottom row */}
          <div className="flex flex-col items-center gap-2 text-xs text-muted-foreground">
            <p>
              &copy; {currentYear} {studioInfo.name}. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Powered with <Heart className="h-3 w-3 fill-red-400 text-red-400" /> by{" "}
              <a
                href="https://build.withdarsh.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground/60 transition-colors hover:text-primary"
              >
                Darsh Gupta
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
