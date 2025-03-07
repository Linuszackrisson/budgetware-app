import { Header } from '@/components/Header';
import { supabase } from '@/lib/supabase';
import { Code2, ExternalLink, Wallet, BarChart3, FileSpreadsheet, Calculator, Layers } from 'lucide-react';
import Link from 'next/link';

type Software = {
  id: string;
  title: string;
  category: string;
  description: string;
  icon_url: string;
  preview_url: string;
  website_url: string;
};

type CategoryInfo = {
  name: string;
  icon: React.ReactNode;
  description: string;
};

const categories: Record<string, CategoryInfo> = {
  all: {
    name: 'All Software',
    icon: <Layers className="w-8 h-8" />,
    description: 'Browse our complete collection of budget software'
  },
  development: {
    name: 'Development',
    icon: <Code2 className="w-8 h-8" />,
    description: 'Tools for developers and programmers'
  },
  finance: {
    name: 'Finance',
    icon: <Wallet className="w-8 h-8" />,
    description: 'Personal finance and money management'
  },
  analytics: {
    name: 'Analytics',
    icon: <BarChart3 className="w-8 h-8" />,
    description: 'Data analysis and visualization tools'
  },
  accounting: {
    name: 'Accounting',
    icon: <FileSpreadsheet className="w-8 h-8" />,
    description: 'Professional accounting software'
  },
  calculator: {
    name: 'Calculators',
    icon: <Calculator className="w-8 h-8" />,
    description: 'Financial calculators and tools'
  }
};

async function getSoftware(category?: string, search?: string) {
  try {
    let query = supabase.from('software').select('*');
    
    if (search) {
      query = query.or(`title.ilike.%${search}%,description.ilike.%${search}%`);
    }
    
    const { data, error } = await query;
    
    if (error) {
      console.error('Error fetching software:', error);
      return [];
    }

    let filteredData = data as Software[];
    
    if (category && category !== 'all') {
      filteredData = filteredData.filter(
        app => app.category.toLowerCase() === category.toLowerCase()
      );
    }

    return filteredData;
  } catch (error) {
    console.error('Error fetching software:', error);
    return [];
  }
}

export default async function SoftwarePage({
  searchParams,
}: {
  searchParams?: { category?: string; search?: string };
}) {
  const currentCategory = searchParams?.category || 'all';
  const searchTerm = searchParams?.search;
  const software = await getSoftware(currentCategory, searchTerm);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-16">Software Categories</h1>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {Object.entries(categories).map(([key, category]) => (
            <Link
              key={key}
              href={`/software?category=${key}${searchTerm ? `&search=${searchTerm}` : ''}`}
              className={`flex flex-col items-center p-6 transition-colors ${
                currentCategory === key
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/30 hover:bg-secondary/50'
              }`}
            >
              <div className={currentCategory === key ? 'text-primary-foreground' : 'text-primary'}>
                {category.icon}
              </div>
              <h3 className="text-sm font-medium mt-4 text-center">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>

        {/* Current Category Title */}
        <div className="flex items-start gap-6 mb-12 p-8 bg-secondary/30">
          <div className="text-primary">
            {categories[currentCategory].icon}
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">
              {searchTerm ? `Search results in ${categories[currentCategory].name}` : categories[currentCategory].name}
            </h2>
            <p className="text-muted-foreground">
              {searchTerm 
                ? `Showing results for "${searchTerm}"`
                : categories[currentCategory].description}
            </p>
          </div>
        </div>
        
        {/* Software Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {software.map((app) => (
            <Link 
              key={app.id} 
              href={`/${app.id}`}
              className="group bg-secondary/30 hover:bg-secondary/40 transition-colors"
            >
              <div className="aspect-[16/9] w-full">
                <img
                  src={app.preview_url}
                  alt={`${app.title} preview`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src={app.icon_url}
                    alt={`${app.title} icon`}
                    className="w-12 h-12 bg-background/50 p-2"
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {app.title}
                    </h3>
                    <span className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary">
                      {app.category}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 line-clamp-2">{app.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Free & Open Source</span>
                  <ExternalLink className="w-4 h-4 text-primary" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {software.length === 0 && (
          <div className="p-12 bg-secondary/30 text-center">
            <h3 className="text-lg font-semibold text-primary mb-2">No Software Found</h3>
            <p className="text-muted-foreground">
              {searchTerm 
                ? `No results found for "${searchTerm}" in ${categories[currentCategory].name.toLowerCase()}`
                : 'There are currently no software entries in this category.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}