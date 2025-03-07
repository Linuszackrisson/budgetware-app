import { Header } from '@/components/Header';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Have questions or suggestions? We'd love to hear from you.
            </p>
          </div>
          
          <div className="bg-secondary/30 p-8 md:p-12">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-background py-3 px-4 border border-border/50 
                           transition-all duration-200
                           placeholder:text-muted-foreground/70
                           focus:border-primary/50 focus:bg-background/70 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-background py-3 px-4 border border-border/50 
                           transition-all duration-200
                           placeholder:text-muted-foreground/70
                           focus:border-primary/50 focus:bg-background/70 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full bg-background py-3 px-4 border border-border/50 
                           transition-all duration-200
                           placeholder:text-muted-foreground/70
                           focus:border-primary/50 focus:bg-background/70 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 px-6 hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}