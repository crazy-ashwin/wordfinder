"use client"

import Link from "next/link"

export default function ContextClues() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Context Clues</h1>
          <p className="text-xl opacity-90">
            Master the art of understanding unfamiliar words through context
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-teal-800 mb-4">What Are Context Clues?</h2>
              <p className="text-lg text-gray-700 mb-4">
                Context clues are hints or information that help you understand the meaning of unfamiliar words. They are found in the words, phrases, and sentences surrounding the unknown word.
              </p>
              <p className="text-lg text-gray-700">
                Learning to use context clues is a powerful strategy for building vocabulary and improving reading comprehension without needing to look up every word in a dictionary.
              </p>
            </div>

            {/* Types of Context Clues */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-teal-800 mb-6">Types of Context Clues</h2>
              
              <div className="space-y-6">
                <div className="bg-teal-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Definition Clues</h3>
                  <p className="text-gray-700 mb-3">
                    The meaning is directly stated or explained:
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <em>An <strong>ornithologist</strong>, a scientist who studies birds, visited the zoo.</em></li>
                    <li>• <em>The <strong>arboretum</strong> is a place where trees and shrubs are grown for study.</em></li>
                    <li>• <em><strong>Photosynthesis</strong> is the process by which plants make food from sunlight.</em></li>
                  </ul>
                </div>

                <div className="bg-cyan-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-cyan-700 mb-3">Example Clues</h3>
                  <p className="text-gray-700 mb-3">
                    Examples help you understand the word&apos;s meaning:
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <em>Various <strong>reptiles</strong> such as snakes, lizards, and turtles live in the desert.</em></li>
                    <li>• <em><strong>Mammals</strong> like dogs, cats, and humans are warm-blooded animals.</em></li>
                    <li>• <em>She wore <strong>jewelry</strong> including rings, necklaces, and bracelets.</em></li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Synonym Clues</h3>
                  <p className="text-gray-700 mb-3">
                    A similar word or phrase appears nearby:
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <em>The <strong>enormous</strong> building was huge and towered over the city.</em></li>
                    <li>• <em>She felt <strong>ecstatic</strong>, absolutely thrilled about the good news.</em></li>
                    <li>• <em>The <strong>arid</strong> climate was dry and lacked rainfall.</em></li>
                  </ul>
                </div>

                <div className="bg-teal-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Antonym Clues</h3>
                  <p className="text-gray-700 mb-3">
                    An opposite word or phrase provides a clue:
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <em>Unlike his <strong>loquacious</strong> sister, he was quiet and rarely spoke.</em></li>
                    <li>• <em>The <strong>dense</strong> forest was not sparse or open like the meadow.</em></li>
                    <li>• <em>She was <strong>optimistic</strong> about the future, not pessimistic or negative.</em></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How to Use Context Clues */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-teal-800 mb-6">How to Use Context Clues</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Step-by-Step Process</h3>
                  <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                    <li><strong>Read the entire sentence</strong> containing the unknown word</li>
                    <li><strong>Look for definition clues</strong> - is the meaning explained?</li>
                    <li><strong>Check for examples</strong> that illustrate the word</li>
                    <li><strong>Find synonyms or antonyms</strong> nearby</li>
                    <li><strong>Consider the overall context</strong> of the paragraph</li>
                    <li><strong>Make an educated guess</strong> based on the clues</li>
                  </ol>
                </div>

                <div className="bg-gradient-to-r from-cyan-100 to-blue-100 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-cyan-700 mb-3">Tips for Success</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <strong>Read beyond the sentence</strong> - sometimes clues are in nearby sentences</li>
                    <li>• <strong>Look for signal words</strong> like &quot;such as,&quot; &quot;including,&quot; &quot;unlike,&quot; &quot;however&quot;</li>
                    <li>• <strong>Use your background knowledge</strong> about the topic</li>
                    <li>• <strong>Consider word parts</strong> - prefixes, suffixes, and root words</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quizzes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-teal-800 mb-6">Interactive Quizzes</h2>
              
              <div className="space-y-6">
                <details className="bg-teal-50 p-6 rounded-xl">
                  <summary className="text-xl font-semibold text-teal-700 cursor-pointer hover:text-teal-800">
                    Quiz 1: Definition Clues
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700"><strong>Sentence:</strong> &quot;The <strong>archaeologist</strong>, a scientist who studies ancient civilizations, discovered pottery from 2000 years ago.&quot;</p>
                    <p className="text-gray-700"><strong>Question:</strong> What does &quot;archaeologist&quot; mean?</p>
                    <details className="ml-4">
                      <summary className="text-cyan-600 cursor-pointer hover:text-cyan-800">Show Answer</summary>
                      <p className="mt-2 text-gray-700">An <strong>archaeologist</strong> is a scientist who studies ancient civilizations. The definition clue &quot;a scientist who studies ancient civilizations&quot; directly explains the meaning.</p>
                    </details>
                  </div>
                </details>

                <details className="bg-cyan-50 p-6 rounded-xl">
                  <summary className="text-xl font-semibold text-cyan-700 cursor-pointer hover:text-cyan-800">
                    Quiz 2: Example Clues
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700"><strong>Sentence:</strong> &quot;Various <strong>amphibians</strong> such as frogs, toads, and salamanders live near the pond.&quot;</p>
                    <p className="text-gray-700"><strong>Question:</strong> What does &quot;amphibians&quot; mean?</p>
                    <details className="ml-4">
                      <summary className="text-teal-600 cursor-pointer hover:text-teal-800">Show Answer</summary>
                      <p className="mt-2 text-gray-700">Based on the examples (frogs, toads, salamanders), <strong>amphibians</strong> are animals that can live both in water and on land. The examples help us understand the category of animals being described.</p>
                    </details>
                  </div>
                </details>

                <details className="bg-blue-50 p-6 rounded-xl">
                  <summary className="text-xl font-semibold text-blue-700 cursor-pointer hover:text-blue-800">
                    Quiz 3: Synonym Clues
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700"><strong>Sentence:</strong> &quot;The <strong>magnificent</strong> palace was beautiful and impressive to behold.&quot;</p>
                    <p className="text-gray-700"><strong>Question:</strong> What does &quot;magnificent&quot; mean?</p>
                    <details className="ml-4">
                      <summary className="text-cyan-600 cursor-pointer hover:text-cyan-800">Show Answer</summary>
                      <p className="mt-2 text-gray-700"><strong>Magnificent</strong> means beautiful and impressive. The synonym clues &quot;beautiful and impressive&quot; help us understand the meaning of the word.</p>
                    </details>
                  </div>
                </details>

                <details className="bg-teal-50 p-6 rounded-xl">
                  <summary className="text-xl font-semibold text-teal-700 cursor-pointer hover:text-teal-800">
                    Quiz 4: Antonym Clues
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700"><strong>Sentence:</strong> &quot;Unlike his <strong>gregarious</strong> brother, he was shy and preferred to be alone.&quot;</p>
                    <p className="text-gray-700"><strong>Question:</strong> What does &quot;gregarious&quot; mean?</p>
                    <details className="ml-4">
                      <summary className="text-cyan-600 cursor-pointer hover:text-cyan-800">Show Answer</summary>
                      <p className="mt-2 text-gray-700"><strong>Gregarious</strong> means outgoing and sociable. The antonym clues &quot;shy and preferred to be alone&quot; help us understand that gregarious is the opposite - someone who enjoys being with others.</p>
                    </details>
                  </div>
                </details>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Notes Section */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-teal-800 mb-4">Notes Section</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Multiple Clues:</strong> Sometimes you&apos;ll find several types of context clues for the same word, making it easier to understand.</p>
                <p><strong>Practice Makes Perfect:</strong> The more you practice using context clues, the better you&apos;ll become at understanding unfamiliar words.</p>
                <p><strong>Not Always Perfect:</strong> Context clues don&apos;t always give you the exact meaning, but they usually provide enough information to understand the general idea.</p>
              </div>
            </div>

            {/* Pro Tip */}
            <div className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">Pro Tip</h3>
              <p className="opacity-90">
                When you encounter an unfamiliar word, don&apos;t immediately reach for the dictionary. Try to figure it out from context first - this builds your vocabulary skills and reading confidence.
              </p>
            </div>

            {/* Related Topics */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-teal-800 mb-4">Related Topics</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/grammar/main-idea" className="text-teal-600 hover:text-teal-800 underline">
                    Main Idea
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/inference-skills" className="text-teal-600 hover:text-teal-800 underline">
                    Inference Skills
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/reading-comprehension" className="text-teal-600 hover:text-teal-800 underline">
                    Reading Comprehension
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/vocabulary-for-kids" className="text-teal-600 hover:text-teal-800 underline">
                    Vocabulary Building
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/reading-skills" className="text-teal-600 hover:text-teal-800 underline">
                    Reading Skills
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
