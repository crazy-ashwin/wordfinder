"use client"

import Link from "next/link"

export default function ProperNouns() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Proper Nouns</h1>
          <p className="text-xl opacity-90">
            Learn about specific names and how to use them correctly
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-red-800 mb-4">
                What Are Proper Nouns?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Proper nouns are specific names for particular people, places, things, or ideas. They always begin with a capital letter and refer to unique, individual entities.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Unlike common nouns, proper nouns name specific, one-of-a-kind items and help us identify exactly what we&apos;re talking about.
              </p>
            </div>

            {/* Categories of Proper Nouns */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-red-800 mb-6">
                Categories of Proper Nouns
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-red-700 mb-3">People & Names</h3>
                  <p className="text-gray-700 mb-3">
                    Specific names of individuals
                  </p>
                  <p className="text-gray-600">
                    John Smith, Mary Johnson<br />
                    Albert Einstein, Shakespeare<br />
                    President Biden, Queen Elizabeth
                  </p>
                </div>
                <div className="bg-pink-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-pink-700 mb-3">Places & Locations</h3>
                  <p className="text-gray-700 mb-3">
                    Names of specific locations
                  </p>
                  <p className="text-gray-600">
                    New York City, London<br />
                    Mount Everest, Pacific Ocean<br />
                    Central Park, Times Square
                  </p>
                </div>
              </div>
            </div>

            {/* More Categories */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-red-800 mb-6">
                More Categories
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-red-700 mb-2">Organizations & Companies</h3>
                  <p className="text-gray-700 mb-3">
                    Names of businesses, institutions, and groups
                  </p>
                  <p className="text-gray-600 italic">
                    Apple Inc., Harvard University<br />
                    United Nations, Red Cross<br />
                    New York Yankees, Beatles
                  </p>
                </div>
                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-xl font-semibold text-pink-700 mb-2">Titles & Works</h3>
                  <p className="text-gray-700 mb-3">
                    Names of books, movies, songs, and other creative works
                  </p>
                  <p className="text-gray-600 italic">
                    &quot;Romeo and Juliet,&quot; &quot;Star Wars&quot;<br />
                    &quot;Mona Lisa,&quot; &quot;Symphony No. 9&quot;<br />
                    &quot;The New York Times,&quot; &quot;Coca-Cola&quot;
                  </p>
                </div>
                <div className="border-l-4 border-rose-500 pl-6">
                  <h3 className="text-xl font-semibold text-rose-700 mb-2">Days, Months & Holidays</h3>
                  <p className="text-gray-700 mb-3">
                    Names of specific time periods and celebrations
                  </p>
                  <p className="text-gray-600 italic">
                    Monday, January, Christmas<br />
                    Independence Day, Thanksgiving<br />
                    Easter, Halloween, New Year&apos;s Day
                  </p>
                </div>
              </div>
            </div>

            {/* Capitalization Rules */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-red-800 mb-6">
                Capitalization Rules
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-red-700 mb-3">Always Capitalize</h3>
                  <p className="text-gray-700 mb-3">
                    The first letter of each word
                  </p>
                  <p className="text-gray-600">
                    <strong>J</strong>ohn <strong>S</strong>mith<br />
                    <strong>N</strong>ew <strong>Y</strong>ork <strong>C</strong>ity<br />
                    <strong>T</strong>he <strong>G</strong>reat <strong>W</strong>all
                  </p>
                </div>
                <div className="bg-pink-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-pink-700 mb-3">Articles & Prepositions</h3>
                  <p className="text-gray-700 mb-3">
                    Usually lowercase unless they&apos;re the first word
                  </p>
                  <p className="text-gray-600">
                    &quot;The Lord of the Rings&quot;<br />
                    &quot;Of Mice and Men&quot;<br />
                    &quot;The Sound of Music&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quizzes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-red-800 mb-6">
                Interactive Quizzes
              </h2>
              
              <div className="space-y-6">
                <details className="bg-red-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-red-700 cursor-pointer hover:text-red-800">
                    Quiz 1: Identify Proper Nouns
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Which words are proper nouns?</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;I visited paris and saw the eiffel tower.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: Paris, Eiffel Tower (proper nouns should be capitalized)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;My friend john lives in new york city.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: John, New York City (proper nouns should be capitalized)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-pink-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-pink-700 cursor-pointer hover:text-pink-800">
                    Quiz 2: Proper vs. Common Nouns
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Classify each noun:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;I saw a dog in Central Park.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: dog (common noun), Central Park (proper noun)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;The book was written by Shakespeare.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: book (common noun), Shakespeare (proper noun)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-rose-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-rose-700 cursor-pointer hover:text-rose-800">
                    Quiz 3: Capitalization
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Correct the capitalization:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;i live in los angeles, california.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: &quot;I live in Los Angeles, California.&quot;</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;my favorite book is to kill a mockingbird.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: &quot;My favorite book is To Kill a Mockingbird.&quot;</p>
                    </div>
                  </div>
                </details>

                <details className="bg-red-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-red-700 cursor-pointer hover:text-red-800">
                    Quiz 4: Categories
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Which category does each proper noun belong to?</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;Mount Everest&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: Places & Locations</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;The Beatles&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: Organizations & Companies</p>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-red-800 mb-4">
                Important Notes
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>• Always capitalize the first letter of proper nouns, even in the middle of sentences.</p>
                <p>• Some words can be both common and proper nouns depending on context (e.g., &quot;church&quot; vs. &quot;Church of England&quot;).</p>
                <p>• Brand names and trademarks are proper nouns and should be capitalized.</p>
                <p>• When in doubt, ask yourself: &quot;Is this a specific, unique name?&quot; If yes, capitalize it.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-red-800 mb-4">Pro Tip</h3>
              <p className="text-gray-700">
                Think of proper nouns as &quot;one-of-a-kind&quot; names. If you can say &quot;the&quot; before it and it still makes sense, it&apos;s probably a common noun. If it&apos;s a specific name, it&apos;s a proper noun.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-red-800 mb-4">Related Topics</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/grammar/nouns" className="text-red-600 hover:text-red-800 hover:underline">
                    Nouns
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/common-nouns" className="text-red-600 hover:text-red-800 hover:underline">
                    Common Nouns
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/capitalization" className="text-red-600 hover:text-red-800 hover:underline">
                    Capitalization
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/parts-of-speech" className="text-red-600 hover:text-red-800 hover:underline">
                    Parts of Speech
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/english-grammar" className="text-red-600 hover:text-red-800 hover:underline">
                    English Grammar
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
