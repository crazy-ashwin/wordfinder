"use client"

import Link from "next/link"

export default function ReadingSkills() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Reading Skills
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Develop essential reading skills including comprehension, fluency, and critical thinking
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
                What Are Reading Skills?
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Reading skills are the abilities needed to understand, interpret, and analyze written text effectively. These skills include <Link href="/grammar/reading-comprehension" className="text-blue-600 hover:text-blue-800 font-semibold">reading comprehension</Link>, fluency, vocabulary recognition, and critical thinking. Strong reading skills are fundamental for academic success, personal growth, and lifelong learning. They help readers extract meaning from text, make connections, and develop deeper understanding of various subjects.
              </p>
            </div>

            {/* Core Reading Skills */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Core Reading Skills
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-3">1. Phonemic Awareness</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Definition</p>
                      <p className="text-blue-600">Understanding individual sounds in words</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Examples</p>
                      <p className="text-blue-600">cat = /k/ /a/ /t/</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Importance</p>
                      <p className="text-blue-600">Foundation for phonics and spelling</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Activity</p>
                      <p className="text-blue-600">Sound blending and segmenting games</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-sky-500 pl-6">
                  <h3 className="text-2xl font-semibold text-sky-700 mb-3">2. Phonics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-sky-50 p-4 rounded-lg">
                      <p className="font-semibold text-sky-800">Definition</p>
                      <p className="text-sky-600">Relationship between letters and sounds</p>
                    </div>
                    <div className="bg-sky-50 p-4 rounded-lg">
                      <p className="font-semibold text-sky-800">Examples</p>
                      <p className="text-sky-600">sh = /sh/, th = /th/, ch = /ch/</p>
                    </div>
                    <div className="bg-sky-50 p-4 rounded-lg">
                      <p className="font-semibold text-sky-800">Importance</p>
                      <p className="text-sky-600">Decoding unfamiliar words</p>
                    </div>
                    <div className="bg-sky-50 p-4 rounded-lg">
                      <p className="font-semibold text-sky-800">Activity</p>
                      <p className="text-sky-600">Word building with letter cards</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-2xl font-semibold text-cyan-700 mb-3">3. Fluency</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Definition</p>
                      <p className="text-cyan-600">Reading with speed, accuracy, and expression</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Examples</p>
                      <p className="text-cyan-600">Smooth reading, proper pacing</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Importance</p>
                      <p className="text-cyan-600">Improves comprehension and enjoyment</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Activity</p>
                      <p className="text-cyan-600">Repeated reading practice</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-3">4. Comprehension</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Definition</p>
                      <p className="text-blue-600">Understanding and interpreting text meaning</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Examples</p>
                      <p className="text-blue-600">Main idea, details, inference</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Importance</p>
                      <p className="text-blue-600">Purpose of reading</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Activity</p>
                      <p className="text-blue-600">Question-answer discussions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reading Strategies */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Effective Reading Strategies
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">Before Reading</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <span className="font-semibold text-blue-800">Preview:</span>
                      <span className="text-blue-600 ml-2">Look at title, pictures, headings</span>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <span className="font-semibold text-blue-800">Predict:</span>
                      <span className="text-blue-600 ml-2">Guess what the text will be about</span>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <span className="font-semibold text-blue-800">Activate:</span>
                      <span className="text-blue-600 ml-2">Think about what you already know</span>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <span className="font-semibold text-blue-800">Set purpose:</span>
                      <span className="text-blue-600 ml-2">Decide why you&apos;re reading</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-sky-700 mb-4">During Reading</h3>
                  <div className="space-y-3">
                    <div className="bg-sky-50 p-3 rounded-lg">
                      <span className="font-semibold text-sky-800">Visualize:</span>
                      <span className="text-sky-600 ml-2">Create mental pictures</span>
                    </div>
                    <div className="bg-sky-50 p-3 rounded-lg">
                      <span className="font-semibold text-sky-800">Question:</span>
                      <span className="text-sky-600 ml-2">Ask yourself questions</span>
                    </div>
                    <div className="bg-sky-50 p-3 rounded-lg">
                      <span className="font-semibold text-sky-800">Connect:</span>
                      <span className="text-sky-600 ml-2">Link to personal experience</span>
                    </div>
                    <div className="bg-sky-50 p-3 rounded-lg">
                      <span className="font-semibold text-sky-800">Monitor:</span>
                      <span className="text-sky-600 ml-2">Check understanding</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Reading Comprehension
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-sky-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Read this passage and answer the questions:</h4>
                  
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <p className="text-gray-700 italic">
                      &quot;The little mouse was very hungry. She looked around her house but found no food. Then she remembered seeing some cheese in the kitchen. The mouse carefully tiptoed to the kitchen, trying not to make any noise. She found the cheese on the table and quickly took a small piece.&quot;
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. Why was the mouse tiptoeing?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: To avoid making noise</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. Where did the mouse find the cheese?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: On the table in the kitchen</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Phonics Practice
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-sky-50 to-cyan-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify the beginning sounds:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. What sound does &quot;ship&quot; begin with?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-sky-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: /sh/ (sh sound)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. What sound does &quot;think&quot; begin with?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-sky-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: /th/ (th sound)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. What sound does &quot;chair&quot; begin with?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-sky-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: /ch/ (ch sound)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Reading Strategies
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the best reading strategy for each situation:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. You&apos;re reading a difficult science article. What should you do first?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Preview the text and activate prior knowledge</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. You&apos;re reading a story and don&apos;t understand a character&apos;s motivation. What should you do?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Ask questions and make inferences</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. You&apos;re reading a description of a place. What should you do?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Visualize and create mental pictures</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Reading Skills Challenge
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-sky-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Practice these reading skills:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. Make a prediction: &quot;The weather forecast predicted heavy rain for the weekend...&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: The weekend activities might be cancelled due to rain.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. Make a connection: &quot;The character felt nervous about starting a new school...&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: I felt the same way when I started middle school.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. Ask a question: &quot;The mystery box contained an ancient artifact...&quot;</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: What kind of artifact was it? Who put it there?</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>• Reading skills develop gradually and require consistent practice</li>
                <li>• Good readers use multiple strategies simultaneously while reading</li>
                <li>• Reading aloud helps develop fluency and expression</li>
                <li>• Comprehension improves when readers actively engage with the text</li>
                <li>• Different types of text require different reading strategies</li>
              </ul>
            </div>

            {/* Reading Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Improving Reading Skills
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Read Daily</h4>
                    <p className="text-gray-600">Make reading a daily habit to improve skills over time.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Use Strategies</h4>
                    <p className="text-gray-600">Practice different reading strategies with various types of text.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Discuss What You Read</h4>
                    <p className="text-gray-600">Talking about books helps deepen understanding and retention.</p>
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
                <Link href="/grammar/reading-comprehension" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Reading Comprehension
                </Link>
                <Link href="/grammar/vocabulary-for-kids" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Vocabulary for Kids
                </Link>
                <Link href="/grammar/word-building" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Word Building
                </Link>
                <Link href="/grammar/parts-of-speech" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Parts of Speech
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
                  <span className="font-medium">Skills:</span>
                  <span className="text-gray-600">4 core areas</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Function:</span>
                  <span className="text-gray-600">Improve reading ability</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">All levels</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-sky-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-blue-100">
                Reading for just 20 minutes a day can significantly improve vocabulary and comprehension skills!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
