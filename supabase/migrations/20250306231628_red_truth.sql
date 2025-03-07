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
      - `created_at` (timestamp)

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