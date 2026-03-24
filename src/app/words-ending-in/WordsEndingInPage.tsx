"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { WordDetailsDialog } from "@/components/word-details-dialog";

export default function WordsEndingInPage() {
	const popularEndings = [
		{
			suffix: "ING",
			count: 12847,
			examples: ["RUNNING", "JUMPING", "PLAYING", "SINGING", "DANCING"],
		},
		{
			suffix: "ION",
			count: 8934,
			examples: [
				"NATION",
				"STATION",
				"CREATION",
				"VACATION",
				"EDUCATION",
			],
		},
		{
			suffix: "LY",
			count: 7623,
			examples: ["QUICKLY", "SLOWLY", "REALLY", "FINALLY", "USUALLY"],
		},
		{
			suffix: "ED",
			count: 6789,
			examples: ["PLAYED", "WORKED", "HELPED", "LOOKED", "CALLED"],
		},
		{
			suffix: "ER",
			count: 5432,
			examples: ["PLAYER", "WORKER", "HELPER", "TEACHER", "WRITER"],
		},
		{
			suffix: "EST",
			count: 4321,
			examples: ["BIGGEST", "FASTEST", "LONGEST", "HIGHEST", "STRONGEST"],
		},
		{
			suffix: "AL",
			count: 3876,
			examples: ["NATIONAL", "PERSONAL", "NATURAL", "SPECIAL", "GENERAL"],
		},
		{
			suffix: "IC",
			count: 3654,
			examples: ["MAGIC", "MUSIC", "BASIC", "CLASSIC", "DRAMATIC"],
		},
	];

	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

	return (
		<div className='min-h-screen bg-gradient-to-b from-purple-50 to-white'>
			<div className='container mx-auto px-4 py-8'>
				<div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
					{/* Main Content */}
					<div className='lg:col-span-3 space-y-8'>
						{/* Information Box */}
						<div className='bg-white border border-gray-300 rounded-xl p-8 mb-4 shadow flex flex-col gap-2'>
							<h1 className='text-4xl font-bold mb-2'>Words that End in G</h1>
							<p className='mb-2'><span className='font-bold'>Words that end with G</span> are commonly used for word games like Scrabble and Words with Friends. This list will help you to find the top scoring words to beat the opponent. You can also find a list of all <Link href="/words-start-with/G" className='text-blue-600 hover:underline'>words that start with G</Link> and <Link href="/words-with-letters/G" className='text-blue-600 hover:underline'>words with G</Link>. Try our <Link href="/words-by-length/5/ending-in/G" className='text-blue-600 hover:underline'>five letter words ending with G page</Link> if you &apos;re playing Wordle-like games or use the <Link href="/wordle-helper" className='text-blue-600 hover:underline'>New York Times Wordle Solver</Link> to quickly find the NYT Wordle daily answer.</p>
						</div>

						{/* Header */}
						<div className='bg-white rounded-xl shadow-lg p-8 border border-gray-100'>
							<div className='flex items-center gap-3 mb-6'>
								<ArrowRight className='h-8 w-8 text-purple-500' />
								<h1 className='text-4xl font-bold text-gray-800'>
									Words Ending In
								</h1>
							</div>
							<p className='text-lg text-gray-700 leading-relaxed mb-6'>
								Find words that end with specific letters or
								suffixes. Whether you&apos;re playing word
								games, solving crosswords, or expanding your
								vocabulary, our comprehensive database helps you
								discover words with any ending pattern. Search
								by suffix length, letter combinations, or browse
								popular word endings.
							</p>
						</div>

						{/* Popular Endings */}
						<Card className='shadow-lg border border-gray-100'>
							<CardHeader className='bg-gradient-to-r py-2 from-purple-500 to-purple-600 text-white rounded-t-xl'>
								<CardTitle>Most Popular Word Endings</CardTitle>
							</CardHeader>
							<CardContent className='p-6'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
									{popularEndings.map((ending, index) => (
										<div
											key={index}
											className='bg-purple-50 rounded-lg p-4 border border-purple-200'>
											<div className='flex justify-between items-center mb-3'>
												<h3 className='font-bold text-purple-800 text-xl'>
													-{ending.suffix}
												</h3>
												<Badge className='bg-purple-500 text-white'>
													{ending.count.toLocaleString()}{" "}
													words
												</Badge>
											</div>
											<div className='flex flex-wrap gap-2 mb-3'>
												{ending.examples
													.slice(0, 4)
													.map((word, wordIndex) => (
														<WordDetailsDialog
															key={wordIndex}
															word={word}>
															<Badge
																variant='outline'
																className='cursor-pointer hover:bg-purple-100 hover:border-purple-400 transition-colors'>
																{word}
															</Badge>
														</WordDetailsDialog>
													))}
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>

						{/* Single Letter Endings */}
						<Card className='shadow-lg border border-gray-100'>
							<CardHeader className='bg-gradient-to-r py-2 from-blue-500 to-blue-600 text-white rounded-t-xl'>
								<CardTitle>
									Words Ending in Single Letters
								</CardTitle>
							</CardHeader>
							<CardContent className='p-6'>
								<div className='grid grid-cols-6 md:grid-cols-8 lg:grid-cols-13 gap-3'>
									{alphabet.map((letter, index) => (
										<Link
											key={index}
											href={`/words-by-length/5-letter-words?ends=${letter}`}
											className='bg-blue-50 hover:bg-blue-100 border border-blue-200 hover:border-blue-400 rounded-lg p-3 text-center transition-all duration-200 group'>
											<span className='font-bold text-blue-800 group-hover:text-blue-900 text-lg'>
												{letter}
											</span>
										</Link>
									))}
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Sidebar */}
					<div className='lg:col-span-1 space-y-6'>
						{/* Quick Stats */}
						<Card className='shadow-lg border border-gray-100'>
							<CardHeader className='bg-gradient-to-r py-2 from-purple-400 to-purple-500 text-white rounded-t-xl'>
								<CardTitle>Ending Stats</CardTitle>
							</CardHeader>
							<CardContent className='p-4'>
								<div className='space-y-3'>
									<div className='flex justify-between'>
										<span className='text-gray-600'>
											Most Common
										</span>
										<span className='font-bold'>-ING</span>
									</div>
									<div className='flex justify-between'>
										<span className='text-gray-600'>
											Longest
										</span>
										<span className='font-bold'>
											-IFICATION
										</span>
									</div>
									<div className='flex justify-between'>
										<span className='text-gray-600'>
											Rarest
										</span>
										<span className='font-bold'>
											-PHYTE
										</span>
									</div>
									<div className='flex justify-between'>
										<span className='text-gray-600'>
											Total Patterns
										</span>
										<span className='font-bold'>
											2,500+
										</span>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Word Game Tips */}
						<Card className='shadow-lg border border-gray-100'>
							<CardHeader className='bg-gradient-to-r py-2 from-indigo-500 to-indigo-600 text-white rounded-t-xl'>
								<CardTitle>Strategy Tips</CardTitle>
							</CardHeader>
							<CardContent className='p-4'>
								<div className='space-y-3 text-sm'>
									<div className='bg-indigo-50 rounded-lg p-3'>
										<h4 className='font-semibold text-indigo-800 mb-1'>
											Scrabble Strategy
										</h4>
										<p className='text-indigo-700'>
											Use -ING endings to build off
											existing words
										</p>
									</div>
									<div className='bg-indigo-50 rounded-lg p-3'>
										<h4 className='font-semibold text-indigo-800 mb-1'>
											Crossword Clues
										</h4>
										<p className='text-indigo-700'>
											Past tense clues often end in -ED
										</p>
									</div>
									<div className='bg-indigo-50 rounded-lg p-3'>
										<h4 className='font-semibold text-indigo-800 mb-1'>
											Word Building
										</h4>
										<p className='text-indigo-700'>
											Learn common suffixes to expand
											vocabulary
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Related Searches */}
						<Card className='shadow-lg border border-gray-100'>
							<CardHeader className='bg-gradient-to-r py-2 from-teal-500 to-teal-600 text-white rounded-t-xl'>
								<CardTitle>Related Searches</CardTitle>
							</CardHeader>
							<CardContent className='p-4'>
								<div className='space-y-2'>
									<Link
										href='/words-start-with'
										className='block text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200 text-sm py-2 px-3 rounded-lg border-l-4 border-gray-200 hover:border-teal-400'>
										Words Starting With
									</Link>
									<Link
										href='/words-with-letters'
										className='block text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200 text-sm py-2 px-3 rounded-lg border-l-4 border-gray-200 hover:border-teal-400'>
										Words With Letters
									</Link>
									<Link
										href='/words-by-length'
										className='block text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200 text-sm py-2 px-3 rounded-lg border-l-4 border-gray-200 hover:border-teal-400'>
										Words By Length
									</Link>
									<Link
										href='/rhyme-finder'
										className='block text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200 text-sm py-2 px-3 rounded-lg border-l-4 border-gray-200 hover:border-teal-400'>
										Rhyme Finder
									</Link>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}