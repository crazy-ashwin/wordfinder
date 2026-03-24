
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Trophy } from "lucide-react";
import { WordDetailsDialog } from "@/components/word-details-dialog";
import { Metadata } from "next";


export const metadata: Metadata = {
	title: "Scrabble Words | Find Word Finder",
	description:
		"Discover the best Scrabble words to boost your score! Our comprehensive database includes over 100,000 playable words from the Official Tournament and Club Word List (OTCWL).",
	alternates: {
		canonical: "/scrabble-words",
	},
};

export default function ScrabbleWordsPage() {
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
									Scrabble Words
								</h1>
							</div>
							<p className='text-lg text-gray-700 leading-relaxed mb-6'>
								Discover the best Scrabble words to boost your
								score! Our comprehensive database includes over
								100,000 playable words from the Official
								Tournament and Club Word List (OTCWL). Find
								high-scoring words, strategic combinations, and
								improve your Scrabble game strategy.
							</p>
							<div className='flex flex-wrap gap-3'>
								<Link
									href='/scrabble-dictionary'
									className='inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors'>
									<BookOpen className='h-4 w-4' />
									Full Scrabble Dictionary
								</Link>
								<Link
									href='/scrabble-calculator'
									className='inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors'>
									<Trophy className='h-4 w-4' />
									Score Calculator
								</Link>
							</div>
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
								<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
									{highScoringWords.map((word, index) => (
										<WordDetailsDialog
											key={index}
											word={word.word}>
											<div className='bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md hover:border-yellow-300 transition-all duration-200 cursor-pointer'>
												<div className='flex justify-between items-center'>
													<span className='font-semibold text-gray-800'>
														{word.word}
													</span>
													<Badge className='bg-yellow-500 text-black text-xs'>
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

						{/* Words by Length */}
						<Card className='shadow-lg border border-gray-100'>
							<CardHeader className='bg-blue-500 text-white rounded-t-xl p-0'>
								<CardTitle className='p-6'>
									Words by Length
								</CardTitle>
							</CardHeader>
							<CardContent className='p-6'>
								<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
									{wordsByLength.map((item, index) => (
										<Link
											key={index}
											href={`/words-by-length/${item.length}-letter-words`}
											className='bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-blue-300 transition-all duration-200'>
											<div className='text-center'>
												<div className='text-2xl font-bold text-blue-600 mb-2'>
													{item.length}
												</div>
												<div className='text-sm text-gray-600 mb-2'>
													{item.count.toLocaleString()}{" "}
													words
												</div>
												<div className='text-xs text-gray-500'>
													Examples:{" "}
													{item.examples.join(", ")}
												</div>
											</div>
										</Link>
									))}
								</div>
							</CardContent>
						</Card>

						{/* Featured Scrabble Words */}
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
							</CardContent>
						</Card>
					</div>

					{/* Sidebar */}
					<div className='lg:col-span-1 space-y-6'>
						{/* Quick Tools */}
						<Card className='shadow-lg border border-gray-100'>
							<CardHeader className='bg-purple-500 text-white rounded-t-xl p-0'>
								<CardTitle className='p-6'>
									Quick Tools
								</CardTitle>
							</CardHeader>
							<CardContent className='p-4 space-y-3'>
								<Link
									href='/scrabble-calculator'
									className='block w-full bg-purple-50 hover:bg-purple-100 text-purple-700 px-4 py-3 rounded-lg transition-colors text-center font-medium'>
									Score Calculator
								</Link>
								<Link
									href='/anagram-solver'
									className='block w-full bg-purple-50 hover:bg-purple-100 text-purple-700 px-4 py-3 rounded-lg transition-colors text-center font-medium'>
									Anagram Solver
								</Link>
								<Link
									href='/word-unscrambler'
									className='block w-full bg-purple-50 hover:bg-purple-100 text-purple-700 px-4 py-3 rounded-lg transition-colors text-center font-medium'>
									Word Unscrambler
								</Link>
								<Link
									href='/crossword-solver'
									className='block w-full bg-purple-50 hover:bg-purple-100 text-purple-700 px-4 py-3 rounded-lg transition-colors text-center font-medium'>
									Crossword Solver
								</Link>
							</CardContent>
						</Card>

						{/* Scrabble Tips */}
						<Card className='shadow-lg border border-gray-100'>
							<CardHeader className='bg-orange-500 text-white rounded-t-xl p-0'>
								<CardTitle className='p-6'>
									Scrabble Tips
								</CardTitle>
							</CardHeader>
							<CardContent className='p-4 space-y-3'>
								<div className='text-sm text-gray-700'>
									<p className='mb-2'>
										<strong>High-Value Letters:</strong> Q
										(10), Z (10), J (8), X (8)
									</p>
									<p className='mb-2'>
										<strong>Common 2-Letter Words:</strong>{" "}
										QI, ZA, XU, JO
									</p>
									<p className='mb-2'>
										<strong>Use Prefixes/Suffixes:</strong>{" "}
										RE-, UN-, -ING, -ED
									</p>
									<p>
										<strong>Plan Ahead:</strong> Save
										high-value tiles for bonus squares
									</p>
								</div>
							</CardContent>
						</Card>

						{/* Related Pages */}
						<Card className='shadow-lg border border-gray-100'>
							<CardHeader className='bg-purple-500 text-white rounded-t-xl p-0'>
								<CardTitle className='p-6'>
									Related Pages
								</CardTitle>
							</CardHeader>
							<CardContent className='p-4 space-y-2'>
								<Link
									href='/words-start-with'
									className='block text-indigo-600 hover:text-indigo-800 text-sm py-1'>
									Words Starting With...
								</Link>
								<Link
									href='/words-ending-in'
									className='block text-indigo-600 hover:text-indigo-800 text-sm py-1'>
									Words Ending In...
								</Link>
								<Link
									href='/words-with-letters'
									className='block text-indigo-600 hover:text-indigo-800 text-sm py-1'>
									Words With Letters
								</Link>
								<Link
									href='/word-lists'
									className='block text-indigo-600 hover:text-indigo-800 text-sm py-1'>
									Word Lists
								</Link>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
