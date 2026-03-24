"use client"

import Link from "next/link"

export default function AdjectivesWithH() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives With H
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover happy, helpful, and honest adjectives featuring the letter H
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-rose-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Happy Adjectives With H
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter H introduces us to a world of happy and helpful adjectives that can enhance our language. 
                From &quot;happy&quot; to &quot;honest,&quot; these words help us express joy, describe qualities, 
                and add heart to our descriptions.
              </p>
            </div>

            {/* Popular H Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives With H
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border-l-4 border-rose-400">
                  <h3 className="text-2xl font-semibold text-rose-700 mb-4">Positive Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-rose-800">Happy</p>
                      <p className="text-rose-600 text-sm">Feeling or showing pleasure or contentment</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-rose-800">Helpful</p>
                      <p className="text-rose-600 text-sm">Giving or ready to give help</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-rose-800">Honest</p>
                      <p className="text-rose-600 text-sm">Free of deceit and untruthfulness</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-rose-800">Healthy</p>
                      <p className="text-rose-600 text-sm">In good physical and mental condition</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-fuchsia-50 p-6 rounded-xl border-l-4 border-pink-400">
                  <h3 className="text-2xl font-semibold text-pink-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-pink-800">Humble</p>
                      <p className="text-pink-600 text-sm">Having or showing a modest or low estimate of one&apos;s importance</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-pink-800">Hopeful</p>
                      <p className="text-pink-600 text-sm">Feeling or inspiring optimism about a future event</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-pink-800">Hardworking</p>
                      <p className="text-pink-600 text-sm">Tending to work with energy and commitment</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-pink-800">Hospitable</p>
                      <p className="text-pink-600 text-sm">Friendly and welcoming to visitors or guests</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More H Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                More Adjectives With H
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-fuchsia-700 mb-3">Characteristics</h4>
                  <ul className="text-fuchsia-600 space-y-1 text-sm">
                    <li>Hot</li>
                    <li>High</li>
                    <li>Huge</li>
                    <li>Heavy</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-700 mb-3">States</h4>
                  <ul className="text-purple-600 space-y-1 text-sm">
                    <li>Happy</li>
                    <li>Hopeful</li>
                    <li>Hungry</li>
                    <li>Hurt</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-700 mb-3">Qualities</h4>
                  <ul className="text-indigo-600 space-y-1 text-sm">
                    <li>Helpful</li>
                    <li>Honest</li>
                    <li>Healthy</li>
                    <li>Humble</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: H-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Match each H-adjective with its correct meaning:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Happy&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very helpful</p>
                        <p className="text-gray-600">B) Feeling or showing pleasure or contentment</p>
                        <p className="text-gray-600">C) Being very honest</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: B) Feeling or showing pleasure or contentment</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Helpful&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very happy</p>
                        <p className="text-gray-600">B) Being very honest</p>
                        <p className="text-gray-600">C) Giving or ready to give help</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: C) Giving or ready to give help</p>
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
                <div className="bg-gradient-to-r from-pink-50 to-fuchsia-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate H-adjectives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ child smiled brightly.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: happy (feeling or showing pleasure or contentment)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ teacher explained the concept clearly.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: helpful (giving or ready to give help)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">He was an _____ person who always told the truth.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: honest (free of deceit and untruthfulness)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: H-Adjective Opposites
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-fuchsia-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the opposite of each H-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Happy&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-fuchsia-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Sad, unhappy, miserable</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Helpful&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-fuchsia-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Unhelpful, useless, obstructive</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;Honest&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-fuchsia-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Dishonest, deceitful, lying</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for H-Adjectives
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Position</h4>
                    <p className="text-gray-600">H-adjectives typically come before the noun they describe: &quot;a happy child&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Articles</h4>
                    <p className="text-gray-600">Use &quot;a&quot; before H-adjectives since H is a consonant sound: &quot;a helpful teacher&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Comparatives</h4>
                    <p className="text-gray-600">Many H-adjectives use &quot;more&quot; for comparison: &quot;more helpful&quot;</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>H-adjectives are abundant in English and offer great variety for expression</li>
                <li>Many H-adjectives have Germanic origins, particularly from words like &quot;hap&quot; (luck) and &quot;helpan&quot; (help)</li>
                <li>H-adjectives can convey both positive and negative qualities, providing balance</li>
                <li>Use H-adjectives to add happiness and helpfulness to your descriptions</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjective-start-with-f" className="block text-rose-600 hover:text-rose-800 font-medium">
                  Adjectives Starting With F
                </Link>
                <Link href="/grammar/adjective-start-with-j" className="block text-rose-600 hover:text-rose-800 font-medium">
                  Adjectives Starting With J
                </Link>
                <Link href="/grammar/adjective-start-with-l" className="block text-rose-600 hover:text-rose-800 font-medium">
                  Adjectives Starting With L
                </Link>
                <Link href="/grammar/adjective-start-with-m" className="block text-rose-600 hover:text-rose-800 font-medium">
                  Adjectives Starting With M
                </Link>
                <Link href="/grammar/adjective-start-with-n" className="block text-rose-600 hover:text-rose-800 font-medium">
                  Adjectives Starting With N
                </Link>
                <Link href="/grammar/adjective-start-with-o" className="block text-rose-600 hover:text-rose-800 font-medium">
                  Adjectives Starting With O
                </Link>
                <Link href="/grammar/adjective-start-with-p" className="block text-rose-600 hover:text-rose-800 font-medium">
                  Adjectives Starting With P
                </Link>
                <Link href="/grammar/adjective-start-with-r" className="block text-rose-600 hover:text-rose-800 font-medium">
                  Adjectives Starting With R
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Letter:</span>
                  <span className="text-gray-600">H</span>
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

            <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-rose-100">
                H-adjectives are perfect for describing happy and helpful qualities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
