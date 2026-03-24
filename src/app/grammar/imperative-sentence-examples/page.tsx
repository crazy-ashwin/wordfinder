"use client"

import Link from "next/link"

export default function ImperativeSentenceExamples() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Imperative Sentences
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Learn how to give commands, make requests, and offer advice with imperative sentences
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are Imperative Sentences?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Imperative sentences are used to give commands, make requests, offer advice, or give instructions. 
                They often begin with a verb and can end with a period or exclamation mark. 
                From &quot;Please sit down&quot; to &quot;Stop!&quot; imperative sentences are essential for clear communication.
              </p>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Types of Imperative Sentences
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-3">Commands</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Stop!</p>
                      <p className="text-blue-600">Direct command</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Come here.</p>
                      <p className="text-blue-600">Simple command</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Be quiet.</p>
                      <p className="text-blue-600">Behavior command</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Listen carefully.</p>
                      <p className="text-blue-600">Attention command</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-3">Requests</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Please help me.</p>
                      <p className="text-indigo-600">Polite request</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Could you open the door?</p>
                      <p className="text-indigo-600">Question form request</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Would you mind passing the salt?</p>
                      <p className="text-indigo-600">Very polite request</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Please sit down.</p>
                      <p className="text-indigo-600">Simple request</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-3">Instructions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Turn left at the corner.</p>
                      <p className="text-purple-600">Direction instruction</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Add two cups of flour.</p>
                      <p className="text-purple-600">Recipe instruction</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Press the red button.</p>
                      <p className="text-purple-600">Technical instruction</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Follow the safety rules.</p>
                      <p className="text-purple-600">Rule instruction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Examples Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Examples in Context
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <p className="text-lg">
                    <span className="font-semibold text-blue-700">Please close the door</span> when you leave.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border-l-4 border-indigo-400">
                  <p className="text-lg">
                    <span className="font-semibold text-indigo-700">Stop!</span> Don&apos;t cross the street yet.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <p className="text-lg">
                    <span className="font-semibold text-purple-700">Add the eggs and stir</span> until well combined.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-pink-50 to-red-50 p-6 rounded-xl border-l-4 border-pink-400">
                  <p className="text-lg">
                    <span className="font-semibold text-pink-700">Be careful</span> when handling hot objects.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Identify Imperative Sentences
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Which of these are imperative sentences?</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">A) Please sit down. B) I am sitting. C) She sits down.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: A) Please sit down.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">A) Stop! B) He stopped. C) The car stops.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: A) Stop!</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">A) Listen carefully. B) I am listening. C) She listens.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: A) Listen carefully.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Complete the Imperative
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Complete these imperative sentences:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Please _____ the door when you leave.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: close</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">_____ left at the traffic light.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Turn</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">_____ careful with that glass.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Be</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Convert to Imperative
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Convert these statements to imperative sentences:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Convert: &quot;You should study hard.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Study hard.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Convert: &quot;You need to be quiet.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Be quiet.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Convert: &quot;You must follow the rules.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Follow the rules.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Polite vs Direct
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-red-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify if these are polite or direct imperatives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">&quot;Please help me.&quot; - Polite or Direct?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Polite</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">&quot;Stop!&quot; - Polite or Direct?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Direct</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">&quot;Would you mind opening the window?&quot; - Polite or Direct?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Very Polite</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Writing Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Using Imperative Sentences
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Use &quot;Please&quot; for Politeness</h4>
                    <p className="text-gray-600">Add &quot;please&quot; to make requests more polite and respectful.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Consider Your Audience</h4>
                    <p className="text-gray-600">Use appropriate tone based on who you&apos;re speaking to.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Be Clear and Specific</h4>
                    <p className="text-gray-600">Make your instructions clear and easy to follow.</p>
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
                <Link href="/grammar/declarative-sentence" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Declarative Sentences
                </Link>
                <Link href="/grammar/interrogative-sentences" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Interrogative Sentences
                </Link>
                <Link href="/grammar/exclamatory-sentences" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Exclamatory Sentences
                </Link>
                <Link href="/grammar/sentence-types" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Sentence Types
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Parts of Speech
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Imperative Types:</span>
                  <span className="text-gray-600">3 main types</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Punctuation:</span>
                  <span className="text-gray-600">Period or !</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-blue-100">
                Imperative sentences are perfect for giving clear instructions and commands - use them to communicate effectively!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 