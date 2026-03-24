"use client"

import Link from "next/link"

export default function LinkingVerbs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Linking Verbs
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Master the verbs that connect subjects to their descriptions and states
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purple-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are Linking Verbs?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Linking verbs connect the subject of a sentence to a word or phrase that describes or identifies it. 
                They don&apos;t show action but instead link the subject to additional information. 
                From &quot;is&quot; to &quot;become,&quot; linking verbs are essential for descriptive writing.
              </p>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Types of Linking Verbs
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-3">Forms of &quot;Be&quot;</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Is</p>
                      <p className="text-purple-600">She is happy.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Are</p>
                      <p className="text-purple-600">They are tired.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Was</p>
                      <p className="text-purple-600">He was late.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Were</p>
                      <p className="text-purple-600">We were excited.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-violet-500 pl-6">
                  <h3 className="text-2xl font-semibold text-violet-700 mb-3">Sensory Verbs</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Look</p>
                      <p className="text-violet-600">She looks beautiful.</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Feel</p>
                      <p className="text-violet-600">I feel sick.</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Sound</p>
                      <p className="text-violet-600">The music sounds great.</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Taste</p>
                      <p className="text-violet-600">The soup tastes delicious.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-fuchsia-500 pl-6">
                  <h3 className="text-2xl font-semibold text-fuchsia-700 mb-3">State of Being</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-fuchsia-50 p-4 rounded-lg">
                      <p className="font-semibold text-fuchsia-800">Become</p>
                      <p className="text-fuchsia-600">She became a doctor.</p>
                    </div>
                    <div className="bg-fuchsia-50 p-4 rounded-lg">
                      <p className="font-semibold text-fuchsia-800">Remain</p>
                      <p className="text-fuchsia-600">He remained calm.</p>
                    </div>
                    <div className="bg-fuchsia-50 p-4 rounded-lg">
                      <p className="font-semibold text-fuchsia-800">Stay</p>
                      <p className="text-fuchsia-600">The weather stays warm.</p>
                    </div>
                    <div className="bg-fuchsia-50 p-4 rounded-lg">
                      <p className="font-semibold text-fuchsia-800">Grow</p>
                      <p className="text-fuchsia-600">The plant grows tall.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Examples Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Linking Verb Examples
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <p className="text-lg">
                    <span className="font-semibold text-purple-700">The sky is blue.</span> (is = linking verb)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 p-6 rounded-xl border-l-4 border-violet-400">
                  <p className="text-lg">
                    <span className="font-semibold text-violet-700">The cake smells delicious.</span> (smells = linking verb)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-fuchsia-50 to-pink-50 p-6 rounded-xl border-l-4 border-fuchsia-400">
                  <p className="text-lg">
                    <span className="font-semibold text-fuchsia-700">She became a teacher.</span> (became = linking verb)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl border-l-4 border-pink-400">
                  <p className="text-lg">
                    <span className="font-semibold text-pink-700">The flowers look beautiful.</span> (look = linking verb)
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Identify Linking Verbs
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the linking verb in each sentence:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The weather is cold today.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: is</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The soup tastes salty.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: tastes</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She became a doctor.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: became</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Linking vs Action Verbs
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Determine if the verb is linking or action:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The dog runs fast. (runs)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-violet-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Action verb</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The dog is fast. (is)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-violet-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Linking verb</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She looks at the picture. (looks)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-violet-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Action verb</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Complete with Linking Verbs
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-fuchsia-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Complete each sentence with a linking verb:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The cake _____ delicious.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-fuchsia-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: tastes, smells, looks</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She _____ a teacher.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-fuchsia-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: is, became, remains</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The music _____ beautiful.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-fuchsia-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: sounds, is</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Subject Complements
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify the subject complement in each sentence:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The sky is blue.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: blue</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She became a doctor.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: doctor</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The flowers smell sweet.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: sweet</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Writing Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Using Linking Verbs
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Identify the Subject</h4>
                    <p className="text-gray-600">Find what the linking verb connects to the description.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Look for Descriptions</h4>
                    <p className="text-gray-600">Linking verbs connect subjects to adjectives or nouns that describe them.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Avoid Confusion</h4>
                    <p className="text-gray-600">Some verbs can be both linking and action verbs depending on context.</p>
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
                <Link href="/grammar/action-verb-examples" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Action Verb Examples
                </Link>
                <Link href="/grammar/verbs" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Verbs
                </Link>
                <Link href="/grammar/subject-complements" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Subject Complements
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Parts of Speech
                </Link>
                <Link href="/grammar/sentence-structure" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Sentence Structure
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Linking Verb Types:</span>
                  <span className="text-gray-600">3 main categories</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Common Forms:</span>
                  <span className="text-gray-600">Be, sensory, state</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-purple-100">
                Linking verbs connect subjects to their descriptions - they&apos;re essential for creating clear, descriptive sentences!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 