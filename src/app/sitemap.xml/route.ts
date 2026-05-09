import { NextResponse } from "next/server";
import { baseUrl } from "@/lib/constant";
import { toSitemapIndexXml } from "@/lib/sitemap/xml-helper";

export async function GET() {
  const sitemaps = [
    { url: `${baseUrl}/sitemaps/pages.xml` },
    { url: `${baseUrl}/sitemaps/spelling.xml` },
    { url: `${baseUrl}/sitemaps/grammar.xml` },
    { url: `${baseUrl}/sitemaps/confusing-words.xml` },
    { url: `${baseUrl}/sitemaps/blog.xml` },
    { url: `${baseUrl}/sitemaps/lists.xml` },
  ];

  const xml = toSitemapIndexXml(sitemaps);

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
    },
  });
}
