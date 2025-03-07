/*
  # Create Software Table

  1. New Tables
    - `software`
      - `id` (uuid, primary key)
      - `title` (text, required)
      - `category` (text, required)
      - `description` (text, required)
      - `icon_url` (text, required)
      - `preview_url` (text, required)
      - `website_url` (text, required)
      - `created_at` (timestamp with timezone, default: now())

  2. Security
    - Enable RLS on `software` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS software (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text NOT NULL,
  description text NOT NULL,
  icon_url text NOT NULL,
  preview_url text NOT NULL,
  website_url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE software ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access"
  ON software
  FOR SELECT
  TO public
  USING (true);

-- Insert some example data
INSERT INTO software (title, category, description, icon_url, preview_url, website_url) VALUES
(
  'Visual Studio Code',
  'Development',
  'A lightweight but powerful source code editor that runs on your desktop.',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=128&h=128&fit=crop',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=630&fit=crop',
  'https://code.visualstudio.com'
),
(
  'GIMP',
  'Graphics',
  'GNU Image Manipulation Program - A free and open source image editor.',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=128&h=128&fit=crop',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&h=630&fit=crop',
  'https://www.gimp.org'
),
(
  'VLC Media Player',
  'Multimedia',
  'Free and open source cross-platform multimedia player that plays most multimedia files.',
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=128&h=128&fit=crop',
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=630&fit=crop',
  'https://www.videolan.org/vlc/'
);