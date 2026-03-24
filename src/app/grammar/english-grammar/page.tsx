"use client"

import Link from "next/link"

export default function EnglishGrammar() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-500 to-gray-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">English Grammar</h1>
          <p className="text-xl opacity-90">
            Your comprehensive guide to mastering English grammar fundamentals
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                What Is English Grammar?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                English grammar is the system of rules that govern how words are combined to form meaningful sentences. It includes the structure of words, phrases, clauses, and sentences.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Understanding grammar helps you communicate clearly, write effectively, and express your ideas with precision and style.
              </p>
            </div>

            {/* Core Components */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Core Components of Grammar
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-slate-700 mb-3">Parts of Speech</h3>
                  <p className="text-gray-700 mb-3">
                    The building blocks of language
                  </p>
                  <p className="text-gray-600">
                    Nouns, Verbs, Adjectives<br />
                    Adverbs, Pronouns, Prepositions<br />
                    Conjunctions, Interjections
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">Sentence Structure</h3>
                  <p className="text-gray-700 mb-3">
                    How words combine to form sentences
                  </p>
                  <p className="text-gray-600">
                    Subject + Verb + Object<br />
                    Phrases and Clauses<br />
                    Simple, Compound, Complex
                  </p>
                </div>
              </div>
            </div>

            {/* Grammar Rules */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Essential Grammar Rules
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-slate-500 pl-6">
                  <h3 className="text-xl font-semibold text-slate-700 mb-2">Subject-Verb Agreement</h3>
                  <p className="text-gray-700 mb-3">
                    The verb must agree with its subject in number and person
                  </p>
                  <p className="text-gray-600 italic">
                    She <strong>likes</strong> music. (singular subject, singular verb)<br />
                    They <strong>like</strong> music. (plural subject, plural verb)<br />
                    I <strong>am</strong> happy. (first person singular)
                  </p>
                </div>
                <div className="border-l-4 border-gray-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Tense Consistency</h3>
                  <p className="text-gray-700 mb-3">
                    Maintain consistent verb tenses within a sentence or paragraph
                  </p>
                  <p className="text-gray-600 italic">
                    I <strong>went</strong> to the store and <strong>bought</strong> milk. (both past tense)<br />
                    She <strong>is</strong> studying now and <strong>will</strong> take the test tomorrow. (present and future)
                  </p>
                </div>
                <div className="border-l-4 border-zinc-500 pl-6">
                  <h3 className="text-xl font-semibold text-zinc-700 mb-2">Proper Punctuation</h3>
                  <p className="text-gray-700 mb-3">
                    Use punctuation marks correctly to clarify meaning
                  </p>
                  <p className="text-gray-600 italic">
                    Let&apos;s eat, Grandma! (comma separates direct address)<br />
                    Let&apos;s eat Grandma! (without comma, meaning changes)<br />
                    The student&apos;s book (apostrophe shows possession)
                  </p>
                </div>
              </div>
            </div>

            {/* Common Grammar Mistakes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Common Grammar Mistakes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-slate-700 mb-3">Frequently Confused Words</h3>
                  <p className="text-gray-700 mb-3">
                    Words that sound similar but have different meanings
                  </p>
                  <p className="text-gray-600">
                    their/there/they&apos;re<br />
                    your/you&apos;re<br />
                    its/it&apos;s<br />
                    affect/effect
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">Sentence Fragments</h3>
                  <p className="text-gray-700 mb-3">
                    Incomplete sentences that lack essential elements
                  </p>
                  <p className="text-gray-600">
                    ❌ Running in the park.<br />
                    ✅ I was running in the park.<br />
                    ❌ Because it was raining.<br />
                    ✅ I stayed home because it was raining.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quizzes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Interactive Quizzes
              </h2>
              
              <div className="space-y-6">
                <details className="bg-slate-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-slate-700 cursor-pointer hover:text-slate-800">
                    Quiz 1: Parts of Speech
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Identify the part of speech for each word:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;The beautiful flowers bloomed quickly.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: the (article), beautiful (adjective), flowers (noun), bloomed (verb), quickly (adverb)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;She runs and jumps in the park.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: she (pronoun), runs (verb), and (conjunction), jumps (verb), in (preposition), the (article), park (noun)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-gray-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-gray-700 cursor-pointer hover:text-gray-800">
                    Quiz 2: Subject-Verb Agreement
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Choose the correct verb form:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. The students _____ (is/are) studying for the exam.</p>
                      <p className="text-gray-600 text-sm">Answer: are (plural subject needs plural verb)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. Neither John nor Mary _____ (like/likes) coffee.</p>
                      <p className="text-gray-600 text-sm">Answer: likes (singular verb with &quot;neither...nor&quot;)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-zinc-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-zinc-700 cursor-pointer hover:text-zinc-800">
                    Quiz 3: Fix Grammar Errors
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Correct these sentences:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. &quot;Me and him went to the store.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: &quot;He and I went to the store.&quot; (use subject pronouns)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. &quot;The book is laying on the table.&quot;</p>
                      <p className="text-gray-600 text-sm">Answer: &quot;The book is lying on the table.&quot; (lay = put down, lie = recline)</p>
                    </div>
                  </div>
                </details>

                <details className="bg-slate-50 rounded-xl p-6">
                  <summary className="text-xl font-semibold text-slate-700 cursor-pointer hover:text-slate-800">
                    Quiz 4: Complete Sentences
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700">Complete these sentence fragments:</p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">1. Running in the park _____</p>
                      <p className="text-gray-600 text-sm">Answer: is fun. (add subject and verb)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">2. Because it was raining _____</p>
                      <p className="text-gray-600 text-sm">Answer: I stayed home. (add independent clause)</p>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Important Notes
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>• Grammar rules exist to make communication clear and effective, not to restrict creativity.</p>
                <p>• Context matters - formal writing requires stricter adherence to grammar rules than casual conversation.</p>
                <p>• Practice is essential - reading good writing helps develop an intuitive sense of correct grammar.</p>
                <p>• When in doubt, keep sentences simple and clear rather than complex and potentially incorrect.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Pro Tip</h3>
              <p className="text-gray-700">
                Read your writing aloud. Your ear often catches grammar mistakes that your eye might miss. If something sounds wrong, it probably is wrong.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Related Topics</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/grammar/parts-of-speech" className="text-slate-600 hover:text-slate-800 hover:underline">
                    Parts of Speech
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/sentence-structure" className="text-slate-600 hover:text-slate-800 hover:underline">
                    Sentence Structure
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/grammar-rules" className="text-slate-600 hover:text-slate-800 hover:underline">
                    Grammar Rules
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/punctuation" className="text-slate-600 hover:text-slate-800 hover:underline">
                    Punctuation
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/verb-tenses" className="text-slate-600 hover:text-slate-800 hover:underline">
                    Verb Tenses
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
