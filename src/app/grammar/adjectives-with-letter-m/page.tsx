"use client"

import Link from "next/link"
import { useState } from "react"

export default function AdjectivesWithLetterM() {
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives With Letter M
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover magnificent, marvelous, and meaningful adjectives starting with the letter M
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purple-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Magnificent Adjectives With Letter M
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter M introduces us to a world of <Link href="/grammar/adjectives-start-with-m-to-describe-person" className="text-purple-600 hover:text-purple-800 font-medium">magnificent</Link> and <Link href="/grammar/adjectives-start-with-m-to-describe-person" className="text-purple-600 hover:text-purple-800 font-medium">marvelous</Link> adjectives that can enhance our language. 
                From &quot;magnificent&quot; to &quot;mysterious,&quot; these words help us express excellence, describe impressive qualities, 
                and add magic to our descriptions.
              </p>
            </div>

            {/* Popular M Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives Starting With M
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-4">Magnificent Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-purple-800">Magnificent</p>
                      <p className="text-purple-600 text-sm">Extremely beautiful and impressive</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-purple-800">Marvelous</p>
                      <p className="text-purple-600 text-sm">Wonderful and astonishing</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-purple-800">Mysterious</p>
                      <p className="text-purple-600 text-sm">Difficult to understand or explain</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-purple-800">Magical</p>
                      <p className="text-purple-600 text-sm">Having supernatural powers</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6 rounded-xl border-l-4 border-violet-400">
                  <h3 className="text-2xl font-semibold text-violet-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-violet-800">Motivated</p>
                      <p className="text-violet-600 text-sm">Driven and enthusiastic</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-violet-800">Mindful</p>
                      <p className="text-violet-600 text-sm">Conscious and aware</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-violet-800">Mature</p>
                      <p className="text-violet-600 text-sm">Fully developed and responsible</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-violet-800">Modest</p>
                      <p className="text-violet-600 text-sm">Humble and unpretentious</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More M Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                More Adjectives Starting With M
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-fuchsia-50 to-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-fuchsia-700 mb-3">Characteristics</h4>
                  <ul className="text-fuchsia-600 space-y-1 text-sm">
                    <li>Modern</li>
                    <li>Mighty</li>
                    <li>Mystical</li>
                    <li>Melodic</li>
                    <li>Magnetic</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-700 mb-3">Emotions</h4>
                  <ul className="text-pink-600 space-y-1 text-sm">
                    <li>Moved</li>
                    <li>Mesmerized</li>
                    <li>Mellow</li>
                    <li>Moody</li>
                    <li>Merry</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-rose-50 to-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-rose-700 mb-3">Actions</h4>
                  <ul className="text-rose-600 space-y-1 text-sm">
                    <li>Moving</li>
                    <li>Making</li>
                    <li>Managing</li>
                    <li>Mixing</li>
                    <li>Measuring</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: M-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct meaning for each M-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Magnificent&quot; when describing something means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="magnificent"
                            value="A"
                            onChange={() => handleQuiz1Change('magnificent', 'A')}
                            className="text-purple-600"
                          />
                          <span>A) Extremely beautiful and impressive</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="magnificent"
                            value="B"
                            onChange={() => handleQuiz1Change('magnificent', 'B')}
                            className="text-purple-600"
                          />
                          <span>B) Being very small</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="magnificent"
                            value="C"
                            onChange={() => handleQuiz1Change('magnificent', 'C')}
                            className="text-purple-600"
                          />
                          <span>C) Being very fast</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) Extremely beautiful and impressive</p>
                          {quiz1Answers['magnificent'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['magnificent']}</p>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Mysterious&quot; means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="mysterious"
                            value="A"
                            onChange={() => handleQuiz1Change('mysterious', 'A')}
                            className="text-purple-600"
                          />
                          <span>A) Difficult to understand or explain</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="mysterious"
                            value="B"
                            onChange={() => handleQuiz1Change('mysterious', 'B')}
                            className="text-purple-600"
                          />
                          <span>B) Being very loud</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="mysterious"
                            value="C"
                            onChange={() => handleQuiz1Change('mysterious', 'C')}
                            className="text-purple-600"
                          />
                          <span>C) Being very bright</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) Difficult to understand or explain</p>
                          {quiz1Answers['mysterious'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['mysterious']}</p>
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
                <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate M-adjectives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ sunset took our breath away.</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="sunset"
                            value="A"
                            onChange={() => handleQuiz2Change('sunset', 'A')}
                            className="text-violet-600"
                          />
                          <span>A) magnificent</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="sunset"
                            value="B"
                            onChange={() => handleQuiz2Change('sunset', 'B')}
                            className="text-violet-600"
                          />
                          <span>B) mysterious</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="sunset"
                            value="C"
                            onChange={() => handleQuiz2Change('sunset', 'C')}
                            className="text-violet-600"
                          />
                          <span>C) Both A and B</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: C) Both A and B</p>
                          {quiz2Answers['sunset'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz2Answers['sunset']}</p>
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
                            className="text-violet-600"
                          />
                          <span>A) magnetic</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="personality"
                            value="B"
                            onChange={() => handleQuiz2Change('personality', 'B')}
                            className="text-violet-600"
                          />
                          <span>B) marvelous</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="personality"
                            value="C"
                            onChange={() => handleQuiz2Change('personality', 'C')}
                            className="text-violet-600"
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
                Interactive Quiz 3: M-Adjective Opposites
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-fuchsia-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the opposite of each M-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Magnificent&quot; is the opposite of _____</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="magnificent_opposite"
                            value="A"
                            onChange={() => handleQuiz3Change('magnificent_opposite', 'A')}
                            className="text-fuchsia-600"
                          />
                          <span>A) ordinary, plain, unimpressive</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="magnificent_opposite"
                            value="B"
                            onChange={() => handleQuiz3Change('magnificent_opposite', 'B')}
                            className="text-fuchsia-600"
                          />
                          <span>B) big, small, large</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="magnificent_opposite"
                            value="C"
                            onChange={() => handleQuiz3Change('magnificent_opposite', 'C')}
                            className="text-fuchsia-600"
                          />
                          <span>C) fast, slow, quick</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) ordinary, plain, unimpressive</p>
                          {quiz3Answers['magnificent_opposite'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz3Answers['magnificent_opposite']}</p>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Mysterious&quot; is the opposite of _____</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="mysterious_opposite"
                            value="A"
                            onChange={() => handleQuiz3Change('mysterious_opposite', 'A')}
                            className="text-fuchsia-600"
                          />
                          <span>A) clear, obvious, transparent</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="mysterious_opposite"
                            value="B"
                            onChange={() => handleQuiz3Change('mysterious_opposite', 'B')}
                            className="text-fuchsia-600"
                          />
                          <span>B) old, new, young</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="mysterious_opposite"
                            value="C"
                            onChange={() => handleQuiz3Change('mysterious_opposite', 'C')}
                            className="text-fuchsia-600"
                          />
                          <span>C) hot, cold, warm</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) clear, obvious, transparent</p>
                          {quiz3Answers['mysterious_opposite'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz3Answers['mysterious_opposite']}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Controls */}
            <div className="bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-2xl p-6 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={checkAnswers}
                  className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Check Answers
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Reset Quiz
                </button>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for M-Adjectives
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Formation and Usage</h4>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Comparative Forms:</strong> Many M-adjectives form comparatives with &quot;more&quot;: more magnificent, more mysterious, more marvelous</p>
                    <p><strong>Superlative Forms:</strong> Use &quot;most&quot; for superlatives: most magnificent, most mysterious, most marvelous</p>
                    <p><strong>Prefixes:</strong> M-adjectives often use prefixes like &quot;mis-&quot;, &quot;mal-&quot;, &quot;mini-&quot; to form related words</p>
                    <p><strong>Position:</strong> M-adjectives can be used both attributively (before nouns) and predicatively (after linking verbs)</p>
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
                <details className="bg-gradient-to-r from-purple-50 to-violet-50 p-4 rounded-lg">
                  <summary className="cursor-pointer text-purple-700 font-semibold text-lg">
                    What makes M-adjectives special in English?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    M-adjectives are special because they often represent magnificent and marvelous concepts. Many start with prefixes like &quot;mis-&quot;, &quot;mal-&quot;, and &quot;mini-&quot;, making them easily identifiable. They frequently describe qualities related to beauty, mystery, and magic.
                  </p>
                </details>
                
                <details className="bg-gradient-to-r from-violet-50 to-fuchsia-50 p-4 rounded-lg">
                  <summary className="cursor-pointer text-violet-700 font-semibold text-lg">
                    How do I use M-adjectives in sentences?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    M-adjectives can be used in two main ways: attributively (before nouns) like &quot;a magnificent sunset&quot; or predicatively (after linking verbs) like &quot;The sunset is magnificent.&quot; They can also be used comparatively and superlatively with &quot;more&quot; and &quot;most.&quot;
                  </p>
                </details>
                
                <details className="bg-gradient-to-r from-fuchsia-50 to-pink-50 p-4 rounded-lg">
                  <summary className="cursor-pointer text-fuchsia-700 font-semibold text-lg">
                    Can M-adjectives be used to describe abstract concepts?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    Yes! While many M-adjectives describe physical objects and people, they can also describe abstract concepts. For example, &quot;mysterious behavior,&quot; &quot;magnificent achievement,&quot; or &quot;marvelous opportunity.&quot; The key is choosing the right adjective for the context.
                  </p>
                </details>
                
                <details className="bg-gradient-to-r from-pink-50 to-rose-50 p-4 rounded-lg">
                  <summary className="cursor-pointer text-pink-700 font-semibold text-lg">
                    What are some common mistakes with M-adjectives?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    Common mistakes include confusing similar-sounding words like &quot;magnificent&quot; vs &quot;marvelous,&quot; or using the wrong prefix for related words. Also, remember that not all M-adjectives follow the same comparative/superlative patterns.
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
                <Link href="/grammar/adjectives-starting-with-vowels" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Adjectives Starting With Vowels
                </Link>
                <Link href="/grammar/adjectives-start-with-m-to-describe-person" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Adjectives Start With M to Describe Person
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-m" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Adjectives That Begin With Letter M
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-n" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Adjectives That Begin With Letter N
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-p" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Adjectives That Begin With Letter P
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-t" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Adjectives That Begin With Letter T
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-v" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Adjectives That Begin With Letter V
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-y" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Adjectives That Begin With Letter Y
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-z" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Adjectives That Begin With Letter Z
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Tips</h3>
              <div className="space-y-3 text-gray-700">
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-3 rounded-lg">
                  <p className="font-semibold text-purple-700">Prefix Patterns</p>
                  <p className="text-sm">Many M-adjectives use &quot;mis-&quot;, &quot;mal-&quot;, &quot;mini-&quot; prefixes</p>
                </div>
                <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 p-3 rounded-lg">
                  <p className="font-semibold text-violet-700">Magnificent Focus</p>
                  <p className="text-sm">M-adjectives often describe beautiful and impressive qualities</p>
                </div>
                <div className="bg-gradient-to-r from-fuchsia-50 to-pink-50 p-3 rounded-lg">
                  <p className="font-semibold text-fuchsia-700">Comparative Forms</p>
                  <p className="text-sm">Use &quot;more&quot; and &quot;most&quot; for most M-adjectives</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Practice Examples</h3>
              <div className="space-y-3 text-gray-700">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-3 rounded-lg">
                  <p className="text-sm"><strong>Sentence:</strong> The <span className="text-pink-700 font-semibold">magnificent</span> and <span className="text-pink-700 font-semibold">mysterious</span> castle had a <span className="text-pink-700 font-semibold">magical</span> atmosphere.</p>
                </div>
                <div className="bg-gradient-to-r from-rose-50 to-red-50 p-3 rounded-lg">
                  <p className="text-sm"><strong>Sentence:</strong> Her <span className="text-rose-700 font-semibold">magnetic</span> personality and <span className="text-rose-700 font-semibold">marvelous</span> sense of humor made her popular.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
