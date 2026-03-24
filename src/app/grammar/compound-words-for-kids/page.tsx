"use client"

import Link from "next/link"

export default function CompoundWordsForKids() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Compound Words for Kids
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Fun and easy way to learn how two words combine to make one new word
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-yellow-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are Compound Words?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Compound words are made by joining two smaller words together to create a new word with a new meaning. 
                It&apos;s like putting two puzzle pieces together! For example, &quot;sun&quot; + &quot;flower&quot; = &quot;sunflower.&quot; 
                Learning compound words helps kids expand their vocabulary and understand how words work.
              </p>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Types of Compound Words
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-2xl font-semibold text-yellow-700 mb-3">Closed Compound Words</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800">sunflower</p>
                      <p className="text-yellow-600">sun + flower</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800">butterfly</p>
                      <p className="text-yellow-600">butter + fly</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800">rainbow</p>
                      <p className="text-yellow-600">rain + bow</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800">football</p>
                      <p className="text-yellow-600">foot + ball</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-2xl font-semibold text-orange-700 mb-3">Open Compound Words</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">ice cream</p>
                      <p className="text-orange-600">ice + cream</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">hot dog</p>
                      <p className="text-orange-600">hot + dog</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">post office</p>
                      <p className="text-orange-600">post + office</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">living room</p>
                      <p className="text-orange-600">living + room</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-2xl font-semibold text-red-700 mb-3">Hyphenated Compound Words</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">well-known</p>
                      <p className="text-red-600">well + known</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">up-to-date</p>
                      <p className="text-red-600">up + to + date</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">self-control</p>
                      <p className="text-red-600">self + control</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">mother-in-law</p>
                      <p className="text-red-600">mother + in + law</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Examples Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Fun Examples for Kids
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-l-4 border-yellow-400">
                  <p className="text-lg">
                    <span className="font-semibold text-yellow-700">The butterfly</span> landed on the sunflower.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border-l-4 border-orange-400">
                  <p className="text-lg">
                    <span className="font-semibold text-orange-700">I love eating ice cream</span> on hot summer days.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border-l-4 border-red-400">
                  <p className="text-lg">
                    <span className="font-semibold text-red-700">The rainbow</span> appeared after the rain stopped.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl border-l-4 border-pink-400">
                  <p className="text-lg">
                    <span className="font-semibold text-pink-700">We play football</span> in the backyard.
                  </p>
                </div>
              </div>
            </div>

            {/* Learning Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Fun Ways to Learn Compound Words
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Word Building Game</h4>
                    <p className="text-gray-600">Write words on cards and let kids match them to make compound words.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Picture Hunt</h4>
                    <p className="text-gray-600">Look for compound words in books, magazines, and around the house.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Story Time</h4>
                    <p className="text-gray-600">Create stories using as many compound words as possible.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz for Kids
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Can you make compound words from these word pairs?</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">sun + flower = ?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: sunflower</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">butter + fly = ?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: butterfly</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">rain + bow = ?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: rainbow</p>
                      </details>
                    </div>
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
                <Link href="/grammar/word-building" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Word Building
                </Link>
                <Link href="/grammar/vocabulary-for-kids" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Vocabulary for Kids
                </Link>
                <Link href="/grammar/reading-skills" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Reading Skills
                </Link>
                <Link href="/grammar/spelling-rules" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Spelling Rules
                </Link>
                <Link href="/grammar/learning-games" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Learning Games
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Compound Types:</span>
                  <span className="text-gray-600">3 main types</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Common Examples:</span>
                  <span className="text-gray-600">100+ words</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Age Level:</span>
                  <span className="text-gray-600">Elementary</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Fun Fact</h3>
              <p className="text-yellow-100">
                Did you know? The word &quot;butterfly&quot; comes from the Old English words &quot;butter&quot; and &quot;fly&quot; - 
                because people thought butterflies looked like flying butter!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 