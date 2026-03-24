"use client"

import Link from "next/link"

export default function AdjectivesBeginningWithLetterJ() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives Beginning With Letter J
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover joyful, jolly, and jubilant adjectives beginning with the letter J
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Joyful Adjectives Beginning With Letter J
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter J introduces us to a world of joyful and jubilant adjectives that can enhance our language.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives Beginning With Letter J
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-400">
                  <h3 className="text-2xl font-semibold text-green-700 mb-4">Positive Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-green-800">Joyful</p>
                      <p className="text-green-600 text-sm">Full of joy and happiness</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-green-800">Jolly</p>
                      <p className="text-green-600 text-sm">Happy and cheerful</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-green-800">Jubilant</p>
                      <p className="text-green-600 text-sm">Feeling great happiness</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border-l-4 border-emerald-400">
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-4">Characteristics</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Just</p>
                      <p className="text-emerald-600 text-sm">Fair and righteous</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Jovial</p>
                      <p className="text-emerald-600 text-sm">Cheerful and friendly</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Judicious</p>
                      <p className="text-emerald-600 text-sm">Having good judgment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: J-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Match each J-adjective with its correct meaning:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Joyful&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very old</p>
                        <p className="text-gray-600">B) Full of joy and happiness</p>
                        <p className="text-gray-600">C) Being very expensive</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: B) Full of joy and happiness</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Just&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very fast</p>
                        <p className="text-gray-600">B) Being very strong</p>
                        <p className="text-gray-600">C) Fair and righteous</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: C) Fair and righteous</p>
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
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate J-adjectives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ student always helped others.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: joyful (full of joy and happiness)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She had a _____ personality that everyone loved.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: jolly (happy and cheerful)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ worker never missed a deadline.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: judicious (having good judgment)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: J-Adjective Opposites
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the opposite of each J-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Joyful&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Sad, sorrowful, miserable</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Just&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Unjust, unfair, biased</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;Jovial&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Gloomy, serious, somber</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for J-Adjectives
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Position</h4>
                    <p className="text-gray-600">J-adjectives typically come before the noun they describe: &quot;a joyful person&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Articles</h4>
                    <p className="text-gray-600">Use &quot;a&quot; before J-adjectives since J is a consonant sound: &quot;a joyful person&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Comparatives</h4>
                    <p className="text-gray-600">Many J-adjectives use &quot;more&quot; for comparison: &quot;more joyful&quot;</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>J-adjectives are excellent for describing joyful qualities</li>
                <li>Many J-adjectives have positive connotations, making them great for compliments</li>
                <li>Some J-adjectives can be used as both adjectives and adverbs</li>
                <li>Pay attention to the spelling of J-adjectives, as some have silent letters</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjectives-that-start-with" className="block text-green-600 hover:text-green-800 font-medium">
                  Adjectives That Start With
                </Link>
                <Link href="/grammar/adjectives" className="block text-green-600 hover:text-green-800 font-medium">
                  Adjectives
                </Link>
                <Link href="/grammar/descriptive-adjectives" className="block text-green-600 hover:text-green-800 font-medium">
                  Descriptive Adjectives
                </Link>
                <Link href="/grammar/adjective-examples" className="block text-green-600 hover:text-green-800 font-medium">
                  Adjective Examples
                </Link>
                <Link href="/grammar/adjectives-that-start-with-i" className="block text-green-600 hover:text-green-800 font-medium">
                  Adjectives Starting With I
                </Link>
                <Link href="/grammar/adjectives-that-start-with-k" className="block text-green-600 hover:text-green-800 font-medium">
                  Adjectives Starting With K
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-green-600 hover:text-green-800 font-medium">
                  Parts of Speech
                </Link>
                <Link href="/grammar/english-grammar" className="block text-green-600 hover:text-green-800 font-medium">
                  English Grammar
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Letter:</span>
                  <span className="text-gray-600">J</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Count:</span>
                  <span className="text-gray-600">30+ common</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-green-100">
                J-adjectives are perfect for describing joyful and jubilant qualities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
