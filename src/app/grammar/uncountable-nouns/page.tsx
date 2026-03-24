"use client"

import Link from "next/link"

export default function UncountableNouns() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Uncountable Nouns</h1>
          <p className="text-xl opacity-90">
            Understand nouns that cannot be counted individually
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
                What Are Uncountable Nouns?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Uncountable nouns (also called mass nouns) are nouns that refer to things that cannot be counted individually. They represent substances, concepts, or qualities that are considered as a whole.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                These nouns are always singular and cannot be used with numbers or the indefinite articles &quot;a&quot; or &quot;an.&quot;
              </p>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-teal-800 mb-6">
                Categories of Uncountable Nouns
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-teal-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Substances & Materials</h3>
                  <p className="text-gray-700 mb-3">
                    Physical materials that can&apos;t be counted
                  </p>
                  <p className="text-gray-600">
                    water, air, sand<br />
                    wood, metal, plastic<br />
                    rice, sugar, flour
                  </p>
                </div>
                <div className="bg-cyan-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-cyan-700 mb-3">Abstract Concepts</h3>
                  <p className="text-gray-700 mb-3">
                    Ideas and concepts
                  </p>
                  <p className="text-gray-600">
                    happiness, love, freedom<br />
                    knowledge, wisdom, beauty<br />
                    justice, peace, democracy
                  </p>
                </div>
              </div>
            </div>

            {/* Examples */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-teal-800 mb-6">
                Common Examples
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-2">Liquids & Gases</h3>
                  <p className="text-gray-700 mb-3">
                    Substances that flow and cannot be counted
                  </p>
                  <p className="text-gray-600 italic">
                    coffee, tea, milk, oil<br />
                    oxygen, nitrogen, steam
                  </p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-xl font-semibold text-cyan-700 mb-2">Food & Ingredients</h3>
                  <p className="text-gray-700 mb-3">
                    Food items that are measured, not counted
                  </p>
                  <p className="text-gray-600 italic">
                    bread, cheese, meat, butter<br />
                    salt, pepper, honey, jam
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">Activities & Sports</h3>
                  <p className="text-gray-700 mb-3">
                    Actions and recreational activities
                  </p>
                  <p className="text-gray-600 italic">
                    swimming, reading, cooking<br />
                    football, tennis, chess
                  </p>
                </div>
              </div>
            </div>

            {/* Quantifiers */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-teal-800 mb-6">
                Using Quantifiers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-teal-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Amount Quantifiers</h3>
                  <p className="text-gray-700 mb-3">
                    Words that express quantity
                  </p>
                  <p className="text-gray-600">
                    some water<br />
                    a lot of money<br />
                    little time<br />
                    much effort
                  </p>
                </div>
                <div className="bg-cyan-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-cyan-700 mb-3">Container Quantifiers</h3>
                  <p className="text-gray-700 mb-3">
                    Using containers to make countable
                  </p>
                  <p className="text-gray-600">
                    a cup of coffee<br />
                    a piece of advice<br />
                    a slice of bread<br />
                    a bottle of water
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
                    Quiz 1: Identify Uncountable Nouns
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Which of these are uncountable nouns?</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. book, knowledge, car, happiness</p>
                      <p className="text-gray-600 text-sm">Answer: knowledge, happiness (uncountable)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. water, tree, music, table</p>
                      <p className="text-gray-600 text-sm">Answer: water, music (uncountable)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-cyan-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-cyan-700 cursor-pointer hover:text-cyan-800">
                    Quiz 2: Correct Usage
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Which sentence is correct?</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;I need a advice&quot; or &quot;I need some advice&quot;?</p>
                      <p className="text-gray-600 text-sm">Answer: &quot;I need some advice&quot; (advice is uncountable)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;I have many money&quot; or &quot;I have much money&quot;?</p>
                      <p className="text-gray-600 text-sm">Answer: &quot;I have much money&quot; (money is uncountable)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-blue-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-blue-700 cursor-pointer hover:text-blue-800">
                    Quiz 3: Quantifiers
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Choose the correct quantifier:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. I need _____ information about this topic.</p>
                      <p className="text-gray-600 text-sm">Answer: some (information is uncountable)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. There is _____ furniture in this room.</p>
                      <p className="text-gray-600 text-sm">Answer: little (furniture is uncountable)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-teal-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-teal-700 cursor-pointer hover:text-teal-800">
                    Quiz 4: Making Countable
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">How can you make these uncountable nouns countable?</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. coffee</p>
                      <p className="text-gray-600 text-sm">Answer: a cup of coffee, a mug of coffee</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. bread</p>
                      <p className="text-gray-600 text-sm">Answer: a slice of bread, a loaf of bread</p>
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
                <p>• Uncountable nouns are always singular and take singular verbs.</p>
                <p>• Some nouns can be both countable and uncountable depending on context.</p>
                <p>• Use &quot;much&quot; and &quot;little&quot; with uncountable nouns, not &quot;many&quot; and &quot;few.&quot;</p>
                <p>• To express specific amounts, use container words or measurement terms.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-teal-800 mb-4">Pro Tip</h3>
              <p className="text-gray-700">
                If you can&apos;t put a number in front of a noun (like &quot;three waters&quot;), it&apos;s probably uncountable. Use quantifiers like &quot;some,&quot; &quot;much,&quot; or &quot;a lot of&quot; instead.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-teal-800 mb-4">Related Topics</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/grammar/nouns" className="text-teal-600 hover:text-teal-800 hover:underline">
                    Nouns
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/quantifiers" className="text-teal-600 hover:text-teal-800 hover:underline">
                    Quantifiers
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/articles" className="text-teal-600 hover:text-teal-800 hover:underline">
                    Articles
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
