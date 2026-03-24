"use client"

import Link from "next/link"
import { useState } from "react"

export default function AdjectivesStartingWithVowels() {
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
    <div className="min-h-screen bg-gradient-to-br from-rainbow-50 via-rose-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 via-orange-600 via-yellow-600 via-green-600 via-blue-600 via-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives That Start With Vowels
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover amazing, excellent, and incredible adjectives starting with A, E, I, O, and U
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Amazing Adjectives Starting With Vowels
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Vowels (A, E, I, O, U) introduce us to a world of amazing and excellent adjectives that can enhance our language. 
                From &quot;amazing&quot; to &quot;excellent,&quot; these words help us express wonder, describe impressive qualities, 
                and add vibrancy to our descriptions.
              </p>
            </div>

            {/* Popular Vowel Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives Starting With Vowels
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border-l-4 border-red-400">
                  <h3 className="text-2xl font-semibold text-red-700 mb-4">A & E Adjectives</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-red-800">Amazing</p>
                      <p className="text-red-600 text-sm">Wonderful and astonishing</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-red-800">Excellent</p>
                      <p className="text-red-600 text-sm">Outstanding and superior</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-red-800">Energetic</p>
                      <p className="text-red-600 text-sm">Full of life and vigor</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-red-800">Adventurous</p>
                      <p className="text-red-600 text-sm">Bold and daring</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">I, O & U Adjectives</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Incredible</p>
                      <p className="text-blue-600 text-sm">Amazing and extraordinary</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Outstanding</p>
                      <p className="text-blue-600 text-sm">Exceptionally good</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Unique</p>
                      <p className="text-blue-600 text-sm">One of a kind</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">Inspiring</p>
                      <p className="text-blue-600 text-sm">Motivating and uplifting</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Vowel Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct meaning for each vowel adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Amazing&quot; means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="amazing"
                            value="A"
                            onChange={() => handleQuiz1Change('amazing', 'A')}
                            className="text-red-600"
                          />
                          <span>A) Wonderful and astonishing</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="amazing"
                            value="B"
                            onChange={() => handleQuiz1Change('amazing', 'B')}
                            className="text-red-600"
                          />
                          <span>B) Being very tall</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="amazing"
                            value="C"
                            onChange={() => handleQuiz1Change('amazing', 'C')}
                            className="text-red-600"
                          />
                          <span>C) Being very fast</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) Wonderful and astonishing</p>
                          {quiz1Answers['amazing'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['amazing']}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Controls */}
            <div className="bg-gradient-to-r from-red-500 to-purple-500 text-white rounded-2xl p-6 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={checkAnswers}
                  className="px-8 py-3 bg-white text-red-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Check Answers
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-red-600 transition-colors"
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
                <Link href="/grammar/adjectives-starting-with-y-to-describe-a-person-positively" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives Starting With Y to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-e" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives That Begin With Letter E
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-m" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives That Begin With Letter M
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-o" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives That Begin With Letter O
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-y" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives That Begin With Letter Y
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-the-letter-d" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives That Begin With Letter D
                </Link>
                <Link href="/grammar/adjectives-that-start-with-b-to-describe-a-person" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives That Start With B to Describe Person
                </Link>
                <Link href="/grammar/adjectives-that-start-with-c-to-describe-a-person-positively" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives That Start With C to Describe Person Positively
                </Link>
                <Link href="/grammar/adjectives-that-start-with-ch" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives That Start With Ch
                </Link>
                <Link href="/grammar/adjectives-that-start-with-d-to-describe-a-person" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives That Start With D to Describe Person
                </Link>
                <Link href="/grammar/adjectives-that-start-with-g-to-describe-a-person" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives That Start With G to Describe Person
                </Link>
                <Link href="/grammar/adjectives-that-start-with-in" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives That Start With In
                </Link>
                <Link href="/grammar/adjectives-that-start-with-vowels" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives That Start With Vowels
                </Link>
                <Link href="/grammar/adjectives-that-start-with-y-to-describe-a-person" className="block text-red-600 hover:text-red-800 font-medium">
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
