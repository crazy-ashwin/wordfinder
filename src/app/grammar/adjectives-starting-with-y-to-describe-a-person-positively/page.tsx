"use client"

import Link from "next/link"
import { useState } from "react"

export default function AdjectivesStartingWithYToDescribePersonPositively() {
  const [quiz1Answers, setQuiz1Answers] = useState<{[key: string]: string}>({})
  const [showResults, setShowResults] = useState(false)

  const handleQuiz1Change = (question: string, answer: string) => {
    setQuiz1Answers(prev => ({ ...prev, [question]: answer }))
  }

  const checkAnswers = () => {
    setShowResults(true)
  }

  const resetQuiz = () => {
    setQuiz1Answers({})
    setShowResults(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Positive Adjectives Starting With Y
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover youthful, yellow, and yummy adjectives to describe people positively
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-yellow-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Youthful Adjectives Starting With Y for Positive People
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter Y introduces us to a world of youthful and yellow adjectives that perfectly describe people&apos;s positive qualities. 
                From &quot;youthful&quot; to &quot;yellow,&quot; these words help us express energy, describe colors, 
                and add vibrancy to our descriptions.
              </p>
            </div>

            {/* Popular Y Adjectives for Positive People */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Positive Personality Adjectives Starting With Y
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-400">
                  <h3 className="text-2xl font-semibold text-yellow-700 mb-4">Youthful Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-yellow-800">Youthful</p>
                      <p className="text-yellow-600 text-sm">Young and energetic</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-yellow-800">Yellow</p>
                      <p className="text-yellow-600 text-sm">Color of sunshine and happiness</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-yellow-800">Yummy</p>
                      <p className="text-yellow-600 text-sm">Delicious and tasty</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-yellow-800">Yearly</p>
                      <p className="text-yellow-600 text-sm">Happening every year</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border-l-4 border-amber-400">
                  <h3 className="text-2xl font-semibold text-amber-700 mb-4">Positive Character Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-amber-800">Young</p>
                      <p className="text-amber-600 text-sm">In early stage of life</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-amber-800">Yielding</p>
                      <p className="text-amber-600 text-sm">Flexible and accommodating</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-amber-800">Yearning</p>
                      <p className="text-amber-600 text-sm">Having strong desire</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-amber-800">Yummy</p>
                      <p className="text-amber-600 text-sm">Very pleasant and enjoyable</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Positive Y-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct meaning for each positive Y-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Youthful&quot; when describing a person means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="youthful"
                            value="A"
                            onChange={() => handleQuiz1Change('youthful', 'A')}
                            className="text-yellow-600"
                          />
                          <span>A) Young and energetic</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="youthful"
                            value="B"
                            onChange={() => handleQuiz1Change('youthful', 'B')}
                            className="text-yellow-600"
                          />
                          <span>B) Being very old</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="youthful"
                            value="C"
                            onChange={() => handleQuiz1Change('youthful', 'C')}
                            className="text-yellow-600"
                          />
                          <span>C) Being very slow</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) Young and energetic</p>
                          {quiz1Answers['youthful'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['youthful']}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Controls */}
            <div className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-2xl p-6 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={checkAnswers}
                  className="px-8 py-3 bg-white text-yellow-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Check Answers
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-yellow-600 transition-colors"
                >
                  Reset Quiz
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/adjectives-starting-with-vowels" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Adjectives Starting With Vowels
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-e" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Adjectives That Begin With Letter E
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-m" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Adjectives That Begin With Letter M
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-o" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Adjectives That Begin With Letter O
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-y" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Adjectives That Begin With Letter Y
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-the-letter-d" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Adjectives That Begin With Letter D
                </Link>
                <Link href="/grammar/adjectives-that-start-with-b-to-describe-a-person" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Adjectives That Start With B to Describe Person
                </Link>
                <Link href="/grammar/adjectives-that-start-with-c-to-describe-a-person-positively" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Adjectives That Start With C to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-that-start-with-ch" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Adjectives That Start With Ch
                </Link>
                <Link href="/grammar/adjectives-that-start-with-d-to-describe-a-person" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Adjectives That Start With D to Describe Person
                </Link>
                <Link href="/grammar/adjectives-that-start-with-g-to-describe-a-person" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Adjectives That Start With G to Describe Person
                </Link>
                <Link href="/grammar/adjectives-that-start-with-in" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Adjectives That Start With In
                </Link>
                <Link href="/grammar/adjectives-that-start-with-vowels" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Adjectives That Start With Vowels
                </Link>
                <Link href="/grammar/adjectives-that-start-with-y-to-describe-a-person" className="block text-yellow-600 hover:text-yellow-800 font-medium">
                  Adjectives That Start With Y to Describe Person
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
