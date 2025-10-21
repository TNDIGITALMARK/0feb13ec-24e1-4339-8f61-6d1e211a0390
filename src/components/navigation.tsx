/**
 * Main navigation component
 * Provides navigation between the three main pages
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, History, BarChart3 } from 'lucide-react';

export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Generator', icon: Sparkles },
    { href: '/history', label: 'History', icon: History },
    { href: '/analysis', label: 'Analysis', icon: BarChart3 }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-primary/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-around py-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                  isActive
                    ? 'text-primary scale-110'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs font-medium uppercase tracking-wider">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
