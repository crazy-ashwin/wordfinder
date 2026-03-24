"use client"

import Link from "next/link"

export default function PunctuationComma() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-sky-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Comma Punctuation</h1>
          <p className="text-xl opacity-90">
            Master the rules and usage of commas in English writing
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                What Are Commas?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Commas are punctuation marks that help organize sentences, separate ideas, and make writing clearer and easier to read. They indicate pauses and help readers understand the structure of sentences.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Proper comma usage is essential for clear communication and avoiding misunderstandings in writing.
              </p>
            </div>

            {/* Basic Comma Rules */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">
                Basic Comma Rules
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Separating Items in Lists</h3>
                  <p className="text-gray-700 mb-3">
                    Use commas to separate three or more items
                  </p>
                  <p className="text-gray-600">
                    I bought apples, bananas, and oranges.<br />
                    She likes reading, writing, and painting.<br />
                    The colors are red, blue, and green.
                  </p>
                </div>
                <div className="bg-sky-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-sky-700 mb-3">Before Conjunctions</h3>
                  <p className="text-gray-700 mb-3">
                    Use commas before coordinating conjunctions
                  </p>
                  <p className="text-gray-600">
                    I wanted to go, but it was raining.<br />
                    She studied hard, so she passed the test.<br />
                    He likes coffee, and she prefers tea.
                  </p>
                </div>
              </div>
            </div>

            {/* Advanced Comma Rules */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">
                Advanced Comma Rules
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">Introductory Elements</h3>
                  <p className="text-gray-700 mb-3">
                    Use commas after introductory words, phrases, or clauses
                  </p>
                  <p className="text-gray-600 italic">
                    <strong>Yes,</strong> I will help you.<br />
                    <strong>After the movie,</strong> we went to dinner.<br />
                    <strong>When you arrive,</strong> please call me.
                  </p>
                </div>
                <div className="border-l-4 border-sky-500 pl-6">
                  <h3 className="text-xl font-semibold text-sky-700 mb-2">Non-Essential Information</h3>
                  <p className="text-gray-700 mb-3">
                    Use commas to set off non-essential clauses and phrases
                  </p>
                  <p className="text-gray-600 italic">
                    My brother, <strong>who lives in New York,</strong> is visiting.<br />
                    The book, <strong>which I read last week,</strong> was excellent.<br />
                    Paris, <strong>the capital of France,</strong> is beautiful.
                  </p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-xl font-semibold text-cyan-700 mb-2">Direct Address</h3>
                  <p className="text-gray-700 mb-3">
                    Use commas to set off names when directly addressing someone
                  </p>
                  <p className="text-gray-600 italic">
                    <strong>John,</strong> please come here.<br />
                    Thank you, <strong>sir,</strong> for your help.<br />
                    <strong>Mom,</strong> can you help me?
                  </p>
                </div>
              </div>
            </div>

            {/* Common Comma Mistakes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">
                Common Comma Mistakes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Comma Splices</h3>
                  <p className="text-gray-700 mb-3">
                    Don&apos;t use commas to join two complete sentences
                  </p>
                  <p className="text-gray-600">
                    ❌ I went to the store, I bought milk.<br />
                    ✅ I went to the store, and I bought milk.<br />
                    ✅ I went to the store. I bought milk.
                  </p>
                </div>
                <div className="bg-sky-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-sky-700 mb-3">Missing Commas</h3>
                  <p className="text-gray-700 mb-3">
                    Don&apos;t forget commas in compound sentences
                  </p>
                  <p className="text-gray-600">
                    ❌ I wanted to go but it was raining.<br />
                    ✅ I wanted to go, but it was raining.<br />
                    ❌ After dinner we watched a movie.<br />
                    ✅ After dinner, we watched a movie.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quizzes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">
                Interactive Quizzes
              </h2>
              
              <div className="space-y-6">
                <details className="bg-blue-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-blue-700 cursor-pointer hover:text-blue-800">
                    Quiz 1: Add Missing Commas
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Add commas where needed:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. I bought apples oranges and bananas.</p>
                      <p className="text-gray-600 text-sm">Answer: I bought apples, oranges, and bananas.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. After the movie we went to dinner.</p>
                      <p className="text-gray-600 text-sm">Answer: After the movie, we went to dinner.</p>
                    </div>
                  </div>
                </details>

                <details className="bg-sky-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-sky-700 cursor-pointer hover:text-sky-800">
                    Quiz 2: Fix Comma Errors
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Fix the comma mistakes:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. I went to the store, I bought milk.</p>
                      <p className="text-gray-600 text-sm">Answer: I went to the store, and I bought milk. (or use a period)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. My brother who lives in New York is visiting.</p>
                      <p className="text-gray-600 text-sm">Answer: My brother, who lives in New York, is visiting.</p>
                    </div>
                  </div>
                </details>

                <details className="bg-cyan-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-cyan-700 cursor-pointer hover:text-cyan-800">
                    Quiz 3: Comma or No Comma?
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Decide if commas are needed:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. The book that I read was excellent.</p>
                      <p className="text-gray-600 text-sm">Answer: No comma needed (essential information)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. The book which I read was excellent.</p>
                      <p className="text-gray-600 text-sm">Answer: Commas needed: The book, which I read, was excellent.</p>
                    </div>
                  </div>
                </details>

                <details className="bg-blue-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-blue-700 cursor-pointer hover:text-blue-800">
                    Quiz 4: Complex Comma Usage
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Add all necessary commas:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. After the long tiring day I finally went home and slept.</p>
                      <p className="text-gray-600 text-sm">Answer: After the long, tiring day, I finally went home and slept.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. My friend Sarah who loves cooking made dinner for us.</p>
                      <p className="text-gray-600 text-sm">Answer: My friend Sarah, who loves cooking, made dinner for us.</p>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                Important Notes
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>• When in doubt, read your sentence aloud - commas often indicate natural pauses.</p>
                <p>• Don&apos;t overuse commas - too many can make writing choppy and hard to read.</p>
                <p>• Essential information (that clauses) doesn&apos;t need commas, but non-essential information (which clauses) does.</p>
                <p>• Always use a comma before &quot;and&quot; in a list of three or more items.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Pro Tip</h3>
              <p className="text-gray-700">
                Think of commas as traffic signals for your readers. They help guide readers through your sentences and show them where to pause and how ideas are connected.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Related Topics</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/grammar/punctuation" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Punctuation
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/sentence-structure" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Sentence Structure
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/conjunctions" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Conjunctions
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/parts-of-speech" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Parts of Speech
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/english-grammar" className="text-blue-600 hover:text-blue-800 hover:underline">
                    English Grammar
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
