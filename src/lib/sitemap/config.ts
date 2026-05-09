import { MetadataRoute } from "next";
import { baseUrl } from "@/lib/constant";

export { baseUrl };

export type SitemapEntry = MetadataRoute.Sitemap[number];

export const SITEMAP_CONFIG = {
  defaultPriority: 0.5,
  highPriority: 0.9,
  criticalPriority: 1.0,
  daily: "daily" as const,
  weekly: "weekly" as const,
  monthly: "monthly" as const,
};
