"use client"

import Link from "next/link"

export default function PositiveWords() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Positive Words
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover uplifting words that bring joy and encouragement
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-yellow-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are Positive Words?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Positive words are vocabulary that convey good feelings, uplifting emotions, and encouraging meanings. 
                They help us express joy, gratitude, hope, and optimism. Using positive words can improve our mood, 
                strengthen relationships, and create a more encouraging environment.
              </p>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Types of Positive Words
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-2xl font-semibold text-yellow-700 mb-3">Emotions & Feelings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800">Joy</p>
                      <p className="text-yellow-600">Great happiness and delight</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800">Gratitude</p>
                      <p className="text-yellow-600">Thankfulness and appreciation</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800">Hope</p>
                      <p className="text-yellow-600">Optimistic expectation</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800">Love</p>
                      <p className="text-yellow-600">Deep affection and care</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-amber-500 pl-6">
                  <h3 className="text-2xl font-semibold text-amber-700 mb-3">Actions & Behaviors</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="font-semibold text-amber-800">Inspire</p>
                      <p className="text-amber-600">To motivate and encourage</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="font-semibold text-amber-800">Celebrate</p>
                      <p className="text-amber-600">To honor and rejoice</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="font-semibold text-amber-800">Support</p>
                      <p className="text-amber-600">To help and encourage</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="font-semibold text-amber-800">Achieve</p>
                      <p className="text-amber-600">To accomplish and succeed</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-2xl font-semibold text-orange-700 mb-3">Qualities & Traits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Wonderful</p>
                      <p className="text-orange-600">Amazing and delightful</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Brilliant</p>
                      <p className="text-orange-600">Exceptionally intelligent</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Magnificent</p>
                      <p className="text-orange-600">Impressive and splendid</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Extraordinary</p>
                      <p className="text-orange-600">Beyond ordinary and special</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Examples Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Positive Words in Sentences
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-400">
                  <p className="text-lg">
                    <span className="font-semibold text-yellow-700">The wonderful teacher</span> inspired her students to achieve their dreams.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border-l-4 border-amber-400">
                  <p className="text-lg">
                    <span className="font-semibold text-amber-700">We celebrated</span> the brilliant success with joy and gratitude.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border-l-4 border-orange-400">
                  <p className="text-lg">
                    <span className="font-semibold text-orange-700">The magnificent sunset</span> filled us with hope and love.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border-l-4 border-red-400">
                  <p className="text-lg">
                    <span className="font-semibold text-red-700">Her extraordinary kindness</span> supported everyone around her.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Identify Positive Words
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the positive words in each sentence:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The wonderful teacher inspired joy in her students.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: wonderful, inspired, joy</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">We celebrated the brilliant achievement with gratitude.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: celebrated, brilliant, achievement, gratitude</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The magnificent sunset filled us with hope and love.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: magnificent, filled, hope, love</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Complete with Positive Words
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Complete each sentence with positive words:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ teacher _____ her students to _____.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: wonderful, inspired, succeed</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">We _____ the _____ success with _____ and _____.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: celebrated, brilliant, joy, gratitude</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ sunset _____ us with _____ and _____.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: magnificent, filled, hope, love</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Positive Word Categories
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Sort these positive words by category:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Emotions: joy, gratitude, hope, love</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are positive emotions</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Actions: inspire, celebrate, support, achieve</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are positive actions</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Qualities: wonderful, brilliant, magnificent, extraordinary</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are positive qualities</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Positive vs Negative Words
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify which words are positive:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. Joy, sadness, hope, despair</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Joy and hope are positive</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. Wonderful, terrible, brilliant, awful</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Wonderful and brilliant are positive</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. Inspire, discourage, celebrate, destroy</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Inspire and celebrate are positive</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Writing Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Using Positive Words
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Be Authentic</h4>
                    <p className="text-gray-600">Use positive words that genuinely reflect your feelings and intentions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Expand Your Vocabulary</h4>
                    <p className="text-gray-600">Learn new positive words to express yourself more precisely.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Practice Daily</h4>
                    <p className="text-gray-600">Use positive words in conversations and writing to make them a habit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/positive-adjectives" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Positive Adjectives
                </Link>
                <Link href="/grammar/vocabulary" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Vocabulary
                </Link>
                <Link href="/grammar/emotional-words" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Emotional Words
                </Link>
                <Link href="/grammar/encouraging-language" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Encouraging Language
                </Link>
                <Link href="/grammar/positive-communication" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Positive Communication
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Word Types:</span>
                  <span className="text-gray-600">3 main categories</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Common Examples:</span>
                  <span className="text-gray-600">100+ examples</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner to Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-yellow-100">
                Using positive words can improve your mood and create a more uplifting environment!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 