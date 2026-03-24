"use client"

import Link from "next/link"

export default function InferenceSkills() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Inference Skills</h1>
          <p className="text-xl opacity-90">
            Master the art of reading between the lines and drawing conclusions
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
              <h2 className="text-3xl font-bold text-rose-800 mb-4">What Are Inference Skills?</h2>
              <p className="text-lg text-gray-700 mb-4">
                Inference skills involve using clues from the text and your background knowledge to understand information that isn&apos;t directly stated. It&apos;s about &quot;reading between the lines&quot; to discover deeper meaning.
              </p>
              <p className="text-lg text-gray-700">
                Strong inference skills help you become a more thoughtful reader who can understand implied messages, character motivations, and hidden meanings in texts.
              </p>
            </div>

            {/* Types of Inferences */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-rose-800 mb-6">Types of Inferences</h2>
              
              <div className="space-y-6">
                <div className="bg-rose-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-rose-700 mb-3">Character Inferences</h3>
                  <p className="text-gray-700 mb-3">
                    Understanding characters&apos; thoughts, feelings, and motivations:
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <em>Sarah slammed the door and stomped upstairs.</em> → Sarah is angry</li>
                    <li>• <em>Tom kept checking his watch every few minutes.</em> → Tom is anxious or impatient</li>
                    <li>• <em>Maria smiled and hugged her friend tightly.</em> → Maria is happy and caring</li>
                  </ul>
                </div>

                <div className="bg-pink-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-pink-700 mb-3">Setting Inferences</h3>
                  <p className="text-gray-700 mb-3">
                    Understanding the time, place, and atmosphere:
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <em>The air was thick with smoke and the sound of sirens filled the night.</em> → There&apos;s an emergency</li>
                    <li>• <em>Leaves crunched underfoot and a cool breeze carried the scent of apples.</em> → It&apos;s autumn</li>
                    <li>• <em>The room was filled with ancient books and dusty artifacts.</em> → It&apos;s a library or museum</li>
                  </ul>
                </div>

                <div className="bg-fuchsia-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-fuchsia-700 mb-3">Plot Inferences</h3>
                  <p className="text-gray-700 mb-3">
                    Understanding what might happen next or what happened before:
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <em>The dark clouds gathered overhead and thunder rumbled in the distance.</em> → It&apos;s going to rain</li>
                    <li>• <em>She found muddy footprints leading to the back door.</em> → Someone entered the house</li>
                    <li>• <em>The phone rang, but no one answered.</em> → The house might be empty</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How to Make Inferences */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-rose-800 mb-6">How to Make Inferences</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-rose-100 to-pink-100 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-rose-700 mb-3">The Inference Process</h3>
                  <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                    <li><strong>Read carefully</strong> and identify the facts and details</li>
                    <li><strong>Look for clues</strong> in the text (actions, dialogue, descriptions)</li>
                    <li><strong>Use your background knowledge</strong> about the world</li>
                    <li><strong>Consider the context</strong> of the situation</li>
                    <li><strong>Make logical connections</strong> between the clues</li>
                    <li><strong>Draw a reasonable conclusion</strong> based on the evidence</li>
                  </ol>
                </div>

                <div className="bg-gradient-to-r from-pink-100 to-fuchsia-100 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-pink-700 mb-3">Key Questions to Ask</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <strong>What clues</strong> does the author provide?</li>
                    <li>• <strong>What do I already know</strong> about this topic?</li>
                    <li>• <strong>What would make sense</strong> in this situation?</li>
                    <li>• <strong>What is the author suggesting</strong> without saying it directly?</li>
                    <li>• <strong>What can I conclude</strong> from these details?</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Examples and Practice */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-rose-800 mb-6">Examples and Practice</h2>
              
              <div className="space-y-6">
                <div className="bg-rose-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-rose-700 mb-3">Text Example</h3>
                  <p className="text-gray-700 mb-3">
                    <em>&quot;Jake&apos;s hands were shaking as he opened the envelope. His heart was pounding, and he could barely breathe. When he saw the word &apos;Congratulations&apos; at the top of the letter, he let out a huge sigh of relief.&quot;</em>
                  </p>
                  <p className="text-gray-700"><strong>What can you infer?</strong></p>
                  <ul className="text-gray-700 space-y-1 mt-2">
                    <li>• Jake was nervous about receiving this letter</li>
                    <li>• The letter contained important news</li>
                    <li>• Jake was relieved by the good news</li>
                    <li>• This was likely an acceptance letter (college, job, etc.)</li>
                  </ul>
                </div>

                <div className="bg-pink-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-pink-700 mb-3">Character Analysis</h3>
                  <p className="text-gray-700 mb-3">
                    <em>&quot;Mrs. Johnson never raised her voice, even when students were misbehaving. She would simply look at them with her kind eyes and speak softly. Within minutes, the classroom would be quiet and students would be working diligently.&quot;</em>
                  </p>
                  <p className="text-gray-700"><strong>What can you infer about Mrs. Johnson?</strong></p>
                  <ul className="text-gray-700 space-y-1 mt-2">
                    <li>• She has excellent classroom management skills</li>
                    <li>• Students respect her authority</li>
                    <li>• She doesn&apos;t need to yell to maintain control</li>
                    <li>• She has a gentle but effective teaching style</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quizzes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-rose-800 mb-6">Interactive Quizzes</h2>
              
              <div className="space-y-6">
                <details className="bg-rose-50 p-6 rounded-xl">
                  <summary className="text-xl font-semibold text-rose-700 cursor-pointer hover:text-rose-800">
                    Quiz 1: Character Feelings
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700"><strong>Passage:</strong> &quot;Emma stared at her phone, her eyes wide with disbelief. Her hands trembled as she read the message again. She couldn&apos;t believe what she was seeing.&quot;</p>
                    <p className="text-gray-700"><strong>Question:</strong> What emotion is Emma most likely feeling?</p>
                    <details className="ml-4">
                      <summary className="text-pink-600 cursor-pointer hover:text-pink-800">Show Answer</summary>
                      <p className="mt-2 text-gray-700">Emma is most likely feeling <strong>shock or disbelief</strong>. The clues &quot;eyes wide with disbelief,&quot; &quot;hands trembled,&quot; and &quot;couldn&apos;t believe what she was seeing&quot; all point to a strong emotional reaction to surprising news.</p>
                    </details>
                  </div>
                </details>

                <details className="bg-pink-50 p-6 rounded-xl">
                  <summary className="text-xl font-semibold text-pink-700 cursor-pointer hover:text-pink-800">
                    Quiz 2: Setting Inference
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700"><strong>Passage:</strong> &quot;The air was filled with the sound of waves crashing against rocks. Seagulls circled overhead, and the salty breeze carried the scent of seaweed.&quot;</p>
                    <p className="text-gray-700"><strong>Question:</strong> Where is this scene taking place?</p>
                    <details className="ml-4">
                      <summary className="text-rose-600 cursor-pointer hover:text-rose-800">Show Answer</summary>
                      <p className="mt-2 text-gray-700">This scene is taking place at the <strong>ocean or seashore</strong>. The clues &quot;waves crashing against rocks,&quot; &quot;seagulls,&quot; and &quot;salty breeze&quot; with &quot;scent of seaweed&quot; all indicate a coastal location.</p>
                    </details>
                  </div>
                </details>

                <details className="bg-fuchsia-50 p-6 rounded-xl">
                  <summary className="text-xl font-semibold text-fuchsia-700 cursor-pointer hover:text-fuchsia-800">
                    Quiz 3: Plot Prediction
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700"><strong>Passage:</strong> &quot;The old wooden bridge creaked ominously as the hikers approached. Several planks were missing, and the ropes holding it together looked frayed and worn.&quot;</p>
                    <p className="text-gray-700"><strong>Question:</strong> What might happen next?</p>
                    <details className="ml-4">
                      <summary className="text-pink-600 cursor-pointer hover:text-pink-800">Show Answer</summary>
                      <p className="mt-2 text-gray-700">The hikers might <strong>avoid crossing the bridge</strong> or <strong>cross it very carefully</strong>. The clues &quot;creaked ominously,&quot; &quot;missing planks,&quot; and &quot;frayed ropes&quot; suggest the bridge is unsafe and could collapse.</p>
                    </details>
                  </div>
                </details>

                <details className="bg-rose-50 p-6 rounded-xl">
                  <summary className="text-xl font-semibold text-rose-700 cursor-pointer hover:text-rose-800">
                    Quiz 4: Author&apos;s Purpose
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700"><strong>Passage:</strong> &quot;Studies show that children who read for just 20 minutes a day score higher on reading tests. Reading also improves vocabulary, writing skills, and critical thinking.&quot;</p>
                    <p className="text-gray-700"><strong>Question:</strong> What is the author trying to persuade readers to do?</p>
                    <details className="ml-4">
                      <summary className="text-pink-600 cursor-pointer hover:text-pink-800">Show Answer</summary>
                      <p className="mt-2 text-gray-700">The author is trying to persuade readers to <strong>encourage children to read daily</strong>. The passage presents evidence (higher test scores, improved skills) to convince readers that daily reading is beneficial for children.</p>
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
              <h3 className="text-xl font-bold text-rose-800 mb-4">Notes Section</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Evidence-Based:</strong> Good inferences are always supported by evidence from the text, not just wild guesses.</p>
                <p><strong>Background Knowledge:</strong> Your prior knowledge about the world helps you make better inferences.</p>
                <p><strong>Multiple Interpretations:</strong> Sometimes there can be more than one reasonable inference from the same text.</p>
              </div>
            </div>

            {/* Pro Tip */}
            <div className="bg-gradient-to-br from-rose-500 to-pink-600 text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">Pro Tip</h3>
              <p className="opacity-90">
                When making inferences, always ask yourself: &quot;What evidence supports this conclusion?&quot; If you can&apos;t point to specific clues in the text, your inference might not be strong enough.
              </p>
            </div>

            {/* Related Topics */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-rose-800 mb-4">Related Topics</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/grammar/main-idea" className="text-rose-600 hover:text-rose-800 underline">
                    Main Idea
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/context-clues" className="text-rose-600 hover:text-rose-800 underline">
                    Context Clues
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/reading-comprehension" className="text-rose-600 hover:text-rose-800 underline">
                    Reading Comprehension
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/reading-skills" className="text-rose-600 hover:text-rose-800 underline">
                    Reading Skills
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/vocabulary-for-kids" className="text-rose-600 hover:text-rose-800 underline">
                    Vocabulary Building
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
