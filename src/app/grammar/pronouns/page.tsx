"use client"

export default function PronounsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-sky-50 to-emerald-50">
      <div className="bg-gradient-to-r from-teal-600 via-sky-600 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-4">Pronouns</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Master the core pronoun types with clear rules, colorful visuals, and practical examples.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-teal-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">What Are Pronouns?</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Pronouns are words that take the place of nouns to avoid repetition and make sentences smoother. Examples include
                <span className="font-semibold"> he, she, it, they, who</span>, and <span className="font-semibold">which</span>.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Main Types of Pronouns</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-xl">
                  <h3 className="text-2xl font-semibold text-teal-800 mb-2">Personal Pronouns</h3>
                  <p className="text-teal-700">I, you, he, she, it, we, they</p>
                  <p className="text-teal-700">Me, you, him, her, it, us, them</p>
                </div>
                <div className="bg-sky-50 border-l-4 border-sky-500 p-6 rounded-xl">
                  <h3 className="text-2xl font-semibold text-sky-800 mb-2">Possessive Pronouns</h3>
                  <p className="text-sky-700">Mine, yours, his, hers, its, ours, yours, theirs</p>
                </div>
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-xl">
                  <h3 className="text-2xl font-semibold text-emerald-800 mb-2">Reflexive Pronouns</h3>
                  <p className="text-emerald-700">Myself, yourself, himself, herself, itself, ourselves, yourselves, themselves</p>
                </div>
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-xl">
                  <h3 className="text-2xl font-semibold text-indigo-800 mb-2">Interrogative Pronouns</h3>
                  <p className="text-indigo-700">Who, whom, whose, what, which</p>
                </div>
                <div className="bg-fuchsia-50 border-l-4 border-fuchsia-500 p-6 rounded-xl">
                  <h3 className="text-2xl font-semibold text-fuchsia-800 mb-2">Demonstrative Pronouns</h3>
                  <p className="text-fuchsia-700">This, that, these, those</p>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-xl">
                  <h3 className="text-2xl font-semibold text-amber-800 mb-2">Relative/Indefinite Pronouns</h3>
                  <p className="text-amber-700">Who, whom, whose, which, that; someone, anyone, everyone, something, nothing, each</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Examples in Sentences</h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-teal-50 to-sky-50 p-6 rounded-xl border-l-4 border-teal-400">
                  <p className="text-lg"><span className="font-semibold text-teal-700">She</span> found the book, then gave it to <span className="font-semibold text-teal-700">him</span>.</p>
                </div>
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border-l-4 border-emerald-400">
                  <p className="text-lg">The decision is <span className="font-semibold text-emerald-700">theirs</span>, not ours.</p>
                </div>
                <div className="bg-gradient-to-r from-indigo-50 to-sky-50 p-6 rounded-xl border-l-4 border-indigo-400">
                  <p className="text-lg"><span className="font-semibold text-indigo-700">Who</span> is presenting, and <span className="font-semibold text-indigo-700">which</span> topic will they start with?</p>
                </div>
                <div className="bg-gradient-to-r from-fuchsia-50 to-pink-50 p-6 rounded-xl border-l-4 border-fuchsia-400">
                  <p className="text-lg"><span className="font-semibold text-fuchsia-700">These</span> are mine; <span className="font-semibold text-fuchsia-700">those</span> are yours.</p>
                </div>
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl border-l-4 border-amber-400">
                  <p className="text-lg">I taught <span className="font-semibold text-amber-700">myself</span> to code.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Memory Tricks &amp; Tips</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Who vs Whom</h4>
                    <p className="text-gray-700">If you can answer with <span className="font-semibold">he</span> or <span className="font-semibold">she</span>, use <span className="font-semibold">who</span>. If the answer is <span className="font-semibold">him</span> or <span className="font-semibold">her</span>, use <span className="font-semibold">whom</span> (m = him).</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-sky-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Demonstratives Distance</h4>
                    <p className="text-gray-700"><span className="font-semibold">This/These</span> are close; <span className="font-semibold">That/Those</span> are far. Think: the letter <span className="font-semibold">t</span> in &quot;that&quot; points to the distance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Reflexive Ending</h4>
                    <p className="text-gray-700">All reflexives end with &quot;-self&quot; or &quot;-selves&quot;; if not, it&apos;s probably not reflexive.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Possessives Have No Apostrophes</h4>
                    <p className="text-gray-700">Use <span className="font-semibold">its</span> (no apostrophe) for possession; <span className="font-semibold">it&apos;s</span> = it is.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">What is a pronoun?</h3>
                  <p className="text-gray-700">A pronoun is a word that replaces a noun, like &quot;it&quot; or &quot;they&quot;, to avoid repetition.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">What&apos;s the difference between &quot;who&quot; and &quot;whom&quot;?</h3>
                  <p className="text-gray-700">Use &quot;who&quot; for the subject and &quot;whom&quot; for the object. Try substituting &quot;he/she&quot; vs &quot;him/her&quot;.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Is &quot;it&apos;s&quot; a possessive pronoun?</h3>
                  <p className="text-gray-700">No. &quot;It&apos;s&quot; means &quot;it is&quot; or &quot;it has&quot;. The possessive pronoun is &quot;its&quot; without an apostrophe.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">What are demonstrative pronouns?</h3>
                  <p className="text-gray-700">They point to things: &quot;this,&quot; &quot;that,&quot; &quot;these,&quot; &quot;those.&quot;</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Can a pronoun be ambiguous?</h3>
                  <p className="text-gray-700">Yes. If it is unclear what a pronoun refers to, rewrite the sentence or repeat the noun.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">What are reflexive pronouns used for?</h3>
                  <p className="text-gray-700">They refer back to the subject: &quot;I taught myself,&quot; &quot;She prepared herself.&quot;</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Are &quot;whoever&quot; and &quot;whichever&quot; pronouns?</h3>
                  <p className="text-gray-700">Yes. They are compounds often used to refer to an unspecified person or thing.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">What&apos;s the difference between possessive adjectives and pronouns?</h3>
                  <p className="text-gray-700">Adjectives come before nouns (my car); pronouns stand alone (the car is mine).</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <a href="/grammar/possessive-pronouns" className="block text-teal-600 hover:text-teal-800 font-medium">Possessive Pronouns</a>
                <a href="/grammar/reflexive-pronouns" className="block text-teal-600 hover:text-teal-800 font-medium">Reflexive Pronouns</a>
                <a href="/grammar/interrogative-pronouns" className="block text-teal-600 hover:text-teal-800 font-medium">Interrogative Pronouns</a>
                <a href="/grammar/relative-pronouns" className="block text-teal-600 hover:text-teal-800 font-medium">Relative Pronouns</a>
                <a href="/grammar/demonstrative-pronouns" className="block text-teal-600 hover:text-teal-800 font-medium">Demonstrative Pronouns</a>
                <a href="/grammar/parts-of-speech" className="block text-teal-600 hover:text-teal-800 font-medium">Parts of Speech</a>
                <a href="/grammar/grammar-rules" className="block text-teal-600 hover:text-teal-800 font-medium">Grammar Rules</a>
                <a href="/grammar/english-grammar" className="block text-teal-600 hover:text-teal-800 font-medium">English Grammar</a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="font-medium">Core Types:</span><span className="text-gray-600">6 groups</span></div>
                <div className="flex justify-between"><span className="font-medium">Quiz Ready:</span><span className="text-gray-600">Examples included</span></div>
                <div className="flex justify-between"><span className="font-medium">Difficulty:</span><span className="text-gray-600">Beginner → Intermediate</span></div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-teal-100">Check pronoun-antecedent agreement: number, person, and gender should match.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


