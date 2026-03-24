import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Word Lists | Find Word Finder",
	description:
		"Curated collections of words to improve your game. Whether you're preparing for a big Scrabble tournament or just looking to expand your vocabulary, our word lists have got you covered.",
		alternates: {
			canonical: "/word-lists",
		},
};

export default function WordListsPage() {
	const wordLists = [
		{
			title: "2 Letter Words",
			description: "Words that will boost your Scrabble score",
			count: 500,
			category: "Scrabble",
		},
		{
			title: "3 Letter Words",
			description: "All valid two-letter words for word games",
			count: 107,
			category: "General",
		},
		{
			title: "4 Letter Words",
			description: "Rare but valuable Q words that don't need U",
			count: 25,
			category: "Special",
		},
		{
			title: "5 Letter Words",
			description: "High-value words ending with X",
			count: 150,
			category: "Letters",
		},
		{
			title: "6 Letter Words",
			description: "Perfect for using all your tiles",
			count: 1000,
			category: "Length",
		},
		{
			title: "7 Letter Words",
			description: "Words containing all letters",
			count: 750,
			category: "Patterns",
		},
		{
			title: "8 Letter Words",
			description: "Words containing all letters",
			count: 750,
			category: "Patterns",
		},
	];

	const categories = [
		"All",
		"Scrabble",
		"General",
		"Special",
		"Letters",
		"Length",
		"Patterns",
	];

	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='container mx-auto px-4'>
				<div className='max-w-6xl mx-auto'>
					<h1 className='text-4xl font-bold text-center mb-8'>
						Word Lists
					</h1>
					<p className='text-xl text-center text-gray-600 mb-12'>
						Curated collections of words to improve your game
					</p>

					{/* Category Filter */}
					<div className='flex flex-wrap justify-center gap-2 mb-8'>
						{categories.map((category) => (
							<Badge
								key={category}
								variant={
									category === "All" ? "default" : "secondary"
								}
								className='cursor-pointer hover:bg-green-100'>
								{category}
							</Badge>
						))}
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{wordLists.map((list, index) => (
							<Card
								key={index}
								className='hover:shadow-lg transition-shadow cursor-pointer'>
								<CardHeader>
									<div className='flex justify-between items-start'>
										<CardTitle className='text-lg'>
											{list.title}
										</CardTitle>
										<Badge variant='outline'>
											{list.category}
										</Badge>
									</div>
								</CardHeader>
								<CardContent>
									<p className='text-gray-600 mb-4'>
										{list.description}
									</p>
									<div className='flex justify-between items-center'>
										<span className='text-sm text-gray-500'>
											{list.count} words
										</span>
										<Link
											href={`words-by-length/${list.title
												.toLowerCase()
												.replace(/\s+/g, "-")}`}
											className='text-blue-600 hover:text-blue-800 text-sm font-medium'>
											View List →
										</Link>
									</div>
								</CardContent>
							</Card>
						))}
					</div>

					<Card className='mt-12'>
						<CardHeader>
							<CardTitle>Popular Word Categories</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
								<div className='text-center'>
									<div className='text-2xl font-bold text-green-600'>
										2,500+
									</div>
									<div className='text-sm text-gray-600'>
										Scrabble Words
									</div>
								</div>
								<div className='text-center'>
									<div className='text-2xl font-bold text-blue-600'>
										1,800+
									</div>
									<div className='text-sm text-gray-600'>
										WWF Words
									</div>
								</div>
								<div className='text-center'>
									<div className='text-2xl font-bold text-purple-600'>
										500+
									</div>
									<div className='text-sm text-gray-600'>
										High Scorers
									</div>
								</div>
								<div className='text-center'>
									<div className='text-2xl font-bold text-orange-600'>
										300+
									</div>
									<div className='text-sm text-gray-600'>
										Rare Words
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
