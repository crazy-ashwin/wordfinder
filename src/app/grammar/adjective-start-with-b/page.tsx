"use client"

import Link from "next/link"

export default function AdjectiveStartWithB() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives That Begin With B
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover beautiful, bright, and brilliant adjectives starting with the letter B
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Beautiful Adjectives Starting With B
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter B introduces us to a world of beautiful and bright adjectives that can enhance our language. 
                From &quot;beautiful&quot; to &quot;bright,&quot; these words help us express beauty, describe qualities, 
                and add brilliance to our descriptions.
              </p>
            </div>

            {/* Popular B Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives Starting With B
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">Positive Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Beautiful</p>
                      <p className="text-blue-600 text-sm">Pleasant to look at</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Bright</p>
                      <p className="text-blue-600 text-sm">Shining with light</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Brilliant</p>
                      <p className="text-blue-600 text-sm">Exceptionally clever</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Brave</p>
                      <p className="text-blue-600 text-sm">Courageous and fearless</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border-l-4 border-indigo-400">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-indigo-800">Bold</p>
                      <p className="text-indigo-600 text-sm">Confident and daring</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-indigo-800">Benevolent</p>
                      <p className="text-indigo-600 text-sm">Kind and generous</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-indigo-800">Balanced</p>
                      <p className="text-indigo-600 text-sm">Stable and harmonious</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-indigo-800">Blessed</p>
                      <p className="text-indigo-600 text-sm">Favored by good fortune</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More B Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                More Adjectives Starting With B
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-700 mb-3">Characteristics</h4>
                  <ul className="text-purple-600 space-y-1 text-sm">
                    <li>Big</li>
                    <li>Black</li>
                    <li>Blue</li>
                    <li>Brown</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-700 mb-3">States</h4>
                  <ul className="text-pink-600 space-y-1 text-sm">
                    <li>Busy</li>
                    <li>Bored</li>
                    <li>Broken</li>
                    <li>Better</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-700 mb-3">Qualities</h4>
                  <ul className="text-red-600 space-y-1 text-sm">
                    <li>Basic</li>
                    <li>Brief</li>
                    <li>Broad</li>
                    <li>Best</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: B-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Match each B-adjective with its correct meaning:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Bold&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very old</p>
                        <p className="text-gray-600">B) Confident and daring</p>
                        <p className="text-gray-600">C) Being very expensive</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: B) Confident and daring</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Benevolent&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very fast</p>
                        <p className="text-gray-600">B) Being very strong</p>
                        <p className="text-gray-600">C) Kind and generous</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: C) Kind and generous</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Complete the Sentences
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate B-adjectives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ student solved the difficult problem.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: brilliant (exceptionally clever)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She had a _____ personality that everyone admired.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: beautiful (pleasant to look at)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ soldier protected his comrades.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: brave (courageous and fearless)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: B-Adjective Opposites
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the opposite of each B-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Big&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Small, tiny, little</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Bright&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Dark, dim, dull</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;Brave&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Cowardly, fearful, timid</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for B-Adjectives
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Position</h4>
                    <p className="text-gray-600">B-adjectives typically come before the noun they describe: &quot;a beautiful flower&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Articles</h4>
                    <p className="text-gray-600">Use &quot;a&quot; before B-adjectives since B is a consonant sound: &quot;a bright day&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Comparatives</h4>
                    <p className="text-gray-600">Many B-adjectives use &quot;more&quot; for comparison: &quot;more beautiful&quot;</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>B-adjectives are excellent for describing beautiful and bright qualities</li>
                <li>Many B-adjectives have positive connotations, making them great for compliments</li>
                <li>Some B-adjectives can be used as both adjectives and adverbs</li>
                <li>Pay attention to the spelling of B-adjectives, as some have silent letters</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjectives-that-start-with" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives That Start With
                </Link>
                <Link href="/grammar/adjectives" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives
                </Link>
                <Link href="/grammar/descriptive-adjectives" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Descriptive Adjectives
                </Link>
                <Link href="/grammar/adjective-examples" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjective Examples
                </Link>
                <Link href="/grammar/adjectives-that-start-with-a" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives Starting With A
                </Link>
                <Link href="/grammar/adjectives-that-start-with-c" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives Starting With C
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Parts of Speech
                </Link>
                <Link href="/grammar/english-grammar" className="block text-blue-600 hover:text-blue-800 font-medium">
                  English Grammar
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Letter:</span>
                  <span className="text-gray-600">B</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Count:</span>
                  <span className="text-gray-600">30+ common</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-blue-100">
                B-adjectives are perfect for describing beautiful and bright qualities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
