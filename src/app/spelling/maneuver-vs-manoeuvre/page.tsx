import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Maneuver or Manoeuvre - Which is Correct?",
  description: "Learn the correct spelling between &apos;maneuver&apos; and &apos;manoeuvre&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function ManeuverVsManoeuvrePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Maneuver or Manoeuvre</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
        Maneuver or Manoeuvre spelling: both are correct, but used in different regions and contexts.
        </p>
      </div>

      {/* Correct/Incorrect Cards - Image Style */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className="flex-1">
          <Card className="bg-green-50 border border-green-200 rounded-xl p-6 h-full flex flex-col justify-between shadow-none">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl">🇺🇸</span>
                <span className="text-2xl font-extrabold text-green-800">US</span>
              </div>
              <div className="text-3xl font-extrabold text-green-600 mb-2">Maneuver</div>
              <div className="text-lg md:text-xl text-gray-700">
                &quot;Maneuver&quot; is the standard spelling in American English.
              </div>
            </div>
          </Card>
        </div>
        <div className="flex-1">
          <Card className="bg-blue-50 border border-blue-200 rounded-xl p-6 h-full flex flex-col justify-between shadow-none">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl">🇬🇧</span>
                <span className="text-2xl font-extrabold text-blue-800">UK</span>
              </div>
              <div className="text-3xl font-extrabold text-blue-600 mb-2">Manoeuvre</div>
              <div className="text-lg md:text-xl text-gray-700">
                &quot;Manoeuvre&quot; is the standard spelling in British English.
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Definition */}
      <div className="space-y-8">
        <Card>
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Definition</div>
            <div className="mb-2 text-lg md:text-xl">
              <span className="font-bold">Maneuver/Manoeuvre</span> (noun/verb): (n) A movement or series of moves requiring skill and care; (v) to move skillfully or carefully; a tactical movement or operation.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The pilot performed a difficult maneuver.</li>
              <li>The pilot performed a difficult manoeuvre.</li>
              <li>They had to maneuver through the crowded streets.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;maneuver/manoeuvre&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Move</li>
                  <li>Tactic</li>
                  <li>Operation</li>
                  <li>Strategy</li>
                  <li>Technique</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Verbs:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Navigate</li>
                  <li>Steer</li>
                  <li>Direct</li>
                  <li>Guide</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Maneuver&quot; is preferred in American English, while &quot;manoeuvre&quot; is used in British English. Both are correct depending on the region.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it maneuver or manoeuvre?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Both are correct: &quot;maneuver&quot; (US), &quot;manoeuvre&quot; (UK).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce maneuver/manoeuvre?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Both are pronounced /məˈnuːvər/ (muh-NOO-vur).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does maneuver/manoeuvre mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">A movement or series of moves requiring skill and care; to move skillfully or carefully; a tactical movement or operation.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 