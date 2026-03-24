"use client"

import Link from "next/link"

export default function Punctuation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Punctuation</h1>
          <p className="text-xl opacity-90">
            Master the marks that bring clarity and meaning to your writing
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-teal-800 mb-4">
                What Is Punctuation?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Punctuation marks are symbols used in writing to separate sentences, phrases, and words to make meaning clear. They help readers understand the structure and flow of written language.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Proper punctuation is essential for clear communication and can completely change the meaning of a sentence.
              </p>
            </div>

            {/* End Marks */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-teal-800 mb-6">
                End Marks
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-teal-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Period (.)</h3>
                  <p className="text-gray-700 mb-3">
                    End declarative sentences
                  </p>
                  <p className="text-gray-600">
                    The sun is shining.<br />
                    I love reading books.<br />
                    She went to the store.
                  </p>
                </div>
                <div className="bg-cyan-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-cyan-700 mb-3">Question Mark (?)</h3>
                  <p className="text-gray-700 mb-3">
                    End interrogative sentences
                  </p>
                  <p className="text-gray-600">
                    What time is it?<br />
                    Do you like pizza?<br />
                    Where are you going?
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Exclamation Mark (!)</h3>
                  <p className="text-gray-700 mb-3">
                    End exclamatory sentences
                  </p>
                  <p className="text-gray-600">
                    What a beautiful day!<br />
                    Stop right there!<br />
                    I can&apos;t believe it!
                  </p>
                </div>
              </div>
            </div>

            {/* Internal Punctuation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-teal-800 mb-6">
                Internal Punctuation
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-2">Commas (,)</h3>
                  <p className="text-gray-700 mb-3">
                    Separate items, clauses, and phrases
                  </p>
                  <p className="text-gray-600 italic">
                    Lists: apples, oranges, bananas<br />
                    Clauses: When it rains, I stay inside.<br />
                    Direct address: John, please help me.<br />
                    Introductory phrases: After dinner, we watched a movie.
                  </p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-xl font-semibold text-cyan-700 mb-2">Semicolons (;)</h3>
                  <p className="text-gray-700 mb-3">
                    Connect related independent clauses
                  </p>
                  <p className="text-gray-600 italic">
                    I love reading; it helps me relax.<br />
                    The weather was cold; we stayed inside.<br />
                    She studied hard; she passed the test.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">Colons (:)</h3>
                  <p className="text-gray-700 mb-3">
                    Introduce lists, explanations, or quotes
                  </p>
                  <p className="text-gray-600 italic">
                    I need three things: paper, pen, and time.<br />
                    The reason is simple: I forgot.<br />
                    Shakespeare wrote: &quot;To be or not to be.&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Special Punctuation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-teal-800 mb-6">
                Special Punctuation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-teal-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Apostrophes (&apos;)</h3>
                  <p className="text-gray-700 mb-3">
                    Show possession and contractions
                  </p>
                  <p className="text-gray-600">
                    Possession: the dog&apos;s bone<br />
                    Contractions: don&apos;t, can&apos;t, it&apos;s<br />
                    Plural: the dogs&apos; bones<br />
                    Missing letters: &apos;80s, &apos;tis
                  </p>
                </div>
                <div className="bg-cyan-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-cyan-700 mb-3">Quotation Marks (&quot; &quot;)</h3>
                  <p className="text-gray-700 mb-3">
                    Enclose direct speech and titles
                  </p>
                  <p className="text-gray-600">
                    Direct speech: &quot;Hello,&quot; she said.<br />
                    Titles: &quot;Romeo and Juliet&quot;<br />
                    Quotes: &quot;Knowledge is power.&quot;<br />
                    Emphasis: The &quot;experts&quot; were wrong.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quizzes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-teal-800 mb-6">
                Interactive Quizzes
              </h2>
              
              <div className="space-y-6">
                <details className="bg-teal-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-teal-700 cursor-pointer hover:text-teal-800">
                    Quiz 1: End Marks
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Add the correct end mark:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;What time is the meeting&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: &quot;What time is the meeting?&quot; (question mark)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;The weather is beautiful today&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: &quot;The weather is beautiful today.&quot; (period)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-cyan-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-cyan-700 cursor-pointer hover:text-cyan-800">
                    Quiz 2: Commas
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Add commas where needed:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;I bought apples oranges and bananas.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: &quot;I bought apples, oranges, and bananas.&quot;</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;After the movie we went to dinner.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: &quot;After the movie, we went to dinner.&quot;</p>
                    </div>
                  </div>
                </details>

                <details className="bg-blue-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-blue-700 cursor-pointer hover:text-blue-800">
                    Quiz 3: Apostrophes
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Add apostrophes where needed:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;The dogs bone is missing.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: &quot;The dog&apos;s bone is missing.&quot; (possession)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;I dont know the answer.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: &quot;I don&apos;t know the answer.&quot; (contraction)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-teal-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-teal-700 cursor-pointer hover:text-teal-800">
                    Quiz 4: Mixed Punctuation
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Add all necessary punctuation:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;Lets eat Grandma&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: &quot;Let&apos;s eat, Grandma!&quot; (apostrophe, comma, exclamation)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;The students books are on the desk&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: &quot;The students&apos; books are on the desk.&quot; (apostrophe, period)</p>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-teal-800 mb-4">
                Important Notes
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>• Punctuation can completely change the meaning of a sentence (e.g., &quot;Let&apos;s eat, Grandma&quot; vs. &quot;Let&apos;s eat Grandma&quot;).</p>
                <p>• Over-punctuation can make writing choppy and hard to read.</p>
                <p>• When in doubt, read your sentence aloud - punctuation often indicates natural pauses.</p>
                <p>• Different style guides may have slightly different punctuation rules.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-teal-800 mb-4">Pro Tip</h3>
              <p className="text-gray-700">
                Think of punctuation as traffic signals for your readers. They help guide readers through your sentences and show them where to pause and how ideas are connected.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-teal-800 mb-4">Related Topics</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/grammar/punctuation-comma" className="text-teal-600 hover:text-teal-800 hover:underline">
                    Comma Usage
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/sentence-structure" className="text-teal-600 hover:text-teal-800 hover:underline">
                    Sentence Structure
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/grammar-rules" className="text-teal-600 hover:text-teal-800 hover:underline">
                    Grammar Rules
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/parts-of-speech" className="text-teal-600 hover:text-teal-800 hover:underline">
                    Parts of Speech
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/english-grammar" className="text-teal-600 hover:text-teal-800 hover:underline">
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
