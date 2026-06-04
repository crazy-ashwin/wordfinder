import { SitemapEntry } from "./config";
import { scanDirectoryForSitemap } from "./fs-scanner";
import { GRAMMAR_FOLDERS } from "./data";

export function getGrammarPages(): SitemapEntry[] {
  // We use the filesystem scanner with a manual fallback for production
  return scanDirectoryForSitemap("src/app/grammar", "grammar", undefined, undefined, GRAMMAR_FOLDERS);
}
