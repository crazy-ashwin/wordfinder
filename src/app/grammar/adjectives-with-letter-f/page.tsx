"use client"

import Link from "next/link"

export default function AdjectivesWithLetterF() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-50 via-pink-50 to-rose-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives With The Letter F
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover fantastic, friendly, and fabulous adjectives featuring the letter F
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-fuchsia-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Fantastic Adjectives With The Letter F
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter F introduces us to a world of fantastic and friendly adjectives that can enhance our language. 
                From &quot;fantastic&quot; to &quot;friendly,&quot; these words help us express excellence, describe qualities, 
                and add fun to our descriptions.
              </p>
            </div>

            {/* Popular F Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives With The Letter F
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-fuchsia-50 to-pink-50 p-6 rounded-xl border-l-4 border-fuchsia-400">
                  <h3 className="text-2xl font-semibold text-fuchsia-700 mb-4">Positive Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-fuchsia-800">Fantastic</p>
                      <p className="text-fuchsia-600 text-sm">Extraordinarily good or attractive</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-fuchsia-800">Friendly</p>
                      <p className="text-fuchsia-600 text-sm">Kind and pleasant; showing friendship</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-fuchsia-800">Fabulous</p>
                      <p className="text-fuchsia-600 text-sm">Extraordinary, especially extraordinarily large</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-fuchsia-800">Fun</p>
                      <p className="text-fuchsia-600 text-sm">Enjoyable, amusing, or entertaining</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl border-l-4 border-pink-400">
                  <h3 className="text-2xl font-semibold text-pink-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-pink-800">Faithful</p>
                      <p className="text-pink-600 text-sm">Loyal, constant, and steadfast</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-pink-800">Fearless</p>
                      <p className="text-pink-600 text-sm">Lacking fear; brave</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-pink-800">Focused</p>
                      <p className="text-pink-600 text-sm">Directing attention and effort toward something</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-pink-800">Flexible</p>
                      <p className="text-pink-600 text-sm">Able to bend easily without breaking</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More F Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                More Adjectives With The Letter F
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-rose-50 to-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-rose-700 mb-3">Characteristics</h4>
                  <ul className="text-rose-600 space-y-1 text-sm">
                    <li>Fast</li>
                    <li>Fresh</li>
                    <li>Full</li>
                    <li>Fair</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-700 mb-3">States</h4>
                  <ul className="text-red-600 space-y-1 text-sm">
                    <li>Fantastic</li>
                    <li>Friendly</li>
                    <li>Focused</li>
                    <li>Flexible</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-700 mb-3">Qualities</h4>
                  <ul className="text-orange-600 space-y-1 text-sm">
                    <li>Fabulous</li>
                    <li>Faithful</li>
                    <li>Fearless</li>
                    <li>Fun</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: F-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-fuchsia-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Match each F-adjective with its correct meaning:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Fantastic&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very friendly</p>
                        <p className="text-gray-600">B) Extraordinarily good or attractive</p>
                        <p className="text-gray-600">C) Being very fabulous</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-fuchsia-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: B) Extraordinarily good or attractive</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Friendly&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very fantastic</p>
                        <p className="text-gray-600">B) Being very fabulous</p>
                        <p className="text-gray-600">C) Kind and pleasant; showing friendship</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-fuchsia-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: C) Kind and pleasant; showing friendship</p>
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
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate F-adjectives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ movie kept everyone entertained.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: fantastic (extraordinarily good or attractive)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ neighbor always helped others.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: friendly (kind and pleasant; showing friendship)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She wore a _____ dress to the party.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: fabulous (extraordinary, especially extraordinarily large)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: F-Adjective Opposites
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-rose-50 to-red-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the opposite of each F-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Fantastic&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Terrible, awful, horrible</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Friendly&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Unfriendly, hostile, mean</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;Fun&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Boring, dull, unpleasant</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for F-Adjectives
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-fuchsia-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Position</h4>
                    <p className="text-gray-600">F-adjectives typically come before the noun they describe: &quot;a fantastic movie&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-fuchsia-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Articles</h4>
                    <p className="text-gray-600">Use &quot;a&quot; before F-adjectives since F is a consonant sound: &quot;a friendly neighbor&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-fuchsia-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Comparatives</h4>
                    <p className="text-gray-600">Many F-adjectives use &quot;more&quot; for comparison: &quot;more fantastic&quot;</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>F-adjectives are abundant in English and offer great variety for expression</li>
                <li>Many F-adjectives have Latin origins, particularly from words like &quot;fantasticus&quot; (fantastic) and &quot;amicus&quot; (friend)</li>
                <li>F-adjectives can convey both positive and negative qualities, providing balance</li>
                <li>Use F-adjectives to add fun and friendliness to your descriptions</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjective-start-with-f" className="block text-fuchsia-600 hover:text-fuchsia-800 font-medium">
                  Adjectives Starting With F
                </Link>
                <Link href="/grammar/adjective-start-with-j" className="block text-fuchsia-600 hover:text-fuchsia-800 font-medium">
                  Adjectives Starting With J
                </Link>
                <Link href="/grammar/adjective-start-with-l" className="block text-fuchsia-600 hover:text-fuchsia-800 font-medium">
                  Adjectives Starting With L
                </Link>
                <Link href="/grammar/adjective-start-with-m" className="block text-fuchsia-600 hover:text-fuchsia-800 font-medium">
                  Adjectives Starting With M
                </Link>
                <Link href="/grammar/adjective-start-with-n" className="block text-fuchsia-600 hover:text-fuchsia-800 font-medium">
                  Adjectives Starting With N
                </Link>
                <Link href="/grammar/adjective-start-with-o" className="block text-fuchsia-600 hover:text-fuchsia-800 font-medium">
                  Adjectives Starting With O
                </Link>
                <Link href="/grammar/adjective-start-with-p" className="block text-fuchsia-600 hover:text-fuchsia-800 font-medium">
                  Adjectives Starting With P
                </Link>
                <Link href="/grammar/adjective-start-with-r" className="block text-fuchsia-600 hover:text-fuchsia-800 font-medium">
                  Adjectives Starting With R
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Letter:</span>
                  <span className="text-gray-600">F</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Count:</span>
                  <span className="text-gray-600">40+ common</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-fuchsia-100">
                F-adjectives are perfect for describing fantastic and friendly qualities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
