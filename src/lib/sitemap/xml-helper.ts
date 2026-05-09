import { SitemapEntry } from "./config";

export function toSitemapXml(entries: SitemapEntry[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${entries
    .map(
      (entry) => `
  <url>
    <loc>${entry.url}</loc>
    ${entry.lastModified ? `<lastmod>${new Date(entry.lastModified).toISOString()}</lastmod>` : ""}
    ${entry.changeFrequency ? `<changefreq>${entry.changeFrequency}</changefreq>` : ""}
    ${entry.priority ? `<priority>${entry.priority.toFixed(1)}</priority>` : ""}
  </url>`
    )
    .join("")}
</urlset>`;
}

export function toSitemapIndexXml(sitemaps: { url: string; lastModified?: Date }[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemaps
    .map(
      (sitemap) => `
  <sitemap>
    <loc>${sitemap.url}</loc>
    ${sitemap.lastModified ? `<lastmod>${sitemap.lastModified.toISOString()}</lastmod>` : `<lastmod>${new Date().toISOString()}</lastmod>`}
  </sitemap>`
    )
    .join("")}
</sitemapindex>`;
}
