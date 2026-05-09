import type { Metadata } from "next";
import type { ReactNode } from "react";
import { baseUrl } from "@/lib/constant";

import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "/confusing-words";
  const fullUrl = `${baseUrl}${pathname.startsWith("/") ? "" : "/"}${pathname}`;

  // Fallback title from pathname if needed
  const pageName = pathname.split("/").pop()?.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()) || "Confusing Words";

  return {
    title: pathname === "/confusing-words" ? "Confusing Words | Word Finder" : `${pageName} | Word Finder`,
    description: "Clear comparisons of commonly confused words with examples and tips.",
    keywords: "confusing words, word finder, examples, tips, grammar, writing, language",
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: pathname === "/confusing-words" ? "Confusing Words | Word Finder" : `${pageName} | Word Finder`,
      description: "Clear comparisons of commonly confused words with examples and tips.",
      url: fullUrl,
      type: "website",
    },
    robots: "index, follow",
  };
}

export default function ConfusingWordsLayout({ children }: { children: ReactNode }) {
  return children;
}

