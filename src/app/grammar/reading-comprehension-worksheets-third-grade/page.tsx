"use client"

import Link from "next/link"

export default function ReadingComprehensionWorksheetsThirdGrade() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Third Grade Reading Comprehension Worksheets
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Develop advanced reading skills with engaging comprehension activities for third graders
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
                What Are Third Grade Reading Comprehension Worksheets?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Third grade reading comprehension worksheets help students develop more advanced reading 
                skills including understanding main ideas, making inferences, identifying cause and effect, 
                and analyzing character traits. These worksheets prepare students for more complex reading 
                tasks and improve their overall literacy skills.
              </p>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Types of Third Grade Reading Skills
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-2xl font-semibold text-orange-700 mb-3">Main Idea and Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Main Idea</p>
                      <p className="text-orange-600">Identifying the central message</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Supporting Details</p>
                      <p className="text-orange-600">Finding evidence for main ideas</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Summary</p>
                      <p className="text-orange-600">Condensing key information</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-800">Theme</p>
                      <p className="text-orange-600">Understanding the author&apos;s message</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-amber-500 pl-6">
                  <h3 className="text-2xl font-semibold text-amber-700 mb-3">Inference and Analysis</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="font-semibold text-amber-800">Making Inferences</p>
                      <p className="text-amber-600">Drawing conclusions from text</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="font-semibold text-amber-800">Character Analysis</p>
                      <p className="text-amber-600">Understanding character traits</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="font-semibold text-amber-800">Cause and Effect</p>
                      <p className="text-amber-600">Identifying relationships</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="font-semibold text-amber-800">Compare and Contrast</p>
                      <p className="text-amber-600">Finding similarities and differences</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-2xl font-semibold text-yellow-700 mb-3">Vocabulary and Context</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800">Context Clues</p>
                      <p className="text-yellow-600">Using surrounding text for meaning</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800">Multiple Meaning Words</p>
                      <p className="text-yellow-600">Words with different meanings</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800">Prefixes and Suffixes</p>
                      <p className="text-yellow-600">Understanding word parts</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-800">Synonyms and Antonyms</p>
                      <p className="text-yellow-600">Words with similar/opposite meanings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Examples Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Sample Third Grade Activities
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl border-l-4 border-orange-400">
                  <p className="text-lg">
                    <span className="font-semibold text-orange-700">Main Idea Practice:</span> Read a passage about animals and identify the main idea and supporting details.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl border-l-4 border-amber-400">
                  <p className="text-lg">
                    <span className="font-semibold text-amber-700">Character Analysis:</span> Read a story and describe the main character&apos;s traits and motivations.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-50 to-lime-50 p-6 rounded-xl border-l-4 border-yellow-400">
                  <p className="text-lg">
                    <span className="font-semibold text-yellow-700">Cause and Effect:</span> Identify what happened and why in a story about a natural disaster.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-lime-50 to-green-50 p-6 rounded-xl border-l-4 border-lime-400">
                  <p className="text-lg">
                    <span className="font-semibold text-lime-700">Vocabulary Exercise:</span> Use context clues to understand unfamiliar words in a science passage.
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
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Read this passage and identify the main idea:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Bears are amazing animals that live in many parts of the world. They can be found in forests, mountains, and even near the ocean. Bears are excellent swimmers and can catch fish with their paws. They also have a great sense of smell and can find food from far away.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Bears are amazing animals with many abilities</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">What is the main idea of this passage?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-orange-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Bears are remarkable animals with various skills</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Character Analysis
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Read this story and analyze the character:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Sarah was always helping others. When her friend fell down, Sarah immediately ran over to help. She shared her lunch with classmates who forgot theirs. Sarah never complained about helping, even when it meant extra work for her.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Sarah is kind, helpful, and selfless</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">What character traits does Sarah show?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-amber-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Kindness, helpfulness, generosity, and selflessness</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Cause and Effect
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-50 to-lime-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify the cause and effect in this story:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The heavy rain caused the river to flood. Because of the flood, many people had to leave their homes. The flood also destroyed crops, so food became expensive.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Cause: heavy rain, Effects: river flooded, people left homes, crops destroyed, food became expensive</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">What was the main cause of the problems?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-yellow-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: The heavy rain</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Context Clues
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-lime-50 to-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Use context clues to understand the bold word:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The <strong>magnificent</strong> castle had golden towers and beautiful gardens. It was the most impressive building in the entire kingdom.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-lime-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Magnificent means grand, impressive, or beautiful</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The <strong>diligent</strong> student always completed her homework on time and studied hard for every test.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-lime-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Diligent means hardworking and careful</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Writing Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Third Grade Reading
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Look for Main Ideas</h4>
                    <p className="text-gray-600">Identify what the passage is mainly about.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Make Inferences</h4>
                    <p className="text-gray-600">Use clues in the text to draw conclusions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Use Context Clues</h4>
                    <p className="text-gray-600">Look at surrounding words to understand meaning.</p>
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
                <Link href="/grammar/reading-comprehension" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Reading Comprehension
                </Link>
                <Link href="/grammar/reading-comprehension-worksheets" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Reading Comprehension Worksheets
                </Link>
                <Link href="/grammar/vocabulary" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Vocabulary
                </Link>
                <Link href="/grammar/grammar-rules" className="block text-orange-600 hover:text-orange-800 font-medium">
                  Grammar Rules
                </Link>
                <Link href="/grammar/english-grammar" className="block text-orange-600 hover:text-orange-800 font-medium">
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
                  <span className="font-medium">Activities:</span>
                  <span className="text-gray-600">4 key activities</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-orange-100">
                Third graders should focus on understanding main ideas and making inferences!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 