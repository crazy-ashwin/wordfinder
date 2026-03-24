"use client";

import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { WordDetailsDialog } from "@/components/word-details-dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";

type Props = {
  length: string;
  letter: string;
};

export default function WordsByLengthWithLetterPage({ length, letter }: Props) {
  const [words, setWords] = useState<string[]>([]);
  const [filteredWords, setFilteredWords] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("points");
  const [selectedDictionary, setSelectedDictionary] = useState("all");
  const [displayCount, setDisplayCount] = useState(30);

  const getNumberFromLength = (lengthParam: string): number => {
    const match = lengthParam.match(/(\d+)/);
    return match ? Number.parseInt(match[1]) : 2;
  };
  const wordLength = getNumberFromLength(length);

  useEffect(() => {
    const fetchWords = async () => {
      setLoading(true);
      if (!wordLength || !letter) {
        setWords([]);
        setFilteredWords([]);
        setLoading(false);
        return;
      }
      const apiUrl = `https://api.datamuse.com/words?sp=${"?".repeat(
        wordLength
      )}&max=100&qe=sp&md=d`;
      try {
        const res = await axios.get(apiUrl);
        const data = res.data;
        const realWords = data
          .map((item: { word: string }) => item.word)
          .filter(
            (w: string) =>
              w.length === wordLength &&
              w.toUpperCase().includes(letter.toUpperCase())
          );
        setWords(realWords);
        setFilteredWords(realWords);
      } catch (e) {
        console.log(e);
        setWords([]);
        setFilteredWords([]);
      } finally {
        setLoading(false);
      }
    };
    fetchWords();
  }, [wordLength, letter]);

  useEffect(() => {
    let filtered = words;
    if (searchTerm) {
      filtered = words.filter((word) =>
        word.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (sortBy === "points") {
      filtered = [...filtered].sort(
        (a, b) => calculateScore(b) - calculateScore(a)
      );
    } else if (sortBy === "a-z") {
      filtered = [...filtered].sort();
    } else if (sortBy === "z-a") {
      filtered = [...filtered].sort().reverse();
    }
    setFilteredWords(filtered);
  }, [searchTerm, words, sortBy]);

  const calculateScore = (word: string): number => {
    const letterScores: { [key: string]: number } = {
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
    return word
      ?.toLowerCase()
      .split("")
      .reduce((score, letter) => score + (letterScores[letter] || 0), 0);
  };

  const displayWords = filteredWords.slice(0, displayCount);

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          {/* Main Content */}
          <div className='lg:col-span-3 space-y-8'>
            {/* Sort/filter bar */}
            <div className='flex justify-between items-center bg-yellow-400 px-4 py-2 rounded-t-lg border-b mb-2'>
              <span className='font-medium text-gray-700'>
                Results
              </span>
              <div className='flex items-center gap-2'>
                <span className='text-sm text-gray-600'>
                  Sort:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className='border rounded px-2 py-1 text-sm'>
                  <option value='points'>Points</option>
                  <option value='a-z'>A-Z</option>
                  <option value='z-a'>Z-A</option>
                </select>
              </div>
            </div>
            <div className='bg-white rounded-xl shadow-lg p-8 border border-gray-100'>
              <div className='bg-white border border-gray-300 rounded-xl p-8 mb-4 shadow flex flex-col gap-2'>
                <h1 className='text-4xl font-bold mb-2'>
                  {length} Letter Words with{" "}
                  {letter.toUpperCase()}
                </h1>
                <p className='mb-2'>
                  <span className='font-bold'>
                    {length} Letter Words with{" "}
                    {letter.toUpperCase()}
                  </span>{" "}
                  are commonly used for word games like
                  Scrabble and Words with Friends. This list
                  will help you to find the top scoring words
                  to beat the opponent. You can also find a
                  list of all{" "}
                  <a
                    href={`/words-start-with/${letter.toUpperCase()}`}
                    className='text-blue-600 hover:underline'>
                    words that start with{" "}
                    {letter.toUpperCase()}
                  </a>{" "}
                  and{" "}
                  <a
                    href={`/words-ending-in/${letter.toUpperCase()}`}
                    className='text-blue-600 hover:underline'>
                    words that end with{" "}
                    {letter.toUpperCase()}
                  </a>
                  . Try our{" "}
                  <a
                    href={`/words-by-length/5/with/${letter.toUpperCase()}`}
                    className='text-blue-600 hover:underline'>
                    five letter words with{" "}
                    {letter.toUpperCase()} page
                  </a>{" "}
                  if you&apos;re playing Wordle-like games or
                  use the{" "}
                  <a
                    href='/wordle-helper'
                    className='text-blue-600 hover:underline'>
                    New York Times Wordle Solver
                  </a>{" "}
                  to quickly find the NYT Wordle daily answer.
                </p>
              </div>
              <h1 className='text-2xl font-bold mb-4 text-center'>
                Words with {length} letters containing &quot;
                {letter.toUpperCase()}&quot;
              </h1>
              {loading ? (
                <p className='text-gray-500 text-center'>
                  Loading...
                </p>
              ) : filteredWords.length === 0 ? (
                <p className='text-gray-500 text-center'>
                  No words found.
                </p>
              ) : (
                <>
                  <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mb-8'>
                    {displayWords.map((word, idx) => (
                      <WordDetailsDialog
                        key={idx}
                        word={word}>
                        <Badge
                          variant='secondary'
                          className='justify-center py-2 px-3 text-sm hover:bg-green-100 hover:text-green-700 cursor-pointer font-mono transition-colors duration-200 border border-gray-200 w-full text-center'>
                          {word}
                        </Badge>
                      </WordDetailsDialog>
                    ))}
                  </div>
                  {filteredWords.length > 30 &&
                    displayCount < filteredWords.length && (
                      <div className='text-center'>
                        <Button
                          onClick={() =>
                            setDisplayCount(
                              (prev) =>
                                Math.min(
                                  prev + 30,
                                  filteredWords.length
                                )
                            )
                          }
                          className='bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-8 py-3 rounded-lg'>
                          MORE
                        </Button>
                      </div>
                    )}
                </>
              )}
              {/* Info Section */}
              <div className='mt-8'>
                <div className='bg-white rounded-xl shadow-lg p-8 border border-gray-100'>
                  <h2 className='text-xl font-bold text-gray-800 mb-4 flex items-center gap-2'>
                    Why Find Words Containing &quot;
                    {letter.toUpperCase()}&quot;?
                  </h2>
                  <p className='text-gray-700 mb-4'>
                    Finding words that contain &quot;
                    {letter.toUpperCase()}&quot; is helpful
                    for word games, improving your
                    vocabulary, and solving puzzles. It can
                    help you find the right word for
                    Scrabble, crosswords, or creative
                    writing.
                  </p>
                  <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                    FAQ
                  </h3>
                  <div className='space-y-2'>
                    <div>
                      <strong>
                        How many {length}-letter words
                        contain &quot;
                        {letter.toUpperCase()}
                        &quot;?
                      </strong>
                      <p className='text-gray-600'>
                        There are {filteredWords.length}{" "}
                        common {length}-letter words
                        that contain &quot;
                        {letter.toUpperCase()}&quot; in
                        English.
                      </p>
                    </div>
                    <div>
                      <strong>
                        What are the best {length}
                        -letter words containing &quot;
                        {letter.toUpperCase()}&quot; for
                        Scrabble?
                      </strong>
                      <p className='text-gray-600'>
                        Look for words with high-value
                        letters and try to use all your
                        tiles for a bingo bonus!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className='space-y-6'>
            {/* Search Form */}
            <div className='bg-white rounded-xl shadow-lg p-6 border border-gray-100'>
              <div className='space-y-4'>
                <Input
                  placeholder='Filter words...'
                  value={searchTerm}
                  onChange={(e) =>
                    setSearchTerm(e.target.value)
                  }
                  className='w-full'
                />
                <div className='grid grid-cols-2 gap-2'>
                  <Input
                    placeholder='Contains'
                    value={letter.toUpperCase()}
                    readOnly
                    className='text-sm'
                  />
                  <Input
                    placeholder='Length'
                    value={length}
                    readOnly
                    className='text-sm'
                  />
                </div>
                <Button className='w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold'>
                  SEARCH
                </Button>
              </div>
            </div>
            {/* Sort Results */}
            <div className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100'>
              <div className='bg-gradient-to-r from-green-400 to-green-500 text-white px-4 py-3'>
                <h3 className='font-bold'>Sort Results</h3>
              </div>
              <div className='p-4 space-y-2'>
                <label className='flex items-center gap-2 cursor-pointer'>
                  <input
                    type='radio'
                    name='sort'
                    value='points'
                    checked={sortBy === "points"}
                    onChange={(e) =>
                      setSortBy(e.target.value)
                    }
                    className='text-green-500'
                  />
                  <span className='text-sm'>Points</span>
                </label>
                <label className='flex items-center gap-2 cursor-pointer'>
                  <input
                    type='radio'
                    name='sort'
                    value='a-z'
                    checked={sortBy === "a-z"}
                    onChange={(e) =>
                      setSortBy(e.target.value)
                    }
                    className='text-green-500'
                  />
                  <span className='text-sm'>A-Z</span>
                </label>
                <label className='flex items-center gap-2 cursor-pointer'>
                  <input
                    type='radio'
                    name='sort'
                    value='z-a'
                    checked={sortBy === "z-a"}
                    onChange={(e) =>
                      setSortBy(e.target.value)
                    }
                    className='text-green-500'
                  />
                  <span className='text-sm'>Z-A</span>
                </label>
              </div>
            </div>
            {/* Dictionary */}
            <div className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100'>
              <div className='bg-gradient-to-r from-green-400 to-green-500 text-white px-4 py-3'>
                <h3 className='font-bold'>Dictionary</h3>
              </div>
              <div className='p-4 space-y-2'>
                <label className='flex items-center gap-2 cursor-pointer'>
                  <input
                    type='radio'
                    name='dictionary'
                    value='words-with-friends'
                    checked={
                      selectedDictionary ===
                      "words-with-friends"
                    }
                    onChange={(e) =>
                      setSelectedDictionary(
                        e.target.value
                      )
                    }
                    className='text-green-500'
                  />
                  <span className='text-sm'>
                    Words With Friends
                  </span>
                </label>
                <label className='flex items-center gap-2 cursor-pointer'>
                  <input
                    type='radio'
                    name='dictionary'
                    value='scrabble-us'
                    checked={
                      selectedDictionary === "scrabble-us"
                    }
                    onChange={(e) =>
                      setSelectedDictionary(
                        e.target.value
                      )
                    }
                    className='text-green-500'
                  />
                  <span className='text-sm'>Scrabble US</span>
                </label>
                <label className='flex items-center gap-2 cursor-pointer'>
                  <input
                    type='radio'
                    name='dictionary'
                    value='scrabble-uk'
                    checked={
                      selectedDictionary === "scrabble-uk"
                    }
                    onChange={(e) =>
                      setSelectedDictionary(
                        e.target.value
                      )
                    }
                    className='text-green-500'
                  />
                  <span className='text-sm'>Scrabble UK</span>
                </label>
                <label className='flex items-center gap-2 cursor-pointer'>
                  <input
                    type='radio'
                    name='dictionary'
                    value='all'
                    checked={selectedDictionary === "all"}
                    onChange={(e) =>
                      setSelectedDictionary(
                        e.target.value
                      )
                    }
                    className='text-green-500'
                  />
                  <span className='text-sm'>
                    All Dictionaries
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}