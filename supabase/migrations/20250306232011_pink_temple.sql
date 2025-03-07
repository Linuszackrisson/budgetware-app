/*
  # Create software table and add initial entries

  1. New Tables
    - `software`
      - `id` (uuid, primary key)
      - `title` (text)
      - `category` (text)
      - `description` (text)
      - `icon_url` (text)
      - `preview_url` (text)
      - `website_url` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `software` table
    - Add policy for public read access
*/

-- Create the software table
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

-- Create policy for public read access
CREATE POLICY "Allow public read access"
  ON software
  FOR SELECT
  TO public
  USING (true);

-- Insert initial software entries
INSERT INTO software (title, category, description, icon_url, preview_url, website_url) VALUES
(
  'Visual Studio Code',
  'Development',
  'A lightweight but powerful source code editor that runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and tools.',
  'https://images.unsplash.com/photo-1615044606239-76af716a3e2e?w=128&h=128&fit=crop',
  'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=630&fit=crop',
  'https://code.visualstudio.com'
),
(
  'GIMP',
  'Graphics',
  'GIMP is a cross-platform image editor available for GNU/Linux, OS X, Windows and more operating systems. It is free software, you can change its source code and distribute your changes.',
  'https://images.unsplash.com/photo-1592155931584-901ac15763e3?w=128&h=128&fit=crop',
  'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&h=630&fit=crop',
  'https://www.gimp.org'
),
(
  'VLC Media Player',
  'Multimedia',
  'VLC is a free and open source cross-platform multimedia player and framework that plays most multimedia files as well as DVDs, Audio CDs, VCDs, and various streaming protocols.',
  'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=128&h=128&fit=crop',
  'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=1200&h=630&fit=crop',
  'https://www.videolan.org/vlc/'
),
(
  'LibreOffice',
  'Office',
  'LibreOffice is a free and powerful office suite, and a successor to OpenOffice.org. Its clean interface and feature-rich tools help you unleash your creativity and enhance your productivity.',
  'https://images.unsplash.com/photo-1517842645767-c639042777db?w=128&h=128&fit=crop',
  'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?w=1200&h=630&fit=crop',
  'https://www.libreoffice.org'
),
(
  'Firefox',
  'Internet',
  'Mozilla Firefox is a free and open-source web browser developed by Mozilla. Firefox uses the Gecko layout engine to render web pages, which implements current and anticipated web standards.',
  'https://images.unsplash.com/photo-1583105485695-2f142e38f5c7?w=128&h=128&fit=crop',
  'https://images.unsplash.com/photo-1581447109200-bf2769116351?w=1200&h=630&fit=crop',
  'https://www.mozilla.org/firefox/'
),
(
  'Audacity',
  'Audio',
  'Audacity is an easy-to-use, multi-track audio editor and recorder for Windows, macOS, GNU/Linux and other operating systems. Developed by a group of volunteers as open source.',
  'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=128&h=128&fit=crop',
  'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&h=630&fit=crop',
  'https://www.audacityteam.org'
);