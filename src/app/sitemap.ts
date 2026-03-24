import { MetadataRoute } from "next";
import { baseUrl } from "@/lib/constant";
import { supabase } from "@/lib/supabase";
import path from "path";
import fs from "fs";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	// Static pages
	const staticPages: MetadataRoute.Sitemap = [
		{
			url: `${baseUrl}/`,
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 1.0,
		},
		{
			url: `${baseUrl}/search`,
			lastModified: new Date(),
			changeFrequency: "hourly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/spelling`,
			lastModified: new Date(),
			changeFrequency: "hourly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/grammar`,
			lastModified: new Date(),
			changeFrequency: "hourly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/word-lists`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/word-finders`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/terms`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/privacy`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/disclaimer`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.7,
		},
	];

	// Fetch active listings from database
	let spellingPages: MetadataRoute.Sitemap = [];

	async function fetchAllSpellingEntries() {
    const allEntries: Array<{ slug: string; updated_at: string | null }> = [];
    const pageSize = 1000; // Supabase max rows per request
    let page = 0;
    let hasMore = true;
  
    while (hasMore) {
      const from = page * pageSize;
      const to = from + pageSize - 1;
  
      const { data, error } = await supabase
        .from("spelling_entries")
        .select("slug, updated_at")
        .eq("is_published", true)
        .order("updated_at", { ascending: false })
        .range(from, to);
  
      if (error) {
        console.error(`Error fetching spelling entries (page ${page}):`, error);
        break;
      }
  
      if (data && data.length > 0) {
        allEntries.push(...data);
        // If we got fewer rows than pageSize, we've reached the end
        hasMore = data.length === pageSize;
        page++;
      } else {
        hasMore = false;
      }
    }
  
    return allEntries;
  }


	try {
		const spellingEntries = await fetchAllSpellingEntries();
		spellingPages = spellingEntries.map((entry) => ({
			url: `${baseUrl}/spelling/${entry.slug}`,
			lastModified: entry.updated_at ? new Date(entry.updated_at).toISOString() : new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.9,
		}));
	} catch (error) {
		console.error("Error generating spelling sitemap:", error);
	}
  
  let grammarPages: MetadataRoute.Sitemap = [];

	const grammarDir = path.join(process.cwd(), "src/app/grammar");
    let grammarFolders: string[] = [];
    try {
      const items = fs.readdirSync(grammarDir, { withFileTypes: true });
      grammarFolders = items
        .filter((item) => item.isDirectory())
        .map((item) => item.name);
    } catch (error) {
      console.error("Error reading grammar directory:", error);
      grammarFolders = [];
    }

	grammarPages = grammarFolders.map((folder) => ({
		url: `${baseUrl}/grammar/${folder}`,
		lastModified: new Date(),
		changeFrequency: "weekly",
		priority: 0.9,
	}));


	return [...staticPages, ...spellingPages, ...grammarPages];
}
