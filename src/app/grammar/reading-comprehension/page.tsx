"use client"

import Link from "next/link"

export default function ReadingComprehensionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Reading Comprehension
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Master the art of understanding what you read with proven strategies and interactive practice
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
                What is Reading Comprehension?
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Reading comprehension is the ability to understand, interpret, and analyze written text. It&apos;s not just about reading words—it&apos;s about comprehending meaning, 
                making connections, and thinking critically about what you&apos;ve read. Strong reading comprehension skills are essential for academic success, 
                professional development, and lifelong learning.
              </p>
            </div>

            {/* Key Strategies Grid */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Key Reading Comprehension Strategies
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-3">1. Active Reading</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Definition</p>
                      <p className="text-indigo-600">Engage with the text by asking questions and making predictions</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Techniques</p>
                      <p className="text-indigo-600">Ask who, what, where, when, why, how</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Benefits</p>
                      <p className="text-indigo-600">Deeper understanding and better retention</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Example</p>
                      <p className="text-indigo-600">Predict what will happen next in a story</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-3">2. Context Clues</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Definition</p>
                      <p className="text-purple-600">Use surrounding words to understand unfamiliar vocabulary</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Types</p>
                      <p className="text-purple-600">Definition, example, synonym/antonym clues</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Benefits</p>
                      <p className="text-purple-600">Expand vocabulary without using a dictionary</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Example</p>
                      <p className="text-purple-600">Use surrounding sentences to guess word meaning</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-2xl font-semibold text-pink-700 mb-3">3. Summarization</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Definition</p>
                      <p className="text-pink-600">Condense main ideas and key details in your own words</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Focus Areas</p>
                      <p className="text-pink-600">Main idea, supporting details, key events</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Benefits</p>
                      <p className="text-pink-600">Reinforce understanding and improve retention</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Example</p>
                      <p className="text-pink-600">Write a brief summary after reading each chapter</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-3">4. Inference</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Definition</p>
                      <p className="text-indigo-600">Draw conclusions based on evidence and reasoning</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Skills</p>
                      <p className="text-indigo-600">Reading between the lines, understanding implied meaning</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Benefits</p>
                      <p className="text-indigo-600">Deeper comprehension and critical thinking</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Example</p>
                      <p className="text-indigo-600">Infer character feelings from their actions</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-3">5. Critical Thinking</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Definition</p>
                      <p className="text-purple-600">Evaluate author&apos;s purpose, bias, and argument quality</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Questions</p>
                      <p className="text-purple-600">What is the author&apos;s purpose? Is evidence reliable?</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Benefits</p>
                      <p className="text-purple-600">Better judgment and analytical skills</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">Example</p>
                      <p className="text-purple-600">Question the validity of claims in articles</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-2xl font-semibold text-pink-700 mb-3">6. Metacognition</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Definition</p>
                      <p className="text-pink-600">Monitor your own understanding and adjust strategies</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Self-awareness</p>
                      <p className="text-pink-600">Recognize when confused, choose strategies</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Benefits</p>
                      <p className="text-pink-600">More effective learning and problem-solving</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Example</p>
                      <p className="text-pink-600">Reread difficult passages when confused</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Reading Passage */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Reading Practice
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Reading Passage: The Great Migration</h4>
                  <p className="text-gray-700 mb-4">
                    Read the following passage carefully, then answer the interactive questions below. 
                    Practice using the comprehension strategies we discussed above.
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mb-6 border-l-4 border-indigo-500">
                    <p className="text-lg leading-relaxed text-gray-800">
                      Every year, millions of monarch butterflies embark on an incredible journey that spans thousands of miles. 
                      These delicate creatures, weighing less than a paperclip, travel from Canada and the northern United States 
                      to the warm forests of Mexico. The journey is so remarkable that it takes multiple generations to complete.
                    </p>
                    <br/>
                    <p className="text-lg leading-relaxed text-gray-800">
                      Scientists believe monarchs use a combination of the sun&apos;s position and Earth&apos;s magnetic field to navigate. 
                      They also rely on environmental cues like temperature and daylight changes to know when to begin their migration. 
                      The butterflies that arrive in Mexico are not the same ones that started the journey—they are the great-great-grandchildren 
                      of the original travelers.
                    </p>
                    <br/>
                    <p className="text-lg leading-relaxed text-gray-800">
                      In Mexico, the monarchs cluster together in massive groups, sometimes covering entire trees. This behavior helps 
                      them conserve heat and survive the winter months. When spring arrives, they begin the journey northward, laying eggs 
                      along the way. The new generation continues north, completing the cycle that their ancestors began.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. What is the main idea of this passage about monarch butterflies?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: <strong>Monarchs undertake a remarkable multi-generational migration journey</strong> - The passage focuses on the incredible migration journey that spans multiple generations.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. Based on the passage, what can you infer about why monarchs cluster together in Mexico?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: <strong>Clustering helps them survive the cold winter temperatures</strong> - The passage explicitly states that clustering helps them conserve heat and survive winter.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. How do monarchs navigate during their migration?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: <strong>They use the sun&apos;s position and Earth&apos;s magnetic field</strong> - The passage states they use the sun&apos;s position and Earth&apos;s magnetic field for navigation.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Comprehension Quiz */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Advanced Comprehension Skills Quiz
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Author&apos;s Purpose Analysis</h4>
                  <p className="text-gray-700 mb-4">
                    Read this passage: &quot;Recent studies show that reading for just 20 minutes daily can improve vocabulary by up to 20% 
                    and increase empathy levels significantly. Children who read regularly perform better in school and develop stronger 
                    critical thinking skills.&quot;
                  </p>
                  <p className="text-gray-700 mb-4 font-medium">
                    What is the author&apos;s primary purpose in this passage?
                  </p>
                  
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-gray-700">A) To entertain readers with interesting facts</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-gray-700 font-semibold">B) To persuade readers about the benefits of reading</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-gray-700">C) To inform readers about reading statistics</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-gray-700">D) To describe different types of reading materials</p>
                    </div>
                  </div>
                  
                  <details className="mt-4">
                    <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>B) To persuade readers about the benefits of reading</strong> - The passage presents evidence to convince readers that reading is beneficial.</p>
                  </details>
                </div>

                <div className="bg-gradient-to-r from-pink-50 to-indigo-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Critical Evaluation</h4>
                  <p className="text-gray-700 mb-4">
                    Consider this statement: &quot;All students who read daily get better grades.&quot;
                  </p>
                  <p className="text-gray-700 mb-4 font-medium">
                    What is the main flaw in this argument?
                  </p>
                  
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-gray-700">A) It doesn&apos;t specify what subjects they read about</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-gray-700 font-semibold">B) It assumes correlation equals causation without evidence</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-gray-700">C) It doesn&apos;t mention how long they should read</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-gray-700">D) It doesn&apos;t define what &quot;better grades&quot; means</p>
                    </div>
                  </div>
                  
                  <details className="mt-4">
                    <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>B) It assumes correlation equals causation without evidence</strong> - The statement assumes that reading causes better grades without proving causation.</p>
                  </details>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
                <li>• Reading comprehension improves with practice and consistent effort</li>
                <li>• Different texts require different reading strategies</li>
                <li>• Active reading involves questioning, predicting, and connecting ideas</li>
                <li>• Context clues can help you understand unfamiliar vocabulary</li>
                <li>• Summarizing helps reinforce understanding and retention</li>
              </ul>
            </div>

            {/* Reading Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Important Rules for Reading Comprehension
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Active Engagement</h4>
                    <p className="text-gray-600">Don&apos;t just read passively—ask questions, make predictions, and connect ideas as you read.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Context First</h4>
                    <p className="text-gray-600">Try to understand unfamiliar words from context before looking them up in a dictionary.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Regular Practice</h4>
                    <p className="text-gray-600">Reading comprehension skills improve with consistent practice and diverse reading materials.</p>
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
                <Link href="/grammar/main-idea" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Main Idea & Supporting Details
                </Link>
                <Link href="/grammar/context-clues" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Context Clues Strategies
                </Link>
                <Link href="/grammar/inference-skills" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Making Inferences
                </Link>
                <Link href="/grammar/figurative-language" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Figurative Language
                </Link>
                <Link href="/grammar/metaphor-examples" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Metaphors & Similes
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Strategies:</span>
                  <span className="text-gray-600">6 key methods</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Function:</span>
                  <span className="text-gray-600">Text understanding</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">All levels</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-indigo-100">
                Reading for just 20 minutes daily can significantly improve your comprehension skills and vocabulary!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 