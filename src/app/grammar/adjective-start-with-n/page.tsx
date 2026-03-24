"use client"

import Link from "next/link"

export default function AdjectiveStartWithN() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives That Begin With N
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover natural, necessary, and notable adjectives starting with the letter N
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Natural Adjectives Starting With N
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter N introduces us to a world of natural and necessary adjectives that can enhance our language. 
                From &quot;natural&quot; to &quot;notable,&quot; these words help us express necessity, describe qualities, 
                and add nuance to our descriptions.
              </p>
            </div>

            {/* Popular N Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives Starting With N
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border-l-4 border-orange-400">
                  <h3 className="text-2xl font-semibold text-orange-700 mb-4">Positive Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-orange-800">Natural</p>
                      <p className="text-orange-600 text-sm">Existing in nature; not artificial</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-orange-800">Necessary</p>
                      <p className="text-orange-600 text-sm">Required or essential</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-orange-800">Notable</p>
                      <p className="text-orange-600 text-sm">Worthy of attention or notice</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-orange-800">Nice</p>
                      <p className="text-orange-600 text-sm">Pleasant and agreeable</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border-l-4 border-amber-400">
                  <h3 className="text-2xl font-semibold text-amber-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-amber-800">Nervous</p>
                      <p className="text-amber-600 text-sm">Easily agitated or anxious</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-amber-800">Noisy</p>
                      <p className="text-amber-600 text-sm">Making a lot of sound</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-amber-800">Noble</p>
                      <p className="text-amber-600 text-sm">Having high moral qualities</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-amber-800">Naive</p>
                      <p className="text-amber-600 text-sm">Innocent and inexperienced</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More N Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                More Adjectives Starting With N
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-yellow-50 to-lime-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-700 mb-3">Characteristics</h4>
                  <ul className="text-yellow-600 space-y-1 text-sm">
                    <li>New</li>
                    <li>Normal</li>
                    <li>Narrow</li>
                    <li>Near</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-lime-50 to-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lime-700 mb-3">States</h4>
                  <ul className="text-lime-600 space-y-1 text-sm">
                    <li>Next</li>
                    <li>Now</li>
                    <li>Never</li>
                    <li>Nearly</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-3">Qualities</h4>
                  <ul className="text-green-600 space-y-1 text-sm">
                    <li>Neat</li>
                    <li>Nimble</li>
                    <li>Nurturing</li>
                    <li>Numerous</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: N-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Match each N-adjective with its correct meaning:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Natural&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very expensive</p>
                        <p className="text-gray-600">B) Existing in nature; not artificial</p>
                        <p className="text-gray-600">C) Being very fast</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: B) Existing in nature; not artificial</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Necessary&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very nice</p>
                        <p className="text-gray-600">B) Being very strong</p>
                        <p className="text-gray-600">C) Required or essential</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: C) Required or essential</p>
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
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate N-adjectives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ materials were better for the environment.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: natural (existing in nature; not artificial)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">It was _____ to bring warm clothes for the trip.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: necessary (required or essential)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ achievement was celebrated by everyone.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: notable (worthy of attention or notice)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: N-Adjective Opposites
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-50 to-lime-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the opposite of each N-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Natural&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Artificial, synthetic, man-made</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Necessary&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Unnecessary, optional, optional</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;Nice&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Mean, unpleasant, disagreeable</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for N-Adjectives
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Position</h4>
                    <p className="text-gray-600">N-adjectives typically come before the noun they describe: &quot;a natural material&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Articles</h4>
                    <p className="text-gray-600">Use &quot;a&quot; before N-adjectives since N is a consonant sound: &quot;a necessary item&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Comparatives</h4>
                    <p className="text-gray-600">Many N-adjectives use &quot;more&quot; for comparison: &quot;more natural&quot;</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>N-adjectives are excellent for describing natural and necessary qualities</li>
                <li>Many N-adjectives have Latin origins, particularly from words like &quot;natura&quot; (nature) and &quot;necessarius&quot; (necessary)</li>
                <li>N-adjectives can convey both positive and negative qualities, providing balance</li>
                <li>Use N-adjectives to add naturalness and necessity to your descriptions</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjective-start-with-f" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Adjectives Starting With F
                </Link>
                <Link href="/grammar/adjective-start-with-j" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Adjectives Starting With J
                </Link>
                <Link href="/grammar/adjective-start-with-l" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Adjectives Starting With L
                </Link>
                <Link href="/grammar/adjective-start-with-m" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Adjectives Starting With M
                </Link>
                <Link href="/grammar/adjective-start-with-o" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Adjectives Starting With O
                </Link>
                <Link href="/grammar/adjective-start-with-p" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Adjectives Starting With P
                </Link>
                <Link href="/grammar/adjective-start-with-r" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Adjectives Starting With R
                </Link>
                <Link href="/grammar/adjective-start-with-t" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Adjectives Starting With T
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Letter:</span>
                  <span className="text-gray-600">N</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Count:</span>
                  <span className="text-gray-600">20+ common</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-orange-100">
                N-adjectives are perfect for describing natural and necessary qualities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
