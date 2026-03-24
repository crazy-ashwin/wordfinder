import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Who vs Whom: Understanding the Difference | Grammar Guide',
  description: 'Learn the difference between "who" and "whom" with clear examples, usage tips, and common mistakes to avoid. Perfect for improving your English writing.',
  keywords: 'who vs whom, grammar, english, pronouns, writing tips, word differences',
}

export default function WhoVsWhomPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            Who vs Whom
          </h1>
          <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-4 rounded-2xl shadow-lg">
            <p className="text-xl md:text-2xl font-semibold">
              Mastering the difference between these pronoun cases
            </p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800">
            <strong>&quot;Who&quot;</strong> is used as a subject pronoun (the person doing the action). 
            <strong>&quot;Whom&quot;</strong> is used as an object pronoun (the person receiving the action). 
            While both refer to people, &quot;who&quot; acts as the subject, and &quot;whom&quot; acts as the object in a sentence.
          </p>
        </div>

        {/* Correct vs Incorrect Usage */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
              ✅ Correct Usage
            </h3>
            <ul className="text-lg md:text-xl text-green-700 space-y-3">
              <li>• <strong>Who</strong> is coming to the party?</li>
              <li>• To <strong>whom</strong> should I send the letter?</li>
              <li>• <strong>Who</strong> wrote this book?</li>
              <li>• With <strong>whom</strong> are you traveling?</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
            <h3 className="text-xl font-semibold mb-4 text-red-800 flex items-center">
              ❌ Incorrect Usage
            </h3>
            <ul className="text-lg md:text-xl text-red-700 space-y-3">
              <li>• <strong>Whom</strong> is coming to the party?</li>
              <li>• To <strong>who</strong> should I send the letter?</li>
              <li>• <strong>Whom</strong> wrote this book?</li>
              <li>• With <strong>who</strong> are you traveling?</li>
            </ul>
          </div>
        </div>

        {/* Definitions */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Definitions</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-rose-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-rose-700">Who (Subject Pronoun)</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                Used when the person is doing the action:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>Subject:</strong> &quot;<strong>Who</strong> is calling?&quot;</li>
                <li>• <strong>Doer:</strong> &quot;<strong>Who</strong> wrote the letter?&quot;</li>
                <li>• <strong>Performer:</strong> &quot;<strong>Who</strong> made dinner?&quot;</li>
                <li>• <strong>Active:</strong> &quot;<strong>Who</strong> is speaking?&quot;</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-pink-700">Whom (Object Pronoun)</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                Used when the person is receiving the action:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>Object:</strong> &quot;To <strong>whom</strong> did you speak?&quot;</li>
                <li>• <strong>Receiver:</strong> &quot;For <strong>whom</strong> is this gift?&quot;</li>
                <li>• <strong>Target:</strong> &quot;With <strong>whom</strong> are you meeting?&quot;</li>
                <li>• <strong>Passive:</strong> &quot;By <strong>whom</strong> was this written?&quot;</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Examples Section */}
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-8 rounded-xl mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Examples in Context</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-pink-700">Using &quot;Who&quot;</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;<strong>Who</strong> is responsible for this project?&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;I know <strong>who</strong> stole the cookies.&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;<strong>Who</strong> wants to go first?&quot;
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-rose-700">Using &quot;Whom&quot;</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;To <strong>whom</strong> should I address this letter?&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;For <strong>whom</strong> are you buying this gift?&quot;
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    &quot;With <strong>whom</strong> did you discuss this?&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Memory Tricks */}
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Memory Tricks</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Who</strong> = He/She (subject pronouns)</li>
            <li>• <strong>Whom</strong> = Him/Her (object pronouns)</li>
            <li>• <strong>Who</strong> = Subject (both start with &quot;wh&quot;)</li>
            <li>• <strong>Whom</strong> = Object (both end with &quot;m&quot;)</li>
          </ul>
        </div>

        {/* Related Words */}
        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-900">Related Words</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-indigo-800">Similar to Who:</h3>
              <p className="text-lg md:text-xl text-indigo-700">he, she, they, I, you, we</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-indigo-800">Similar to Whom:</h3>
              <p className="text-lg md:text-xl text-indigo-700">him, her, them, me, you, us</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-rose-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-rose-100 text-rose-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Can I use &quot;who&quot; and &quot;whom&quot; interchangeably?
                  </h3>
                  <div className="bg-rose-50 rounded-lg p-4 border-l-4 border-rose-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-rose-700">A:</span> No, they have different grammatical functions and should not be used interchangeably. &quot;Who&quot; is used as a subject (the person doing the action), while &quot;whom&quot; is used as an object (the person receiving the action). Using them incorrectly will make your sentence grammatically incorrect.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-l-4 border-pink-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 text-pink-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    When should I use &quot;who&quot;?
                  </h3>
                  <div className="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-pink-700">A:</span> Use &quot;who&quot; when the person is the subject of the sentence or clause - meaning they are doing the action. Examples include &quot;Who is calling?&quot; &quot;Who wrote this?&quot; or &quot;I know who did it.&quot; Think of it as replacing &quot;he&quot; or &quot;she&quot; in the sentence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-l-4 border-green-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 text-green-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    When should I use &quot;whom&quot;?
                  </h3>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-green-700">A:</span> Use &quot;whom&quot; when the person is the object of the sentence or clause - meaning they are receiving the action. Examples include &quot;To whom should I speak?&quot; &quot;For whom is this gift?&quot; or &quot;With whom are you meeting?&quot; Think of it as replacing &quot;him&quot; or &quot;her&quot; in the sentence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-l-4 border-purple-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 text-purple-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Can you give me a sentence using both words correctly?
                  </h3>
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-purple-700">A:</span> &quot;<strong>Who</strong> knows to <strong>whom</strong> I should send this package?&quot; Notice that &quot;who&quot; is the subject (doing the knowing), while &quot;whom&quot; is the object (receiving the sending action).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-l-4 border-orange-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 text-orange-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Is it okay to just use &quot;who&quot; all the time?
                  </h3>
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-orange-700">A:</span> While many people use &quot;who&quot; in place of &quot;whom&quot; in casual conversation, using the correct pronoun shows better grammar and is expected in formal writing. In professional or academic contexts, using &quot;whom&quot; correctly demonstrates attention to detail and proper English usage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
