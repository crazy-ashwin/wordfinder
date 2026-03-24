"use client"

import Link from "next/link"

export default function AdjectiveBeginWithA() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives That Begin With A
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover amazing, adventurous, and authentic adjectives starting with the letter A
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-amber-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Amazing Adjectives Starting With A
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter A gives us access to some of the most powerful and descriptive adjectives in the English language. 
                From &quot;amazing&quot; to &quot;authentic,&quot; these words help us express admiration, describe qualities, 
                and add precision to our communication.
              </p>
            </div>

            {/* Popular A Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives Starting With A
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border-l-4 border-amber-400">
                  <h3 className="text-2xl font-semibold text-amber-700 mb-4">Positive Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-amber-800">Amazing</p>
                      <p className="text-amber-600 text-sm">Causing great surprise or wonder</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-amber-800">Adorable</p>
                      <p className="text-amber-600 text-sm">Inspiring great affection</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-amber-800">Ambitious</p>
                      <p className="text-amber-600 text-sm">Having a strong desire for success</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-amber-800">Authentic</p>
                      <p className="text-amber-600 text-sm">Genuine or real</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border-l-4 border-orange-400">
                  <h3 className="text-2xl font-semibold text-orange-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-orange-800">Adventurous</p>
                      <p className="text-orange-600 text-sm">Willing to take risks</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-orange-800">Affectionate</p>
                      <p className="text-orange-600 text-sm">Showing fondness or tenderness</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-orange-800">Attentive</p>
                      <p className="text-orange-600 text-sm">Paying close attention</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-orange-800">Assertive</p>
                      <p className="text-orange-600 text-sm">Confident and self-assured</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More A Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                More Adjectives Starting With A
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-red-50 to-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-700 mb-3">Appearance</h4>
                  <ul className="text-red-600 space-y-1 text-sm">
                    <li>Attractive</li>
                    <li>Angular</li>
                    <li>Average</li>
                    <li>Awkward</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-700 mb-3">Emotions</h4>
                  <ul className="text-pink-600 space-y-1 text-sm">
                    <li>Angry</li>
                    <li>Anxious</li>
                    <li>Amused</li>
                    <li>Amazed</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-rose-700 mb-3">Characteristics</h4>
                  <ul className="text-rose-600 space-y-1 text-sm">
                    <li>Active</li>
                    <li>Accurate</li>
                    <li>Adaptable</li>
                    <li>Advanced</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: A-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Match each A-adjective with its correct meaning:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Ambitious&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very tall</p>
                        <p className="text-gray-600">B) Having a strong desire for success</p>
                        <p className="text-gray-600">C) Being very quiet</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: B) Having a strong desire for success</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Authentic&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very old</p>
                        <p className="text-gray-600">B) Being very expensive</p>
                        <p className="text-gray-600">C) Genuine or real</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: C) Genuine or real</p>
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
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate A-adjectives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ explorer climbed the mountain.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: adventurous (willing to take risks)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She gave an _____ speech that inspired everyone.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: amazing (causing great surprise or wonder)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ child hugged everyone she met.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: affectionate (showing fondness or tenderness)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: A-Adjective Opposites
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the opposite of each A-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Active&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Inactive, lazy, passive</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Accurate&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Inaccurate, wrong, incorrect</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;Attractive&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Unattractive, ugly, repulsive</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for A-Adjectives
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Position</h4>
                    <p className="text-gray-600">A-adjectives typically come before the noun they describe: &quot;an amazing story&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Articles</h4>
                    <p className="text-gray-600">Use &quot;an&quot; before A-adjectives that start with vowel sounds: &quot;an authentic experience&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Comparatives</h4>
                    <p className="text-gray-600">Many A-adjectives use &quot;more&quot; for comparison: &quot;more ambitious&quot;</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>A-adjectives are great for starting sentences with variety and impact</li>
                <li>Many A-adjectives describe positive qualities, making them useful for compliments</li>
                <li>Some A-adjectives can be used as both adjectives and adverbs</li>
                <li>Pay attention to whether to use &quot;a&quot; or &quot;an&quot; before A-adjectives</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjectives-that-start-with" className="block text-amber-600 hover:text-amber-800 font-medium">
                  Adjectives That Start With
                </Link>
                <Link href="/grammar/adjectives" className="block text-amber-600 hover:text-amber-800 font-medium">
                  Adjectives
                </Link>
                <Link href="/grammar/descriptive-adjectives" className="block text-amber-600 hover:text-amber-800 font-medium">
                  Descriptive Adjectives
                </Link>
                <Link href="/grammar/adjective-examples" className="block text-amber-600 hover:text-amber-800 font-medium">
                  Adjective Examples
                </Link>
                <Link href="/grammar/adjectives-that-start-with-b" className="block text-amber-600 hover:text-amber-800 font-medium">
                  Adjectives Starting With B
                </Link>
                <Link href="/grammar/adjectives-that-start-with-c" className="block text-amber-600 hover:text-amber-800 font-medium">
                  Adjectives Starting With C
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-amber-600 hover:text-amber-800 font-medium">
                  Parts of Speech
                </Link>
                <Link href="/grammar/english-grammar" className="block text-amber-600 hover:text-amber-800 font-medium">
                  English Grammar
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Letter:</span>
                  <span className="text-gray-600">A</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Count:</span>
                  <span className="text-gray-600">25+ common</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-amber-100">
                A-adjectives are perfect for starting sentences with variety and impact!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
