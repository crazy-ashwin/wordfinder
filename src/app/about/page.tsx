import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Puzzle, BookOpenCheck, Zap, Users, Heart } from "lucide-react";

import { Metadata } from "next";
export const metadata: Metadata = {
	title: "About | Find Word Finder",
	description: "About us and our mission for Find Word Finder, a word game toolkit.",
	alternates: {
		canonical: "/about",
	},
};

export default function AboutPage() {
	return (
		<div className='min-h-screen bg-gray-50 py-16'>
			<div className='container mx-auto px-4'>
				<div className='max-w-5xl mx-auto'>
					<div className='text-center mb-12'>
						<h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
							About Find Word Finder
						</h1>
						<p className='text-lg text-gray-600 max-w-3xl mx-auto'>
							Empowering word game players with the best tools to
							enhance their skills, expand their vocabulary, and
							win every game.
						</p>
					</div>

					<Card className='mb-12 bg-green-500 text-white shadow-xl'>
						<CardHeader>
							<CardTitle className='flex items-center gap-3 text-2xl'>
								<Target className='h-8 w-8' />
								Our Mission
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-lg leading-relaxed'>
								At Find Word Finder, our mission is to provide a
								comprehensive, fast, and user-friendly suite of
								tools for word game enthusiasts. Whether
								you&apos;re a casual player or a competitive
								expert, we are dedicated to helping you improve
								your gameplay, discover new words, and enjoy
								your favorite games even more.
							</p>
						</CardContent>
					</Card>

					<div className='mb-12'>
						<h2 className='text-3xl font-bold text-center mb-8'>
							What We Offer
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
							<FeatureCard
								icon={<Puzzle className='h-8 w-8' />}
								title='Advanced Word Tools'
								description='Anagram solvers, word unscramblers, and crossword helpers to solve any puzzle.'
							/>
							<FeatureCard
								icon={<BookOpenCheck className='h-8 w-8' />}
								title='Grammar Resources'
								description='Improve your writing and understanding with our comprehensive grammar guides.'
							/>
							<FeatureCard
								icon={<Users className='h-8 w-8' />}
								title='Extensive Word Lists'
								description='Find words by length, starting letter, ending letter, and more for any situation.'
							/>
						</div>
					</div>

					<div className='mb-12'>
						<h2 className='text-3xl font-bold text-center mb-8'>
							Why Choose Us?
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
							<FeatureCard
								icon={<Zap className='h-8 w-8' />}
								title='Fast & Accurate'
								description='Get instant, reliable results powered by optimized algorithms and extensive dictionaries.'
							/>
							<FeatureCard
								icon={<Heart className='h-8 w-8' />}
								title='User-Friendly'
								description='Enjoy a clean, intuitive, and mobile-responsive interface designed for all users.'
							/>
							<FeatureCard
								icon={<Users className='h-8 w-8' />}
								title='Completely Free'
								description='Access all our powerful tools without any cost or registration required.'
							/>
						</div>
					</div>

					<Card className='shadow-lg'>
						<CardHeader>
							<CardTitle className='text-2xl'>
								Our Story
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='leading-relaxed mb-4'>
								Founded by a team of passionate word game
								players, Find Word Finder was born from a shared
								desire to create the ultimate toolkit for fellow
								enthusiasts. We know the challenge of staring at
								a jumble of letters, and we&apos;ve made it our
								mission to build the smartest, most intuitive
								tools to solve that problem.
							</p>
							<p className='leading-relaxed'>
								We are constantly innovating and expanding our
								database to ensure you always have the best
								word-finding resources at your fingertips.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}

function FeatureCard({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
}) {
	return (
		<Card className='text-center p-6 hover:shadow-lg transition-shadow'>
			<div className='mb-4 flex justify-center text-green-500'>
				{icon}
			</div>
			<h3 className='text-xl font-semibold mb-2'>{title}</h3>
			<p className='text-gray-600'>{description}</p>
		</Card>
	);
}
