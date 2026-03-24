"use client"

import Link from "next/link"

export default function PunctuationSemicolonRules() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Semicolon Rules
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Learn about semicolons and their proper usage in English
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-indigo-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Is a Semicolon?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A semicolon (;) is a punctuation mark that connects related independent clauses and separates 
                items in complex lists. It is stronger than a comma but weaker than a period. Semicolons help 
                create clear relationships between ideas and improve sentence flow.
              </p>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Uses of Semicolons
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-3">Connecting Independent Clauses</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Related Ideas</p>
                      <p className="text-indigo-600">I love reading; it expands my mind.</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Contrast</p>
                      <p className="text-indigo-600">She likes coffee; I prefer tea.</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Cause and Effect</p>
                      <p className="text-indigo-600">It rained; the game was cancelled.</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Sequence</p>
                      <p className="text-indigo-600">I woke up; I made coffee; I started work.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-3">Complex Lists</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Items with Commas</p>
                      <p className="text-purple-600">I visited Paris, France; London, England; and Rome, Italy.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Long Phrases</p>
                      <p className="text-purple-600">The team includes: John, the captain; Mary, the vice-captain; and Tom, the treasurer.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Descriptive Lists</p>
                      <p className="text-purple-600">The colors are: red, which represents passion; blue, which represents calm; and green, which represents growth.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Multiple Items</p>
                      <p className="text-purple-600">The ingredients are: flour, for structure; sugar, for sweetness; eggs, for binding; and milk, for moisture.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-violet-500 pl-6">
                  <h3 className="text-2xl font-semibold text-violet-700 mb-3">Conjunctive Adverbs</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">However</p>
                      <p className="text-violet-600">I love coffee; however, I can&apos;t drink it at night.</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Therefore</p>
                      <p className="text-violet-600">It was raining; therefore, we stayed inside.</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Moreover</p>
                      <p className="text-violet-600">She is talented; moreover, she works hard.</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Nevertheless</p>
                      <p className="text-violet-600">It was difficult; nevertheless, we succeeded.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Examples Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Semicolon Examples
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border-l-4 border-indigo-400">
                  <p className="text-lg">
                    <span className="font-semibold text-indigo-700">I love reading; it expands my mind.</span> (Related ideas)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <p className="text-lg">
                    <span className="font-semibold text-purple-700">I visited Paris, France; London, England; and Rome, Italy.</span> (Complex list)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-violet-50 to-blue-50 p-6 rounded-xl border-l-4 border-violet-400">
                  <p className="text-lg">
                    <span className="font-semibold text-violet-700">I love coffee; however, I can&apos;t drink it at night.</span> (Conjunctive adverb)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <p className="text-lg">
                    <span className="font-semibold text-blue-700">She likes coffee; I prefer tea.</span> (Contrast)
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Identify Semicolon Uses
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify the use of semicolons in each sentence:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I love reading; it expands my mind.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Connecting related independent clauses</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I visited Paris, France; London, England; and Rome, Italy.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Separating items in a complex list</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I love coffee; however, I can&apos;t drink it at night.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Before a conjunctive adverb</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Add Semicolons
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Add semicolons where needed:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I love reading, it expands my mind.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: I love reading; it expands my mind.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I visited Paris, France, London, England, and Rome, Italy.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: I visited Paris, France; London, England; and Rome, Italy.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I love coffee, however, I can&apos;t drink it at night.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: I love coffee; however, I can&apos;t drink it at night.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Semicolon vs Comma
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-violet-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct punctuation:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. I love reading _____ it expands my mind.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-violet-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: ; (semicolon for independent clauses)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. I love reading, writing _____ and speaking.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-violet-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: , (comma for simple list)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. I visited Paris, France _____ London, England _____ and Rome, Italy.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-violet-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: ; ; (semicolons for complex list with commas)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Semicolon Rules
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">True or False about semicolons:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. Semicolons can connect two independent clauses.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: True</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. Semicolons are stronger than periods.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: False (weaker than periods)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. Semicolons can separate items in complex lists.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
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
                Tips for Using Semicolons
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Related Clauses</h4>
                    <p className="text-gray-600">Use semicolons to connect related independent clauses.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Complex Lists</h4>
                    <p className="text-gray-600">Use semicolons in lists where items contain commas.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Conjunctive Adverbs</h4>
                    <p className="text-gray-600">Use semicolons before conjunctive adverbs like however, therefore.</p>
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
                <Link href="/grammar/punctuation" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Punctuation
                </Link>
                <Link href="/grammar/punctuation-colon" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Colon Punctuation
                </Link>
                <Link href="/grammar/punctuation-comma" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Comma Rules
                </Link>
                <Link href="/grammar/grammar-rules" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Grammar Rules
                </Link>
                <Link href="/grammar/english-grammar" className="block text-indigo-600 hover:text-indigo-800 font-medium">
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
                  <span className="text-gray-600">Intermediate to Advanced</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-indigo-100">
                Semicolons connect related ideas - they&apos;re like bridges between sentences!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 