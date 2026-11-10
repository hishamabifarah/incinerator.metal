import type { MetadataRoute } from "next";
import { archiveItems, collections } from "../data/archive";
import { getSiteUrl } from "../lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();
  const staticPaths = ["/", "/about", "/archive/seen-live", ...collections.map((collection) => `/archive/${collection.slug}`)];
  const detailPaths = archiveItems.map((item) => `/archive/${item.collectionSlug}/${item.id}`);
  const uniquePaths = [...new Set([...staticPaths, ...detailPaths])];

  return uniquePaths.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").length >= 4 ? 0.7 : 0.8,
  }));
}
