"use client"

import Link from "next/link"

export default function ComparisonWriting() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Comparison Writing
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Master the art of comparing and contrasting ideas, objects, and concepts in your writing
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-rose-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What is Comparison Writing?
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Comparison writing is a form of <Link href="/grammar/sentence-structure" className="text-rose-600 hover:text-rose-800 font-semibold">sentence structure</Link> that examines the similarities and differences between two or more subjects. It uses <Link href="/grammar/comparative-adjectives" className="text-rose-600 hover:text-rose-800 font-semibold">comparative adjectives</Link> and <Link href="/grammar/superlative-adjectives" className="text-rose-600 hover:text-rose-800 font-semibold">superlative adjectives</Link> to show relationships between items. This type of writing helps readers understand concepts better by highlighting what makes things alike and what makes them different.
              </p>
            </div>

            {/* Types of Comparison */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Types of Comparison
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-rose-500 pl-6">
                  <h3 className="text-2xl font-semibold text-rose-700 mb-3">1. Comparative (Comparing Two Things)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <p className="font-semibold text-rose-800">Definition</p>
                      <p className="text-rose-600">Comparing two items or ideas</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <p className="font-semibold text-rose-800">Examples</p>
                      <p className="text-rose-600">bigger than, more interesting than</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <p className="font-semibold text-rose-800">Usage</p>
                      <p className="text-rose-600">Show differences between two things</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <p className="font-semibold text-rose-800">Sentence</p>
                      <p className="text-rose-600">The cat is bigger than the mouse.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-2xl font-semibold text-pink-700 mb-3">2. Superlative (Comparing Three or More)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Definition</p>
                      <p className="text-pink-600">Comparing one item to a group</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Examples</p>
                      <p className="text-pink-600">biggest, most interesting, best</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Usage</p>
                      <p className="text-pink-600">Show the highest degree</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Sentence</p>
                      <p className="text-pink-600">This is the biggest house on the street.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-fuchsia-500 pl-6">
                  <h3 className="text-2xl font-semibold text-fuchsia-700 mb-3">3. Equative (Showing Similarity)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-fuchsia-50 p-4 rounded-lg">
                      <p className="font-semibold text-fuchsia-800">Definition</p>
                      <p className="text-fuchsia-600">Showing things are equal or similar</p>
                    </div>
                    <div className="bg-fuchsia-50 p-4 rounded-lg">
                      <p className="font-semibold text-fuchsia-800">Examples</p>
                      <p className="text-fuchsia-600">as big as, as interesting as</p>
                    </div>
                    <div className="bg-fuchsia-50 p-4 rounded-lg">
                      <p className="font-semibold text-fuchsia-800">Usage</p>
                      <p className="text-fuchsia-600">Show equality or similarity</p>
                    </div>
                    <div className="bg-fuchsia-50 p-4 rounded-lg">
                      <p className="font-semibold text-fuchsia-800">Sentence</p>
                      <p className="text-fuchsia-600">The cat is as big as the dog.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Words and Phrases */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Comparison Words and Phrases
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-rose-700 mb-4">Similarity Words</h3>
                  <div className="space-y-3">
                    <div className="bg-rose-50 p-3 rounded-lg">
                      <span className="font-semibold text-rose-800">Similar to:</span>
                      <span className="text-rose-600 ml-2">Shows likeness</span>
                    </div>
                    <div className="bg-rose-50 p-3 rounded-lg">
                      <span className="font-semibold text-rose-800">Likewise:</span>
                      <span className="text-rose-600 ml-2">In the same way</span>
                    </div>
                    <div className="bg-rose-50 p-3 rounded-lg">
                      <span className="font-semibold text-rose-800">Similarly:</span>
                      <span className="text-rose-600 ml-2">In a similar manner</span>
                    </div>
                    <div className="bg-rose-50 p-3 rounded-lg">
                      <span className="font-semibold text-rose-800">Both:</span>
                      <span className="text-rose-600 ml-2">Shows common features</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-pink-700 mb-4">Difference Words</h3>
                  <div className="space-y-3">
                    <div className="bg-pink-50 p-3 rounded-lg">
                      <span className="font-semibold text-pink-800">However:</span>
                      <span className="text-pink-600 ml-2">Shows contrast</span>
                    </div>
                    <div className="bg-pink-50 p-3 rounded-lg">
                      <span className="font-semibold text-pink-800">On the other hand:</span>
                      <span className="text-pink-600 ml-2">Shows opposite view</span>
                    </div>
                    <div className="bg-pink-50 p-3 rounded-lg">
                      <span className="font-semibold text-pink-800">In contrast:</span>
                      <span className="text-pink-600 ml-2">Shows difference</span>
                    </div>
                    <div className="bg-pink-50 p-3 rounded-lg">
                      <span className="font-semibold text-pink-800">Unlike:</span>
                      <span className="text-pink-600 ml-2">Shows dissimilarity</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Structures */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Comparison Writing Structures
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-fuchsia-500 pl-6">
                  <h3 className="text-2xl font-semibold text-fuchsia-700 mb-3">Block Method</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-fuchsia-50 p-4 rounded-lg">
                      <p className="font-semibold text-fuchsia-800">Structure</p>
                      <p className="text-fuchsia-600">Discuss all points about first subject, then all about second</p>
                    </div>
                    <div className="bg-fuchsia-50 p-4 rounded-lg">
                      <p className="font-semibold text-fuchsia-800">Advantages</p>
                      <p className="text-fuchsia-600">Clear organization, easy to follow</p>
                    </div>
                    <div className="bg-fuchsia-50 p-4 rounded-lg">
                      <p className="font-semibold text-fuchsia-800">Best For</p>
                      <p className="text-fuchsia-600">Short comparisons, simple topics</p>
                    </div>
                    <div className="bg-fuchsia-50 p-4 rounded-lg">
                      <p className="font-semibold text-fuchsia-800">Example</p>
                      <p className="text-fuchsia-600">All about cats, then all about dogs</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-rose-500 pl-6">
                  <h3 className="text-2xl font-semibold text-rose-700 mb-3">Point-by-Point Method</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <p className="font-semibold text-rose-800">Structure</p>
                      <p className="text-rose-600">Compare subjects point by point</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <p className="font-semibold text-rose-800">Advantages</p>
                      <p className="text-rose-600">Easy to see differences, balanced</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <p className="font-semibold text-rose-800">Best For</p>
                      <p className="text-rose-600">Complex topics, detailed analysis</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <p className="font-semibold text-rose-800">Example</p>
                      <p className="text-rose-600">Size: cat vs dog, then color: cat vs dog</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Identify Comparison Types
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify the type of comparison in each sentence:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;The elephant is bigger than the mouse.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Comparative (comparing two things)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;This is the biggest animal in the zoo.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Superlative (comparing to a group)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;The cat is as friendly as the dog.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Equative (showing similarity)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Complete Comparisons
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-fuchsia-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Complete these comparison sentences:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;The mountain is _____ than the hill.&quot; (add comparative)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: taller, higher, bigger, etc.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;This is the _____ book I have ever read.&quot; (add superlative)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: best, most interesting, longest, etc.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;The weather is _____ cold _____ yesterday.&quot; (add equative)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: as...as</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Choose Comparison Words
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-fuchsia-50 to-rose-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Select the appropriate comparison word:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Cats are independent. _____, dogs are social animals.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-fuchsia-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: However, In contrast, On the other hand</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Both cats and dogs _____ make good pets.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-fuchsia-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: can, do, will</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;_____ cats, dogs need regular exercise.&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-fuchsia-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Unlike, In contrast to</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Write Comparison Sentences
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Create comparison sentences using these prompts:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Compare: &quot;books&quot; and &quot;movies&quot; (use comparative)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: Books are more detailed than movies.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Compare: &quot;summer&quot; and &quot;winter&quot; (use contrast words)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: Summer is warm, however, winter is cold.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Compare: &quot;cities&quot; and &quot;villages&quot; (use similarity words)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: Both cities and villages have communities.</p>
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
                <li>• Use comparative adjectives (-er, more) when comparing two things</li>
                <li>• Use superlative adjectives (-est, most) when comparing to a group</li>
                <li>• Use &quot;as...as&quot; to show equality or similarity</li>
                <li>• Transition words help readers follow your comparison logic</li>
                <li>• Choose the right structure based on your topic and purpose</li>
              </ul>
            </div>

            {/* Writing Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Effective Comparison Writing
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Be Fair and Balanced</h4>
                    <p className="text-gray-600">Present both sides equally and avoid bias in your comparisons.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Use Clear Examples</h4>
                    <p className="text-gray-600">Provide specific examples to support your comparison points.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Organize Your Thoughts</h4>
                    <p className="text-gray-600">Choose a clear structure and stick to it throughout your comparison.</p>
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
                <Link href="/grammar/comparative-adjectives" className="block text-rose-600 hover:text-rose-800 font-medium">
                  Comparative Adjectives
                </Link>
                <Link href="/grammar/superlative-adjectives" className="block text-rose-600 hover:text-rose-800 font-medium">
                  Superlative Adjectives
                </Link>
                <Link href="/grammar/sentence-structure" className="block text-rose-600 hover:text-rose-800 font-medium">
                  Sentence Structure
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-rose-600 hover:text-rose-800 font-medium">
                  Parts of Speech
                </Link>
                <Link href="/grammar/english-grammar" className="block text-rose-600 hover:text-rose-800 font-medium">
                  English Grammar
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Types:</span>
                  <span className="text-gray-600">3 main categories</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Function:</span>
                  <span className="text-gray-600">Show relationships</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-rose-100">
                Good comparison writing helps readers understand complex topics by showing clear relationships!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
