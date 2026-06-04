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
): SitemapEntry[] {
	const fullPath = path.join(process.cwd(), dirPath);
	let folders: string[] = [];

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

	// Fallback for production where src directory might not be available
	if (folders.length === 0) {
		try {
			// Map directory names to their corresponding text files in the root
			const textFileName =
				routePrefix === "confusing-words"
					? "confusing_words_folders.txt"
					: `${routePrefix}_folders.txt`;

			const textFilePath = path.join(process.cwd(), textFileName);

			if (fs.existsSync(textFilePath)) {
				const content = fs.readFileSync(textFilePath, "utf8");
				folders = content
					.split("\n")
					.map((line) => line.trim())
					.filter((line) => line.length > 0);
				console.log(
					`Loaded ${folders.length} folders from ${textFileName} for ${routePrefix}`,
				);
			}
		} catch (error) {
			console.error(
				`Error reading fallback file for ${routePrefix}:`,
				error,
			);
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
