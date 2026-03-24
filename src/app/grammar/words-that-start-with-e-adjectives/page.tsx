"use client"

import Link from "next/link"

export default function WordsThatStartWithEAdjectives() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives That Begin With E
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Explore excellent, energetic, and extraordinary adjectives starting with the letter E
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-emerald-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Excellent Adjectives Starting With E
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter E introduces us to a world of excellent and energetic adjectives that can enhance our language. 
                From &quot;excellent&quot; to &quot;energetic,&quot; these words help us express enthusiasm, describe qualities, 
                and add excitement to our descriptions.
              </p>
            </div>

            {/* Popular E Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives Starting With E
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border-l-4 border-emerald-400">
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-4">Positive Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Excellent</p>
                      <p className="text-emerald-600 text-sm">Outstandingly good or superior</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Energetic</p>
                      <p className="text-emerald-600 text-sm">Full of energy and enthusiasm</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Extraordinary</p>
                      <p className="text-emerald-600 text-sm">Beyond what is usual or ordinary</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Enthusiastic</p>
                      <p className="text-emerald-600 text-sm">Showing intense and eager enjoyment</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border-l-4 border-teal-400">
                  <h3 className="text-2xl font-semibold text-teal-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-teal-800">Empathetic</p>
                      <p className="text-teal-600 text-sm">Understanding and sharing feelings</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-teal-800">Efficient</p>
                      <p className="text-teal-600 text-sm">Working effectively without waste</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-teal-800">Elegant</p>
                      <p className="text-teal-600 text-sm">Graceful and stylish in appearance</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-teal-800">Encouraging</p>
                      <p className="text-teal-600 text-sm">Giving support and confidence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: E-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Match each E-adjective with its correct meaning:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Empathetic&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very smart</p>
                        <p className="text-gray-600">B) Understanding and sharing feelings</p>
                        <p className="text-gray-600">C) Being very fast</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: B) Understanding and sharing feelings</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Efficient&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very expensive</p>
                        <p className="text-gray-600">B) Being very strong</p>
                        <p className="text-gray-600">C) Working effectively without waste</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: C) Working effectively without waste</p>
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
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate E-adjectives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ student always helped others.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: encouraging (giving support and confidence)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She had an _____ idea for the project.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: excellent (outstandingly good or superior)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                <details className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg">
                  <summary className="cursor-pointer text-emerald-700 font-semibold text-lg">
                    What are the most common E-adjectives?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    The most common E-adjectives include: excellent, easy, early, empty, equal, essential, exact, expensive, exciting, and energetic.
                  </p>
                </details>
                
                <details className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg">
                  <summary className="cursor-pointer text-teal-700 font-semibold text-lg">
                    How do I use E-adjectives in sentences?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    E-adjectives can be used before nouns (attributive) or after linking verbs (predicative). For example: &quot;She is energetic&quot; or &quot;The energetic child played all day.&quot;
                  </p>
                </details>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>E-adjectives are excellent for describing energetic and enthusiastic qualities</li>
                <li>Many E-adjectives have positive connotations, making them great for compliments</li>
                <li>Some E-adjectives can be used as both adjectives and adverbs</li>
                <li>Pay attention to the spelling of E-adjectives, as some have silent letters</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjectives-that-start-with" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives That Start With
                </Link>
                <Link href="/grammar/adjectives" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives
                </Link>
                <Link href="/grammar/descriptive-adjectives" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Descriptive Adjectives
                </Link>
                <Link href="/grammar/adjective-examples" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjective Examples
                </Link>
                <Link href="/grammar/adjectives-that-start-with-d" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives Starting With D
                </Link>
                <Link href="/grammar/adjectives-that-start-with-f" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives Starting With F
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Parts of Speech
                </Link>
                <Link href="/grammar/english-grammar" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  English Grammar
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-emerald-100">
                E-adjectives are perfect for describing excellent and energetic qualities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
