import type { Metadata } from "next";
import WordsByLengthPage from "./WordsByLengthPage";

type Props = {
  params: Promise<{ length: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {

  const { length } = await params;

  return {
    title: `${length} Letter Words`,
    description: `Find all ${length} letter words easily`,
    alternates: {
      canonical: `/words-by-length/${length}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { length } = await params;

  return <WordsByLengthPage length={length} />;
}
