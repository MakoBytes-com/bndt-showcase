import type { MetadataRoute } from "next";

// Showcase fork — empty sitemap so no URLs leak into search.
export default function sitemap(): MetadataRoute.Sitemap {
  return [];
}
