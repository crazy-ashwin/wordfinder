"use client"

import Link from "next/link"

export default function SightWordsSecondGrade() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Second Grade Sight Words
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Master essential words that appear frequently in second-grade reading
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
                What Are Second Grade Sight Words?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Second grade sight words are common words that children should recognize instantly without 
                having to sound them out. These words appear frequently in books and texts, making them 
                essential for reading fluency and comprehension. By mastering these words, second graders 
                can read more smoothly and focus on understanding the meaning of what they&apos;re reading.
              </p>
            </div>

            {/* Sight Word Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Second Grade Sight Word Categories
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-3">High-Frequency Words</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">always</p>
                      <p className="text-emerald-600">Used in many sentences</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">around</p>
                      <p className="text-emerald-600">Preposition and adverb</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">because</p>
                      <p className="text-emerald-600">Connecting word</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="font-semibold text-emerald-800">before</p>
                      <p className="text-emerald-600">Time and position word</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-2xl font-semibold text-green-700 mb-3">Action Words</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">found</p>
                      <p className="text-green-600">Past tense of find</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">gave</p>
                      <p className="text-green-600">Past tense of give</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">goes</p>
                      <p className="text-green-600">Present tense of go</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">know</p>
                      <p className="text-green-600">To have information</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-lime-500 pl-6">
                  <h3 className="text-2xl font-semibold text-lime-700 mb-3">Descriptive Words</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-lime-50 p-4 rounded-lg">
                      <p className="font-semibold text-lime-800">many</p>
                      <p className="text-lime-600">Large number</p>
                    </div>
                    <div className="bg-lime-50 p-4 rounded-lg">
                      <p className="font-semibold text-lime-800">new</p>
                      <p className="text-lime-600">Not old</p>
                    </div>
                    <div className="bg-lime-50 p-4 rounded-lg">
                      <p className="font-semibold text-lime-800">old</p>
                      <p className="text-lime-600">Not new</p>
                    </div>
                    <div className="bg-lime-50 p-4 rounded-lg">
                      <p className="font-semibold text-lime-800">right</p>
                      <p className="text-lime-600">Correct or direction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Complete Sight Word List */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Complete Second Grade Sight Word List
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-emerald-800 mb-3">Set 1</h4>
                  <div className="space-y-1 text-sm">
                    <p>always</p>
                    <p>around</p>
                    <p>because</p>
                    <p>been</p>
                    <p>before</p>
                    <p>best</p>
                    <p>both</p>
                    <p>buy</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-lime-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-3">Set 2</h4>
                  <div className="space-y-1 text-sm">
                    <p>call</p>
                    <p>cold</p>
                    <p>does</p>
                    <p>don&apos;t</p>
                    <p>fast</p>
                    <p>first</p>
                    <p>found</p>
                    <p>gave</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-lime-50 to-emerald-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lime-800 mb-3">Set 3</h4>
                  <div className="space-y-1 text-sm">
                    <p>goes</p>
                    <p>green</p>
                    <p>its</p>
                    <p>made</p>
                    <p>many</p>
                    <p>new</p>
                    <p>off</p>
                    <p>old</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-emerald-800 mb-3">Set 4</h4>
                  <div className="space-y-1 text-sm">
                    <p>pull</p>
                    <p>read</p>
                    <p>right</p>
                    <p>sing</p>
                    <p>sit</p>
                    <p>sleep</p>
                    <p>tell</p>
                    <p>their</p>
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
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the sight word in each sentence:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I always brush my teeth before bed.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: always</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The cat goes around the house.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: goes, around</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I found my book because it was on the table.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: found, because</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Fill in the Blanks
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-lime-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Complete each sentence with a sight word:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I _____ brush my teeth. (always/around)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: always</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The dog _____ around the yard. (goes/gave)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: goes</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I _____ my book on the shelf. (found/know)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: found</p>
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
                <div className="bg-gradient-to-r from-lime-50 to-emerald-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Sort these words by category:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Action Words: goes, found, gave, know</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-lime-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are action words (verbs)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Descriptive Words: many, new, old, right</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-lime-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are descriptive words (adjectives)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">High-Frequency: always, around, because, before</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-lime-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are high-frequency words</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Sentence Building
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Create sentences using these sight words:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: always</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: I always eat breakfast before school.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: found</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: I found my lost toy under the bed.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: many</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-emerald-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: There are many books in the library.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Learning Second Grade Sight Words
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Practice Daily</h4>
                    <p className="text-gray-600">Review sight words for 10-15 minutes each day.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Use Flashcards</h4>
                    <p className="text-gray-600">Create flashcards and practice reading them quickly.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Read Books</h4>
                    <p className="text-gray-600">Point out sight words when reading together.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Write Sentences</h4>
                    <p className="text-gray-600">Use sight words in your own sentences.</p>
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
                <Link href="/grammar/sight-words-first-grade" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  First Grade Sight Words
                </Link>
                <Link href="/grammar/sight-words-worksheets-1st-grade" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Sight Words Worksheets
                </Link>
                <Link href="/grammar/sight-words-practice-2nd-grade" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Sight Words Practice
                </Link>
                <Link href="/grammar/phonics" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Phonics
                </Link>
                <Link href="/grammar/reading-comprehension" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Reading Comprehension
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Grade Level:</span>
                  <span className="text-gray-600">Second Grade</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Word Count:</span>
                  <span className="text-gray-600">46 words</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-emerald-100">
                Sight words help build reading fluency and confidence!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 