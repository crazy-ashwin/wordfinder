import type { Metadata } from "next";
import WordsByLengthStartingWithLetterPage from "./WordsByLengthStartingWithLetterPage";

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
    title: `${wordLength} Letter Words Starting with ${upperLetter} - Find Words Beginning with ${upperLetter} | Find Word Finder`,
    description: `Find all ${wordLength} letter words starting with ${upperLetter}. Search our comprehensive database of words beginning with ${upperLetter} for Scrabble, Words with Friends, crosswords, and vocabulary building.`,
    alternates: {
      canonical: `/words-by-length/${length}/starting-with/${letter}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { length, letter } = await params;
  
  return <WordsByLengthStartingWithLetterPage length={length} letter={letter} />;
}