"use client"

import Link from "next/link"

export default function ComplexSentences() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Complex Sentences
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Learn how to combine independent and dependent clauses to create complex sentences
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
                What Are Complex Sentences?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A complex sentence is a sentence that contains one independent clause and at least one dependent clause. 
                Complex sentences help you express more detailed and nuanced ideas by showing relationships between different thoughts.
              </p>
            </div>

            {/* Structure of Complex Sentences */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Structure of Complex Sentences
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-3">Independent Clause</h3>
                  <p className="text-indigo-600">A complete thought that can stand alone as a sentence.</p>
                  <p className="text-indigo-800 font-semibold mt-2">Example: I went to the park.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-3">Dependent Clause</h3>
                  <p className="text-blue-600">An incomplete thought that cannot stand alone and depends on the independent clause.</p>
                  <p className="text-blue-800 font-semibold mt-2">Example: because it was sunny</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-2xl font-semibold text-cyan-700 mb-3">Combined Example</h3>
                  <p className="text-cyan-600">I went to the park <span className="font-semibold">because it was sunny</span>.</p>
                </div>
              </div>
            </div>

            {/* Subordinating Conjunctions */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Common Subordinating Conjunctions
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-indigo-50 p-4 rounded-lg text-center font-semibold text-indigo-700">because</div>
                <div className="bg-blue-50 p-4 rounded-lg text-center font-semibold text-blue-700">although</div>
                <div className="bg-cyan-50 p-4 rounded-lg text-center font-semibold text-cyan-700">since</div>
                <div className="bg-indigo-50 p-4 rounded-lg text-center font-semibold text-indigo-700">when</div>
                <div className="bg-blue-50 p-4 rounded-lg text-center font-semibold text-blue-700">if</div>
                <div className="bg-cyan-50 p-4 rounded-lg text-center font-semibold text-cyan-700">while</div>
                <div className="bg-indigo-50 p-4 rounded-lg text-center font-semibold text-indigo-700">after</div>
                <div className="bg-blue-50 p-4 rounded-lg text-center font-semibold text-blue-700">before</div>
              </div>
            </div>

            {/* Complex Sentences in Context */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Complex Sentences in Context
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border-l-4 border-indigo-400">
                  <p className="text-lg">
                    <span className="font-semibold text-indigo-700">Although it was raining, we went outside to play.</span>
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <p className="text-lg">
                    <span className="font-semibold text-blue-700">She finished her homework before she watched TV.</span>
                  </p>
                </div>
                <div className="bg-gradient-to-r from-cyan-50 to-indigo-50 p-6 rounded-xl border-l-4 border-cyan-400">
                  <p className="text-lg">
                    <span className="font-semibold text-cyan-700">If you study hard, you will do well on the test.</span>
                  </p>
                </div>
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border-l-4 border-indigo-400">
                  <p className="text-lg">
                    <span className="font-semibold text-indigo-700">When the bell rings, the students go to class.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Identify Clauses
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify the independent and dependent clauses:</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Because it was late, we went home.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Dependent: Because it was late | Independent: we went home</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She smiled when she saw her friend.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Independent: She smiled | Dependent: when she saw her friend</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">If you are ready, we can begin.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Dependent: If you are ready | Independent: we can begin</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Combine Clauses
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Combine the clauses to make a complex sentence:</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I finished my work. I could go outside. (since)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Since I finished my work, I could go outside.</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">He was tired. He kept working. (although)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Although he was tired, he kept working.</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">You call me. I will help you. (if)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: If you call me, I will help you.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Punctuation in Complex Sentences
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-50 to-indigo-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct punctuation:</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">_____ If you finish early, we can go to the park.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Comma after the dependent clause: If you finish early, we can go to the park.</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">We will eat dinner _____ after we get home.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: No comma needed: We will eat dinner after we get home.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Create Complex Sentences
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Create complex sentences using these conjunctions:</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">because</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: I stayed inside because it was raining.</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">although</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: Although I was tired, I finished my homework.</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">since</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: Since you asked, I will help you.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Important Grammar Rules for Complex Sentences
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Comma Usage</h4>
                    <p className="text-gray-600">Use a comma after a dependent clause that comes before the independent clause.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">No Comma Needed</h4>
                    <p className="text-gray-600">No comma is needed if the dependent clause comes after the independent clause.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Subordinating Conjunctions</h4>
                    <p className="text-gray-600">Use subordinating conjunctions to connect clauses in complex sentences.</p>
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
                <Link href="/grammar/clauses" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Clauses
                </Link>
                <Link href="/grammar/phrases" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Phrases
                </Link>
                <Link href="/grammar/sentence-structure" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Sentence Structure
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Parts of Speech
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
                  <span className="font-medium">Structure:</span>
                  <span className="text-gray-600">1 independent + 1+ dependent</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Function:</span>
                  <span className="text-gray-600">Show relationships between ideas</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Intermediate</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-indigo-100">
                Complex sentences make your writing richer and more interesting!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 