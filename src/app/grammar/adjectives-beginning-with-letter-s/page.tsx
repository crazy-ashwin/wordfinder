"use client"

import Link from "next/link"

export default function AdjectivesBeginningWithLetterS() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives Beginning With Letter S
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover smart, strong, and splendid adjectives starting with the letter S
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-sky-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Splendid Adjectives Starting With S
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter S introduces us to a world of smart and splendid adjectives that can enhance our language. 
                From &quot;smart&quot; to &quot;strong,&quot; these words help us express intelligence, describe qualities, 
                and add sophistication to our descriptions.
              </p>
            </div>

            {/* Popular S Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives Starting With S
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl border-l-4 border-sky-400">
                  <h3 className="text-2xl font-semibold text-sky-700 mb-4">Positive Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-sky-800">Smart</p>
                      <p className="text-sky-600 text-sm">Intelligent and clever</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-sky-800">Strong</p>
                      <p className="text-sky-600 text-sm">Having great power</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-sky-800">Splendid</p>
                      <p className="text-sky-600 text-sm">Magnificent and excellent</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-sky-800">Sweet</p>
                      <p className="text-sky-600 text-sm">Pleasant and kind</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Sincere</p>
                      <p className="text-blue-600 text-sm">Honest and genuine</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Supportive</p>
                      <p className="text-blue-600 text-sm">Encouraging and helpful</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Successful</p>
                      <p className="text-blue-600 text-sm">Achieving desired results</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Sensitive</p>
                      <p className="text-blue-600 text-sm">Responsive to feelings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More S Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                More Adjectives Starting With S
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-700 mb-3">Characteristics</h4>
                  <ul className="text-indigo-600 space-y-1 text-sm">
                    <li>Small</li>
                    <li>Soft</li>
                    <li>Slow</li>
                    <li>Sharp</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-700 mb-3">States</h4>
                  <ul className="text-purple-600 space-y-1 text-sm">
                    <li>Safe</li>
                    <li>Secure</li>
                    <li>Serious</li>
                    <li>Simple</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-violet-700 mb-3">Qualities</h4>
                  <ul className="text-violet-600 space-y-1 text-sm">
                    <li>Special</li>
                    <li>Spontaneous</li>
                    <li>Spiritual</li>
                    <li>Sophisticated</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: S-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Match each S-adjective with its correct meaning:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Sincere&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very old</p>
                        <p className="text-gray-600">B) Honest and genuine</p>
                        <p className="text-gray-600">C) Being very expensive</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-sky-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: B) Honest and genuine</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Supportive&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very fast</p>
                        <p className="text-gray-600">B) Encouraging and helpful</p>
                        <p className="text-gray-600">C) Being very strong</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-sky-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: B) Encouraging and helpful</p>
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
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate S-adjectives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ student always helped others with their homework.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: supportive (encouraging and helpful)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She had a _____ personality that everyone admired.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: splendid (magnificent and excellent)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ athlete won the championship.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: successful (achieving desired results)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: S-Adjective Opposites
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the opposite of each S-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Small&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Large, big, huge</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Soft&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Hard, firm, rigid</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;Slow&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Fast, quick, rapid</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for S-Adjectives
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-sky-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Position</h4>
                    <p className="text-gray-600">S-adjectives typically come before the noun they describe: &quot;a smart movie&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-sky-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Articles</h4>
                    <p className="text-gray-600">Use &quot;a&quot; before S-adjectives since S is a consonant sound: &quot;a strong person&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-sky-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Comparatives</h4>
                    <p className="text-gray-600">Many S-adjectives use &quot;more&quot; for comparison: &quot;more splendid&quot;</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">What are some common S-adjectives?</h3>
                  <p className="text-gray-600">Common S-adjectives include smart, strong, splendid, sweet, sincere, supportive, successful, sensitive, small, soft, slow, and sharp.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">How do I use S-adjectives in sentences?</h3>
                  <p className="text-gray-600">S-adjectives typically come before nouns: &quot;The smart student&quot; or after linking verbs: &quot;The student is smart.&quot;</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Are all S-adjectives positive?</h3>
                  <p className="text-gray-600">No, while many S-adjectives like &quot;smart&quot; and &quot;splendid&quot; are positive, others like &quot;sad&quot; or &quot;sick&quot; can be neutral or negative depending on context.</p>
                </div>
                
                <div className="pb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Can S-adjectives be used as adverbs?</h3>
                  <p className="text-gray-600">Some S-adjectives can function as adverbs, but they often need to be modified: &quot;He smiled sweetly&quot; (sweetly is an adverb form).</p>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>S-adjectives are excellent for describing smart and splendid qualities</li>
                <li>Many S-adjectives have positive connotations, making them great for compliments</li>
                <li>Some S-adjectives can be used as both adjectives and adverbs</li>
                <li>Pay attention to the spelling of S-adjectives, as some have silent letters</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjectives-that-start-with" className="block text-sky-600 hover:text-sky-800 font-medium">
                  Adjectives That Start With
                </Link>
                <Link href="/grammar/adjectives" className="block text-sky-600 hover:text-sky-800 font-medium">
                  Adjectives
                </Link>
                <Link href="/grammar/descriptive-adjectives" className="block text-sky-600 hover:text-sky-800 font-medium">
                  Descriptive Adjectives
                </Link>
                <Link href="/grammar/adjective-examples" className="block text-sky-600 hover:text-sky-800 font-medium">
                  Adjective Examples
                </Link>
                <Link href="/grammar/adjectives-beginning-with-letter-r" className="block text-sky-600 hover:text-sky-800 font-medium">
                  Adjectives Starting With R
                </Link>
                <Link href="/grammar/adjectives-beginning-with-letter-t" className="block text-sky-600 hover:text-sky-800 font-medium">
                  Adjectives Starting With T
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-sky-600 hover:text-sky-800 font-medium">
                  Parts of Speech
                </Link>
                <Link href="/grammar/english-grammar" className="block text-sky-600 hover:text-sky-800 font-medium">
                  English Grammar
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Letter:</span>
                  <span className="text-gray-600">S</span>
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

            <div className="bg-gradient-to-r from-sky-500 to-blue-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-sky-100">
                S-adjectives are perfect for describing smart and splendid qualities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
