"use client"

import Link from "next/link"
import { useState } from "react"

export default function AdjectivesBeginningWithLetterM() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives That Begin With M
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
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-slate-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Magnificent Adjectives Starting With M
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter M introduces us to a world of magnificent and marvelous adjectives that can enhance our language. 
                From &quot;magnificent&quot; to &quot;marvelous,&quot; these words help us express wonder, describe impressive qualities, 
                and add meaning to our descriptions.
              </p>
            </div>

            {/* Popular M Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives Starting With M
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-slate-50 to-gray-50 p-6 rounded-xl border-l-4 border-slate-400">
                  <h3 className="text-2xl font-semibold text-slate-700 mb-4">Positive Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-slate-800">Magnificent</p>
                      <p className="text-slate-600 text-sm">Extremely beautiful and impressive</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-slate-800">Marvelous</p>
                      <p className="text-slate-600 text-sm">Wonderful and astonishing</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-slate-800">Meaningful</p>
                      <p className="text-slate-600 text-sm">Having significance and purpose</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-slate-800">Mature</p>
                      <p className="text-slate-600 text-sm">Fully developed and responsible</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-zinc-50 p-6 rounded-xl border-l-4 border-gray-400">
                  <h3 className="text-2xl font-semibold text-gray-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-gray-800">Modest</p>
                      <p className="text-gray-600 text-sm">Humble and unpretentious</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-gray-800">Motivated</p>
                      <p className="text-gray-600 text-sm">Driven and enthusiastic</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-gray-800">Mindful</p>
                      <p className="text-gray-600 text-sm">Conscious and aware</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-gray-800">Mysterious</p>
                      <p className="text-gray-600 text-sm">Difficult to understand</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: M-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct meaning for each M-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Magnificent&quot; means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="magnificent"
                            value="A"
                            onChange={() => handleQuiz1Change('magnificent', 'A')}
                            className="text-slate-600"
                          />
                          <span>A) Extremely beautiful and impressive</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="magnificent"
                            value="B"
                            onChange={() => handleQuiz1Change('magnificent', 'B')}
                            className="text-slate-600"
                          />
                          <span>B) Being very tall</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="magnificent"
                            value="C"
                            onChange={() => handleQuiz1Change('magnificent', 'C')}
                            className="text-slate-600"
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
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Controls */}
            <div className="bg-gradient-to-r from-slate-500 to-gray-500 text-white rounded-2xl p-6 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={checkAnswers}
                  className="px-8 py-3 bg-white text-slate-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Check Answers
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-slate-600 transition-colors"
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
                <Link href="/grammar/adjective-word-start-with-i" className="block text-slate-600 hover:text-slate-800 font-medium">
                  Adjectives Starting With I
                </Link>
                <Link href="/grammar/adjective-words-beginning-with-n" className="block text-slate-600 hover:text-slate-800 font-medium">
                  Adjectives Starting With N
                </Link>
                <Link href="/grammar/adjective-words-start-with-b" className="block text-slate-600 hover:text-slate-800 font-medium">
                  Adjectives Starting With B
                </Link>
                <Link href="/grammar/adjective-words-that-start-with-c" className="block text-slate-600 hover:text-slate-800 font-medium">
                  Adjectives Starting With C
                </Link>
                <Link href="/grammar/adjectives-beginning-with-g-to-describe-a-person" className="block text-slate-600 hover:text-slate-800 font-medium">
                  Adjectives Starting With G
                </Link>
                <Link href="/grammar/adjectives-beginning-with-letter-d" className="block text-slate-600 hover:text-slate-800 font-medium">
                  Adjectives Starting With D
                </Link>
                <Link href="/grammar/adjectives-beginning-with-letter-y" className="block text-slate-600 hover:text-slate-800 font-medium">
                  Adjectives Starting With Y
                </Link>
                <Link href="/grammar/adjectives-beginning-with-un" className="block text-slate-600 hover:text-slate-800 font-medium">
                  Adjectives Starting With Un
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
