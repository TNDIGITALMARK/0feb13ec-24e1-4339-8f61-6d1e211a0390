/**
 * Number Generator Dashboard - Main Page
 * Pixel-perfect implementation of design reference
 */

'use client';

import React, { useState } from 'react';
import { Sparkles, BarChart3, Star, Smartphone } from 'lucide-react';
import { Header } from '@/components/header';
import { Navigation } from '@/components/navigation';
import { FeatureCard } from '@/components/ui/feature-card';
import { LotteryButton } from '@/components/ui/lottery-button';
import { LotteryBall } from '@/components/ui/lottery-ball';
import { generateLotteryNumbers, LOTTERY_GAMES, LotteryGameType } from '@/lib/lottery';
import type { LotteryNumbers } from '@/lib/lottery';

export default function Home() {
  const [selectedGame, setSelectedGame] = useState<LotteryGameType>('powerball');
  const [generatedNumbers, setGeneratedNumbers] = useState<LotteryNumbers | null>(null);

  const handleGenerate = () => {
    const numbers = generateLotteryNumbers(selectedGame);
    setGeneratedNumbers(numbers);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                UNLOCK YOUR LUCK:<br />
                THE ULTIMATE LOTTERY<br />
                NUMBER GENERATOR
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Generate random lottery numbers, track your encounters, and analyze patterns with our intelligent system.
              </p>

              <LotteryButton onClick={handleGenerate} size="lg">
                Generate Numbers
              </LotteryButton>
            </div>

            {/* Right: Phone Mockup with Number Display */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Phone Frame */}
                <div className="w-[280px] h-[560px] bg-card rounded-[48px] border-4 border-primary p-4 shadow-2xl">
                  <div className="w-full h-full bg-background rounded-[32px] p-6 flex flex-col items-center justify-center gap-8">
                    <Smartphone className="w-12 h-12 text-primary" />

                    {generatedNumbers ? (
                      <>
                        <div className="text-center space-y-4">
                          <p className="text-sm text-muted-foreground uppercase tracking-wider">
                            {LOTTERY_GAMES[selectedGame].name}
                          </p>
                          <div className="flex flex-wrap justify-center gap-3">
                            {generatedNumbers.mainNumbers.map((num, idx) => (
                              <LotteryBall key={idx} number={num} size="sm" />
                            ))}
                          </div>
                          {generatedNumbers.specialNumber && (
                            <div className="space-y-2">
                              <p className="text-xs text-muted-foreground">
                                {generatedNumbers.specialNumberName}
                              </p>
                              <div className="flex justify-center">
                                <LotteryBall
                                  number={generatedNumbers.specialNumber}
                                  size="sm"
                                  isSpecial
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </>
                    ) : (
                      <div className="grid grid-cols-3 gap-3">
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <LotteryBall key={num} number={num} size="sm" />
                        ))}
                      </div>
                    )}

                    <p className="text-xs text-center text-muted-foreground px-4">
                      Tap Generate to create your lucky numbers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Game Selection */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="bg-card/60 backdrop-blur-sm border border-primary/30 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">SELECT LOTTERY GAME</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {(Object.keys(LOTTERY_GAMES) as LotteryGameType[]).map((gameType) => (
                <button
                  key={gameType}
                  onClick={() => setSelectedGame(gameType)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedGame === gameType
                      ? 'border-primary bg-primary/10 scale-105'
                      : 'border-primary/30 hover:border-primary/60'
                  }`}
                >
                  <p className="font-semibold text-center">
                    {LOTTERY_GAMES[gameType].name}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center mb-4 uppercase">Features</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Everything you need to track your lottery journey
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Sparkles className="w-full h-full" />}
              title="Smart Algorithms"
              description="Advanced random number generation using cryptographically secure methods for truly random results."
            />
            <FeatureCard
              icon={<BarChart3 className="w-full h-full" />}
              title="Statistical Insights"
              description="Track your lottery history and analyze patterns with comprehensive charts and statistics."
            />
            <FeatureCard
              icon={<Star className="w-full h-full" />}
              title="Personalized Picks"
              description="Save your favorite numbers and track which combinations you've used over time."
            />
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center mb-16 uppercase">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full lottery-gradient-gold flex items-center justify-center text-3xl font-bold text-white mx-auto">
                1
              </div>
              <h3 className="text-xl font-semibold uppercase">Select Lottery</h3>
              <p className="text-muted-foreground">
                Choose from Powerball, Mega Millions, Pick 6, or Pick 3 lottery games.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full lottery-gradient-gold flex items-center justify-center text-3xl font-bold text-white mx-auto">
                2
              </div>
              <h3 className="text-xl font-semibold uppercase">Generate Numbers</h3>
              <p className="text-muted-foreground">
                Our algorithm creates truly random numbers based on the selected game rules.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full lottery-gradient-gold flex items-center justify-center text-3xl font-bold text-white mx-auto">
                3
              </div>
              <h3 className="text-xl font-semibold uppercase">Track Results</h3>
              <p className="text-muted-foreground">
                Log your encounters and analyze your lottery history with detailed insights.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-card/60 backdrop-blur-sm border border-primary rounded-3xl p-12 text-center space-y-6">
            <h2 className="text-3xl font-bold uppercase">Ready to Change Your Fortune?</h2>
            <p className="text-xl text-muted-foreground">
              Start generating your lucky numbers today
            </p>
            <LotteryButton onClick={handleGenerate} size="lg">
              Generate Now
            </LotteryButton>
          </div>
        </section>
      </main>
      <Navigation />
    </>
  );
}