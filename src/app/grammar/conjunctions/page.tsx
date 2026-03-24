"use client"

import Link from "next/link"

export default function Conjunctions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Conjunctions
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Learn about the different types of conjunctions and how to use them to connect words, phrases, and clauses
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are Conjunctions?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Conjunctions are words that connect or join other words, phrases, or clauses together. They act as 
                bridges between different parts of a sentence, helping to create smooth and logical connections. 
                Understanding conjunctions is essential for building complex sentences and expressing relationships between ideas.
              </p>
            </div>

            {/* Types of Conjunctions */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Types of Conjunctions
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-3">1. Coordinating Conjunctions (FANBOYS)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">For</p>
                      <p className="text-blue-600">Shows reason or purpose</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">And</p>
                      <p className="text-blue-600">Adds information</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Nor</p>
                      <p className="text-blue-600">Shows negative alternative</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">But</p>
                      <p className="text-blue-600">Shows contrast</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Or</p>
                      <p className="text-blue-600">Shows choice</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Yet</p>
                      <p className="text-blue-600">Shows contrast or exception</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">So</p>
                      <p className="text-blue-600">Shows result or consequence</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-3">2. Subordinating Conjunctions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Time</p>
                      <p className="text-indigo-600">when, while, before, after, since, until</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Cause</p>
                      <p className="text-indigo-600">because, since, as, given that</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Condition</p>
                      <p className="text-indigo-600">if, unless, provided that, in case</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Purpose</p>
                      <p className="text-indigo-600">so that, in order that, lest</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-3">3. Correlative Conjunctions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Both...and</p>
                      <p className="text-purple-600">Shows two things together</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Either...or</p>
                      <p className="text-purple-600">Shows choice between two</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Neither...nor</p>
                      <p className="text-purple-600">Shows negative choice</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Not only...but also</p>
                      <p className="text-purple-600">Emphasizes two points</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conjunctions in Sentences */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Conjunctions in Sentences
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <p className="text-lg">
                    <span className="font-semibold text-blue-700">Coordinating:</span> I like coffee <strong>and</strong> tea. (connects two nouns)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border-l-4 border-indigo-400">
                  <p className="text-lg">
                    <span className="font-semibold text-indigo-700">Subordinating:</span> I&apos;ll call you <strong>when</strong> I arrive. (connects dependent clause)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <p className="text-lg">
                    <span className="font-semibold text-purple-700">Correlative:</span> <strong>Both</strong> the book <strong>and</strong> the movie were excellent. (emphasizes two things)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <p className="text-lg">
                    <span className="font-semibold text-blue-700">Complex:</span> I studied hard <strong>because</strong> I wanted to pass the exam, <strong>but</strong> I was still nervous.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Identify Conjunction Types
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify the type of each conjunction:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;And&quot; in &quot;I like pizza and pasta&quot; is a _____ conjunction.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Coordinating conjunction (connects two nouns)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Because&quot; in &quot;I stayed home because I was sick&quot; is a _____ conjunction.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Subordinating conjunction (shows cause)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;Both...and&quot; in &quot;Both the teacher and the student agreed&quot; is a _____ conjunction.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Correlative conjunction (emphasizes two things)</p>
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
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate conjunctions:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I like coffee _____ I don&apos;t like tea.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: but (shows contrast)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">_____ you study hard, you will pass the exam.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: If (shows condition)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">_____ the movie _____ the book was interesting.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Both...and (emphasizes two things)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Fix the Sentences
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fix these sentences by adding appropriate conjunctions:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I wanted to go to the party. I was too tired.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: I wanted to go to the party, <strong>but</strong> I was too tired.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She studied hard. She wanted to get good grades.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: She studied hard <strong>because</strong> she wanted to get good grades.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">You can have pizza. You can have pasta.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: You can have <strong>either</strong> pizza <strong>or</strong> pasta.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Important Grammar Rules for Conjunctions
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Comma Usage</h4>
                    <p className="text-gray-600">Use a comma before coordinating conjunctions when connecting two independent clauses.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Subordinating Conjunctions</h4>
                    <p className="text-gray-600">Subordinating conjunctions introduce dependent clauses and show relationships between ideas.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Correlative Pairs</h4>
                    <p className="text-gray-600">Correlative conjunctions must be used in pairs and maintain parallel structure.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>Remember FANBOYS for coordinating conjunctions: For, And, Nor, But, Or, Yet, So</li>
                <li>Subordinating conjunctions create complex sentences with dependent and independent clauses</li>
                <li>Correlative conjunctions must be used in pairs and maintain parallel structure</li>
                <li>Use commas appropriately when connecting independent clauses with coordinating conjunctions</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/parts-of-speech" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Parts of Speech
                </Link>
                <Link href="/grammar/english-grammar" className="block text-blue-600 hover:text-blue-800 font-medium">
                  English Grammar
                </Link>
                <Link href="/grammar/complex-sentences" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Complex Sentences
                </Link>
                <Link href="/grammar/compound-sentences" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Compound Sentences
                </Link>
                <Link href="/grammar/clauses" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Clauses
                </Link>
                <Link href="/grammar/grammar-rules" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Grammar Rules
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Types:</span>
                  <span className="text-gray-600">3 main types</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Function:</span>
                  <span className="text-gray-600">Connect words/clauses</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-blue-100">
                Remember FANBOYS for coordinating conjunctions - it makes them easy to identify!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
