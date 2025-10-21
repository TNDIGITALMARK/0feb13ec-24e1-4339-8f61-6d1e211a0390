/**
 * Lottery-themed button component
 * Pixel-perfect replication of design reference button styles
 */

import React from 'react';

interface LotteryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function LotteryButton({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: LotteryButtonProps) {
  const baseStyles = 'font-medium uppercase tracking-wide transition-all duration-300 ease-in-out rounded-xl';

  const variantStyles = {
    primary: 'lottery-gradient-gold text-white hover:shadow-lg hover:-translate-y-1 lottery-gold-glow',
    secondary: 'bg-card text-foreground border border-primary hover:bg-card/80',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-9 py-3.5 text-base',
    lg: 'px-12 py-4 text-lg'
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
