import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { ArrowLeft, ExternalLink, Download } from 'lucide-react';
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
};

async function getSoftwareById(id: string): Promise<Software | null> {
  const { data, error } = await supabase
    .from('software')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) {
    return null;
  }

  return data as Software;
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const { data, error } = await supabase
    .from('software')
    .select('id');
  
  if (error || !data) {
    return [];
  }

  return data.map((software) => ({
    id: software.id,
  }));
}

export default async function SoftwareDetail({
  params,
}: {
  params: { id: string };
}) {
  const software = await getSoftwareById(params.id);

  if (!software) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/software"
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Directory
        </Link>

        <div className="bg-secondary/30">
          <div className="aspect-[21/9] w-full relative image-container">
            <img
              src={software.preview_url}
              alt={`${software.title} preview`}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-12">
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-primary/10" />
                <img
                  src={software.icon_url}
                  alt={`${software.title} icon`}
                  className="relative w-24 h-24 p-2"
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  {software.title}
                </h1>
                <div className="flex items-center gap-4">
                  <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary">
                    {software.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Free & Open Source
                  </span>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {software.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={software.website_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors gap-2"
              >
                <Download className="w-5 h-5" />
                Download Now
              </a>
              <a
                href={software.website_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-foreground hover:bg-secondary/80 transition-colors gap-2"
              >
                Visit Website
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}