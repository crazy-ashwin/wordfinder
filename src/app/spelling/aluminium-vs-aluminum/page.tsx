import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Aluminium or Aluminum - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;aluminium&quot; and &quot;aluminum&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AluminiumVsAluminumPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Aluminium or Aluminum</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;aluminium&quot; and &quot;aluminum&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-blue-500 bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🇬🇧</span>
              <h3 className="text-2xl font-bold text-blue-800">British: Aluminium</h3>
            </div>
            <p className="text-lg md:text-xl text-blue-700">&quot;Aluminium&quot; is the British English spelling with an extra &quot;i&quot; before the &quot;um.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🇺🇸</span>
              <h3 className="text-2xl font-bold text-green-800">American: Aluminum</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Aluminum&quot; is the American English spelling without the extra &quot;i.&quot;</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Aluminium (noun, British):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A lightweight, silvery-white metallic element with the symbol Al and atomic number 13.</p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-blue-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                  <li>• The <strong>aluminium</strong> can was recycled.</li>
                  <li>• <strong>Aluminium</strong> foil is commonly used in cooking.</li>
                  <li>• The aircraft was made of <strong>aluminium</strong> alloy.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Aluminum (noun, American):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A lightweight, silvery-white metallic element with the symbol Al and atomic number 13.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>aluminum</strong> can was recycled.</li>
                  <li>• <strong>Aluminum</strong> foil is commonly used in cooking.</li>
                  <li>• The aircraft was made of <strong>aluminum</strong> alloy.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-blue-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-blue-900">Aluminium:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Al (chemical symbol)</li>
                <li>• Light metal</li>
                <li>• Metallic element</li>
                <li>• Bauxite ore</li>
                <li>• Alumina</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Aluminum:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Al (chemical symbol)</li>
                <li>• Light metal</li>
                <li>• Metallic element</li>
                <li>• Bauxite ore</li>
                <li>• Alumina</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Aluminium</strong> is the British English spelling with an extra &quot;i.&quot;</li>
            <li>• <strong>Aluminum</strong> is the American English spelling without the extra &quot;i.&quot;</li>
            <li>• Both spellings refer to the same chemical element (Al).</li>
            <li>• The word comes from Latin &quot;alumen&quot; meaning &quot;alum.&quot;</li>
            <li>• Use the spelling appropriate for your target audience.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Which spelling is correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both are correct! &quot;Aluminium&quot; is British English, while &quot;aluminum&quot; is American English.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the difference?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: British spelling has an extra &quot;i&quot; (aluminium), while American spelling is shorter (aluminum).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Which spelling should I use?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use &quot;aluminium&quot; for British audiences and &quot;aluminum&quot; for American audiences.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Are they pronounced differently?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, British pronunciation is &quot;al-yoo-MIN-ee-um&quot; while American is &quot;uh-LOO-muh-num.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common uses of this element?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common uses include beverage cans, foil, aircraft construction, and building materials.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do the spellings differ?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The difference arose from different pronunciations and spelling reforms in the 19th century.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can I use either spelling in scientific writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use the spelling appropriate for your target journal or audience&apos;s location.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is aluminum/aluminium a common element?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, it&apos;s the most abundant metal in Earth&apos;s crust and the third most abundant element overall.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Aluminium</strong> is the British English spelling with an extra &quot;i,&quot; while <strong>aluminum</strong> is the American English spelling. Both refer to the same chemical element (Al). Choose the spelling appropriate for your target audience.</p>
      </div>
    </div>
  )
} 