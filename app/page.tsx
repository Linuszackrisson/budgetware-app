import { supabase } from '@/lib/supabase';
import { Download, ExternalLink, ArrowRight, Code2, Wallet, BarChart3, FileSpreadsheet, Calculator, Star, Users, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/Header';

type Software = {
  id: string;
  title: string;
  category: string;
  description: string;
  icon_url: string;
  preview_url: string;
  website_url: string;
  created_at: string;
};

const featuredCategories = [
  {
    name: 'Development',
    icon: <Code2 className="w-6 h-6" />,
    description: 'Tools for developers and programmers',
    slug: 'development'
  },
  {
    name: 'Finance',
    icon: <Wallet className="w-6 h-6" />,
    description: 'Personal finance and money management',
    slug: 'finance'
  },
  {
    name: 'Analytics',
    icon: <BarChart3 className="w-6 h-6" />,
    description: 'Data analysis and visualization tools',
    slug: 'analytics'
  },
  {
    name: 'Accounting',
    icon: <FileSpreadsheet className="w-6 h-6" />,
    description: 'Professional accounting software',
    slug: 'accounting'
  }
];

const features = [
  {
    icon: <Star className="w-6 h-6" />,
    title: 'High Quality',
    description: 'Carefully curated selection of the best open-source budget software'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Community Driven',
    description: 'Backed by active communities ensuring continuous improvement'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Secure & Private',
    description: 'Open-source code means transparent security and privacy'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Always Free',
    description: 'No hidden costs or premium features, everything is free forever'
  }
];

async function getRecentSoftware() {
  try {
    const { data, error } = await supabase
      .from('software')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(3);
    
    if (error) {
      console.error('Error fetching software:', error);
      return [];
    }
    return data as Software[];
  } catch (error) {
    console.error('Error fetching software:', error);
    return [];
  }
}

export default async function Home() {
  const recentSoftware = await getRecentSoftware();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50" />
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8">
              Find the perfect
              <br />
              <span className="text-primary">budget software</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Discover high-quality free and open-source budget software for all your needs.
              Start saving money with the right tools today.
            </p>
            <Link
              href="/software"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Browse Software
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Open Source?</h2>
            <p className="text-xl text-muted-foreground">
              Experience the benefits of community-driven software development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-start p-8 bg-background/50 hover:bg-background/70 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recently Added Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4">Recently Added</h2>
              <p className="text-xl text-muted-foreground">The latest additions to our software directory</p>
            </div>
            <Link 
              href="/software" 
              className="mt-6 md:mt-0 text-primary hover:text-primary/80 transition-colors inline-flex items-center text-lg"
            >
              View all software
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {recentSoftware.map((app) => (
              <Link 
                key={app.id} 
                href={`/${app.id}`}
                className="group bg-secondary/30 hover:bg-secondary/40 transition-colors"
              >
                <div className="aspect-[16/9] w-full relative">
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
        </div>
      </section>

      {/* Browse by Category Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4">Browse by Category</h2>
              <p className="text-xl text-muted-foreground">Find software by your specific needs</p>
            </div>
            <Link 
              href="/software" 
              className="mt-6 md:mt-0 text-primary hover:text-primary/80 transition-colors inline-flex items-center text-lg"
            >
              View all categories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/software?category=${category.slug}`}
                className="group p-8 bg-background/50 hover:bg-background/70 transition-colors"
              >
                <div className="text-primary mb-6">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-3">
                  {category.name}
                </h3>
                <p className="text-muted-foreground">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-5xl font-bold mb-8">Ready to Start Saving?</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Browse our collection of free and open-source budget software and start managing your finances today.
          </p>
          <Link
            href="/software"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Find Your Perfect Software
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} BudgetWare. All software listed belongs to their respective owners.
          </p>
        </div>
      </footer>
    </div>
  );
}