import { Header } from '@/components/Header';
import { supabase } from '@/lib/supabase';
import { Download, ExternalLink, Award, Star } from 'lucide-react';
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

async function getFeaturedSoftware() {
  try {
    const { data, error } = await supabase
      .from('software')
      .select('*')
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

export default async function OurChoicePage() {
  const software = await getFeaturedSoftware();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
            <Award className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Our Top Picks</h1>
            <p className="text-lg text-muted-foreground mt-2">
              Discover our carefully curated selection of the best free and open-source budget software
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-12">
          {software.map((app, index) => (
            <Link 
              key={app.id} 
              href={`/${app.id}`}
              className="group bg-secondary/30"
            >
              <div className="grid md:grid-cols-2">
                <div className="image-container aspect-[4/3] md:aspect-auto relative">
                  <img
                    src={app.preview_url}
                    alt={`${app.title} preview`}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-4 left-4 bg-primary/90 px-3 py-1.5 text-sm font-medium text-primary-foreground">
                    #{index + 1} Top Pick
                  </div>
                </div>
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/10" />
                      <img
                        src={app.icon_url}
                        alt={`${app.title} icon`}
                        className="relative w-16 h-16 p-1.5"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {app.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-sm text-primary">
                          {app.category}
                        </span>
                        <div className="flex items-center gap-1 text-primary">
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {app.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Free & Open Source</span>
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}