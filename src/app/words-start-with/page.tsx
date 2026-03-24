import type { Metadata } from "next";
import WordsStartWithPage from "./WordsStartWithPage";

export const metadata: Metadata = {
  title: "Words Starting With - Find Words with Specific Prefixes | Find Word Finder",
  description: "Find words that start with specific letters or prefixes. Search our comprehensive database of words starting with any letter or combination. Perfect for Scrabble, Words with Friends, crosswords, and vocabulary building.",
  keywords: "words starting with, word games, crossword solver, vocabulary expansion, starting with, prefixes, letter combinations, popular word prefixes",
  alternates: {
    canonical: "/words-start-with",
  },
};

export default function Page() {
	return <WordsStartWithPage />;
}
