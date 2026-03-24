import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Polygamy vs Polyamory: Understanding the Differences | Relationship Guide',
  description: 'Learn the key differences between polygamy and polyamory, including their definitions, legal status, and relationship dynamics. Perfect for understanding modern relationship structures.',
  keywords: 'polygamy vs polyamory, relationship types, multiple partners, relationship structures, polygamy polyamory differences',
}

export default function PolygamyVsPolyamoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            Polygamy vs Polyamory
          </h1>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl shadow-lg">
            <p className="text-xl md:text-2xl font-semibold">
              Understanding the differences between these relationship structures
            </p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800">
            <strong>Polygamy</strong> refers to marriage to multiple spouses simultaneously, often within a religious or cultural context, and is illegal in most Western countries. 
            <strong>Polyamory</strong> refers to consensual, ethical non-monogamous relationships where all partners are aware and consenting, regardless of marital status. 
            While both involve multiple partners, they have very different legal, cultural, and ethical implications.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-800 flex items-center">
              💍 Polygamy
            </h3>
            <ul className="text-lg md:text-xl text-blue-700 space-y-3">
              <li>• Multiple legal marriages</li>
              <li>• Often religious/cultural</li>
              <li>• Usually one man, multiple wives</li>
              <li>• Illegal in most countries</li>
              <li>• Hierarchical structure</li>
            </ul>
          </div>
          
          <div className="bg-pink-50 p-6 rounded-lg border-2 border-pink-200">
            <h3 className="text-xl font-semibold mb-4 text-pink-800 flex items-center">
              ❤️ Polyamory
            </h3>
            <ul className="text-lg md:text-xl text-pink-700 space-y-3">
              <li>• Consensual relationships</li>
              <li>• Modern relationship style</li>
              <li>• Equal partnership model</li>
              <li>• Legal in most countries</li>
              <li>• Non-hierarchical</li>
            </ul>
          </div>
        </div>

        {/* Key Differences */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Key Differences</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-blue-700">Legal Status</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                The legal implications are quite different:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>Polygamy:</strong> Illegal in most Western countries, considered bigamy</li>
                <li>• <strong>Polyamory:</strong> Legal as long as no multiple marriages are involved</li>
                <li>• <strong>Polygamy:</strong> Can result in criminal charges and prosecution</li>
                <li>• <strong>Polyamory:</strong> Protected under freedom of association laws</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-pink-700">Relationship Structure</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                The way relationships are organized differs significantly:
              </p>
              <ul className="text-lg md:text-xl text-gray-600 space-y-2 ml-6">
                <li>• <strong>Polygamy:</strong> Hierarchical with one primary partner</li>
                <li>• <strong>Polyamory:</strong> Equal partnerships with mutual consent</li>
                <li>• <strong>Polygamy:</strong> Often patriarchal structure</li>
                <li>• <strong>Polyamory:</strong> Democratic decision-making</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cultural Context */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Cultural Context</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">Polygamy Context</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Religious:</strong> Often practiced in certain religious communities
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Traditional:</strong> Rooted in historical and cultural practices
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Cultural:</strong> May be accepted in specific cultural contexts
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Polyamory Context</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Modern:</strong> Contemporary relationship philosophy
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Individual Choice:</strong> Personal relationship preference
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-lg text-gray-700">
                    <strong>Consent-Based:</strong> Emphasizes informed consent and communication
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ethical Considerations */}
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Ethical Considerations</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Polygamy:</strong> Often involves power imbalances and potential coercion</li>
            <li>• <strong>Polyamory:</strong> Emphasizes consent, communication, and equality</li>
            <li>• <strong>Polygamy:</strong> May involve underage or forced marriages</li>
            <li>• <strong>Polyamory:</strong> Requires ongoing consent and open communication</li>
          </ul>
        </div>

        {/* Modern Perspectives */}
        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-900">Modern Perspectives</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-indigo-800">Legal Recognition:</h3>
              <p className="text-lg md:text-xl text-indigo-700">Polygamy remains illegal, while polyamory gains acceptance</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-indigo-800">Social Acceptance:</h3>
              <p className="text-lg md:text-xl text-indigo-700">Polyamory increasingly recognized as valid relationship choice</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-purple-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 text-purple-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Are polygamy and polyamory the same thing?
                  </h3>
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-purple-700">A:</span> No, they are very different. Polygamy involves multiple legal marriages (usually one man with multiple wives) and is illegal in most countries. Polyamory involves consensual, ethical non-monogamous relationships where all partners are aware and consenting, regardless of marital status. The key difference is consent and legal status.
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
                    Is polyamory legal?
                  </h3>
                  <div className="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-pink-700">A:</span> Yes, polyamory is legal in most countries as long as it doesn&apos;t involve multiple legal marriages. Polyamorous relationships are protected under freedom of association laws. However, polygamy (multiple legal marriages) is illegal in most Western countries and can result in criminal charges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-l-4 border-blue-500 rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-600 rounded-full p-3 flex-shrink-0">
                  <span className="text-xl font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Why is polygamy illegal?
                  </h3>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-blue-700">A:</span> Polygamy is illegal primarily because it often involves power imbalances, potential coercion, and can lead to issues with inheritance, child custody, and legal rights. It&apos;s also seen as undermining the traditional marriage contract. However, some argue that the ban is based on religious and cultural biases rather than objective legal concerns.
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
                    How do polyamorous relationships work?
                  </h3>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-green-700">A:</span> Polyamorous relationships are based on consent, communication, and honesty. All partners are aware of each other and consent to the arrangement. Relationships can take many forms: triads (three people), quads (four people), or networks where people have multiple independent relationships. The key is that everyone involved knows about and agrees to the arrangement.
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
                    Can polyamorous people get married?
                  </h3>
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      <span className="font-semibold text-orange-700">A:</span> Yes, polyamorous people can get married to one person, but they cannot legally marry multiple people simultaneously. Many polyamorous individuals choose not to marry at all, while others may have a primary partner they marry and additional romantic relationships outside of marriage. The key is that all relationships are consensual and ethical.
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
