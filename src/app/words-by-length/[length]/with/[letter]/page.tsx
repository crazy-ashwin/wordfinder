import type { Metadata } from "next";
import WordsByLengthWithLetterPage from "./WordsByLengthWithLetterPage";

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
    title: `${wordLength} Letter Words with ${upperLetter} - Find Words Containing ${upperLetter} | Find Word Finder`,
    description: `Find all ${wordLength} letter words containing ${upperLetter}. Search our comprehensive database of words with ${upperLetter} for Scrabble, Words with Friends, crosswords, and vocabulary building.`,
    alternates: {
      canonical: `/words-by-length/${length}/with/${letter}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { length, letter } = await params;
  
  return <WordsByLengthWithLetterPage length={length} letter={letter} />;
}