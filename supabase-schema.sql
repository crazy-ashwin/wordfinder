-- Create spelling_entries table
CREATE TABLE spelling_entries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(500) NOT NULL,
  description TEXT NOT NULL,
  keywords TEXT,
  correct_word VARCHAR(100) NOT NULL,
  incorrect_word VARCHAR(100) NOT NULL,
  correct_definition TEXT NOT NULL,
  incorrect_definition TEXT NOT NULL,
  correct_examples JSONB DEFAULT '[]',
  incorrect_examples JSONB DEFAULT '[]',
  synonyms_correct JSONB DEFAULT '[]',
  notes JSONB DEFAULT '[]',
  faqs JSONB DEFAULT '[]',
  summary TEXT,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_spelling_entries_slug ON spelling_entries(slug);
CREATE INDEX idx_spelling_entries_correct_word ON spelling_entries(correct_word);
CREATE INDEX idx_spelling_entries_incorrect_word ON spelling_entries(incorrect_word);

-- Enable Row Level Security
ALTER TABLE spelling_entries ENABLE ROW LEVEL SECURITY;

-- Create policies for spelling_entries
-- Allow public read access
CREATE POLICY "Allow public read access to spelling_entries" ON spelling_entries
  FOR SELECT USING (true);

-- Allow all operations (INSERT, UPDATE, DELETE) since we handle auth at API level
CREATE POLICY "Allow all operations on spelling_entries" ON spelling_entries
  FOR ALL USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_spelling_entries_updated_at
  BEFORE UPDATE ON spelling_entries
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
