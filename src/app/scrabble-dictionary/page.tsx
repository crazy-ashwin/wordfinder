
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Trophy, Target } from "lucide-react";
import { WordDetailsDialog } from "@/components/word-details-dialog";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Scrabble Dictionary | Find Word Finder",
	description:
		"The official Scrabble dictionary contains over 100,000 playable words. Our comprehensive database includes words from the Official Tournament and Club Word List (OTCWL), used in North American Scrabble tournaments.",
	alternates: {
		canonical: "/scrabble-dictionary",
	},
};


export default function ScrabbleDictionaryPage() {
	const scrabbleWords = [
		{
			word: "QUIZ",
			score: 22,
			length: 4,
			definition: "A test of knowledge",
		},
		{ word: "JAZZ", score: 29, length: 4, definition: "A type of music" },
		{ word: "FIZZ", score: 25, length: 4, definition: "A hissing sound" },
		{
			word: "BUZZ",
			score: 24,
			length: 4,
			definition: "A continuous humming sound",
		},
		{
			word: "FUZZ",
			score: 25,
			length: 4,
			definition: "Fluffy or fuzzy material",
		},
		{
			word: "QUAY",
			score: 16,
			length: 4,
			definition: "A wharf or landing place",
		},
		{ word: "OXEN", score: 11, length: 4, definition: "Plural of ox" },
		{ word: "LYNX", score: 14, length: 4, definition: "A wild cat" },
		{ word: "ONYX", score: 14, length: 4, definition: "A type of stone" },
		{ word: "CRUX", score: 13, length: 4, definition: "The crucial point" },
	];

	const highScoringWords = [
		{ word: "QUARTZY", score: 28, length: 7 },
		{ word: "QUIZZED", score: 35, length: 7 },
		{ word: "JAZZILY", score: 35, length: 7 },
		{ word: "BUZZWIG", score: 31, length: 7 },
		{ word: "FIZZLED", score: 29, length: 7 },
	];

	const wordsByLength = [
		{ length: 2, count: 107, examples: ["QI", "XU", "ZA"] },
		{ length: 3, count: 1347, examples: ["QAT", "ZAX", "JEW"] },
		{ length: 4, count: 5638, examples: ["QUIZ", "JAZZ", "FIZZ"] },
		{ length: 5, count: 12972, examples: ["QUARK", "JAZZY", "FIZZY"] },
		{ length: 6, count: 23033, examples: ["QUARTZ", "JAZZBO", "FIZZLE"] },
		{
			length: 7,
			count: 34342,
			examples: ["QUARTER", "JAZZIER", "FIZZLED"],
		},
		{
			length: 8,
			count: 42150,
			examples: ["QUASHING", "JAZZIEST", "FIZZLING"],
		},
	];

	return (
		<div className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
			<div className='container mx-auto px-4 py-8'>
				<div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
					{/* Main Content */}
					<div className='lg:col-span-3 space-y-8'>
						{/* Header */}
						<div className='bg-white rounded-xl shadow-lg p-8 border border-gray-100'>
							<div className='flex items-center gap-3 mb-6'>
								<BookOpen className='h-8 w-8 text-green-500' />
								<h1 className='text-4xl font-bold text-gray-800'>
									Scrabble Dictionary
								</h1>
							</div>
							<p className='text-lg text-gray-700 leading-relaxed mb-6'>
								The official Scrabble dictionary contains over
								100,000 playable words. Our comprehensive
								database includes words from the Official
								Tournament and Club Word List (OTCWL), used in
								North American Scrabble tournaments. Find valid
								Scrabble words, check their scores, and improve
								your game strategy.
							</p>
						</div>

						{/* High Scoring Words */}
						<Card className='shadow-lg border border-gray-100'>
							<CardHeader className='bg-yellow-500 text-black rounded-t-xl p-0'>
								<CardTitle className='flex items-center gap-2 p-6'>
									<Trophy className='h-5 w-5' />
									High Scoring Scrabble Words
								</CardTitle>
							</CardHeader>
							<CardContent className='p-6'>
								<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
									{highScoringWords.map((word, index) => (
										<WordDetailsDialog
											key={index}
											word={word.word}>
											<div className='bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 hover:from-green-100 hover:to-green-200 transition-all duration-200 cursor-pointer border border-green-200'>
												<div className='flex justify-between items-center'>
													<span className='font-bold text-green-800'>
														{word.word}
													</span>
													<Badge className='bg-yellow-500 text-black font-bold'>
														{word.score} pts
													</Badge>
												</div>
												<div className='text-sm text-green-600 mt-1'>
													{word.length} letters
												</div>
											</div>
										</WordDetailsDialog>
									))}
								</div>
							</CardContent>
						</Card>

						{/* Words by Length */}
						<Card className='shadow-lg border border-gray-100'>
							<CardHeader className='bg-blue-500 text-white rounded-t-xl p-0'>
								<CardTitle className='p-6'>
									Scrabble Words by Length
								</CardTitle>
							</CardHeader>
							<CardContent className='p-6'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
									{wordsByLength.map((category, index) => (
										<div
											key={index}
											className='bg-gray-50 rounded-lg p-4 border border-gray-200'>
											<div className='flex justify-between items-center mb-3'>
												<h3 className='font-bold text-gray-800'>
													{category.length} Letter
													Words
												</h3>
												<Badge className='bg-blue-500 text-white'>
													{category.count.toLocaleString()}{" "}
													words
												</Badge>
											</div>
											<div className='flex flex-wrap gap-2'>
												{category.examples.map(
													(word, wordIndex) => (
														<WordDetailsDialog
															key={wordIndex}
															word={word}>
															<Badge
																variant='outline'
																className='cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-colors'>
																{word}
															</Badge>
														</WordDetailsDialog>
													)
												)}
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>

						{/* Search Results */}
						<Card className='shadow-lg border border-gray-100'>
							<CardHeader className='bg-green-500 text-white rounded-t-xl p-0'>
								<CardTitle className='p-6'>
									Featured Scrabble Words
								</CardTitle>
							</CardHeader>
							<CardContent className='p-6'>
								<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
									{scrabbleWords.map((word, index) => (
										<WordDetailsDialog
											key={index}
											word={word.word}>
											<div className='bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md hover:border-green-300 transition-all duration-200 cursor-pointer'>
												<div className='flex justify-between items-center'>
													<span className='font-semibold text-gray-800'>
														{word.word}
													</span>
													<Badge className='bg-green-500 text-white text-xs'>
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
								{scrabbleWords.length === 0 && (
									<div className='text-center py-8 text-gray-500'>
										<Target className='h-12 w-12 mx-auto mb-4 text-gray-300' />
										<p>
											No words found matching your
											criteria.
										</p>
										<p className='text-sm'>
											Try adjusting your search or
											filters.
										</p>
									</div>
								)}
							</CardContent>
						</Card>
					</div>

					{/* Sidebar */}
					<div className='lg:col-span-1 space-y-6'>
						{/* Quick Stats */}
						<Card className='shadow-lg border border-gray-100'>
							<CardHeader className='bg-green-500 text-white rounded-t-xl p-0'>
								<CardTitle className='p-6'>
									Dictionary Stats
								</CardTitle>
							</CardHeader>
							<CardContent className='p-4'>
								<div className='space-y-3'>
									<div className='flex justify-between'>
										<span className='text-gray-600'>
											Total Words
										</span>
										<span className='font-bold'>
											100,000+
										</span>
									</div>
									<div className='flex justify-between'>
										<span className='text-gray-600'>
											2-Letter Words
										</span>
										<span className='font-bold'>107</span>
									</div>
									<div className='flex justify-between'>
										<span className='text-gray-600'>
											Highest Score
										</span>
										<span className='font-bold'>
											OXYPHENBUTAZONE (1778)
										</span>
									</div>
									<div className='flex justify-between'>
										<span className='text-gray-600'>
											Most Common
										</span>
										<span className='font-bold'>
											THE, AND, FOR
										</span>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Quick Links */}
						<Card className='shadow-lg border border-gray-100'>
							<CardHeader className='bg-blue-500 text-white rounded-t-xl p-0'>
								<CardTitle className='p-6'>
									Quick Links
								</CardTitle>
							</CardHeader>
							<CardContent className='p-4'>
								<div className='space-y-2'>
									<Link
										href='/words-by-length'
										className='block text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm py-2 px-3 rounded-lg border-l-4 border-gray-200 hover:border-blue-400'>
										Words by Length
									</Link>
									<Link
										href='/words-start-with'
										className='block text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm py-2 px-3 rounded-lg border-l-4 border-gray-200 hover:border-blue-400'>
										Words Starting With
									</Link>
									<Link
										href='/words-ending-in'
										className='block text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm py-2 px-3 rounded-lg border-l-4 border-gray-200 hover:border-blue-400'>
										Words Ending In
									</Link>
									<Link
										href='/words-with-letters'
										className='block text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm py-2 px-3 rounded-lg border-l-4 border-gray-200 hover:border-blue-400'>
										Words With Letters
									</Link>
								</div>
							</CardContent>
						</Card>

						{/* Tips */}
						<Card className='shadow-lg border border-gray-100'>
							<CardHeader className='bg-purple-500 text-white rounded-t-xl p-0'>
								<CardTitle className='p-6'>
									Scrabble Tips
								</CardTitle>
							</CardHeader>
							<CardContent className='p-4'>
								<div className='space-y-3 text-sm'>
									<div className='bg-purple-50 rounded-lg p-3'>
										<h4 className='font-semibold text-purple-800 mb-1'>
											High-Value Letters
										</h4>
										<p className='text-purple-700'>
											Focus on Q, X, Z, and J for maximum
											points
										</p>
									</div>
									<div className='bg-purple-50 rounded-lg p-3'>
										<h4 className='font-semibold text-purple-800 mb-1'>
											Two-Letter Words
										</h4>
										<p className='text-purple-700'>
											Learn all 107 two-letter words for
											better gameplay
										</p>
									</div>
									<div className='bg-purple-50 rounded-lg p-3'>
										<h4 className='font-semibold text-purple-800 mb-1'>
											Bonus Squares
										</h4>
										<p className='text-purple-700'>
											Target triple word scores with
											high-value words
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
