"use client"

import Link from "next/link"

export default function WordsOfAppreciationExamples() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Words of Appreciation Examples
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Learn how to express gratitude and appreciation effectively
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-pink-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are Words of Appreciation?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Words of appreciation are expressions used to show gratitude, thankfulness, and recognition for 
                someone&apos;s kindness, help, or positive actions. These words help strengthen relationships, 
                boost morale, and create a positive environment. Learning to express appreciation effectively 
                is an important communication skill that benefits both personal and professional relationships.
              </p>
            </div>

            {/* Types of Appreciation Words */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Types of Appreciation Words
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-2xl font-semibold text-pink-700 mb-3">Simple Thank You Words</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Thank you</p>
                      <p className="text-pink-600">Basic expression of gratitude</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Thanks</p>
                      <p className="text-pink-600">Casual way to say thank you</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Grateful</p>
                      <p className="text-pink-600">Feeling thankful</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Appreciate</p>
                      <p className="text-pink-600">To value or recognize</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-rose-500 pl-6">
                  <h3 className="text-2xl font-semibold text-rose-700 mb-3">Stronger Appreciation Words</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <p className="font-semibold text-rose-800">Indebted</p>
                      <p className="text-rose-600">Owing gratitude</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <p className="font-semibold text-rose-800">Blessed</p>
                      <p className="text-rose-600">Favored or fortunate</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <p className="font-semibold text-rose-800">Indebted</p>
                      <p className="text-rose-600">Owing gratitude</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <p className="font-semibold text-rose-800">Touched</p>
                      <p className="text-rose-600">Emotionally moved</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-2xl font-semibold text-red-700 mb-3">Professional Appreciation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">Acknowledge</p>
                      <p className="text-red-600">To recognize or admit</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">Recognize</p>
                      <p className="text-red-600">To identify or notice</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">Value</p>
                      <p className="text-red-600">To consider important</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">Esteem</p>
                      <p className="text-red-600">To regard highly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Appreciation Examples */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Appreciation Examples in Context
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl border-l-4 border-pink-400">
                  <p className="text-lg">
                    <span className="font-semibold text-pink-700">&quot;Thank you so much for your help with the project. I really appreciate your support.&quot;</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-rose-50 to-red-50 p-6 rounded-xl border-l-4 border-rose-400">
                  <p className="text-lg">
                    <span className="font-semibold text-rose-700">&quot;I am truly grateful for your kindness and generosity.&quot;</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border-l-4 border-red-400">
                  <p className="text-lg">
                    <span className="font-semibold text-red-700">&quot;We acknowledge and value your contributions to our team.&quot;</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl border-l-4 border-pink-400">
                  <p className="text-lg">
                    <span className="font-semibold text-pink-700">&quot;I feel blessed to have such wonderful friends.&quot;</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Identify Appreciation Words
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the appreciation words in each sentence:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Thank you so much for your help with the project.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Thank you</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I am truly grateful for your kindness.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: grateful</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">We acknowledge and value your contributions.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: acknowledge, value</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Complete Appreciation Sentences
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-rose-50 to-red-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Complete each sentence with an appreciation word:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I am truly _____ for your help. (feeling thankful)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: grateful</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">We _____ your contributions to the team. (to recognize)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: acknowledge</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I _____ your support during this difficult time. (to value)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: appreciate</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Appreciation Word Categories
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Sort these appreciation words by category:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Simple: thank you, thanks, grateful, appreciate</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are simple appreciation words</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Stronger: indebted, blessed, touched, moved</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are stronger appreciation words</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Professional: acknowledge, recognize, value, esteem</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are professional appreciation words</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Create Appreciation Messages
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Create appreciation messages using these words:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: grateful</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: I am truly grateful for your friendship and support.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: acknowledge</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: We acknowledge your hard work and dedication.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: appreciate</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: I really appreciate your help with this project.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Expressing Appreciation
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Be Specific</h4>
                    <p className="text-gray-600">Mention exactly what you appreciate about the person or their actions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Be Sincere</h4>
                    <p className="text-gray-600">Express genuine gratitude rather than just going through the motions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Choose Appropriate Words</h4>
                    <p className="text-gray-600">Use words that match the level of gratitude and the context.</p>
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
                <Link href="/grammar/positive-words" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Positive Words
                </Link>
                <Link href="/grammar/communication-skills" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Communication Skills
                </Link>
                <Link href="/grammar/emotional-intelligence" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Emotional Intelligence
                </Link>
                <Link href="/grammar/writing-tips" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Writing Tips
                </Link>
                <Link href="/grammar/interpersonal-skills" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Interpersonal Skills
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Categories:</span>
                  <span className="text-gray-600">Simple, stronger, professional</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Usage:</span>
                  <span className="text-gray-600">Personal & professional</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-pink-100">
                Expressing appreciation strengthens relationships and creates positive environments!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 