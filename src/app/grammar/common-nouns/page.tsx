"use client"

import Link from "next/link"

export default function CommonNouns() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Common Nouns
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Learn about the most frequently used nouns in English to build your vocabulary foundation
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are Common Nouns?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Common nouns are words that name general people, places, things, or ideas. 
                Unlike proper nouns, they are not capitalized unless they appear at the beginning of a sentence. 
                Common nouns are the building blocks of everyday communication.
              </p>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Categories of Common Nouns
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-2xl font-semibold text-green-700 mb-3">People & Animals</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">teacher</p>
                      <p className="text-green-600">A person who instructs others</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">student</p>
                      <p className="text-green-600">A person who learns</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">dog</p>
                      <p className="text-green-600">A domesticated animal</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">doctor</p>
                      <p className="text-green-600">A medical professional</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-3">Places & Locations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">school</p>
                      <p className="text-emerald-600">A place for learning</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">hospital</p>
                      <p className="text-emerald-600">A medical facility</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">park</p>
                      <p className="text-emerald-600">A public recreation area</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">restaurant</p>
                      <p className="text-emerald-600">A place to eat</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-2xl font-semibold text-teal-700 mb-3">Things & Objects</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">book</p>
                      <p className="text-teal-600">A written work</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">car</p>
                      <p className="text-teal-600">A motor vehicle</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">phone</p>
                      <p className="text-teal-600">A communication device</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">computer</p>
                      <p className="text-teal-600">An electronic device</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Examples Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Examples in Sentences
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-400">
                  <p className="text-lg">
                    <span className="font-semibold text-green-700">The teacher</span> explained the lesson clearly.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border-l-4 border-emerald-400">
                  <p className="text-lg">
                    <span className="font-semibold text-emerald-700">The school</span> is located downtown.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-xl border-l-4 border-teal-400">
                  <p className="text-lg">
                    <span className="font-semibold text-teal-700">The book</span> was very interesting.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <p className="text-lg">
                    <span className="font-semibold text-blue-700">The dog</span> played in the park.
                  </p>
                </div>
              </div>
            </div>

            {/* Writing Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Using Common Nouns
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Don&apos;t Capitalize</h4>
                    <p className="text-gray-600">Common nouns are not capitalized unless they start a sentence.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Be Specific</h4>
                    <p className="text-gray-600">Choose specific common nouns to make your writing more precise.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Use Articles</h4>
                    <p className="text-gray-600">Common nouns often need articles (a, an, the) before them.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify the common nouns in these sentences:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The cat sat on the mat.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: cat, mat</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She bought a new car yesterday.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: car</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The doctor works at the hospital.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: doctor, hospital</p>
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
                <Link href="/grammar/proper-nouns" className="block text-green-600 hover:text-green-800 font-medium">
                  Proper Nouns
                </Link>
                <Link href="/grammar/collective-nouns" className="block text-green-600 hover:text-green-800 font-medium">
                  Collective Nouns
                </Link>
                <Link href="/grammar/abstract-nouns" className="block text-green-600 hover:text-green-800 font-medium">
                  Abstract Nouns
                </Link>
                <Link href="/grammar/countable-nouns" className="block text-green-600 hover:text-green-800 font-medium">
                  Countable Nouns
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-green-600 hover:text-green-800 font-medium">
                  Parts of Speech
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Common Nouns:</span>
                  <span className="text-gray-600">1000+ examples</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Categories:</span>
                  <span className="text-gray-600">4 main types</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-green-100">
                Common nouns are the foundation of English vocabulary - master them to improve your communication skills!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 