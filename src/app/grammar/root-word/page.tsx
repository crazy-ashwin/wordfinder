"use client"

import Link from "next/link"

export default function RootWord() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Root Words</h1>
          <p className="text-xl opacity-90">
            Discover the building blocks of English vocabulary and word formation
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
              <h2 className="text-3xl font-bold text-emerald-800 mb-4">What Are Root Words?</h2>
              <p className="text-lg text-gray-700 mb-4">
                Root words are the basic building blocks of language. They are the core meaning units from which many other words are formed by adding prefixes, suffixes, or other word parts.
              </p>
              <p className="text-lg text-gray-700">
                Understanding root words helps you decode unfamiliar vocabulary and see connections between related words, making you a more confident reader and writer.
              </p>
            </div>

            {/* Common Root Words */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-emerald-800 mb-6">Common Root Words</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-emerald-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-emerald-700 mb-3">Latin Roots</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>aud</strong> (hear) - <em>audience, audio, audible</em></li>
                    <li><strong>cred</strong> (believe) - <em>credit, credible, incredible</em></li>
                    <li><strong>dict</strong> (say) - <em>dictate, dictionary, predict</em></li>
                    <li><strong>duc</strong> (lead) - <em>conduct, reduce, introduce</em></li>
                    <li><strong>fac</strong> (make) - <em>factory, manufacture, beneficial</em></li>
                  </ul>
                </div>

                <div className="bg-teal-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Greek Roots</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>bio</strong> (life) - <em>biology, biography, antibiotic</em></li>
                    <li><strong>geo</strong> (earth) - <em>geography, geology, geometry</em></li>
                    <li><strong>photo</strong> (light) - <em>photograph, photosynthesis, photon</em></li>
                    <li><strong>tele</strong> (far) - <em>telephone, television, telescope</em></li>
                    <li><strong>therm</strong> (heat) - <em>thermometer, thermal, thermostat</em></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How Root Words Work */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-emerald-800 mb-6">How Root Words Work</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-emerald-700 mb-3">Word Families</h3>
                  <p className="text-gray-700 mb-3">
                    Root words create families of related words. For example, the Latin root <strong>spect</strong> (look) gives us:
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <em>inspect</em> - to look into carefully</li>
                    <li>• <em>respect</em> - to look back with honor</li>
                    <li>• <em>prospect</em> - to look forward</li>
                    <li>• <em>spectator</em> - one who looks</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Building New Words</h3>
                  <p className="text-gray-700 mb-3">
                    By combining roots with <Link href="/grammar/prefixes" className="text-teal-600 hover:text-teal-800 underline">prefixes</Link> and <Link href="/grammar/suffixes" className="text-teal-600 hover:text-teal-800 underline">suffixes</Link>, we can create countless new words:
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <strong>un</strong> + <strong>happy</strong> = <em>unhappy</em></li>
                    <li>• <strong>re</strong> + <strong>write</strong> = <em>rewrite</em></li>
                    <li>• <strong>friend</strong> + <strong>ly</strong> = <em>friendly</em></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li><strong>Root Word Origins:</strong> Many English root words come from Latin and Greek, which were the languages of education and science for centuries.</li>
                <li><strong>Word Analysis:</strong> Breaking down words into their root parts is called &quot;morphological analysis&quot; and is a key skill for vocabulary building.</li>
                <li><strong>Etymology:</strong> The study of word origins and how their meanings have changed over time.</li>
              </ul>
            </div>

            {/* Interactive Quizzes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-emerald-800 mb-6">Interactive Quizzes</h2>
              
              <div className="space-y-6">
                <details className="bg-emerald-50 p-6 rounded-xl">
                  <summary className="text-xl font-semibold text-emerald-700 cursor-pointer hover:text-emerald-800">
                    Quiz 1: Identify the Root Word
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700"><strong>Question:</strong> What is the root word in &quot;transportation&quot;?</p>
                    <details className="ml-4">
                      <summary className="text-teal-600 cursor-pointer hover:text-teal-800">Show Answer</summary>
                      <p className="mt-2 text-gray-700">The root word is <strong>port</strong> (carry). &quot;Trans&quot; is a prefix meaning &quot;across,&quot; and &quot;ation&quot; is a suffix that makes it a noun.</p>
                    </details>
                  </div>
                </details>

                <details className="bg-teal-50 p-6 rounded-xl">
                  <summary className="text-xl font-semibold text-teal-700 cursor-pointer hover:text-teal-800">
                    Quiz 2: Word Family Challenge
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700"><strong>Question:</strong> Name three words that come from the root <strong>scrib</strong> (write).</p>
                    <details className="ml-4">
                      <summary className="text-emerald-600 cursor-pointer hover:text-emerald-800">Show Answer</summary>
                      <p className="mt-2 text-gray-700">Possible answers: <em>scribe, describe, prescribe, subscribe, manuscript, scribble</em></p>
                    </details>
                  </div>
                </details>

                <details className="bg-cyan-50 p-6 rounded-xl">
                  <summary className="text-xl font-semibold text-cyan-700 cursor-pointer hover:text-cyan-800">
                    Quiz 3: Meaning Match
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700"><strong>Question:</strong> What does the root <strong>chron</strong> mean?</p>
                    <details className="ml-4">
                      <summary className="text-teal-600 cursor-pointer hover:text-teal-800">Show Answer</summary>
                      <p className="mt-2 text-gray-700">The root <strong>chron</strong> means &quot;time.&quot; Examples: <em>chronology, chronic, synchronize, chronicle</em></p>
                    </details>
                  </div>
                </details>

                <details className="bg-emerald-50 p-6 rounded-xl">
                  <summary className="text-xl font-semibold text-emerald-700 cursor-pointer hover:text-emerald-800">
                    Quiz 4: Create New Words
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700"><strong>Question:</strong> Using the root <strong>vis</strong> (see), create a word that means &quot;to see again.&quot;</p>
                    <details className="ml-4">
                      <summary className="text-teal-600 cursor-pointer hover:text-teal-800">Show Answer</summary>
                      <p className="mt-2 text-gray-700">The word would be <strong>revisit</strong> - &quot;re&quot; (again) + &quot;vis&quot; (see) + &quot;it&quot; (verb ending).</p>
                    </details>
                  </div>
                </details>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Related Topics */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-emerald-800 mb-4">Related Topics</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/grammar/prefixes" className="text-emerald-600 hover:text-emerald-800 underline">
                    Prefixes
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/suffixes" className="text-emerald-600 hover:text-emerald-800 underline">
                    Suffixes
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/word-building" className="text-emerald-600 hover:text-emerald-800 underline">
                    Word Building
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/vocabulary-for-kids" className="text-emerald-600 hover:text-emerald-800 underline">
                    Vocabulary Building
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/parts-of-speech" className="text-emerald-600 hover:text-emerald-800 underline">
                    Parts of Speech
                  </Link>
                </li>
              </ul>
            </div>

            {/* Pro Tip */}
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">Pro Tip</h3>
              <p className="opacity-90">
                When you encounter an unfamiliar word, try to identify its root word first. This often gives you a clue to its meaning, even if you don&apos;t know the exact definition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
