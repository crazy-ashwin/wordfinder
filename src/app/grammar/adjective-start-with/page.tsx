"use client"

import Link from "next/link"

export default function AdjectiveStartWith() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives That Start With Letter A
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover amazing, awesome, and attractive adjectives starting with A to enhance your vocabulary
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
                Amazing Adjectives That Start With Letter A
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter A introduces us to a world of amazing and awesome adjectives that can enhance our language. 
                From &quot;amazing&quot; to &quot;awesome,&quot; these words help us express various qualities, describe characteristics, 
                and add attraction to our descriptions.
              </p>
            </div>

            {/* Popular A Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives That Start With Letter A
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-400">
                  <h3 className="text-2xl font-semibold text-green-700 mb-4">Personality & Character</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-green-800">Amazing</p>
                      <p className="text-green-600 text-sm">Very surprising and impressive</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-green-800">Awesome</p>
                      <p className="text-green-600 text-sm">Extremely good and impressive</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-green-800">Attractive</p>
                      <p className="text-green-600 text-sm">Pleasing to look at</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-green-800">Active</p>
                      <p className="text-green-600 text-sm">Full of energy and movement</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-green-800">Adventurous</p>
                      <p className="text-green-600 text-sm">Willing to take risks</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border-l-4 border-emerald-400">
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-4">Abilities & Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Able</p>
                      <p className="text-emerald-600 text-sm">Having the power to do something</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Accurate</p>
                      <p className="text-emerald-600 text-sm">Correct and precise</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Adaptable</p>
                      <p className="text-emerald-600 text-sm">Able to change easily</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Affectionate</p>
                      <p className="text-emerald-600 text-sm">Showing love and care</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Ambitious</p>
                      <p className="text-emerald-600 text-sm">Having strong desire to succeed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More A Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                More Adjectives That Start With Letter A
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-700 mb-3">Characteristics</h4>
                  <ul className="text-teal-600 space-y-1 text-sm">
                    <li>Artistic</li>
                    <li>Authentic</li>
                    <li>Amusing</li>
                    <li>Appreciative</li>
                    <li>Assertive</li>
                    <li>Attentive</li>
                    <li>Agreeable</li>
                    <li>Ambitious</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-cyan-700 mb-3">States</h4>
                  <ul className="text-cyan-600 space-y-1 text-sm">
                    <li>Artistic</li>
                    <li>Authentic</li>
                    <li>Amusing</li>
                    <li>Appreciative</li>
                    <li>Assertive</li>
                    <li>Attentive</li>
                    <li>Agreeable</li>
                    <li>Ambitious</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-3">Qualities</h4>
                  <ul className="text-blue-600 space-y-1 text-sm">
                    <li>Artistic</li>
                    <li>Authentic</li>
                    <li>Amusing</li>
                    <li>Appreciative</li>
                    <li>Assertive</li>
                    <li>Attentive</li>
                    <li>Agreeable</li>
                    <li>Ambitious</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: A-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Match each A-adjective with its correct meaning:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Amazing&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very old</p>
                        <p className="text-gray-600">B) Very surprising and impressive</p>
                        <p className="text-gray-600">C) Being very expensive</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: B) Very surprising and impressive</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Awesome&quot; means:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Being very fast</p>
                        <p className="text-gray-600">B) Extremely good and impressive</p>
                        <p className="text-gray-600">C) Being very tall</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: B) Extremely good and impressive</p>
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
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate A-adjectives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ student always helped others.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: amazing (very surprising and impressive)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ performance received applause.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: awesome (extremely good and impressive)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ flower caught everyone&apos;s eye.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: attractive (pleasing to look at)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: A-Adjective Synonyms
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find synonyms for each A-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Amazing&quot; is similar to _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Incredible, astonishing, astounding, remarkable</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Awesome&quot; is similar to _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Fantastic, excellent, wonderful, superb</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;Attractive&quot; is similar to _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Beautiful, appealing, charming, lovely</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for A-Adjectives
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Position</h4>
                    <p className="text-gray-600">A-adjectives typically come before the noun they describe: &quot;an amazing student&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Articles</h4>
                    <p className="text-gray-600">Use &quot;an&quot; before A-adjectives since A is a vowel sound: &quot;an awesome performance&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Comparatives</h4>
                    <p className="text-gray-600">Many A-adjectives use &quot;more&quot; for comparison: &quot;more amazing&quot;</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">What are some common adjectives starting with letter A?</h3>
                  <p className="text-gray-600">Common adjectives starting with letter A include amazing, awesome, attractive, active, adventurous, able, accurate, adaptable, affectionate, ambitious, artistic, authentic, amusing, appreciative, assertive, attentive, agreeable, and many more.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">How do I use A-adjectives in sentences?</h3>
                  <p className="text-gray-600">A-adjectives typically come before nouns: &quot;The amazing student&quot; or after linking verbs: &quot;The student is amazing.&quot;</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Are all A-adjectives positive?</h3>
                  <p className="text-gray-600">No, while many A-adjectives like &quot;amazing&quot; and &quot;awesome&quot; are positive, others like &quot;angry&quot; or &quot;anxious&quot; can be negative depending on context.</p>
                </div>
                
                <div className="pb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Can A-adjectives be used as different parts of speech?</h3>
                  <p className="text-gray-600">Yes, many A-adjectives can function as different parts of speech. For example, &quot;amazing&quot; can be an adjective, noun, or adverb depending on usage.</p>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-semibold mb-4 text-green-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-green-800 space-y-3">
                <li>A-adjectives cover a wide range of meanings and contexts</li>
                <li>Many A-adjectives have positive connotations</li>
                <li>Some A-adjectives can be used as multiple parts of speech</li>
                <li>Pay attention to the spelling of A-adjectives, as some have silent letters</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjectives" className="block text-green-600 hover:text-green-800 font-medium">
                  Adjectives
                </Link>
                <Link href="/grammar/descriptive-adjectives" className="block text-green-600 hover:text-green-800 font-medium">
                  Descriptive Adjectives
                </Link>
                <Link href="/grammar/adjective-examples" className="block text-green-600 hover:text-green-800 font-medium">
                  Adjective Examples
                </Link>
                <Link href="/grammar/adjective-start-with-letter-b" className="block text-green-600 hover:text-green-800 font-medium">
                  Adjectives Starting With B
                </Link>
                <Link href="/grammar/adjective-start-with-letter-z" className="block text-green-600 hover:text-green-800 font-medium">
                  Adjectives Starting With Z
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-green-600 hover:text-green-800 font-medium">
                  Parts of Speech
                </Link>
                <Link href="/grammar/english-grammar" className="block text-green-600 hover:text-green-800 font-medium">
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
                  <span className="font-medium">Type:</span>
                  <span className="text-gray-600">Adjectives</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Count:</span>
                  <span className="text-gray-600">50+ common</span>
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
                A-adjectives provide amazing and awesome descriptive options!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
