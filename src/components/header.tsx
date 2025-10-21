/**
 * Header component with LUCKYGEN branding
 * Pixel-perfect replication of design reference header
 */

'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold tracking-widest text-foreground">
              LUCKYGEN
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors duration-300">
              Features
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors duration-300">
              How It Works
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors duration-300">
              Testimonials
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
