import { supabase } from "@/lib/supabase";
import { baseUrl, SITEMAP_CONFIG, SitemapEntry } from "./config";
import { scanDirectoryForSitemap } from "./fs-scanner";

export async function getSpellingPages(): Promise<SitemapEntry[]> {
  const dbEntries: Array<{ slug: string; updated_at: string | null }> = [];
  const pageSize = 1000;
  let page = 0;
  let hasMore = true;

  try {
    while (hasMore) {
      const from = page * pageSize;
      const to = from + pageSize - 1;

      const { data, error } = await supabase
        .from("spelling_entries")
        .select("slug, updated_at")
        .eq("is_published", true)
        .order("updated_at", { ascending: false })
        .range(from, to);

      if (error) {
        console.error(`Error fetching spelling entries (page ${page}):`, error);
        break;
      }

      if (data && data.length > 0) {
        dbEntries.push(...data);
        hasMore = data.length === pageSize;
        page++;
      } else {
        hasMore = false;
      }
    }
  } catch (error) {
    console.error("Error generating spelling sitemap:", error);
  }

  const dynamicPages = dbEntries.map((entry) => ({
    url: `${baseUrl}/spelling/${entry.slug}`,
    lastModified: entry.updated_at ? new Date(entry.updated_at) : new Date(),
    changeFrequency: SITEMAP_CONFIG.weekly,
    priority: SITEMAP_CONFIG.highPriority,
  }));

  // Also scan filesystem for hardcoded spelling pages
  const fsPages = scanDirectoryForSitemap("src/app/spelling", "spelling");

  // Combine and deduplicate
  const allPages = [...dynamicPages, ...fsPages];
  const uniquePages = Array.from(new Map(allPages.map(p => [p.url, p])).values());

  return uniquePages;
}
