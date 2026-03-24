import type { Metadata } from "next";
import type { ReactNode } from "react";
import { baseUrl } from "@/lib/constant";

export const metadata: Metadata = {
  title: "Confusing Words | Word Finder",
  description: "Clear comparisons of commonly confused words with examples and tips.",
  keywords: "confusing words, word finder, examples, tips, grammar, writing, language",
  alternates: {
    canonical: "/confusing-words",
  },
  openGraph: {
    title: "Confusing Words | Word Finder",
    description: "Clear comparisons of commonly confused words with examples and tips.",
    url: `${baseUrl}/confusing-words`,
    type: "website",
  },
  robots: "index, follow",
};

export default function ConfusingWordsLayout({ children }: { children: ReactNode }) {
  return children;
}

