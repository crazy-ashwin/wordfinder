import type { Metadata } from "next";
import WordsEndingInLetterPage from "./WordsEndingInLetterPage";

type Props = {
  params: Promise<{ letter: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { letter } = await params;
  const upperLetter = letter.toUpperCase();

  return {
    title: `Words Ending with ${upperLetter} - Find Words Ending in ${upperLetter} | Find Word Finder`,
    description: `Find all words ending with ${upperLetter}. Search our comprehensive database of words ending in ${upperLetter} for Scrabble, Words with Friends, crosswords, and vocabulary building.`,
    alternates: {
      canonical: `/words-ending-in/${letter}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { letter } = await params;

  return <WordsEndingInLetterPage letter={letter} />;
}
