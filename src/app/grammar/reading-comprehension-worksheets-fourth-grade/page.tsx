"use client"

import Link from "next/link"

export default function ReadingComprehensionFourthGrade() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Fourth Grade Reading Comprehension
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Advanced reading skills for confident and independent readers
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-teal-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What is Fourth Grade Reading Comprehension?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Fourth grade reading comprehension focuses on advanced skills like making inferences, 
                understanding figurative language, analyzing character development, and identifying themes. 
                Students learn to read longer passages, understand complex vocabulary, and think critically 
                about what they&apos;ve read. These skills prepare them for more challenging texts and academic success.
              </p>
            </div>

            {/* Advanced Reading Skills */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Advanced Reading Skills for Fourth Grade
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-2xl font-semibold text-teal-700 mb-3">Critical Thinking</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Making Inferences</p>
                      <p className="text-teal-600">Reading between the lines</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Drawing Conclusions</p>
                      <p className="text-teal-600">Using evidence to form opinions</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Analyzing Characters</p>
                      <p className="text-teal-600">Understanding motives and traits</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-semibold text-teal-800">Identifying Themes</p>
                      <p className="text-teal-600">Finding the main message</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-2xl font-semibold text-cyan-700 mb-3">Language Skills</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Figurative Language</p>
                      <p className="text-cyan-600">Metaphors, similes, idioms</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Context Clues</p>
                      <p className="text-cyan-600">Understanding new vocabulary</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Text Structure</p>
                      <p className="text-cyan-600">How information is organized</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="font-semibold text-cyan-800">Author&apos;s Purpose</p>
                      <p className="text-cyan-600">Why the author wrote this</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-3">Comprehension Strategies</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Summarizing</p>
                      <p className="text-blue-600">Retelling in your own words</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Predicting</p>
                      <p className="text-blue-600">Guessing what happens next</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Questioning</p>
                      <p className="text-blue-600">Asking questions while reading</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">Visualizing</p>
                      <p className="text-blue-600">Creating mental pictures</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sample Reading Passage */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Sample Reading Passage
              </h2>
              
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl border-l-4 border-teal-400">
                <h3 className="text-xl font-semibold text-teal-800 mb-4">The Wise Owl</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    In the heart of the ancient forest lived a wise old owl named Athena. Unlike other owls 
                    who hunted only at night, Athena was known for her unusual habit of staying awake during 
                    the day. The other forest animals often wondered why she chose to be different.
                  </p>
                  <p>
                    &quot;Why do you stay awake when the sun is shining?&quot; asked a curious rabbit one morning. 
                    &quot;All the other owls are sleeping.&quot;
                  </p>
                  <p>
                    Athena smiled knowingly. &quot;I see things that others miss,&quot; she replied. &quot;While they 
                    sleep, I watch the forest come alive. I see the deer grazing, the birds building nests, 
                    and the flowers opening to the sun.&quot;
                  </p>
                  <p>
                    The rabbit thought about this. &quot;But isn&apos;t it lonely being the only owl awake?&quot;
                  </p>
                  <p>
                    &quot;Sometimes,&quot; admitted Athena. &quot;But being different has taught me to see the world 
                    in a new way. I&apos;ve learned that wisdom comes from observing what others might miss.&quot;
                  </p>
                  <p>
                    From that day on, the forest animals looked at Athena with new respect. They understood 
                    that sometimes being different means seeing the world through wiser eyes.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Making Inferences
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Based on the story, what can you infer about Athena&apos;s character?</h4>
                  
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">A) She was afraid of the dark</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Incorrect - There&apos;s no evidence she was afraid of the dark</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">B) She was curious and observant</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Correct! She says she &quot;sees things that others miss&quot; and observes the forest</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">C) She was lazy and didn&apos;t want to hunt</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Incorrect - She chose to stay awake for observation, not laziness</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Theme Analysis
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">What is the main theme of this story?</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">A) Owls are wise animals</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Incorrect - This is a detail, not the main theme</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">B) Being different can lead to wisdom</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Correct! The story shows how being different helped Athena gain wisdom</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">C) Forest animals are curious</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-cyan-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Incorrect - This is a detail, not the main theme</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Character Analysis
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">How does the rabbit&apos;s attitude change throughout the story?</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">A) From curious to understanding</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Correct! The rabbit starts curious and ends with new respect for Athena</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">B) From afraid to brave</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Incorrect - The rabbit wasn&apos;t afraid, just curious</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">C) From angry to happy</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Incorrect - The rabbit wasn&apos;t angry, just curious</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Vocabulary & Context Clues
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Use context clues to understand these words:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">What does &quot;ancient&quot; mean in &quot;ancient forest&quot;?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Very old or from long ago</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">What does &quot;knowingly&quot; mean when Athena smiled knowingly?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: With understanding or wisdom</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">What does &quot;grazing&quot; mean when deer are grazing?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-teal-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Eating grass or plants</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Fourth Grade Reading
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Read for Meaning</h4>
                    <p className="text-gray-600">Focus on understanding the deeper meaning, not just the words.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Ask &quot;Why&quot; Questions</h4>
                    <p className="text-gray-600">Question character motives and author choices.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Look for Patterns</h4>
                    <p className="text-gray-600">Notice repeated themes, symbols, or character traits.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Use Context Clues</h4>
                    <p className="text-gray-600">Figure out unknown words from surrounding text.</p>
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
                <Link href="/grammar/reading-comprehension-worksheets-first-grade" className="block text-teal-600 hover:text-teal-800 font-medium">
                  First Grade Reading
                </Link>
                <Link href="/grammar/figurative-language" className="block text-teal-600 hover:text-teal-800 font-medium">
                  Figurative Language
                </Link>
                <Link href="/grammar/character-analysis" className="block text-teal-600 hover:text-teal-800 font-medium">
                  Character Analysis
                </Link>
                <Link href="/grammar/theme-analysis" className="block text-teal-600 hover:text-teal-800 font-medium">
                  Theme Analysis
                </Link>
                <Link href="/grammar/vocabulary-building" className="block text-teal-600 hover:text-teal-800 font-medium">
                  Vocabulary Building
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Grade Level:</span>
                  <span className="text-gray-600">Fourth Grade</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Reading Level:</span>
                  <span className="text-gray-600">Advanced</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Skills Focus:</span>
                  <span className="text-gray-600">Critical Thinking</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-teal-100">
                Fourth graders should read 20-30 minutes daily to build advanced comprehension skills!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 