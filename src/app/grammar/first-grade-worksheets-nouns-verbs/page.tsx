import Link from 'next/link';

export default function FirstGradeWorksheetsNounsVerbsPage() {
  return (
    <div className="min-h-screen bg-pink-50">
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          
          <header className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-pink-800">First Grade Worksheets: Nouns & Verbs</h1>
            <p className="text-lg text-gray-700">
              Nouns and verbs are the building blocks of sentences. Nouns name people, places, things, and ideas, while verbs show action or state of being.
            </p>
            <p className="text-sm text-pink-600 font-medium">
              Key Takeaway: Understanding nouns and verbs helps first graders build strong sentences and improve their writing.
            </p>
          </header>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-pink-800 border-b-2 border-pink-200 pb-2">
              What are Nouns?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Nouns are words that name people, places, things, or ideas. They are one of the most important parts of speech because they tell us what we&apos;re talking about.
            </p>
            <div className="bg-pink-50 p-4 rounded-lg">
              <h3 className="font-semibold text-pink-800 mb-2">Types of Nouns:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>People: boy, girl, teacher, mom, dad</li>
                <li>Places: school, park, home, store</li>
                <li>Things: book, ball, car, tree</li>
                <li>Animals: dog, cat, bird, fish</li>
                <li>Ideas: love, happiness, freedom</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-pink-800 border-b-2 border-pink-200 pb-2">
              What are Verbs?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Verbs are action words that tell us what someone or something is doing. They can also show a state of being (like &quot;is,&quot; &quot;are,&quot; &quot;was&quot;).
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Types of Verbs:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Action verbs: run, jump, play, read, write</li>
                <li>Helping verbs: is, are, was, were, have, has</li>
                <li>Linking verbs: am, is, are, was, were</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-pink-800 border-b-2 border-pink-200 pb-2">
              Noun Examples
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">People:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>boy, girl, teacher, mom, dad</li>
                  <li>friend, sister, brother, doctor</li>
                  <li>student, principal, nurse</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">Places:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>school, home, park, store</li>
                  <li>library, zoo, beach, farm</li>
                  <li>classroom, playground, kitchen</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">Things:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>book, ball, car, tree</li>
                  <li>pencil, desk, chair, window</li>
                  <li>toy, phone, computer, table</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">Animals:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>dog, cat, bird, fish</li>
                  <li>horse, cow, pig, sheep</li>
                  <li>lion, tiger, elephant, monkey</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-pink-800 border-b-2 border-pink-200 pb-2">
              Verb Examples
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Action Verbs:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>run, jump, play, read</li>
                  <li>write, draw, sing, dance</li>
                  <li>eat, sleep, walk, talk</li>
                  <li>swim, climb, ride, fly</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h3 className="font-semibold text-indigo-800 mb-2">Helping Verbs:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>am, is, are, was, were</li>
                  <li>have, has, had</li>
                  <li>do, does, did</li>
                  <li>can, could, will, would</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-pink-800 border-b-2 border-pink-200 pb-2">
              Nouns and Verbs in Sentences
            </h2>
            <div className="space-y-4">
              {[
                { sentence: "The cat runs fast.", noun: "cat", verb: "runs" },
                { sentence: "My mom cooks dinner.", noun: "mom", verb: "cooks" },
                { sentence: "The dog barks loudly.", noun: "dog", verb: "barks" },
                { sentence: "I read a book.", noun: "book", verb: "read" },
                { sentence: "The bird flies high.", noun: "bird", verb: "flies" },
                { sentence: "We play in the park.", noun: "park", verb: "play" }
              ].map((item, index) => (
                <div key={index} className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400">
                  <p className="text-gray-800 mb-2">{item.sentence}</p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Noun: <strong>{item.noun}</strong></span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Verb: <strong>{item.verb}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-pink-800 border-b-2 border-pink-200 pb-2">
              Worksheet 1: Find the Nouns
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <p className="text-gray-700">Circle the nouns in each sentence:</p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">1. The boy plays with his dog in the park.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-pink-600 hover:text-pink-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>boy, dog, park</strong></p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">2. My mom reads a book to me.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-pink-600 hover:text-pink-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>mom, book</strong></p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">3. The cat sits on the chair.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-pink-600 hover:text-pink-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>cat, chair</strong></p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">4. We eat pizza for dinner.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-pink-600 hover:text-pink-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>pizza, dinner</strong></p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">5. The teacher helps the students.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-pink-600 hover:text-pink-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>teacher, students</strong></p>
                  </details>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-pink-800 border-b-2 border-pink-200 pb-2">
              Worksheet 2: Find the Verbs
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <p className="text-gray-700">Circle the verbs in each sentence:</p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">1. The bird sings in the tree.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-pink-600 hover:text-pink-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>sings</strong></p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">2. I run fast in the race.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-pink-600 hover:text-pink-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>run</strong></p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">3. The dog barks at the mailman.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-pink-600 hover:text-pink-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>barks</strong></p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">4. She reads a book every night.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-pink-600 hover:text-pink-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>reads</strong></p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">5. We play games together.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-pink-600 hover:text-pink-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>play</strong></p>
                  </details>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-pink-800 border-b-2 border-pink-200 pb-2">
              Worksheet 3: Complete the Sentences
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <p className="text-gray-700">Fill in the blanks with appropriate nouns or verbs:</p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">1. The _____ (noun) _____ (verb) in the garden.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-pink-600 hover:text-pink-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Possible answers: <strong>bird, sings</strong> or <strong>cat, sleeps</strong> or <strong>dog, runs</strong></p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">2. My _____ (noun) _____ (verb) dinner.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-pink-600 hover:text-pink-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Possible answers: <strong>mom, cooks</strong> or <strong>dad, makes</strong></p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">3. I _____ (verb) a _____ (noun) to school.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-pink-600 hover:text-pink-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Possible answers: <strong>carry, book</strong> or <strong>take, backpack</strong></p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">4. The _____ (noun) _____ (verb) in the sky.</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-pink-600 hover:text-pink-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Possible answers: <strong>bird, flies</strong> or <strong>plane, soars</strong></p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">5. We _____ (verb) in the _____ (noun).</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-pink-600 hover:text-pink-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Possible answers: <strong>play, park</strong> or <strong>swim, pool</strong></p>
                  </details>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-pink-800 border-b-2 border-pink-200 pb-2">
              Tips for Learning Nouns and Verbs
            </h2>
            <div className="bg-pink-50 p-6 rounded-lg space-y-4">
              <div className="flex items-start space-x-3">
                <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                <div>
                  <h3 className="font-semibold text-pink-800">Ask questions</h3>
                  <p className="text-gray-700">For nouns: &quot;What is it?&quot; or &quot;Who is it?&quot; For verbs: &quot;What is happening?&quot; or &quot;What is being done?&quot;</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                <div>
                  <h3 className="font-semibold text-pink-800">Use pictures</h3>
                  <p className="text-gray-700">Look at pictures and name the nouns (people, places, things) and describe the actions (verbs).</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                <div>
                  <h3 className="font-semibold text-pink-800">Practice daily</h3>
                  <p className="text-gray-700">Point out nouns and verbs in everyday conversations and reading materials.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                <div>
                  <h3 className="font-semibold text-pink-800">Make it fun</h3>
                  <p className="text-gray-700">Play games like &quot;I Spy&quot; for nouns and &quot;Simon Says&quot; for verbs to make learning enjoyable.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-pink-800 border-b-2 border-pink-200 pb-2">
              More Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/grammar/parts-of-speech" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Parts of Speech</h3>
                <p className="text-gray-700 text-sm">Learn about all the parts of speech including nouns and verbs.</p>
              </Link>
              
              <Link href="/grammar/noun-examples" className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <h3 className="font-semibold text-green-800">Noun Examples</h3>
                <p className="text-gray-700 text-sm">Explore different types of nouns with examples.</p>
              </Link>
              
              <Link href="/grammar/action-verb-examples" className="block p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
                <h3 className="font-semibold text-yellow-800">Action Verb Examples</h3>
                <p className="text-gray-700 text-sm">Discover exciting action verbs for better writing.</p>
              </Link>
              
              <Link href="/grammar/common-nouns" className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <h3 className="font-semibold text-purple-800">Common Nouns</h3>
                <p className="text-gray-700 text-sm">Learn about everyday nouns we use all the time.</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 