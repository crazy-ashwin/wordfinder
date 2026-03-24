"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calculator, Info } from "lucide-react";

export default function ScrabbleCalculatorPage() {
	const [word, setWord] = useState("");
	const [score, setScore] = useState(0);
	const [letterBreakdown, setLetterBreakdown] = useState<
		{ letter: string; value: number }[]
	>([]);

	const letterValues: { [key: string]: number } = {
		a: 1,
		b: 3,
		c: 3,
		d: 2,
		e: 1,
		f: 4,
		g: 2,
		h: 4,
		i: 1,
		j: 8,
		k: 5,
		l: 1,
		m: 3,
		n: 1,
		o: 1,
		p: 3,
		q: 10,
		r: 1,
		s: 1,
		t: 1,
		u: 1,
		v: 4,
		w: 4,
		x: 8,
		y: 4,
		z: 10,
	};

	const calculateScore = (inputWord: string) => {
		const letters = inputWord
			.toLowerCase()
			.split("")
			.filter((char) => /[a-z]/.test(char));
		const breakdown = letters.map((letter) => ({
			letter: letter.toUpperCase(),
			value: letterValues[letter] || 0,
		}));

		const totalScore = breakdown.reduce((sum, item) => sum + item.value, 0);

		setLetterBreakdown(breakdown);
		setScore(totalScore);
	};

	const handleInputChange = (value: string) => {
		setWord(value);
		if (value.trim()) {
			calculateScore(value);
		} else {
			setScore(0);
			setLetterBreakdown([]);
		}
	};

	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='container mx-auto px-4'>
				<div className='max-w-4xl mx-auto'>
					<h1 className='text-4xl font-bold text-center mb-8'>
						Scrabble Score Calculator
					</h1>
					<p className='text-xl text-center text-gray-600 mb-12'>
						Calculate the point value of any word in Scrabble
					</p>

					{/* Calculator */}
					<Card className='mb-8'>
						<CardHeader>
							<CardTitle className='flex items-center gap-2'>
								<Calculator className='h-5 w-5 text-green-600' />
								Word Score Calculator
							</CardTitle>
						</CardHeader>
						<CardContent className='space-y-6'>
							<div>
								<Input
									type='text'
									placeholder='Enter a word to calculate its score...'
									value={word}
									onChange={(e) =>
										handleInputChange(e.target.value)
									}
									className='h-12 text-lg text-center'
								/>
							</div>

							{word && (
								<div className='text-center'>
									<div className='text-6xl font-bold text-green-600 mb-2'>
										{score}
									</div>
									<div className='text-gray-600'>
										Total Points
									</div>
								</div>
							)}

							{letterBreakdown.length > 0 && (
								<div>
									<h3 className='font-semibold mb-3'>
										Letter Breakdown:
									</h3>
									<div className='flex flex-wrap gap-2 justify-center'>
										{letterBreakdown.map((item, index) => (
											<Badge
												key={index}
												variant='outline'
												className='text-lg py-2 px-3'>
												{item.letter} = {item.value}
											</Badge>
										))}
									</div>
								</div>
							)}
						</CardContent>
					</Card>

					{/* Letter Values Reference */}
					<Card className='mb-8'>
						<CardHeader>
							<CardTitle className='flex items-center gap-2'>
								<Info className='h-5 w-5 text-blue-600' />
								Scrabble Letter Values
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
								<div>
									<h4 className='font-semibold mb-2'>
										1 Point
									</h4>
									<div className='text-sm'>
										A, E, I, O, U, L, N, S, T, R
									</div>
								</div>
								<div>
									<h4 className='font-semibold mb-2'>
										2 Points
									</h4>
									<div className='text-sm'>D, G</div>
								</div>
								<div>
									<h4 className='font-semibold mb-2'>
										3 Points
									</h4>
									<div className='text-sm'>B, C, M, P</div>
								</div>
								<div>
									<h4 className='font-semibold mb-2'>
										4 Points
									</h4>
									<div className='text-sm'>F, H, V, W, Y</div>
								</div>
								<div>
									<h4 className='font-semibold mb-2'>
										5+ Points
									</h4>
									<div className='text-sm'>
										K(5), J(8), X(8), Q(10), Z(10)
									</div>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Tips */}
					<Card>
						<CardHeader>
							<CardTitle>Scoring Tips</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div>
									<h3 className='font-semibold mb-2'>
										High-Value Letters
									</h3>
									<p className='text-sm text-gray-600'>
										Focus on using Q, Z, X, and J for
										maximum points. These rare letters can
										significantly boost your score.
									</p>
								</div>
								<div>
									<h3 className='font-semibold mb-2'>
										Bonus Squares
									</h3>
									<p className='text-sm text-gray-600'>
										Remember that this calculator shows base
										word values. Premium squares on the
										board can multiply your score!
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}