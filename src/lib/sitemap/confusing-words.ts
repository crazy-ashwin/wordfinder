import { SitemapEntry } from "./config";
import { scanDirectoryForSitemap } from "./fs-scanner";
import { CONFUSING_WORDS_FOLDERS } from "./data";

export function getConfusingWordsPages(): SitemapEntry[] {
  // Captures all "vs" comparison pages in the confusing-words directory
  return scanDirectoryForSitemap("src/app/confusing-words", "confusing-words", undefined, undefined, CONFUSING_WORDS_FOLDERS);
}
