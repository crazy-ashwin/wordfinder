import { baseUrl, SITEMAP_CONFIG, SitemapEntry } from "./config";

export function getStaticPages(): SitemapEntry[] {
  const pages = [
    { url: "", priority: SITEMAP_CONFIG.criticalPriority, changeFrequency: SITEMAP_CONFIG.daily },
    { url: "search", priority: SITEMAP_CONFIG.highPriority, changeFrequency: SITEMAP_CONFIG.daily },
    { url: "spelling", priority: SITEMAP_CONFIG.highPriority, changeFrequency: SITEMAP_CONFIG.daily },
    { url: "grammar", priority: SITEMAP_CONFIG.highPriority, changeFrequency: SITEMAP_CONFIG.daily },
    { url: "blog", priority: SITEMAP_CONFIG.highPriority, changeFrequency: SITEMAP_CONFIG.daily },
    { url: "about", priority: 0.7, changeFrequency: SITEMAP_CONFIG.monthly },
    { url: "contact", priority: 0.7, changeFrequency: SITEMAP_CONFIG.monthly },
    { url: "terms", priority: 0.3, changeFrequency: SITEMAP_CONFIG.monthly },
    { url: "privacy", priority: 0.3, changeFrequency: SITEMAP_CONFIG.monthly },
    { url: "disclaimer", priority: 0.3, changeFrequency: SITEMAP_CONFIG.monthly },
    
    // Tools
    { url: "anagram-solver", priority: 0.8, changeFrequency: SITEMAP_CONFIG.weekly },
    { url: "crossword-solver", priority: 0.8, changeFrequency: SITEMAP_CONFIG.weekly },
    { url: "rhyme-finder", priority: 0.8, changeFrequency: SITEMAP_CONFIG.weekly },
    { url: "word-descrambler", priority: 0.8, changeFrequency: SITEMAP_CONFIG.weekly },
    { url: "word-generator", priority: 0.8, changeFrequency: SITEMAP_CONFIG.weekly },
    { url: "word-unscrambler", priority: 0.8, changeFrequency: SITEMAP_CONFIG.weekly },
    { url: "wordle-helper", priority: 0.8, changeFrequency: SITEMAP_CONFIG.weekly },
    { url: "scrabble-calculator", priority: 0.8, changeFrequency: SITEMAP_CONFIG.weekly },
    { url: "scrabble-dictionary", priority: 0.8, changeFrequency: SITEMAP_CONFIG.weekly },
    { url: "scrabble-words", priority: 0.8, changeFrequency: SITEMAP_CONFIG.weekly },
    { url: "words-with-friends-dictionary", priority: 0.8, changeFrequency: SITEMAP_CONFIG.weekly },
    { url: "words-with-letters", priority: 0.8, changeFrequency: SITEMAP_CONFIG.weekly },
    { url: "confusing-words", priority: 0.8, changeFrequency: SITEMAP_CONFIG.weekly },
    { url: "grammar-rules", priority: 0.8, changeFrequency: SITEMAP_CONFIG.weekly },
    { url: "eGFR-Calculator", priority: 0.5, changeFrequency: SITEMAP_CONFIG.monthly },
    { url: "encode-decode", priority: 0.5, changeFrequency: SITEMAP_CONFIG.monthly },
    { url: "word-finders", priority: 0.7, changeFrequency: SITEMAP_CONFIG.weekly },
    { url: "word-lists", priority: 0.7, changeFrequency: SITEMAP_CONFIG.weekly },
  ];

  return pages.map(page => ({
    url: `${baseUrl}/${page.url}`.replace(/\/$/, ""),
    lastModified: new Date(),
    priority: page.priority,
    changeFrequency: page.changeFrequency as any,
  }));
}
