import Link from 'next/link';

export default function FifthGradeWorksheetsModalVerbsPage() {
  return (
    <div className="min-h-screen bg-orange-50">
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          
          <header className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-800">Fifth Grade Worksheets: Modal Verbs</h1>
            <p className="text-lg text-gray-700">
              Modal verbs are special verbs that express possibility, ability, permission, or obligation. They help us communicate different meanings and attitudes.
            </p>
            <p className="text-sm text-orange-600 font-medium">
              Key Takeaway: Modal verbs add meaning to other verbs and help express different types of actions and attitudes.
            </p>
          </header>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-800 border-b-2 border-orange-200 pb-2">
              What are Modal Verbs?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Modal verbs are auxiliary verbs that express modality - the speaker&apos;s attitude toward the action or state described by the main verb. 
              They help us communicate possibility, necessity, ability, permission, and other meanings.
            </p>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-800 mb-2">Common Modal Verbs:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>can, could (ability, permission)</li>
                <li>may, might (possibility, permission)</li>
                <li>will, would (future, conditional)</li>
                <li>shall, should (obligation, advice)</li>
                <li>must (necessity, obligation)</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-800 border-b-2 border-orange-200 pb-2">
              Types of Modal Verbs
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Ability and Permission:</h3>
                <p className="text-gray-700 mb-2">Can, Could, May</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>I <strong>can</strong> swim. (ability)</li>
                  <li>You <strong>may</strong> go to the party. (permission)</li>
                  <li>She <strong>could</strong> speak French when she was young. (past ability)</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Possibility and Probability:</h3>
                <p className="text-gray-700 mb-2">May, Might, Could</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>It <strong>may</strong> rain tomorrow. (possibility)</li>
                  <li>He <strong>might</strong> be at home. (uncertainty)</li>
                  <li>She <strong>could</strong> be the winner. (possibility)</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">Obligation and Necessity:</h3>
                <p className="text-gray-700 mb-2">Must, Should, Shall</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>You <strong>must</strong> finish your homework. (strong obligation)</li>
                  <li>You <strong>should</strong> eat more vegetables. (advice)</li>
                  <li>I <strong>shall</strong> return. (formal promise)</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">Future and Conditional:</h3>
                <p className="text-gray-700 mb-2">Will, Would</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>I <strong>will</strong> help you tomorrow. (future intention)</li>
                  <li>If I had time, I <strong>would</strong> visit you. (conditional)</li>
                  <li>She <strong>would</strong> like to go to the movies. (polite request)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-800 border-b-2 border-orange-200 pb-2">
              Modal Verb Examples in Sentences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "I can speak three languages fluently.",
                "You must complete your assignment by Friday.",
                "She might come to the party tonight.",
                "We should recycle to help the environment.",
                "He could run faster when he was younger.",
                "They may arrive late due to traffic.",
                "You will succeed if you work hard.",
                "I would love to visit Paris someday.",
                "Students shall follow the school rules.",
                "She should see a doctor about that cough."
              ].map((sentence, index) => (
                <div key={index} className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-400">
                  <p className="text-gray-800">{sentence}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-800 border-b-2 border-orange-200 pb-2">
              Worksheet 1: Identify Modal Verbs
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <p className="text-gray-700">Underline the modal verb in each sentence:</p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">1. I can swim in the deep end of the pool.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-orange-600 hover:text-orange-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>can</strong> - expresses ability</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">2. You must finish your homework before watching TV.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-orange-600 hover:text-orange-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>must</strong> - expresses obligation</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">3. She might be at the library studying.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-orange-600 hover:text-orange-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>might</strong> - expresses possibility</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">4. We should recycle to protect the environment.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-orange-600 hover:text-orange-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>should</strong> - expresses advice</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">5. He will help you with your project tomorrow.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-orange-600 hover:text-orange-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>will</strong> - expresses future intention</p>
                  </details>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-800 border-b-2 border-orange-200 pb-2">
              Worksheet 2: Complete with Modal Verbs
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <p className="text-gray-700">Fill in the blank with the appropriate modal verb:</p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">1. Students _____ follow the school rules. (obligation)</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-orange-600 hover:text-orange-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>must</strong> - strong obligation</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">2. You _____ eat more vegetables for better health. (advice)</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-orange-600 hover:text-orange-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>should</strong> - advice</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">3. I _____ speak French when I was younger. (past ability)</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-orange-600 hover:text-orange-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>could</strong> - past ability</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">4. It _____ rain tomorrow, so bring an umbrella. (possibility)</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-orange-600 hover:text-orange-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>may</strong> or <strong>might</strong> - possibility</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">5. _____ you help me with this math problem? (polite request)</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-orange-600 hover:text-orange-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>Could</strong> - polite request</p>
                  </details>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-800 border-b-2 border-orange-200 pb-2">
              Worksheet 3: Modal Verb Meanings
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <p className="text-gray-700">Match each sentence with the correct meaning of the modal verb:</p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">1. &quot;You must wear a helmet when riding a bike.&quot;</p>
                  <p className="text-sm text-gray-600 mb-2">a) ability b) obligation c) possibility d) advice</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-orange-600 hover:text-orange-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>b) obligation</strong> - &quot;must&quot; expresses a strong requirement</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">2. &quot;She can play the piano beautifully.&quot;</p>
                  <p className="text-sm text-gray-600 mb-2">a) ability b) permission c) possibility d) advice</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-orange-600 hover:text-orange-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>a) ability</strong> - &quot;can&quot; expresses skill or capability</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">3. &quot;You should study harder for the test.&quot;</p>
                  <p className="text-sm text-gray-600 mb-2">a) obligation b) ability c) possibility d) advice</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-orange-600 hover:text-orange-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>d) advice</strong> - &quot;should&quot; gives a recommendation</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">4. &quot;It might snow tomorrow.&quot;</p>
                  <p className="text-sm text-gray-600 mb-2">a) obligation b) ability c) possibility d) advice</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-orange-600 hover:text-orange-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>c) possibility</strong> - &quot;might&quot; expresses uncertainty</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">5. &quot;May I borrow your pencil?&quot;</p>
                  <p className="text-sm text-gray-600 mb-2">a) ability b) permission c) possibility d) advice</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-orange-600 hover:text-orange-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>b) permission</strong> - &quot;may&quot; asks for permission</p>
                  </details>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-800 border-b-2 border-orange-200 pb-2">
              Tips for Using Modal Verbs
            </h2>
            <div className="bg-orange-50 p-6 rounded-lg space-y-4">
              <div className="flex items-start space-x-3">
                <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                <div>
                  <h3 className="font-semibold text-orange-800">Modal verbs don&apos;t change form</h3>
                  <p className="text-gray-700">Unlike regular verbs, modal verbs don&apos;t add -s, -ed, or -ing endings.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                <div>
                  <h3 className="font-semibold text-orange-800">They&apos;re followed by base form verbs</h3>
                  <p className="text-gray-700">Modal verbs are always followed by the base form of the main verb (without &quot;to&quot;).</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                <div>
                  <h3 className="font-semibold text-orange-800">Choose the right modal for the meaning</h3>
                  <p className="text-gray-700">Consider whether you want to express ability, permission, possibility, obligation, or advice.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                <div>
                  <h3 className="font-semibold text-orange-800">Practice with real situations</h3>
                  <p className="text-gray-700">Use modal verbs in everyday conversations to become more comfortable with them.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-800 border-b-2 border-orange-200 pb-2">
              More Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/grammar/parts-of-speech" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Parts of Speech</h3>
                <p className="text-gray-700 text-sm">Learn about all the parts of speech including verbs.</p>
              </Link>
              
              <Link href="/grammar/action-verb-examples" className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <h3 className="font-semibold text-green-800">Action Verbs</h3>
                <p className="text-gray-700 text-sm">Explore different types of action verbs.</p>
              </Link>
              
              <Link href="/grammar/helping-verbs" className="block p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
                <h3 className="font-semibold text-yellow-800">Helping Verbs</h3>
                <p className="text-gray-700 text-sm">Understand auxiliary verbs and their functions.</p>
              </Link>
              
              <Link href="/grammar/verb-tenses" className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <h3 className="font-semibold text-purple-800">Verb Tenses</h3>
                <p className="text-gray-700 text-sm">Learn about different verb tenses and their uses.</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 