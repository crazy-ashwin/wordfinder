"use client"

import Link from "next/link"

export default function AdjectiveThatStartWithAToDescribeAPerson() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives Starting With A to Describe a Person
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover amazing, awesome, and admirable adjectives starting with A to describe people
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
                Amazing Adjectives Starting With A to Describe People
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter A introduces us to a world of amazing and awesome adjectives that can enhance our descriptions of people. 
                From &quot;amazing&quot; to &quot;awesome,&quot; these words help us express excellence, describe personal qualities, 
                and add flair to our character descriptions.
              </p>
            </div>

            {/* Popular A Adjectives for People */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives Starting With A to Describe People
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">Positive Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Amazing</p>
                      <p className="text-blue-600 text-sm">Causing great surprise or wonder</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Awesome</p>
                      <p className="text-blue-600 text-sm">Extremely impressive or daunting</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Admirable</p>
                      <p className="text-blue-600 text-sm">Deserving respect and approval</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Active</p>
                      <p className="text-blue-600 text-sm">Engaging in action or movement</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border-l-4 border-indigo-400">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-indigo-800">Ambitious</p>
                      <p className="text-indigo-600 text-sm">Having a strong desire to succeed</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-indigo-800">Adventurous</p>
                      <p className="text-indigo-600 text-sm">Willing to take risks</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-indigo-800">Affectionate</p>
                      <p className="text-indigo-600 text-sm">Showing fondness and care</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-indigo-800">Attentive</p>
                      <p className="text-indigo-600 text-sm">Paying close attention</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More A Adjectives for People */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                More Adjectives Starting With A to Describe People
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-700 mb-3">Characteristics</h4>
                  <ul className="text-purple-600 space-y-1 text-sm">
                    <li>Accurate</li>
                    <li>Agile</li>
                    <li>Alert</li>
                    <li>Ancient</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-700 mb-3">States</h4>
                  <ul className="text-pink-600 space-y-1 text-sm">
                    <li>Alive</li>
                    <li>Awake</li>
                    <li>Available</li>
                    <li>Absent</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-700 mb-3">Qualities</h4>
                  <ul className="text-red-600 space-y-1 text-sm">
                    <li>Artistic</li>
                    <li>Authentic</li>
                    <li>Attractive</li>
                    <li>Adaptable</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: A-Adjective Definitions for People
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Match each A-adjective with its correct meaning when describing people:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Ambitious&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very old</p>
                        <p className="text-gray-600">B) Having a strong desire to succeed</p>
                        <p className="text-gray-600">C) Being very expensive</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: B) Having a strong desire to succeed</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Attentive&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very fast</p>
                        <p className="text-gray-600">B) Being very strong</p>
                        <p className="text-gray-600">C) Paying close attention</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: C) Paying close attention</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Complete the Sentences About People
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate A-adjectives to describe people:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ student always helped others.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: attentive (paying close attention)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She had an _____ idea for solving the problem.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: amazing (causing great surprise or wonder)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ worker never missed a deadline.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: ambitious (having a strong desire to succeed)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: A-Adjective Opposites for People
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the opposite of each A-adjective when describing people:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Active&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Inactive, passive, lazy</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Awake&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Asleep, unconscious, sleeping</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;Available&quot; is the opposite of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Unavailable, busy, occupied</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for A-Adjectives Describing People
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Position</h4>
                    <p className="text-gray-600">A-adjectives typically come before the noun they describe: &quot;an amazing person&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Articles</h4>
                    <p className="text-gray-600">Use &quot;an&quot; before A-adjectives since A is a vowel sound: &quot;an awesome person&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Comparatives</h4>
                    <p className="text-gray-600">Many A-adjectives use &quot;more&quot; for comparison: &quot;more amazing&quot;</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>A-adjectives are excellent for describing amazing and awesome people</li>
                <li>Many A-adjectives have positive connotations, making them great for compliments</li>
                <li>Some A-adjectives can be used as both adjectives and adverbs</li>
                <li>Pay attention to the spelling of A-adjectives, as some have silent letters</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjectives-that-start-with" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives That Start With
                </Link>
                <Link href="/grammar/adjectives" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives
                </Link>
                <Link href="/grammar/descriptive-adjectives" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Descriptive Adjectives
                </Link>
                <Link href="/grammar/adjective-examples" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjective Examples
                </Link>
                <Link href="/grammar/adjectives-that-start-with-z" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives Starting With Z
                </Link>
                <Link href="/grammar/adjectives-that-start-with-b" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Adjectives Starting With B
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Parts of Speech
                </Link>
                <Link href="/grammar/english-grammar" className="block text-blue-600 hover:text-blue-800 font-medium">
                  English Grammar
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Letter:</span>
                  <span className="text-gray-600">A</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Count:</span>
                  <span className="text-gray-600">100+ common</span>
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
                A-adjectives are perfect for describing amazing and awesome people!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
