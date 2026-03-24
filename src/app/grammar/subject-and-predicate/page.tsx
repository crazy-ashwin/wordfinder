"use client"

import Link from "next/link"

export default function SubjectAndPredicate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Subject and Predicate
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Learn about the two main parts of a sentence and how they work together
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are Subject and Predicate?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every complete sentence has two main parts: the subject and the predicate. The subject tells us 
                who or what the sentence is about, while the predicate tells us what the subject does or what 
                happens to it. Understanding these two parts is essential for building clear and complete sentences.
              </p>
            </div>

            {/* Subject */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                The Subject
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-2xl font-semibold text-cyan-700 mb-3">Definition</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">What is the Subject?</p>
                      <p className="text-cyan-600">The person, place, thing, or idea that the sentence is about</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Function</p>
                      <p className="text-cyan-600">Answers the question &quot;Who?&quot; or &quot;What?&quot;</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Position</p>
                      <p className="text-cyan-600">Usually comes at the beginning of the sentence</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Examples</p>
                      <p className="text-cyan-600">The cat, John, My sister, The book</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-3">Types of Subjects</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Simple Subject</p>
                      <p className="text-blue-600">The main noun or pronoun</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Complete Subject</p>
                      <p className="text-blue-600">Simple subject plus all its modifiers</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Compound Subject</p>
                      <p className="text-blue-600">Two or more subjects joined by and/or</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Implied Subject</p>
                      <p className="text-blue-600">You (in commands)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Predicate */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                The Predicate
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-3">Definition</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">What is the Predicate?</p>
                      <p className="text-indigo-600">The part that tells what the subject does or what happens to it</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Function</p>
                      <p className="text-indigo-600">Contains the verb and all words that complete the thought</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Position</p>
                      <p className="text-indigo-600">Usually comes after the subject</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Examples</p>
                      <p className="text-indigo-600">runs fast, is happy, ate dinner</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-2xl font-semibold text-cyan-700 mb-3">Types of Predicates</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Simple Predicate</p>
                      <p className="text-cyan-600">Just the verb or verb phrase</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Complete Predicate</p>
                      <p className="text-cyan-600">Verb plus all words that complete the thought</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Compound Predicate</p>
                      <p className="text-cyan-600">Two or more verbs for the same subject</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Predicate Nominative</p>
                      <p className="text-cyan-600">Noun that renames the subject</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Examples */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Subject and Predicate Examples
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl border-l-4 border-cyan-400">
                  <p className="text-lg">
                    <span className="font-semibold text-cyan-700">The cat (subject) sleeps peacefully (predicate).</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <p className="text-lg">
                    <span className="font-semibold text-blue-700">My sister (subject) loves reading books (predicate).</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 p-6 rounded-xl border-l-4 border-indigo-400">
                  <p className="text-lg">
                    <span className="font-semibold text-indigo-700">John and Mary (compound subject) went to the store (predicate).</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl border-l-4 border-cyan-400">
                  <p className="text-lg">
                    <span className="font-semibold text-cyan-700">The beautiful flower (complete subject) bloomed in the garden (complete predicate).</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Identify Subject and Predicate
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify the subject and predicate in each sentence:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The dog runs in the park.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Subject: The dog | Predicate: runs in the park</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">My sister loves chocolate ice cream.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Subject: My sister | Predicate: loves chocolate ice cream</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The children played games and laughed loudly.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Subject: The children | Predicate: played games and laughed loudly</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Simple vs Complete
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify simple and complete subjects/predicates:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The big red car drove down the street.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Simple Subject: car | Complete Subject: The big red car | Simple Predicate: drove | Complete Predicate: drove down the street</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">My intelligent sister studies mathematics.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Simple Subject: sister | Complete Subject: My intelligent sister | Simple Predicate: studies | Complete Predicate: studies mathematics</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Compound Subjects and Predicates
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify compound subjects and predicates:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">John and Mary went to the store.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Compound Subject: John and Mary | Simple Predicate: went</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The cat slept and purred contentedly.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Simple Subject: cat | Compound Predicate: slept and purred</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Tom and Jerry ran and played in the garden.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Compound Subject: Tom and Jerry | Compound Predicate: ran and played</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Create Sentences
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Create sentences with these subject and predicate combinations:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: compound subject + simple predicate</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: John and Mary went to the party.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: simple subject + compound predicate</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: The dog ran and played in the park.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: complete subject + complete predicate</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: The beautiful red flower bloomed in the garden.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Important Grammar Rules
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Every Complete Sentence</h4>
                    <p className="text-gray-600">Must have both a subject and a predicate to be complete.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Subject-Verb Agreement</h4>
                    <p className="text-gray-600">The subject and verb must agree in number (singular/plural).</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Compound Elements</h4>
                    <p className="text-gray-600">Compound subjects and predicates are joined by and, or, or nor.</p>
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
                <Link href="/grammar/sentence-structure" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Sentence Structure
                </Link>
                <Link href="/grammar/verbs" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Verbs
                </Link>
                <Link href="/grammar/nouns" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Nouns
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Parts of Speech
                </Link>
                <Link href="/grammar/english-grammar" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  English Grammar
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Parts:</span>
                  <span className="text-gray-600">2 main parts</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Function:</span>
                  <span className="text-gray-600">Build complete sentences</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-cyan-100">
                Every complete sentence needs both a subject and a predicate!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 