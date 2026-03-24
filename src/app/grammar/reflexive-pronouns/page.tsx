"use client"

import Link from "next/link"

export default function ReflexivePronouns() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Reflexive Pronouns
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Learn how to use reflexive pronouns to refer back to the subject
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
                What Are Reflexive Pronouns?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Reflexive pronouns are pronouns that refer back to the subject of the sentence. They end in &quot;-self&quot; 
                (singular) or &quot;-selves&quot; (plural) and are used when the subject and object of a sentence are the same person or thing.
              </p>
            </div>

            {/* Reflexive Pronouns Chart */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Reflexive Pronouns Chart
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">Person</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Singular</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Plural</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">First Person</td>
                      <td className="border border-gray-300 px-4 py-3">myself</td>
                      <td className="border border-gray-300 px-4 py-3">ourselves</td>
                      <td className="border border-gray-300 px-4 py-3">I hurt myself.</td>
                    </tr>
                    <tr className="bg-indigo-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Second Person</td>
                      <td className="border border-gray-300 px-4 py-3">yourself</td>
                      <td className="border border-gray-300 px-4 py-3">yourselves</td>
                      <td className="border border-gray-300 px-4 py-3">You should be proud of yourself.</td>
                    </tr>
                    <tr className="bg-purple-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Third Person</td>
                      <td className="border border-gray-300 px-4 py-3">himself, herself, itself</td>
                      <td className="border border-gray-300 px-4 py-3">themselves</td>
                      <td className="border border-gray-300 px-4 py-3">She taught herself to play guitar.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Usage Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                When to Use Reflexive Pronouns
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-3">1. When Subject and Object Are the Same</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">I hurt myself.</p>
                      <p className="text-blue-600">Subject: I, Object: myself</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">She taught herself.</p>
                      <p className="text-blue-600">Subject: She, Object: herself</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-3">2. For Emphasis</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">I myself saw it happen.</p>
                      <p className="text-indigo-600">Emphasizing &quot;I&quot;</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">The president himself attended.</p>
                      <p className="text-indigo-600">Emphasizing &quot;president&quot;</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-3">3. With Prepositions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">I bought it for myself.</p>
                      <p className="text-purple-600">Preposition: for</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">She talked to herself.</p>
                      <p className="text-purple-600">Preposition: to</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Examples Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Reflexive Pronouns in Sentences
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <p className="text-lg">
                    <span className="font-semibold text-blue-700">I taught myself to cook.</span> (Subject and object are the same)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border-l-4 border-indigo-400">
                  <p className="text-lg">
                    <span className="font-semibold text-indigo-700">You should be proud of yourself.</span> (With preposition)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <p className="text-lg">
                    <span className="font-semibold text-purple-700">The children enjoyed themselves at the party.</span> (Plural reflexive)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl border-l-4 border-pink-400">
                  <p className="text-lg">
                    <span className="font-semibold text-pink-700">He himself admitted the mistake.</span> (For emphasis)
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Identify Reflexive Pronouns
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the reflexive pronouns in each sentence:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I hurt myself while playing.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: myself</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She taught herself to play piano.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: herself</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The children enjoyed themselves at the park.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: themselves</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Complete with Reflexive Pronouns
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Complete each sentence with the correct reflexive pronoun:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I taught _____ to swim. (first person singular)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: myself</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She bought _____ a new dress. (third person singular, female)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: herself</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">You should be proud of _____. (second person singular)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: yourself</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Reflexive vs Regular Pronouns
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct pronoun:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I hurt _____ while cooking. (myself/me)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: myself (reflexive - subject and object are the same)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She gave _____ a gift. (herself/her)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: herself (reflexive - she is giving to herself)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">He told _____ about the news. (himself/him)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: himself (reflexive - he is telling himself)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Reflexive Pronouns for Emphasis
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify reflexive pronouns used for emphasis:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I _____ saw the accident happen.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: myself (emphasizing &quot;I&quot;)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The president _____ attended the ceremony.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: himself (emphasizing &quot;president&quot;)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">You _____ should be responsible for this.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: yourself (emphasizing &quot;you&quot;)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Mistakes */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Common Mistakes to Avoid
              </h2>
              
              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">❌ Incorrect Usage</h4>
                  <p className="text-red-700">I hurt me. (Should be &quot;I hurt myself.&quot;)</p>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">✅ Correct Usage</h4>
                  <p className="text-green-700">I hurt myself.</p>
                </div>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">❌ Incorrect Usage</h4>
                  <p className="text-red-700">She taught her to play guitar. (Should be &quot;She taught herself.&quot;)</p>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">✅ Correct Usage</h4>
                  <p className="text-green-700">She taught herself to play guitar.</p>
                </div>
              </div>
            </div>

            {/* Writing Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Using Reflexive Pronouns
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Check Subject-Object Relationship</h4>
                    <p className="text-gray-600">Use reflexive pronouns when the subject and object refer to the same person or thing.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Use for Emphasis</h4>
                    <p className="text-gray-600">Reflexive pronouns can be used to emphasize the subject of the sentence.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Remember the Forms</h4>
                    <p className="text-gray-600">Singular: myself, yourself, himself, herself, itself. Plural: ourselves, yourselves, themselves.</p>
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
                <Link href="/grammar/pronouns" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Pronouns
                </Link>
                <Link href="/grammar/possessive-pronouns" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Possessive Pronouns
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Parts of Speech
                </Link>
                <Link href="/grammar/grammar-rules" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Grammar Rules
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
                  <span className="font-medium">Forms:</span>
                  <span className="text-gray-600">8 total forms</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Usage:</span>
                  <span className="text-gray-600">Subject = Object</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-blue-100">
                Reflexive pronouns always end in &quot;-self&quot; (singular) or &quot;-selves&quot; (plural)!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 