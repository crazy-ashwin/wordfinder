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
	Popover,
	PopoverTrigger,
	PopoverContent,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import AdSense from "../hero-ad";

export function HeroSection() {
	const [letters, setLetters] = useState("");
	const [starts, setStarts] = useState("");
	const [ends, setEnds] = useState("");
	const [contains, setContains] = useState("");
	const [length, setLength] = useState("");
	const [dictionary, setDictionary] = useState("all");
	const router = useRouter();
	const searchInputRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleSearch = () => {
		const params = new URLSearchParams();
		if (letters) params.set("letters", letters);
		if (starts) params.set("starts", starts);
		if (ends) params.set("ends", ends);
		if (contains) params.set("contains", contains);
		if (length) params.set("length", length);
		if (dictionary !== "all") params.set("dictionary", dictionary);
		router.push(`/search?${params.toString()}`);
	};

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === "Enter") {
			handleSearch();
		}
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
		<section className='bg-gradient-to-b from-green-400 to-green-500'>
			<div className='container mx-auto px-4 py-16'>
				<div className='text-center text-white mb-12'>
					<h1 className='text-4xl md:text-6xl font-bold mb-4'>
						Find Word Finder
					</h1>
					<p className='text-lg opacity-90'>
						Enter up to 3 wildcards (? or space)
					</p>
					<p className='text-sm opacity-80 mt-2'>
						Find the perfect words for Scrabble, Words with Friends,
						and more!
					</p>
				</div>
		{/* Google AdSense Ad Code */}
				<AdSense adSlot="6661981734" />

				<div className='max-w-2xl mx-auto'>
					<div className='relative mb-6' ref={searchInputRef}>
						<Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
						<Input
							type='text'
							placeholder='YOUR LETTERS'
							value={letters}
							onChange={(e) =>
								setLetters(e.target.value.toUpperCase().replace(/[^A-Z]/g, ""))
							}
							onFocus={handleSearchInputFocus}
							onKeyDown={handleKeyDown}
							className='pl-12 pr-10 h-16 text-xl md:text-2xl text-center bg-white/95 border-0 rounded-full shadow-lg'
							aria-label='Enter your letters'
							ref={inputRef}
						/>
					</div>

					<Card className='bg-white/95 shadow-xl'>
						<CardContent className='p-6'>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
								<div className='relative'>
									<Input
										id='starts'
										type='text'
										placeholder=''
										value={starts}
										onChange={(e) =>
											setStarts(
												e.target.value.toUpperCase().replace(/[^A-Z]/g, "")
											)
										}
										onKeyDown={handleKeyDown}
										className='peer h-12 rounded-full border-gray-300 pr-10'
										aria-label='Starts with'
									/>
									<Label
										htmlFor='starts'
										className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-[0.3rem] peer-focus:text-lg peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1'
										style={
											starts
												? {
														top: "-0.3rem",
														fontSize: "1.125rem",
														color: "#3b82f6",
														backgroundColor:
															"rgba(255, 255, 255, 0.95)",
														padding: "0 0.25rem",
														borderRadius: "25px",
												  }
												: {}
										}>
										Starts
									</Label>
									<span className='absolute z-10 right-3 top-1/2 -translate-y-1/2 group cursor-pointer'>
										<Popover>
											<PopoverTrigger asChild>
												<Info className='w-6 h-6 text-gray-400 cursor-pointer' />
											</PopoverTrigger>
											<PopoverContent
												side='top'
												align='center'
												className='max-w-xs text-sm'>
												<p>
													Find words that start with
													these letters (AB → Able).
												</p>
											</PopoverContent>
										</Popover>
									</span>
								</div>
								<div className='relative'>
									<Input
										id='ends'
										type='text'
										placeholder=' '
										value={ends}
										onChange={(e) =>
											setEnds(
												e.target.value.toUpperCase().replace(/[^A-Z]/g, "")
											)
										}
										onKeyDown={handleKeyDown}
										className='peer h-12 rounded-full border-gray-300 pr-10'
										aria-label='Ends with'
									/>
									<Label
										htmlFor='ends'
										className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-[0.3rem] peer-focus:text-lg peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1'
										style={
											ends
												? {
														top: "-0.3rem",
														fontSize: "1.125rem",
														color: "#3b82f6",
														backgroundColor:
															"rgba(255, 255, 255, 0.95)",
														padding: "0 0.25rem",
												  }
												: {}
										}>
										Ends
									</Label>
									<span className='absolute z-10 right-3 top-1/2 -translate-y-1/2 group cursor-pointer'>
										<Popover>
											<PopoverTrigger asChild>
												<Info className='w-6 h-6 text-gray-400 cursor-pointer' />
											</PopoverTrigger>
											<PopoverContent
												side='top'
												align='center'
												className='max-w-xs text-sm'>
												<p>
													Find words that end with
													these letters (ING →
													Amazing).
												</p>
											</PopoverContent>
										</Popover>
									</span>
								</div>
								<div className='relative'>
									<Input
										id='contains'
										type='text'
										placeholder=' '
										value={contains}
										onChange={(e) =>
											setContains(
												e.target.value.toUpperCase().replace(/[^A-Z]/g, "")
											)
										}
										onKeyDown={handleKeyDown}
										className='peer h-12 rounded-full border-gray-300 pr-10'
										aria-label='Contains letters'
									/>
									<Label
										htmlFor='contains'
										className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-[0.3rem] peer-focus:text-lg peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1'
										style={
											contains
												? {
														top: "-0.3rem",
														fontSize: "1.125rem",
														color: "#3b82f6",
														backgroundColor:
															"rgba(255, 255, 255, 0.95)",
														padding: "0 0.25rem",
												  }
												: {}
										}>
										Contains
									</Label>
									<span className='absolute z-10 right-3 top-1/2 -translate-y-1/2 group cursor-pointer'>
										<Popover>
											<PopoverTrigger asChild>
												<Info className='w-6 h-6 text-gray-400 cursor-pointer' />
											</PopoverTrigger>
											<PopoverContent
												side='top'
												align='center'
												className='max-w-xs text-sm'>
												<p>
													Find words that contain
													these letters in order (ST →
													List).
												</p>
											</PopoverContent>
										</Popover>
									</span>
								</div>
								<div className='relative'>
									<Input
										id='length'
										type='number'
										placeholder=' '
										value={length}
										onChange={(e) =>
											setLength(e.target.value)
										}
										onKeyDown={handleKeyDown}
										className='peer h-12 rounded-full border-gray-300 pr-10'
										aria-label='Word length'
									/>
									<Label
										htmlFor='length'
										className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-[0.3rem] peer-focus:text-lg peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1'
										style={
											length
												? {
														top: "-0.3rem",
														fontSize: "1.125rem",
														color: "#3b82f6",
														backgroundColor:
															"rgba(255, 255, 255, 0.95)",
														padding: "0 0.25rem",
												  }
												: {}
										}>
										Length
									</Label>
									<span className='absolute z-10 right-3 top-1/2 -translate-y-1/2 group cursor-pointer'>
										<Popover>
											<PopoverTrigger asChild>
												<Info className='w-6 h-6 text-gray-400 cursor-pointer' />
											</PopoverTrigger>
											<PopoverContent
												side='top'
												align='center'
												className='max-w-xs text-sm'>
												<p>
													Specify the exact word
													length.
												</p>
											</PopoverContent>
										</Popover>
									</span>
								</div>
							</div>

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

							<Button
								onClick={handleSearch}
								className='w-full h-12 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full text-lg'
								aria-label='Search for words'>
								SEARCH
							</Button>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
