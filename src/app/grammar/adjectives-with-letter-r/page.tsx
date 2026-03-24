"use client"

import Link from "next/link"

export default function AdjectivesWithLetterR() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-pink-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives With The Letter R
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover remarkable, reliable, and radiant adjectives featuring the letter R
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Remarkable Adjectives With The Letter R
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter R introduces us to a world of remarkable and reliable adjectives that can enhance our language. 
                From &quot;remarkable&quot; to &quot;radiant,&quot; these words help us express excellence, describe qualities, 
                and add reliability to our descriptions.
              </p>
            </div>

            {/* Popular R Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives With The Letter R
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-xl border-l-4 border-red-400">
                  <h3 className="text-2xl font-semibold text-red-700 mb-4">Positive Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-red-800">Remarkable</p>
                      <p className="text-red-600 text-sm">Worthy of attention; striking</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-red-800">Reliable</p>
                      <p className="text-red-600 text-sm">Consistently good in quality or performance</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-red-800">Radiant</p>
                      <p className="text-red-600 text-sm">Sending out light; shining or glowing brightly</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-red-800">Respectful</p>
                      <p className="text-red-600 text-sm">Feeling or showing deference and respect</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border-l-4 border-rose-400">
                  <h3 className="text-2xl font-semibold text-rose-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-rose-800">Responsible</p>
                      <p className="text-rose-600 text-sm">Having an obligation to do something</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-rose-800">Resilient</p>
                      <p className="text-rose-600 text-sm">Able to withstand or recover quickly from difficulties</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-rose-800">Resourceful</p>
                      <p className="text-rose-600 text-sm">Having the ability to find quick and clever ways to overcome difficulties</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-rose-800">Romantic</p>
                      <p className="text-rose-600 text-sm">Conducive to or characterized by the expression of love</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More R Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                More Adjectives With The Letter R
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-pink-50 to-fuchsia-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-700 mb-3">Characteristics</h4>
                  <ul className="text-pink-600 space-y-1 text-sm">
                    <li>Rich</li>
                    <li>Rough</li>
                    <li>Round</li>
                    <li>Rapid</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-fuchsia-700 mb-3">States</h4>
                  <ul className="text-fuchsia-600 space-y-1 text-sm">
                    <li>Remarkable</li>
                    <li>Reliable</li>
                    <li>Responsible</li>
                    <li>Resilient</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-700 mb-3">Qualities</h4>
                  <ul className="text-purple-600 space-y-1 text-sm">
                    <li>Radiant</li>
                    <li>Respectful</li>
                    <li>Resourceful</li>
                    <li>Romantic</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: R-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Match each R-adjective with its correct meaning:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Remarkable&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very reliable</p>
                        <p className="text-gray-600">B) Worthy of attention; striking</p>
                        <p className="text-gray-600">C) Being very radiant</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: B) Worthy of attention; striking</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Reliable&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very remarkable</p>
                        <p className="text-gray-600">B) Being very radiant</p>
                        <p className="text-gray-600">C) Consistently good in quality or performance</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: C) Consistently good in quality or performance</p>
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
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate R-adjectives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ discovery changed science forever.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: remarkable (worthy of attention; striking)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She was a _____ employee who never missed work.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: reliable (consistently good in quality or performance)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ smile lit up the room.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: radiant (sending out light; shining or glowing brightly)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: R-Adjective Opposites
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-fuchsia-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the opposite of each R-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Remarkable&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Ordinary, unremarkable, average</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Reliable&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Unreliable, inconsistent, undependable</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;Radiant&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Dull, dim, gloomy</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for R-Adjectives
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Position</h4>
                    <p className="text-gray-600">R-adjectives typically come before the noun they describe: &quot;a remarkable discovery&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Articles</h4>
                    <p className="text-gray-600">Use &quot;a&quot; before R-adjectives since R is a consonant sound: &quot;a reliable employee&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Comparatives</h4>
                    <p className="text-gray-600">Many R-adjectives use &quot;more&quot; for comparison: &quot;more remarkable&quot;</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>R-adjectives are abundant in English and offer great variety for expression</li>
                <li>Many R-adjectives have Latin origins, particularly from words like &quot;remarkabilis&quot; (remarkable) and &quot;reliabilis&quot; (reliable)</li>
                <li>R-adjectives can convey both positive and negative qualities, providing balance</li>
                <li>Use R-adjectives to add reliability and radiance to your descriptions</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjective-start-with-f" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives Starting With F
                </Link>
                <Link href="/grammar/adjective-start-with-j" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives Starting With J
                </Link>
                <Link href="/grammar/adjective-start-with-l" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives Starting With L
                </Link>
                <Link href="/grammar/adjective-start-with-m" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives Starting With M
                </Link>
                <Link href="/grammar/adjective-start-with-n" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives Starting With N
                </Link>
                <Link href="/grammar/adjective-start-with-o" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives Starting With O
                </Link>
                <Link href="/grammar/adjective-start-with-p" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives Starting With P
                </Link>
                <Link href="/grammar/adjective-start-with-r" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives Starting With R
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Letter:</span>
                  <span className="text-gray-600">R</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Count:</span>
                  <span className="text-gray-600">35+ common</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-red-100">
                R-adjectives are perfect for describing remarkable and reliable qualities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
