"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, RefreshCw, Copy, Check } from "lucide-react";

interface GeneratedWord {
	word: string;
	category: string;
	difficulty: string;
}

export default function WordGeneratorPage() {
	const [generatedWords, setGeneratedWords] = useState<GeneratedWord[]>([]);
	const [category, setCategory] = useState("all");
	const [difficulty, setDifficulty] = useState("medium");
	const [wordCount, setWordCount] = useState("10");
	const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

	const wordCategories = {
		all: [
			"adventure",
			"mystery",
			"journey",
			"discovery",
			"challenge",
			"triumph",
			"wonder",
			"magic",
			"dream",
			"hope",
		],
		animals: [
			"elephant",
			"butterfly",
			"dolphin",
			"penguin",
			"giraffe",
			"octopus",
			"kangaroo",
			"peacock",
			"tiger",
			"whale",
		],
		nature: [
			"mountain",
			"forest",
			"ocean",
			"sunset",
			"rainbow",
			"thunder",
			"breeze",
			"meadow",
			"waterfall",
			"starlight",
		],
		emotions: [
			"happiness",
			"serenity",
			"excitement",
			"curiosity",
			"compassion",
			"gratitude",
			"wonder",
			"joy",
			"peace",
			"love",
		],
		technology: [
			"innovation",
			"algorithm",
			"digital",
			"network",
			"software",
			"database",
			"interface",
			"protocol",
			"system",
			"platform",
		],
		food: [
			"delicious",
			"savory",
			"aromatic",
			"crispy",
			"tender",
			"flavorful",
			"spicy",
			"sweet",
			"fresh",
			"gourmet",
		],
		colors: [
			"crimson",
			"azure",
			"emerald",
			"golden",
			"violet",
			"turquoise",
			"amber",
			"coral",
			"indigo",
			"silver",
		],
		actions: [
			"explore",
			"create",
			"discover",
			"achieve",
			"inspire",
			"transform",
			"innovate",
			"celebrate",
			"overcome",
			"flourish",
		],
	};

	const difficultyLevels = {
		easy: { minLength: 3, maxLength: 5 },
		medium: { minLength: 6, maxLength: 8 },
		hard: { minLength: 9, maxLength: 12 },
	};

	const generateWords = () => {
		const selectedWords =
			wordCategories[category as keyof typeof wordCategories] ||
			wordCategories.all;
		const count = Number.parseInt(wordCount);
		const difficultyConfig =
			difficultyLevels[difficulty as keyof typeof difficultyLevels];

		// Filter words by difficulty (length)
		const filteredWords = selectedWords.filter(
			(word) =>
				word.length >= difficultyConfig.minLength &&
				word.length <= difficultyConfig.maxLength
		);

		// Generate random selection
		const generated: GeneratedWord[] = [];
		for (let i = 0; i < count; i++) {
			const randomWord =
				filteredWords[Math.floor(Math.random() * filteredWords.length)];
			generated.push({
				word: randomWord,
				category: category === "all" ? "mixed" : category,
				difficulty,
			});
		}

		setGeneratedWords(generated);
	};

	const copyWord = async (word: string, index: number) => {
		try {
			await navigator.clipboard.writeText(word);
			setCopiedIndex(index);
			setTimeout(() => setCopiedIndex(null), 2000);
		} catch (err) {
			console.error("Failed to copy:", err);
		}
	};

	const copyAllWords = async () => {
		const allWords = generatedWords.map((w) => w.word).join(", ");
		try {
			await navigator.clipboard.writeText(allWords);
			setCopiedIndex(-1);
			setTimeout(() => setCopiedIndex(null), 2000);
		} catch (err) {
			console.error("Failed to copy:", err);
		}
	};

	const getDifficultyColor = (diff: string) => {
		switch (diff) {
			case "easy":
				return "bg-green-100 text-green-800";
			case "medium":
				return "bg-yellow-100 text-yellow-800";
			case "hard":
				return "bg-red-100 text-red-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	const getCategoryColor = (cat: string) => {
		const colors = [
			"bg-blue-100 text-blue-800",
			"bg-purple-100 text-purple-800",
			"bg-pink-100 text-pink-800",
			"bg-indigo-100 text-indigo-800",
			"bg-teal-100 text-teal-800",
		];
		return colors[cat.length % colors.length];
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-12'>
			<div className='container mx-auto px-4'>
				<div className='max-w-6xl mx-auto'>
					{/* Header */}
					<div className='text-center mb-12'>
						<div className='flex justify-center mb-4'>
							<div className='w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center'>
								<Lightbulb className='h-10 w-10 text-white' />
							</div>
						</div>
						<h1 className='text-4xl font-bold text-gray-800 mb-4'>
							Word Generator
						</h1>
						<p className='text-xl text-gray-600 mb-2'>
							Generate random words for creative writing and
							brainstorming
						</p>
						<p className='text-gray-500'>
							Perfect for writers, teachers, and creative projects
						</p>
					</div>

					{/* Controls */}
					<Card className='mb-8 shadow-lg'>
						<CardContent className='p-8'>
							<div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-6'>
								<div>
									<label className='block text-sm font-medium text-gray-700 mb-2'>
										Category
									</label>
									<Select
										value={category}
										onValueChange={setCategory}>
										<SelectTrigger className='h-12'>
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value='all'>
												All Categories
											</SelectItem>
											<SelectItem value='animals'>
												Animals
											</SelectItem>
											<SelectItem value='nature'>
												Nature
											</SelectItem>
											<SelectItem value='emotions'>
												Emotions
											</SelectItem>
											<SelectItem value='technology'>
												Technology
											</SelectItem>
											<SelectItem value='food'>
												Food
											</SelectItem>
											<SelectItem value='colors'>
												Colors
											</SelectItem>
											<SelectItem value='actions'>
												Actions
											</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div>
									<label className='block text-sm font-medium text-gray-700 mb-2'>
										Difficulty
									</label>
									<Select
										value={difficulty}
										onValueChange={setDifficulty}>
										<SelectTrigger className='h-12'>
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value='easy'>
												Easy (3-5 letters)
											</SelectItem>
											<SelectItem value='medium'>
												Medium (6-8 letters)
											</SelectItem>
											<SelectItem value='hard'>
												Hard (9+ letters)
											</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div>
									<label className='block text-sm font-medium text-gray-700 mb-2'>
										Word Count
									</label>
									<Select
										value={wordCount}
										onValueChange={setWordCount}>
										<SelectTrigger className='h-12'>
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value='5'>
												5 Words
											</SelectItem>
											<SelectItem value='10'>
												10 Words
											</SelectItem>
											<SelectItem value='15'>
												15 Words
											</SelectItem>
											<SelectItem value='20'>
												20 Words
											</SelectItem>
											<SelectItem value='25'>
												25 Words
											</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div className='flex items-end'>
									<Button
										onClick={generateWords}
										className='w-full h-12 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold'>
										<RefreshCw className='h-5 w-5 mr-2' />
										Generate Words
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Results */}
					{generatedWords.length > 0 && (
						<Card className='mb-8 shadow-lg'>
							<CardHeader className='bg-gradient-to-r from-indigo-500 to-purple-500 text-white'>
								<CardTitle className='flex items-center justify-between'>
									<span>Generated Words</span>
									<Button
										onClick={copyAllWords}
										variant='secondary'
										size='sm'
										className='bg-white text-indigo-600 hover:bg-gray-100'>
										{copiedIndex === -1 ? (
											<Check className='h-4 w-4 mr-1' />
										) : (
											<Copy className='h-4 w-4 mr-1' />
										)}
										Copy All
									</Button>
								</CardTitle>
							</CardHeader>
							<CardContent className='p-6'>
								<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
									{generatedWords.map((wordObj, index) => (
										<div
											key={index}
											className='bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-indigo-300 hover:shadow-md transition-all group'>
											<div className='flex items-center justify-between mb-3'>
												<span className='font-bold text-lg text-gray-800 group-hover:text-indigo-600 transition-colors'>
													{wordObj.word}
												</span>
												<Button
													onClick={() =>
														copyWord(
															wordObj.word,
															index
														)
													}
													variant='ghost'
													size='sm'
													className='opacity-0 group-hover:opacity-100 transition-opacity'>
													{copiedIndex === index ? (
														<Check className='h-4 w-4 text-green-600' />
													) : (
														<Copy className='h-4 w-4' />
													)}
												</Button>
											</div>
											<div className='flex gap-2'>
												<Badge
													className={getCategoryColor(
														wordObj.category
													)}
													variant='secondary'>
													{wordObj.category}
												</Badge>
												<Badge
													className={getDifficultyColor(
														wordObj.difficulty
													)}
													variant='secondary'>
													{wordObj.difficulty}
												</Badge>
											</div>
											<div className='mt-2 text-xs text-gray-500'>
												{wordObj.word.length} letters
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					)}

					{/* Usage Ideas */}
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						<Card className='shadow-lg'>
							<CardHeader>
								<CardTitle className='flex items-center gap-2'>
									<Lightbulb className='h-5 w-5 text-indigo-600' />
									Creative Uses
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='space-y-3'>
									<div className='flex items-center gap-3'>
										<div className='w-2 h-2 bg-indigo-500 rounded-full'></div>
										<span className='text-sm'>
											Story writing prompts
										</span>
									</div>
									<div className='flex items-center gap-3'>
										<div className='w-2 h-2 bg-indigo-500 rounded-full'></div>
										<span className='text-sm'>
											Poetry inspiration
										</span>
									</div>
									<div className='flex items-center gap-3'>
										<div className='w-2 h-2 bg-indigo-500 rounded-full'></div>
										<span className='text-sm'>
											Brainstorming sessions
										</span>
									</div>
									<div className='flex items-center gap-3'>
										<div className='w-2 h-2 bg-indigo-500 rounded-full'></div>
										<span className='text-sm'>
											Word association games
										</span>
									</div>
									<div className='flex items-center gap-3'>
										<div className='w-2 h-2 bg-indigo-500 rounded-full'></div>
										<span className='text-sm'>
											Creative writing exercises
										</span>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className='shadow-lg'>
							<CardHeader>
								<CardTitle className='flex items-center gap-2'>
									<RefreshCw className='h-5 w-5 text-indigo-600' />
									Tips for Best Results
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='space-y-3'>
									<div className='flex items-center gap-3'>
										<div className='w-2 h-2 bg-green-500 rounded-full'></div>
										<span className='text-sm'>
											Choose specific categories for
											themed content
										</span>
									</div>
									<div className='flex items-center gap-3'>
										<div className='w-2 h-2 bg-green-500 rounded-full'></div>
										<span className='text-sm'>
											Mix difficulty levels for variety
										</span>
									</div>
									<div className='flex items-center gap-3'>
										<div className='w-2 h-2 bg-green-500 rounded-full'></div>
										<span className='text-sm'>
											Generate multiple sets for more
											options
										</span>
									</div>
									<div className='flex items-center gap-3'>
										<div className='w-2 h-2 bg-green-500 rounded-full'></div>
										<span className='text-sm'>
											Use copy function to save favorites
										</span>
									</div>
									<div className='flex items-center gap-3'>
										<div className='w-2 h-2 bg-green-500 rounded-full'></div>
										<span className='text-sm'>
											Combine words for unique concepts
										</span>
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