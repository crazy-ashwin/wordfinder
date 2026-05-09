import { baseUrl, SITEMAP_CONFIG, SitemapEntry } from "./config";

export function getDynamicListPages(): SitemapEntry[] {
  const lengths = [2, 3, 4, 5, 6, 7, 8];
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  
  const pages: SitemapEntry[] = [];

  // Words by Length
  lengths.forEach(len => {
    const slug = `${len}-letter-words`;
    pages.push({
      url: `${baseUrl}/words-by-length/${slug}`,
      lastModified: new Date(),
      changeFrequency: SITEMAP_CONFIG.weekly,
      priority: 0.7,
    });

    // Sub-categorization for each length
    letters.forEach(letter => {
      // Starting with
      pages.push({
        url: `${baseUrl}/words-by-length/${slug}/starting-with/${letter}`,
        lastModified: new Date(),
        changeFrequency: SITEMAP_CONFIG.weekly,
        priority: 0.6,
      });
      // Ending in
      pages.push({
        url: `${baseUrl}/words-by-length/${slug}/ending-in/${letter}`,
        lastModified: new Date(),
        changeFrequency: SITEMAP_CONFIG.weekly,
        priority: 0.6,
      });
      // With
      pages.push({
        url: `${baseUrl}/words-by-length/${slug}/with/${letter}`,
        lastModified: new Date(),
        changeFrequency: SITEMAP_CONFIG.weekly,
        priority: 0.6,
      });
    });
  });

  // Global words start/end (without length)
  letters.forEach((letter) => {
    pages.push({
      url: `${baseUrl}/words-start-with/${letter}`,
      lastModified: new Date(),
      changeFrequency: SITEMAP_CONFIG.weekly,
      priority: 0.6,
    });
    pages.push({
      url: `${baseUrl}/words-ending-in/${letter}`,
      lastModified: new Date(),
      changeFrequency: SITEMAP_CONFIG.weekly,
      priority: 0.6,
    });
  });

  return pages;
}
