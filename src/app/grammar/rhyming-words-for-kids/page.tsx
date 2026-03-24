"use client"

import Link from "next/link"

export default function RhymingWordsForKids() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Rhyming Words for Kids
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Fun and educational rhyming words to help children learn and play
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-pink-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are Rhyming Words?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Rhyming words are words that have the same ending sound. They are fun to learn and help 
                children develop phonemic awareness, reading skills, and creativity. Rhyming words make 
                learning language enjoyable and memorable!
              </p>
            </div>

            {/* Rhyming Patterns */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Common Rhyming Patterns
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-2xl font-semibold text-pink-700 mb-3">-at Family</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-pink-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-pink-800">cat</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-pink-800">hat</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-pink-800">bat</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-pink-800">rat</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-rose-500 pl-6">
                  <h3 className="text-2xl font-semibold text-rose-700 mb-3">-an Family</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-rose-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-rose-800">can</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-rose-800">man</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-rose-800">fan</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-rose-800">pan</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-2xl font-semibold text-red-700 mb-3">-ig Family</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-red-800">pig</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-red-800">big</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-red-800">dig</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg text-center">
                      <p className="font-semibold text-red-800">wig</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fun Rhyming Examples */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Fun Rhyming Examples
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl border-l-4 border-pink-400">
                  <p className="text-lg">
                    <span className="font-semibold text-pink-700">The cat sat on the mat.</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-rose-50 to-red-50 p-6 rounded-xl border-l-4 border-rose-400">
                  <p className="text-lg">
                    <span className="font-semibold text-rose-700">The big pig likes to dig.</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border-l-4 border-red-400">
                  <p className="text-lg">
                    <span className="font-semibold text-red-700">The man has a fan in his hand.</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl border-l-4 border-pink-400">
                  <p className="text-lg">
                    <span className="font-semibold text-pink-700">The rat wears a hat and sits on a mat.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Find the Rhyming Word
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Which word rhymes with &quot;cat&quot;?</h4>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center cursor-pointer hover:bg-pink-50">
                      <p className="font-semibold">hat</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center cursor-pointer hover:bg-pink-50">
                      <p className="font-semibold">dog</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center cursor-pointer hover:bg-pink-50">
                      <p className="font-semibold">bat</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center cursor-pointer hover:bg-pink-50">
                      <p className="font-semibold">rat</p>
                    </div>
                  </div>
                  
                  <details className="mt-4">
                    <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                    <p className="mt-2 text-gray-700">Answer: hat, bat, rat (all rhyme with cat)</p>
                  </details>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Complete the Rhyme
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-rose-50 to-red-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Complete these rhyming sentences:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The big _____ likes to dig. (rhymes with big)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: pig</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The man has a _____ in his hand. (rhymes with man)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: fan</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The cat sat on the _____. (rhymes with cat)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: mat</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Rhyming Word Families
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Sort these words into rhyming families:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Words: cat, hat, bat, rat, can, man, fan, pan</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: -at family: cat, hat, bat, rat | -an family: can, man, fan, pan</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Words: pig, big, dig, wig, dog, log, fog, jog</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: -ig family: pig, big, dig, wig | -og family: dog, log, fog, jog</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Create Your Own Rhymes
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Create rhyming sentences with these words:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: cat, hat, sat</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: The cat wore a hat and sat on the mat.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: pig, big, dig</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: The big pig likes to dig.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: man, fan, can</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: The man has a fan and can cool the room.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Learning Rhyming Words
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Listen Carefully</h4>
                    <p className="text-gray-600">Pay attention to the ending sounds of words to identify rhymes.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Practice with Songs</h4>
                    <p className="text-gray-600">Nursery rhymes and songs are great ways to learn rhyming words.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Create Your Own</h4>
                    <p className="text-gray-600">Try making up your own rhyming sentences and stories.</p>
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
                <Link href="/grammar/phonics" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Phonics
                </Link>
                <Link href="/grammar/reading-skills" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Reading Skills
                </Link>
                <Link href="/grammar/word-families" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Word Families
                </Link>
                <Link href="/grammar/kindergarten-worksheets" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Kindergarten Worksheets
                </Link>
                <Link href="/grammar/early-literacy" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Early Literacy
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Patterns:</span>
                  <span className="text-gray-600">Many families</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Age Group:</span>
                  <span className="text-gray-600">3-8 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-pink-100">
                Rhyming words help develop phonemic awareness and make learning to read more fun!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 