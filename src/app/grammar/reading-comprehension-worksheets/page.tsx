"use client"

import Link from "next/link"

export default function ReadingComprehensionWorksheets() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Reading Comprehension Worksheets
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Master reading skills with comprehensive comprehension activities for all ages
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are Reading Comprehension Worksheets?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Reading comprehension worksheets are educational tools designed to help students understand, 
                analyze, and interpret written text. They include passages followed by questions that test 
                various reading skills such as main idea, inference, vocabulary, and critical thinking. 
                These worksheets are essential for developing strong literacy skills at all grade levels.
              </p>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Types of Reading Comprehension Skills
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-2xl font-semibold text-cyan-700 mb-3">Basic Comprehension</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Main Idea</p>
                      <p className="text-cyan-600">Identifying the central message</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Supporting Details</p>
                      <p className="text-cyan-600">Finding evidence for main ideas</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Summary</p>
                      <p className="text-cyan-600">Condensing key information</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Sequencing</p>
                      <p className="text-cyan-600">Putting events in order</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-3">Advanced Analysis</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Making Inferences</p>
                      <p className="text-blue-600">Drawing conclusions from text</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Character Analysis</p>
                      <p className="text-blue-600">Understanding character traits</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Author&apos;s Purpose</p>
                      <p className="text-blue-600">Identifying why the author wrote</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Point of View</p>
                      <p className="text-blue-600">Understanding perspective</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-3">Critical Thinking</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Cause and Effect</p>
                      <p className="text-indigo-600">Identifying relationships</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Compare and Contrast</p>
                      <p className="text-indigo-600">Finding similarities and differences</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Fact vs Opinion</p>
                      <p className="text-indigo-600">Distinguishing between facts and opinions</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Predicting Outcomes</p>
                      <p className="text-indigo-600">Making educated guesses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Examples Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Sample Reading Comprehension Activities
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl border-l-4 border-cyan-400">
                  <p className="text-lg">
                    <span className="font-semibold text-cyan-700">Main Idea Practice:</span> Read a passage about ecosystems and identify the main idea and three supporting details.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <p className="text-lg">
                    <span className="font-semibold text-blue-700">Inference Activity:</span> Read a story about a character&apos;s actions and infer their feelings and motivations.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border-l-4 border-indigo-400">
                  <p className="text-lg">
                    <span className="font-semibold text-indigo-700">Vocabulary Exercise:</span> Use context clues to determine the meaning of unfamiliar words in a science passage.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <p className="text-lg">
                    <span className="font-semibold text-purple-700">Critical Thinking:</span> Read two passages about different viewpoints and identify facts vs opinions.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Main Idea Practice
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Read this passage and identify the main idea:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The ocean is home to many different types of animals. Fish swim in schools, whales migrate long distances, and coral reefs provide shelter for countless creatures. The ocean also helps regulate Earth&apos;s climate by absorbing heat from the sun.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: The ocean is important for many animals and Earth&apos;s climate</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">What is the main idea of this passage?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: The ocean supports diverse life and helps regulate climate</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Making Inferences
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Read this passage and make an inference:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Maria looked at her watch and started running. She had been reading in the library and lost track of time. The school bus would leave in five minutes, and she was still two blocks away.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Maria was worried about missing the school bus</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">What can you infer about Maria&apos;s feelings?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: She was anxious and in a hurry</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Context Clues
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Use context clues to understand the bold word:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The <strong>magnificent</strong> palace had golden towers and beautiful gardens. It was the most impressive building in the entire kingdom.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Magnificent means grand, impressive, or beautiful</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The <strong>diligent</strong> student always completed her homework on time and studied hard for every test.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Diligent means hardworking and careful</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Reading Strategies
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify the reading strategy being used:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. Looking at the title and pictures before reading</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Previewing or predicting</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. Stopping to think about what you just read</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Monitoring comprehension</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. Going back to reread a confusing part</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Clarifying or fixing up</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Writing Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Improving Reading Comprehension
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Preview the Text</h4>
                    <p className="text-gray-600">Look at titles, headings, and pictures before reading.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Ask Questions</h4>
                    <p className="text-gray-600">Think about what you want to learn from the text.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Monitor Understanding</h4>
                    <p className="text-gray-600">Stop and think about what you&apos;re reading.</p>
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
                <Link href="/grammar/reading-comprehension-worksheets-kindergarten-a" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Kindergarten Worksheets
                </Link>
                <Link href="/grammar/reading-comprehension-worksheets-third-grade" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Third Grade Worksheets
                </Link>
                <Link href="/grammar/vocabulary" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Vocabulary
                </Link>
                <Link href="/grammar/grammar-rules" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  Grammar Rules
                </Link>
                <Link href="/grammar/english-grammar" className="block text-cyan-600 hover:text-cyan-800 font-medium">
                  English Grammar
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Skill Areas:</span>
                  <span className="text-gray-600">3 main areas</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Strategies:</span>
                  <span className="text-gray-600">6 key strategies</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">All Levels</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-cyan-100">
                Good readers ask questions and make connections while they read!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 