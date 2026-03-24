"use client";

import Link from "next/link";
import {
	Menu,
	Search,
	Shuffle,
	Target,
	Grid3X3,
	BookOpen,
	List,
	Calculator,
	Newspaper,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
	const tools = [
		{ name: "Find Word Finder", href: "/", icon: Search },
		{ name: "Anagram Solver", href: "/anagram-solver", icon: Shuffle },
		{ name: "Word Unscrambler", href: "/word-unscrambler", icon: Target },
		{ name: "Crossword Solver", href: "/crossword-solver", icon: Grid3X3 },
		{ name: "Rhyme Finder", href: "/rhyme-finder", icon: BookOpen },
		{ name: "Word Generator", href: "/word-generator", icon: BookOpen },
		{ name: "Word Lists", href: "/word-lists", icon: List },
		{ name: "Blog", href: "/blog", icon: Newspaper },
		{ name: "Grammar", href: "/grammar", icon: Newspaper },
		{ name: "Misspelling", href: "/spelling", icon: Newspaper },
		{
			name: "Scrabble Score Calculator",
			href: "/scrabble-calculator",
			icon: Calculator,
		},
	];

	return (
		<header className='bg-gradient-to-r from-green-400 to-green-500 text-white sticky top-0 z-50'>
			<div className='container mx-auto px-4'>
				<div className='flex items-center justify-between h-16'>
					<Link href='/' className='flex items-center space-x-2'>
						<div className='text-2xl font-bold'>W</div>
						<span className='text-xl font-semibold'>
							FindWordFinder
						</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className='hidden md:flex items-center space-x-8'>
						<Link
							href='/grammar'
							className='hover:text-green-100 transition-colors'>
							Grammar
						</Link>
						<Link
							href='/spelling'
							className='hover:text-green-100 transition-colors'>
							Misspelling
						</Link>
						<Link
							href='/word-lists'
							className='hover:text-green-100 transition-colors'>
							Word Lists
						</Link>
						<Link
							href='/word-finders'
							className='hover:text-green-100 transition-colors'>
							Find Word Finders
						</Link>
						<Link
							href='/blog'
							className='hover:text-green-100 transition-colors'>
							Blog
						</Link>
						<Sheet>
							<SheetTrigger asChild>
								<Button
									variant='ghost'
									size='sm'
									className='text-white hover:text-green-100'>
									<Menu className='h-4 w-4' />
								</Button>
							</SheetTrigger>
							<SheetContent side='left' className='w-80 p-0'>
								<SheetTitle>Word Tools</SheetTitle>
								<div className='bg-gradient-to-b from-green-400 to-green-500 text-white p-6'>
									<h2 className='text-xl font-bold mb-4'>
										Word Tools
									</h2>
								</div>
								<div className='p-6'>
									<div className='space-y-4'>
										<div>
											<h3 className='font-semibold text-gray-900 mb-3'>
												Find Word Finders
											</h3>
											<div className='space-y-2'>
												{tools.map((tool) => {
													const IconComponent =
														tool.icon;
													return (
														<Link
															key={tool.name}
															href={tool.href}
															className='flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors'>
															<IconComponent className='h-4 w-4 text-green-600' />
															<span className='text-sm'>
																{tool.name}
															</span>
														</Link>
													);
												})}
											</div>
										</div>

										<div className='border-t pt-4'>
											<h3 className='font-semibold text-gray-900 mb-3'>
												Resources
											</h3>
											<div className='space-y-2'>
												<Link
													href='/word-lists'
													className='block p-2 rounded-lg hover:bg-gray-100 transition-colors text-sm'>
													Word Lists
												</Link>
												<Link
													href='/blog'
													className='block p-2 rounded-lg hover:bg-gray-100 transition-colors text-sm'>
													Word Game Tips
												</Link>
											</div>
										</div>

										<div className='border-t pt-4'>
											<h3 className='font-semibold text-gray-900 mb-3'>
												Support
											</h3>
											<div className='space-y-2'>
												<Link
													href='/about'
													className='block p-2 rounded-lg hover:bg-gray-100 transition-colors text-sm'>
													About Us
												</Link>
												<Link
													href='/contact'
													className='block p-2 rounded-lg hover:bg-gray-100 transition-colors text-sm'>
													Contact
												</Link>
												<Link
													href='/privacy'
													className='block p-2 rounded-lg hover:bg-gray-100 transition-colors text-sm'>
													Privacy Policy
												</Link>
											</div>
										</div>
									</div>
								</div>
							</SheetContent>
						</Sheet>
					</nav>

					{/* Mobile Menu Button */}
					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant='ghost'
								size='sm'
								className='md:hidden text-white'>
								<Menu className='h-7 w-7' />
							</Button>
						</SheetTrigger>
						<SheetContent side='left' className='w-80 p-0'>
							<SheetTitle>Word Tools</SheetTitle>
							<div className='bg-gradient-to-b from-green-400 to-green-500 text-white p-6'>
								<h2 className='text-xl font-bold mb-4'>
									FindWordFinder Menu
								</h2>
							</div>
							<div className='p-6'>
								<div className='space-y-4'>
									<div>
										<h3 className='font-semibold text-gray-900 mb-3'>
											Main Navigation
										</h3>
										<div className='space-y-2'>
											<Link
												href='/grammar'
												className='block p-2 rounded-lg hover:bg-gray-100 transition-colors'>
												Grammar
											</Link>
											<Link
												href='/word-lists'
												className='block p-2 rounded-lg hover:bg-gray-100 transition-colors'>
												Word Lists
											</Link>
											<Link
												href='/word-finders'
												className='block p-2 rounded-lg hover:bg-gray-100 transition-colors'>
												Find Word Finders
											</Link>
											<Link
												href='/blog'
												className='block p-2 rounded-lg hover:bg-gray-100 transition-colors'>
												Blog
											</Link>
										</div>
									</div>

									<div className='border-t pt-4'>
										<h3 className='font-semibold text-gray-900 mb-3'>
											Word Tools
										</h3>
										<div className='space-y-2'>
											{tools.map((tool) => {
												const IconComponent = tool.icon;
												return (
													<Link
														key={tool.name}
														href={tool.href}
														className='flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors'>
														<IconComponent className='h-4 w-4 text-green-600' />
														<span className='text-sm'>
															{tool.name}
														</span>
													</Link>
												);
											})}
										</div>
									</div>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
