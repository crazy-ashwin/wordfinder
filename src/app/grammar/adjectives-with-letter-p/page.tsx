"use client"

import Link from "next/link"
import { useState } from "react"

export default function AdjectivesWithLetterP() {
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Adjectives With Letter P
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover positive, powerful, and perfect adjectives starting with the letter P
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-pink-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Perfect Adjectives With Letter P
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The letter P introduces us to a world of <Link href="/grammar/positive-adjectives-beginning-with-p" className="text-pink-600 hover:text-pink-800 font-medium">positive</Link> and <Link href="/grammar/positive-adjectives-beginning-with-p" className="text-pink-600 hover:text-pink-800 font-medium">powerful</Link> adjectives that can enhance our language. 
                From &quot;perfect&quot; to &quot;peaceful,&quot; these words help us express excellence, describe impressive qualities, 
                and add positivity to our descriptions.
              </p>
            </div>

            {/* Popular P Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Adjectives Starting With P
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl border-l-4 border-pink-400">
                  <h3 className="text-2xl font-semibold text-pink-700 mb-4">Positive Qualities</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-pink-800">Perfect</p>
                      <p className="text-pink-600 text-sm">Having all required qualities</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-pink-800">Powerful</p>
                      <p className="text-pink-600 text-sm">Having great strength or influence</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-pink-800">Peaceful</p>
                      <p className="text-pink-600 text-sm">Free from disturbance</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-pink-800">Patient</p>
                      <p className="text-pink-600 text-sm">Able to wait calmly</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-red-50 p-6 rounded-xl border-l-4 border-rose-400">
                  <h3 className="text-2xl font-semibold text-rose-700 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-rose-800">Passionate</p>
                      <p className="text-rose-600 text-sm">Having strong feelings</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-rose-800">Polite</p>
                      <p className="text-rose-600 text-sm">Showing good manners</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-rose-800">Professional</p>
                      <p className="text-rose-600 text-sm">Relating to a profession</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-rose-800">Playful</p>
                      <p className="text-rose-600 text-sm">Full of fun and energy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More P Adjectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                More Adjectives Starting With P
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-700 mb-3">Characteristics</h4>
                  <ul className="text-red-600 space-y-1 text-sm">
                    <li>Precious</li>
                    <li>Proud</li>
                    <li>Punctual</li>
                    <li>Pure</li>
                    <li>Pleasant</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-700 mb-3">Emotions</h4>
                  <ul className="text-orange-600 space-y-1 text-sm">
                    <li>Pleased</li>
                    <li>Proud</li>
                    <li>Peaceful</li>
                    <li>Passionate</li>
                    <li>Playful</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-700 mb-3">Actions</h4>
                  <ul className="text-amber-600 space-y-1 text-sm">
                    <li>Planning</li>
                    <li>Preparing</li>
                    <li>Protecting</li>
                    <li>Providing</li>
                    <li>Promoting</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: P-Adjective Definitions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Choose the correct meaning for each P-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Perfect&quot; when describing something means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="perfect"
                            value="A"
                            onChange={() => handleQuiz1Change('perfect', 'A')}
                            className="text-pink-600"
                          />
                          <span>A) Having all required qualities</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="perfect"
                            value="B"
                            onChange={() => handleQuiz1Change('perfect', 'B')}
                            className="text-pink-600"
                          />
                          <span>B) Being very expensive</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="perfect"
                            value="C"
                            onChange={() => handleQuiz1Change('perfect', 'C')}
                            className="text-pink-600"
                          />
                          <span>C) Being very fast</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) Having all required qualities</p>
                          {quiz1Answers['perfect'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['perfect']}</p>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Powerful&quot; means:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="powerful"
                            value="A"
                            onChange={() => handleQuiz1Change('powerful', 'A')}
                            className="text-pink-600"
                          />
                          <span>A) Having great strength or influence</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="powerful"
                            value="B"
                            onChange={() => handleQuiz1Change('powerful', 'B')}
                            className="text-pink-600"
                          />
                          <span>B) Being very small</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="powerful"
                            value="C"
                            onChange={() => handleQuiz1Change('powerful', 'C')}
                            className="text-pink-600"
                          />
                          <span>C) Being very slow</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) Having great strength or influence</p>
                          {quiz1Answers['powerful'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz1Answers['powerful']}</p>
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
                <div className="bg-gradient-to-r from-rose-50 to-red-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Fill in the blanks with appropriate P-adjectives:</h4>
                  
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
                            className="text-rose-600"
                          />
                          <span>A) powerful</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="leader"
                            value="B"
                            onChange={() => handleQuiz2Change('leader', 'B')}
                            className="text-rose-600"
                          />
                          <span>B) passionate</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="leader"
                            value="C"
                            onChange={() => handleQuiz2Change('leader', 'C')}
                            className="text-rose-600"
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
                      <p className="mb-2">Her _____ personality made her a great friend.</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="personality"
                            value="A"
                            onChange={() => handleQuiz2Change('personality', 'A')}
                            className="text-rose-600"
                          />
                          <span>A) pleasant</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="personality"
                            value="B"
                            onChange={() => handleQuiz2Change('personality', 'B')}
                            className="text-rose-600"
                          />
                          <span>B) playful</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="personality"
                            value="C"
                            onChange={() => handleQuiz2Change('personality', 'C')}
                            className="text-rose-600"
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
                Interactive Quiz 3: P-Adjective Opposites
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Find the opposite of each P-adjective:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Perfect&quot; is the opposite of _____</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="perfect_opposite"
                            value="A"
                            onChange={() => handleQuiz3Change('perfect_opposite', 'A')}
                            className="text-red-600"
                          />
                          <span>A) imperfect, flawed, defective</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="perfect_opposite"
                            value="B"
                            onChange={() => handleQuiz3Change('perfect_opposite', 'B')}
                            className="text-red-600"
                          />
                          <span>B) big, small, large</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="perfect_opposite"
                            value="C"
                            onChange={() => handleQuiz3Change('perfect_opposite', 'C')}
                            className="text-red-600"
                          />
                          <span>C) fast, slow, quick</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) imperfect, flawed, defective</p>
                          {quiz3Answers['perfect_opposite'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz3Answers['perfect_opposite']}</p>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Peaceful&quot; is the opposite of _____</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="peaceful_opposite"
                            value="A"
                            onChange={() => handleQuiz3Change('peaceful_opposite', 'A')}
                            className="text-red-600"
                          />
                          <span>A) chaotic, noisy, disturbed</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="peaceful_opposite"
                            value="B"
                            onChange={() => handleQuiz3Change('peaceful_opposite', 'B')}
                            className="text-red-600"
                          />
                          <span>B) old, new, young</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="peaceful_opposite"
                            value="C"
                            onChange={() => handleQuiz3Change('peaceful_opposite', 'C')}
                            className="text-red-600"
                          />
                          <span>C) hot, cold, warm</span>
                        </label>
                      </div>
                      {showResults && (
                        <div className="mt-2 p-2 rounded bg-green-50 border border-green-200">
                          <p className="text-green-800 font-semibold">Correct Answer: A) chaotic, noisy, disturbed</p>
                          {quiz3Answers['peaceful_opposite'] && (
                            <p className="text-green-700 mt-1">Your Answer: {quiz3Answers['peaceful_opposite']}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Controls */}
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl p-6 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={checkAnswers}
                  className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Check Answers
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-pink-600 transition-colors"
                >
                  Reset Quiz
                </button>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Grammar Rules for P-Adjectives
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Formation and Usage</h4>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Comparative Forms:</strong> Many P-adjectives form comparatives with &quot;more&quot;: more perfect, more powerful, more peaceful</p>
                    <p><strong>Superlative Forms:</strong> Use &quot;most&quot; for superlatives: most perfect, most powerful, most peaceful</p>
                    <p><strong>Prefixes:</strong> P-adjectives often use prefixes like &quot;pre-&quot;, &quot;pro-&quot;, &quot;post-&quot; to form related words</p>
                    <p><strong>Position:</strong> P-adjectives can be used both attributively (before nouns) and predicatively (after linking verbs)</p>
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
                <details className="bg-gradient-to-r from-pink-50 to-rose-50 p-4 rounded-lg">
                  <summary className="cursor-pointer text-pink-700 font-semibold text-lg">
                    What makes P-adjectives special in English?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    P-adjectives are special because they often represent positive and powerful concepts. Many start with prefixes like &quot;pre-&quot;, &quot;pro-&quot;, and &quot;post-&quot;, making them easily identifiable. They frequently describe qualities related to perfection, power, and positivity.
                  </p>
                </details>
                
                <details className="bg-gradient-to-r from-rose-50 to-red-50 p-4 rounded-lg">
                  <summary className="cursor-pointer text-rose-700 font-semibold text-lg">
                    How do I use P-adjectives in sentences?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    P-adjectives can be used in two main ways: attributively (before nouns) like &quot;a perfect solution&quot; or predicatively (after linking verbs) like &quot;The solution is perfect.&quot; They can also be used comparatively and superlatively with &quot;more&quot; and &quot;most.&quot;
                  </p>
                </details>
                
                <details className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg">
                  <summary className="cursor-pointer text-red-700 font-semibold text-lg">
                    Can P-adjectives be used to describe abstract concepts?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    Yes! While many P-adjectives describe physical objects and people, they can also describe abstract concepts. For example, &quot;perfect timing,&quot; &quot;powerful influence,&quot; or &quot;peaceful atmosphere.&quot; The key is choosing the right adjective for the context.
                  </p>
                </details>
                
                <details className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
                  <summary className="cursor-pointer text-orange-700 font-semibold text-lg">
                    What are some common mistakes with P-adjectives?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    Common mistakes include confusing similar-sounding words like &quot;perfect&quot; vs &quot;powerful,&quot; or using the wrong prefix for related words. Also, remember that not all P-adjectives follow the same comparative/superlative patterns.
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
                <Link href="/grammar/adjectives-starting-with-vowels" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Adjectives Starting With Vowels
                </Link>
                <Link href="/grammar/positive-adjectives-beginning-with-p" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Positive Adjectives Beginning With P
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-m" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Adjectives That Begin With Letter M
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-n" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Adjectives That Begin With Letter N
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-t" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Adjectives That Begin With Letter T
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-v" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Adjectives That Begin With Letter V
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-y" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Adjectives That Begin With Letter Y
                </Link>
                <Link href="/grammar/adjectives-that-begin-with-letter-z" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Adjectives That Begin With Letter Z
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Tips</h3>
              <div className="space-y-3 text-gray-700">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-3 rounded-lg">
                  <p className="font-semibold text-pink-700">Prefix Patterns</p>
                  <p className="text-sm">Many P-adjectives use &quot;pre-&quot;, &quot;pro-&quot;, &quot;post-&quot; prefixes</p>
                </div>
                <div className="bg-gradient-to-r from-rose-50 to-red-50 p-3 rounded-lg">
                  <p className="font-semibold text-rose-700">Positive Focus</p>
                  <p className="text-sm">P-adjectives often describe positive and powerful qualities</p>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-3 rounded-lg">
                  <p className="font-semibold text-red-700">Comparative Forms</p>
                  <p className="text-sm">Use &quot;more&quot; and &quot;most&quot; for most P-adjectives</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Practice Examples</h3>
              <div className="space-y-3 text-gray-700">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-3 rounded-lg">
                  <p className="text-sm"><strong>Sentence:</strong> The <span className="text-orange-700 font-semibold">perfect</span> and <span className="text-orange-700 font-semibold">powerful</span> leader created a <span className="text-orange-700 font-semibold">peaceful</span> environment.</p>
                </div>
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg">
                  <p className="text-sm"><strong>Sentence:</strong> Her <span className="text-amber-700 font-semibold">passionate</span> personality and <span className="text-amber-700 font-semibold">playful</span> nature made her popular.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
