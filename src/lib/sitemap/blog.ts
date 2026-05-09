import { blogPosts } from "@/lib/data";
import { baseUrl, SITEMAP_CONFIG, SitemapEntry } from "./config";

export function getBlogPages(): SitemapEntry[] {
  return blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: SITEMAP_CONFIG.monthly,
    priority: SITEMAP_CONFIG.highPriority,
  }));
}
