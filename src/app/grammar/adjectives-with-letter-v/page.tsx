"use client"

import Link from "next/link"
import { useState } from "react"

export default function AdjectivesWithLetterV() {
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
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives With Letter V
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover valuable, vibrant, and victorious adjectives starting with the letter V
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-violet-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Valuable Adjectives With Letter V
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter V introduces us to a world of <Link href="/grammar/adjectives-starting-with-v-to-describe-a-person-positively" className="text-violet-600 hover:text-violet-800 font-medium">valuable</Link> and <Link href="/grammar/adjectives-starting-with-v-to-describe-a-person-positively" className="text-violet-600 hover:text-violet-800 font-medium">vibrant</Link> adjectives that can enhance our language. 
                From &quot;valuable&quot; to &quot;victorious,&quot; these words help us express worth, describe vibrant qualities, 
                and add victory to our descriptions.
              </p>
            </div>

            {/* Popular V Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives Starting With V
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-xl border-l-4 border-violet-400">
                  <h3 className="text-2xl font-semibold text-violet-700 mb-4">Valuable Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-violet-800">Valuable</p>
                      <p className="text-violet-600 text-sm">Worth a lot of money or importance</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-violet-800">Vibrant</p>
                      <p className="text-violet-600 text-sm">Full of energy and life</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-violet-800">Victorious</p>
                      <p className="text-violet-600 text-sm">Having won a victory</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-violet-800">Virtuous</p>
                      <p className="text-violet-600 text-sm">Having high moral standards</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-purple-800">Versatile</p>
                      <p className="text-purple-600 text-sm">Able to adapt to many functions</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-purple-800">Visionary</p>
                      <p className="text-purple-600 text-sm">Thinking about the future</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-purple-800">Vivacious</p>
                      <p className="text-purple-600 text-sm">Attractively lively and animated</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-purple-800">Valid</p>
                      <p className="text-purple-600 text-sm">Legally or officially acceptable</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More V Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                More Adjectives Starting With V
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-fuchsia-50 to-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-fuchsia-700 mb-3">Characteristics</h4>
                  <ul className="text-fuchsia-600 space-y-1 text-sm">
                    <li>Vast</li>
                    <li>Visible</li>
                    <li>Vital</li>
                    <li>Various</li>
                    <li>Vivid</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-700 mb-3">Emotions</h4>
                  <ul className="text-pink-600 space-y-1 text-sm">
                    <li>Vexed</li>
                    <li>Vindicated</li>
                    <li>Vulnerable</li>
                    <li>Vigilant</li>
                    <li>Venerable</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-rose-50 to-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-rose-700 mb-3">Actions</h4>
                  <ul className="text-rose-600 space-y-1 text-sm">
                    <li>Venturing</li>
                    <li>Valuing</li>
                    <li>Verifying</li>
                    <li>Venturing</li>
                    <li>Vibrating</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: V-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct meaning for each V-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Valuable&quot; when describing something means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="valuable"
                            value="A"
                            onChange={() => handleQuiz1Change('valuable', 'A')}
                            className="text-violet-600"
                          />
                          <span>A) Worth a lot of money or importance</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="valuable"
                            value="B"
                            onChange={() => handleQuiz1Change('valuable', 'B')}
                            className="text-violet-600"
                          />
                          <span>B) Being very small</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="valuable"
                            value="C"
                            onChange={() => handleQuiz1Change('valuable', 'C')}
                            className="text-violet-600"
                          />
                          <span>C) Being very fast</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) Worth a lot of money or importance</p>
                          {quiz1Answers['valuable'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['valuable']}</p>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Vibrant&quot; means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="vibrant"
                            value="A"
                            onChange={() => handleQuiz1Change('vibrant', 'A')}
                            className="text-violet-600"
                          />
                          <span>A) Full of energy and life</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="vibrant"
                            value="B"
                            onChange={() => handleQuiz1Change('vibrant', 'B')}
                            className="text-violet-600"
                          />
                          <span>B) Being very quiet</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="vibrant"
                            value="C"
                            onChange={() => handleQuiz1Change('vibrant', 'C')}
                            className="text-violet-600"
                          />
                          <span>C) Being very dark</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) Full of energy and life</p>
                          {quiz1Answers['vibrant'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['vibrant']}</p>
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
                <div className="bg-gradient-to-r from-purple-50 to-fuchsia-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate V-adjectives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ leader inspired everyone with her vision.</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="leader"
                            value="A"
                            onChange={() => handleQuiz2Change('leader', 'A')}
                            className="text-purple-600"
                          />
                          <span>A) visionary</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="leader"
                            value="B"
                            onChange={() => handleQuiz2Change('leader', 'B')}
                            className="text-purple-600"
                          />
                          <span>B) valuable</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="leader"
                            value="C"
                            onChange={() => handleQuiz2Change('leader', 'C')}
                            className="text-purple-600"
                          />
                          <span>C) Both A and B</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: C) Both A and B</p>
                          {quiz2Answers['leader'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz2Answers['leader']}</p>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Her _____ personality attracted many friends.</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="personality"
                            value="A"
                            onChange={() => handleQuiz2Change('personality', 'A')}
                            className="text-purple-600"
                          />
                          <span>A) vivacious</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="personality"
                            value="B"
                            onChange={() => handleQuiz2Change('personality', 'B')}
                            className="text-purple-600"
                          />
                          <span>B) vibrant</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="personality"
                            value="C"
                            onChange={() => handleQuiz2Change('personality', 'C')}
                            className="text-purple-600"
                          />
                          <span>C) Both A and B</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: C) Both A and B</p>
                          {quiz2Answers['personality'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz2Answers['personality']}</p>
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
                Interactive Quiz 3: V-Adjective Opposites
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-fuchsia-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the opposite of each V-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Valuable&quot; is the opposite of _____</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="valuable_opposite"
                            value="A"
                            onChange={() => handleQuiz3Change('valuable_opposite', 'A')}
                            className="text-fuchsia-600"
                          />
                          <span>A) worthless, useless, unimportant</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="valuable_opposite"
                            value="B"
                            onChange={() => handleQuiz3Change('valuable_opposite', 'B')}
                            className="text-fuchsia-600"
                          />
                          <span>B) big, small, large</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="valuable_opposite"
                            value="C"
                            onChange={() => handleQuiz3Change('valuable_opposite', 'C')}
                            className="text-fuchsia-600"
                          />
                          <span>C) fast, slow, quick</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) worthless, useless, unimportant</p>
                          {quiz3Answers['valuable_opposite'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz3Answers['valuable_opposite']}</p>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Vibrant&quot; is the opposite of _____</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="vibrant_opposite"
                            value="A"
                            onChange={() => handleQuiz3Change('vibrant_opposite', 'A')}
                            className="text-fuchsia-600"
                          />
                          <span>A) dull, lifeless, boring</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="vibrant_opposite"
                            value="B"
                            onChange={() => handleQuiz3Change('vibrant_opposite', 'B')}
                            className="text-fuchsia-600"
                          />
                          <span>B) old, new, young</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="vibrant_opposite"
                            value="C"
                            onChange={() => handleQuiz3Change('vibrant_opposite', 'C')}
                            className="text-fuchsia-600"
                          />
                          <span>C) hot, cold, warm</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) dull, lifeless, boring</p>
                          {quiz3Answers['vibrant_opposite'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz3Answers['vibrant_opposite']}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Controls */}
            <div className="bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-2xl p-6 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={checkAnswers}
                  className="px-8 py-3 bg-white text-violet-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Check Answers
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-violet-600 transition-colors"
                >
                  Reset Quiz
                </button>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for V-Adjectives
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Formation and Usage</h4>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Comparative Forms:</strong> Many V-adjectives form comparatives with &quot;more&quot;: more valuable, more vibrant, more victorious</p>
                    <p><strong>Superlative Forms:</strong> Use &quot;most&quot; for superlatives: most valuable, most vibrant, most victorious</p>
                    <p><strong>Prefixes:</strong> V-adjectives often use prefixes like &quot;ver-&quot;, &quot;vice-&quot;, &quot;vice-&quot; to form related words</p>
                    <p><strong>Position:</strong> V-adjectives can be used both attributively (before nouns) and predicatively (after linking verbs)</p>
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
                <details className="bg-gradient-to-r from-violet-50 to-purple-50 p-4 rounded-lg">
                  <summary className="cursor-pointer text-violet-700 font-semibold text-lg">
                    What makes V-adjectives unique in English?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    V-adjectives are unique because they often represent valuable and vibrant concepts. Many start with prefixes like &quot;ver-&quot;, &quot;vice-&quot;, and &quot;vice-&quot;, making them easily identifiable. They frequently describe qualities related to value, vitality, and victory.
                  </p>
                </details>
                
                <details className="bg-gradient-to-r from-purple-50 to-fuchsia-50 p-4 rounded-lg">
                  <summary className="cursor-pointer text-purple-700 font-semibold text-lg">
                    How do I use V-adjectives in sentences?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    V-adjectives can be used in two main ways: attributively (before nouns) like &quot;a valuable lesson&quot; or predicatively (after linking verbs) like &quot;The lesson is valuable.&quot; They can also be used comparatively and superlatively with &quot;more&quot; and &quot;most.&quot;
                  </p>
                </details>
                
                <details className="bg-gradient-to-r from-fuchsia-50 to-pink-50 p-4 rounded-lg">
                  <summary className="cursor-pointer text-fuchsia-700 font-semibold text-lg">
                    Can V-adjectives be used to describe abstract concepts?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    Yes! While many V-adjectives describe physical objects and people, they can also describe abstract concepts. For example, &quot;valuable advice,&quot; &quot;vibrant culture,&quot; or &quot;victorious moment.&quot; The key is choosing the right adjective for the context.
                  </p>
                </details>
                
                <details className="bg-gradient-to-r from-pink-50 to-rose-50 p-4 rounded-lg">
                  <summary className="cursor-pointer text-pink-700 font-semibold text-lg">
                    What are some common mistakes with V-adjectives?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    Common mistakes include confusing similar-sounding words like &quot;valuable&quot; vs &quot;vibrant,&quot; or using the wrong prefix for related words. Also, remember that not all V-adjectives follow the same comparative/superlative patterns.
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
                <Link href="/grammar/adjectives-starting-with-vowels" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Adjectives Starting With Vowels
                </Link>
                <Link href="/grammar/adjectives-starting-with-v-to-describe-a-person-positively" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Adjectives Starting With V to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-m" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Adjectives That Begin With Letter M
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-n" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Adjectives That Begin With Letter N
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-p" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Adjectives That Begin With Letter P
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-t" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Adjectives That Begin With Letter T
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-y" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Adjectives That Begin With Letter Y
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-z" className="block text-violet-600 hover:text-violet-800 font-medium">
                  Adjectives That Begin With Letter Z
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Tips</h3>
              <div className="space-y-3 text-gray-700">
                <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-3 rounded-lg">
                  <p className="font-semibold text-violet-700">Prefix Patterns</p>
                  <p className="text-sm">Many V-adjectives use &quot;ver-&quot;, &quot;vice-&quot;, &quot;vice-&quot; prefixes</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-fuchsia-50 p-3 rounded-lg">
                  <p className="font-semibold text-purple-700">Valuable Focus</p>
                  <p className="text-sm">V-adjectives often describe valuable and vibrant qualities</p>
                </div>
                <div className="bg-gradient-to-r from-fuchsia-50 to-pink-50 p-3 rounded-lg">
                  <p className="font-semibold text-fuchsia-700">Comparative Forms</p>
                  <p className="text-sm">Use &quot;more&quot; and &quot;most&quot; for most V-adjectives</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Practice Examples</h3>
              <div className="space-y-3 text-gray-700">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-3 rounded-lg">
                  <p className="text-sm"><strong>Sentence:</strong> The <span className="text-pink-700 font-semibold">valuable</span> and <span className="text-pink-700 font-semibold">vibrant</span> leader had a <span className="text-pink-700 font-semibold">visionary</span> approach.</p>
                </div>
                <div className="bg-gradient-to-r from-rose-50 to-red-50 p-3 rounded-lg">
                  <p className="text-sm"><strong>Sentence:</strong> Her <span className="text-rose-700 font-semibold">vivacious</span> personality and <span className="text-rose-700 font-semibold">versatile</span> skills made her popular.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
