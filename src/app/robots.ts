import type { MetadataRoute } from "next";

// Showcase fork — disallow everything. This is a frozen portfolio
// snapshot, not the real site. Crawlers should not index it.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", disallow: "/" }],
  };
}
