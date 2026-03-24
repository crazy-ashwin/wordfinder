"use client"

import Link from "next/link"

export default function QWordsForKids() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Q Words for Kids
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Learn fun and educational words that start with the letter Q
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
                What Are Q Words?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Q words are words that start with the letter Q. In English, the letter Q is almost always 
                followed by the letter U, making it a unique letter combination. Q words can be nouns, 
                verbs, adjectives, and other parts of speech. Learning Q words helps expand vocabulary 
                and understanding of language patterns.
              </p>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Types of Q Words
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-2xl font-semibold text-green-700 mb-3">Common Q Words</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">Queen</p>
                      <p className="text-green-600">A female ruler</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">Quick</p>
                      <p className="text-green-600">Fast or speedy</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">Question</p>
                      <p className="text-green-600">Something asked</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">Quiet</p>
                      <p className="text-green-600">Making little noise</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-3">Animal Q Words</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">Quail</p>
                      <p className="text-emerald-600">A small bird</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">Quokka</p>
                      <p className="text-emerald-600">A small marsupial</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">Quetzal</p>
                      <p className="text-emerald-600">A colorful bird</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">Quokka</p>
                      <p className="text-emerald-600">Australian animal</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-2xl font-semibold text-teal-700 mb-3">Object Q Words</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Quilt</p>
                      <p className="text-teal-600">A warm blanket</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Quill</p>
                      <p className="text-teal-600">A writing pen</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Quartz</p>
                      <p className="text-teal-600">A type of crystal</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Queue</p>
                      <p className="text-teal-600">A line of people</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Examples Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Q Words in Sentences
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-400">
                  <p className="text-lg">
                    <span className="font-semibold text-green-700">The queen wore a beautiful crown.</span> (Noun)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border-l-4 border-emerald-400">
                  <p className="text-lg">
                    <span className="font-semibold text-emerald-700">The rabbit was very quick.</span> (Adjective)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl border-l-4 border-teal-400">
                  <p className="text-lg">
                    <span className="font-semibold text-teal-700">I have a question for you.</span> (Noun)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl border-l-4 border-cyan-400">
                  <p className="text-lg">
                    <span className="font-semibold text-cyan-700">The library is very quiet.</span> (Adjective)
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Identify Q Words
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the Q words in each sentence:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The queen wore a beautiful crown.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: queen</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The rabbit was very quick.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: quick</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I have a question for you.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: question</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Complete with Q Words
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Complete each sentence with a Q word:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ wore a beautiful crown.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: queen</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The rabbit was very _____.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: quick</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I have a _____ for you.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: question</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Q Word Categories
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Sort these Q words by category:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Animals: quail, quokka, quetzal</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are animals</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Objects: quilt, quill, quartz</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are objects</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Descriptive: quick, quiet, quaint</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are descriptive words (adjectives)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Q Word Meanings
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Match each Q word with its meaning:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. Queen - _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: A female ruler</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. Quick - _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Fast or speedy</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. Question - _____</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Something asked</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Writing Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Learning Q Words
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Remember QU Rule</h4>
                    <p className="text-gray-600">Q is almost always followed by U in English words.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Practice Writing</h4>
                    <p className="text-gray-600">Write Q words in sentences to remember them better.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Use in Daily Life</h4>
                    <p className="text-gray-600">Try to use Q words in everyday conversations.</p>
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
                <Link href="/grammar/alphabet" className="block text-green-600 hover:text-green-800 font-medium">
                  Alphabet
                </Link>
                <Link href="/grammar/letter-words" className="block text-green-600 hover:text-green-800 font-medium">
                  Letter Words
                </Link>
                <Link href="/grammar/vocabulary" className="block text-green-600 hover:text-green-800 font-medium">
                  Vocabulary
                </Link>
                <Link href="/grammar/spelling" className="block text-green-600 hover:text-green-800 font-medium">
                  Spelling
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
                  <span className="font-medium">Categories:</span>
                  <span className="text-gray-600">3 main types</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Common Pattern:</span>
                  <span className="text-gray-600">QU combination</span>
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
                Q words almost always have a U after them - it&apos;s a special letter team!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 