"use client"

import Link from "next/link"

export default function Commas() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Commas
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Learn how to use commas to separate ideas, items in a list, and clarify meaning
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-lime-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Is a Comma?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A comma (,) is a punctuation mark used to separate words, phrases, or clauses in a sentence. Commas help clarify meaning, prevent confusion, and make writing easier to read.
              </p>
            </div>

            {/* When to Use Commas */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                When to Use Commas
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-lime-500 pl-6">
                  <h3 className="text-2xl font-semibold text-lime-700 mb-3">1. In a List</h3>
                  <p className="text-lime-600">Use commas to separate three or more items in a list.</p>
                  <p className="text-lime-800 font-semibold mt-2">Example: I bought apples, oranges, and bananas.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-2xl font-semibold text-green-700 mb-3">2. With Introductory Words or Phrases</h3>
                  <p className="text-green-600">Use a comma after introductory words, phrases, or clauses.</p>
                  <p className="text-green-800 font-semibold mt-2">Example: After dinner, we went for a walk.</p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-3">3. To Separate Clauses</h3>
                  <p className="text-emerald-600">Use a comma before a coordinating conjunction (and, but, or, nor, for, so, yet) joining two independent clauses.</p>
                  <p className="text-emerald-800 font-semibold mt-2">Example: I wanted to go, but it was raining.</p>
                </div>
                <div className="border-l-4 border-lime-500 pl-6">
                  <h3 className="text-2xl font-semibold text-lime-700 mb-3">4. With Appositives</h3>
                  <p className="text-lime-600">Use commas to set off appositives (extra information).</p>
                  <p className="text-lime-800 font-semibold mt-2">Example: My brother, a great cook, made dinner.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-2xl font-semibold text-green-700 mb-3">5. With Direct Address</h3>
                  <p className="text-green-600">Use commas to separate the name of a person being spoken to.</p>
                  <p className="text-green-800 font-semibold mt-2">Example: Lisa, can you help me?</p>
                </div>
              </div>
            </div>

            {/* Commas in Context */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Commas in Context
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-lime-50 to-green-50 p-6 rounded-xl border-l-4 border-lime-400">
                  <p className="text-lg">
                    <span className="font-semibold text-lime-700">I like pizza, pasta, and salad.</span>
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-400">
                  <p className="text-lg">
                    <span className="font-semibold text-green-700">After school, we played soccer.</span>
                  </p>
                </div>
                <div className="bg-gradient-to-r from-emerald-50 to-lime-50 p-6 rounded-xl border-l-4 border-emerald-400">
                  <p className="text-lg">
                    <span className="font-semibold text-emerald-700">She is my friend, and she is very kind.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Comma Usage
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-lime-50 to-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose where the comma should go:</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I have a dog a cat and a rabbit.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-lime-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">I have a dog, a cat, and a rabbit.</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">After dinner we watched a movie.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-lime-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">After dinner, we watched a movie.</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She likes apples but she doesn&apos;t like oranges.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-lime-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">She likes apples, but she doesn&apos;t like oranges.</p>
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
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Is the comma used correctly?</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">My friend, is coming over.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Incorrect. No comma needed: My friend is coming over.</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">We went to the park, and played soccer.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Incorrect. Should be: We went to the park and played soccer.</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Lisa, can you help me?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Correct. Direct address.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Commas in Lists
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-lime-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct way to punctuate the list:</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">We need bread milk eggs and cheese.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">We need bread, milk, eggs, and cheese.</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I saw lions tigers and bears at the zoo.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">I saw lions, tigers, and bears at the zoo.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Create Sentences with Commas
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-lime-50 to-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Create sentences using commas:</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">List: apples, oranges, bananas</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-lime-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">I bought apples, oranges, and bananas.</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Intro phrase: After school</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-lime-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">After school, we played soccer.</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Appositive: My friend, a great cook</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-lime-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">My friend, a great cook, made dinner.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Important Grammar Rules for Commas
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-lime-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Oxford Comma</h4>
                    <p className="text-gray-600">The comma before &quot;and&quot; in a list of three or more items is called the Oxford comma. It is optional but recommended for clarity.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-lime-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">No Comma with Two Items</h4>
                    <p className="text-gray-600">Do not use a comma to separate only two items.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-lime-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Comma Splices</h4>
                    <p className="text-gray-600">Do not join two independent clauses with just a comma (comma splice). Use a conjunction, semicolon, or period.</p>
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
                <Link href="/grammar/semicolons" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Semicolons
                </Link>
                <Link href="/grammar/quotation-marks" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Quotation Marks
                </Link>
                <Link href="/grammar/apostrophes" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Apostrophes
                </Link>
                <Link href="/grammar/punctuation-colon" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Colons
                </Link>
                <Link href="/grammar/english-grammar" className="block text-lime-600 hover:text-lime-800 font-medium">
                  English Grammar
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Symbol:</span>
                  <span className="text-gray-600">,</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Main Uses:</span>
                  <span className="text-gray-600">Lists, clauses, clarity</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-lime-500 to-green-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-lime-100">
                Commas make your writing clear and easy to read!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 