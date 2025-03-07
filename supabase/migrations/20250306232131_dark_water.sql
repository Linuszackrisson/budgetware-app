/*
  # Create software table

  1. New Tables
    - `software`
      - `id` (uuid, primary key)
      - `title` (text, not null)
      - `category` (text, not null)
      - `description` (text, not null)
      - `icon_url` (text, not null)
      - `preview_url` (text, not null)
      - `website_url` (text, not null)
      - `created_at` (timestamptz, default: now())

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

ALTER TABLE software ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON software
  FOR SELECT
  TO public
  USING (true);

-- Insert sample data
INSERT INTO software (title, category, description, icon_url, preview_url, website_url) VALUES
(
  'Visual Studio Code',
  'Development',
  'A powerful and extensible code editor with built-in debugging support, git integration, and thousands of extensions.',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=128&h=128&fit=crop',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=630&fit=crop',
  'https://code.visualstudio.com'
),
(
  'Firefox Browser',
  'Web Browser',
  'A fast, private and secure web browser that blocks trackers, malware and cryptomining by default.',
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=128&h=128&fit=crop',
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=630&fit=crop',
  'https://www.mozilla.org/firefox'
),
(
  'GIMP',
  'Graphics',
  'A free and open-source image editor with professional-grade features for photo retouching, image composition, and image authoring.',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=128&h=128&fit=crop',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&h=630&fit=crop',
  'https://www.gimp.org'
);