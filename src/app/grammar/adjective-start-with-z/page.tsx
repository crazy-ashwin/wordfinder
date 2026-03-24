"use client"

import Link from "next/link"

export default function AdjectiveStartWithZ() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives That Begin With Z
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover zealous, zesty, and zany adjectives starting with the letter Z
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-lime-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Zealous Adjectives Starting With Z
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter Z introduces us to a world of zealous and zesty adjectives that can enhance our language. 
                From &quot;zealous&quot; to &quot;zesty,&quot; these words help us express enthusiasm, describe qualities, 
                and add zest to our descriptions.
              </p>
            </div>

            {/* Popular Z Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives Starting With Z
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-lime-50 to-green-50 p-6 rounded-xl border-l-4 border-lime-400">
                  <h3 className="text-2xl font-semibold text-lime-700 mb-4">Positive Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-lime-800">Zealous</p>
                      <p className="text-lime-600 text-sm">Passionate and enthusiastic</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-lime-800">Zesty</p>
                      <p className="text-lime-600 text-sm">Full of flavor and energy</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-lime-800">Zany</p>
                      <p className="text-lime-600 text-sm">Amusingly unconventional</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-lime-800">Zippy</p>
                      <p className="text-lime-600 text-sm">Quick and energetic</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-400">
                  <h3 className="text-2xl font-semibold text-green-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-green-800">Zealous</p>
                      <p className="text-green-600 text-sm">Fervent and devoted</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-green-800">Zestful</p>
                      <p className="text-green-600 text-sm">Full of enthusiasm</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-green-800">Zonal</p>
                      <p className="text-green-600 text-sm">Relating to zones</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-green-800">Zippy</p>
                      <p className="text-green-600 text-sm">Fast and lively</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More Z Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                More Adjectives Starting With Z
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-emerald-700 mb-3">Characteristics</h4>
                  <ul className="text-emerald-600 space-y-1 text-sm">
                    <li>Zigzag</li>
                    <li>Zonal</li>
                    <li>Zippy</li>
                    <li>Zesty</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-700 mb-3">States</h4>
                  <ul className="text-teal-600 space-y-1 text-sm">
                    <li>Zealous</li>
                    <li>Zestful</li>
                    <li>Zany</li>
                    <li>Zippy</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-cyan-700 mb-3">Qualities</h4>
                  <ul className="text-cyan-600 space-y-1 text-sm">
                    <li>Zealous</li>
                    <li>Zesty</li>
                    <li>Zany</li>
                    <li>Zippy</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Z-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-lime-50 to-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Match each Z-adjective with its correct meaning:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Zealous&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very old</p>
                        <p className="text-gray-600">B) Passionate and enthusiastic</p>
                        <p className="text-gray-600">C) Being very expensive</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-lime-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: B) Passionate and enthusiastic</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Zesty&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very fast</p>
                        <p className="text-gray-600">B) Being very strong</p>
                        <p className="text-gray-600">C) Full of flavor and energy</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-lime-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: C) Full of flavor and energy</p>
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
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate Z-adjectives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ student always worked hard on projects.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: zealous (passionate and enthusiastic)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She had a _____ personality that everyone loved.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: zesty (full of flavor and energy)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ comedian made everyone laugh.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: zany (amusingly unconventional)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Z-Adjective Opposites
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the opposite of each Z-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Zealous&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Apathetic, indifferent, uninterested</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Zesty&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Bland, dull, boring</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;Zippy&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Slow, sluggish, lethargic</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for Z-Adjectives
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-lime-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Position</h4>
                    <p className="text-gray-600">Z-adjectives typically come before the noun they describe: &quot;a zealous student&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-lime-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Articles</h4>
                    <p className="text-gray-600">Use &quot;a&quot; before Z-adjectives since Z is a consonant sound: &quot;a zesty personality&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-lime-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Comparatives</h4>
                    <p className="text-gray-600">Many Z-adjectives use &quot;more&quot; for comparison: &quot;more zealous&quot;</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>Z-adjectives are excellent for describing zealous and zesty qualities</li>
                <li>Many Z-adjectives have positive connotations, making them great for compliments</li>
                <li>Some Z-adjectives can be used as both adjectives and adverbs</li>
                <li>Pay attention to the spelling of Z-adjectives, as some have unusual letter combinations</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjectives-that-start-with" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Adjectives That Start With
                </Link>
                <Link href="/grammar/adjectives" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Adjectives
                </Link>
                <Link href="/grammar/descriptive-adjectives" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Descriptive Adjectives
                </Link>
                <Link href="/grammar/adjective-examples" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Adjective Examples
                </Link>
                <Link href="/grammar/adjectives-that-start-with-y" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Adjectives Starting With Y
                </Link>
                <Link href="/grammar/adjectives-that-start-with-a" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Adjectives Starting With A
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Parts of Speech
                </Link>
                <Link href="/grammar/english-grammar" className="block text-lime-600 hover:text-lime-800 font-medium">
                  English Grammar
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Letter:</span>
                  <span className="text-gray-600">Z</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Count:</span>
                  <span className="text-gray-600">20+ common</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-lime-500 to-green-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-lime-100">
                Z-adjectives are perfect for describing zealous and zesty qualities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
