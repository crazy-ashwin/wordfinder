"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WordDetailsDialog } from "@/components/word-details-dialog";

export default function WordsStartWithPage() {
	const popularPrefixes = [
		{
			prefix: "UN",
			count: 8934,
			examples: ["UNABLE", "UNDER", "UNTIL", "UNLESS", "UNIQUE"],
		},
		{
			prefix: "RE",
			count: 7623,
			examples: ["REALLY", "READY", "REASON", "RECENT", "RECORD"],
		},
		{
			prefix: "IN",
			count: 6789,
			examples: ["INSIDE", "INDEED", "INSTEAD", "INCLUDE", "INCREASE"],
		},
		{
			prefix: "DE",
			count: 5432,
			examples: ["DECIDE", "DESIGN", "DETAIL", "DEVELOP", "DEGREE"],
		},
		{
			prefix: "PRE",
			count: 4321,
			examples: ["PRESENT", "PRETTY", "PREVENT", "PREPARE", "PRESSURE"],
		},
		{
			prefix: "OUT",
			count: 3876,
			examples: ["OUTSIDE", "OUTPUT", "OUTLINE", "OUTCOME", "OUTLOOK"],
		},
		{
			prefix: "OVER",
			count: 3654,
			examples: [
				"OVERALL",
				"OVERCOME",
				"OVERLAP",
				"OVERHEAD",
				"OVERFLOW",
			],
		},
		{
			prefix: "UNDER",
			count: 2987,
			examples: [
				"UNDERSTAND",
				"UNDERGO",
				"UNDERLINE",
				"UNDERTAKE",
				"UNDERWAY",
			],
		},
	];

	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

	return (
		<div className='min-h-screen bg-gradient-to-b from-green-50 to-white'>
			<div className='container mx-auto px-4 py-8'>
				<div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
					{/* Main Content */}
					<div className='lg:col-span-3 space-y-8'>
						{/* Header */}
						<div className='bg-white border border-gray-300 rounded-xl p-8 mb-4 shadow flex flex-col gap-2'>
							<h1 className='text-4xl font-bold mb-2'>Words that Start in A</h1>
							<p className='mb-2'><span className='font-bold'>Words that start with A</span> are commonly used for word games like Scrabble and Words with Friends. This list will help you to find the top scoring words to beat the opponent. You can also find a list of all <Link href="/words-ending-in/A" className='text-blue-600 hover:underline'>words that end with A</Link> and <Link href="/words-with-letters/A" className='text-blue-600 hover:underline'>words with A</Link>. Try our <Link href="/words-by-length/5/starting-with/A" className='text-blue-600 hover:underline'>five letter words starting with A page</Link> if you&apos;re playing Wordle-like games or use the <Link href="/wordle-helper" className='text-blue-600 hover:underline'>New York Times Wordle Solver</Link> to quickly find the NYT Wordle daily answer.</p>
						</div>

						{/* Popular Prefixes */}
						<Card className='shadow-lg border border-gray-100'>
							<CardHeader className='bg-green-500 text-white rounded-t-xl p-0'>
								<CardTitle className='p-6'>
									Most Popular Word Prefixes
								</CardTitle>
							</CardHeader>
							<CardContent className='p-6'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
									{popularPrefixes.map((prefix, index) => (
										<div
											key={index}
											className='bg-green-50 rounded-lg p-4 border border-green-200'>
											<div className='flex justify-between items-center mb-3'>
												<h3 className='font-bold text-green-800 text-xl'>
													{prefix.prefix}-
												</h3>
												<Badge className='bg-green-500 text-white'>
													{prefix.count.toLocaleString()}{" "}
													words
												</Badge>
											</div>
											<div className='flex flex-wrap gap-2 mb-3'>
												{prefix.examples
													.slice(0, 4)
													.map((word, wordIndex) => (
														<WordDetailsDialog
															key={wordIndex}
															word={word}>
															<Badge
																variant='outline'
																className='cursor-pointer hover:bg-green-100 hover:border-green-400 transition-colors'>
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

						{/* Single Letter */}
						<Card className='shadow-lg border border-gray-100'>
							<CardHeader className='bg-orange-500 text-white rounded-t-xl p-0'>
								<CardTitle className='p-6'>
									Words Starting with Single Letters
								</CardTitle>
							</CardHeader>
							<CardContent className='p-6'>
								<div className='grid grid-cols-6 md:grid-cols-8 lg:grid-cols-13 gap-3'>
									{alphabet.map((letter, index) => (
										<Link
											key={index}
											href={`/words-by-length/5-letter-words?starts=${letter}`}
											className='bg-orange-50 hover:bg-orange-100 border border-orange-200 hover:border-orange-400 rounded-lg p-3 text-center transition-all duration-200 group'>
											<span className='font-bold text-orange-800 group-hover:text-orange-900 text-lg'>
												{letter}
											</span>
										</Link>
									))}
								</div>
							</CardContent>
						</Card>

						{/* Alphabet Navigation */}
						<Card className='shadow-lg border border-gray-100'>
							<CardHeader className='bg-blue-500 text-white rounded-t-xl p-0'>
								<CardTitle className='p-6'>
									Words Starting with Each Letter
								</CardTitle>
							</CardHeader>
							<CardContent className='p-6'>
								<div className='grid grid-cols-6 md:grid-cols-8 lg:grid-cols-13 gap-3'>
									{alphabet.map((letter, index) => (
										<Link
											key={index}
											href={`/words-by-length/5-letter-words?starts=${letter}`}
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
							<CardHeader className='bg-green-500 text-white rounded-t-xl p-0'>
								<CardTitle className='p-6'>Prefix Stats</CardTitle>
							</CardHeader>
							<CardContent className='p-4'>
								<div className='space-y-3'>
									<div className='flex justify-between'>
										<span className='text-gray-600'>
											Most Common
										</span>
										<span className='font-bold'>UN-</span>
									</div>
									<div className='flex justify-between'>
										<span className='text-gray-600'>
											Longest
										</span>
										<span className='font-bold'>ANTI-</span>
									</div>
									<div className='flex justify-between'>
										<span className='text-gray-600'>
											Most Letters
										</span>
										<span className='font-bold'>
											S (19,000+)
										</span>
									</div>
									<div className='flex justify-between'>
										<span className='text-gray-600'>
											Least Letters
										</span>
										<span className='font-bold'>
											X (350+)
										</span>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Etymology Tips */}
						<Card className='shadow-lg border border-gray-100'>
							<CardHeader className='bg-indigo-500 text-white rounded-t-xl p-0'>
								<CardTitle className='p-6'>Prefix Meanings</CardTitle>
							</CardHeader>
							<CardContent className='p-4'>
								<div className='space-y-3 text-sm'>
									<div className='bg-indigo-50 rounded-lg p-3'>
										<h4 className='font-semibold text-indigo-800 mb-1'>
											UN- = Not
										</h4>
										<p className='text-indigo-700'>
											Unable, Unhappy, Unfair
										</p>
									</div>
									<div className='bg-indigo-50 rounded-lg p-3'>
										<h4 className='font-semibold text-indigo-800 mb-1'>
											RE- = Again
										</h4>
										<p className='text-indigo-700'>
											Repeat, Return, Rebuild
										</p>
									</div>
									<div className='bg-indigo-50 rounded-lg p-3'>
										<h4 className='font-semibold text-indigo-800 mb-1'>
											PRE- = Before
										</h4>
										<p className='text-indigo-700'>
											Preview, Prepare, Predict
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Related Searches */}
						<Card className='shadow-lg border border-gray-100'>
							<CardHeader className='bg-teal-500 text-white rounded-t-xl p-0'>
								<CardTitle className='p-6'>Related Searches</CardTitle>
							</CardHeader>
							<CardContent className='p-4'>
								<div className='space-y-2'>
									<Link
										href='/words-ending-in'
										className='block text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200 text-sm py-2 px-3 rounded-lg border-l-4 border-gray-200 hover:border-teal-400'>
										Words Ending In
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
										href='/anagram-solver'
										className='block text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200 text-sm py-2 px-3 rounded-lg border-l-4 border-gray-200 hover:border-teal-400'>
										Anagram Solver
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