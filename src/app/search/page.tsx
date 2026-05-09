import { Suspense } from "react";
import SearchContent from "./SearchContent";
import { baseUrl } from "@/lib/constant";

export const metadata = {
  title: "Word Finder | Search Words",
  description: "Word Finder is a free online tool that helps you find words using letters, patterns, and more.",
  keywords: "Word Finder, search words, find words, word search, word finder tool",
  openGraph: {
    title: "Word Finder | Search Words",
    description: "Word Finder is a free online tool that helps you find words using letters, patterns, and more.",
    url: `${baseUrl}/search`,
    type: "article",
  },
  alternates: {
    canonical: `${baseUrl}/search`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  }

}


export default function SearchPage() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<SearchContent />
		</Suspense>
	);
}
