"use client"

import Link from "next/link"

export default function Suffixes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-500 to-violet-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Suffixes</h1>
          <p className="text-xl opacity-90">
            Master the word endings that change meaning and function
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-purple-800 mb-4">What Are Suffixes?</h2>
              <p className="text-lg text-gray-700 mb-4">
                Suffixes are word parts added to the end of base words to change their meaning, grammatical function, or part of speech. They are essential tools for building vocabulary and understanding word relationships.
              </p>
              <p className="text-lg text-gray-700">
                Learning common suffixes helps you decode unfamiliar words and understand how English words are formed and transformed.
              </p>
            </div>

            {/* Common Suffixes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-purple-800 mb-6">Common Suffixes</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-purple-700 mb-3">Noun Suffixes</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>-tion</strong> - <em>action, creation, education</em></li>
                    <li><strong>-ness</strong> - <em>happiness, kindness, darkness</em></li>
                    <li><strong>-ment</strong> - <em>development, government, achievement</em></li>
                    <li><strong>-er</strong> - <em>teacher, writer, runner</em></li>
                    <li><strong>-ity</strong> - <em>ability, reality, creativity</em></li>
                  </ul>
                </div>

                <div className="bg-violet-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-violet-700 mb-3">Adjective Suffixes</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>-ful</strong> - <em>beautiful, helpful, powerful</em></li>
                    <li><strong>-less</strong> - <em>hopeless, fearless, endless</em></li>
                    <li><strong>-able</strong> - <em>comfortable, readable, lovable</em></li>
                    <li><strong>-ous</strong> - <em>dangerous, famous, nervous</em></li>
                    <li><strong>-al</strong> - <em>national, personal, musical</em></li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-indigo-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-3">Verb Suffixes</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>-ize</strong> - <em>organize, realize, modernize</em></li>
                    <li><strong>-en</strong> - <em>strengthen, lengthen, brighten</em></li>
                    <li><strong>-ate</strong> - <em>create, celebrate, communicate</em></li>
                    <li><strong>-ify</strong> - <em>simplify, clarify, beautify</em></li>
                    <li><strong>-ish</strong> - <em>finish, establish, accomplish</em></li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-purple-700 mb-3">Adverb Suffixes</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>-ly</strong> - <em>quickly, happily, carefully</em></li>
                    <li><strong>-ward</strong> - <em>forward, backward, upward</em></li>
                    <li><strong>-wise</strong> - <em>clockwise, otherwise, likewise</em></li>
                    <li><strong>-ways</strong> - <em>sideways, lengthways, crossways</em></li>
                    <li><strong>-time</strong> - <em>sometime, anytime, daytime</em></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How Suffixes Work */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-purple-800 mb-6">How Suffixes Work</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-100 to-violet-100 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-purple-700 mb-3">Changing Parts of Speech</h3>
                  <p className="text-gray-700 mb-3">
                    Suffixes can transform words from one part of speech to another:
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <em>happy</em> (adjective) + <strong>-ness</strong> = <em>happiness</em> (noun)</li>
                    <li>• <em>quick</em> (adjective) + <strong>-ly</strong> = <em>quickly</em> (adverb)</li>
                    <li>• <em>teach</em> (verb) + <strong>-er</strong> = <em>teacher</em> (noun)</li>
                    <li>• <em>beauty</em> (noun) + <strong>-ful</strong> = <em>beautiful</em> (adjective)</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-violet-100 to-indigo-100 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-violet-700 mb-3">Adding Meaning</h3>
                  <p className="text-gray-700 mb-3">
                    Suffixes add specific meanings to base words:
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <strong>-less</strong> means &quot;without&quot; (fearless = without fear)</li>
                    <li>• <strong>-ful</strong> means &quot;full of&quot; (hopeful = full of hope)</li>
                    <li>• <strong>-able</strong> means &quot;capable of&quot; (readable = capable of being read)</li>
                    <li>• <strong>-ish</strong> means &quot;somewhat&quot; (reddish = somewhat red)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quizzes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-purple-800 mb-6">Interactive Quizzes</h2>
              
              <div className="space-y-6">
                <details className="bg-purple-50 p-6 rounded-xl">
                  <summary className="text-xl font-semibold text-purple-700 cursor-pointer hover:text-purple-800">
                    Quiz 1: Identify the Suffix
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700"><strong>Question:</strong> What suffix is in &quot;happiness&quot; and what does it do?</p>
                    <details className="ml-4">
                      <summary className="text-violet-600 cursor-pointer hover:text-violet-800">Show Answer</summary>
                      <p className="mt-2 text-gray-700">The suffix is <strong>-ness</strong>. It changes the adjective &quot;happy&quot; into the noun &quot;happiness,&quot; meaning &quot;the state of being happy.&quot;</p>
                    </details>
                  </div>
                </details>

                <details className="bg-violet-50 p-6 rounded-xl">
                  <summary className="text-xl font-semibold text-violet-700 cursor-pointer hover:text-violet-800">
                    Quiz 2: Create New Words
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700"><strong>Question:</strong> Add the suffix <strong>-able</strong> to &quot;read&quot; and explain what the new word means.</p>
                    <details className="ml-4">
                      <summary className="text-purple-600 cursor-pointer hover:text-purple-800">Show Answer</summary>
                      <p className="mt-2 text-gray-700">Adding <strong>-able</strong> to &quot;read&quot; creates <em>readable</em>, which means &quot;capable of being read&quot; or &quot;easy to read.&quot;</p>
                    </details>
                  </div>
                </details>

                <details className="bg-indigo-50 p-6 rounded-xl">
                  <summary className="text-xl font-semibold text-indigo-700 cursor-pointer hover:text-indigo-800">
                    Quiz 3: Suffix Meanings
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700"><strong>Question:</strong> What does the suffix <strong>-less</strong> mean? Give three examples.</p>
                    <details className="ml-4">
                      <summary className="text-violet-600 cursor-pointer hover:text-violet-800">Show Answer</summary>
                      <p className="mt-2 text-gray-700">The suffix <strong>-less</strong> means &quot;without.&quot; Examples: <em>fearless</em> (without fear), <em>hopeless</em> (without hope), <em>endless</em> (without end).</p>
                    </details>
                  </div>
                </details>

                <details className="bg-purple-50 p-6 rounded-xl">
                  <summary className="text-xl font-semibold text-purple-700 cursor-pointer hover:text-purple-800">
                    Quiz 4: Part of Speech Changes
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700"><strong>Question:</strong> How does the suffix <strong>-ly</strong> change the word &quot;quick&quot;?</p>
                    <details className="ml-4">
                      <summary className="text-violet-600 cursor-pointer hover:text-violet-800">Show Answer</summary>
                      <p className="mt-2 text-gray-700">The suffix <strong>-ly</strong> changes &quot;quick&quot; from an adjective (describing a noun) to an adverb (describing a verb). <em>Quick</em> becomes <em>quickly</em>, as in &quot;She runs quickly.&quot;</p>
                    </details>
                  </div>
                </details>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Notes Section */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Notes Section</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Spelling Changes:</strong> Sometimes adding a suffix requires spelling changes in the base word (e.g., &quot;happy&quot; becomes &quot;happily&quot; with a &quot;y&quot; to &quot;i&quot; change).</p>
                <p><strong>Multiple Suffixes:</strong> Words can have multiple suffixes (e.g., &quot;beautifully&quot; has both <strong>-ful</strong> and <strong>-ly</strong>).</p>
                <p><strong>Origin:</strong> Many English suffixes come from Latin, Greek, or Old English, which is why they appear in so many words.</p>
              </div>
            </div>

            {/* Pro Tip */}
            <div className="bg-gradient-to-br from-purple-500 to-violet-600 text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">Pro Tip</h3>
              <p className="opacity-90">
                When you see an unfamiliar word, look for familiar suffixes first. They often give you clues about the word&apos;s meaning and function in a sentence.
              </p>
            </div>

            {/* Related Topics */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Related Topics</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/grammar/prefixes" className="text-purple-600 hover:text-purple-800 underline">
                    Prefixes
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/root-word" className="text-purple-600 hover:text-purple-800 underline">
                    Root Words
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/word-building" className="text-purple-600 hover:text-purple-800 underline">
                    Word Building
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/parts-of-speech" className="text-purple-600 hover:text-purple-800 underline">
                    Parts of Speech
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/spelling-rules" className="text-purple-600 hover:text-purple-800 underline">
                    Spelling Rules
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
