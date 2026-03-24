"use client"

import Link from "next/link"

export default function SuperlativeAdjectives() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Superlative Adjectives
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Learn how to use superlative adjectives to express the highest degree of comparison
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are Superlative Adjectives?
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Superlative adjectives are words that express the highest degree of a quality when comparing three or more things. They are formed by adding &quot;-est&quot; to short adjectives or using &quot;most&quot; with longer adjectives. Superlative adjectives are essential for <Link href="/grammar/comparison-writing" className="text-cyan-600 hover:text-cyan-800 font-semibold">comparison writing</Link> and help you describe the extreme qualities of people, places, or things. Understanding superlatives is key to mastering <Link href="/grammar/english-grammar" className="text-cyan-600 hover:text-cyan-800 font-semibold">English grammar</Link>.
              </p>
            </div>

            {/* Formation Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                How to Form Superlative Adjectives
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-2xl font-semibold text-cyan-700 mb-3">1. Short Adjectives (1-2 syllables)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Rule</p>
                      <p className="text-cyan-600">Add -est to the base form</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Examples</p>
                      <p className="text-cyan-600">tall → tallest, big → biggest</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Usage</p>
                      <p className="text-cyan-600">For simple, short adjectives</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Sentence</p>
                      <p className="text-cyan-600">She is the tallest girl in class.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-3">2. Long Adjectives (3+ syllables)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Rule</p>
                      <p className="text-blue-600">Use &quot;most&quot; before the adjective</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Examples</p>
                      <p className="text-blue-600">beautiful → most beautiful</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Usage</p>
                      <p className="text-blue-600">For longer, complex adjectives</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Sentence</p>
                      <p className="text-blue-600">This is the most beautiful garden.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-3">3. Irregular Adjectives</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Rule</p>
                      <p className="text-indigo-600">Completely different forms</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Examples</p>
                      <p className="text-indigo-600">good → best, bad → worst</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Usage</p>
                      <p className="text-indigo-600">Must be memorized</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Sentence</p>
                      <p className="text-indigo-600">This is the best movie ever.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Superlative Forms */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Common Superlative Forms
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-cyan-700 mb-4">Regular Superlatives</h3>
                  <div className="space-y-3">
                    <div className="bg-cyan-50 p-3 rounded-lg">
                      <span className="font-semibold text-cyan-800">Size:</span>
                      <span className="text-cyan-600 ml-2">big → biggest, small → smallest</span>
                    </div>
                    <div className="bg-cyan-50 p-3 rounded-lg">
                      <span className="font-semibold text-cyan-800">Height:</span>
                      <span className="text-cyan-600 ml-2">tall → tallest, short → shortest</span>
                    </div>
                    <div className="bg-cyan-50 p-3 rounded-lg">
                      <span className="font-semibold text-cyan-800">Age:</span>
                      <span className="text-cyan-600 ml-2">old → oldest, young → youngest</span>
                    </div>
                    <div className="bg-cyan-50 p-3 rounded-lg">
                      <span className="font-semibold text-cyan-800">Speed:</span>
                      <span className="text-cyan-600 ml-2">fast → fastest, slow → slowest</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">Irregular Superlatives</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <span className="font-semibold text-blue-800">Good/Bad:</span>
                      <span className="text-blue-600 ml-2">good → best, bad → worst</span>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <span className="font-semibold text-blue-800">Many/Much:</span>
                      <span className="text-blue-600 ml-2">many/much → most</span>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <span className="font-semibold text-blue-800">Little:</span>
                      <span className="text-blue-600 ml-2">little → least</span>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <span className="font-semibold text-blue-800">Far:</span>
                      <span className="text-blue-600 ml-2">far → farthest/furthest</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage Patterns */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                How to Use Superlative Adjectives
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-3">1. With &quot;The&quot; Article</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Rule</p>
                      <p className="text-indigo-600">Always use &quot;the&quot; with superlatives</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Examples</p>
                      <p className="text-indigo-600">the biggest, the most beautiful</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Usage</p>
                      <p className="text-indigo-600">Required in most cases</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Sentence</p>
                      <p className="text-indigo-600">This is the tallest building.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-2xl font-semibold text-cyan-700 mb-3">2. In Groups or Categories</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Rule</p>
                      <p className="text-cyan-600">Compare within a specific group</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Examples</p>
                      <p className="text-cyan-600">in the class, of all time</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Usage</p>
                      <p className="text-cyan-600">Specify the comparison group</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Sentence</p>
                      <p className="text-cyan-600">She is the smartest student in the class.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Form Superlatives
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Convert these adjectives to superlative form:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;big&quot; → superlative</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: biggest</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;beautiful&quot; → superlative</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: most beautiful</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;good&quot; → superlative</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: best (irregular)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Complete Superlative Sentences
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Complete these sentences with superlatives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;This is the _____ mountain in the world.&quot; (tall)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: tallest</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;She is the _____ person I know.&quot; (intelligent)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: most intelligent</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;This is the _____ movie I have ever seen.&quot; (good)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: best</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Choose the Right Form
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Select the correct superlative form:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;This is the _____ car in the showroom.&quot; (expensive)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: most expensive (long adjective)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;He is the _____ boy in the family.&quot; (young)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: youngest (short adjective)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;This is the _____ book I have read.&quot; (bad)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: worst (irregular)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Superlative Challenge
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Create sentences using superlatives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: &quot;tall&quot; + superlative + &quot;in the class&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: He is the tallest student in the class.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: &quot;interesting&quot; + superlative + &quot;of all time&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: This is the most interesting story of all time.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: &quot;good&quot; + superlative + &quot;in the world&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: She is the best singer in the world.</p>
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
                <li>• Always use &quot;the&quot; before superlative adjectives</li>
                <li>• Short adjectives (1-2 syllables) add -est</li>
                <li>• Long adjectives (3+ syllables) use &quot;most&quot;</li>
                <li>• Irregular superlatives must be memorized (good → best, bad → worst)</li>
                <li>• Superlatives compare one thing to a group of three or more</li>
              </ul>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Important Rules for Superlative Adjectives
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Use &quot;The&quot; Article</h4>
                    <p className="text-gray-600">Superlative adjectives always require the definite article &quot;the.&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Compare to Groups</h4>
                    <p className="text-gray-600">Superlatives compare one item to a group of three or more things.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Spelling Changes</h4>
                    <p className="text-gray-600">Some adjectives double consonants or change spelling when adding -est.</p>
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
                <Link href="/grammar/comparative-adjectives" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Comparative Adjectives
                </Link>
                <Link href="/grammar/comparison-writing" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Comparison Writing
                </Link>
                <Link href="/grammar/adjectives" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Adjectives
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Parts of Speech
                </Link>
                <Link href="/grammar/english-grammar" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  English Grammar
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Forms:</span>
                  <span className="text-gray-600">3 main types</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Function:</span>
                  <span className="text-gray-600">Show highest degree</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-cyan-100">
                Superlatives help you express the extreme qualities and make your descriptions more powerful!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
