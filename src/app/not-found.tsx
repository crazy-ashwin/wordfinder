"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/sections/hero-section";
import { Card } from "@/components/ui/card";

export default function NotFound() {
	return (
		<div className='min-h-screen'>
			<HeroSection />
			<div className='container my-10 mx-auto px-4 flex flex-col md:flex-row gap-8 mt-8'>
				{/* Main 404 Content */}
				<div className='flex-1 flex flex-col items-center'>
					<Card className='w-full max-w-2xl flex flex-col items-center py-10 px-6 mb-6'>
						<h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-center'>
							We couldn&apos;t find the page you are looking for
							:(
						</h1>
						<img
							src='/404-scrabble.svg'
							alt='404 - Page Not Found - Scrabble Tiles and Cat'
							className='w-200 h-150 my-6'
						/>
					</Card>
					<div className='bg-white rounded-xl shadow p-4 w-full max-w-2xl flex flex-col items-center'>
						<p className='font-semibold mb-2'>
							Share Your Thoughts
						</p>
						<p className='text-gray-600 text-sm mb-2 text-center'>
							Do you have suggestions or want to report a missing
							word?
						</p>
						<div className='flex gap-5'>
							<Link href='/'>
								<Button
									variant='outline'
									className='bg-green-100 hover:bg-green-200 text-green-800 font-semibold flex items-center gap-2'>
									<span>Back to Home</span>
								</Button>
							</Link>
							<Link href='/contact'>
								<Button
									variant='outline'
									className='bg-yellow-100 hover:bg-yellow-200 text-yellow-800 font-semibold flex items-center gap-2'>
									<span>Feedback</span>
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
