"use client"

import Link from "next/link"

export default function SightWordsPractice2ndGrade() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Second Grade Sight Words Practice
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Essential sight words that second graders need to recognize instantly
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-teal-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are Second Grade Sight Words?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Second grade sight words are common words that children should recognize instantly without having to sound them out. 
                These words appear frequently in texts and often don&apos;t follow regular spelling patterns. 
                Learning these sight words helps second graders become fluent readers and improves their reading comprehension.
              </p>
            </div>

            {/* Second Grade Sight Words List */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Second Grade Sight Words List
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border-l-4 border-teal-500 pl-4">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Common Words</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">always</span>
                      <span className="text-teal-600 font-semibold">always</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">around</span>
                      <span className="text-teal-600 font-semibold">around</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">because</span>
                      <span className="text-teal-600 font-semibold">because</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">been</span>
                      <span className="text-teal-600 font-semibold">been</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">before</span>
                      <span className="text-teal-600 font-semibold">before</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">best</span>
                      <span className="text-teal-600 font-semibold">best</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">both</span>
                      <span className="text-teal-600 font-semibold">both</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">buy</span>
                      <span className="text-teal-600 font-semibold">buy</span>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-cyan-500 pl-4">
                  <h3 className="text-xl font-semibold text-cyan-700 mb-3">Action Words</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">call</span>
                      <span className="text-cyan-600 font-semibold">call</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">cold</span>
                      <span className="text-cyan-600 font-semibold">cold</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">does</span>
                      <span className="text-cyan-600 font-semibold">does</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">don&apos;t</span>
                      <span className="text-cyan-600 font-semibold">don&apos;t</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">fast</span>
                      <span className="text-cyan-600 font-semibold">fast</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">first</span>
                      <span className="text-cyan-600 font-semibold">first</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">five</span>
                      <span className="text-cyan-600 font-semibold">five</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">found</span>
                      <span className="text-cyan-600 font-semibold">found</span>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Descriptive Words</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">gave</span>
                      <span className="text-blue-600 font-semibold">gave</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">goes</span>
                      <span className="text-blue-600 font-semibold">goes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">green</span>
                      <span className="text-blue-600 font-semibold">green</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">its</span>
                      <span className="text-blue-600 font-semibold">its</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">made</span>
                      <span className="text-blue-600 font-semibold">made</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">many</span>
                      <span className="text-blue-600 font-semibold">many</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">off</span>
                      <span className="text-blue-600 font-semibold">off</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">or</span>
                      <span className="text-blue-600 font-semibold">or</span>
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
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl border-l-4 border-teal-400">
                  <p className="text-lg">
                    <span className="font-semibold text-teal-700">I always eat breakfast before school.</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl border-l-4 border-cyan-400">
                  <p className="text-lg">
                    <span className="font-semibold text-cyan-700">The green car goes fast around the corner.</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <p className="text-lg">
                    <span className="font-semibold text-blue-700">She found many books at the library.</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl border-l-4 border-teal-400">
                  <p className="text-lg">
                    <span className="font-semibold text-teal-700">Both children like to play outside.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Identify Sight Words
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the sight words in each sentence:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I always eat breakfast before school.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: always, before</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The green car goes fast around the corner.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: green, goes, fast, around</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She found many books at the library.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: found, many</p>
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
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Complete each sentence with a sight word:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I _____ eat breakfast before school. (every time)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: always</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The green car _____ fast around the corner. (moves)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: goes</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She _____ many books at the library. (discovered)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: found</p>
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
                <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Sort these sight words by category:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Common words: always, around, because, been, before, best, both, buy</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are common second grade sight words</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Action words: call, cold, does, don&apos;t, fast, first, five, found</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are action or descriptive words</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Descriptive words: gave, goes, green, its, made, many, off, or</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are descriptive or connecting words</p>
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
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Which of these are second grade sight words?</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. always, around, because, been, before, best, both, buy</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are second grade sight words</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. call, cold, does, don&apos;t, fast, first, five, found</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are second grade sight words</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. gave, goes, green, its, made, many, off, or</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are second grade sight words</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Learning Second Grade Sight Words
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Practice Daily</h4>
                    <p className="text-gray-600">Review sight words every day to build recognition speed.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Use in Context</h4>
                    <p className="text-gray-600">Read and write sentences using sight words.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
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
                <Link href="/grammar/sight-words-first-grade" className="block text-teal-600 hover:text-teal-800 font-medium">
                  First Grade Sight Words
                </Link>
                <Link href="/grammar/reading-skills" className="block text-teal-600 hover:text-teal-800 font-medium">
                  Reading Skills
                </Link>
                <Link href="/grammar/phonics" className="block text-teal-600 hover:text-teal-800 font-medium">
                  Phonics
                </Link>
                <Link href="/grammar/second-grade-worksheets" className="block text-teal-600 hover:text-teal-800 font-medium">
                  Second Grade Worksheets
                </Link>
                <Link href="/grammar/early-literacy" className="block text-teal-600 hover:text-teal-800 font-medium">
                  Early Literacy
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
                  <span className="text-gray-600">2nd Grade</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-teal-100">
                Second grade sight words should be recognized instantly without sounding them out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 