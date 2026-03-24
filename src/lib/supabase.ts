import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface SpellingEntry {
	id: string;
	slug: string;
	title: string;
	description: string;
	keywords: string;
	correct_word: string;
	incorrect_word: string;
	correct_definition: string;
	incorrect_definition: string;
	correct_examples: string[];
	incorrect_examples: string[];
	synonyms_correct: string[];
	notes: string[];
	faqs: Array<{
		question: string;
		answer: string;
	}>;
	summary?: string;
	is_published: boolean;
	created_at: string;
	updated_at: string;
}
