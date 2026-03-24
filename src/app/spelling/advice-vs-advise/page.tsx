import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Advice or Advise - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;advice&quot; and &quot;advise&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AdviceVsAdvisePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Advice or Advise
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between Advice or Advise these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Advice</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Advice&quot; is the correct spelling for the noun form. It means guidance or recommendations.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Advise</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Advise&quot; is the correct spelling for the verb form. It means to give guidance or recommendations.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Advice (Noun)</h3>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
              <strong>Advice</strong> (noun): Guidance or recommendations offered with regard to prudent future action; counsel or suggestions about what someone should do.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• She gave me good <strong>advice</strong> about the job.</li>
                <li>• I need some <strong>advice</strong> on this matter.</li>
                <li>• His <strong>advice</strong> was very helpful.</li>
                <li>• Follow the doctor&apos;s <strong>advice</strong>.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Advise (Verb)</h3>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
              <strong>Advise</strong> (verb): To give guidance or recommendations to someone about what they should do; to counsel or suggest a course of action.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• I <strong>advise</strong> you to study harder.</li>
                <li>• The doctor <strong>advised</strong> rest and fluids.</li>
                <li>• She <strong>advised</strong> against the risky investment.</li>
                <li>• They <strong>advised</strong> me to wait.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Advice (Noun)</h3>
            <ul className="text-lg md:text-xl text-blue-800 space-y-1">
              <li>• Guidance</li>
              <li>• Counsel</li>
              <li>• Recommendation</li>
              <li>• Suggestion</li>
              <li>• Tip</li>
              <li>• Direction</li>
              <li>• Instruction</li>
              <li>• Wisdom</li>
            </ul>
          </div>

          <div className="bg-blue-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Advise (Verb)</h3>
            <ul className="text-lg md:text-xl text-blue-800 space-y-1">
              <li>• Counsel</li>
              <li>• Guide</li>
              <li>• Recommend</li>
              <li>• Suggest</li>
              <li>• Direct</li>
              <li>• Instruct</li>
              <li>• Warn</li>
              <li>• Inform</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Usage Notes */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Advice</strong> (noun) ends with &apos;ce&apos; and refers to the guidance itself.</li>
            <li>• <strong>Advise</strong> (verb) ends with &apos;se&apos; and refers to the action of giving guidance.</li>
            <li>• Think: &quot;I give you advice&quot; or &quot;I advise you&quot;.</li>
            <li>• Both words are commonly used in formal and informal contexts.</li>
            <li>• The words come from the Old French &quot;avis&quot; meaning &quot;opinion.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: When do I use &quot;advice&quot; or &quot;advise&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Use &quot;advice&quot; (noun) when referring to the guidance itself: &quot;I need advice.&quot; Use &quot;advise&quot; (verb) when referring to the action of giving guidance: &quot;I advise you to study.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the difference?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of the spelling: &quot;advice&quot; (noun) has &apos;ice&apos; like &quot;ice&quot; - something you can hold. &quot;Advise&quot; (verb) has &apos;ise&apos; like &quot;realise&quot; - an action you do.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;advice&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;advice&quot; is only a noun. The verb form is always &quot;advise.&quot; You cannot say &quot;I advice you&quot; - it should be &quot;I advise you.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;advise&quot; be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;advise&quot; is only a verb. The noun form is always &quot;advice.&quot; You cannot say &quot;I need advise&quot; - it should be &quot;I need advice.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;advice&quot; and &quot;recommendation&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Advice&quot; is more general guidance or counsel, while &quot;recommendation&quot; is a specific suggestion for a particular course of action. Advice is broader, recommendations are more specific.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often confuse these words?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: People confuse them because they sound very similar and have related meanings. The spelling difference (&apos;ce&apos; or &apos;se&apos;) is subtle and easy to miss.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using these words?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: give advice, seek advice, take advice, advice column, legal advice, financial advice, advise against, advise on, and advise someone to do something.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can these words be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, both words are appropriate in formal writing. They are standard English words that can be used in academic, business, legal, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Advice</strong> (noun) ends with &apos;ce&apos; and refers to the guidance itself. <strong>Advise</strong> (verb) ends with &apos;se&apos; and refers to the action of giving guidance. Use &quot;advice&quot; when you need guidance, and use &quot;advise&quot; when you are giving guidance to someone else.
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><Link href="/spelling/blue-vs-blue" className="text-blue-700 hover:text-blue-900 underline">Blue vs Blue</Link></li>
            <li><Link href="/spelling/body-vs-body" className="text-blue-700 hover:text-blue-900 underline">Body vs Body</Link></li>
            <li><Link href="/spelling/book-vs-book" className="text-blue-700 hover:text-blue-900 underline">Book vs Book</Link></li>
            <li><Link href="/spelling/born-vs-born" className="text-blue-700 hover:text-blue-900 underline">Born vs Born</Link></li>
            <li><Link href="/spelling/both-vs-both" className="text-blue-700 hover:text-blue-900 underline">Both vs Both</Link></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><Link href="/spelling/guidance-vs-guidance" className="text-purple-700 hover:text-purple-900 underline">Guidance vs Guidance</Link></li>
            <li><Link href="/spelling/counsel-vs-counsel" className="text-purple-700 hover:text-purple-900 underline">Counsel vs Counsel</Link></li>
            <li><Link href="/spelling/recommendation-vs-recommendation" className="text-purple-700 hover:text-purple-900 underline">Recommendation vs Recommendation</Link></li>
            <li><Link href="/spelling/suggestion-vs-suggestion" className="text-purple-700 hover:text-purple-900 underline">Suggestion vs Suggestion</Link></li>
            <li><Link href="/spelling/instruction-vs-instruction" className="text-purple-700 hover:text-purple-900 underline">Instruction vs Instruction</Link></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><Link href="/grammar/nouns-vs-verbs" className="text-green-700 hover:text-green-900 underline">Nouns vs Verbs</Link></li>
            <li><Link href="/grammar/ce-vs-se-endings" className="text-green-700 hover:text-green-900 underline">Ce vs Se Endings</Link></li>
            <li><Link href="/grammar/spelling-rules" className="text-green-700 hover:text-green-900 underline">Spelling Rules</Link></li>
            <li><Link href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</Link></li>
            <li><Link href="/grammar/common-mistakes" className="text-green-700 hover:text-green-900 underline">Common Mistakes</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
} 