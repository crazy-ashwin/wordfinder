"use client"

import Link from "next/link"

export default function Phrases() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Phrases
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Learn about groups of words that work together but don&apos;t form complete sentences
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
                What Are Phrases?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A phrase is a group of words that work together to express a single idea but does not contain 
                both a subject and a predicate. Phrases function as parts of speech within sentences and can 
                act as nouns, verbs, adjectives, or adverbs. They add detail and variety to our language.
              </p>
            </div>

            {/* Types of Phrases */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Types of Phrases
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-slate-500 pl-6">
                  <h3 className="text-2xl font-semibold text-slate-700 mb-3">1. Noun Phrases</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-semibold text-slate-800">Definition</p>
                      <p className="text-slate-600">A noun and its modifiers</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-semibold text-slate-800">Function</p>
                      <p className="text-slate-600">Acts as a noun in a sentence</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-semibold text-slate-800">Examples</p>
                      <p className="text-slate-600">the red car, my best friend, the tall building</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-semibold text-slate-800">Usage</p>
                      <p className="text-slate-600">Can be subject, object, or complement</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-gray-500 pl-6">
                  <h3 className="text-2xl font-semibold text-gray-700 mb-3">2. Verb Phrases</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800">Definition</p>
                      <p className="text-gray-600">A main verb and its helping verbs</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800">Function</p>
                      <p className="text-gray-600">Shows tense, mood, or voice</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800">Examples</p>
                      <p className="text-gray-600">has been reading, will go, should study</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800">Usage</p>
                      <p className="text-gray-600">Expresses action or state of being</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-zinc-500 pl-6">
                  <h3 className="text-2xl font-semibold text-zinc-700 mb-3">3. Prepositional Phrases</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-zinc-50 p-4 rounded-lg">
                      <p className="font-semibold text-zinc-800">Definition</p>
                      <p className="text-zinc-600">Preposition + object + modifiers</p>
                    </div>
                    <div className="bg-zinc-50 p-4 rounded-lg">
                      <p className="font-semibold text-zinc-800">Function</p>
                      <p className="text-zinc-600">Acts as adjective or adverb</p>
                    </div>
                    <div className="bg-zinc-50 p-4 rounded-lg">
                      <p className="font-semibold text-zinc-800">Examples</p>
                      <p className="text-zinc-600">in the house, on the table, with my friends</p>
                    </div>
                    <div className="bg-zinc-50 p-4 rounded-lg">
                      <p className="font-semibold text-zinc-800">Usage</p>
                      <p className="text-zinc-600">Shows location, time, or relationship</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-slate-500 pl-6">
                  <h3 className="text-2xl font-semibold text-slate-700 mb-3">4. Adjective Phrases</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-semibold text-slate-800">Definition</p>
                      <p className="text-slate-600">A group of words that modifies a noun</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-semibold text-slate-800">Function</p>
                      <p className="text-slate-600">Describes or qualifies nouns</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-semibold text-slate-800">Examples</p>
                      <p className="text-slate-600">full of joy, happy with life, rich in minerals</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-semibold text-slate-800">Usage</p>
                      <p className="text-slate-600">Can be prepositional or participial</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-gray-500 pl-6">
                  <h3 className="text-2xl font-semibold text-gray-700 mb-3">5. Adverb Phrases</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800">Definition</p>
                      <p className="text-gray-600">A group of words that modifies a verb, adjective, or adverb</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800">Function</p>
                      <p className="text-gray-600">Shows how, when, where, or why</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800">Examples</p>
                      <p className="text-gray-600">with great care, in the morning, for a reason</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800">Usage</p>
                      <p className="text-gray-600">Usually prepositional phrases</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phrases in Sentences */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Phrases in Sentences
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-xl border-l-4 border-slate-400">
                  <p className="text-lg">
                    <span className="font-semibold text-slate-700">The red car (noun phrase) drove down the street (prepositional phrase).</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-gray-50 to-zinc-50 p-6 rounded-xl border-l-4 border-gray-400">
                  <p className="text-lg">
                    <span className="font-semibold text-gray-700">She has been reading (verb phrase) in the library (prepositional phrase).</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-zinc-50 to-slate-50 p-6 rounded-xl border-l-4 border-zinc-400">
                  <p className="text-lg">
                    <span className="font-semibold text-zinc-700">The book full of adventure (adjective phrase) is on the shelf (prepositional phrase).</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-xl border-l-4 border-slate-400">
                  <p className="text-lg">
                    <span className="font-semibold text-slate-700">He works with great enthusiasm (adverb phrase) every day (prepositional phrase).</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Identify Phrase Types
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify the type of each phrase:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;the big red car&quot; is a _____ phrase</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-slate-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Noun phrase (the big red car)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;has been studying&quot; is a _____ phrase</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-slate-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Verb phrase (has been studying)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;in the garden&quot; is a _____ phrase</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-slate-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Prepositional phrase (in the garden)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Find Phrases in Sentences
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-gray-50 to-zinc-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the phrases in each sentence:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The beautiful red flower bloomed in the garden.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-gray-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: &quot;The beautiful red flower&quot; (noun phrase), &quot;in the garden&quot; (prepositional phrase)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She has been reading books with great interest.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-gray-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: &quot;has been reading&quot; (verb phrase), &quot;with great interest&quot; (adverb phrase)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The man full of wisdom spoke to the crowd.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-gray-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: &quot;The man&quot; (noun phrase), &quot;full of wisdom&quot; (adjective phrase), &quot;to the crowd&quot; (prepositional phrase)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Phrase vs Clause
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-zinc-50 to-slate-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify if each group of words is a phrase or clause:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;the red car&quot; is a _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-zinc-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Phrase (no subject and predicate)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;the car is red&quot; is a _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-zinc-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Clause (has subject &quot;car&quot; and predicate &quot;is red&quot;)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;in the house&quot; is a _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-zinc-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Phrase (prepositional phrase, no subject and predicate)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Create Sentences with Phrases
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Create sentences using these types of phrases:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: noun phrase + verb phrase + prepositional phrase</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-slate-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: The beautiful red flower has been blooming in the garden.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: adjective phrase + noun phrase + adverb phrase</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-slate-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: The man full of wisdom spoke with great enthusiasm.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: noun phrase + verb phrase + adjective phrase</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-slate-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: The student has been studying hard for the exam.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Important Grammar Rules for Phrases
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">No Subject and Predicate</h4>
                    <p className="text-gray-600">Phrases do not contain both a subject and a predicate like clauses do.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Function as Parts of Speech</h4>
                    <p className="text-gray-600">Phrases function as nouns, verbs, adjectives, or adverbs within sentences.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Prepositional Phrases</h4>
                    <p className="text-gray-600">Always begin with a preposition and end with a noun or pronoun.</p>
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
                <Link href="/grammar/clauses" className="block text-slate-600 hover:text-slate-800 font-medium">
                  Clauses
                </Link>
                <Link href="/grammar/sentence-structure" className="block text-slate-600 hover:text-slate-800 font-medium">
                  Sentence Structure
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-slate-600 hover:text-slate-800 font-medium">
                  Parts of Speech
                </Link>
                <Link href="/grammar/prepositions" className="block text-slate-600 hover:text-slate-800 font-medium">
                  Prepositions
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
                  <span className="text-gray-600">5 main types</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Function:</span>
                  <span className="text-gray-600">Add detail to sentences</span>
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
                Phrases add detail and variety to your sentences!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 