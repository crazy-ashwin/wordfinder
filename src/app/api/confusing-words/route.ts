import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Function to convert folder name to title
function folderToTitle(folderName: string) {
  // Split by -vs- first to separate the two main words
  const parts = folderName.split('-vs-')
  
  if (parts.length === 2) {
    // Capitalize first word
    const firstWord = parts[0].charAt(0).toUpperCase() + parts[0].slice(1).toLowerCase()
    // Capitalize second word
    const secondWord = parts[1].charAt(0).toUpperCase() + parts[1].slice(1).toLowerCase()
    
    const result = `${firstWord} Vs ${secondWord}`
    console.log(`Converting "${folderName}" to "${result}"`)
    return result
  }
  
  // Fallback for any other format
  const result = folderName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
  
  console.log(`Converting "${folderName}" to "${result}" (fallback)`)
  return result
}

// Function to determine category based on folder name
function getCategory(folderName: string) {
  const grammarWords = ['affect', 'their', 'to', 'who', 'further']
  const homophones = ['bear', 'stationary', 'weather', 'peel']
  const spelling = ['capitol', 'gray']
  const vocabulary = ['assure', 'attain', 'presumed', 'polygamy']
  const nature = ['aspen', 'eagle', 'llama']
  const food = ['nigiri']
  const sports = ['batter']

  const words = folderName.split('-')
  
  for (const word of words) {
    if (grammarWords.includes(word)) return 'Grammar'
    if (homophones.includes(word)) return 'Homophones'
    if (spelling.includes(word)) return 'Spelling'
    if (vocabulary.includes(word)) return 'Vocabulary'
    if (nature.includes(word)) return 'Nature'
    if (food.includes(word)) return 'Food'
    if (sports.includes(word)) return 'Sports'
  }
  
  return 'Vocabulary' // Default category
}

// Function to get icon based on category
function getIcon(category: string) {
  const iconMap: { [key: string]: string } = {
    'Grammar': '🎯',
    'Homophones': '🐻',
    'Spelling': '🏛️',
    'Vocabulary': '🤝',
    'Nature': '🌳',
    'Food': '🍣',
    'Sports': '⚾'
  }
  return iconMap[category] || '📚'
}

// Function to generate description based on title
function generateDescription(title: string) {
  const descriptions: { [key: string]: string } = {
    'Affect Vs Effect': 'Learn when to use affect (verb) Vs effect (noun) with clear examples.',
    'Bear Vs Bare': 'Understand the difference between bear (animal/carry) and bare (uncovered).',
    'Capitol Vs Capital': 'Distinguish between capitol (building) and capital (city/letter/money).',
    'Gray Vs Grey': 'Both spellings are correct - learn the regional preferences and usage.',
    'Stationary Vs Stationery': 'Stationary (not moving) Vs stationery (writing materials).',
    'Their Vs There': 'Their (possessive), there (location), and they\'re (contraction).',
    'To Vs Too': 'To (preposition) Vs too (also/excessively) - common confusion explained.',
    'Weather Vs Whether': 'Weather (atmospheric conditions) Vs whether (if/choice).',
    'Who Vs Whom': 'Who (subject) Vs whom (object) - proper usage in questions and clauses.',
    'Further Vs Farther': 'Further (abstract) Vs farther (physical distance) - when to use each.',
    'Assure Vs Ensure': 'Assure (promise), ensure (guarantee), and insure (financial protection).',
    'Attain Vs Obtain': 'Attain (achieve through effort) Vs obtain (get/acquire).',
    'Presumed Vs Assumed': 'Presumed (based on evidence) Vs assumed (taken for granted).',
    'Peel Vs Peal': 'Peel (remove skin) Vs peal (sound of bells) - homophones explained.',
    'Polygamy Vs Polyamory': 'Polygamy (multiple spouses) Vs polyamory (multiple relationships).',
    'Aspen Vs Birch': 'Compare aspen and birch trees - appearance, habitat, and uses.',
    'Eagle Vs Hawk': 'Eagle Vs hawk - size, hunting style, and habitat differences.',
    'Llama Vs Alpaca': 'Llama Vs alpaca - size, temperament, and fiber quality differences.',
    'Nigiri Vs Sashimi': 'Nigiri (rice with fish) Vs sashimi (raw fish only) - sushi types.',
    'Batter Vs Pitcher': 'Batter (hitter) Vs pitcher (thrower) - baseball positions explained.'
  }
  
  return descriptions[title] || `Learn the differences between ${title.toLowerCase()} with clear explanations and examples.`
}

export async function GET() {
  try {
    console.log('API called - generating confusing words...')
    // Get the confusing-words directory path
    const confusingWordsDir = path.join(process.cwd(), 'src/app/confusing-words')
    
    // Check if directory exists
    if (!fs.existsSync(confusingWordsDir)) {
      return NextResponse.json({ error: 'Confusing words directory not found' }, { status: 404 })
    }
    
    // Get all folders in the confusing-words directory
    const items = fs.readdirSync(confusingWordsDir)
    const folders = items.filter(item => {
      const itemPath = path.join(confusingWordsDir, item)
      return fs.statSync(itemPath).isDirectory() && item !== 'page.tsx'
    })
    
    // Generate the confusing words array
    const confusingWords = folders.map(folder => {
      const title = folderToTitle(folder)
      const category = getCategory(folder)
      const icon = getIcon(category)
      const description = generateDescription(title)
      
      return {
        title,
        path: folder,
        description,
        category,
        icon
      }
    })
    
    // Return the data
    return NextResponse.json({
      success: true,
      count: confusingWords.length,
      words: confusingWords
    })
    
  } catch (error) {
    console.error('Error reading confusing words directory:', error)
    return NextResponse.json(
      { error: 'Failed to read confusing words directory' }, 
      { status: 500 }
    )
  }
}
