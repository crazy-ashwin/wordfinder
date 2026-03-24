import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Choose vs Chose - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "choose" and "chose". Discover definitions, usage examples, and common spelling mistakes.',
  keywords: 'choose vs chose, correct spelling, spelling comparison, English spelling, word confusion, verb tenses',
  openGraph: {
    title: 'Choose vs Chose - Which is Correct?',
    description: 'Learn the correct spelling between "choose" and "chose". Discover definitions, usage examples, and common spelling mistakes.',
    type: 'website',
  },
}

export default function ChooseVsChosePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Choose or Chose</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700">
          Understanding the difference between &quot;Choose&quot; or &quot;Chose&quot;, these verb forms and when to use each one.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center">
            ✅ Correct: Choose
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            <strong>Definition:</strong> To select or pick from a number of alternatives; to make a decision.
          </p>
          <p className="text-lg md:text-xl text-green-800">
            <strong>Part of Speech:</strong> Verb (present tense)
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center">
            ✅ Correct: Chose
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            <strong>Definition:</strong> Past tense of &quot;choose&quot;; to have selected or picked from alternatives.
          </p>
          <p className="text-lg md:text-xl text-green-800">
            <strong>Part of Speech:</strong> Verb (past tense)
          </p>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Choose</strong> is the present tense meaning to select or pick. <strong>Chose</strong> is the past tense of the same verb. Both are correct but used in different time contexts. Use &quot;choose&quot; for present/future and &quot;chose&quot; for past actions.</p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><Link href="/spelling/strength-vs-strengh" className="text-blue-700 hover:text-blue-900 underline">Strength vs Strengh</Link></li>
            <li><Link href="/spelling/weights-vs-weigths" className="text-blue-700 hover:text-blue-900 underline">Weights vs Weigths</Link></li>
            <li><Link href="/spelling/biscuit-vs-bisquit" className="text-blue-700 hover:text-blue-900 underline">Biscuit vs Bisquit</Link></li>
            <li><Link href="/spelling/bonfire-vs-bondfire" className="text-blue-700 hover:text-blue-900 underline">Bonfire vs Bondfire</Link></li>
            <li><Link href="/spelling/their-vs-thier" className="text-blue-700 hover:text-blue-900 underline">Their vs Thier</Link></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><Link href="/spelling/although-vs-allthough" className="text-purple-700 hover:text-purple-900 underline">Although vs Allthough</Link></li>
            <li><Link href="/spelling/cherry-vs-chery" className="text-purple-700 hover:text-purple-900 underline">Cherry vs Chery</Link></li>
            <li><Link href="/spelling/uniform-vs-unaform" className="text-purple-700 hover:text-purple-900 underline">Uniform vs Unaform</Link></li>
            <li><Link href="/spelling/berries-vs-berrys" className="text-purple-700 hover:text-purple-900 underline">Berries vs Berrys</Link></li>
            <li><Link href="/spelling/vigilance-vs-vigilence" className="text-purple-700 hover:text-purple-900 underline">Vigilance vs Vigilence</Link></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><Link href="/grammar/adjectives" className="text-green-700 hover:text-green-900 underline">Adjectives Guide</Link></li>
            <li><Link href="/grammar/declarative-sentence" className="text-green-700 hover:text-green-900 underline">Declarative Sentences</Link></li>
            <li><Link href="/grammar/suffixes" className="text-green-700 hover:text-green-900 underline">Suffixes</Link></li>
            <li><Link href="/grammar/adjectives-starting-with-vowels" className="text-green-700 hover:text-green-900 underline">Adjectives Starting with Vowels</Link></li>
            <li><Link href="/grammar/3rd-grade-worksheets-proper-nouns" className="text-green-700 hover:text-green-900 underline">Proper Nouns Worksheets</Link></li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Choose&quot; is pronounced as /tʃuːz/</li>
          <li>• &quot;Chose&quot; is pronounced as /tʃoʊz/</li>
          <li>• The past participle is &quot;chosen&quot; (used with helping verbs)</li>
          <li>• This is an irregular verb: choose → chose → chosen</li>
          <li>• Remember: &quot;Choose&quot; has two &quot;o&quot;s, &quot;chose&quot; has one &quot;o&quot;</li>
          <li>• The word comes from Old English &quot;cēosan&quot;</li>
        </ul>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Choose</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Select</h3>
            <p className="text-lg text-blue-700">To pick out from a number of alternatives</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Pick</h3>
            <p className="text-lg text-blue-700">To choose or select from available options</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Decide</h3>
            <p className="text-lg text-blue-700">To make a choice or reach a conclusion</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Opt</h3>
            <p className="text-lg text-blue-700">To make a choice, especially between alternatives</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Elect</h3>
            <p className="text-lg text-blue-700">To choose or select, especially by voting</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Prefer</h3>
            <p className="text-lg text-blue-700">To like one thing better than another</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800">
              <strong>Present Tense:</strong> &quot;I will <span className="text-green-600 font-semibold">choose</span> the red dress for the party.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800">
              <strong>Past Tense:</strong> &quot;I <span className="text-green-600 font-semibold">chose</span> the red dress for the party.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800">
              <strong>Present Tense:</strong> &quot;Please <span className="text-green-600 font-semibold">choose</span> your favorite color.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800">
              <strong>Past Tense:</strong> &quot;She <span className="text-green-600 font-semibold">chose</span> to study medicine.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: When should I use &quot;choose&quot; vs &quot;chose&quot;?</h3>
            <p className="text-lg text-blue-800">
              A: Use &quot;choose&quot; for present tense (now or future) and &quot;chose&quot; for past tense. For example: &quot;I choose to go now&quot; (present) vs &quot;I chose to go yesterday&quot; (past). The past participle &quot;chosen&quot; is used with helping verbs like &quot;have&quot; or &quot;had.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: Is &quot;choose&quot; an irregular verb?</h3>
            <p className="text-lg text-blue-800">
              A: Yes, &quot;choose&quot; is an irregular verb. The conjugation is: choose (present) → chose (past) → chosen (past participle). This is why it doesn&apos;t follow the regular pattern of adding &quot;-ed&quot; for past tense.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: What is the difference between &quot;chose&quot; and &quot;chosen&quot;?</h3>
            <p className="text-lg text-blue-800">
              A: &quot;Chose&quot; is the simple past tense, used for actions completed in the past. &quot;Chosen&quot; is the past participle, used with helping verbs like &quot;have,&quot; &quot;has,&quot; or &quot;had.&quot; Examples: &quot;I chose the book&quot; vs &quot;I have chosen the book.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: Can &quot;choose&quot; be used as a noun?</h3>
            <p className="text-lg text-blue-800">
              A: No, &quot;choose&quot; is only a verb. However, &quot;choice&quot; is the noun form, meaning an act of selecting or the thing selected. For example: &quot;Make your choice&quot; (noun) vs &quot;Choose wisely&quot; (verb).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: How can I remember the correct spelling and usage?</h3>
            <p className="text-lg text-blue-800">
              A: Remember that &quot;choose&quot; has two &quot;o&quot;s (like &quot;oo&quot; in &quot;moon&quot;) and is used for present/future. &quot;Chose&quot; has one &quot;o&quot; and is used for past actions. Think: &quot;I choose now, I chose then.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
