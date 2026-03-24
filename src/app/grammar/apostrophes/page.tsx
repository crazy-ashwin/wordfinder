"use client"

import Link from "next/link"

export default function Apostrophes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Apostrophes
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Learn how to use apostrophes for contractions, possession, and special cases
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-amber-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Is an Apostrophe?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                An apostrophe (&apos;) is a punctuation mark used to show possession, form contractions, and indicate omitted letters or numbers. It helps clarify meaning and avoid confusion in writing.
              </p>
            </div>

            {/* When to Use Apostrophes */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                When to Use Apostrophes
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-6">
                  <h3 className="text-2xl font-semibold text-amber-700 mb-3">1. Contractions</h3>
                  <p className="text-amber-600">Use apostrophes to show where letters have been omitted in contractions.</p>
                  <p className="text-amber-800 font-semibold mt-2">Example: do not → don&apos;t, I am → I&apos;m</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-2xl font-semibold text-yellow-700 mb-3">2. Possession</h3>
                  <p className="text-yellow-600">Use apostrophes to show ownership or possession.</p>
                  <p className="text-yellow-800 font-semibold mt-2">Example: the girl&apos;s book, the dogs&apos; owner</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-2xl font-semibold text-orange-700 mb-3">3. Plurals of Letters and Numbers</h3>
                  <p className="text-orange-600">Use apostrophes to form plurals of single letters and sometimes numbers.</p>
                  <p className="text-orange-800 font-semibold mt-2">Example: Mind your p&apos;s and q&apos;s. Find all the number 7&apos;s.</p>
                </div>
              </div>
            </div>

            {/* Apostrophes in Context */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Apostrophes in Context
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl border-l-4 border-amber-400">
                  <p className="text-lg">
                    <span className="font-semibold text-amber-700">It&apos;s raining outside. (contraction for &quot;it is&quot;)</span>
                  </p>
                </div>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-l-4 border-yellow-400">
                  <p className="text-lg">
                    <span className="font-semibold text-yellow-700">The cat&apos;s toy is under the table. (singular possession)</span>
                  </p>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl border-l-4 border-orange-400">
                  <p className="text-lg">
                    <span className="font-semibold text-orange-700">The students&apos; desks are clean. (plural possession)</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Apostrophe Usage
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose where the apostrophe should go:</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Its raining outside.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">It&apos;s raining outside.</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The dogs bone is missing.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">The dog&apos;s bone is missing.</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The teachers lounge is open.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">The teachers&apos; lounge is open.</p>
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
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Is the apostrophe used correctly?</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Its a beautiful day.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Incorrect. Should be &quot;It&apos;s a beautiful day.&quot;</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The boys&apos; shoes are new.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Correct. Plural possession.</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <p className="mb-2">She can&apos;t find her keys.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Correct. Contraction for &quot;cannot.&quot;</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Possession vs Plural
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Is the apostrophe showing possession or plural?</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The cats&apos; toys are everywhere.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Possession (toys belong to multiple cats)</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The cat&apos;s toy is missing.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Possession (toy belongs to one cat)</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The cats are sleeping.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Plural (no apostrophe needed)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Create Sentences with Apostrophes
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Create sentences using apostrophes:</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Contraction: cannot → can&apos;t</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">She can&apos;t find her book.</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Possession: the dog of the boy</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">The boy&apos;s dog is playful.</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Plural of a letter: more than one &quot;a&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">There are two a&apos;s in &quot;banana.&quot;</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Important Grammar Rules for Apostrophes
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Its vs. It&apos;s</h4>
                    <p className="text-gray-600">&quot;Its&quot; is possessive; &quot;it&apos;s&quot; is a contraction for &quot;it is&quot; or &quot;it has.&quot;</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Plural Possession</h4>
                    <p className="text-gray-600">Add an apostrophe after the &quot;s&quot; for plural nouns: the girls&apos; room.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">No Apostrophe for Plurals</h4>
                    <p className="text-gray-600">Do not use apostrophes to make regular nouns plural.</p>
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
                <Link href="/grammar/quotation-marks" className="block text-amber-600 hover:text-amber-800 font-medium">
                  Quotation Marks
                </Link>
                <Link href="/grammar/commas" className="block text-amber-600 hover:text-amber-800 font-medium">
                  Commas
                </Link>
                <Link href="/grammar/semicolons" className="block text-amber-600 hover:text-amber-800 font-medium">
                  Semicolons
                </Link>
                <Link href="/grammar/punctuation-colon" className="block text-amber-600 hover:text-amber-800 font-medium">
                  Colons
                </Link>
                <Link href="/grammar/english-grammar" className="block text-amber-600 hover:text-amber-800 font-medium">
                  English Grammar
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Symbol:</span>
                  <span className="text-gray-600">&apos;</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Main Uses:</span>
                  <span className="text-gray-600">Contractions, possession</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-amber-100">
                Apostrophes show ownership and make contractions!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 