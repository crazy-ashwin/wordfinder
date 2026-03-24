import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url);
		const slug = searchParams.get("slug");

		if (slug) {
			// Get specific entry by slug
			const { data, error } = await supabase
				.from("spelling_entries")
				.select("*")
				.eq("slug", slug)
				.single();

			if (error) {
				return NextResponse.json(
					{ error: "Entry not found" },
					{ status: 404 }
				);
			}

			return NextResponse.json(data);
		} else {
			// Get entries with pagination support
			const limit = parseInt(searchParams.get("limit") || "24", 10);
			const offset = parseInt(searchParams.get("offset") || "0", 10);
			const getTotal = searchParams.get("getTotal") === "true";

			// Build query with pagination
			const query = supabase
				.from("spelling_entries")
				.select("*", getTotal ? { count: "exact" } : undefined)
				.eq("is_published", true)
				.order("created_at", { ascending: false })
				.range(offset, offset + limit - 1);

			const { data, error, count } = await query;

			if (error) {
				return NextResponse.json(
					{ error: "Failed to fetch entries" },
					{ status: 500 }
				);
			}

			// Return paginated response with total count if requested
			if (getTotal) {
				return NextResponse.json({
					data: data || [],
					total: count || 0,
					limit,
					offset,
					hasMore: count ? offset + limit < count : false,
				});
			}

			return NextResponse.json(data || []);
		}
	} catch (error) {
		console.error("API Error:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { accessKey, ...entryData } = body;

		// Verify admin access using environment variable
		const adminKey = process.env.ADMIN_KEY;

		if (!adminKey || accessKey !== adminKey) {
			return NextResponse.json(
				{ error: "Unauthorized" },
				{ status: 401 }
			);
		}
		// Create entry
		const { data, error } = await supabase
			.from("spelling_entries")
			.insert([entryData])
			.select()
			.single();

		if (error) {
			return NextResponse.json(
				{ error: "Failed to create entry" },
				{ status: 500 }
			);
		}

		return NextResponse.json(data, { status: 201 });
	} catch (error) {
		console.error("API Error:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}

export async function PUT(request: NextRequest) {
	try {
		const body = await request.json();
		const { accessKey, id, ...entryData } = body;

		// Verify admin access using environment variable
		const adminKey = process.env.ADMIN_KEY;

		if (!adminKey || accessKey !== adminKey) {
			return NextResponse.json(
				{ error: "Unauthorized" },
				{ status: 401 }
			);
		}

		// Update entry
		const { data, error } = await supabase
			.from("spelling_entries")
			.update(entryData)
			.eq("id", id)
			.select()
			.single();

		if (error) {
			return NextResponse.json(
				{ error: "Failed to update entry" },
				{ status: 500 }
			);
		}

		return NextResponse.json(data);
	} catch (error) {
		console.error("API Error:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}

export async function DELETE(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url);
		const id = searchParams.get("id");
		const accessKey = searchParams.get("accessKey");

		if (!id || !accessKey) {
			return NextResponse.json(
				{ error: "Missing required parameters" },
				{ status: 400 }
			);
		}

		// Verify admin access using environment variable
		const adminKey = process.env.ADMIN_KEY;

		if (!adminKey || accessKey !== adminKey) {
			return NextResponse.json(
				{ error: "Unauthorized" },
				{ status: 401 }
			);
		}

		// Delete entry
		const { error } = await supabase
			.from("spelling_entries")
			.delete()
			.eq("id", id);

		if (error) {
			return NextResponse.json(
				{ error: "Failed to delete entry" },
				{ status: 500 }
			);
		}

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("API Error:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}
