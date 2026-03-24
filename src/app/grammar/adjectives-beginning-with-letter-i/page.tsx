"use client"

import Link from "next/link"
import { useState } from "react"

export default function AdjectivesBeginningWithLetterI() {
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives That Begin With Letter I
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover intelligent, inspiring, and incredible adjectives starting with the letter I
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
                Incredible Adjectives Beginning With I
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter I introduces us to a world of <Link href="/grammar/adjectives-starting-with-i-to-describe-a-person-positively" className="text-indigo-600 hover:text-indigo-800 font-medium">intelligent</Link> and <Link href="/grammar/adjectives-starting-with-i-to-describe-a-person-positively" className="text-indigo-600 hover:text-indigo-800 font-medium">inspiring</Link> adjectives that can enhance our language. 
                From &quot;incredible&quot; to &quot;innovative,&quot; these words help us express intelligence, describe impressive qualities, 
                and add imagination to our descriptions.
              </p>
            </div>

            {/* Popular I Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives Starting With I
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border-l-4 border-indigo-400">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Intellectual Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-indigo-800">Intelligent</p>
                      <p className="text-indigo-600 text-sm">Having great mental ability</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-indigo-800">Innovative</p>
                      <p className="text-indigo-600 text-sm">Creative and original</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-indigo-800">Inspiring</p>
                      <p className="text-indigo-600 text-sm">Motivating and uplifting</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-indigo-800">Insightful</p>
                      <p className="text-indigo-600 text-sm">Showing deep understanding</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Independent</p>
                      <p className="text-blue-600 text-sm">Self-reliant and autonomous</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Imaginative</p>
                      <p className="text-blue-600 text-sm">Creative and inventive</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Influential</p>
                      <p className="text-blue-600 text-sm">Having power to affect others</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Integrity</p>
                      <p className="text-blue-600 text-sm">Honest and principled</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More I Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                More Adjectives Starting With I
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-cyan-700 mb-3">Characteristics</h4>
                  <ul className="text-cyan-600 space-y-1 text-sm">
                    <li>Incredible</li>
                    <li>Important</li>
                    <li>Interesting</li>
                    <li>Intense</li>
                    <li>Immediate</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-teal-50 to-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-700 mb-3">Emotions</h4>
                  <ul className="text-teal-600 space-y-1 text-sm">
                    <li>Impressed</li>
                    <li>Inspired</li>
                    <li>Interested</li>
                    <li>Involved</li>
                    <li>Impulsive</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-3">Actions</h4>
                  <ul className="text-green-600 space-y-1 text-sm">
                    <li>Initiative</li>
                    <li>Improving</li>
                    <li>Including</li>
                    <li>Informing</li>
                    <li>Investigating</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: I-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct meaning for each I-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Intelligent&quot; when describing a person means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="intelligent"
                            value="A"
                            onChange={() => handleQuiz1Change('intelligent', 'A')}
                            className="text-indigo-600"
                          />
                          <span>A) Having great mental ability</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="intelligent"
                            value="B"
                            onChange={() => handleQuiz1Change('intelligent', 'B')}
                            className="text-indigo-600"
                          />
                          <span>B) Being very tall</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="intelligent"
                            value="C"
                            onChange={() => handleQuiz1Change('intelligent', 'C')}
                            className="text-indigo-600"
                          />
                          <span>C) Being very fast</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) Having great mental ability</p>
                          {quiz1Answers['intelligent'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['intelligent']}</p>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Innovative&quot; means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="innovative"
                            value="A"
                            onChange={() => handleQuiz1Change('innovative', 'A')}
                            className="text-indigo-600"
                          />
                          <span>A) Creative and original</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="innovative"
                            value="B"
                            onChange={() => handleQuiz1Change('innovative', 'B')}
                            className="text-indigo-600"
                          />
                          <span>B) Being very old</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="innovative"
                            value="C"
                            onChange={() => handleQuiz1Change('innovative', 'C')}
                            className="text-indigo-600"
                          />
                          <span>C) Being very expensive</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) Creative and original</p>
                          {quiz1Answers['innovative'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['innovative']}</p>
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
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate I-adjectives:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The _____ student always came up with creative solutions.</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="student"
                            value="A"
                            onChange={() => handleQuiz2Change('student', 'A')}
                            className="text-blue-600"
                          />
                          <span>A) intelligent</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="student"
                            value="B"
                            onChange={() => handleQuiz2Change('student', 'B')}
                            className="text-blue-600"
                          />
                          <span>B) innovative</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="student"
                            value="C"
                            onChange={() => handleQuiz2Change('student', 'C')}
                            className="text-blue-600"
                          />
                          <span>C) Both A and B</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: C) Both A and B</p>
                          {quiz2Answers['student'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz2Answers['student']}</p>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Her _____ personality made her a great leader.</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="personality"
                            value="A"
                            onChange={() => handleQuiz2Change('personality', 'A')}
                            className="text-blue-600"
                          />
                          <span>A) inspiring</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="personality"
                            value="B"
                            onChange={() => handleQuiz2Change('personality', 'B')}
                            className="text-blue-600"
                          />
                          <span>B) influential</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="personality"
                            value="C"
                            onChange={() => handleQuiz2Change('personality', 'C')}
                            className="text-blue-600"
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
                Interactive Quiz 3: I-Adjective Opposites
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-50 to-teal-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the opposite of each I-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Intelligent&quot; is the opposite of _____</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="intelligent_opposite"
                            value="A"
                            onChange={() => handleQuiz3Change('intelligent_opposite', 'A')}
                            className="text-cyan-600"
                          />
                          <span>A) unintelligent, foolish, ignorant</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="intelligent_opposite"
                            value="B"
                            onChange={() => handleQuiz3Change('intelligent_opposite', 'B')}
                            className="text-cyan-600"
                          />
                          <span>B) tall, short, wide</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="intelligent_opposite"
                            value="C"
                            onChange={() => handleQuiz3Change('intelligent_opposite', 'C')}
                            className="text-cyan-600"
                          />
                          <span>C) fast, slow, quick</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) unintelligent, foolish, ignorant</p>
                          {quiz3Answers['intelligent_opposite'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz3Answers['intelligent_opposite']}</p>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Innovative&quot; is the opposite of _____</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="innovative_opposite"
                            value="A"
                            onChange={() => handleQuiz3Change('innovative_opposite', 'A')}
                            className="text-cyan-600"
                          />
                          <span>A) uncreative, unimaginative, dull</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="innovative_opposite"
                            value="B"
                            onChange={() => handleQuiz3Change('innovative_opposite', 'B')}
                            className="text-cyan-600"
                          />
                          <span>B) old, new, young</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="innovative_opposite"
                            value="C"
                            onChange={() => handleQuiz3Change('innovative_opposite', 'C')}
                            className="text-cyan-600"
                          />
                          <span>C) big, small, large</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) uncreative, unimaginative, dull</p>
                          {quiz3Answers['innovative_opposite'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz3Answers['innovative_opposite']}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Controls */}
            <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-2xl p-6 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={checkAnswers}
                  className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Check Answers
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-600 transition-colors"
                >
                  Reset Quiz
                </button>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for I-Adjectives
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-teal-50 to-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Formation and Usage</h4>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Comparative Forms:</strong> Many I-adjectives form comparatives with &quot;more&quot;: more intelligent, more innovative, more inspiring</p>
                    <p><strong>Superlative Forms:</strong> Use &quot;most&quot; for superlatives: most intelligent, most innovative, most inspiring</p>
                    <p><strong>Prefixes:</strong> I-adjectives often use prefixes like &quot;in-&quot;, &quot;im-&quot;, &quot;il-&quot;, &quot;ir-&quot; to form opposites</p>
                    <p><strong>Position:</strong> I-adjectives can be used both attributively (before nouns) and predicatively (after linking verbs)</p>
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
                <details className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-lg">
                  <summary className="cursor-pointer text-indigo-700 font-semibold text-lg">
                    What makes I-adjectives unique in English?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    I-adjectives are unique because they often represent intellectual and innovative concepts. Many start with prefixes like &quot;in-&quot;, &quot;im-&quot;, &quot;il-&quot;, and &quot;ir-&quot;, making them easily identifiable. They frequently describe qualities related to intelligence, creativity, and inspiration.
                  </p>
                </details>
                
                <details className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg">
                  <summary className="cursor-pointer text-blue-700 font-semibold text-lg">
                    How do I use I-adjectives in sentences?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    I-adjectives can be used in two main ways: attributively (before nouns) like &quot;an intelligent student&quot; or predicatively (after linking verbs) like &quot;The student is intelligent.&quot; They can also be used comparatively and superlatively with &quot;more&quot; and &quot;most.&quot;
                  </p>
                </details>
                
                <details className="bg-gradient-to-r from-cyan-50 to-teal-50 p-4 rounded-lg">
                  <summary className="cursor-pointer text-cyan-700 font-semibold text-lg">
                    Can I-adjectives be used to describe objects?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    Yes! While many I-adjectives describe people and their qualities, they can also describe objects. For example, &quot;innovative design,&quot; &quot;intelligent system,&quot; or &quot;inspiring artwork.&quot; The key is choosing the right adjective for the context.
                  </p>
                </details>
                
                <details className="bg-gradient-to-r from-teal-50 to-green-50 p-4 rounded-lg">
                  <summary className="cursor-pointer text-teal-700 font-semibold text-lg">
                    What are some common mistakes with I-adjectives?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    Common mistakes include confusing similar-sounding words like &quot;intelligent&quot; vs &quot;intellectual,&quot; or using the wrong prefix for opposites. Also, remember that not all I-adjectives follow the same comparative/superlative patterns.
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
                <Link href="/grammar/adjectives-starting-with-vowels" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Adjectives Starting With Vowels
                </Link>
                <Link href="/grammar/adjectives-starting-with-i-to-describe-a-person-positively" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Adjectives Starting With I to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-e" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Adjectives That Begin With Letter E
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-m" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Adjectives That Begin With Letter M
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-o" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Adjectives That Begin With Letter O
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-y" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Adjectives That Begin With Letter Y
                </Link>
                <Link href="/grammar/positive-words-that-start-with-i-to-describe-a-person" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Positive Words That Start With I
                </Link>
                <Link href="/grammar/good-adjectives-that-start-with-i" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  Good Adjectives That Start With I
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Tips</h3>
              <div className="space-y-3 text-gray-700">
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-3 rounded-lg">
                  <p className="font-semibold text-indigo-700">Prefix Patterns</p>
                  <p className="text-sm">Many I-adjectives use &quot;in-&quot;, &quot;im-&quot;, &quot;il-&quot;, &quot;ir-&quot; prefixes</p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 rounded-lg">
                  <p className="font-semibold text-blue-700">Intellectual Focus</p>
                  <p className="text-sm">I-adjectives often describe mental and creative qualities</p>
                </div>
                <div className="bg-gradient-to-r from-cyan-50 to-teal-50 p-3 rounded-lg">
                  <p className="font-semibold text-cyan-700">Comparative Forms</p>
                  <p className="text-sm">Use &quot;more&quot; and &quot;most&quot; for most I-adjectives</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Practice Examples</h3>
              <div className="space-y-3 text-gray-700">
                <div className="bg-gradient-to-r from-teal-50 to-green-50 p-3 rounded-lg">
                  <p className="text-sm"><strong>Sentence:</strong> The <span className="text-teal-700 font-semibold">intelligent</span> and <span className="text-teal-700 font-semibold">innovative</span> student created an <span className="text-teal-700 font-semibold">inspiring</span> project.</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg">
                  <p className="text-sm"><strong>Sentence:</strong> Her <span className="text-green-700 font-semibold">independent</span> spirit and <span className="text-green-700 font-semibold">influential</span> personality made her a great leader.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
