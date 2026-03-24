
import { Metadata } from "next"
import Link from "next/link"
import { grammarCategories } from "@/lib/grammar-data"

export const metadata: Metadata = {
  title: "Grammar Guides | Find Word Finder",
  description: "Master the art of grammar with our comprehensive collection of grammar guides and resources.",
  keywords: "grammar, grammar guides, grammar resources",
  alternates: {
    canonical: "/grammar",
  },
}

export default function GrammarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Grammar Guide
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Master the art of language with our comprehensive grammar resources
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">100+ Topics</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Interactive Quizzes</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Grade-Specific Content</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Free Resources</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Categories Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {grammarCategories.map((category, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br ${category.bgColor} rounded-3xl p-8 h-full border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                  {/* Category Header */}
                  <div className={`bg-gradient-to-r ${category.color} text-white rounded-2xl p-6 mb-6`}>
                    <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                    <p className="text-white/90">{category.description}</p>
                  </div>

                  {/* Topics List */}
                  <div className="space-y-3">
                    {category.topics.map((topic, topicIndex) => (
                      <Link
                        key={topicIndex}
                        href={topic.href}
                        className="block group/item"
                      >
                        <div className="bg-white/70 hover:bg-white rounded-xl p-4 transition-all duration-200 hover:shadow-md border border-white/50">
                          <h3 className="font-semibold text-gray-800 group-hover/item:text-blue-600 transition-colors">
                            {topic.name}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">{topic.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Tips Section */}
          <div className="mt-16">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Quick Grammar Tips
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Keep It Clear</h3>
                  <p className="text-sm text-gray-600">Write concise, clear sentences that your reader can easily understand.</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Use Active Voice</h3>
                  <p className="text-sm text-gray-600">Active voice makes your writing more direct and engaging.</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl">
                  <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Vary Structure</h3>
                  <p className="text-sm text-gray-600">Mix short and long sentences to create rhythm and interest.</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    4
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Proofread Carefully</h3>
                  <p className="text-sm text-gray-600">Always review your work for grammar, spelling, and clarity.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Grammar?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Start exploring our comprehensive grammar resources today
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/grammar-rules"
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                >
                  Grammar Rules
                </Link>
                <Link
                  href="/blog"
                  className="bg-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors"
                >
                  Grammar Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
