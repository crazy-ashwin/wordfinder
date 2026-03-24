"use client"

import Link from "next/link"

export default function FigurativeLanguagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Figurative Language
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Master the art of using words creatively to create vivid imagery, convey emotions, and make writing more engaging
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-indigo-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What is Figurative Language?
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Figurative language uses words in a way that differs from their literal meaning to create vivid imagery, 
                convey emotions, and make writing more engaging. It helps writers express ideas in creative and memorable ways, 
                making language more colorful, expressive, and impactful.
              </p>
            </div>

            {/* Types of Figurative Language */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Types of Figurative Language
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-3">1. Simile</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Definition</p>
                      <p className="text-blue-600">Compares two things using &quot;like&quot; or &quot;as&quot;</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Examples</p>
                      <p className="text-blue-600">Her smile was like sunshine</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Function</p>
                      <p className="text-blue-600">Creates vivid comparisons</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Sentence</p>
                      <p className="text-blue-600">He ran as fast as a cheetah.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-2xl font-semibold text-green-700 mb-3">2. Metaphor</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">Definition</p>
                      <p className="text-green-600">Direct comparison without &quot;like&quot; or &quot;as&quot;</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">Examples</p>
                      <p className="text-green-600">Life is a journey</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">Function</p>
                      <p className="text-green-600">Suggests one thing is another</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">Sentence</p>
                      <p className="text-green-600">The classroom was a zoo during recess.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-2xl font-semibold text-yellow-700 mb-3">3. Personification</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800">Definition</p>
                      <p className="text-yellow-600">Gives human qualities to non-human things</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800">Examples</p>
                      <p className="text-yellow-600">The wind whispered</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800">Function</p>
                      <p className="text-yellow-600">Makes objects come alive</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800">Sentence</p>
                      <p className="text-yellow-600">The sun smiled down on the beach.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-2xl font-semibold text-red-700 mb-3">4. Hyperbole</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">Definition</p>
                      <p className="text-red-600">Extreme exaggeration for effect</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">Examples</p>
                      <p className="text-red-600">I&apos;ve told you a million times</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">Function</p>
                      <p className="text-red-600">Creates dramatic emphasis</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">Sentence</p>
                      <p className="text-red-600">This backpack weighs a ton!</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-3">5. Alliteration</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Definition</p>
                      <p className="text-purple-600">Repetition of initial consonant sounds</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Examples</p>
                      <p className="text-purple-600">Peter Piper picked peppers</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Function</p>
                      <p className="text-purple-600">Creates rhythm and musicality</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Sentence</p>
                      <p className="text-purple-600">The silent snow settled softly.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-2xl font-semibold text-teal-700 mb-3">6. Onomatopoeia</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Definition</p>
                      <p className="text-teal-600">Words that imitate sounds</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Examples</p>
                      <p className="text-teal-600">buzz, crash, whisper</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Function</p>
                      <p className="text-teal-600">Brings sounds to life</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Sentence</p>
                      <p className="text-teal-600">The thunder boomed across the sky.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz: Identify Figurative Language
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify the type of figurative language used in each sentence:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;The stars winked at me from the night sky.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: <strong>Personification</strong> - stars are given the human action of winking</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;She is as busy as a bee.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: <strong>Simile</strong> - uses &quot;as&quot; to compare her to a bee</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;The classroom was a zoo during lunch break.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: <strong>Metaphor</strong> - directly compares classroom to a zoo</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">4. &quot;I&apos;ve been waiting here for a million years!&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: <strong>Hyperbole</strong> - extreme exaggeration for effect</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">5. &quot;The big brown bear bounced the ball.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: <strong>Alliteration</strong> - repetition of the &quot;b&quot; sound</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Practice Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Advanced Practice: Create Your Own
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Practice creating figurative language:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Create a simile about happiness:</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: &quot;Happiness is like a warm blanket on a cold day.&quot;</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Create a metaphor about friendship:</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: &quot;Friendship is a bridge that connects hearts.&quot;</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Personify the ocean:</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: &quot;The ocean roared with anger during the storm.&quot;</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>• Figurative language makes writing more colorful, expressive, and memorable</li>
                <li>• Use it sparingly to enhance, not overwhelm your writing</li>
                <li>• Choose comparisons that fit your topic and help readers understand</li>
                <li>• Consider your audience when selecting figurative language</li>
                <li>• Practice reading and writing examples to improve your skills</li>
              </ul>
            </div>

            {/* Writing Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Important Rules for Using Figurative Language
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Use it Sparingly</h4>
                    <p className="text-gray-600">Too much figurative language can make writing confusing. Use it to enhance, not overwhelm.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Make it Relevant</h4>
                    <p className="text-gray-600">Choose comparisons and images that fit your topic and help readers understand your meaning.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Consider Your Audience</h4>
                    <p className="text-gray-600">Use figurative language that your readers will understand and appreciate.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Read and Practice</h4>
                    <p className="text-gray-600">Read examples of good figurative language and practice writing your own to improve your skills.</p>
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
                <Link href="/grammar/metaphor-examples" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Metaphor Examples
                </Link>
                <Link href="/grammar/simile-examples" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Simile Examples
                </Link>
                <Link href="/grammar/personification-examples-for-kids" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Personification Examples
                </Link>
                <Link href="/grammar/alliteration-examples" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Alliteration Examples
                </Link>
                <Link href="/grammar/onomatopoeia-definition-examples" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Onomatopoeia
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Types:</span>
                  <span className="text-gray-600">6 main types</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Function:</span>
                  <span className="text-gray-600">Creative expression</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-indigo-100">
                Figurative language is like seasoning in cooking—a little goes a long way to make your writing more flavorful!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 