import fs from "fs";
import path from "path";
import {
	baseUrl,
	SITEMAP_CONFIG,
	SitemapEntry,
	ChangeFrequency,
} from "./config";

export function scanDirectoryForSitemap(
	dirPath: string,
	routePrefix: string,
	priority: number = SITEMAP_CONFIG.highPriority,
	frequency: ChangeFrequency = SITEMAP_CONFIG.weekly,
	manualFolders?: string[],
): SitemapEntry[] {
	let folders: string[] = manualFolders || [];

	if (folders.length === 0) {
		const fullPath = path.join(process.cwd(), dirPath);
		try {
			if (fs.existsSync(fullPath)) {
				const items = fs.readdirSync(fullPath, { withFileTypes: true });
				folders = items
					.filter(
						(item) =>
							item.isDirectory() &&
							!item.name.startsWith("[") &&
							!item.name.startsWith("_"),
					)
					.map((item) => item.name);
			}
		} catch (error) {
			console.error(`Error scanning directory ${dirPath}:`, error);
		}
	}

	return folders.map((folder) => ({
		url: `${baseUrl}/${routePrefix}/${folder}`
			.replace(/\/+/g, "/")
			.replace("https:/", "https://"),
		lastModified: new Date(),
		changeFrequency: frequency,
		priority: priority,
	}));
}
