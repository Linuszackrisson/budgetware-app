/*
  # Add sample software data

  1. New Data
    - Adds sample software entries with different categories
    - Each entry has title, description, category, and URLs for icons/previews
  
  2. Categories
    - Development
    - Finance
    - Analytics
    - Accounting
    - Calculator
*/

-- Insert sample software data
INSERT INTO software (id, title, category, description, icon_url, preview_url, website_url) 
VALUES 
  (
    'vscode-budget',
    'VS Code Budget',
    'development',
    'A Visual Studio Code extension for tracking project budgets and development costs.',
    'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=128&h=128&fit=crop',
    'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=630&fit=crop',
    'https://github.com/vscode-budget'
  ),
  (
    'money-tracker',
    'Money Tracker',
    'finance',
    'Open source personal finance manager with beautiful visualizations and expense tracking.',
    'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=128&h=128&fit=crop',
    'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&h=630&fit=crop',
    'https://github.com/money-tracker'
  ),
  (
    'budget-analytics',
    'Budget Analytics',
    'analytics',
    'Advanced analytics platform for visualizing and understanding your financial data.',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=128&h=128&fit=crop',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop',
    'https://github.com/budget-analytics'
  ),
  (
    'open-accounting',
    'Open Accounting',
    'accounting',
    'Professional-grade accounting software for small businesses and freelancers.',
    'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=128&h=128&fit=crop',
    'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=630&fit=crop',
    'https://github.com/open-accounting'
  ),
  (
    'finance-calc',
    'Finance Calculator',
    'calculator',
    'Comprehensive financial calculator for loans, investments, and retirement planning.',
    'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=128&h=128&fit=crop',
    'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&h=630&fit=crop',
    'https://github.com/finance-calc'
  );