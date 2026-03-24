"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function GameSupportSection() {
	const games = [
		{
			name: "Scrabble",
			description:
				"Classic word board game with premium squares and strategic gameplay",
			icon: "S",
			color: "text-red-600",
			bgColor: "bg-red-100",
			features: [
				"15x15 board",
				"Premium squares",
				"7-letter bonus",
				"Official dictionary",
			],
			difficulty: "Advanced",
		},
		{
			name: "Words with Friends",
			description:
				"Social word game with unique board layout and power-ups",
			icon: "W",
			color: "text-blue-600",
			bgColor: "bg-blue-100",
			features: [
				"Social gameplay",
				"Power-ups",
				"Chat system",
				"Mobile optimized",
			],
			difficulty: "Intermediate",
		},
		{
			name: "Wordle",
			description: "Daily word puzzle with color-coded feedback system",
			icon: "W",
			color: "text-green-600",
			bgColor: "bg-green-100",
			features: [
				"Daily puzzle",
				"6 attempts",
				"Color feedback",
				"Share results",
			],
			difficulty: "Beginner",
		},
		{
			name: "Crosswords",
			description:
				"Traditional word puzzles with intersecting clues and answers",
			icon: "C",
			color: "text-purple-600",
			bgColor: "bg-purple-100",
			features: [
				"Themed puzzles",
				"Varying difficulty",
				"Clue types",
				"Grid patterns",
			],
			difficulty: "Varied",
		},
	];

	return (
		<section className='bg-white py-16'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl font-bold mb-4'>
						Supported Word Games
					</h2>
					<p className='text-xl text-gray-600'>
						Our tools work perfectly with all popular word games
					</p>
					<p className='text-gray-500 mt-2'>
						Optimized dictionaries and scoring systems for each game
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
					{games.map((game, index) => (
						<Card
							key={index}
							className='hover:shadow-lg transition-shadow'>
							<CardContent className='p-6 text-center'>
								<div
									className={`w-20 h-20 ${game.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
									<span
										className={`text-3xl font-bold ${game.color}`}>
										{game.icon}
									</span>
								</div>
								<h3 className='font-semibold text-lg mb-2'>
									{game.name}
								</h3>
								<p className='text-sm text-gray-600 mb-3'>
									{game.description}
								</p>
								<Badge variant='outline' className='mb-3'>
									{game.difficulty}
								</Badge>
								<div className='text-left'>
									<h4 className='font-semibold text-sm mb-2'>
										Features:
									</h4>
									<ul className='text-xs text-gray-600 space-y-1'>
										{game.features.map((feature, idx) => (
											<li
												key={idx}
												className='flex items-center'>
												<span className='w-1 h-1 bg-green-500 rounded-full mr-2'></span>
												{feature}
											</li>
										))}
									</ul>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Additional Game Info */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<Card className='bg-gradient-to-br from-blue-50 to-blue-100'>
						<CardContent className='p-6 text-center'>
							<h3 className='font-bold text-xl mb-2 text-blue-800'>
								Dictionary Support
							</h3>
							<p className='text-blue-700 text-sm'>
								Multiple dictionary databases including official
								Scrabble, Words with Friends, and international
								variants
							</p>
						</CardContent>
					</Card>

					<Card className='bg-gradient-to-br from-green-50 to-green-100'>
						<CardContent className='p-6 text-center'>
							<h3 className='font-bold text-xl mb-2 text-green-800'>
								Scoring Systems
							</h3>
							<p className='text-green-700 text-sm'>
								Accurate point calculations for different games
								with bonus square multipliers and special rules
							</p>
						</CardContent>
					</Card>

					<Card className='bg-gradient-to-br from-purple-50 to-purple-100'>
						<CardContent className='p-6 text-center'>
							<h3 className='font-bold text-xl mb-2 text-purple-800'>
								Strategy Tips
							</h3>
							<p className='text-purple-700 text-sm'>
								Built-in hints and strategies to improve your
								gameplay and maximize your scoring potential
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
