"use client"

import Link from "next/link"

export default function PluralNouns() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-500 to-violet-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Plural Nouns</h1>
          <p className="text-xl opacity-90">
            Master the rules for making nouns plural in English
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-purple-800 mb-4">
                What Are Plural Nouns?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Plural nouns are words that refer to more than one person, place, thing, or idea. In English, most nouns become plural by adding &quot;-s&quot; or &quot;-es&quot; to the singular form.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Understanding plural noun rules is essential for proper grammar and clear communication in both speaking and writing.
              </p>
            </div>

            {/* Basic Rules */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-purple-800 mb-6">
                Basic Plural Rules
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-purple-700 mb-3">Add -s</h3>
                  <p className="text-gray-700 mb-3">
                    Most nouns simply add &quot;-s&quot;
                  </p>
                  <p className="text-gray-600">
                    cat → cats<br />
                    book → books<br />
                    tree → trees
                  </p>
                </div>
                <div className="bg-violet-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-violet-700 mb-3">Add -es</h3>
                  <p className="text-gray-700 mb-3">
                    Nouns ending in -s, -ss, -sh, -ch, -x, -z
                  </p>
                  <p className="text-gray-600">
                    bus → buses<br />
                    dish → dishes<br />
                    box → boxes
                  </p>
                </div>
              </div>
            </div>

            {/* Special Cases */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-purple-800 mb-6">
                Special Cases
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">Nouns Ending in -y</h3>
                  <p className="text-gray-700 mb-3">
                    Change -y to -i and add -es (if consonant before -y)
                  </p>
                  <p className="text-gray-600 italic">
                    baby → babies<br />
                    city → cities<br />
                    boy → boys (vowel before -y)
                  </p>
                </div>
                <div className="border-l-4 border-violet-500 pl-6">
                  <h3 className="text-xl font-semibold text-violet-700 mb-2">Nouns Ending in -f or -fe</h3>
                  <p className="text-gray-700 mb-3">
                    Change -f/-fe to -ves
                  </p>
                  <p className="text-gray-600 italic">
                    leaf → leaves<br />
                    wife → wives<br />
                    roof → roofs (some exceptions)
                  </p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2">Irregular Plurals</h3>
                  <p className="text-gray-700 mb-3">
                    Completely different plural forms
                  </p>
                  <p className="text-gray-600 italic">
                    child → children<br />
                    foot → feet<br />
                    tooth → teeth
                  </p>
                </div>
              </div>
            </div>

            {/* Compound Nouns */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-purple-800 mb-6">
                Compound Nouns
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-purple-700 mb-3">Pluralize Main Word</h3>
                  <p className="text-gray-700 mb-3">
                    Usually the main noun gets pluralized
                  </p>
                  <p className="text-gray-600">
                    mother-in-law → mothers-in-law<br />
                    passer-by → passers-by
                  </p>
                </div>
                <div className="bg-violet-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-violet-700 mb-3">Both Words Plural</h3>
                  <p className="text-gray-700 mb-3">
                    Some compound nouns pluralize both parts
                  </p>
                  <p className="text-gray-600">
                    woman doctor → women doctors<br />
                    man servant → men servants
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quizzes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-purple-800 mb-6">
                Interactive Quizzes
              </h2>
              
              <div className="space-y-6">
                <details className="bg-purple-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-purple-700 cursor-pointer hover:text-purple-800">
                    Quiz 1: Basic Plural Forms
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Make these nouns plural:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. dog</p>
                      <p className="text-gray-600 text-sm">Answer: dogs</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. church</p>
                      <p className="text-gray-600 text-sm">Answer: churches</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">3. baby</p>
                      <p className="text-gray-600 text-sm">Answer: babies</p>
                    </div>
                  </div>
                </details>

                <details className="bg-violet-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-violet-700 cursor-pointer hover:text-violet-800">
                    Quiz 2: Special Cases
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Form the plural of these special nouns:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. leaf</p>
                      <p className="text-gray-600 text-sm">Answer: leaves</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. child</p>
                      <p className="text-gray-600 text-sm">Answer: children</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">3. roof</p>
                      <p className="text-gray-600 text-sm">Answer: roofs (exception to the rule)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-indigo-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-indigo-700 cursor-pointer hover:text-indigo-800">
                    Quiz 3: Compound Nouns
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Make these compound nouns plural:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. mother-in-law</p>
                      <p className="text-gray-600 text-sm">Answer: mothers-in-law</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. woman doctor</p>
                      <p className="text-gray-600 text-sm">Answer: women doctors</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">3. passer-by</p>
                      <p className="text-gray-600 text-sm">Answer: passers-by</p>
                    </div>
                  </div>
                </details>

                <details className="bg-purple-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-purple-700 cursor-pointer hover:text-purple-800">
                    Quiz 4: Mixed Challenge
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Identify the correct plural form:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. Which is correct: &quot;The childs are playing&quot; or &quot;The children are playing&quot;?</p>
                      <p className="text-gray-600 text-sm">Answer: &quot;The children are playing&quot; (irregular plural)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. Which is correct: &quot;I have two lifes&quot; or &quot;I have two lives&quot;?</p>
                      <p className="text-gray-600 text-sm">Answer: &quot;I have two lives&quot; (change -f to -ves)</p>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-purple-800 mb-4">
                Important Notes
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>• Some nouns have the same singular and plural forms (e.g., sheep, deer, fish).</p>
                <p>• Nouns borrowed from other languages may follow different pluralization rules.</p>
                <p>• Always check a dictionary when unsure about irregular plural forms.</p>
                <p>• Collective nouns can be singular or plural depending on context.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Pro Tip</h3>
              <p className="text-gray-700">
                When in doubt about a plural form, try to think of the word in a sentence. For example, &quot;I see one child&quot; vs. &quot;I see many children.&quot;
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Related Topics</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/grammar/nouns" className="text-purple-600 hover:text-purple-800 hover:underline">
                    Nouns
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/spelling-rules" className="text-purple-600 hover:text-purple-800 hover:underline">
                    Spelling Rules
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/parts-of-speech" className="text-purple-600 hover:text-purple-800 hover:underline">
                    Parts of Speech
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/english-grammar" className="text-purple-600 hover:text-purple-800 hover:underline">
                    English Grammar
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/sentence-structure" className="text-purple-600 hover:text-purple-800 hover:underline">
                    Sentence Structure
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
