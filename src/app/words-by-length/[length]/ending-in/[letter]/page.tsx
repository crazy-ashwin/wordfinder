import type { Metadata } from "next";
import WordsByLengthEndingWithLetterPage from "./WordsByLengthEndingWithLetterPage";

type Props = {
  params: Promise<{ length: string; letter: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { length, letter } = await params;
  const upperLetter = letter.toUpperCase();
  const wordLength = length.match(/(\d+)/)?.[1] || "2";

  return {
    title: `${wordLength} Letter Words Ending in ${upperLetter} - Find Words Ending with ${upperLetter} | Find Word Finder`,
    description: `Find all ${wordLength} letter words ending in ${upperLetter}. Search our comprehensive database of words ending with ${upperLetter} for Scrabble, Words with Friends, crosswords, and vocabulary building.`,
    alternates: {
      canonical: `/words-by-length/${length}/ending-in/${letter}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { length, letter } = await params;
  
  return <WordsByLengthEndingWithLetterPage length={length} letter={letter} />;
}