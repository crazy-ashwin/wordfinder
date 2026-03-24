"use client"

import Link from "next/link"

export default function DescriptiveAdjectives() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Descriptive Adjectives
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Master the art of using descriptive adjectives to make your writing more vivid and engaging
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
                What Are Descriptive Adjectives?
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Descriptive adjectives are words that describe or modify <Link href="/grammar/nouns" className="text-orange-600 hover:text-orange-800 font-semibold">nouns</Link> and <Link href="/grammar/pronouns" className="text-orange-600 hover:text-orange-800 font-semibold">pronouns</Link> by providing specific details about their qualities, characteristics, or attributes. They make writing more vivid and help readers create mental pictures. Descriptive adjectives are essential for creating engaging <Link href="/grammar/sentence-structure" className="text-orange-600 hover:text-orange-800 font-semibold">sentences</Link> and improving communication.
              </p>
            </div>

            {/* Types of Descriptive Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Types of Descriptive Adjectives
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-2xl font-semibold text-orange-700 mb-3">1. Physical Appearance</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Definition</p>
                      <p className="text-orange-600">Describe how things look</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Examples</p>
                      <p className="text-orange-600">tall, short, round, square, red, blue</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Usage</p>
                      <p className="text-orange-600">Describe size, shape, color</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Sentence</p>
                      <p className="text-orange-600">The tall tree has red leaves.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-amber-500 pl-6">
                  <h3 className="text-2xl font-semibold text-amber-700 mb-3">2. Personality Traits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="font-semibold text-amber-800">Definition</p>
                      <p className="text-amber-600">Describe character qualities</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="font-semibold text-amber-800">Examples</p>
                      <p className="text-amber-600">kind, brave, honest, friendly, shy</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="font-semibold text-amber-800">Usage</p>
                      <p className="text-amber-600">Describe behavior and character</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="font-semibold text-amber-800">Sentence</p>
                      <p className="text-amber-600">The kind teacher helps students.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-2xl font-semibold text-yellow-700 mb-3">3. Emotional States</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800">Definition</p>
                      <p className="text-yellow-600">Describe feelings and emotions</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800">Examples</p>
                      <p className="text-yellow-600">happy, sad, excited, worried, calm</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800">Usage</p>
                      <p className="text-yellow-600">Express emotional conditions</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800">Sentence</p>
                      <p className="text-yellow-600">The excited child opened the gift.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-2xl font-semibold text-orange-700 mb-3">4. Sensory Qualities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Definition</p>
                      <p className="text-orange-600">Describe how things feel, sound, taste, smell</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Examples</p>
                      <p className="text-orange-600">soft, loud, sweet, spicy, smooth</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Usage</p>
                      <p className="text-orange-600">Appeal to the five senses</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Sentence</p>
                      <p className="text-orange-600">The soft blanket feels warm.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Adjective Order */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Adjective Order Rules
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-orange-700 mb-4">Standard Order</h3>
                  <div className="space-y-3">
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <span className="font-semibold text-orange-800">1. Opinion:</span>
                      <span className="text-orange-600 ml-2">beautiful, ugly, nice</span>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <span className="font-semibold text-orange-800">2. Size:</span>
                      <span className="text-orange-600 ml-2">big, small, tiny</span>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <span className="font-semibold text-orange-800">3. Shape:</span>
                      <span className="text-orange-600 ml-2">round, square, oval</span>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <span className="font-semibold text-orange-800">4. Age:</span>
                      <span className="text-orange-600 ml-2">old, new, young</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-amber-700 mb-4">Continued Order</h3>
                  <div className="space-y-3">
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <span className="font-semibold text-amber-800">5. Color:</span>
                      <span className="text-amber-600 ml-2">red, blue, green</span>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <span className="font-semibold text-amber-800">6. Origin:</span>
                      <span className="text-amber-600 ml-2">American, French, Chinese</span>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <span className="font-semibold text-amber-800">7. Material:</span>
                      <span className="text-amber-600 ml-2">wooden, plastic, metal</span>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <span className="font-semibold text-amber-800">8. Purpose:</span>
                      <span className="text-amber-600 ml-2">sleeping, cooking, writing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Identify Descriptive Adjectives
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the descriptive adjectives in each sentence:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;The beautiful red roses bloomed in the garden.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: beautiful, red</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;The tall, friendly teacher wore a blue dress.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: tall, friendly, blue</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;The excited children played with soft toys.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: excited, soft</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Adjective Order
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Put these adjectives in the correct order:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;_____ _____ _____ car&quot; (Italian, red, fast)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: fast red Italian car</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;_____ _____ _____ house&quot; (old, beautiful, wooden)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: beautiful old wooden house</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;_____ _____ _____ dog&quot; (big, friendly, brown)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: friendly big brown dog</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Choose the Right Adjective
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Select the most appropriate descriptive adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;The _____ mountain was covered in snow.&quot; (tall/happy/soft)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: tall (describes physical appearance)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;The _____ student always helps others.&quot; (tall/kind/red)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: kind (describes personality trait)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;The _____ music made everyone dance.&quot; (loud/round/happy)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: loud (describes sound quality)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Create Descriptive Sentences
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Add descriptive adjectives to make these sentences more vivid:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;The cat sat on the mat.&quot; (add 2-3 adjectives)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: The fluffy orange cat sat on the soft mat.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;The girl read a book.&quot; (add 2-3 adjectives)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: The curious young girl read an interesting book.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;The car drove down the street.&quot; (add 2-3 adjectives)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: The shiny red car drove down the busy street.</p>
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
                <li>• Descriptive adjectives make writing more engaging and help readers visualize</li>
                <li>• Follow the standard adjective order for natural-sounding sentences</li>
                <li>• Use specific adjectives instead of vague ones (e.g., &quot;enormous&quot; instead of &quot;big&quot;)</li>
                <li>• Too many adjectives can make sentences confusing - use them thoughtfully</li>
                <li>• Descriptive adjectives can be used in comparative and superlative forms</li>
              </ul>
            </div>

            {/* Writing Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Using Descriptive Adjectives
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Be Specific</h4>
                    <p className="text-gray-600">Choose precise adjectives that create clear mental images.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Follow Order Rules</h4>
                    <p className="text-gray-600">Use the standard adjective order for natural-sounding sentences.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Avoid Overuse</h4>
                    <p className="text-gray-600">Don&apos;t overwhelm readers with too many adjectives at once.</p>
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
                <Link href="/grammar/adjectives" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Adjectives
                </Link>
                <Link href="/grammar/nouns" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Nouns
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Parts of Speech
                </Link>
                <Link href="/grammar/sentence-structure" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Sentence Structure
                </Link>
                <Link href="/grammar/comparative-adjectives" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Comparative Adjectives
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Types:</span>
                  <span className="text-gray-600">4 main categories</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Function:</span>
                  <span className="text-gray-600">Describe nouns</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-orange-100">
                Good descriptive adjectives help readers see, feel, and experience what you&apos;re writing about!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
