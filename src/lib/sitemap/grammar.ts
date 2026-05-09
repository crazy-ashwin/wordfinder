import { SitemapEntry } from "./config";
import { scanDirectoryForSitemap } from "./fs-scanner";

export function getGrammarPages(): SitemapEntry[] {
  // We use the filesystem scanner to get all subdirectories in the grammar folder
  // Each subdirectory represents a grammar rule or category page
  return scanDirectoryForSitemap("src/app/grammar", "grammar");
}
