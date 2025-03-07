'use client';

import { Search, Wallet, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useTransition, useState } from 'react';

export function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search')?.toString() || '');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    
    if (term) {
      params.set('search', term);
    } else {
      params.delete('search');
    }

    const targetPath = pathname === '/software' ? pathname : '/software';
    
    startTransition(() => {
      router.push(`${targetPath}?${params.toString()}`);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  const handleSearchClick = () => {
    handleSearch(searchTerm);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: '/software', label: 'Software' },
    { href: '/our-choice', label: 'Our Choice' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2.5 transition-opacity hover:opacity-90 shrink-0"
        >
          <div className="bg-primary/10 p-1.5 rounded-lg">
            <Wallet className="h-6 w-6 text-primary" />
          </div>
          <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
            BudgetWare
          </span>
        </Link>

        {/* Desktop Search and Nav */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-8">
          {/* Centered Search */}
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="relative group">
              <button
                type="button"
                onClick={handleSearchClick}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-hover:text-primary transition-colors"
              >
                <Search className="h-4 w-4" />
              </button>
              <input
                type="search"
                placeholder="Search software..."
                className="w-full bg-secondary/50 py-2 pl-9 pr-4 text-sm border border-border/50 
                         transition-all duration-200
                         placeholder:text-muted-foreground/70
                         focus:border-primary/50 focus:bg-secondary/70 focus:outline-none focus:ring-2 focus:ring-primary/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {isPending && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                </div>
              )}
            </div>
          </form>

          {/* Right-aligned Nav */}
          <nav className="flex items-center gap-1 shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-secondary/80 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40">
          <nav className="container py-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`px-4 py-2.5 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/80'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            {/* Mobile Search */}
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="relative group">
                <button
                  type="button"
                  onClick={handleSearchClick}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-hover:text-primary transition-colors"
                >
                  <Search className="h-4 w-4" />
                </button>
                <input
                  type="search"
                  placeholder="Search software..."
                  className="w-full bg-secondary/50 py-2.5 pl-9 pr-4 text-sm border border-border/50 
                         transition-all duration-200
                         placeholder:text-muted-foreground/70
                         focus:border-primary/50 focus:bg-secondary/70 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {isPending && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                  </div>
                )}
              </div>
            </form>
          </nav>
        </div>
      )}
    </header>
  );
}