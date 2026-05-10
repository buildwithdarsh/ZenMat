import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zenmat.studio";

  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/explore", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/classes", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/studios", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/on-demand", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/meditation", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/community", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/pricing", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/instructors", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/pranayama", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/retreats", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/workshops", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/teacher-training", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/static", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
