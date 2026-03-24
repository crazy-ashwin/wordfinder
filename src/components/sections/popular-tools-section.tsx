import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shuffle, Target, Grid3X3, BookOpen, Calculator, Lightbulb } from "lucide-react"

export function PopularToolsSection() {
  const tools = [
    {
      title: "Anagram Solver",
      description: "Unscramble letters to find all possible anagrams and word combinations instantly.",
      icon: Shuffle,
      href: "/anagram-solver",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      features: ["Multiple word lengths", "Advanced filtering", "Real-time results"],
    },
    {
      title: "Word Unscrambler",
      description: "Turn jumbled letters into meaningful words for word games and puzzles.",
      icon: Target,
      href: "/word-unscrambler",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      features: ["Pattern matching", "Wildcard support", "Game-specific dictionaries"],
    },
    {
      title: "Crossword Solver",
      description: "Find words that fit your crossword puzzle patterns and clues perfectly.",
      icon: Grid3X3,
      href: "/crossword-solver",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      features: ["Clue analysis", "Pattern recognition", "Multiple solutions"],
    },
    {
      title: "Rhyme Finder",
      description: "Discover perfect rhymes and near-rhymes for poetry and songwriting.",
      icon: BookOpen,
      href: "/rhyme-finder",
      color: "text-green-600",
      bgColor: "bg-green-100",
      features: ["Perfect rhymes", "Near rhymes", "Syllable matching"],
    },
    {
      title: "Scrabble Calculator",
      description: "Calculate word scores and optimize your Scrabble gameplay strategy.",
      icon: Calculator,
      href: "/scrabble-calculator",
      color: "text-red-600",
      bgColor: "bg-red-100",
      features: ["Letter values", "Bonus calculations", "Strategy tips"],
    },
    {
      title: "Word Generator",
      description: "Generate random words for creative writing and brainstorming sessions.",
      icon: Lightbulb,
      href: "/word-generator",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
      features: ["Custom categories", "Length control", "Difficulty levels"],
    },
  ]

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Word Tools</h2>
          <p className="text-xl text-gray-600">Powerful tools to enhance your word game experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 ${tool.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <IconComponent className={`h-8 w-8 ${tool.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{tool.title}</h3>
                  <p className="text-gray-600 mb-4 text-center">{tool.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={tool.href} className="block">
                    <Button className={`w-full bg-white ${tool.color} border-2 hover:bg-gray-50`} variant="outline">
                      Try {tool.title}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
