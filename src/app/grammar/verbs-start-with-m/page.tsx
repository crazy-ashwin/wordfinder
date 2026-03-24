"use client"

import Link from "next/link"

export default function VerbsStartWithM() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Verbs That Start With M
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover dynamic action words that begin with the letter M
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-lime-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are M Verbs?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                M verbs are action words that begin with the letter M. These verbs describe various actions, 
                movements, and processes. Learning M verbs helps expand your vocabulary and makes your writing 
                more dynamic and descriptive. From everyday actions to specialized activities, M verbs cover a 
                wide range of human activities and natural processes.
              </p>
            </div>

            {/* M Verbs Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                M Verbs by Category
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-lime-500 pl-6">
                  <h3 className="text-2xl font-semibold text-lime-700 mb-3">Movement and Motion</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-lime-50 p-4 rounded-lg">
                      <p className="font-semibold text-lime-800">move</p>
                      <p className="text-lime-600">To change position or location</p>
                    </div>
                    <div className="bg-lime-50 p-4 rounded-lg">
                      <p className="font-semibold text-lime-800">march</p>
                      <p className="text-lime-600">To walk with regular steps</p>
                    </div>
                    <div className="bg-lime-50 p-4 rounded-lg">
                      <p className="font-semibold text-lime-800">migrate</p>
                      <p className="text-lime-600">To move from one place to another</p>
                    </div>
                    <div className="bg-lime-50 p-4 rounded-lg">
                      <p className="font-semibold text-lime-800">meander</p>
                      <p className="text-lime-600">To follow a winding course</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-2xl font-semibold text-green-700 mb-3">Mental Activities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">memorize</p>
                      <p className="text-green-600">To commit to memory</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">meditate</p>
                      <p className="text-green-600">To engage in contemplation</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">measure</p>
                      <p className="text-green-600">To determine size or quantity</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">monitor</p>
                      <p className="text-green-600">To observe and check</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-3">Making and Creating</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">make</p>
                      <p className="text-emerald-600">To create or produce</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">manufacture</p>
                      <p className="text-emerald-600">To produce goods</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">mold</p>
                      <p className="text-emerald-600">To shape or form</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">mix</p>
                      <p className="text-emerald-600">To combine substances</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* M Verbs in Sentences */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                M Verbs in Sentences
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-lime-50 to-green-50 p-6 rounded-xl border-l-4 border-lime-400">
                  <p className="text-lg">
                    <span className="font-semibold text-lime-700">Birds migrate south for the winter.</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-400">
                  <p className="text-lg">
                    <span className="font-semibold text-green-700">She memorized the entire poem.</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-50 to-lime-50 p-6 rounded-xl border-l-4 border-emerald-400">
                  <p className="text-lg">
                    <span className="font-semibold text-emerald-700">The chef mixed the ingredients carefully.</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-lime-50 to-green-50 p-6 rounded-xl border-l-4 border-lime-400">
                  <p className="text-lg">
                    <span className="font-semibold text-lime-700">The river meanders through the valley.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Identify M Verbs
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-lime-50 to-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the M verbs in each sentence:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Birds migrate south for the winter.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-lime-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: migrate</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She memorized the entire poem.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-lime-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: memorized</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The chef mixed the ingredients carefully.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-lime-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: mixed</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Complete with M Verbs
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Complete each sentence with an M verb:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Birds _____ south for the winter. (to move from one place to another)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: migrate</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She _____ the entire poem. (to commit to memory)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: memorized</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The chef _____ the ingredients carefully. (to combine substances)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: mixed</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: M Verb Categories
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-lime-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Sort these M verbs by category:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Movement: move, march, migrate, meander</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are movement verbs</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Mental: memorize, meditate, measure, monitor</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are mental activity verbs</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Making: make, manufacture, mold, mix</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are making/creating verbs</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Create Sentences with M Verbs
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-lime-50 to-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Create sentences using these M verbs:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: migrate</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-lime-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: Geese migrate to warmer climates in the fall.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: memorize</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-lime-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: Students must memorize the multiplication tables.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: mix</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-lime-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: The baker mixed flour and sugar for the cake.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Learning M Verbs
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-lime-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Group by Meaning</h4>
                    <p className="text-gray-600">Organize M verbs by their meaning categories to learn them easier.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-lime-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Use in Context</h4>
                    <p className="text-gray-600">Practice using M verbs in sentences to remember their meanings.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-lime-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Pay Attention to Tenses</h4>
                    <p className="text-gray-600">Learn how M verbs change in different tenses (present, past, future).</p>
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
                <Link href="/grammar/verbs" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Verbs
                </Link>
                <Link href="/grammar/action-words" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Action Words
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Parts of Speech
                </Link>
                <Link href="/grammar/vocabulary-building" className="block text-lime-600 hover:text-lime-800 font-medium">
                  Vocabulary Building
                </Link>
                <Link href="/grammar/english-grammar" className="block text-lime-600 hover:text-lime-800 font-medium">
                  English Grammar
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Letter:</span>
                  <span className="text-gray-600">M (13th letter)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Categories:</span>
                  <span className="text-gray-600">Movement, mental, making</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-lime-500 to-green-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-lime-100">
                M verbs cover a wide range of actions from movement to mental activities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 