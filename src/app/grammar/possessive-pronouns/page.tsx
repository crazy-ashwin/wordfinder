"use client"

import Link from "next/link"

export default function PossessivePronouns() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Possessive Pronouns
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Learn about pronouns that show ownership and possession
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-indigo-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are Possessive Pronouns?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Possessive pronouns are words that show ownership or possession without using an apostrophe. 
                They replace nouns to indicate who owns or possesses something. Unlike possessive adjectives, 
                possessive pronouns stand alone and don&apos;t need a noun after them.
              </p>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Types of Possessive Pronouns
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-3">Singular Possessive Pronouns</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Mine</p>
                      <p className="text-indigo-600">First person singular</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Yours</p>
                      <p className="text-indigo-600">Second person singular</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">His</p>
                      <p className="text-indigo-600">Third person masculine</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Hers</p>
                      <p className="text-indigo-600">Third person feminine</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-3">Plural Possessive Pronouns</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Ours</p>
                      <p className="text-purple-600">First person plural</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Yours</p>
                      <p className="text-purple-600">Second person plural</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Theirs</p>
                      <p className="text-purple-600">Third person plural</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Its</p>
                      <p className="text-purple-600">Third person neuter</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-2xl font-semibold text-pink-700 mb-3">Comparison with Possessive Adjectives</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">My book (adjective)</p>
                      <p className="text-pink-600">vs The book is mine (pronoun)</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Your car (adjective)</p>
                      <p className="text-pink-600">vs The car is yours (pronoun)</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Her house (adjective)</p>
                      <p className="text-pink-600">vs The house is hers (pronoun)</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Their dog (adjective)</p>
                      <p className="text-pink-600">vs The dog is theirs (pronoun)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Examples Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Possessive Pronouns in Sentences
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border-l-4 border-indigo-400">
                  <p className="text-lg">
                    <span className="font-semibold text-indigo-700">This book is mine.</span> (Not &quot;This book is my&quot;)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <p className="text-lg">
                    <span className="font-semibold text-purple-700">The car is hers.</span> (Not &quot;The car is her&quot;)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl border-l-4 border-pink-400">
                  <p className="text-lg">
                    <span className="font-semibold text-pink-700">The house is theirs.</span> (Not &quot;The house is their&quot;)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-rose-50 to-red-50 p-6 rounded-xl border-l-4 border-rose-400">
                  <p className="text-lg">
                    <span className="font-semibold text-rose-700">This pen is yours.</span> (Not &quot;This pen is your&quot;)
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Identify Possessive Pronouns
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the possessive pronouns in each sentence:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">This book is mine, and that one is yours.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: mine, yours</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The car is hers, but the house is theirs.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: hers, theirs</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">This pen is his, and that notebook is ours.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: his, ours</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Complete with Possessive Pronouns
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Complete each sentence with the correct possessive pronoun:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">This book belongs to me. It is _____.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: mine</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The car belongs to her. It is _____.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: hers</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The house belongs to them. It is _____.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: theirs</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Possessive Pronouns vs Adjectives
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct form:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. This is _____ book. (my/mine)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: my (adjective before noun)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. The book is _____. (my/mine)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: mine (pronoun stands alone)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. This is _____ car. (her/hers)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: her (adjective before noun)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Singular vs Plural Possessive Pronouns
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-rose-50 to-red-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify if each possessive pronoun is singular or plural:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. Mine, yours, his, hers, its</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are singular</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. Ours, yours, theirs</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are plural</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. Yours (can be both singular and plural)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Yours can be both singular and plural</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Writing Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Using Possessive Pronouns
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Stand Alone</h4>
                    <p className="text-gray-600">Possessive pronouns don&apos;t need a noun after them.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">No Apostrophes</h4>
                    <p className="text-gray-600">Possessive pronouns don&apos;t use apostrophes like &quot;it&apos;s&quot;.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Distinguish from Adjectives</h4>
                    <p className="text-gray-600">Remember the difference between possessive adjectives and pronouns.</p>
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
                <Link href="/grammar/pronouns" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Pronouns
                </Link>
                <Link href="/grammar/possessive-adjectives" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Possessive Adjectives
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Parts of Speech
                </Link>
                <Link href="/grammar/grammar-rules" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Grammar Rules
                </Link>
                <Link href="/grammar/pronoun-examples" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Pronoun Examples
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Pronoun Types:</span>
                  <span className="text-gray-600">3 main categories</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Common Examples:</span>
                  <span className="text-gray-600">8 main pronouns</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-indigo-100">
                Remember: possessive pronouns stand alone, while possessive adjectives come before nouns!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 