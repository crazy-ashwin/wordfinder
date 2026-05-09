import type { Metadata } from "next";
import type { ReactNode } from "react";
import { baseUrl } from "@/lib/constant";

import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "/blog";
  const fullUrl = `${baseUrl}${pathname.startsWith("/") ? "" : "/"}${pathname}`;

  return {
    title: pathname === "/blog" ? "Grammar Blog | Word Finder" : "Blog Post | Word Finder",
    description: "Articles, guides, and tips to improve your grammar and writing.",
    keywords: "grammar, writing, articles, guides, tips, improve, English, language",
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: pathname === "/blog" ? "Grammar Blog | Word Finder" : "Blog Post | Word Finder",
      description: "Articles, guides, and tips to improve your grammar and writing.",
      url: fullUrl,
      type: "website",
    },
    robots: "index, follow",
  };
}

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}

