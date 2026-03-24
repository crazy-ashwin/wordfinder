"use client"

import Link from "next/link"

export default function MainIdea() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Main Idea</h1>
          <p className="text-xl opacity-90">
            Master the central message and key concepts in reading comprehension
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
              <h2 className="text-3xl font-bold text-orange-800 mb-4">What Is the Main Idea?</h2>
              <p className="text-lg text-gray-700 mb-4">
                The main idea is the central message or most important point that an author wants to communicate. It&apos;s the &quot;big picture&quot; that ties together all the details and supporting information in a text.
              </p>
              <p className="text-lg text-gray-700">
                Identifying the main idea is a crucial reading skill that helps you understand what you&apos;re reading and remember the most important information.
              </p>
            </div>

            {/* Finding the Main Idea */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-orange-800 mb-6">How to Find the Main Idea</h2>
              
              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-orange-700 mb-3">Look for Topic Sentences</h3>
                  <p className="text-gray-700 mb-3">
                    The main idea is often stated in the first or last sentence of a paragraph:
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <strong>First sentence:</strong> &quot;Dogs make excellent pets for families.&quot;</li>
                    <li>• <strong>Last sentence:</strong> &quot;Therefore, regular exercise is essential for good health.&quot;</li>
                    <li>• <strong>Implied:</strong> Sometimes the main idea is suggested through details</li>
                  </ul>
                </div>

                <div className="bg-amber-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-amber-700 mb-3">Identify Supporting Details</h3>
                  <p className="text-gray-700 mb-3">
                    Look for facts, examples, and explanations that support the main point:
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <strong>Examples:</strong> Specific instances that illustrate the main idea</li>
                    <li>• <strong>Facts:</strong> Information that backs up the central message</li>
                    <li>• <strong>Reasons:</strong> Explanations of why the main idea is true</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-yellow-700 mb-3">Ask Key Questions</h3>
                  <p className="text-gray-700 mb-3">
                    Use these questions to help identify the main idea:
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• What is this paragraph/text mostly about?</li>
                    <li>• What is the author trying to tell me?</li>
                    <li>• What do all the details have in common?</li>
                    <li>• What is the most important point?</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Types of Main Ideas */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-orange-800 mb-6">Types of Main Ideas</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-orange-700 mb-3">Stated Main Ideas</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Direct:</strong> &quot;The main reason for climate change is human activity.&quot;</li>
                    <li><strong>Topic + Opinion:</strong> &quot;School uniforms improve student behavior.&quot;</li>
                    <li><strong>Problem + Solution:</strong> &quot;Recycling can help reduce waste.&quot;</li>
                  </ul>
                </div>

                <div className="bg-amber-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-amber-700 mb-3">Implied Main Ideas</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Inferred:</strong> Must be figured out from details</li>
                    <li><strong>Theme:</strong> The underlying message or lesson</li>
                    <li><strong>Conclusion:</strong> What the author wants you to understand</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Quizzes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-orange-800 mb-6">Interactive Quizzes</h2>
              
              <div className="space-y-6">
                <details className="bg-orange-50 p-6 rounded-xl">
                  <summary className="text-xl font-semibold text-orange-700 cursor-pointer hover:text-orange-800">
                    Quiz 1: Identify the Main Idea
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700"><strong>Passage:</strong> &quot;Regular exercise has many benefits. It helps strengthen your heart and lungs. Exercise also improves your mood and helps you sleep better. Additionally, it can help you maintain a healthy weight.&quot;</p>
                    <p className="text-gray-700"><strong>Question:</strong> What is the main idea of this passage?</p>
                    <details className="ml-4">
                      <summary className="text-amber-600 cursor-pointer hover:text-amber-800">Show Answer</summary>
                      <p className="mt-2 text-gray-700">The main idea is that regular exercise has many benefits. The supporting details (strengthening heart/lungs, improving mood, better sleep, weight management) all support this central message.</p>
                    </details>
                  </div>
                </details>

                <details className="bg-amber-50 p-6 rounded-xl">
                  <summary className="text-xl font-semibold text-amber-700 cursor-pointer hover:text-amber-800">
                    Quiz 2: Find Supporting Details
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700"><strong>Main Idea:</strong> &quot;Reading is an important skill for success in life.&quot;</p>
                    <p className="text-gray-700"><strong>Question:</strong> Which of these would be a good supporting detail?</p>
                    <details className="ml-4">
                      <summary className="text-orange-600 cursor-pointer hover:text-orange-800">Show Answer</summary>
                      <p className="mt-2 text-gray-700">Good supporting details would be: &quot;Reading helps you learn new information,&quot; &quot;Many jobs require strong reading skills,&quot; or &quot;Reading improves vocabulary and communication.&quot; These all support the main idea that reading is important for success.</p>
                    </details>
                  </div>
                </details>

                <details className="bg-yellow-50 p-6 rounded-xl">
                  <summary className="text-xl font-semibold text-yellow-700 cursor-pointer hover:text-yellow-800">
                    Quiz 3: Implied Main Idea
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700"><strong>Passage:</strong> &quot;The ancient Egyptians built massive pyramids. They developed a complex writing system called hieroglyphics. They also created advanced medical treatments and had sophisticated knowledge of mathematics and astronomy.&quot;</p>
                    <p className="text-gray-700"><strong>Question:</strong> What is the implied main idea?</p>
                    <details className="ml-4">
                      <summary className="text-amber-600 cursor-pointer hover:text-amber-800">Show Answer</summary>
                      <p className="mt-2 text-gray-700">The implied main idea is that the ancient Egyptians were a highly advanced civilization. All the details (pyramids, writing, medicine, math, astronomy) suggest they had sophisticated knowledge and skills.</p>
                    </details>
                  </div>
                </details>

                <details className="bg-orange-50 p-6 rounded-xl">
                  <summary className="text-xl font-semibold text-orange-700 cursor-pointer hover:text-orange-800">
                    Quiz 4: Topic vs. Main Idea
                  </summary>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-700"><strong>Question:</strong> What&apos;s the difference between a topic and a main idea?</p>
                    <details className="ml-4">
                      <summary className="text-amber-600 cursor-pointer hover:text-amber-800">Show Answer</summary>
                      <p className="mt-2 text-gray-700">A <strong>topic</strong> is the general subject (e.g., &quot;dogs&quot;), while the <strong>main idea</strong> is the specific point about that topic (e.g., &quot;Dogs make excellent pets for families&quot;). The topic is broad, the main idea is specific.</p>
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
              <h3 className="text-xl font-bold text-orange-800 mb-4">Notes Section</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Main Idea vs. Summary:</strong> The main idea is usually one sentence, while a summary includes the main idea plus key supporting details.</p>
                <p><strong>Context Clues:</strong> Use surrounding information and your background knowledge to help identify implied main ideas.</p>
                <p><strong>Practice:</strong> Reading regularly and asking yourself &quot;What is this about?&quot; helps develop main idea skills.</p>
              </div>
            </div>

            {/* Pro Tip */}
            <div className="bg-gradient-to-br from-orange-500 to-amber-600 text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">Pro Tip</h3>
              <p className="opacity-90">
                When reading, try to state the main idea in your own words. If you can&apos;t explain it simply, you might not have identified it correctly.
              </p>
            </div>

            {/* Related Topics */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-orange-800 mb-4">Related Topics</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/grammar/reading-comprehension" className="text-orange-600 hover:text-orange-800 underline">
                    Reading Comprehension
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/context-clues" className="text-orange-600 hover:text-orange-800 underline">
                    Context Clues
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/inference-skills" className="text-orange-600 hover:text-orange-800 underline">
                    Inference Skills
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/reading-skills" className="text-orange-600 hover:text-orange-800 underline">
                    Reading Skills
                  </Link>
                </li>
                <li>
                  <Link href="/grammar/vocabulary-for-kids" className="text-orange-600 hover:text-orange-800 underline">
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
