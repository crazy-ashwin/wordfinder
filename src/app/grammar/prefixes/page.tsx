"use client"

import Link from "next/link"

export default function Prefixes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-sky-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Prefixes</h1>
          <p className="text-xl opacity-90">
            Master the word beginnings that change meaning and create new words
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
              <h2 className="text-3xl font-bold text-blue-800 mb-4">What Are Prefixes?</h2>
              <p className="text-lg text-gray-700 mb-4">
                Prefixes are word parts added to the beginning of base words to change their meaning or create new words. They are powerful tools for expanding vocabulary and understanding word relationships.
              </p>
              <p className="text-lg text-gray-700">
                Learning common prefixes helps you decode unfamiliar words and see how English words are built from smaller meaning units.
              </p>
            </div>

            {/* Common Prefixes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Common Prefixes</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Negative Prefixes</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>un-</strong> - <em>unhappy, unfair, unable</em></li>
                    <li><strong>in-</strong> - <em>invisible, incorrect, incomplete</em></li>
                    <li><strong>im-</strong> - <em>impossible, impatient, immature</em></li>
                    <li><strong>il-</strong> - <em>illegal, illogical, illiterate</em></li>
                    <li><strong>ir-</strong> - <em>irregular, irresponsible, irrational</em></li>
                  </ul>
                </div>

                <div className="bg-sky-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-sky-700 mb-3">Directional Prefixes</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>re-</strong> - <em>return, rewrite, rebuild</em></li>
                    <li><strong>pre-</strong> - <em>preview, prepare, prevent</em></li>
                    <li><strong>post-</strong> - <em>postpone, postwar, postgraduate</em></li>
                    <li><strong>sub-</strong> - <em>subway, submarine, submerge</em></li>
                    <li><strong>super-</strong> - <em>superman, superstar, superhuman</em></li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-cyan-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-cyan-700 mb-3">Number & Size Prefixes</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>bi-</strong> - <em>bicycle, bilingual, biannual</em></li>
                    <li><strong>tri-</strong> - <em>triangle, tricycle, triple</em></li>
                    <li><strong>mini-</strong> - <em>miniskirt, minivan, minicomputer</em></li>
                    <li><strong>micro-</strong> - <em>microscope, microwave, microchip</em></li>
                    <li><strong>macro-</strong> - <em>macroeconomics, macrocosm, macroscopic</em></li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Time & Order Prefixes</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>ante-</strong> - <em>antecedent, antedate, anteroom</em></li>
                    <li><strong>fore-</strong> - <em>forecast, foretell, forewarn</em></li>
                    <li><strong>mid-</strong> - <em>midnight, midday, midterm</em></li>
                    <li><strong>neo-</strong> - <em>neonatal, neoclassical, neologism</em></li>
                    <li><strong>proto-</strong> - <em>prototype, protoplasm, protolanguage</em></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How Prefixes Work */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">How Prefixes Work</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-100 to-sky-100 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Changing Meaning</h3>
                  <p className="text-gray-700 mb-3">
                    Prefixes can completely change the meaning of a word:
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <em>happy</em> + <strong>un-</strong> = <em>unhappy</em> (not happy)</li>
                    <li>• <em>write</em> + <strong>re-</strong> = <em>rewrite</em> (write again)</li>
                    <li>• <em>view</em> + <strong>pre-</strong> = <em>preview</em> (view before)</li>
                    <li>• <em>possible</em> + <strong>im-</strong> = <em>impossible</em> (not possible)</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-sky-100 to-cyan-100 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-sky-700 mb-3">Creating New Words</h3>
                  <p className="text-gray-700 mb-3">
                    Prefixes help create new words by adding specific meanings:
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <strong>co-</strong> means &quot;together&quot; (cooperate, coworker, coauthor)</li>
                    <li>• <strong>anti-</strong> means &quot;against&quot; (antibiotic, antisocial, antifreeze)</li>
                    <li>• <strong>auto-</strong> means &quot;self&quot; (automatic, autobiography, automobile)</li>
                    <li>• <strong>trans-</strong> means &quot;across&quot; (transport, transfer, translate)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quizzes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Interactive Quizzes</h2>
              
              <div className="space-y-6">
                <details className="bg-blue-50 p-6 rounded-xl">
                  <summary className="text-xl font-semibold text-blue-700 cursor-pointer hover:text-blue-800">
                    Quiz 1: Identify the Prefix
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700"><strong>Question:</strong> What prefix is in &quot;unhappy&quot; and what does it do?</p>
                    <details className="ml-4">
                      <summary className="text-sky-600 cursor-pointer hover:text-sky-800">Show Answer</summary>
                      <p className="mt-2 text-gray-700">The prefix is <strong>un-</strong>. It changes the meaning from &quot;happy&quot; to &quot;not happy&quot; or &quot;unhappy.&quot;</p>
                    </details>
                  </div>
                </details>

                <details className="bg-sky-50 p-6 rounded-xl">
                  <summary className="text-xl font-semibold text-sky-700 cursor-pointer hover:text-sky-800">
                    Quiz 2: Create New Words
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700"><strong>Question:</strong> Add the prefix <strong>re-</strong> to &quot;write&quot; and explain what the new word means.</p>
                    <details className="ml-4">
                      <summary className="text-blue-600 cursor-pointer hover:text-blue-800">Show Answer</summary>
                      <p className="mt-2 text-gray-700">Adding <strong>re-</strong> to &quot;write&quot; creates <em>rewrite</em>, which means &quot;to write again&quot; or &quot;to write in a different way.&quot;</p>
                    </details>
                  </div>
                </details>

                <details className="bg-cyan-50 p-6 rounded-xl">
                  <summary className="text-xl font-semibold text-cyan-700 cursor-pointer hover:text-cyan-800">
                    Quiz 3: Prefix Meanings
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700"><strong>Question:</strong> What does the prefix <strong>pre-</strong> mean? Give three examples.</p>
                    <details className="ml-4">
                      <summary className="text-sky-600 cursor-pointer hover:text-sky-800">Show Answer</summary>
                      <p className="mt-2 text-gray-700">The prefix <strong>pre-</strong> means &quot;before.&quot; Examples: <em>preview</em> (view before), <em>prepare</em> (make ready before), <em>prevent</em> (stop before it happens).</p>
                    </details>
                  </div>
                </details>

                <details className="bg-blue-50 p-6 rounded-xl">
                  <summary className="text-xl font-semibold text-blue-700 cursor-pointer hover:text-blue-800">
                    Quiz 4: Opposite Meanings
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700"><strong>Question:</strong> What prefix would you add to &quot;visible&quot; to make it mean &quot;not visible&quot;?</p>
                    <details className="ml-4">
                      <summary className="text-sky-600 cursor-pointer hover:text-sky-800">Show Answer</summary>
                      <p className="mt-2 text-gray-700">You would add the prefix <strong>in-</strong> to create <em>invisible</em>, which means &quot;not visible&quot; or &quot;unable to be seen.&quot;</p>
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
              <h3 className="text-xl font-bold text-blue-800 mb-4">Notes Section</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Spelling Changes:</strong> Some prefixes change spelling when added to certain words (e.g., &quot;in-&quot; becomes &quot;im-&quot; before words starting with &quot;p&quot; or &quot;b&quot;).</p>
                <p><strong>Multiple Prefixes:</strong> Words can have multiple prefixes (e.g., &quot;unprecedented&quot; has both <strong>un-</strong> and <strong>pre-</strong>).</p>
                <p><strong>Origin:</strong> Many English prefixes come from Latin and Greek, which is why they appear in academic and scientific vocabulary.</p>
              </div>
            </div>

            {/* Pro Tip */}
            <div className="bg-gradient-to-br from-blue-500 to-sky-600 text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">Pro Tip</h3>
              <p className="opacity-90">
                When you see an unfamiliar word, try removing the prefix to see if you recognize the base word. This can help you understand the word&apos;s meaning.
              </p>
            </div>

            {/* Related Topics */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Related Topics</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/grammar/suffixes" className="text-blue-600 hover:text-blue-800 underline">
                    Suffixes
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/root-word" className="text-blue-600 hover:text-blue-800 underline">
                    Root Words
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/word-building" className="text-blue-600 hover:text-blue-800 underline">
                    Word Building
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/parts-of-speech" className="text-blue-600 hover:text-blue-800 underline">
                    Parts of Speech
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/spelling-rules" className="text-blue-600 hover:text-blue-800 underline">
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
