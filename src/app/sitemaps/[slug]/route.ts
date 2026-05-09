import { NextRequest, NextResponse } from "next/server";
import { getStaticPages } from "@/lib/sitemap/static";
import { getSpellingPages } from "@/lib/sitemap/spelling";
import { getGrammarPages } from "@/lib/sitemap/grammar";
import { getBlogPages } from "@/lib/sitemap/blog";
import { getConfusingWordsPages } from "@/lib/sitemap/confusing-words";
import { getDynamicListPages } from "@/lib/sitemap/dynamic-lists";
import { toSitemapXml } from "@/lib/sitemap/xml-helper";
import { SitemapEntry } from "@/lib/sitemap/config";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  // Await params in Next.js 15+
  const { slug } = await params;
  const type = slug.replace(".xml", "");
  let entries: SitemapEntry[] = [];

  try {
    switch (type) {
      case "pages":
        // All static pages and tools
        entries = await getStaticPages();
        break;

      case "spelling":
        entries = await getSpellingPages();
        break;

      case "grammar":
        entries = await getGrammarPages();
        break;

      case "confusing-words":
        entries = await getConfusingWordsPages();
        break;

      case "blog":
        entries = await getBlogPages();
        break;

      case "lists":
        entries = await getDynamicListPages();
        break;

      default:
        return new NextResponse("Not Found", { status: 404 });
    }

    const xml = toSitemapXml(entries);

    return new NextResponse(xml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
      },
    });
  } catch (error) {
    console.error(`Error generating sitemap for ${type}:`, error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
