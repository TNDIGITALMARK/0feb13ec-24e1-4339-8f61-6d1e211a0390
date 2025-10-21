/**
 * Lottery ball component
 * Circular number display with gold gradient
 */

import React from 'react';

interface LotteryBallProps {
  number: number;
  size?: 'sm' | 'md' | 'lg';
  isSpecial?: boolean;
}

export function LotteryBall({ number, size = 'md', isSpecial = false }: LotteryBallProps) {
  const sizeClasses = {
    sm: 'w-12 h-12 text-lg',
    md: 'w-16 h-16 text-2xl',
    lg: 'w-20 h-20 text-3xl'
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full lottery-gradient-gold flex items-center justify-center font-bold text-white border-2 border-white shadow-lg transition-transform duration-300 hover:scale-110 ${
        isSpecial ? 'ring-4 ring-accent/50' : ''
      }`}
    >
      {number}
    </div>
  );
}
