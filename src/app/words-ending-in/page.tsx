import type { Metadata } from "next";
import WordsEndingInPage from "./WordsEndingInPage";

export const metadata: Metadata = {
  title: "Words Ending In - Find Words with Specific Endings | Find Word Finder",
  description: "Find words that end with specific letters or suffixes. Search our comprehensive database of words ending in any letter or combination. Perfect for Scrabble, Words with Friends, crosswords, and vocabulary building.",
  keywords: "words ending in, word games, crossword solver, vocabulary expansion, ending in, suffixes, letter combinations, popular word endings",
  alternates: {
    canonical: "/words-ending-in",
  },
};

export default function Page() {
	return <WordsEndingInPage />;
}
