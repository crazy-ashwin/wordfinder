"use client"

import Link from "next/link"

export default function WordsThatStartWithNAdjectives() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-navy-600 via-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives That Begin With N
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover natural, nice, and necessary adjectives starting with the letter N
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-navy-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Natural Adjectives Starting With N
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter N introduces us to a world of natural and nice adjectives that can enhance our language. 
                From &quot;natural&quot; to &quot;nice,&quot; these words help us express nature, describe qualities, 
                and add nuance to our descriptions.
              </p>
            </div>

            {/* Popular N Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives Starting With N
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-navy-50 to-blue-50 p-6 rounded-xl border-l-4 border-navy-400">
                  <h3 className="text-2xl font-semibold text-navy-700 mb-4">Positive Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-navy-800">Natural</p>
                      <p className="text-navy-600 text-sm">Existing in or produced by nature</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-navy-800">Nice</p>
                      <p className="text-navy-600 text-sm">Pleasant and agreeable</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-navy-800">Necessary</p>
                      <p className="text-navy-600 text-sm">Required or essential</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-navy-800">New</p>
                      <p className="text-navy-600 text-sm">Recently made or created</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Noble</p>
                      <p className="text-blue-600 text-sm">Having high moral qualities</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Nurturing</p>
                      <p className="text-blue-600 text-sm">Caring and supportive</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Neat</p>
                      <p className="text-blue-600 text-sm">Clean and organized</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Notable</p>
                      <p className="text-blue-600 text-sm">Worthy of attention</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: N-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-navy-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Match each N-adjective with its correct meaning:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Noble&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very old</p>
                        <p className="text-gray-600">B) Having high moral qualities</p>
                        <p className="text-gray-600">C) Being very expensive</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-navy-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: B) Having high moral qualities</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Nurturing&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very fast</p>
                        <p className="text-gray-600">B) Being very strong</p>
                        <p className="text-gray-600">C) Caring and supportive</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-navy-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: C) Caring and supportive</p>
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
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate N-adjectives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ teacher always helped students.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: nurturing (caring and supportive)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She had a _____ idea for the project.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: new (recently made or created)</p>
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
                <details className="bg-gradient-to-r from-navy-50 to-blue-50 p-4 rounded-lg">
                  <summary className="cursor-pointer text-navy-700 font-semibold text-lg">
                    What are the most common N-adjectives?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    The most common N-adjectives include: natural, nice, necessary, new, noble, neat, notable, normal, numerous, and native.
                  </p>
                </details>
                
                <details className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                  <summary className="cursor-pointer text-blue-700 font-semibold text-lg">
                    How do I use N-adjectives in sentences?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    N-adjectives can be used before nouns (attributive) or after linking verbs (predicative). For example: &quot;She is nice&quot; or &quot;The nice person helped me.&quot;
                  </p>
                </details>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>N-adjectives are natural for describing nice and necessary qualities</li>
                <li>Many N-adjectives have positive connotations, making them great for compliments</li>
                <li>Some N-adjectives can be used as both adjectives and adverbs</li>
                <li>Pay attention to the spelling of N-adjectives, as some have silent letters</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjectives-that-start-with" className="block text-navy-600 hover:text-navy-800 font-medium">
                  Adjectives That Start With
                </Link>
                <Link href="/grammar/adjectives" className="block text-navy-600 hover:text-navy-800 font-medium">
                  Adjectives
                </Link>
                <Link href="/grammar/descriptive-adjectives" className="block text-navy-600 hover:text-navy-800 font-medium">
                  Descriptive Adjectives
                </Link>
                <Link href="/grammar/adjective-examples" className="block text-navy-600 hover:text-navy-800 font-medium">
                  Adjective Examples
                </Link>
                <Link href="/grammar/adjectives-that-start-with-m" className="block text-navy-600 hover:text-navy-800 font-medium">
                  Adjectives Starting With M
                </Link>
                <Link href="/grammar/adjectives-that-start-with-o" className="block text-navy-600 hover:text-navy-800 font-medium">
                  Adjectives Starting With O
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-navy-600 hover:text-navy-800 font-medium">
                  Parts of Speech
                </Link>
                <Link href="/grammar/english-grammar" className="block text-navy-600 hover:text-navy-800 font-medium">
                  English Grammar
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-navy-500 to-blue-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-navy-100">
                N-adjectives are perfect for describing natural and nice qualities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
