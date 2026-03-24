"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Trophy, Gamepad2 } from "lucide-react";
import { WordDetailsDialog } from "@/components/word-details-dialog";
import { baseUrl } from "@/lib/constant";

export default function WordsWithFriendsDictionaryPage() {
	const wwfWords = [
		{
			word: "QUIZ",
			score: 23,
			length: 4,
			definition: "A test of knowledge",
		},
		{ word: "JAZZ", score: 31, length: 4, definition: "A type of music" },
		{ word: "FIZZ", score: 26, length: 4, definition: "A hissing sound" },
		{
			word: "BUZZ",
			score: 25,
			length: 4,
			definition: "A continuous humming sound",
		},
		{
			word: "FUZZ",
			score: 26,
			length: 4,
			definition: "Fluffy or fuzzy material",
		},
		{
			word: "QUAY",
			score: 16,
			length: 4,
			definition: "A wharf or landing place",
		},
		{ word: "OXEN", score: 12, length: 4, definition: "Plural of ox" },
		{ word: "LYNX", score: 15, length: 4, definition: "A wild cat" },
	];

	const topScoringWords = [
		{ word: "QUIZZIFY", score: 41, length: 8 },
		{ word: "JAZZLIKE", score: 39, length: 8 },
		{ word: "BUZZWORD", score: 35, length: 8 },
		{ word: "FIZZLING", score: 32, length: 8 },
		{ word: "QUACKING", score: 28, length: 8 },
	];

	const gameFeatures = [
		{
			title: "Tile Values",
			description: "Different point values than Scrabble",
			icon: "🎯",
		},
		{
			title: "Board Layout",
			description: "Unique premium square placement",
			icon: "🎲",
		},
		{
			title: "Dictionary",
			description: "Enhanced word list with modern terms",
			icon: "📚",
		},
		{
			title: "Power-ups",
			description: "Special tiles and bonuses available",
			icon: "⚡",
		},
	];

	return (
		<div className='min-h-screen bg-gradient-to-b from-blue-50 to-white'>
			<head>
				<title>Words With Friends Dictionary | Find Word Finder</title>
				<meta
					name='description'
					content='Expand your vocabulary with our Words With Friends dictionary. Find valid WWF words, calculate scores, and learn meanings of over 173,000 playable words. Perfect for crossword enthusiasts and Scrabble lovers.'
				/>
				<meta
					name='keywords'
					content='words with friends dictionary, crossword solver, vocabulary expansion, scrabble, crossword, word games, word puzzles, word search, valid wwf words, score calculator, word meanings'
				/>
				<meta name='robots' content='index, follow' />
				<link rel='canonical' href={`${baseUrl}/words-with-friends-dictionary`} />
			</head>
			<div className='container mx-auto px-4 py-8'>
				<div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
					{/* Main Content */}
					<div className='lg:col-span-3 space-y-8'>
						{/* Header */}
						<div className='bg-white rounded-xl shadow-lg p-8 border border-gray-100'>
							<div className='flex items-center gap-3 mb-6'>
								<Users className='h-8 w-8 text-blue-500' />
								<h1 className='text-4xl font-bold text-gray-800'>
									Words With Friends Dictionary
								</h1>
							</div>
							<p className='text-lg text-gray-700 leading-relaxed mb-6'>
								The Words With Friends dictionary includes over
								173,000 playable words, featuring modern terms
								and slang not found in traditional Scrabble
								dictionaries. Our database helps you find valid
								WWF words, calculate scores with the unique tile
								values, and dominate your games against friends
								and family.
							</p>
						</div>

						{/* Game Features */}
						<Card className='shadow-lg border border-gray-100'>
							<CardHeader className='bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-xl'>
								<CardTitle className='flex items-center gap-2'>
									<Gamepad2 className='h-5 w-5' />
									Words With Friends Features
								</CardTitle>
							</CardHeader>
							<CardContent className='p-6'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
									{gameFeatures.map((feature, index) => (
										<div
											key={index}
											className='bg-blue-50 rounded-lg p-4 border border-blue-200'>
											<div className='flex items-center gap-3 mb-2'>
												<span className='text-2xl'>
													{feature.icon}
												</span>
												<h3 className='font-bold text-blue-800'>
													{feature.title}
												</h3>
											</div>
											<p className='text-blue-700'>
												{feature.description}
											</p>
										</div>
									))}
								</div>
							</CardContent>
						</Card>

						{/* Top Scoring Words */}
						<Card className='shadow-lg border border-gray-100'>
							<CardHeader className='bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-t-xl'>
								<CardTitle className='flex items-center gap-2'>
									<Trophy className='h-5 w-5' />
									Highest Scoring WWF Words
								</CardTitle>
							</CardHeader>
							<CardContent className='p-6'>
								<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
									{topScoringWords.map((word, index) => (
										<WordDetailsDialog
											key={index}
											word={word.word}>
											<div className='bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4 hover:from-purple-100 hover:to-purple-200 transition-all duration-200 cursor-pointer border border-purple-200'>
												<div className='flex justify-between items-center'>
													<span className='font-bold text-purple-800'>
														{word.word}
													</span>
													<Badge className='bg-purple-500 text-white font-bold'>
														{word.score} pts
													</Badge>
												</div>
												<div className='text-sm text-purple-600 mt-1'>
													{word.length} letters
												</div>
											</div>
										</WordDetailsDialog>
									))}
								</div>
							</CardContent>
						</Card>

						{/* Tile Values Comparison */}
						<Card className='shadow-lg border border-gray-100'>
							<CardHeader className='bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-xl'>
								<CardTitle>
									WWF vs Scrabble Tile Values
								</CardTitle>
							</CardHeader>
							<CardContent className='p-6'>
								<div className='overflow-x-auto'>
									<table className='w-full text-sm'>
										<thead>
											<tr className='border-b border-gray-200'>
												<th className='text-left py-2 font-semibold'>
													Letter
												</th>
												<th className='text-center py-2 font-semibold'>
													WWF Points
												</th>
												<th className='text-center py-2 font-semibold'>
													Scrabble Points
												</th>
												<th className='text-center py-2 font-semibold'>
													Difference
												</th>
											</tr>
										</thead>
										<tbody>
											{[
												{
													letter: "A",
													wwf: 1,
													scrabble: 1,
													diff: 0,
												},
												{
													letter: "D",
													wwf: 2,
													scrabble: 2,
													diff: 0,
												},
												{
													letter: "H",
													wwf: 3,
													scrabble: 4,
													diff: -1,
												},
												{
													letter: "J",
													wwf: 10,
													scrabble: 8,
													diff: 2,
												},
												{
													letter: "K",
													wwf: 5,
													scrabble: 5,
													diff: 0,
												},
												{
													letter: "Q",
													wwf: 12,
													scrabble: 10,
													diff: 2,
												},
												{
													letter: "X",
													wwf: 8,
													scrabble: 8,
													diff: 0,
												},
												{
													letter: "Z",
													wwf: 10,
													scrabble: 10,
													diff: 0,
												},
											].map((row, index) => (
												<tr
													key={index}
													className='border-b border-gray-100'>
													<td className='py-2 font-semibold'>
														{row.letter}
													</td>
													<td className='text-center py-2'>
														{row.wwf}
													</td>
													<td className='text-center py-2'>
														{row.scrabble}
													</td>
													<td className='text-center py-2'>
														<span
															className={`px-2 py-1 rounded text-xs font-semibold ${
																row.diff > 0
																	? "bg-green-100 text-green-800"
																	: row.diff <
																	  0
																	? "bg-red-100 text-red-800"
																	: "bg-gray-100 text-gray-800"
															}`}>
															{row.diff > 0
																? `+${row.diff}`
																: row.diff}
														</span>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</CardContent>
						</Card>

						{/* Word Results */}
						<Card className='shadow-lg border border-gray-100'>
							<CardHeader className='bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-t-xl'>
								<CardTitle>Popular WWF Words</CardTitle>
							</CardHeader>
							<CardContent className='p-6'>
								<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
									{wwfWords.map((word, index) => (
										<WordDetailsDialog
											key={index}
											word={word.word}>
											<div className='bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md hover:border-blue-300 transition-all duration-200 cursor-pointer'>
												<div className='flex justify-between items-center'>
													<span className='font-semibold text-gray-800'>
														{word.word}
													</span>
													<Badge className='bg-blue-500 text-white text-xs'>
														{word.score}
													</Badge>
												</div>
												<div className='text-xs text-gray-500 mt-1'>
													{word.length} letters
												</div>
											</div>
										</WordDetailsDialog>
									))}
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Sidebar */}
					<div className='lg:col-span-1 space-y-6'>
						{/* WWF Stats */}
						<Card className='shadow-lg border border-gray-100'>
							<CardHeader className='bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-t-xl'>
								<CardTitle>WWF Dictionary Stats</CardTitle>
							</CardHeader>
							<CardContent className='p-4'>
								<div className='space-y-3'>
									<div className='flex justify-between'>
										<span className='text-gray-600'>
											Total Words
										</span>
										<span className='font-bold'>
											173,000+
										</span>
									</div>
									<div className='flex justify-between'>
										<span className='text-gray-600'>
											Unique to WWF
										</span>
										<span className='font-bold'>
											73,000+
										</span>
									</div>
									<div className='flex justify-between'>
										<span className='text-gray-600'>
											Max Score
										</span>
										<span className='font-bold'>
											1,778 pts
										</span>
									</div>
									<div className='flex justify-between'>
										<span className='text-gray-600'>
											Average Word
										</span>
										<span className='font-bold'>
											5.2 letters
										</span>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Strategy Tips */}
						<Card className='shadow-lg border border-gray-100'>
							<CardHeader className='bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-xl'>
								<CardTitle>WWF Strategy</CardTitle>
							</CardHeader>
							<CardContent className='p-4'>
								<div className='space-y-3 text-sm'>
									<div className='bg-orange-50 rounded-lg p-3'>
										<h4 className='font-semibold text-orange-800 mb-1'>
											Modern Words
										</h4>
										<p className='text-orange-700'>
											Use contemporary terms like
											&quot;SELFIE&quot; and
											&quot;BLOG&quot;
										</p>
									</div>
									<div className='bg-orange-50 rounded-lg p-3'>
										<h4 className='font-semibold text-orange-800 mb-1'>
											Power Tiles
										</h4>
										<p className='text-orange-700'>
											Utilize special tiles for massive
											point bonuses
										</p>
									</div>
									<div className='bg-orange-50 rounded-lg p-3'>
										<h4 className='font-semibold text-orange-800 mb-1'>
											Board Control
										</h4>
										<p className='text-orange-700'>
											Control premium squares for maximum
											scoring
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Related Tools */}
						<Card className='shadow-lg border border-gray-100'>
							<CardHeader className='bg-gradient-to-r from-green-400 to-green-500 text-white rounded-t-xl'>
								<CardTitle>WWF Tools</CardTitle>
							</CardHeader>
							<CardContent className='p-4'>
								<div className='space-y-2'>
									<Link
										href='/words-start-with'
										className='block text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 text-sm py-2 px-3 rounded-lg border-l-4 border-gray-200 hover:border-green-400'>
										Words Start with
									</Link>
									<Link
										href='/words-end-in'
										className='block text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 text-sm py-2 px-3 rounded-lg border-l-4 border-gray-200 hover:border-green-400'>
										Words End with
									</Link>
									<Link
										href='/words-with-letters'
										className='block text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 text-sm py-2 px-3 rounded-lg border-l-4 border-gray-200 hover:border-green-400'>
										Words With Letters
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
