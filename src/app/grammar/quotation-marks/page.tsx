"use client"

import Link from "next/link"

export default function QuotationMarks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-fuchsia-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Quotation Marks
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Learn how to use quotation marks to show direct speech, quotations, and titles
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-pink-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are Quotation Marks?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Quotation marks (&quot; &quot;) are punctuation marks used to show the exact words spoken or written by someone else. They are also used for titles of short works and to highlight certain words or phrases.
              </p>
            </div>

            {/* When to Use Quotation Marks */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                When to Use Quotation Marks
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-2xl font-semibold text-pink-700 mb-3">1. Direct Speech</h3>
                  <p className="text-pink-600">Use quotation marks to show the exact words spoken by a person.</p>
                  <p className="text-pink-800 font-semibold mt-2">Example: She said, &quot;I am going to the store.&quot;</p>
                </div>
                <div className="border-l-4 border-fuchsia-500 pl-6">
                  <h3 className="text-2xl font-semibold text-fuchsia-700 mb-3">2. Quotations</h3>
                  <p className="text-fuchsia-600">Use quotation marks to show a direct quote from a book, article, or speech.</p>
                  <p className="text-fuchsia-800 font-semibold mt-2">Example: The teacher said, &quot;Reading is important.&quot;</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-3">3. Titles of Short Works</h3>
                  <p className="text-purple-600">Use quotation marks for titles of short stories, poems, articles, and songs.</p>
                  <p className="text-purple-800 font-semibold mt-2">Example: I love the song &quot;Let It Go.&quot;</p>
                </div>
                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-2xl font-semibold text-pink-700 mb-3">4. Highlighting Words</h3>
                  <p className="text-pink-600">Use quotation marks to highlight a word or phrase being discussed.</p>
                  <p className="text-pink-800 font-semibold mt-2">Example: The word &quot;courage&quot; means bravery.</p>
                </div>
              </div>
            </div>

            {/* Quotation Marks in Context */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Quotation Marks in Context
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-pink-50 to-fuchsia-50 p-6 rounded-xl border-l-4 border-pink-400">
                  <p className="text-lg">
                    <span className="font-semibold text-pink-700">&quot;Can I have some water?&quot; asked the child.</span>
                  </p>
                </div>
                <div className="bg-gradient-to-r from-fuchsia-50 to-purple-50 p-6 rounded-xl border-l-4 border-fuchsia-400">
                  <p className="text-lg">
                    <span className="font-semibold text-fuchsia-700">The sign read, &quot;No Parking.&quot;</span>
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <p className="text-lg">
                    <span className="font-semibold text-purple-700">We read the poem &quot;The Road Not Taken&quot; in class.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Quotation Mark Usage
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-fuchsia-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose where the quotation marks should go:</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The teacher said, ___Practice makes perfect.___</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">The teacher said, &quot;Practice makes perfect.&quot;</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">___Where are you going?___ asked Mom.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">&quot;Where are you going?&quot; asked Mom.</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I love the poem ___Hope is the Thing with Feathers___. </p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">I love the poem &quot;Hope is the Thing with Feathers.&quot;</p>
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
                <div className="bg-gradient-to-r from-fuchsia-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Is the quotation mark usage correct?</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She said, &quot;I am happy&quot;.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-fuchsia-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Incorrect. The period should be inside the quotation marks: &quot;I am happy.&quot;</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">&quot;Let&apos;s go!&quot; shouted Tom.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-fuchsia-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Correct.</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The word &quot;friendship&quot; means a lot to me.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-fuchsia-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Correct.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Quotation Marks in Dialogue
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Add quotation marks to the dialogue:</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">___What time is it?___ asked Sam.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">&quot;What time is it?&quot; asked Sam.</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Mom said, ___Dinner is ready!___</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Mom said, &quot;Dinner is ready!&quot;</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">___I can&apos;t wait for the weekend!___ exclaimed Lily.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">&quot;I can&apos;t wait for the weekend!&quot; exclaimed Lily.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Create Sentences with Quotation Marks
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-fuchsia-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Create sentences using quotation marks:</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Direct speech: say, &quot;Let&apos;s go to the park!&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">She said, &quot;Let&apos;s go to the park!&quot;</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Title: poem, &quot;Twinkle, Twinkle, Little Star&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">We read the poem &quot;Twinkle, Twinkle, Little Star.&quot;</p>
                      </details>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Highlight: word &quot;bravery&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">The word &quot;bravery&quot; means courage.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Important Grammar Rules for Quotation Marks
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Punctuation Inside</h4>
                    <p className="text-gray-600">Periods and commas go inside the closing quotation marks.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Single Quotation Marks</h4>
                    <p className="text-gray-600">Use single quotation marks for a quote within a quote.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Capitalization</h4>
                    <p className="text-gray-600">Capitalize the first word of a complete quotation.</p>
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
                <Link href="/grammar/semicolons" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Semicolons
                </Link>
                <Link href="/grammar/commas" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Commas
                </Link>
                <Link href="/grammar/apostrophes" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Apostrophes
                </Link>
                <Link href="/grammar/punctuation-colon" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Colons
                </Link>
                <Link href="/grammar/english-grammar" className="block text-pink-600 hover:text-pink-800 font-medium">
                  English Grammar
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Symbol:</span>
                  <span className="text-gray-600">&quot; &quot;</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Main Uses:</span>
                  <span className="text-gray-600">Speech, quotes, titles</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-pink-100">
                Quotation marks show exactly what someone said or wrote!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 