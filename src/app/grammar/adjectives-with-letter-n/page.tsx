"use client"

import Link from "next/link"
import { useState } from "react"

export default function AdjectivesWithLetterN() {
  const [quiz1Answers, setQuiz1Answers] = useState<{[key: string]: string}>({})
  const [quiz2Answers, setQuiz2Answers] = useState<{[key: string]: string}>({})
  const [quiz3Answers, setQuiz3Answers] = useState<{[key: string]: string}>({})
  const [showResults, setShowResults] = useState(false)

  const handleQuiz1Change = (question: string, answer: string) => {
    setQuiz1Answers(prev => ({ ...prev, [question]: answer }))
  }

  const handleQuiz2Change = (question: string, answer: string) => {
    setQuiz2Answers(prev => ({ ...prev, [question]: answer }))
  }

  const handleQuiz3Change = (question: string, answer: string) => {
    setQuiz3Answers(prev => ({ ...prev, [question]: answer }))
  }

  const checkAnswers = () => {
    setShowResults(true)
  }

  const resetQuiz = () => {
    setQuiz1Answers({})
    setQuiz2Answers({})
    setQuiz3Answers({})
    setShowResults(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives With Letter N
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover natural, nurturing, and noble adjectives starting with the letter N
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
                Natural Adjectives With Letter N
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter N introduces us to a world of <Link href="/grammar/adjective-words-beginning-with-n" className="text-emerald-600 hover:text-emerald-800 font-medium">natural</Link> and <Link href="/grammar/adjective-words-beginning-with-n" className="text-emerald-600 hover:text-emerald-800 font-medium">nurturing</Link> adjectives that can enhance our language. 
                From &quot;natural&quot; to &quot;noble,&quot; these words help us express nature, describe nurturing qualities, 
                and add nobility to our descriptions.
              </p>
            </div>

            {/* Popular N Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives Starting With N
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border-l-4 border-emerald-400">
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-4">Natural Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Natural</p>
                      <p className="text-emerald-600 text-sm">Existing in nature, not artificial</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Nurturing</p>
                      <p className="text-emerald-600 text-sm">Caring and supportive</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Noble</p>
                      <p className="text-emerald-600 text-sm">Having high moral qualities</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-emerald-800">Neat</p>
                      <p className="text-emerald-600 text-sm">Clean and organized</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border-l-4 border-teal-400">
                  <h3 className="text-2xl font-semibold text-teal-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-teal-800">Nice</p>
                      <p className="text-teal-600 text-sm">Pleasant and agreeable</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-teal-800">Nimble</p>
                      <p className="text-teal-600 text-sm">Quick and light in movement</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-teal-800">Notable</p>
                      <p className="text-teal-600 text-sm">Worthy of attention</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-teal-800">Nurturing</p>
                      <p className="text-teal-600 text-sm">Providing care and support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More N Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                More Adjectives Starting With N
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-cyan-700 mb-3">Characteristics</h4>
                  <ul className="text-cyan-600 space-y-1 text-sm">
                    <li>New</li>
                    <li>Normal</li>
                    <li>Numerous</li>
                    <li>Narrow</li>
                    <li>Near</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-3">Emotions</h4>
                  <ul className="text-blue-600 space-y-1 text-sm">
                    <li>Nervous</li>
                    <li>Nostalgic</li>
                    <li>Nurtured</li>
                    <li>Needed</li>
                    <li>Nourished</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-700 mb-3">Actions</h4>
                  <ul className="text-indigo-600 space-y-1 text-sm">
                    <li>Nurturing</li>
                    <li>Navigating</li>
                    <li>Noticing</li>
                    <li>Naming</li>
                    <li>Nourishing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: N-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct meaning for each N-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Natural&quot; when describing something means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="natural"
                            value="A"
                            onChange={() => handleQuiz1Change('natural', 'A')}
                            className="text-emerald-600"
                          />
                          <span>A) Existing in nature, not artificial</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="natural"
                            value="B"
                            onChange={() => handleQuiz1Change('natural', 'B')}
                            className="text-emerald-600"
                          />
                          <span>B) Being very expensive</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="natural"
                            value="C"
                            onChange={() => handleQuiz1Change('natural', 'C')}
                            className="text-emerald-600"
                          />
                          <span>C) Being very fast</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) Existing in nature, not artificial</p>
                          {quiz1Answers['natural'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['natural']}</p>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Nurturing&quot; means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="nurturing"
                            value="A"
                            onChange={() => handleQuiz1Change('nurturing', 'A')}
                            className="text-emerald-600"
                          />
                          <span>A) Caring and supportive</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="nurturing"
                            value="B"
                            onChange={() => handleQuiz1Change('nurturing', 'B')}
                            className="text-emerald-600"
                          />
                          <span>B) Being very loud</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="nurturing"
                            value="C"
                            onChange={() => handleQuiz1Change('nurturing', 'C')}
                            className="text-emerald-600"
                          />
                          <span>C) Being very bright</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) Caring and supportive</p>
                          {quiz1Answers['nurturing'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['nurturing']}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Complete the Sentences
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate N-adjectives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ teacher always encouraged her students.</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="teacher"
                            value="A"
                            onChange={() => handleQuiz2Change('teacher', 'A')}
                            className="text-teal-600"
                          />
                          <span>A) nurturing</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="teacher"
                            value="B"
                            onChange={() => handleQuiz2Change('teacher', 'B')}
                            className="text-teal-600"
                          />
                          <span>B) noble</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="teacher"
                            value="C"
                            onChange={() => handleQuiz2Change('teacher', 'C')}
                            className="text-teal-600"
                          />
                          <span>C) Both A and B</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: C) Both A and B</p>
                          {quiz2Answers['teacher'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz2Answers['teacher']}</p>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Her _____ approach to problem-solving impressed everyone.</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="approach"
                            value="A"
                            onChange={() => handleQuiz2Change('approach', 'A')}
                            className="text-teal-600"
                          />
                          <span>A) natural</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="approach"
                            value="B"
                            onChange={() => handleQuiz2Change('approach', 'B')}
                            className="text-teal-600"
                          />
                          <span>B) neat</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="approach"
                            value="C"
                            onChange={() => handleQuiz2Change('approach', 'C')}
                            className="text-teal-600"
                          />
                          <span>C) Both A and B</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: C) Both A and B</p>
                          {quiz2Answers['approach'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz2Answers['approach']}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: N-Adjective Opposites
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the opposite of each N-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Natural&quot; is the opposite of _____</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="natural_opposite"
                            value="A"
                            onChange={() => handleQuiz3Change('natural_opposite', 'A')}
                            className="text-cyan-600"
                          />
                          <span>A) artificial, synthetic, man-made</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="natural_opposite"
                            value="B"
                            onChange={() => handleQuiz3Change('natural_opposite', 'B')}
                            className="text-cyan-600"
                          />
                          <span>B) big, small, large</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="natural_opposite"
                            value="C"
                            onChange={() => handleQuiz3Change('natural_opposite', 'C')}
                            className="text-cyan-600"
                          />
                          <span>C) fast, slow, quick</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) artificial, synthetic, man-made</p>
                          {quiz3Answers['natural_opposite'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz3Answers['natural_opposite']}</p>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Nice&quot; is the opposite of _____</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="nice_opposite"
                            value="A"
                            onChange={() => handleQuiz3Change('nice_opposite', 'A')}
                            className="text-cyan-600"
                          />
                          <span>A) mean, nasty, unpleasant</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="nice_opposite"
                            value="B"
                            onChange={() => handleQuiz3Change('nice_opposite', 'B')}
                            className="text-cyan-600"
                          />
                          <span>B) old, new, young</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="nice_opposite"
                            value="C"
                            onChange={() => handleQuiz3Change('nice_opposite', 'C')}
                            className="text-cyan-600"
                          />
                          <span>C) hot, cold, warm</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) mean, nasty, unpleasant</p>
                          {quiz3Answers['nice_opposite'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz3Answers['nice_opposite']}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Controls */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl p-6 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={checkAnswers}
                  className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Check Answers
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-emerald-600 transition-colors"
                >
                  Reset Quiz
                </button>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for N-Adjectives
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Formation and Usage</h4>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Comparative Forms:</strong> Many N-adjectives form comparatives with &quot;more&quot;: more natural, more nurturing, more noble</p>
                    <p><strong>Superlative Forms:</strong> Use &quot;most&quot; for superlatives: most natural, most nurturing, most noble</p>
                    <p><strong>Prefixes:</strong> N-adjectives often use prefixes like &quot;non-&quot;, &quot;un-&quot;, &quot;in-&quot; to form opposites</p>
                    <p><strong>Position:</strong> N-adjectives can be used both attributively (before nouns) and predicatively (after linking verbs)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                <details className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg">
                  <summary className="cursor-pointer text-emerald-700 font-semibold text-lg">
                    What makes N-adjectives unique in English?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    N-adjectives are unique because they often represent natural and nurturing concepts. Many start with prefixes like &quot;non-&quot;, &quot;un-&quot;, and &quot;in-&quot;, making them easily identifiable. They frequently describe qualities related to nature, care, and nobility.
                  </p>
                </details>
                
                <details className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg">
                  <summary className="cursor-pointer text-teal-700 font-semibold text-lg">
                    How do I use N-adjectives in sentences?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    N-adjectives can be used in two main ways: attributively (before nouns) like &quot;a natural environment&quot; or predicatively (after linking verbs) like &quot;The environment is natural.&quot; They can also be used comparatively and superlatively with &quot;more&quot; and &quot;most.&quot;
                  </p>
                </details>
                
                <details className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-lg">
                  <summary className="cursor-pointer text-cyan-700 font-semibold text-lg">
                    Can N-adjectives be used to describe abstract concepts?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    Yes! While many N-adjectives describe physical objects and people, they can also describe abstract concepts. For example, &quot;natural talent,&quot; &quot;nurturing environment,&quot; or &quot;noble cause.&quot; The key is choosing the right adjective for the context.
                  </p>
                </details>
                
                <details className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                  <summary className="cursor-pointer text-blue-700 font-semibold text-lg">
                    What are some common mistakes with N-adjectives?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    Common mistakes include confusing similar-sounding words like &quot;natural&quot; vs &quot;nurturing,&quot; or using the wrong prefix for opposites. Also, remember that not all N-adjectives follow the same comparative/superlative patterns.
                  </p>
                </details>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjectives-starting-with-vowels" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives Starting With Vowels
                </Link>
                <Link href="/grammar/adjective-words-beginning-with-n" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjective Words Beginning With N
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-m" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives That Begin With Letter M
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-p" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives That Begin With Letter P
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-t" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives That Begin With Letter T
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-v" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives That Begin With Letter V
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-y" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives That Begin With Letter Y
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-z" className="block text-emerald-600 hover:text-emerald-800 font-medium">
                  Adjectives That Begin With Letter Z
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Tips</h3>
              <div className="space-y-3 text-gray-700">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-3 rounded-lg">
                  <p className="font-semibold text-emerald-700">Prefix Patterns</p>
                  <p className="text-sm">Many N-adjectives use &quot;non-&quot;, &quot;un-&quot;, &quot;in-&quot; prefixes</p>
                </div>
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-3 rounded-lg">
                  <p className="font-semibold text-teal-700">Natural Focus</p>
                  <p className="text-sm">N-adjectives often describe natural and nurturing qualities</p>
                </div>
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-3 rounded-lg">
                  <p className="font-semibold text-cyan-700">Comparative Forms</p>
                  <p className="text-sm">Use &quot;more&quot; and &quot;most&quot; for most N-adjectives</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Practice Examples</h3>
              <div className="space-y-3 text-gray-700">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg">
                  <p className="text-sm"><strong>Sentence:</strong> The <span className="text-blue-700 font-semibold">natural</span> and <span className="text-blue-700 font-semibold">nurturing</span> environment had a <span className="text-blue-700 font-semibold">noble</span> purpose.</p>
                </div>
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-3 rounded-lg">
                  <p className="text-sm"><strong>Sentence:</strong> Her <span className="text-indigo-700 font-semibold">nice</span> personality and <span className="text-indigo-700 font-semibold">neat</span> appearance made her approachable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
