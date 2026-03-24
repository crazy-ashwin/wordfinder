"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

interface WordSearchFilterProps {
	defaultValues?: {
		letters?: string;
		starts?: string;
		ends?: string;
		contains?: string;
		length?: string;
		dictionary?: string;
	};
	showLength?: boolean;
	showDictionary?: boolean;
	onSearch?: (params: Record<string, string>) => void;
}

export function WordSearchFilter({
	defaultValues = {},
	showLength = true,
	showDictionary = true,
	onSearch,
}: WordSearchFilterProps) {
	const [letters, setLetters] = useState(defaultValues.letters || "");
	const [starts, setStarts] = useState(defaultValues.starts || "");
	const [ends, setEnds] = useState(defaultValues.ends || "");
	const [contains, setContains] = useState(defaultValues.contains || "");
	const [length, setLength] = useState(defaultValues.length || "");
	const [dictionary, setDictionary] = useState(
		defaultValues.dictionary || "all"
	);
	const router = useRouter();
	const searchInputRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleSearch = () => {
		const params: Record<string, string> = {};
		if (letters) params.letters = letters;
		if (starts) params.starts = starts;
		if (ends) params.ends = ends;
		if (contains) params.contains = contains;
		if (length) params.length = length;
		if (dictionary && dictionary !== "all") params.dictionary = dictionary;
		if (onSearch) {
			onSearch(params);
			return;
		}
		const urlParams = new URLSearchParams(params).toString();
		router.push(`/search?${urlParams}`);
	};

	const handleSearchInputFocus = () => {
		setTimeout(() => {
			if (searchInputRef.current) {
				const rect = searchInputRef.current.getBoundingClientRect();
				const scrollTop = window.scrollY + rect.top - 80; // 80 = header height
				window.scrollTo({ top: scrollTop, behavior: "smooth" });
			}
			inputRef.current?.focus();
		}, 300);
	};

	return (
		<section className='bg-gradient-to-b from-green-400 to-green-500 rounded-xl shadow-lg mb-8'>
			<div className='px-4 py-10 md:py-14 max-w-2xl mx-auto'>
				<div className='text-center text-white mb-10'>
					<h2 className='text-3xl md:text-4xl font-bold mb-2'>
						Find Words
					</h2>
					<p className='text-lg opacity-90'>
						Enter up to 3 wildcards (? or space)
					</p>
					<p className='text-sm opacity-80 mt-2'>
						Search for words by length, starting, ending, or
						containing specific letters.
					</p>
				</div>
				<div className='relative mb-6' ref={searchInputRef}>
					<Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
					<Input
						type='text'
						placeholder='YOUR LETTERS'
						value={letters}
						onChange={(e) =>
							setLetters(e.target.value.toUpperCase())
						}
						onFocus={handleSearchInputFocus}
						className='pl-12 pr-10 h-14 text-lg md:text-xl text-center bg-white/95 border-0 rounded-full shadow-lg'
						aria-label='Enter your letters'
						ref={inputRef}
					/>
				</div>
				<Card className='bg-white/95 shadow-xl'>
					<CardContent className='p-6'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
							<div className='relative'>
								<Input
									type='text'
									placeholder='Starts'
									value={starts}
									onChange={(e) =>
										setStarts(e.target.value.toUpperCase())
									}
									className='h-12 rounded-full border-gray-300 pr-10'
									aria-label='Starts with'
								/>
								<span className='absolute z-10 right-3 top-1/2 -translate-y-1/2 group cursor-pointer'>
									<Tooltip>
										<TooltipTrigger asChild>
											<Info className='w-6 h-6 text-gray-400' />
										</TooltipTrigger>
										<TooltipContent>
											<p>
												Find words that start with these
												letters (AB → Able).
											</p>
										</TooltipContent>
									</Tooltip>
								</span>
							</div>
							<div className='relative'>
								<Input
									type='text'
									placeholder='Ends'
									value={ends}
									onChange={(e) =>
										setEnds(e.target.value.toUpperCase())
									}
									className='h-12 rounded-full border-gray-300 pr-10'
									aria-label='Ends with'
								/>
								<span className='absolute z-10 right-3 top-1/2 -translate-y-1/2 group cursor-pointer'>
									<Tooltip>
										<TooltipTrigger asChild>
											<Info className='w-6 h-6 text-gray-400' />
										</TooltipTrigger>
										<TooltipContent>
											<p>
												Find words that end with these
												letters (ING → Amazing).
											</p>
										</TooltipContent>
									</Tooltip>
								</span>
							</div>
							<div className='relative'>
								<Input
									type='text'
									placeholder='Contains'
									value={contains}
									onChange={(e) =>
										setContains(
											e.target.value.toUpperCase()
										)
									}
									className='h-12 rounded-full border-gray-300 pr-10'
									aria-label='Contains letters'
								/>
								<span className='absolute z-10 right-3 top-1/2 -translate-y-1/2 group cursor-pointer'>
									<Tooltip>
										<TooltipTrigger asChild>
											<Info className='w-6 h-6 text-gray-400' />
										</TooltipTrigger>
										<TooltipContent>
											<p>
												Find words that contain these
												letters in order (ST → List).
											</p>
										</TooltipContent>
									</Tooltip>
								</span>
							</div>
							{showLength && (
								<div className='relative'>
									<Input
										type='number'
										placeholder='Length'
										value={length}
										onChange={(e) =>
											setLength(e.target.value)
										}
										className='h-12 rounded-full border-gray-300 pr-10'
										aria-label='Word length'
									/>
									<span className='absolute z-10 right-3 top-1/2 -translate-y-1/2 group cursor-pointer'>
										<Tooltip>
											<TooltipTrigger asChild>
												<Info className='w-6 h-6 text-gray-400' />
											</TooltipTrigger>
											<TooltipContent>
												<p>
													Specify the exact word
													length.
												</p>
											</TooltipContent>
										</Tooltip>
									</span>
								</div>
							)}
						</div>
						{showDictionary && (
							<div className='mb-6 relative'>
								<Select
									value={dictionary}
									onValueChange={setDictionary}>
									<SelectTrigger
										className='h-12 rounded-full border-gray-300 pr-10'
										aria-label='Select dictionary'>
										<SelectValue placeholder='All Dictionaries' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='all'>
											All Dictionaries
										</SelectItem>
										<SelectItem value='scrabble-us'>
											Scrabble US
										</SelectItem>
										<SelectItem value='scrabble-uk'>
											Scrabble UK
										</SelectItem>
										<SelectItem value='words-with-friends'>
											Words With Friends
										</SelectItem>
									</SelectContent>
								</Select>
							</div>
						)}
						<Button
							onClick={handleSearch}
							className='w-full h-12 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full text-lg'
							aria-label='Search for words'>
							SEARCH
						</Button>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
