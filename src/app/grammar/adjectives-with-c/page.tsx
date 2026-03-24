"use client"

import Link from "next/link"

export default function AdjectivesWithC() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives With C
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover creative, confident, and caring adjectives featuring the letter C
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
                Creative Adjectives With C
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter C introduces us to a world of creative and confident adjectives that can enhance our language. 
                From &quot;creative&quot; to &quot;caring,&quot; these words help us express imagination, describe qualities, 
                and add charm to our descriptions.
              </p>
            </div>

            {/* Popular C Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives With C
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border-l-4 border-cyan-400">
                  <h3 className="text-2xl font-semibold text-cyan-700 mb-4">Positive Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-cyan-800">Creative</p>
                      <p className="text-cyan-600 text-sm">Relating to or involving the imagination or original ideas</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-cyan-800">Confident</p>
                      <p className="text-cyan-600 text-sm">Feeling or showing certainty about something</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-cyan-800">Caring</p>
                      <p className="text-cyan-600 text-sm">Displaying kindness and concern for others</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-cyan-800">Clever</p>
                      <p className="text-cyan-600 text-sm">Quick to understand, learn, and think of solutions</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Calm</p>
                      <p className="text-blue-600 text-sm">Not showing or feeling nervousness, anger, or other emotions</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Curious</p>
                      <p className="text-blue-600 text-sm">Eager to know or learn something</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Cheerful</p>
                      <p className="text-blue-600 text-sm">Noticeably happy and optimistic</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Compassionate</p>
                      <p className="text-blue-600 text-sm">Feeling or showing sympathy and concern for others</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More C Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                More Adjectives With C
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-700 mb-3">Characteristics</h4>
                  <ul className="text-indigo-600 space-y-1 text-sm">
                    <li>Colorful</li>
                    <li>Complex</li>
                    <li>Clear</li>
                    <li>Cool</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-700 mb-3">States</h4>
                  <ul className="text-purple-600 space-y-1 text-sm">
                    <li>Calm</li>
                    <li>Confident</li>
                    <li>Curious</li>
                    <li>Cheerful</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-700 mb-3">Qualities</h4>
                  <ul className="text-pink-600 space-y-1 text-sm">
                    <li>Creative</li>
                    <li>Caring</li>
                    <li>Clever</li>
                    <li>Compassionate</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: C-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Match each C-adjective with its correct meaning:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Creative&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very confident</p>
                        <p className="text-gray-600">B) Relating to or involving the imagination or original ideas</p>
                        <p className="text-gray-600">C) Being very caring</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: B) Relating to or involving the imagination or original ideas</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Confident&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very creative</p>
                        <p className="text-gray-600">B) Being very caring</p>
                        <p className="text-gray-600">C) Feeling or showing certainty about something</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: C) Feeling or showing certainty about something</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Complete the Sentences
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate C-adjectives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ artist painted beautiful landscapes.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: creative (relating to or involving the imagination or original ideas)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She was _____ about her abilities.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: confident (feeling or showing certainty about something)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ nurse comforted the patient.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: caring (displaying kindness and concern for others)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: C-Adjective Opposites
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the opposite of each C-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Creative&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Unimaginative, unoriginal, dull</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Confident&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Insecure, uncertain, doubtful</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;Caring&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Uncaring, indifferent, cold</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for C-Adjectives
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Position</h4>
                    <p className="text-gray-600">C-adjectives typically come before the noun they describe: &quot;a creative artist&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Articles</h4>
                    <p className="text-gray-600">Use &quot;a&quot; before C-adjectives since C is a consonant sound: &quot;a confident person&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Comparatives</h4>
                    <p className="text-gray-600">Many C-adjectives use &quot;more&quot; for comparison: &quot;more creative&quot;</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>C-adjectives are abundant in English and offer great variety for expression</li>
                <li>Many C-adjectives have Latin origins, particularly from words like &quot;creare&quot; (create) and &quot;confidere&quot; (trust)</li>
                <li>C-adjectives can convey both positive and negative qualities, providing balance</li>
                <li>Use C-adjectives to add creativity and confidence to your descriptions</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjective-start-with-f" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Adjectives Starting With F
                </Link>
                <Link href="/grammar/adjective-start-with-j" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Adjectives Starting With J
                </Link>
                <Link href="/grammar/adjective-start-with-l" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Adjectives Starting With L
                </Link>
                <Link href="/grammar/adjective-start-with-m" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Adjectives Starting With M
                </Link>
                <Link href="/grammar/adjective-start-with-n" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Adjectives Starting With N
                </Link>
                <Link href="/grammar/adjective-start-with-o" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Adjectives Starting With O
                </Link>
                <Link href="/grammar/adjective-start-with-p" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Adjectives Starting With P
                </Link>
                <Link href="/grammar/adjective-start-with-r" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Adjectives Starting With R
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Letter:</span>
                  <span className="text-gray-600">C</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Count:</span>
                  <span className="text-gray-600">40+ common</span>
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
                C-adjectives are perfect for describing creative and confident qualities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
