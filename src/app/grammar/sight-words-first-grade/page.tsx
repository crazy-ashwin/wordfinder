"use client"

import Link from "next/link"

export default function SightWordsFirstGrade() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            First Grade Sight Words
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Essential words that first graders need to recognize instantly
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purple-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are Sight Words?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Sight words are common words that children should recognize instantly without having to sound them out. 
                These words appear frequently in texts and often don&apos;t follow regular spelling patterns. 
                Learning sight words helps first graders become fluent readers.
              </p>
            </div>

            {/* First Grade Sight Words List */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                First Grade Sight Words List
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-3">Common Sight Words</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-purple-800">the</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-purple-800">and</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-purple-800">a</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-purple-800">to</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-purple-800">in</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-purple-800">is</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-purple-800">you</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-purple-800">that</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-violet-500 pl-6">
                  <h3 className="text-2xl font-semibold text-violet-700 mb-3">Action Words</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-violet-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-violet-800">was</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-violet-800">are</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-violet-800">with</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-violet-800">his</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-violet-800">they</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-violet-800">at</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-violet-800">be</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-violet-800">this</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-3">Question Words</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-indigo-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-indigo-800">what</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-indigo-800">when</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-indigo-800">where</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-indigo-800">why</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-indigo-800">how</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-indigo-800">who</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-indigo-800">which</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-indigo-800">whose</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sight Words in Sentences */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Sight Words in Sentences
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <p className="text-lg">
                    <span className="font-semibold text-purple-700">The cat is in the house.</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-violet-50 to-indigo-50 p-6 rounded-xl border-l-4 border-violet-400">
                  <p className="text-lg">
                    <span className="font-semibold text-violet-700">You and I are going to the park.</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border-l-4 border-indigo-400">
                  <p className="text-lg">
                    <span className="font-semibold text-indigo-700">What is that over there?</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <p className="text-lg">
                    <span className="font-semibold text-purple-700">They were at the store with his mom.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Find Sight Words
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the sight words in each sentence:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The cat is in the house.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: the, is, in, the</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">You and I are going to the park.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: you, and, I, are, to, the</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">What is that over there?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: what, is, that</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Complete with Sight Words
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-violet-50 to-indigo-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Complete each sentence with a sight word:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">_____ cat is in the house. (article)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-violet-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: The</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">You _____ I are friends. (conjunction)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-violet-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: and</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">_____ is that over there? (question word)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-violet-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: What</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Sight Word Categories
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Sort these sight words by category:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Articles: the, a, an</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: the, a (an is not in first grade list)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Question words: what, when, where, why, how</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are question words</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Pronouns: you, I, they, his, this</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are pronouns</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Sight Word Recognition
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Which of these are first grade sight words?</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. the, and, a, to, in, is, you, that</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are first grade sight words</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. was, are, with, his, they, at, be, this</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are first grade sight words</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. what, when, where, why, how, who, which, whose</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are question words (sight words)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Learning Sight Words
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Practice Daily</h4>
                    <p className="text-gray-600">Review sight words every day to build recognition speed.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Use in Context</h4>
                    <p className="text-gray-600">Read and write sentences using sight words.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Make it Fun</h4>
                    <p className="text-gray-600">Use games and activities to practice sight words.</p>
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
                <Link href="/grammar/reading-skills" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Reading Skills
                </Link>
                <Link href="/grammar/phonics" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Phonics
                </Link>
                <Link href="/grammar/early-literacy" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Early Literacy
                </Link>
                <Link href="/grammar/first-grade-worksheets" className="block text-purple-600 hover:text-purple-800 font-medium">
                  First Grade Worksheets
                </Link>
                <Link href="/grammar/word-recognition" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Word Recognition
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Total Words:</span>
                  <span className="text-gray-600">100+ words</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Recognition:</span>
                  <span className="text-gray-600">Instant</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Grade Level:</span>
                  <span className="text-gray-600">1st Grade</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-purple-100">
                Sight words should be recognized instantly without sounding them out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 