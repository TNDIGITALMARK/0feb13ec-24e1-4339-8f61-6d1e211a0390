/**
 * Feature card component
 * Replicates the bordered gold cards from the design reference
 */

import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative bg-card/60 backdrop-blur-sm border border-primary rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 lottery-card-shadow hover:lottery-card-shadow-hover">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="w-16 h-16 flex items-center justify-center text-primary transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-foreground uppercase tracking-wide">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
