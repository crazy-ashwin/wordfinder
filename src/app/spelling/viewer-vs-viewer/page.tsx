import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Viewer or Viewer - Which is Correct? | Word Finder',
  description: 'Learn about the word "viewer" and its correct spelling. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ViewerVsViewerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Viewer or Viewer</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Both &quot;viewer&quot; and &quot;viewer&quot; are spelled the same and are correct. There is no common misspelling for this word, but this page provides information about its meaning and usage.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Viewer</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Viewer&quot; is the correct spelling. It means a person who looks at or watches something, such as a television program or an event.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Viewer</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">There is no common misspelling for &quot;viewer&quot;. Both spellings are the same and correct.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Viewer (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A person who looks at or watches something, especially television.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The show attracted millions of <strong>viewers</strong>.</li>
                  <li>• Each <strong>viewer</strong> had a different opinion about the movie.</li>
                  <li>• The <strong>viewer</strong> enjoyed the art exhibition.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Viewer (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Same as above. There is no alternate spelling.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>viewer</strong> was impressed by the performance.</li>
                  <li>• The <strong>viewer</strong> paused the video to take notes.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Viewer:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Spectator</li>
                <li>• Observer</li>
                <li>• Watcher</li>
                <li>• Audience member</li>
                <li>• Onlooker</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Viewer:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• (Same as above)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Viewer</strong> is always spelled the same way.</li>
            <li>• It is a noun referring to a person who watches or looks at something.</li>
            <li>• There is no common misspelling for this word.</li>
            <li>• The word comes from the verb &quot;view&quot; plus the suffix &quot;-er&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is there a misspelling for &quot;viewer&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;viewer&quot; is always spelled the same way.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;viewer&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: A person who looks at or watches something, especially television or an event.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can I use &quot;viewer&quot; in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;viewer&quot; is correct in all contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Are there synonyms for &quot;viewer&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, such as spectator, observer, watcher, audience member, and onlooker.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Viewer</strong> is always spelled the same way and refers to a person who watches or looks at something. There is no alternate or incorrect spelling for this word.</p>
      </div>
    </div>
  )
} 