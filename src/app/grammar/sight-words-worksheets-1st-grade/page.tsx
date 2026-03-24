"use client"

import Link from "next/link"

export default function SightWordsWorksheetsFirstGrade() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            First Grade Sight Words Worksheets
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Fun and engaging worksheets to help first graders master essential sight words
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are First Grade Sight Words Worksheets?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                First grade sight words worksheets are educational activities designed to help children 
                recognize and read common words instantly. These worksheets include fun exercises like 
                word searches, fill-in-the-blanks, matching games, and sentence building activities. 
                They help first graders build reading fluency and confidence by practicing words that 
                appear frequently in books and texts.
              </p>
            </div>

            {/* Worksheet Types */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Types of Sight Word Worksheets
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-2xl font-semibold text-orange-700 mb-3">Word Recognition</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Word Searches</p>
                      <p className="text-orange-600">Find sight words in letter grids</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Word Matching</p>
                      <p className="text-orange-600">Match words to pictures or definitions</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Word Tracing</p>
                      <p className="text-orange-600">Practice writing sight words</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Word Coloring</p>
                      <p className="text-orange-600">Color words by frequency or category</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-amber-500 pl-6">
                  <h3 className="text-2xl font-semibold text-amber-700 mb-3">Sentence Building</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="font-semibold text-amber-800">Fill in the Blanks</p>
                      <p className="text-amber-600">Complete sentences with sight words</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="font-semibold text-amber-800">Sentence Scramble</p>
                      <p className="text-amber-600">Put words in correct order</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="font-semibold text-amber-800">Word Banks</p>
                      <p className="text-amber-600">Choose words to complete sentences</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="font-semibold text-amber-800">Picture Sentences</p>
                      <p className="text-amber-600">Write sentences about pictures</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-2xl font-semibold text-yellow-700 mb-3">Reading Practice</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800">Reading Passages</p>
                      <p className="text-yellow-600">Short stories with sight words</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800">Comprehension Questions</p>
                      <p className="text-yellow-600">Answer questions about stories</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800">Fluency Practice</p>
                      <p className="text-yellow-600">Read words and sentences quickly</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800">Word Lists</p>
                      <p className="text-yellow-600">Practice reading word lists</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sample Worksheets */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Sample Worksheet Activities
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl border-l-4 border-orange-400">
                  <h3 className="text-xl font-semibold text-orange-800 mb-4">Worksheet 1: Word Search</h3>
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <p className="text-sm text-gray-600 mb-2">Find these words: the, and, is, in, it, to, you, that</p>
                    <div className="grid grid-cols-8 gap-1 text-center text-xs">
                      <div className="bg-gray-100 p-2">T</div>
                      <div className="bg-gray-100 p-2">H</div>
                      <div className="bg-gray-100 p-2">E</div>
                      <div className="bg-gray-100 p-2">A</div>
                      <div className="bg-gray-100 p-2">N</div>
                      <div className="bg-gray-100 p-2">D</div>
                      <div className="bg-gray-100 p-2">I</div>
                      <div className="bg-gray-100 p-2">S</div>
                      <div className="bg-gray-100 p-2">I</div>
                      <div className="bg-gray-100 p-2">N</div>
                      <div className="bg-gray-100 p-2">I</div>
                      <div className="bg-gray-100 p-2">T</div>
                      <div className="bg-gray-100 p-2">T</div>
                      <div className="bg-gray-100 p-2">O</div>
                      <div className="bg-gray-100 p-2">Y</div>
                      <div className="bg-gray-100 p-2">O</div>
                      <div className="bg-gray-100 p-2">U</div>
                      <div className="bg-gray-100 p-2">T</div>
                      <div className="bg-gray-100 p-2">H</div>
                      <div className="bg-gray-100 p-2">A</div>
                      <div className="bg-gray-100 p-2">T</div>
                    </div>
                  </div>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                    <p className="mt-2 text-gray-700">Words found: THE, AND, IS, IN, IT, TO, YOU, THAT</p>
                  </details>
                </div>
                
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl border-l-4 border-amber-400">
                  <h3 className="text-xl font-semibold text-amber-800 mb-4">Worksheet 2: Fill in the Blanks</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="mb-2">I _____ going to the store. (am/is)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: am</p>
                      </details>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="mb-2">_____ cat is sleeping. (The/That)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: The</p>
                      </details>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="mb-2">I like _____ play outside. (to/in)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: to</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Word Recognition
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Which of these are first grade sight words?</h4>
                  
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">A) the, and, is, in, it, to, you, that</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Correct! All are first grade sight words</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">B) elephant, giraffe, zebra, lion</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Incorrect - These are animal names, not sight words</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">C) am, are, was, were</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Correct! These are common sight words</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Sentence Building
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Complete these sentences with sight words:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">_____ cat is sleeping. (The/That)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: The</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I _____ going to school. (am/is)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: am</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">_____ like to play. (I/You)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: I</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Word Categories
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Sort these words by category:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Articles: the, a, an</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are articles (words that come before nouns)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Pronouns: I, you, he, she, it</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are pronouns (words that replace nouns)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Prepositions: in, on, at, to</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are prepositions (words that show position)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Reading Practice
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Read this passage and answer questions:</h4>
                  
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <p className="text-lg mb-4">
                      The cat is in the house. It likes to sleep on the bed. I like to play with the cat. 
                      The cat and I are friends.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Where is the cat?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: The cat is in the house.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">What does the cat like to do?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: The cat likes to sleep on the bed.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">How many sight words can you find?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: the, is, in, the, it, to, on, the, I, to, with, the, and, are</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Using Sight Word Worksheets
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Start Simple</h4>
                    <p className="text-gray-600">Begin with basic word recognition worksheets before moving to sentences.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Practice Daily</h4>
                    <p className="text-gray-600">Complete 1-2 worksheets each day for consistent practice.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Make it Fun</h4>
                    <p className="text-gray-600">Use colorful markers and stickers to make worksheets engaging.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Read Together</h4>
                    <p className="text-gray-600">Point out sight words in books you read together.</p>
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
                <Link href="/grammar/sight-words-first-grade" className="block text-orange-600 hover:text-orange-800 font-medium">
                  First Grade Sight Words
                </Link>
                <Link href="/grammar/sight-words-second-grade" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Second Grade Sight Words
                </Link>
                <Link href="/grammar/sight-words-practice-2nd-grade" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Sight Words Practice
                </Link>
                <Link href="/grammar/phonics" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Phonics
                </Link>
                <Link href="/grammar/reading-comprehension" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Reading Comprehension
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Grade Level:</span>
                  <span className="text-gray-600">First Grade</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Worksheet Types:</span>
                  <span className="text-gray-600">4 main categories</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-orange-100">
                Worksheets make learning sight words fun and interactive!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 