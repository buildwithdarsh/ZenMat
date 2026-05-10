import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Clock, Search } from "lucide-react";
import { blogPosts } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Wellness Blog — Yoga Education, Ayurveda & Mindfulness Articles",
  description:
    "Read articles on yoga education, Ayurveda, anatomy, mindfulness, philosophy, and wellness lifestyle. Written by certified instructors and wellness practitioners.",
  openGraph: {
    title: "Wellness Blog — Yoga Education, Ayurveda & Mindfulness Articles",
    description: "Read articles on yoga education, Ayurveda, anatomy, and mindfulness on the ZenMat blog.",
    url: "/blog",
  },
  twitter: {
    title: "Wellness Blog — Yoga Education, Ayurveda & Mindfulness Articles",
    description: "Read articles on yoga education, Ayurveda, anatomy, and mindfulness on the ZenMat blog.",
  },
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-10">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Wellness Blog</h1>
        <p className="text-muted-foreground mt-1 text-sm sm:text-base">Yoga education, Ayurveda, anatomy, mindfulness, and lifestyle articles</p>
      </div>

      <div className="flex flex-col gap-3 mb-6 sm:mb-8">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input placeholder="Search articles..." className="pl-9 min-h-[44px] text-[16px] sm:text-sm" />
        </div>
        <div className="flex overflow-x-auto gap-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible no-scrollbar">
          {["All", "Yoga Education", "Philosophy", "Anatomy", "Ayurveda", "Mindfulness", "Lifestyle"].map((cat) => (
            <Badge key={cat} variant={cat === "All" ? "default" : "outline"} className="cursor-pointer px-3 py-1.5 whitespace-nowrap shrink-0 min-h-[36px] flex items-center">{cat}</Badge>
          ))}
        </div>
      </div>

      {/* Featured */}
      {featured && (
        <Card className="mb-8 sm:mb-10 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <Image src={featured.imageUrl} alt={featured.title} className="w-full h-48 sm:h-64 md:h-full object-cover" width={600} height={400} priority />
            <CardContent className="pt-6 flex flex-col justify-center">
              <Badge variant="secondary" className="w-fit mb-3">{featured.category}</Badge>
              <h2 className="text-2xl font-bold mb-2">{featured.title}</h2>
              <p className="text-muted-foreground mb-4">{featured.excerpt}</p>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={featured.authorAvatarUrl} />
                  <AvatarFallback>{featured.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{featured.author}</p>
                  <p className="text-xs text-muted-foreground">{featured.publishedDate} &middot; {featured.readTime} min read</p>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {rest.map((post) => (
          <Card key={post.id} className="group hover:shadow-md transition-shadow overflow-hidden">
            <div className="relative">
              <Image src={post.imageUrl} alt={post.title} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300" width={600} height={400} loading="lazy" />
              <Badge variant="secondary" className="absolute top-2 left-2 text-xs">{post.category}</Badge>
            </div>
            <CardContent className="pt-3">
              <h3 className="font-semibold mb-1 line-clamp-2">{post.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{post.excerpt}</p>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={post.authorAvatarUrl} />
                  <AvatarFallback>{post.author[0]}</AvatarFallback>
                </Avatar>
                <span className="text-xs">{post.author}</span>
                <span className="text-xs text-muted-foreground ml-auto flex items-center gap-1">
                  <Clock className="size-3" />{post.readTime} min
                </span>
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-[10px] px-1.5 py-0">{tag}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
