import { Header } from '@/components/Header';
import { GraduationCap, BookOpen, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-4xl font-bold">About BudgetWare</h1>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-secondary/30 p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-primary" />
              Thesis Project
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              BudgetWare is a thesis project developed as part of a Master's degree program. The project aims to create a comprehensive directory of free and open-source budget software, making it easier for users to find the right financial tools for their needs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This platform serves as both an academic exploration of open-source software accessibility and a practical tool for users seeking budget management solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-secondary/30 p-8">
              <h3 className="text-xl font-semibold mb-4">Project Goals</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Simplify the discovery of budget software
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Promote open-source alternatives
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Support financial literacy
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Create a user-friendly platform
                </li>
              </ul>
            </div>

            <div className="bg-secondary/30 p-8">
              <h3 className="text-xl font-semibold mb-4">Research Focus</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  User experience in software discovery
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Open-source software adoption
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Digital financial tools accessibility
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Community-driven software development
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-secondary/30 p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              Get Involved
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We welcome feedback and contributions from the community. Whether you're a software developer, financial expert, or someone interested in open-source solutions, your input helps improve this platform.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-primary hover:text-primary/90 transition-colors"
            >
              Contact us to learn more
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}