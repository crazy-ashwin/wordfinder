"use client"

import Link from "next/link"

export default function PrepositionalPhrases() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Prepositional Phrases</h1>
          <p className="text-xl opacity-90">
            Master the building blocks of sentence structure and meaning
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-amber-800 mb-4">
                What Are Prepositional Phrases?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                A prepositional phrase is a group of words that begins with a preposition and ends with a noun, pronoun, or noun phrase. These phrases function as adjectives or adverbs, adding detail and context to sentences.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Prepositional phrases help answer questions like &quot;where?&quot;, &quot;when?&quot;, &quot;how?&quot;, and &quot;why?&quot; in our writing and speech.
              </p>
            </div>

            {/* Structure */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-amber-800 mb-6">
                Structure of Prepositional Phrases
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-amber-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-amber-700 mb-3">Basic Structure</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Preposition + Object of Preposition</strong>
                  </p>
                  <p className="text-gray-600">
                    The object can be a noun, pronoun, or noun phrase
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-orange-700 mb-3">Example</h3>
                  <p className="text-gray-700">
                    <em>in the garden</em><br />
                    <em>with my friends</em><br />
                    <em>after the movie</em>
                  </p>
                </div>
              </div>
            </div>

            {/* Types */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-amber-800 mb-6">
                Types of Prepositional Phrases
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-6">
                  <h3 className="text-xl font-semibold text-amber-700 mb-2">Adjectival Phrases</h3>
                  <p className="text-gray-700 mb-3">
                    Modify nouns and answer &quot;which one?&quot; or &quot;what kind?&quot;
                  </p>
                  <p className="text-gray-600 italic">
                    The book <em>on the shelf</em> is mine.<br />
                    The girl <em>with red hair</em> is my sister.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-orange-700 mb-2">Adverbial Phrases</h3>
                  <p className="text-gray-700 mb-3">
                    Modify verbs, adjectives, or adverbs and answer &quot;where?&quot;, &quot;when?&quot;, or &quot;how?&quot;
                  </p>
                  <p className="text-gray-600 italic">
                    We walked <em>to the store</em>.<br />
                    The meeting starts <em>at 3 PM</em>.
                  </p>
                </div>
              </div>
            </div>

            {/* Common Prepositions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-amber-800 mb-6">
                Common Prepositions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-amber-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-amber-700 mb-3">Place</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• in, on, at</li>
                    <li>• above, below</li>
                    <li>• beside, between</li>
                    <li>• inside, outside</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-orange-700 mb-3">Time</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• before, after</li>
                    <li>• during, since</li>
                    <li>• until, by</li>
                    <li>• from, to</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-yellow-700 mb-3">Other</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• with, without</li>
                    <li>• by, for</li>
                    <li>• about, of</li>
                    <li>• like, unlike</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quizzes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-amber-800 mb-6">
                Interactive Quizzes
              </h2>
              
              <div className="space-y-6">
                <details className="bg-amber-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-amber-700 cursor-pointer hover:text-amber-800">
                    Quiz 1: Identify Prepositional Phrases
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Identify the prepositional phrase in each sentence:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. The cat slept <em>on the windowsill</em>.</p>
                      <p className="text-gray-600 text-sm">Answer: &quot;on the windowsill&quot; (adverbial phrase)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. The book <em>with the blue cover</em> is interesting.</p>
                      <p className="text-gray-600 text-sm">Answer: &quot;with the blue cover&quot; (adjectival phrase)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-orange-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-orange-700 cursor-pointer hover:text-orange-800">
                    Quiz 2: Function of Prepositional Phrases
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Determine if each prepositional phrase is adjectival or adverbial:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. We arrived <em>at the airport</em> early.</p>
                      <p className="text-gray-600 text-sm">Answer: Adverbial (modifies the verb &quot;arrived&quot;)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. The flowers <em>in the vase</em> are beautiful.</p>
                      <p className="text-gray-600 text-sm">Answer: Adjectival (modifies the noun &quot;flowers&quot;)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-yellow-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-yellow-700 cursor-pointer hover:text-yellow-800">
                    Quiz 3: Complete the Sentences
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Complete each sentence with an appropriate prepositional phrase:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. The children played _____ all afternoon.</p>
                      <p className="text-gray-600 text-sm">Possible answers: &quot;in the park&quot;, &quot;at home&quot;, &quot;with their toys&quot;</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. The movie _____ was very exciting.</p>
                      <p className="text-gray-600 text-sm">Possible answers: &quot;about space travel&quot;, &quot;with special effects&quot;</p>
                    </div>
                  </div>
                </details>

                <details className="bg-amber-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-amber-700 cursor-pointer hover:text-amber-800">
                    Quiz 4: Multiple Prepositional Phrases
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Identify all prepositional phrases in these complex sentences:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">The bird <em>in the tree</em> sang <em>with joy</em> <em>at dawn</em>.</p>
                      <p className="text-gray-600 text-sm">Answer: &quot;in the tree&quot;, &quot;with joy&quot;, &quot;at dawn&quot;</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">The book <em>on the shelf</em> <em>in the library</em> contains stories <em>about adventure</em>.</p>
                      <p className="text-gray-600 text-sm">Answer: &quot;on the shelf&quot;, &quot;in the library&quot;, &quot;about adventure&quot;</p>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-amber-800 mb-4">
                Important Notes
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>• Prepositional phrases can be moved around in sentences for variety and emphasis.</p>
                <p>• A sentence can have multiple prepositional phrases serving different functions.</p>
                <p>• Prepositional phrases should be placed close to the words they modify to avoid confusion.</p>
                <p>• Some prepositions can be used in multiple contexts (e.g., &quot;in&quot; for both place and time).</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-amber-800 mb-4">Pro Tip</h3>
              <p className="text-gray-700">
                When writing, vary your prepositional phrases to avoid repetitive sentence structures. Use them to add detail and create more engaging, descriptive writing.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-amber-800 mb-4">Related Topics</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/grammar/prepositions" className="text-amber-600 hover:text-amber-800 hover:underline">
                    Prepositions
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/sentence-structure" className="text-amber-600 hover:text-amber-800 hover:underline">
                    Sentence Structure
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/parts-of-speech" className="text-amber-600 hover:text-amber-800 hover:underline">
                    Parts of Speech
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/english-grammar" className="text-amber-600 hover:text-amber-800 hover:underline">
                    English Grammar
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/adjectives" className="text-amber-600 hover:text-amber-800 hover:underline">
                    Adjectives
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
