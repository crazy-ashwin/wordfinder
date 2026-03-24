"use client"

import Link from "next/link"

export default function Adverbs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Adverbs
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Learn about words that modify verbs, adjectives, and other adverbs in English grammar
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are Adverbs?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Adverbs are words that modify verbs, adjectives, other adverbs, or entire sentences. They provide 
                additional information about how, when, where, why, or to what extent something happens. Adverbs 
                often end in -ly, but not always. They help make our language more precise and descriptive by 
                adding details about actions and qualities.
              </p>
            </div>

            {/* Types of Adverbs */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Types of Adverbs
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-2xl font-semibold text-red-700 mb-3">1. Adverbs of Manner</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">Definition</p>
                      <p className="text-red-600">Describe how something is done</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">Examples</p>
                      <p className="text-red-600">quickly, slowly, carefully, loudly, softly</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">Usage</p>
                      <p className="text-red-600">Usually end in -ly</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">Sentence</p>
                      <p className="text-red-600">She sings beautifully.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-2xl font-semibold text-pink-700 mb-3">2. Adverbs of Time</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Definition</p>
                      <p className="text-pink-600">Tell when something happens</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Examples</p>
                      <p className="text-pink-600">now, then, today, yesterday, soon</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Usage</p>
                      <p className="text-pink-600">Often at beginning or end of sentence</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Sentence</p>
                      <p className="text-pink-600">I will see you tomorrow.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-rose-500 pl-6">
                  <h3 className="text-2xl font-semibold text-rose-700 mb-3">3. Adverbs of Place</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <p className="font-semibold text-rose-800">Definition</p>
                      <p className="text-rose-600">Tell where something happens</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <p className="font-semibold text-rose-800">Examples</p>
                      <p className="text-rose-600">here, there, everywhere, inside, outside</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <p className="font-semibold text-rose-800">Usage</p>
                      <p className="text-rose-600">Usually after the verb</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <p className="font-semibold text-rose-800">Sentence</p>
                      <p className="text-rose-600">The cat is sleeping here.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-2xl font-semibold text-red-700 mb-3">4. Adverbs of Frequency</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">Definition</p>
                      <p className="text-red-600">Tell how often something happens</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">Examples</p>
                      <p className="text-red-600">always, never, often, sometimes, rarely</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">Usage</p>
                      <p className="text-red-600">Usually before main verb</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-800">Sentence</p>
                      <p className="text-red-600">I always eat breakfast.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-2xl font-semibold text-pink-700 mb-3">5. Adverbs of Degree</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Definition</p>
                      <p className="text-pink-600">Show intensity or extent</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Examples</p>
                      <p className="text-pink-600">very, quite, extremely, too, enough</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Usage</p>
                      <p className="text-pink-600">Modify adjectives or other adverbs</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Sentence</p>
                      <p className="text-pink-600">She is very intelligent.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Adverbs in Sentences */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Adverbs in Sentences
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border-l-4 border-red-400">
                  <p className="text-lg">
                    <span className="font-semibold text-red-700">She sings beautifully (manner) every day (frequency).</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl border-l-4 border-pink-400">
                  <p className="text-lg">
                    <span className="font-semibold text-pink-700">The children play happily (manner) outside (place) now (time).</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-rose-50 to-red-50 p-6 rounded-xl border-l-4 border-rose-400">
                  <p className="text-lg">
                    <span className="font-semibold text-rose-700">He is extremely (degree) intelligent and works very (degree) hard.</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border-l-4 border-red-400">
                  <p className="text-lg">
                    <span className="font-semibold text-red-700">I will see you tomorrow (time) here (place).</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Identify Adverb Types
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify the type of each adverb:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;She runs quickly.&quot; - quickly is an adverb of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Manner (describes how she runs)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;I will see you tomorrow.&quot; - tomorrow is an adverb of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Time (tells when)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;He is very intelligent.&quot; - very is an adverb of _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Degree (shows intensity)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Find Adverbs in Sentences
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find all the adverbs in each sentence:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">She sings beautifully every day.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: beautifully (manner), every day (frequency)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The children play happily outside now.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: happily (manner), outside (place), now (time)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">He is extremely intelligent and works very hard.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: extremely (degree), very (degree), hard (manner)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Adverb vs Adjective
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-rose-50 to-red-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify if each word is an adverb or adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;She is a quick runner.&quot; - quick is _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Adjective (describes the noun runner)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;She runs quickly.&quot; - quickly is _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Adverb (describes the verb runs)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. &quot;He is a hard worker.&quot; - hard is _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Adjective (describes the noun worker)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Create Sentences with Adverbs
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Create sentences using these types of adverbs:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: adverb of manner + adverb of time</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: She dances beautifully every evening.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: adverb of frequency + adverb of place</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: I always study here.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: adverb of degree + adverb of manner</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: He works extremely hard.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Important Grammar Rules for Adverbs
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Position</h4>
                    <p className="text-gray-600">Adverbs of manner usually come after the verb, while adverbs of frequency come before the main verb.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Formation</h4>
                    <p className="text-gray-600">Many adverbs are formed by adding -ly to adjectives, but not all adverbs end in -ly.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Multiple Adverbs</h4>
                    <p className="text-gray-600">When using multiple adverbs, follow the order: manner, place, time.</p>
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
                <Link href="/grammar/verbs" className="block text-red-600 hover:text-red-800 font-medium">
                  Verbs
                </Link>
                <Link href="/grammar/adjectives" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-red-600 hover:text-red-800 font-medium">
                  Parts of Speech
                </Link>
                <Link href="/grammar/english-grammar" className="block text-red-600 hover:text-red-800 font-medium">
                  English Grammar
                </Link>
                <Link href="/grammar/sentence-structure" className="block text-red-600 hover:text-red-800 font-medium">
                  Sentence Structure
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Types:</span>
                  <span className="text-gray-600">5 main types</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Function:</span>
                  <span className="text-gray-600">Modify verbs, adjectives, adverbs</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-red-100">
                Adverbs add precision and detail to your writing!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 