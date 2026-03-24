"use client"

import Link from "next/link"

export default function MetaphorExamples() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Metaphor Examples</h1>
          <p className="text-xl opacity-90">
            Discover the power of figurative language and creative expression
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-rose-800 mb-4">
                What Are Metaphors?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                A metaphor is a figure of speech that directly compares two unlike things without using &quot;like&quot; or &quot;as.&quot; It creates vivid imagery and helps readers understand complex ideas through familiar comparisons.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Metaphors make language more colorful, engaging, and memorable by drawing unexpected connections between different concepts.
              </p>
            </div>

            {/* Types of Metaphors */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-rose-800 mb-6">
                Types of Metaphors
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-rose-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-rose-700 mb-3">Direct Metaphors</h3>
                  <p className="text-gray-700 mb-3">
                    Straightforward comparisons
                  </p>
                  <p className="text-gray-600">
                    &quot;Life is a journey&quot;<br />
                    &quot;Time is money&quot;<br />
                    &quot;Love is a rose&quot;
                  </p>
                </div>
                <div className="bg-pink-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-pink-700 mb-3">Implied Metaphors</h3>
                  <p className="text-gray-700 mb-3">
                    Subtle comparisons without direct statements
                  </p>
                  <p className="text-gray-600">
                    &quot;The wind whispered through the trees&quot;<br />
                    &quot;The sun smiled down on us&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Common Metaphor Categories */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-rose-800 mb-6">
                Common Metaphor Categories
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-rose-500 pl-6">
                  <h3 className="text-xl font-semibold text-rose-700 mb-2">Nature & Weather</h3>
                  <p className="text-gray-700 mb-3">
                    Using natural elements to describe emotions and situations
                  </p>
                  <p className="text-gray-600 italic">
                    &quot;Her smile was like sunshine&quot;<br />
                    &quot;He has a heart of stone&quot;<br />
                    &quot;The news hit me like a thunderbolt&quot;
                  </p>
                </div>
                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-xl font-semibold text-pink-700 mb-2">Animals & Creatures</h3>
                  <p className="text-gray-700 mb-3">
                    Comparing human traits to animal characteristics
                  </p>
                  <p className="text-gray-600 italic">
                    &quot;She&apos;s a social butterfly&quot;<br />
                    &quot;He&apos;s as stubborn as a mule&quot;<br />
                    &quot;The child is a little monkey&quot;
                  </p>
                </div>
                <div className="border-l-4 border-fuchsia-500 pl-6">
                  <h3 className="text-xl font-semibold text-fuchsia-700 mb-2">Objects & Machines</h3>
                  <p className="text-gray-700 mb-3">
                    Using inanimate objects to describe living things
                  </p>
                  <p className="text-gray-600 italic">
                    &quot;My brain is a computer&quot;<br />
                    &quot;She&apos;s the engine of our team&quot;<br />
                    &quot;His mind is a steel trap&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Famous Metaphor Examples */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-rose-800 mb-6">
                Famous Metaphor Examples
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-rose-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-rose-700 mb-3">Literature</h3>
                  <p className="text-gray-700 mb-3">
                    Classic examples from famous works
                  </p>
                  <p className="text-gray-600">
                    &quot;All the world&apos;s a stage&quot; - Shakespeare<br />
                    &quot;Life is a broken-winged bird&quot; - Hughes<br />
                    &quot;Hope is the thing with feathers&quot; - Dickinson
                  </p>
                </div>
                <div className="bg-pink-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-pink-700 mb-3">Everyday Speech</h3>
                  <p className="text-gray-700 mb-3">
                    Common metaphors we use daily
                  </p>
                  <p className="text-gray-600">
                    &quot;I&apos;m drowning in work&quot;<br />
                    &quot;She&apos;s the apple of my eye&quot;<br />
                    &quot;He&apos;s a couch potato&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quizzes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-rose-800 mb-6">
                Interactive Quizzes
              </h2>
              
              <div className="space-y-6">
                <details className="bg-rose-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-rose-700 cursor-pointer hover:text-rose-800">
                    Quiz 1: Identify Metaphors
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Which of these are metaphors?</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;Life is a roller coaster&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: Yes, it&apos;s a metaphor comparing life to a roller coaster</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;She runs like the wind&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: No, this is a simile (uses &quot;like&quot;)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-pink-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-pink-700 cursor-pointer hover:text-pink-800">
                    Quiz 2: Complete the Metaphor
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Complete these metaphor starters:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;Knowledge is _____&quot;</p>
                      <p className="text-gray-600 text-sm">Possible answers: power, light, a key, a weapon</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;Friendship is _____&quot;</p>
                      <p className="text-gray-600 text-sm">Possible answers: a garden, a bridge, a shelter, a treasure</p>
                    </div>
                  </div>
                </details>

                <details className="bg-fuchsia-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-fuchsia-700 cursor-pointer hover:text-fuchsia-800">
                    Quiz 3: Metaphor Meanings
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">What do these metaphors mean?</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;She has a heart of gold&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: She is very kind, generous, and caring</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;The classroom was a zoo&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: The classroom was very noisy and chaotic</p>
                    </div>
                  </div>
                </details>

                <details className="bg-rose-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-rose-700 cursor-pointer hover:text-rose-800">
                    Quiz 4: Create Your Own
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Create metaphors for these concepts:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. Create a metaphor for &quot;learning&quot;</p>
                      <p className="text-gray-600 text-sm">Example: &quot;Learning is building a house&quot;</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. Create a metaphor for &quot;time&quot;</p>
                      <p className="text-gray-600 text-sm">Example: &quot;Time is a river&quot;</p>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-rose-800 mb-4">
                Important Notes
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>• Metaphors create stronger imagery than similes because they make direct comparisons.</p>
                <p>• Good metaphors should be original and avoid clichés when possible.</p>
                <p>• Metaphors can be extended throughout a piece of writing for deeper meaning.</p>
                <p>• Context is important - metaphors should make sense to your audience.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-rose-800 mb-4">Pro Tip</h3>
              <p className="text-gray-700">
                When writing metaphors, think about the emotions and associations you want to create. Choose comparisons that will resonate with your readers and enhance their understanding.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-rose-800 mb-4">Related Topics</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/grammar/similes" className="text-rose-600 hover:text-rose-800 hover:underline">
                    Similes
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/figurative-language" className="text-rose-600 hover:text-rose-800 hover:underline">
                    Figurative Language
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/creative-writing" className="text-rose-600 hover:text-rose-800 hover:underline">
                    Creative Writing
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/parts-of-speech" className="text-rose-600 hover:text-rose-800 hover:underline">
                    Parts of Speech
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/english-grammar" className="text-rose-600 hover:text-rose-800 hover:underline">
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