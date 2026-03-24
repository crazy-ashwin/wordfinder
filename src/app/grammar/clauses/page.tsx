"use client"

import Link from "next/link"

export default function Clauses() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Clauses
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Learn about independent and dependent clauses and how they form sentences
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
                What Are Clauses?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A clause is a group of words that contains a subject and a predicate. Clauses are the building 
                blocks of sentences and can be either independent (complete thoughts) or dependent (incomplete 
                thoughts). Understanding clauses helps you write more complex and varied sentences.
              </p>
            </div>

            {/* Independent Clauses */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Independent Clauses
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-violet-500 pl-6">
                  <h3 className="text-2xl font-semibold text-violet-700 mb-3">Definition</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">What is an Independent Clause?</p>
                      <p className="text-violet-600">A complete thought that can stand alone as a sentence</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Characteristics</p>
                      <p className="text-violet-600">Has a subject and predicate, expresses complete idea</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Function</p>
                      <p className="text-violet-600">Can be a sentence by itself</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Examples</p>
                      <p className="text-violet-600">I love reading. The cat sleeps. She runs fast.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-3">Types of Independent Clauses</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Simple Sentence</p>
                      <p className="text-purple-600">One independent clause</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Compound Sentence</p>
                      <p className="text-purple-600">Two or more independent clauses</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Simple Example</p>
                      <p className="text-purple-600">The dog barks.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Compound Example</p>
                      <p className="text-purple-600">The dog barks, and the cat runs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dependent Clauses */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Dependent Clauses
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-fuchsia-500 pl-6">
                  <h3 className="text-2xl font-semibold text-fuchsia-700 mb-3">Definition</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-fuchsia-50 p-4 rounded-lg">
                      <p className="font-semibold text-fuchsia-800">What is a Dependent Clause?</p>
                      <p className="text-fuchsia-600">An incomplete thought that cannot stand alone</p>
                    </div>
                    <div className="bg-fuchsia-50 p-4 rounded-lg">
                      <p className="font-semibold text-fuchsia-800">Characteristics</p>
                      <p className="text-fuchsia-600">Has subject and predicate but needs more information</p>
                    </div>
                    <div className="bg-fuchsia-50 p-4 rounded-lg">
                      <p className="font-semibold text-fuchsia-800">Function</p>
                      <p className="text-fuchsia-600">Must be attached to an independent clause</p>
                    </div>
                    <div className="bg-fuchsia-50 p-4 rounded-lg">
                      <p className="font-semibold text-fuchsia-800">Examples</p>
                      <p className="text-fuchsia-600">When I arrived, Because it was raining, If you study</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-violet-500 pl-6">
                  <h3 className="text-2xl font-semibold text-violet-700 mb-3">Types of Dependent Clauses</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Adverb Clauses</p>
                      <p className="text-violet-600">Modify verbs (when, where, why, how)</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Adjective Clauses</p>
                      <p className="text-violet-600">Modify nouns (who, which, that)</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Noun Clauses</p>
                      <p className="text-violet-600">Function as nouns (what, that, whether)</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Examples</p>
                      <p className="text-violet-600">When I arrived, The book that I read, What you said</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clause Examples */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Clause Examples
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-xl border-l-4 border-violet-400">
                  <p className="text-lg">
                    <span className="font-semibold text-violet-700">Independent: &quot;I love reading.&quot;</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-fuchsia-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <p className="text-lg">
                    <span className="font-semibold text-purple-700">Dependent: &quot;When I have time&quot; (needs more information)</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-fuchsia-50 to-violet-50 p-6 rounded-xl border-l-4 border-fuchsia-400">
                  <p className="text-lg">
                    <span className="font-semibold text-fuchsia-700">Complex: &quot;When I have time, I love reading.&quot; (dependent + independent)</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-xl border-l-4 border-violet-400">
                  <p className="text-lg">
                    <span className="font-semibold text-violet-700">Compound: &quot;I love reading, and I write stories.&quot; (independent + independent)</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Identify Clause Types
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify if each clause is independent or dependent:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;I love reading books.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-violet-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Independent clause (complete thought, can stand alone)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;When I have time&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-violet-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Dependent clause (incomplete thought, needs more information)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;The cat sleeps peacefully.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-violet-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Independent clause (complete thought, can stand alone)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Find Dependent Clauses
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-fuchsia-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the dependent clauses in each sentence:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">When I arrived home, I found a letter on the table.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: &quot;When I arrived home&quot; (adverb clause)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The book that I read was very interesting.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: &quot;that I read&quot; (adjective clause)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I know what you said yesterday.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: &quot;what you said yesterday&quot; (noun clause)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Sentence Types
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-fuchsia-50 to-violet-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify the sentence type:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;The dog barks.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-fuchsia-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Simple sentence (one independent clause)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;The dog barks, and the cat runs.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-fuchsia-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Compound sentence (two independent clauses)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;When the dog barks, the cat runs.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-fuchsia-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Complex sentence (dependent + independent clause)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Create Sentences with Clauses
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Create sentences using these clause combinations:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: adverb clause + independent clause</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-violet-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: When I have time, I love reading books.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: independent clause + adjective clause</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-violet-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: The book that I read was very interesting.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: independent clause + independent clause</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-violet-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: I love reading, and I write stories.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Important Grammar Rules for Clauses
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-violet-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Complete Sentences</h4>
                    <p className="text-gray-600">Every sentence must contain at least one independent clause.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-violet-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Dependent Clauses</h4>
                    <p className="text-gray-600">Cannot stand alone and must be attached to an independent clause.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-violet-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Punctuation</h4>
                    <p className="text-gray-600">Use commas to separate dependent clauses from independent clauses.</p>
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
                <Link href="/grammar/sentence-structure" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Sentence Structure
                </Link>
                <Link href="/grammar/complex-sentences" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Complex Sentences
                </Link>
                <Link href="/grammar/phrases" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Phrases
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Parts of Speech
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
                  <span className="font-medium">Types:</span>
                  <span className="text-gray-600">2 main types</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Function:</span>
                  <span className="text-gray-600">Build sentences</span>
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
                Clauses are the building blocks of complex sentences!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 