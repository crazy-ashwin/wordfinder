import { SitemapEntry } from "./config";
import { scanDirectoryForSitemap } from "./fs-scanner";

export function getConfusingWordsPages(): SitemapEntry[] {
  // Captures all "vs" comparison pages in the confusing-words directory
  return scanDirectoryForSitemap("src/app/confusing-words", "confusing-words");
}
