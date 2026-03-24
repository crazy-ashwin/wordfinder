"use client"

import Link from "next/link"

export default function PunctuationHyphen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Hyphen Punctuation
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Learn about the hyphen and its proper usage in English
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-violet-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Is a Hyphen?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A hyphen (-) is a punctuation mark used to join words together, form compound words, and break 
                words at the end of lines. It is shorter than a dash and serves specific grammatical functions. 
                Understanding when to use hyphens helps create clear and properly formatted writing.
              </p>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Uses of Hyphens
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-violet-500 pl-6">
                  <h3 className="text-2xl font-semibold text-violet-700 mb-3">Compound Words</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Adjectives</p>
                      <p className="text-violet-600">Well-known, up-to-date</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Nouns</p>
                      <p className="text-violet-600">Mother-in-law, self-esteem</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Numbers</p>
                      <p className="text-violet-600">Twenty-one, thirty-five</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Fractions</p>
                      <p className="text-violet-600">Two-thirds, one-half</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-3">Prefixes and Suffixes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Common Prefixes</p>
                      <p className="text-purple-600">Pre-existing, co-worker</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Capital Letters</p>
                      <p className="text-purple-600">Pre-World War II</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Same Letter</p>
                      <p className="text-purple-600">Re-enter, anti-inflammatory</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Numbers</p>
                      <p className="text-purple-600">Pre-2020, post-9/11</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-fuchsia-500 pl-6">
                  <h3 className="text-2xl font-semibold text-fuchsia-700 mb-3">Other Uses</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-fuchsia-50 p-4 rounded-lg">
                      <p className="font-semibold text-fuchsia-800">Word Division</p>
                      <p className="text-fuchsia-600">Breaking words at line ends</p>
                    </div>
                    <div className="bg-fuchsia-50 p-4 rounded-lg">
                      <p className="font-semibold text-fuchsia-800">Spelling Out</p>
                      <p className="text-fuchsia-600">A-b-c, 1-2-3</p>
                    </div>
                    <div className="bg-fuchsia-50 p-4 rounded-lg">
                      <p className="font-semibold text-fuchsia-800">Ranges</p>
                      <p className="text-fuchsia-600">Pages 1-10, 1990-2000</p>
                    </div>
                    <div className="bg-fuchsia-50 p-4 rounded-lg">
                      <p className="font-semibold text-fuchsia-800">Phone Numbers</p>
                      <p className="text-fuchsia-600">555-123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Examples Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Hyphen Examples
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-xl border-l-4 border-violet-400">
                  <p className="text-lg">
                    <span className="font-semibold text-violet-700">She is a well-known author.</span> (Compound adjective)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-fuchsia-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <p className="text-lg">
                    <span className="font-semibold text-purple-700">I have twenty-one books.</span> (Number)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-fuchsia-50 to-pink-50 p-6 rounded-xl border-l-4 border-fuchsia-400">
                  <p className="text-lg">
                    <span className="font-semibold text-fuchsia-700">The pre-existing condition.</span> (Prefix)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl border-l-4 border-pink-400">
                  <p className="text-lg">
                    <span className="font-semibold text-pink-700">Pages 1-10 contain the introduction.</span> (Range)
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Identify Hyphen Uses
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify the use of hyphens in each sentence:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She is a well-known author.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-violet-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Compound adjective</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I have twenty-one books.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-violet-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Number (21-99)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The pre-existing condition.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-violet-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Prefix (pre-)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Add Hyphens
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-fuchsia-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Add hyphens where needed:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She is a well known author.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: She is a well-known author.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I have twenty one books.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: I have twenty-one books.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The pre existing condition.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: The pre-existing condition.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Compound Words
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-fuchsia-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify which compound words need hyphens:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;up to date&quot; (adjective before noun)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-fuchsia-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: up-to-date (hyphenated when used as adjective)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;mother in law&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-fuchsia-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: mother-in-law (always hyphenated)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;ice cream&quot; (noun)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-fuchsia-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: ice cream (no hyphen, open compound)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Hyphen Rules
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">True or False about hyphen usage:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. Numbers 21-99 are always hyphenated when written as words.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: True</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. All compound words need hyphens.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: False (some are open, some closed)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. Prefixes before capital letters need hyphens.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: True</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Writing Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Using Hyphens
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-violet-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Check the Dictionary</h4>
                    <p className="text-gray-600">When in doubt, consult a dictionary for compound words.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-violet-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Numbers 21-99</h4>
                    <p className="text-gray-600">Always hyphenate numbers from twenty-one to ninety-nine.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-violet-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Prefixes with Capitals</h4>
                    <p className="text-gray-600">Use hyphens when prefixes come before capital letters.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/punctuation" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Punctuation
                </Link>
                <Link href="/grammar/punctuation-dash" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Dash Punctuation
                </Link>
                <Link href="/grammar/compound-words" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Compound Words
                </Link>
                <Link href="/grammar/grammar-rules" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Grammar Rules
                </Link>
                <Link href="/grammar/english-grammar" className="block text-violet-600 hover:text-violet-800 font-medium">
                  English Grammar
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Main Uses:</span>
                  <span className="text-gray-600">3 main uses</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Common Rules:</span>
                  <span className="text-gray-600">4 key rules</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-violet-100">
                Hyphens join words together - they&apos;re like glue for compound words!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 