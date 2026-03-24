"use client"

import Link from "next/link"

export default function AdjectivesWithLetterL() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-lime-600 via-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives With The Letter L
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover luminous, lively, and loyal adjectives featuring the letter L
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
                Luminous Adjectives With The Letter L
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter L introduces us to a world of luminous and lively adjectives that can enhance our language. 
                From &quot;luminous&quot; to &quot;loyal,&quot; these words help us express light, describe qualities, 
                and add brightness to our descriptions.
              </p>
            </div>

            {/* Popular L Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives With The Letter L
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-lime-50 to-emerald-50 p-6 rounded-xl border-l-4 border-lime-400">
                  <h3 className="text-2xl font-semibold text-lime-700 mb-4">Positive Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-lime-800">Luminous</p>
                      <p className="text-lime-600 text-sm">Giving off light; bright and shining</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-lime-800">Lucid</p>
                      <p className="text-lime-600 text-sm">Clear and easy to understand</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-lime-800">Lively</p>
                      <p className="text-lime-600 text-sm">Full of life and energy</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-lime-800">Loyal</p>
                      <p className="text-lime-600 text-sm">Firm and constant support</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border-l-4 border-emerald-400">
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Lazy</p>
                      <p className="text-emerald-600 text-sm">Unwilling to work or use energy</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Lonely</p>
                      <p className="text-emerald-600 text-sm">Sad without friends or company</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Loud</p>
                      <p className="text-emerald-600 text-sm">Producing much noise</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Loose</p>
                      <p className="text-emerald-600 text-sm">Not firmly fixed in place</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More L Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                More Adjectives With The Letter L
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-700 mb-3">Characteristics</h4>
                  <ul className="text-teal-600 space-y-1 text-sm">
                    <li>Large</li>
                    <li>Light</li>
                    <li>Long</li>
                    <li>Low</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-cyan-700 mb-3">States</h4>
                  <ul className="text-cyan-600 space-y-1 text-sm">
                    <li>Late</li>
                    <li>Last</li>
                    <li>Left</li>
                    <li>Lost</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-3">Qualities</h4>
                  <ul className="text-blue-600 space-y-1 text-sm">
                    <li>Lucky</li>
                    <li>Lovely</li>
                    <li>Logical</li>
                    <li>Legal</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: L-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-lime-50 to-emerald-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Match each L-adjective with its correct meaning:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Luminous&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very clear</p>
                        <p className="text-gray-600">B) Giving off light; bright and shining</p>
                        <p className="text-gray-600">C) Being very loyal</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-lime-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: B) Giving off light; bright and shining</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Lucid&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very bright</p>
                        <p className="text-gray-600">B) Being very loyal</p>
                        <p className="text-gray-600">C) Clear and easy to understand</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-lime-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: C) Clear and easy to understand</p>
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
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate L-adjectives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ star shone brightly in the night sky.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: luminous (giving off light; bright and shining)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She gave a _____ explanation of the complex topic.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: lucid (clear and easy to understand)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ puppy played energetically in the garden.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: lively (full of life and energy)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: L-Adjective Opposites
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the opposite of each L-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Luminous&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Dark, dim, dull</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Lucid&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Confusing, unclear, obscure</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;Lively&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Dull, boring, lifeless</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for L-Adjectives
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-lime-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Position</h4>
                    <p className="text-gray-600">L-adjectives typically come before the noun they describe: &quot;a luminous star&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-lime-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Articles</h4>
                    <p className="text-gray-600">Use &quot;a&quot; before L-adjectives since L is a consonant sound: &quot;a lucid explanation&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-lime-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Comparatives</h4>
                    <p className="text-gray-600">Many L-adjectives use &quot;more&quot; for comparison: &quot;more luminous&quot;</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>L-adjectives are abundant in English and offer great variety for expression</li>
                <li>Many L-adjectives have Latin origins, particularly from words like &quot;lux&quot; (light) and &quot;lucidus&quot; (clear)</li>
                <li>L-adjectives can convey both positive and negative qualities, providing balance</li>
                <li>Use L-adjectives to add clarity and brightness to your descriptions</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjective-start-with-f" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Adjectives Starting With F
                </Link>
                <Link href="/grammar/adjective-start-with-j" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Adjectives Starting With J
                </Link>
                <Link href="/grammar/adjective-start-with-l" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Adjectives Starting With L
                </Link>
                <Link href="/grammar/adjective-start-with-m" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Adjectives Starting With M
                </Link>
                <Link href="/grammar/adjective-start-with-n" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Adjectives Starting With N
                </Link>
                <Link href="/grammar/adjective-start-with-o" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Adjectives Starting With O
                </Link>
                <Link href="/grammar/adjective-start-with-p" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Adjectives Starting With P
                </Link>
                <Link href="/grammar/adjective-start-with-r" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Adjectives Starting With R
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Letter:</span>
                  <span className="text-gray-600">L</span>
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

            <div className="bg-gradient-to-r from-lime-500 to-emerald-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-lime-100">
                L-adjectives are perfect for describing luminous and lively qualities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
