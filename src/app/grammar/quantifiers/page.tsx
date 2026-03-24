"use client"

import Link from "next/link"

export default function Quantifiers() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Quantifiers
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Learn how to use quantifiers to express amounts, quantities, and degrees in English
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-slate-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are Quantifiers?
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Quantifiers are words or phrases that indicate the amount or quantity of something. They help us express how much, how many, or to what degree something exists. Quantifiers work with <Link href="/grammar/nouns" className="text-slate-600 hover:text-slate-800 font-semibold">nouns</Link> and can be used with both countable and uncountable nouns. Understanding quantifiers is essential for precise communication and is a key part of <Link href="/grammar/english-grammar" className="text-slate-600 hover:text-slate-800 font-semibold">English grammar</Link>.
              </p>
            </div>

            {/* Types of Quantifiers */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Types of Quantifiers
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-slate-500 pl-6">
                  <h3 className="text-2xl font-semibold text-slate-700 mb-3">1. Countable Noun Quantifiers</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-semibold text-slate-800">Definition</p>
                      <p className="text-slate-600">Used with countable nouns</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-semibold text-slate-800">Examples</p>
                      <p className="text-slate-600">many, few, several, a couple</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-semibold text-slate-800">Usage</p>
                      <p className="text-slate-600">With plural countable nouns</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-semibold text-slate-800">Sentence</p>
                      <p className="text-slate-600">I have many books.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-gray-500 pl-6">
                  <h3 className="text-2xl font-semibold text-gray-700 mb-3">2. Uncountable Noun Quantifiers</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800">Definition</p>
                      <p className="text-gray-600">Used with uncountable nouns</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800">Examples</p>
                      <p className="text-gray-600">much, little, a lot of, some</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800">Usage</p>
                      <p className="text-gray-600">With singular uncountable nouns</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800">Sentence</p>
                      <p className="text-gray-600">There is much water.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-zinc-500 pl-6">
                  <h3 className="text-2xl font-semibold text-zinc-700 mb-3">3. Universal Quantifiers</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-zinc-50 p-4 rounded-lg">
                      <p className="font-semibold text-zinc-800">Definition</p>
                      <p className="text-zinc-600">Refer to all or none</p>
                    </div>
                    <div className="bg-zinc-50 p-4 rounded-lg">
                      <p className="font-semibold text-zinc-800">Examples</p>
                      <p className="text-zinc-600">all, every, each, none</p>
                    </div>
                    <div className="bg-zinc-50 p-4 rounded-lg">
                      <p className="font-semibold text-zinc-800">Usage</p>
                      <p className="text-zinc-600">Emphasize totality or absence</p>
                    </div>
                    <div className="bg-zinc-50 p-4 rounded-lg">
                      <p className="font-semibold text-zinc-800">Sentence</p>
                      <p className="text-zinc-600">All students passed the test.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Quantifiers */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Common Quantifiers and Their Uses
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-700 mb-4">Small Amounts</h3>
                  <div className="space-y-3">
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <span className="font-semibold text-slate-800">A few:</span>
                      <span className="text-slate-600 ml-2">Small positive number (countable)</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <span className="font-semibold text-slate-800">A little:</span>
                      <span className="text-slate-600 ml-2">Small positive amount (uncountable)</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <span className="font-semibold text-slate-800">Some:</span>
                      <span className="text-slate-600 ml-2">Indefinite amount (both types)</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <span className="font-semibold text-slate-800">Several:</span>
                      <span className="text-slate-600 ml-2">More than a few (countable)</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-700 mb-4">Large Amounts</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="font-semibold text-gray-800">Many:</span>
                      <span className="text-gray-600 ml-2">Large number (countable)</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="font-semibold text-gray-800">Much:</span>
                      <span className="text-gray-600 ml-2">Large amount (uncountable)</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="font-semibold text-gray-800">A lot of:</span>
                      <span className="text-gray-600 ml-2">Large amount (both types)</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="font-semibold text-gray-800">Plenty of:</span>
                      <span className="text-gray-600 ml-2">More than enough (both types)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage Patterns */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                How to Use Quantifiers
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-zinc-500 pl-6">
                  <h3 className="text-2xl font-semibold text-zinc-700 mb-3">1. With Countable Nouns</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-zinc-50 p-4 rounded-lg">
                      <p className="font-semibold text-zinc-800">Rule</p>
                      <p className="text-zinc-600">Use with plural countable nouns</p>
                    </div>
                    <div className="bg-zinc-50 p-4 rounded-lg">
                      <p className="font-semibold text-zinc-800">Examples</p>
                      <p className="text-zinc-600">many books, few cars, several people</p>
                    </div>
                    <div className="bg-zinc-50 p-4 rounded-lg">
                      <p className="font-semibold text-zinc-800">Usage</p>
                      <p className="text-zinc-600">Express number of items</p>
                    </div>
                    <div className="bg-zinc-50 p-4 rounded-lg">
                      <p className="font-semibold text-zinc-800">Sentence</p>
                      <p className="text-zinc-600">I have many friends.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-slate-500 pl-6">
                  <h3 className="text-2xl font-semibold text-slate-700 mb-3">2. With Uncountable Nouns</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-semibold text-slate-800">Rule</p>
                      <p className="text-slate-600">Use with singular uncountable nouns</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-semibold text-slate-800">Examples</p>
                      <p className="text-slate-600">much water, little time, some money</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-semibold text-slate-800">Usage</p>
                      <p className="text-slate-600">Express amount of substance</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-semibold text-slate-800">Sentence</p>
                      <p className="text-slate-600">There is much work to do.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Choose the Right Quantifier
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Select the appropriate quantifier for each sentence:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;I have _____ friends in this city.&quot; (countable noun)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-slate-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: many, several, a few</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;There is _____ water in the bottle.&quot; (uncountable noun)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-slate-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: much, little, some, a lot of</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;_____ students passed the exam.&quot; (emphasizing totality)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-slate-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All, Every</p>
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
                <div className="bg-gradient-to-r from-gray-50 to-zinc-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate quantifiers:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;I have _____ books on my shelf.&quot; (small positive number)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-gray-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: a few, several</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;There is _____ time left before the deadline.&quot; (small amount)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-gray-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: little, a little</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;_____ people attended the concert.&quot; (large number)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-gray-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Many, A lot of</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Countable vs Uncountable
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-zinc-50 to-slate-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct quantifier for each noun type:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;I need _____ advice.&quot; (uncountable)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-zinc-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: some, much, a little (not many)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;She has _____ ideas.&quot; (countable)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-zinc-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: many, several, a few (not much)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;There is _____ furniture in the room.&quot; (uncountable)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-zinc-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: some, much, little (not many)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Quantifier Challenge
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Create sentences using quantifiers:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: &quot;many&quot; + countable noun + positive statement</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-slate-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: I have many friends who are helpful.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: &quot;much&quot; + uncountable noun + negative statement</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-slate-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: There isn&apos;t much time left.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: &quot;all&quot; + countable noun + general statement</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-slate-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: All students must attend the meeting.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>• Use countable quantifiers (many, few) with plural countable nouns</li>
                <li>• Use uncountable quantifiers (much, little) with singular uncountable nouns</li>
                <li>• Some quantifiers work with both types of nouns (some, a lot of, plenty of)</li>
                <li>• Universal quantifiers (all, every, each) emphasize totality</li>
                <li>• Choose quantifiers based on whether you want to emphasize positive or negative amounts</li>
              </ul>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Important Rules for Quantifiers
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Noun Type Matters</h4>
                    <p className="text-gray-600">Choose quantifiers based on whether the noun is countable or uncountable.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Context and Meaning</h4>
                    <p className="text-gray-600">Consider whether you want to emphasize positive or negative amounts.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Formal vs. Informal</h4>
                    <p className="text-gray-600">Some quantifiers are more formal (much/many) while others are more casual (a lot of).</p>
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
                <Link href="/grammar/nouns" className="block text-slate-600 hover:text-slate-800 font-medium">
                  Nouns
                </Link>
                <Link href="/grammar/articles" className="block text-slate-600 hover:text-slate-800 font-medium">
                  Articles
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-slate-600 hover:text-slate-800 font-medium">
                  Parts of Speech
                </Link>
                <Link href="/grammar/sentence-structure" className="block text-slate-600 hover:text-slate-800 font-medium">
                  Sentence Structure
                </Link>
                <Link href="/grammar/english-grammar" className="block text-slate-600 hover:text-slate-800 font-medium">
                  English Grammar
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Types:</span>
                  <span className="text-gray-600">3 main categories</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Function:</span>
                  <span className="text-gray-600">Express quantities</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-500 to-gray-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-slate-100">
                Quantifiers help you express precise amounts and make your English more descriptive!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
