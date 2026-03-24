"use client"

import Link from "next/link"

export default function AdjectivesThatStartWith() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives That Start With
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Explore the colorful world of adjectives beginning with different letters and enhance your vocabulary
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are Adjectives?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Adjectives are words that describe or modify nouns and pronouns. They add color, detail, and specificity 
                to our language, making our communication more vivid and precise. Adjectives can describe qualities, 
                quantities, colors, sizes, emotions, and much more.
              </p>
            </div>

            {/* Alphabetical Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjective Categories by Letter
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">A - Amazing Adjectives</h3>
                  <div className="space-y-2">
                    <p className="text-blue-600"><strong>Amazing</strong> - causing great surprise or wonder</p>
                    <p className="text-blue-600"><strong>Adorable</strong> - inspiring great affection</p>
                    <p className="text-blue-600"><strong>Ambitious</strong> - having a strong desire for success</p>
                    <p className="text-blue-600"><strong>Authentic</strong> - genuine or real</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-400">
                  <h3 className="text-2xl font-semibold text-green-700 mb-4">B - Beautiful Adjectives</h3>
                  <div className="space-y-2">
                    <p className="text-green-600"><strong>Beautiful</strong> - pleasing to the senses</p>
                    <p className="text-green-600"><strong>Brave</strong> - ready to face danger</p>
                    <p className="text-green-600"><strong>Bright</strong> - giving out much light</p>
                    <p className="text-green-600"><strong>Brilliant</strong> - exceptionally clever</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-4">C - Creative Adjectives</h3>
                  <div className="space-y-2">
                    <p className="text-purple-600"><strong>Creative</strong> - involving imagination</p>
                    <p className="text-purple-600"><strong>Curious</strong> - eager to learn</p>
                    <p className="text-purple-600"><strong>Confident</strong> - feeling certain</p>
                    <p className="text-purple-600"><strong>Compassionate</strong> - showing sympathy</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border-l-4 border-red-400">
                  <h3 className="text-2xl font-semibold text-red-700 mb-4">D - Dynamic Adjectives</h3>
                  <div className="space-y-2">
                    <p className="text-red-600"><strong>Dynamic</strong> - characterized by constant change</p>
                    <p className="text-red-600"><strong>Dedicated</strong> - committed to a task</p>
                    <p className="text-red-600"><strong>Diligent</strong> - showing care and effort</p>
                    <p className="text-red-600"><strong>Determined</strong> - having firm purpose</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Adjective Letter Matching
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Match each adjective with the letter it starts with:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Enthusiastic&quot; starts with letter _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: E - Enthusiastic means showing intense excitement</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Friendly&quot; starts with letter _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: F - Friendly means kind and pleasant</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;Generous&quot; starts with letter _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: G - Generous means giving freely</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Create Sentences with Adjectives
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Use these adjectives in sentences:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use &quot;adventurous&quot; in a sentence</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: The adventurous explorer climbed the mountain.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use &quot;mysterious&quot; in a sentence</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: The mysterious stranger appeared at midnight.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use &quot;peaceful&quot; in a sentence</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: The peaceful garden was perfect for meditation.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Adjective Opposites
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the opposite of each adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Happy&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Sad (unhappy, miserable, gloomy)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Big&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Small (tiny, little, miniature)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;Fast&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Slow (sluggish, leisurely, gradual)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Important Grammar Rules for Adjectives
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Position</h4>
                    <p className="text-gray-600">Adjectives usually come before the noun they describe, but some can come after linking verbs.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Comparatives & Superlatives</h4>
                    <p className="text-gray-600">Most adjectives can be compared using -er/-est or more/most forms.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Order</h4>
                    <p className="text-gray-600">Multiple adjectives follow a specific order: opinion, size, age, shape, color, origin, material, purpose.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>Adjectives can be used to make your writing more descriptive and engaging</li>
                <li>Some adjectives can function as both adjectives and adverbs depending on context</li>
                <li>Compound adjectives (like &quot;well-known&quot;) use hyphens when they come before nouns</li>
                <li>Adjectives ending in -ing describe what something is like, while -ed adjectives describe feelings</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjectives" className="block text-green-600 hover:text-green-800 font-medium">
                  Adjectives
                </Link>
                <Link href="/grammar/descriptive-adjectives" className="block text-green-600 hover:text-green-800 font-medium">
                  Descriptive Adjectives
                </Link>
                <Link href="/grammar/comparative-adjectives" className="block text-green-600 hover:text-green-800 font-medium">
                  Comparative Adjectives
                </Link>
                <Link href="/grammar/adjective-examples" className="block text-green-600 hover:text-green-800 font-medium">
                  Adjective Examples
                </Link>
                <Link href="/grammar/adjectives-that-start-with-a" className="block text-green-600 hover:text-green-800 font-medium">
                  Adjectives Starting With A
                </Link>
                <Link href="/grammar/adjectives-that-start-with-c" className="block text-green-600 hover:text-green-800 font-medium">
                  Adjectives Starting With C
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-green-600 hover:text-green-800 font-medium">
                  Parts of Speech
                </Link>
                <Link href="/grammar/english-grammar" className="block text-green-600 hover:text-green-800 font-medium">
                  English Grammar
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Function:</span>
                  <span className="text-gray-600">Describe nouns</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Position:</span>
                  <span className="text-gray-600">Before nouns</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-green-100">
                Use specific adjectives to make your writing more vivid and engaging!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
