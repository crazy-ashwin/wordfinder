'use client'

import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'

// export const metadata: Metadata = {
//   title: 'Confusing Words - Common Word Pairs Explained | Word Finder',
//   description: 'Learn the differences between commonly confused words like affect vs effect, bear vs bare, and more. Clear explanations with examples to improve your vocabulary.',
//   keywords: 'confusing words, commonly confused words, affect vs effect, bear vs bare, capitol vs capital, grammar help',
// }

interface ConfusingWord {
  title: string
  path: string
  description: string
  category: string
  icon: string
}

export default function ConfusingWordsPage() {
  const [displayCount, setDisplayCount] = useState(6)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [confusingWords, setConfusingWords] = useState<ConfusingWord[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  const categories = ['All', 'Grammar', 'Homophones', 'Spelling', 'Vocabulary', 'Nature', 'Food', 'Sports']
  
  // Fetch confusing words from API with retry mechanism
  const fetchConfusingWords = useCallback(async (retryCount = 0) => {
    try {
      setLoading(true)
      setError(null)
      // Add cache-busting parameter to force fresh data
      const timestamp = Date.now()
      const apiUrl = `/api/confusing-words?t=${timestamp}`
      console.log(`Fetching from: ${apiUrl} (attempt ${retryCount + 1})`)
      
      const response = await fetch(apiUrl)
      console.log('Response status:', response.status, response.statusText)
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`)
      }
      
      const data = await response.json()
      console.log('API response:', data)
      
      if (data.success) {
        console.log('Setting confusing words:', data.words)
        setConfusingWords(data.words)
        setError(null) // Clear any previous errors
      } else {
        throw new Error(data.error || 'Failed to fetch data')
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred'
      console.error('Error fetching confusing words:', err)
      
      // Retry up to 2 times
      if (retryCount < 2) {
        console.log(`Retrying... (${retryCount + 1}/2)`)
        setTimeout(() => fetchConfusingWords(retryCount + 1), 1000)
        return
      }
      
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }, [])

  // Get category and display count from URL parameter on page load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const categoryFromUrl = urlParams.get('category');
      const displayFromUrl = urlParams.get('display');
      
      if (categoryFromUrl) {
        setSelectedCategory(categoryFromUrl);
      }
      
      if (displayFromUrl) {
        const displayCount = parseInt(displayFromUrl);
        if (!isNaN(displayCount)) {
          setDisplayCount(displayCount);
        }
      }
    }
    
    // Fetch data after setting initial state
    fetchConfusingWords()
  }, [fetchConfusingWords])
  
  // Filter words based on selected category
  const filteredWords = selectedCategory === 'All' 
    ? confusingWords 
    : confusingWords.filter(word => word.category === selectedCategory)
  
  console.log('Current confusing words state:', confusingWords)
  console.log('Filtered words:', filteredWords)
  
  const displayedWords = filteredWords.slice(0, displayCount)
  const hasMoreWords = displayCount < filteredWords.length

  const loadMore = async () => {
    const newCount = Math.min(displayCount + 6, filteredWords.length)
    
    // Update URL with display parameter and reload the page
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('display', newCount.toString());
      // Reload the page to show heading and fresh content
      window.location.href = url.toString();
    }
  }

  const showLess = async () => {
    // Update URL with display parameter and reload the page
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('display', '6');
      // Reload the page to show heading and fresh content
      window.location.href = url.toString();
    }
  }

  const handleCategoryChange = async (category: string) => {
    console.log('Changing category to:', category)
    setSelectedCategory(category)
    setDisplayCount(6) // Reset display count when changing category
    
    // Update URL with category parameter and reload the page
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (category === 'All') {
        url.searchParams.delete('category');
      } else {
        url.searchParams.set('category', category);
      }
      // Reload the page to show heading and fresh content
      window.location.href = url.toString();
    }
  }

  const handleSearch = async () => {
    console.log('Search triggered')
    // Reload data when searching
    await fetchConfusingWords()
  }

  const handleReload = async () => {
    console.log('Manual reload triggered')
    // Force reload of all data by reloading the page
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('category');
      url.searchParams.delete('display');
      // Reload the page to show heading and fresh content
      window.location.href = url.toString();
    }
  }

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Loading confusing words...</p>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Page</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={handleReload} 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 transform -skew-y-3 origin-top-left"></div>
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="text-center text-white">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full p-4 mb-6">
              <span className="text-4xl">🎯</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
              Confusing Words
            </h1>
            <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed mb-8">
              Master the art of distinguishing between commonly confused words with our comprehensive guides
            </p>
            
            {/* Search Section - Moved to Hero Section */}
            <div className="max-w-md mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search confusing words..."
                    className="w-full pl-12 pr-20 py-3 bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-white focus:border-transparent transition-all text-gray-900 placeholder-gray-600"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl">
                    🔍
                  </span>
                  <button
                    onClick={handleSearch}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm transition-colors"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium">
                📚 {confusingWords.length} Word Pairs
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium">
                🎯 Interactive Learning
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium">
                💡 Memory Tips
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold mb-2">{confusingWords.length}</div>
            <div className="text-blue-100">Word Pairs</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold mb-2">7</div>
            <div className="text-purple-100">Categories</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold mb-2">6</div>
            <div className="text-green-100">Initially Shown</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-orange-100">Free Access</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-blue-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Refresh Button */}
        <div className="text-center mb-6">
          <button
            onClick={handleReload}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm"
          >
            🔄 Refresh Data
          </button>
        </div>

        {/* Word Pairs Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Confusing Word Pairs
            </span>
            <div className="ml-4 h-px flex-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
          </h2>
          
          {filteredWords.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <p className="text-xl text-gray-600">No word pairs found for &quot;{selectedCategory}&quot; category.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {displayedWords.map((word, index) => (
                  <Link 
                    key={index} 
                    href={`/confusing-words/${word.path}`}
                    className="group block"
                  >
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-3xl">{word.icon}</span>
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                            {word.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {word.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {word.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-blue-600 font-semibold group-hover:text-blue-600 transition-colors">
                            Learn More
                          </span>
                          <span className="text-blue-600 group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Load More Button */}
              {hasMoreWords && (
                <div className="text-center">
                  <button
                    onClick={loadMore}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <span className="flex items-center justify-center gap-2">
                      📚 Load More Word Pairs
                    </span>
                  </button>
                </div>
              )}

              {/* Show Less Button */}
              {displayCount > 6 && (
                <div className="text-center mt-4">
                  <button
                    onClick={showLess}
                    className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <span className="flex items-center justify-center gap-2">
                      🔽 Show Less
                    </span>
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Learning Tips */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
          <h2 className="text-3xl font-bold text-emerald-900 mb-6 flex items-center">
            <span className="mr-3">💡</span>
            Pro Learning Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-emerald-500 text-white rounded-full p-2 text-sm font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-emerald-800 mb-1">Context is Key</h4>
                  <p className="text-emerald-700 text-sm">Always consider the context when choosing between similar words.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-emerald-500 text-white rounded-full p-2 text-sm font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-emerald-800 mb-1">Practice Daily</h4>
                  <p className="text-emerald-700 text-sm">Use new words in sentences to reinforce your understanding.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-emerald-500 text-white rounded-full p-2 text-sm font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-emerald-800 mb-1">Memory Tricks</h4>
                  <p className="text-emerald-700 text-sm">Create mnemonics or visual associations to remember differences.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-emerald-500 text-white rounded-full p-2 text-sm font-bold">4</div>
                <div>
                  <h4 className="font-semibold text-emerald-800 mb-1">Read Widely</h4>
                  <p className="text-emerald-700 text-sm">Exposure to various writing styles helps internalize correct usage.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Master Confusing Words?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Start with any word pair that interests you. Each guide includes examples, practice exercises, and memory tricks to help you learn effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/grammar"
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                Explore Grammar Topics
              </Link>
              <Link 
                href="/spelling"
                className="bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-colors border border-white/20"
              >
                Spelling Guides
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
