import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search, Shuffle, Target, Grid3X3, HelpCircle } from "lucide-react";
import { Metadata } from "next";


export const metadata: Metadata = {
	title: "Word Finders | Find Word Finder",
	description:
		"Powerful tools to help you find the perfect words for any game. Whether you're preparing for a big Scrabble tournament or just looking to expand your vocabulary.",
	alternates: {
		canonical: "/word-finders",
	},
};
export default function WordFindersPage() {
	const tools = [
		{
			title: "Find Word Finder",
			description:
				"Find words from your letters for Scrabble and Words with Friends",
			icon: Search,
			href: "/",
			color: "text-green-600",
		},
		{
			title: "Anagram Solver",
			description: "Unscramble letters to find all possible anagrams",
			icon: Shuffle,
			href: "/anagram-solver",
			color: "text-blue-600",
		},
		{
			title: "Word Unscrambler",
			description: "Unscramble jumbled letters into valid words",
			icon: Target,
			href: "/word-unscrambler",
			color: "text-purple-600",
		},
		{
			title: "Crossword Solver",
			description: "Find words that fit your crossword puzzle clues",
			icon: Grid3X3,
			href: "/crossword-solver",
			color: "text-orange-600",
		},
		{
			title: "Wordle Tools",
			description:
				"Get hints and suggestions for your daily Wordle puzzle",
			icon: HelpCircle,
			href: "/wordle-helper",
			color: "text-teal-600",
		},
	];

	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='container mx-auto px-4'>
				<div className='max-w-6xl mx-auto'>
					<h1 className='text-4xl font-bold text-center mb-8'>
						Find Word Finder Tools
					</h1>
					<p className='text-xl text-center text-gray-600 mb-12'>
						Powerful tools to help you find the perfect words for
						any game
					</p>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
						{tools.map((tool, index) => {
							const IconComponent = tool.icon;
							return (
								<Card
									key={index}
									className='hover:shadow-lg transition-shadow'>
									<CardHeader>
										<div className='flex items-center gap-3'>
											<IconComponent
												className={`h-8 w-8 ${tool.color}`}
											/>
											<CardTitle className='text-xl'>
												{tool.title}
											</CardTitle>
										</div>
									</CardHeader>
									<CardContent>
										<p className='text-gray-600 mb-6'>
											{tool.description}
										</p>
										<Link href={tool.href}>
											<Button className='w-full bg-green-500 hover:bg-green-600'>
												Try {tool.title}
											</Button>
										</Link>
									</CardContent>
								</Card>
							);
						})}
					</div>

					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
						<Card>
							<CardHeader>
								<CardTitle>Game Support</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='space-y-4'>
									<div className='flex items-center justify-between'>
										<span>Scrabble</span>
										<Badge className='bg-green-100 text-green-800'>
											Supported
										</Badge>
									</div>
									<div className='flex items-center justify-between'>
										<span>Words with Friends</span>
										<Badge className='bg-green-100 text-green-800'>
											Supported
										</Badge>
									</div>
									<div className='flex items-center justify-between'>
										<span>Wordle</span>
										<Badge className='bg-green-100 text-green-800'>
											Supported
										</Badge>
									</div>
									<div className='flex items-center justify-between'>
										<span>Crosswords</span>
										<Badge className='bg-green-100 text-green-800'>
											Supported
										</Badge>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Features</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className='space-y-2'>
									<li className='flex items-center gap-2'>
										<div className='w-2 h-2 bg-green-500 rounded-full'></div>
										Multiple dictionary support
									</li>
									<li className='flex items-center gap-2'>
										<div className='w-2 h-2 bg-green-500 rounded-full'></div>
										Advanced filtering options
									</li>
									<li className='flex items-center gap-2'>
										<div className='w-2 h-2 bg-green-500 rounded-full'></div>
										Word scoring and sorting
									</li>
									<li className='flex items-center gap-2'>
										<div className='w-2 h-2 bg-green-500 rounded-full'></div>
										Pattern matching
									</li>
									<li className='flex items-center gap-2'>
										<div className='w-2 h-2 bg-green-500 rounded-full'></div>
										Mobile-friendly interface
									</li>
									<li className='flex items-center gap-2'>
										<div className='w-2 h-2 bg-green-500 rounded-full'></div>
										Fast and accurate results
									</li>
									<li className='flex items-center gap-2'>
										<div className='w-2 h-2 bg-green-500 rounded-full'></div>
										No registration required
									</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
