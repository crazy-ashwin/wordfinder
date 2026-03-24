"use client"

import Link from "next/link"

export default function ConjunctionDefinitionExamples() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Conjunctions: Definition & Examples
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Master the art of connecting words, phrases, and clauses with conjunctions
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-teal-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are Conjunctions?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Conjunctions are words that connect other words, phrases, or clauses together. 
                They act like bridges, helping us join ideas and create more complex sentences. 
                From &quot;and&quot; to &quot;although,&quot; conjunctions are essential for clear and flowing communication.
              </p>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Types of Conjunctions
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-2xl font-semibold text-teal-700 mb-3">Coordinating Conjunctions (FANBOYS)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">For</p>
                      <p className="text-teal-600">I studied hard, for I wanted to pass.</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">And</p>
                      <p className="text-teal-600">She likes coffee and tea.</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Nor</p>
                      <p className="text-teal-600">He didn&apos;t call, nor did he text.</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">But</p>
                      <p className="text-teal-600">I wanted to go, but I was tired.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-2xl font-semibold text-cyan-700 mb-3">Subordinating Conjunctions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Because</p>
                      <p className="text-cyan-600">I stayed home because it was raining.</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Although</p>
                      <p className="text-cyan-600">Although it was late, I kept working.</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">When</p>
                      <p className="text-cyan-600">When you arrive, call me.</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">If</p>
                      <p className="text-cyan-600">If it rains, we&apos;ll stay inside.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-3">Correlative Conjunctions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Either...or</p>
                      <p className="text-blue-600">Either you come or I&apos;ll go alone.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Neither...nor</p>
                      <p className="text-blue-600">Neither the cat nor the dog was home.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Both...and</p>
                      <p className="text-blue-600">Both the teacher and the student agreed.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Not only...but also</p>
                      <p className="text-blue-600">Not only is she smart, but also kind.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Examples Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Examples in Context
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl border-l-4 border-teal-400">
                  <p className="text-lg">
                    <span className="font-semibold text-teal-700">I wanted to go to the party, but</span> I had to study for my exam.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl border-l-4 border-cyan-400">
                  <p className="text-lg">
                    <span className="font-semibold text-cyan-700">Although it was raining,</span> we decided to go hiking.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <p className="text-lg">
                    <span className="font-semibold text-blue-700">Both the teacher and the student</span> were excited about the project.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border-l-4 border-indigo-400">
                  <p className="text-lg">
                    <span className="font-semibold text-indigo-700">When you finish your homework,</span> you can play outside.
                  </p>
                </div>
              </div>
            </div>

            {/* Writing Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Using Conjunctions
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Choose the Right Type</h4>
                    <p className="text-gray-600">Use coordinating conjunctions for equal ideas and subordinating for dependent clauses.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Use Commas Correctly</h4>
                    <p className="text-gray-600">Place commas before coordinating conjunctions when joining independent clauses.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Avoid Overuse</h4>
                    <p className="text-gray-600">Don&apos;t start every sentence with a conjunction; vary your sentence structure.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct conjunction for each sentence:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I wanted to go to the movies _____ I had to study.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: but</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">_____ it was late, I kept reading.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Although</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">_____ the teacher _____ the students were happy.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Both...and</p>
                      </details>
                    </div>
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
                <Link href="/grammar/coordinating-conjunctions" className="block text-teal-600 hover:text-teal-800 font-medium">
                  Coordinating Conjunctions
                </Link>
                <Link href="/grammar/subordinating-conjunctions" className="block text-teal-600 hover:text-teal-800 font-medium">
                  Subordinating Conjunctions
                </Link>
                <Link href="/grammar/compound-sentence" className="block text-teal-600 hover:text-teal-800 font-medium">
                  Compound Sentences
                </Link>
                <Link href="/grammar/complex-sentence" className="block text-teal-600 hover:text-teal-800 font-medium">
                  Complex Sentences
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-teal-600 hover:text-teal-800 font-medium">
                  Parts of Speech
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Conjunction Types:</span>
                  <span className="text-gray-600">3 main types</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">FANBOYS:</span>
                  <span className="text-gray-600">7 conjunctions</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner to Advanced</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-teal-100">
                Conjunctions are the glue that holds sentences together - master them to create more complex and interesting writing!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 