"use client"

import Link from "next/link"

export default function IdiomWorksheets() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Idiom Worksheets
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Fun and interactive worksheets to master English idioms and expressions
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are Idioms?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Idioms are expressions whose meanings cannot be understood from the literal meanings of the words. 
                They add color and personality to language, making communication more vivid and interesting. 
                From &quot;break a leg&quot; to &quot;piece of cake,&quot; idioms are everywhere in English!
              </p>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Idiom Categories
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-2xl font-semibold text-orange-700 mb-3">Success & Achievement</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Break a leg</p>
                      <p className="text-orange-600">Good luck!</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Hit the nail on the head</p>
                      <p className="text-orange-600">To be exactly right</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Piece of cake</p>
                      <p className="text-orange-600">Something very easy</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Pull yourself together</p>
                      <p className="text-orange-600">Calm down and control yourself</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-2xl font-semibold text-red-700 mb-3">Time & Timing</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">In the nick of time</p>
                      <p className="text-red-600">Just in time</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">Time flies</p>
                      <p className="text-red-600">Time passes quickly</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">Better late than never</p>
                      <p className="text-red-600">It&apos;s better to do something late than not at all</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">Kill time</p>
                      <p className="text-red-600">To pass time while waiting</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-2xl font-semibold text-pink-700 mb-3">Money & Business</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Break the bank</p>
                      <p className="text-pink-600">To cost a lot of money</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Cash cow</p>
                      <p className="text-pink-600">A profitable business</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Penny pincher</p>
                      <p className="text-pink-600">Someone who is very careful with money</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Money talks</p>
                      <p className="text-pink-600">Money has influence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Examples Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Idioms in Context
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border-l-4 border-orange-400">
                  <p className="text-lg">
                    <span className="font-semibold text-orange-700">&quot;Break a leg!&quot;</span> I said to my friend before her performance.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border-l-4 border-red-400">
                  <p className="text-lg">
                    <span className="font-semibold text-red-700">Time flies</span> when you&apos;re having fun!
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl border-l-4 border-pink-400">
                  <p className="text-lg">
                    That new car will <span className="font-semibold text-pink-700">break the bank</span>!
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <p className="text-lg">
                    <span className="font-semibold text-purple-700">Hit the nail on the head</span> with that answer!
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Match the Idiom
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Match each idiom with its meaning:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">What does &quot;break a leg&quot; mean?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Good luck!</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">What does &quot;piece of cake&quot; mean?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Something very easy</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">What does &quot;time flies&quot; mean?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Time passes quickly</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Complete the Idiom
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Complete these common idioms:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Better late than _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: never</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Hit the _____ on the head</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: nail</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">_____ talks</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Money</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Use in Sentences
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Use these idioms in sentences:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use &quot;break a leg&quot; in a sentence</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: &quot;Break a leg!&quot; I said to my friend before her dance recital.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use &quot;piece of cake&quot; in a sentence</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: The math test was a piece of cake for the advanced student.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use &quot;time flies&quot; in a sentence</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Time flies when you&apos;re having fun at the amusement park.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Writing Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Using Idioms
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Know Your Audience</h4>
                    <p className="text-gray-600">Use idioms that your audience will understand and appreciate.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Don&apos;t Overuse</h4>
                    <p className="text-gray-600">Too many idioms can make writing confusing or clichéd.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Practice Context</h4>
                    <p className="text-gray-600">Learn when and how to use idioms appropriately in different situations.</p>
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
                <Link href="/grammar/idioms" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Idioms
                </Link>
                <Link href="/grammar/figurative-language" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Figurative Language
                </Link>
                <Link href="/grammar/metaphors" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Metaphors
                </Link>
                <Link href="/grammar/similes" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Similes
                </Link>
                <Link href="/grammar/expressions" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Common Expressions
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Idiom Categories:</span>
                  <span className="text-gray-600">10+ categories</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Common Idioms:</span>
                  <span className="text-gray-600">100+ expressions</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-orange-100">
                Idioms add personality to your language - practice them regularly to sound more natural and engaging!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 