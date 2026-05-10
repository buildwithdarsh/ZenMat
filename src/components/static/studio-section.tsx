"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { studioSpaces } from "@/lib/mock-data";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Camera, Expand } from "lucide-react";
import { GallerySkeleton } from "./loading-skeleton";

export function StudioSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 450);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="studio"
      className="relative bg-muted/30 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Camera className="h-4 w-4" />
            Our Space
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Studio & Space
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Natural light, wooden floors, living plants, and the scent of
            sandalwood &mdash; a space designed for peace
          </p>
        </div>

        {/* Gallery grid */}
        <div className="mt-14">
          {!loaded ? (
            <GallerySkeleton count={5} />
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {studioSpaces.map((space, i) => (
                <Dialog key={space.id}>
                  <DialogTrigger
                    className={`group animate-fade-in-up opacity-0 relative cursor-pointer overflow-hidden rounded-2xl text-left ${
                        i === 0
                          ? "md:col-span-2 md:row-span-2 h-64 md:h-full"
                          : "h-56"
                      } ${
                        i === 0
                          ? ""
                          : i === 1
                          ? "animation-delay-200"
                          : i === 2
                          ? "animation-delay-400"
                          : "animation-delay-600"
                      }`}
                    >
                      <Image
                        src={space.image}
                        alt={space.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes={
                          i === 0
                            ? "(max-width: 768px) 100vw, 50vw"
                            : "(max-width: 768px) 100vw, 25vw"
                        }
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <h3 className="text-base font-semibold text-white">
                          {space.name}
                        </h3>
                        <p className="mt-1 text-xs text-white/80 line-clamp-2">
                          {space.description}
                        </p>
                      </div>
                      <div className="absolute top-3 right-3 rounded-full bg-black/30 p-2 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                        <Expand className="h-4 w-4 text-white" />
                      </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl border-0 bg-transparent p-0 shadow-none">
                    <div className="relative aspect-video overflow-hidden rounded-2xl">
                      <Image
                        src={space.image}
                        alt={space.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 80vw"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="text-xl font-semibold text-white">
                          {space.name}
                        </h3>
                        <p className="mt-2 text-sm text-white/80">
                          {space.description}
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
