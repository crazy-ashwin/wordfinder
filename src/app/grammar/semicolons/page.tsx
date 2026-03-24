"use client"

import Link from "next/link"

export default function Semicolons() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-600 via-orange-600 to-amber-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Semicolons
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Learn how to use semicolons to connect related ideas and organize complex lists
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-yellow-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Is a Semicolon?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A semicolon (;) is a punctuation mark used to connect closely related ideas, separate items in complex lists, and clarify meaning in sentences. It is stronger than a comma but not as final as a period.
              </p>
            </div>

            {/* When to Use Semicolons */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                When to Use Semicolons
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-2xl font-semibold text-yellow-700 mb-3">1. To Join Independent Clauses</h3>
                  <p className="text-yellow-600">Use a semicolon to join two closely related independent clauses that are not joined by a coordinating conjunction.</p>
                  <p className="text-yellow-800 font-semibold mt-2">Example: I have a big test tomorrow; I can&apos;t go out tonight.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-2xl font-semibold text-orange-700 mb-3">2. With Conjunctive Adverbs</h3>
                  <p className="text-orange-600">Use a semicolon before a conjunctive adverb (however, therefore, moreover, consequently, etc.) that joins two independent clauses.</p>
                  <p className="text-orange-800 font-semibold mt-2">Example: She was tired; however, she finished her homework.</p>
                </div>
                <div className="border-l-4 border-amber-500 pl-6">
                  <h3 className="text-2xl font-semibold text-amber-700 mb-3">3. In Complex Lists</h3>
                  <p className="text-amber-600">Use semicolons to separate items in a list when the items themselves contain commas.</p>
                  <p className="text-amber-800 font-semibold mt-2">Example: On our trip, we visited Paris, France; Rome, Italy; and Madrid, Spain.</p>
                </div>
              </div>
            </div>

            {/* Semicolons in Context */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Semicolons in Context
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-l-4 border-yellow-400">
                  <p className="text-lg">
                    <span className="font-semibold text-yellow-700">I wanted to go for a walk; it was raining outside.</span>
                  </p>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl border-l-4 border-orange-400">
                  <p className="text-lg">
                    <span className="font-semibold text-orange-700">He loves to read; moreover, he writes poetry.</span>
                  </p>
                </div>
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl border-l-4 border-amber-400">
                  <p className="text-lg">
                    <span className="font-semibold text-amber-700">We visited London, England; Paris, France; and Berlin, Germany.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Semicolon Usage
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose where the semicolon should go:</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I have a meeting in the morning _____ I need to go to bed early.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: I have a meeting in the morning; I need to go to bed early.</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She was late _____ however, she still got the job.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: She was late; however, she still got the job.</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">We bought apples, oranges, and bananas _____ pears, peaches, and plums.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: We bought apples, oranges, and bananas; pears, peaches, and plums.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Correct or Incorrect?
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Is the semicolon used correctly?</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I like pizza; and I like pasta.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Incorrect. Use a comma before &quot;and&quot; or remove &quot;and&quot; to use a semicolon.</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">He is smart; he studies a lot.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Correct. Two independent clauses joined by a semicolon.</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">We went to the store; because we needed milk.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Incorrect. Use a comma, not a semicolon, before &quot;because.&quot;</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Semicolons in Lists
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct way to punctuate the list:</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">We visited New York, New York _____ Los Angeles, California _____ and Chicago, Illinois.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: We visited New York, New York; Los Angeles, California; and Chicago, Illinois.</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The conference has speakers from Paris, France _____ Berlin, Germany _____ and Madrid, Spain.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: The conference has speakers from Paris, France; Berlin, Germany; and Madrid, Spain.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Create Sentences with Semicolons
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Create sentences using semicolons:</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Join: I finished my homework. I went outside to play.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: I finished my homework; I went outside to play.</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Join: She likes apples. She likes oranges.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: She likes apples; she likes oranges.</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">List: I have lived in Paris, France; Rome, Italy; and Madrid, Spain.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: I have lived in Paris, France; Rome, Italy; and Madrid, Spain.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Important Grammar Rules for Semicolons
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">No Coordinating Conjunction</h4>
                    <p className="text-gray-600">Do not use a semicolon with coordinating conjunctions (and, but, or, nor, for, so, yet).</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Use with Conjunctive Adverbs</h4>
                    <p className="text-gray-600">Use a semicolon before conjunctive adverbs (however, therefore, etc.) joining two independent clauses.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Complex Lists</h4>
                    <p className="text-gray-600">Use semicolons to separate items in a list when the items contain commas.</p>
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
                <Link href="/grammar/punctuation-quotation-marks" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Quotation Marks
                </Link>
                <Link href="/grammar/punctuation-colon" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Colons
                </Link>
                <Link href="/grammar/punctuation-apostrophe" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Apostrophes
                </Link>
                <Link href="/grammar/clauses" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Clauses
                </Link>
                <Link href="/grammar/english-grammar" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  English Grammar
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Symbol:</span>
                  <span className="text-gray-600">;</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Main Uses:</span>
                  <span className="text-gray-600">Join clauses, complex lists</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Intermediate</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-yellow-100">
                Semicolons help clarify meaning and connect related ideas in your writing!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 