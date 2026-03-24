"use client"

import Link from "next/link"

export default function AdjectivesWithP() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives With P
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover powerful, peaceful, and perfect adjectives featuring the letter P
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purple-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Powerful Adjectives With P
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter P introduces us to a world of powerful and peaceful adjectives that can enhance our language. 
                From &quot;powerful&quot; to &quot;perfect,&quot; these words help us express strength, describe qualities, 
                and add peace to our descriptions.
              </p>
            </div>

            {/* Popular P Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives With P
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-4">Positive Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-purple-800">Powerful</p>
                      <p className="text-purple-600 text-sm">Having great power or strength</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-purple-800">Peaceful</p>
                      <p className="text-purple-600 text-sm">Free from disturbance; tranquil</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-purple-800">Perfect</p>
                      <p className="text-purple-600 text-sm">Having all the required or desirable elements</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-purple-800">Patient</p>
                      <p className="text-purple-600 text-sm">Able to accept or tolerate delays</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border-l-4 border-indigo-400">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-indigo-800">Polite</p>
                      <p className="text-indigo-600 text-sm">Having or showing behavior that is respectful</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-indigo-800">Positive</p>
                      <p className="text-indigo-600 text-sm">Constructive, optimistic, or confident</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-indigo-800">Passionate</p>
                      <p className="text-indigo-600 text-sm">Showing or caused by strong feelings</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-indigo-800">Persistent</p>
                      <p className="text-indigo-600 text-sm">Continuing firmly or obstinately</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More P Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                More Adjectives With P
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-3">Characteristics</h4>
                  <ul className="text-blue-600 space-y-1 text-sm">
                    <li>Pretty</li>
                    <li>Proud</li>
                    <li>Pure</li>
                    <li>Precious</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-cyan-700 mb-3">States</h4>
                  <ul className="text-cyan-600 space-y-1 text-sm">
                    <li>Powerful</li>
                    <li>Peaceful</li>
                    <li>Positive</li>
                    <li>Patient</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-700 mb-3">Qualities</h4>
                  <ul className="text-teal-600 space-y-1 text-sm">
                    <li>Perfect</li>
                    <li>Polite</li>
                    <li>Passionate</li>
                    <li>Persistent</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: P-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Match each P-adjective with its correct meaning:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Powerful&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very peaceful</p>
                        <p className="text-gray-600">B) Having great power or strength</p>
                        <p className="text-gray-600">C) Being very perfect</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: B) Having great power or strength</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Peaceful&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very powerful</p>
                        <p className="text-gray-600">B) Being very perfect</p>
                        <p className="text-gray-600">C) Free from disturbance; tranquil</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: C) Free from disturbance; tranquil</p>
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
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate P-adjectives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ engine could move mountains.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: powerful (having great power or strength)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ garden was a place of calm.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: peaceful (free from disturbance; tranquil)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She gave a _____ performance on stage.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: perfect (having all the required or desirable elements)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: P-Adjective Opposites
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the opposite of each P-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Powerful&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Weak, powerless, feeble</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Peaceful&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Chaotic, violent, turbulent</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;Perfect&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Imperfect, flawed, defective</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for P-Adjectives
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Position</h4>
                    <p className="text-gray-600">P-adjectives typically come before the noun they describe: &quot;a powerful engine&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Articles</h4>
                    <p className="text-gray-600">Use &quot;a&quot; before P-adjectives since P is a consonant sound: &quot;a peaceful garden&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Comparatives</h4>
                    <p className="text-gray-600">Many P-adjectives use &quot;more&quot; for comparison: &quot;more powerful&quot;</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>P-adjectives are abundant in English and offer great variety for expression</li>
                <li>Many P-adjectives have Latin origins, particularly from words like &quot;potens&quot; (powerful) and &quot;pax&quot; (peace)</li>
                <li>P-adjectives can convey both positive and negative qualities, providing balance</li>
                <li>Use P-adjectives to add power and peace to your descriptions</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjective-start-with-f" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Adjectives Starting With F
                </Link>
                <Link href="/grammar/adjective-start-with-j" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Adjectives Starting With J
                </Link>
                <Link href="/grammar/adjective-start-with-l" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Adjectives Starting With L
                </Link>
                <Link href="/grammar/adjective-start-with-m" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Adjectives Starting With M
                </Link>
                <Link href="/grammar/adjective-start-with-n" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Adjectives Starting With N
                </Link>
                <Link href="/grammar/adjective-start-with-o" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Adjectives Starting With O
                </Link>
                <Link href="/grammar/adjective-start-with-p" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Adjectives Starting With P
                </Link>
                <Link href="/grammar/adjective-start-with-r" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Adjectives Starting With R
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Letter:</span>
                  <span className="text-gray-600">P</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Count:</span>
                  <span className="text-gray-600">40+ common</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-purple-100">
                P-adjectives are perfect for describing powerful and peaceful qualities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
